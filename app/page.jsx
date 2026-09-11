'use client';
import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Sparkles, 
  ArrowRight, 
  TrendingUp, 
  FileText, 
  CheckCircle2, 
  Zap, 
  Repeat, 
  DollarSign, 
  Flame, 
  Lock,
  Building2,
  Users,
  Award
} from 'lucide-react';

export default function LandingPage() {
  const [proSpots] = useState(147);
  const [dailySpots] = useState(873);

  return (
    <div className="min-h-screen bg-[#030712] text-gray-100 selection:bg-emerald-500 selection:text-black">
      
      {/* ⚡ TOP BAR */}
      <header className="border-b border-gray-800/80 bg-[#030712]/90 backdrop-blur sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-3.5 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="text-xl font-black tracking-tight text-white flex items-center gap-1.5">
              <Zap className="h-5 w-5 text-emerald-400 fill-emerald-400" />
              MIFORGE
            </span>
            <span className="text-xs bg-emerald-950/60 border border-emerald-800/60 text-emerald-400 px-2.5 py-0.5 rounded-full font-mono">
              A MiLyfe Product
            </span>
          </div>
          <div className="flex items-center space-x-3 text-sm">
            <a href="https://mijaxx.fun" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white hidden sm:inline">
              MiJaxx Hub
            </a>
            <a 
              href="#pricing" 
              className="bg-emerald-500 hover:bg-emerald-400 text-black font-semibold px-4 py-1.5 rounded-lg transition-all text-xs sm:text-sm"
            >
              Join Founding Cohort
            </a>
          </div>
        </div>
      </header>

      {/* 🔴 SECTION 1: HERO & SCARCITY */}
      <section className="relative px-4 pt-12 pb-16 max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs sm:text-sm px-4 py-1.5 rounded-full mb-6 font-medium animate-pulse">
          <Flame className="w-4 h-4 text-amber-400" />
          Founding Member Phase: Dollar-for-Dollar $MLY Match Active
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight mb-6">
          Your Business Finances. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-teal-300">
            Automated by AI. Backed by Community.
          </span>
        </h1>

        <p className="text-gray-300 text-base sm:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
          MiForge automates your daily books, tracks invoice collections, and produces your 7:00 AM financial report.
          Founding members receive <strong className="text-white">100% of their subscription back in $MLY community credits.</strong>
        </p>

        {/* Live Counters */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto mb-10 text-left">
          <div className="bg-gray-900/90 border border-emerald-500/30 p-4 rounded-xl shadow-lg shadow-emerald-950/20">
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs text-emerald-400 font-mono font-bold tracking-wider uppercase">Pro Cohort</span>
              <span className="text-xs bg-emerald-950 text-emerald-300 px-2 py-0.5 rounded border border-emerald-800">Hard Cap: 200</span>
            </div>
            <div className="text-2xl font-bold text-white mb-1">{proSpots} / 200 <span className="text-xs text-gray-400 font-normal">spots left</span></div>
            <div className="w-full bg-gray-800 rounded-full h-2">
              <div className="bg-emerald-400 h-2 rounded-full" style={{ width: `${(proSpots/200)*100}%` }}></div>
            </div>
          </div>

          <div className="bg-gray-900/90 border border-cyan-500/30 p-4 rounded-xl shadow-lg shadow-cyan-950/20">
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs text-cyan-400 font-mono font-bold tracking-wider uppercase">Daily Cohort</span>
              <span className="text-xs bg-cyan-950 text-cyan-300 px-2 py-0.5 rounded border border-cyan-800">Cap: 1,000</span>
            </div>
            <div className="text-2xl font-bold text-white mb-1">{dailySpots} / 1,000 <span className="text-xs text-gray-400 font-normal">spots left</span></div>
            <div className="w-full bg-gray-800 rounded-full h-2">
              <div className="bg-cyan-400 h-2 rounded-full" style={{ width: `${(dailySpots/1000)*100}%` }}></div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#pricing" className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-400 text-black font-bold px-8 py-3.5 rounded-xl shadow-lg shadow-emerald-500/20 transition-all flex items-center justify-center gap-2">
            Claim Your Spot <ArrowRight className="w-5 h-5" />
          </a>
          <a href="#how-mly-works" className="w-full sm:w-auto border border-gray-700 hover:border-gray-500 text-gray-300 hover:text-white font-medium px-6 py-3.5 rounded-xl transition-all">
            How $MLY Works →
          </a>
        </div>
      </section>

      {/* 📦 SECTION 2: THE TWO PLANS */}
      <section id="pricing" className="py-16 px-4 bg-gray-950/60 border-y border-gray-800">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">Two Direct Plans. Zero Fluff.</h2>
            <p className="text-gray-400 text-sm sm:text-base">Both plans qualify for immediate 100% $MLY matching on signup & renewal.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            
            {/* DAILY PLAN */}
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-7 flex flex-col justify-between hover:border-cyan-500/50 transition-all">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-white">MiForge Daily</h3>
                  <span className="text-xs bg-cyan-950 text-cyan-400 px-2.5 py-1 rounded-full border border-cyan-800">1,000 Member Cap</span>
                </div>
                <div className="mb-6">
                  <span className="text-4xl font-extrabold text-white">$39</span>
                  <span className="text-gray-400 text-sm"> / year</span>
                  <p className="text-xs text-emerald-400 mt-1 font-mono">Matched with 39 $MLY on sign-up (Net $0)</p>
                </div>

                <ul className="space-y-3.5 text-sm text-gray-300 mb-8">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span><strong>Daily 7:00 AM AI Report:</strong> Delivered every business morning</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span><strong>Invoice & Collections Pulse:</strong> Track overdue accounts</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span><strong>3 AI Daily Action Items:</strong> Instant financial clarity</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span><strong>$300 $MLY Gift Challenge:</strong> Unlock via 261-day streak</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span><strong>39 $MLY Annual Renewal Match:</strong> Ongoing zero-net-cost</span>
                  </li>
                </ul>
              </div>

              <a 
                href="https://whop.com" 
                target="_blank" 
                rel="noreferrer"
                className="w-full text-center bg-gray-800 hover:bg-gray-700 text-cyan-300 border border-cyan-500/40 font-semibold py-3 rounded-xl transition-all"
              >
                Join Daily ($39/yr)
              </a>
            </div>

            {/* PRO PLAN */}
            <div className="bg-gradient-to-b from-gray-900 via-gray-900 to-emerald-950/30 border-2 border-emerald-500 rounded-2xl p-7 flex flex-col justify-between relative shadow-xl shadow-emerald-950/30">
              <div className="absolute -top-3.5 right-6 bg-emerald-500 text-black text-xs font-bold px-3 py-0.5 rounded-full uppercase tracking-wide">
                Strict 200 Spot Cap
              </div>

              <div>
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-white">MiForge Pro</h3>
                  <span className="text-xs bg-emerald-950 text-emerald-400 px-2.5 py-1 rounded-full border border-emerald-800">Founding Exclusive</span>
                </div>
                <div className="mb-6">
                  <span className="text-4xl font-extrabold text-white">$99</span>
                  <span className="text-gray-400 text-sm"> / year</span>
                  <p className="text-xs text-emerald-400 mt-1 font-mono">Matched with 99 $MLY on sign-up (Net $0)</p>
                </div>

                <ul className="space-y-3.5 text-sm text-gray-300 mb-8">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Full AI Bookkeeping Department:</strong> Unlimited 24/7 access</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Bank Sync & Automated Categorization:</strong> Real-time P&L</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Smart Receipt OCR:</strong> Instant tax write-off capture</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>$99/yr Price Lock Forever:</strong> Cohort 2 renews at $199</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Partner Starter Tier Included:</strong> ($299/mo value waived)</span>
                  </li>
                </ul>
              </div>

              <a 
                href="https://whop.com" 
                target="_blank" 
                rel="noreferrer"
                className="w-full text-center bg-emerald-500 hover:bg-emerald-400 text-black font-bold py-3 rounded-xl transition-all shadow-lg shadow-emerald-500/20"
              >
                Claim Pro Spot ($99/yr)
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* 🔄 SECTION 3: $MLY CIRCULAR ECONOMY EXPLANATION */}
      <section id="how-mly-works" className="py-16 px-4 max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-emerald-400 text-xs font-mono uppercase tracking-widest">Community Architecture</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-1 mb-3">
            How $MLY Makes You Whole — And More
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm sm:text-base">
            $MLY is the platform currency of MiLyfe. 1 $MLY is anchored to $1 USD in ecosystem value.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl">
            <div className="w-10 h-10 bg-emerald-500/10 border border-emerald-500/30 rounded-lg flex items-center justify-center text-emerald-400 mb-4 font-bold">1</div>
            <h4 className="text-lg font-bold text-white mb-2">Instant Dollar Match</h4>
            <p className="text-sm text-gray-400">
              Pay $39 or $99 for your membership and instantly receive 39 or 99 $MLY credits in your account. You start at net zero out of pocket.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl">
            <div className="w-10 h-10 bg-cyan-500/10 border border-cyan-500/30 rounded-lg flex items-center justify-center text-cyan-400 mb-4 font-bold">2</div>
            <h4 className="text-lg font-bold text-white mb-2">Circulate Locally</h4>
            <p className="text-sm text-gray-400">
              Spend your $MLY credits with other member businesses in Jacksonville and beyond. Businesses that accept $MLY receive an automatic 5% to 15% bonus.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl">
            <div className="w-10 h-10 bg-amber-500/10 border border-amber-500/30 rounded-lg flex items-center justify-center text-amber-400 mb-4 font-bold">3</div>
            <h4 className="text-lg font-bold text-white mb-2">Annual Renewal Loop</h4>
            <p className="text-sm text-gray-400">
              Founding members receive the match every renewal year. Your bookkeeping effectively remains free while keeping community capital moving.
            </p>
          </div>
        </div>

        {/* Challenge Box */}
        <div className="bg-gradient-to-r from-gray-900 via-emerald-950/40 to-gray-900 border border-emerald-500/40 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center sm:text-left">
            <span className="text-xs bg-emerald-950 text-emerald-400 border border-emerald-800 px-3 py-1 rounded-full font-mono">
              The 261-Day Habit Challenge
            </span>
            <h3 className="text-2xl font-bold text-white">Unlock $300 in Bonus $MLY</h3>
            <p className="text-sm text-gray-300 max-w-lg">
              Open your daily 7:00 AM report every business day for one full year. Hit all streak milestones and claim $300 $MLY credits.
            </p>
          </div>
          <div className="shrink-0 bg-gray-950/80 border border-emerald-500/50 px-6 py-4 rounded-xl text-center">
            <div className="text-3xl font-extrabold text-emerald-400">+$300</div>
            <div className="text-xs text-gray-400 font-mono mt-1">$MLY Reward</div>
          </div>
        </div>
      </section>

      {/* 📊 SECTION 4: DAILY REPORT PREVIEW */}
      <section className="py-16 px-4 bg-gray-950 border-t border-gray-800">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-cyan-400 text-xs font-mono uppercase tracking-wider">What You Wake Up To</span>
            <h2 className="text-3xl font-bold text-white mt-1">The Daily 7:00 AM AI Brief</h2>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 sm:p-8 shadow-2xl font-mono text-xs sm:text-sm">
            <div className="flex justify-between items-center pb-4 border-b border-gray-800 text-gray-400">
              <span className="flex items-center gap-2 text-emerald-400 font-bold">
                <Sparkles className="w-4 h-4" /> MIFORGE DAILY REPORT #104
              </span>
              <span>Today 07:00 AM EST</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-6">
              <div className="bg-gray-950 p-3.5 rounded-lg border border-gray-800">
                <div className="text-gray-400 text-xs">Unpaid Invoices</div>
                <div className="text-lg font-bold text-amber-400 mt-1">$4,850.00</div>
              </div>
              <div className="bg-gray-950 p-3.5 rounded-lg border border-gray-800">
                <div className="text-gray-400 text-xs">Deductions Logged</div>
                <div className="text-lg font-bold text-emerald-400 mt-1">$1,240.50</div>
              </div>
              <div className="bg-gray-950 p-3.5 rounded-lg border border-gray-800">
                <div className="text-gray-400 text-xs">Financial Health</div>
                <div className="text-lg font-bold text-cyan-400 mt-1">94 / 100</div>
              </div>
              <div className="bg-gray-950 p-3.5 rounded-lg border border-gray-800">
                <div className="text-gray-400 text-xs">$MLY Balance</div>
                <div className="text-lg font-bold text-white mt-1">138 $MLY</div>
              </div>
            </div>

            <div className="space-y-2 text-gray-300 bg-gray-950 p-4 rounded-lg border border-gray-800">
              <div className="text-white font-bold mb-1 flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-emerald-400" /> AI Priority Actions:
              </div>
              <div>• Auto-sent reminder for Invoice #1084 (ACME Corp — 5 days overdue).</div>
              <div>• Categorized $340 hardware expense as Section 179 tax deduction.</div>
              <div>• Streak status: Day 42/261 active. Next $MLY milestone in 8 days.</div>
            </div>
          </div>
        </div>
      </section>

      {/* 🏛️ SECTION 5: THE MILYFE & MIJAXX CONNECTION */}
      <section className="py-16 px-4 max-w-4xl mx-auto text-center">
        <Building2 className="w-10 h-10 text-emerald-400 mx-auto mb-4" />
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
          Built Inside MiLyfe. Grounded in Jacksonville.
        </h2>
        <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto mb-6 leading-relaxed">
          MiForge is not detached Silicon Valley software. It is the financial operating system for the 
          <strong> MiJaxx</strong> movement in Jacksonville, FL — where civic leadership and community wealth circulate together.
        </p>
        <div className="inline-flex items-center gap-4 text-xs sm:text-sm font-mono text-emerald-400">
          <span>• We the People Economy</span>
          <span>• Pilot City: Jax, FL</span>
          <span>• Open Worldwide</span>
        </div>
      </section>

      {/* ⚡ FOOTER */}
      <footer className="border-t border-gray-800 py-8 px-4 text-center text-xs text-gray-400 space-y-3">
        <div className="flex justify-center space-x-6">
          <a href="https://milyfe.fun" className="hover:text-white">MiLyfe.fun</a>
          <a href="https://mijaxx.fun" className="hover:text-white">MiJaxx.fun</a>
          <a href="mailto:support@milyfe.fun" className="hover:text-white">support@milyfe.fun</a>
        </div>
        <p>© {new Date().getFullYear()} MiForge — A MiLyfe Platform. All rights reserved.</p>
      </footer>

    </div>
  );
}
