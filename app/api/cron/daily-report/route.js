import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';
import Groq from 'groq-sdk';
import { Resend } from 'resend';

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY || '' });
const resend = new Resend(process.env.RESEND_API_KEY || '');

export async function GET(req) {
  try {
    // 1. Fetch all active members
    const { data: members, error } = await supabaseAdmin
      .from('members')
      .select('*')
      .eq('status', 'active');

    if (error || !members || members.length === 0) {
      return NextResponse.json({ message: 'No active members to process' });
    }

    for (const member of members) {
      const bizName = member.business_name || 'Your Business';
      
      // 2. Generate customized AI financial insights via Groq LLaMA-3
      let aiSummary = "All books balanced. Priority: review outstanding receivables and maximize write-offs.";
      
      if (process.env.GROQ_API_KEY) {
        try {
          const completion = await groq.chat.completions.create({
            messages: [
              {
                role: "system",
                content: "You are the MiForge AI Chief Financial Officer. Generate 3 concise, highly actionable bullet points for the business owner's daily 7:00 AM financial brief."
              },
              {
                role: "user",
                content: `Business: ${bizName}. Plan: ${member.plan_type}. Current $MLY Balance: ${member.mly_balance}. Current streak: ${member.streak_count} days.`
              }
            ],
            model: "llama3-8b-8192",
            temperature: 0.5,
            max_tokens: 180,
          });
          aiSummary = completion.choices[0]?.message?.content || aiSummary;
        } catch (aiErr) {
          console.error("Groq AI Error:", aiErr);
        }
      }

      // 3. Save report in daily_reports table
      await supabaseAdmin.from('daily_reports').insert({
        member_id: member.id,
        ai_summary: aiSummary,
        health_score: 92,
        unpaid_invoices_amount: 0.00,
        deductions_amount: 0.00,
      });

      // 4. Increment streak count
      await supabaseAdmin
        .from('members')
        .update({ streak_count: member.streak_count + 1 })
        .eq('id', member.id);

      // 5. Send daily brief email if Resend key is present
      if (process.env.RESEND_API_KEY) {
        await resend.emails.send({
          from: 'MiForge Daily <reports@milyfe.fun>',
          to: member.email,
          subject: `📊 7:00 AM Financial Brief — ${bizName} (Streak: Day ${member.streak_count + 1})`,
          html: `
            <div style="background-color: #030712; color: #f3f4f6; font-family: monospace; padding: 24px;">
              <h2 style="color: #10B981; margin: 0;">MIFORGE DAILY REPORT</h2>
              <p style="color: #9CA3AF; font-size: 12px; margin-top: 4px;">Business: ${bizName} | Streak: ${member.streak_count + 1}/261 Days</p>
              
              <div style="background-color: #111827; border: 1px solid #1F2937; padding: 16px; border-radius: 8px; margin: 16px 0;">
                <h4 style="color: #34D399; margin: 0 0 8px 0;">⚡ AI Priority Actions:</h4>
                <div style="color: #D1D5DB; font-size: 13px; line-height: 1.6; white-space: pre-wrap;">${aiSummary}</div>
              </div>

              <div style="background-color: #0F172A; border: 1px solid #0EA5E9; padding: 12px; border-radius: 8px; font-size: 12px; color: #38BDF8;">
                $MLY Community Balance: <strong>${member.mly_balance} $MLY</strong> (Usable across MiLyfe)
              </div>
            </div>
          `
        });
      }
    }

    return NextResponse.json({ success: true, processed: members.length });
  } catch (err) {
    console.error('Cron job error:', err);
    return NextResponse.json({ error: 'Daily report cron failed' }, { status: 500 });
  }
}
