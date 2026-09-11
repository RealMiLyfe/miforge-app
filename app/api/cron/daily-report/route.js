import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';
import { generateResilientAIInsight } from '@/lib/resilience';

export async function GET() {
  try {
    const { data: members, error } = await supabaseAdmin
      .from('members')
      .select('*')
      .eq('status', 'active');

    if (error || !members || members.length === 0) {
      return NextResponse.json({ message: 'No active members to process' });
    }

    for (const member of members) {
      const bizName = member.business_name || 'Your Business';
      const newStreak = (member.streak_count || 0) + 1;

      // Milestone calculations ($10, $25, $50, $75, $300)
      let milestoneBonus = 0;
      if (newStreak === 10) milestoneBonus = 10;
      if (newStreak === 50) milestoneBonus = 25;
      if (newStreak === 100) milestoneBonus = 50;
      if (newStreak === 200) milestoneBonus = 75;
      if (newStreak === 261) milestoneBonus = 300;

      // Resilient Multi-Tier AI generation
      const { summary } = await generateResilientAIInsight({
        bizName,
        streak: newStreak,
        painPoint: member.primary_pain || 'Tax write-offs',
        planType: member.plan_type
      });

      // Save report in daily_reports
      await supabaseAdmin.from('daily_reports').insert({
        member_id: member.id,
        ai_summary: summary,
        health_score: 94
      });

      // Update member streak and balance
      const newBalance = Number(member.mly_balance || 0) + milestoneBonus;
      await supabaseAdmin
        .from('members')
        .update({
          streak_count: newStreak,
          mly_balance: newBalance,
          updated_at: new Date().toISOString()
        })
        .eq('id', member.id);

      if (milestoneBonus > 0) {
        await supabaseAdmin.from('mly_ledger').insert({
          member_id: member.id,
          amount: milestoneBonus,
          entry_type: 'streak_bonus',
          description: `Streak Milestone Reward (Day ${newStreak})`
        });
      }
    }

    return NextResponse.json({ success: true, processed: members.length });
  } catch (err) {
    console.error('Report cron error:', err);
    return NextResponse.json({ error: 'Failed to generate reports' }, { status: 500 });
  }
}
