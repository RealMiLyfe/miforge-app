import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';
import { logServiceHealth } from '@/lib/resilience';

export const dynamic = 'force-dynamic';

export async function GET() {
  const logs = [];

  // 1. Database Health Check
  const dbStart = Date.now();
  const { data, error: dbError } = await supabaseAdmin.from('members').select('count').limit(1);
  const dbLatency = Date.now() - dbStart;

  if (dbError) {
    await logServiceHealth('supabase_database', 'degraded', dbLatency, dbError.message);
    logs.push({ service: 'database', status: 'degraded' });
  } else {
    await logServiceHealth('supabase_database', 'healthy', dbLatency);
    logs.push({ service: 'database', status: 'healthy', latency_ms: dbLatency });
  }

  // 2. Sentinel Audit Entry
  await supabaseAdmin.from('system_audit_logs').insert({
    event_type: 'sentinel_autonomous_heartbeat',
    details: {
      services_checked: logs,
      groq_active: !!process.env.GROQ_API_KEY,
      resend_active: !!process.env.RESEND_API_KEY,
      checked_at: new Date().toISOString()
    }
  });

  return NextResponse.json({ success: true, sentinel_status: 'operational', logs });
}
