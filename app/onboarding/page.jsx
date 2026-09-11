'use client';
import React, { useState, useEffect } from 'react';
import { Zap, CheckCircle2, ArrowRight } from 'lucide-react';

export default function OnboardingPage() {
  const [email, setEmail] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [monthlyInvoices, setMonthlyInvoices] = useState('1-10');
  const [primaryPain, setPrimaryPain] = useState('Organizing tax write-offs');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const emailParam = params.get('email');
    if (emailParam) setEmail(emailParam);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('/api/onboarding', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, businessName, monthlyInvoices, primaryPain })
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
      <div className="min-h-screen bg-[#030712] text-white flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-gray-900 border border-emerald-500/40 p-8 rounded-2xl text-center">
          <CheckCircle2 className="w-16 h-16 text-emerald-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">Profile Activated!</h2>
          <p className="text-gray-300 text-sm mb-6">
            Your business profile is locked in. Your first AI Daily Brief will arrive at <strong>7:00 AM EST</strong> tomorrow morning.
          </p>
          <a href="/" className="inline-block bg-emerald-500 text-black font-bold px-6 py-2.5 rounded-xl text-sm">
            Back to MiForge
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#030712] text-white flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-gray-900 border border-gray-800 p-8 rounded-2xl shadow-2xl">
        <div className="flex items-center gap-2 mb-2 text-emerald-400 font-bold text-sm font-mono">
          <Zap className="w-4 h-4" /> MIFORGE SETUP
        </div>
        <h1 className="text-2xl font-bold text-white mb-2">Configure Your AI Brief</h1>
        <p className="text-gray-400 text-xs mb-6">Takes 60 seconds. Customizes your daily morning financial intelligence.</p>

        <form onSubmit={handleSubmit} className="space-y-4 text-sm">
          <div>
            <label className="block text-gray-300 mb-1 text-xs">Your Email</label>
            <input 
              type="email" 
              required 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com" 
              className="w-full bg-gray-950 border border-gray-800 rounded-lg p-3 text-white focus:outline-none focus:border-emerald-500"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-1 text-xs">Business Name</label>
            <input 
              type="text" 
              required 
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
              placeholder="Acme Design Co." 
              className="w-full bg-gray-950 border border-gray-800 rounded-lg p-3 text-white focus:outline-none focus:border-emerald-500"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-1 text-xs">Average Monthly Invoices</label>
            <select 
              value={monthlyInvoices}
              onChange={(e) => setMonthlyInvoices(e.target.value)}
              className="w-full bg-gray-950 border border-gray-800 rounded-lg p-3 text-white focus:outline-none focus:border-emerald-500"
            >
              <option value="1-5">1 – 5 invoices / mo</option>
              <option value="5-20">5 – 20 invoices / mo</option>
              <option value="20-50">20 – 50 invoices / mo</option>
              <option value="50+">50+ invoices / mo</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-300 mb-1 text-xs">#1 Financial Focus Right Now</label>
            <select 
              value={primaryPain}
              onChange={(e) => setPrimaryPain(e.target.value)}
              className="w-full bg-gray-950 border border-gray-800 rounded-lg p-3 text-white focus:outline-none focus:border-emerald-500"
            >
              <option value="Organizing tax write-offs">Organizing tax write-offs & receipts</option>
              <option value="Chasing unpaid invoices">Chasing unpaid / overdue invoices</option>
              <option value="Understanding real-time profit">Understanding real-time profit & loss</option>
              <option value="Automating daily bookkeeping">Automating all daily bookkeeping</option>
            </select>
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-emerald-500 hover:bg-emerald-400 text-black font-bold py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 mt-6"
          >
            {loading ? 'Activating...' : 'Activate My Daily Reports'} <ArrowRight className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
}
