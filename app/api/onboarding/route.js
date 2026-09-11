import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';

export async function POST(req) {
  try {
    const { email, businessName, monthlyInvoices, primaryPain } = await req.json();

    if (!email || !businessName) {
      return NextResponse.json({ error: 'Email and business name required' }, { status: 400 });
    }

    const { error } = await supabaseAdmin
      .from('members')
      .update({
        business_name: businessName,
        updated_at: new Date().toISOString()
      })
      .eq('email', email);

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ error: 'Failed to process onboarding' }, { status: 500 });
  }
}
