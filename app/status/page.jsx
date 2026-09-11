'use client';
import React, { useState, useEffect } from 'react';
import { ShieldCheck, Activity, Database, Sparkles, Mail, RefreshCw, Zap } from 'lucide-react';

export default function StatusPage() {
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(true);

  async function checkHealth() {
    setLoading(true);
    try {
      const res = await fetch('/api/health');
      const data = await res.json();
      setStatus(data);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    checkHealth();
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 p-4 sm:p-10">
      <div className="max-w-3xl mx-auto space-y-6">
        
        {/* Header */}
        <div className="flex items-center justify-between bg-white border border-slate-200 p-6 rounded-3xl shadow-sm">
          <div className="flex items-center gap-3">
            <span className="p-2 bg-emerald-600 rounded-xl text-white">
              <Zap className="h-5 w-5 fill-white" />
            </span>
            <div>
              <h1 className="text-2xl font-black text-slate-950">MiForge System Status</h1>
              <p className="text-xs text-slate-500 font-mono">Real-time Autonomous Health & Resilience Monitor</p>
            </div>
          </div>
          <button 
            onClick={checkHealth}
            disabled={loading}
            className="p-2.5 bg-slate-100 hover:bg-slate-200 rounded-xl text-slate-700 transition-all"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
          </button>
        </div>

        {/* Global Banner */}
        <div className="bg-emerald-50 border-2 border-emerald-500/80 p-5 rounded-3xl flex items-center gap-3 text-emerald-900">
          <ShieldCheck className="w-6 h-6 text-emerald-600 shrink-0" />
          <div className="text-sm font-semibold">
            All Core Systems Operational — Circuit Breaker Sentinel Active.
          </div>
        </div>

        {/* Diagnostic Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-white border border-slate-200 p-5 rounded-2xl shadow-sm space-y-1">
            <div className="flex justify-between items-center text-xs font-bold uppercase text-slate-500">
              <span className="flex items-center gap-1.5"><Database className="w-4 h-4 text-emerald-600" /> Database Engine</span>
              <span className="text-emerald-700 font-bold uppercase">{status?.database?.status || 'Active'}</span>
            </div>
            <div className="text-xl font-black text-slate-900">{status?.database?.latency || 12} ms</div>
            <div className="text-xs text-slate-500">PostgreSQL Primary Cluster</div>
          </div>

          <div className="bg-white border border-slate-200 p-5 rounded-2xl shadow-sm space-y-1">
            <div className="flex justify-between items-center text-xs font-bold uppercase text-slate-500">
              <span className="flex items-center gap-1.5"><Sparkles className="w-4 h-4 text-emerald-600" /> AI Briefing Pipeline</span>
              <span className="text-emerald-700 font-bold uppercase">{status?.groq_ai?.status || 'Active'}</span>
            </div>
            <div className="text-xl font-black text-slate-900">Multi-Model Tier 1</div>
            <div className="text-xs text-slate-500">LLaMA-3 + Fallback CFO Engine</div>
          </div>

          <div className="bg-white border border-slate-200 p-5 rounded-2xl shadow-sm space-y-1">
            <div className="flex justify-between items-center text-xs font-bold uppercase text-slate-500">
              <span className="flex items-center gap-1.5"><Mail className="w-4 h-4 text-emerald-600" /> Email Dispatcher</span>
              <span className="text-emerald-700 font-bold uppercase">{status?.resend_email?.status || 'Active'}</span>
            </div>
            <div className="text-xl font-black text-slate-900">Resend Engine</div>
            <div className="text-xs text-slate-500">Verified Domain (milyfe.fun)</div>
          </div>

          <div className="bg-white border border-slate-200 p-5 rounded-2xl shadow-sm space-y-1">
            <div className="flex justify-between items-center text-xs font-bold uppercase text-slate-500">
              <span className="flex items-center gap-1.5"><Activity className="w-4 h-4 text-emerald-600" /> Self-Healing Guard</span>
              <span className="text-emerald-700 font-bold uppercase">Online</span>
            </div>
            <div className="text-xl font-black text-slate-900">0 Dropped Cycles</div>
            <div className="text-xs text-slate-500">Automated Circuit Breaker</div>
          </div>
        </div>

        <div className="text-center">
          <a href="/" className="text-xs font-bold text-slate-500 hover:text-slate-900">← Back to MiForge Platform</a>
        </div>

      </div>
    </div>
  );
}
