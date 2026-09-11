'use client';
import React, { useState, useEffect, Suspense } from 'react';
import { Zap, CheckCircle2, ArrowRight } from 'lucide-react';
import { useSearchParams } from 'next/navigation';

function OnboardingForm() {
  const searchParams = useSearchParams();
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [monthlyInvoices, setMonthlyInvoices] = useState('5-20');
  const [primaryPain, setPrimaryPain] = useState('Organizing tax write-offs');
  const [plan, setPlan] = useState('daily');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const emailParam = searchParams.get('email');
    const planParam = searchParams.get('plan');
    if (emailParam) setEmail(emailParam);
    if (planParam) setPlan(planParam);
  }, [searchParams]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('/api/onboarding', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          email, 
          fullName, 
          businessName, 
          monthlyInvoices, 
          primaryPain, 
          planType: plan 
        })
      });
      if (res.ok) setSubmitted(true);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="max-w-md w-full bg-white border-2 border-emerald-500 p-8 rounded-3xl text-center shadow-xl">
        <CheckCircle2 className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
        <h2 className="text-2xl font-black mb-2 text-slate-950">Founding Profile Active!</h2>
        <p className="text-slate-600 text-sm mb-6 leading-relaxed">
          Your profile is locked in. Your founding matching $MLY credits have been logged and your first AI Daily Report will arrive at <strong>7:00 AM EST</strong> tomorrow.
        </p>
        <div className="space-y-3">
          <a href={`/dashboard?email=${encodeURIComponent(email)}`} className="w-full inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-3.5 rounded-xl text-sm transition-all shadow">
            Open Member Dashboard →
          </a>
          <a href="/" className="w-full inline-block text-slate-500 hover:text-slate-900 text-xs font-medium">
            Back to Home
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-lg w-full bg-white border border-slate-300 p-8 sm:p-10 rounded-3xl shadow-xl">
      <div className="flex items-center gap-2 mb-2 text-emerald-700 font-bold text-xs uppercase tracking-wider font-mono">
        <Zap className="w-4 h-4 fill-emerald-600 text-emerald-600" /> MIFORGE 60-SECOND ONBOARDING
      </div>
      <h1 className="text-2xl sm:text-3xl font-black text-slate-950 mb-2">Configure Your AI Briefing</h1>
      <p className="text-slate-600 text-xs sm:text-sm mb-8">
        Selected Plan: <strong className="uppercase text-emerald-700">{plan}</strong> ({plan === 'pro' ? '$99/yr + 99 $MLY match' : '$39/yr + 39 $MLY match'})
      </p>

      <form onSubmit={handleSubmit} className="space-y-5 text-sm">
        <div>
          <label className="block text-slate-700 font-bold mb-1.5 text-xs">Your Full Name</label>
          <input 
            type="text" 
            required 
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Jane Doe" 
            className="w-full bg-slate-50 border border-slate-300 rounded-xl p-3.5 text-slate-900 focus:outline-none focus:border-emerald-600 focus:bg-white transition-all"
          />
        </div>

        <div>
          <label className="block text-slate-700 font-bold mb-1.5 text-xs">Email Address (Where reports arrive)</label>
          <input 
            type="email" 
            required 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@company.com" 
            className="w-full bg-slate-50 border border-slate-300 rounded-xl p-3.5 text-slate-900 focus:outline-none focus:border-emerald-600 focus:bg-white transition-all"
          />
        </div>

        <div>
          <label className="block text-slate-700 font-bold mb-1.5 text-xs">Business Name</label>
          <input 
            type="text" 
            required 
            value={businessName}
            onChange={(e) => setBusinessName(e.target.value)}
            placeholder="Acme Studios LLC" 
            className="w-full bg-slate-50 border border-slate-300 rounded-xl p-3.5 text-slate-900 focus:outline-none focus:border-emerald-600 focus:bg-white transition-all"
          />
        </div>

        <div>
          <label className="block text-slate-700 font-bold mb-1.5 text-xs">Average Monthly Invoices</label>
          <select 
            value={monthlyInvoices}
            onChange={(e) => setMonthlyInvoices(e.target.value)}
            className="w-full bg-slate-50 border border-slate-300 rounded-xl p-3.5 text-slate-900 focus:outline-none focus:border-emerald-600 focus:bg-white transition-all"
          >
            <option value="1-5">1 – 5 invoices / month</option>
            <option value="5-20">5 – 20 invoices / month</option>
            <option value="20-50">20 – 50 invoices / month</option>
            <option value="50+">50+ invoices / month</option>
          </select>
        </div>

        <div>
          <label className="block text-slate-700 font-bold mb-1.5 text-xs">#1 Financial Focus Right Now</label>
          <select 
            value={primaryPain}
            onChange={(e) => setPrimaryPain(e.target.value)}
            className="w-full bg-slate-50 border border-slate-300 rounded-xl p-3.5 text-slate-900 focus:outline-none focus:border-emerald-600 focus:bg-white transition-all"
          >
            <option value="Organizing tax write-offs">Organizing tax write-offs & receipts</option>
            <option value="Chasing unpaid invoices">Chasing unpaid / overdue invoices</option>
            <option value="Understanding real-time profit">Understanding real-time profit & loss</option>
            <option value="Automating all daily bookkeeping">Automating all daily bookkeeping</option>
          </select>
        </div>

        <button 
          type="submit" 
          disabled={loading}
          className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-emerald-600/20 flex items-center justify-center gap-2 mt-6 text-base"
        >
          {loading ? 'Activating Profile...' : 'Lock In My Founding Membership'} <ArrowRight className="w-5 h-5" />
        </button>
      </form>
    </div>
  );
}

export default function OnboardingPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex items-center justify-center p-4 py-12">
      <Suspense fallback={<div className="text-slate-500 font-bold">Loading setup...</div>}>
        <OnboardingForm />
      </Suspense>
    </div>
  );
}
