/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PiggyBank, Mail, KeyRound, CheckCircle2, FileSliders, ArrowRight, UserCheck, BookOpen, HeartHandshake, Copy, Check } from 'lucide-react';

interface SponsorROIProps {
  lang: 'en' | 'fa' | 'ar';
  t: Record<string, string>;
}

export default function SponsorROI({ lang, t }: SponsorROIProps) {
  // Calculator states
  const [userCount, setUserCount] = useState<number>(50000);
  const [retentionMultiplier, setRetentionMultiplier] = useState<number>(18); // 18% improvement mockup
  const [supportSavings, setSupportSavings] = useState<number>(10000); // dollars or localized units

  // Form states
  const [sponsorName, setSponsorName] = useState('');
  const [sponsorEmail, setSponsorEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [subSuccess, setSubSuccess] = useState(false);
  const [secureToken, setSecureToken] = useState('');
  const [copied, setCopied] = useState(false);

  // Calculate annual projected value delivery mockup
  const calculateAnnualValue = () => {
    // Valuation model mock: users * (retentionMultiplier/100) * 12 + supportSavings
    const netRetVal = userCount * (retentionMultiplier / 100) * 1.5;
    return Math.round(netRetVal + supportSavings * 2.5);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!sponsorName || !sponsorEmail) return;

    setIsSubmitting(true);
    // Simulate high-grade cryptographic encryption & database storage
    setTimeout(() => {
      const generatedToken = 'NDA-' + Math.random().toString(36).substring(2, 10).toUpperCase() + '-SECURE';
      setSecureToken(generatedToken);
      setIsSubmitting(false);
      setSubSuccess(true);
    }, 2000);
  };

  const formattedValue = () => {
    const val = calculateAnnualValue();
    if (lang === 'fa') {
      return (val * 50).toLocaleString('fa-IR') + ' دلار / معادل ریالی';
    } else if (lang === 'ar') {
      return '$' + val.toLocaleString('en-US') + ' USD / قيمة تقديرية';
    }
    return '$' + val.toLocaleString('en-US');
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-16 border-t border-slate-900/60" id="roi-section">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start" dir={lang === 'en' ? 'ltr' : 'rtl'}>
        
        {/* Sliders ROI Calculator */}
        <div className="lg:col-span-6 bg-slate-900/30 border border-slate-800/80 rounded-3xl p-8 backdrop-blur-md space-y-6 text-start">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-teal-400">
              <FileSliders className="w-5 h-5" />
              <span className="font-mono text-xs uppercase tracking-wider font-bold">
                {lang === 'en' ? 'PROJECTION SIMULATOR' : lang === 'fa' ? 'ابزار برآورد بازگشت سرمایه' : 'أداة تقدير العائد المالي البصري'}
              </span>
            </div>
            <h3 className="text-2xl font-sans font-bold text-white leading-tight">
              {t.roiTitle}
            </h3>
            <p className="text-slate-400 text-xs font-sans">
              {t.roiSub}
            </p>
          </div>

          <div className="space-y-6 pt-4 font-sans">
            {/* User count slider */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-semibold text-slate-300">
                <span>{t.metric1Label}</span>
                <span className="text-teal-400 font-mono">
                  {lang === 'fa' ? userCount.toLocaleString('fa-IR') : userCount.toLocaleString('en-US')}
                </span>
              </div>
              <input
                type="range"
                min="1000"
                max="500000"
                step="5000"
                value={userCount}
                onChange={(e) => setUserCount(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                <span>1K</span>
                <span>500K</span>
              </div>
            </div>

            {/* Retention increment slider */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-semibold text-slate-300">
                <span>{t.metric2Label}</span>
                <span className="text-teal-400 font-mono">
                  +{lang === 'fa' ? retentionMultiplier.toLocaleString('fa-IR') : retentionMultiplier}%
                </span>
              </div>
              <input
                type="range"
                min="5"
                max="60"
                step="1"
                value={retentionMultiplier}
                onChange={(e) => setRetentionMultiplier(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                <span>+5%</span>
                <span>+60%</span>
              </div>
            </div>

            {/* Traditional staffing cost saved */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-semibold text-slate-300">
                <span>{t.metric3Label}</span>
                <span className="text-teal-400 font-mono">
                  {lang === 'fa' 
                    ? (supportSavings * 50).toLocaleString('fa-IR') + ' دلار' 
                    : lang === 'ar'
                    ? '$' + supportSavings.toLocaleString('en-US') + ' دولار'
                    : '$' + supportSavings.toLocaleString('en-US')}
                </span>
              </div>
              <input
                type="range"
                min="1000"
                max="100000"
                step="2000"
                value={supportSavings}
                onChange={(e) => setSupportSavings(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                <span>$1K</span>
                <span>$100K</span>
              </div>
            </div>
          </div>

          {/* Calculator Result Box */}
          <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 font-sans">
            <div>
              <div className="text-slate-500 text-[11px] uppercase font-bold tracking-wider mb-1">
                {t.roiResultLabel}
              </div>
              <div className="text-white text-2xl font-bold font-mono tracking-tight transition-all duration-300">
                {formattedValue()}
              </div>
            </div>
            <div className="bg-teal-500/10 p-3 rounded-xl border border-teal-500/20 text-teal-400">
              <PiggyBank className="w-6 h-6" />
            </div>
          </div>
        </div>

        {/* NDA & Secure Sponsor RFP form */}
        <div className="lg:col-span-6 bg-slate-900/30 border border-slate-800/80 rounded-3xl p-8 backdrop-blur-md text-start">
          <div className="space-y-2 mb-6">
            <div className="flex items-center gap-2 text-indigo-400">
              <KeyRound className="w-5 h-5 animate-pulse" />
              <span className="font-mono text-xs uppercase tracking-wider font-bold">
                {lang === 'en' ? 'ENCRYPTED PROPOSAL PORTAL' : lang === 'fa' ? 'فرم جذب اسپانسر و توافق معنوی' : 'بوابة العقود ومقترحات الاستثمار المشفرة'}
              </span>
            </div>
            <h3 className="text-2xl font-sans font-bold text-white leading-tight">
              {t.sponsorFormTitle}
            </h3>
            <p className="text-slate-400 text-xs font-sans">
              {t.sponsorFormSub}
            </p>
          </div>

          <AnimatePresence mode="wait">
            {!subSuccess ? (
              <motion.form
                key="rfp-form"
                onSubmit={handleFormSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-4 font-sans"
              >
                <div className="space-y-1.5 text-start">
                  <label className="text-xs font-semibold text-slate-300">
                    {t.sponsorName}
                  </label>
                  <input
                    type="text"
                    required
                    value={sponsorName}
                    onChange={(e) => setSponsorName(e.target.value)}
                    placeholder={lang === 'en' ? 'e.g. Siavash Hamiri' : lang === 'fa' ? 'مثال: سیاوش حمیری' : 'مثال: سياوش حميري'}
                    className="w-full px-4 py-3 bg-slate-950 text-slate-200 text-sm rounded-xl border border-slate-800 focus:outline-none focus:border-indigo-500/80 transition-all duration-200"
                  />
                </div>

                <div className="space-y-1.5 text-start">
                  <label className="text-xs font-semibold text-slate-300">
                    {t.sponsorEmail}
                  </label>
                  <input
                    type="email"
                    required
                    value={sponsorEmail}
                    onChange={(e) => setSponsorEmail(e.target.value)}
                    placeholder="sponsor@domain.com"
                    className="w-full px-4 py-3 bg-slate-950 text-slate-200 text-sm rounded-xl border border-slate-800 focus:outline-none focus:border-indigo-500/80 transition-all duration-200"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || !sponsorName || !sponsorEmail}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-4 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs rounded-xl disabled:opacity-40 transition-colors cursor-pointer"
                >
                  {isSubmitting ? (
                    <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>{t.sendRequest}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </motion.form>
            ) : (
              <motion.div
                key="rfc-success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-slate-950/80 border border-emerald-500/20 p-6 rounded-2xl space-y-4 font-sans text-start"
              >
                <div className="flex items-center gap-3 text-emerald-400">
                  <CheckCircle2 className="w-8 h-8" />
                  <div>
                    <h4 className="font-bold text-sm text-slate-100">
                      {lang === 'en' ? 'Secure Connection Initiated' : lang === 'fa' ? 'لایه‌ی امنیتی فعال شد' : 'تم تفعيل الاتصال الآمن'}
                    </h4>
                    <span className="text-[10px] text-slate-500 font-mono">{secureToken}</span>
                  </div>
                </div>

                <p className="text-slate-400 text-xs leading-relaxed">
                  {t.ndaSuccess}
                </p>

                <div className="bg-slate-900 p-4 rounded-xl border border-slate-800/60 font-mono text-[10px] space-y-1">
                  <div className="text-teal-400 font-bold uppercase mb-1">PGP Verification Stream</div>
                  <div className="text-slate-500">CLIENT: {sponsorEmail}</div>
                  <div className="text-slate-500">DIG_SIGNATURE: RSA_4096_SHA512</div>
                  <div className="text-emerald-400 font-semibold">STATUS: WAITING_FOUNDER_MUTUAL_SIGN</div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Research study & Developer/Sponsor collaboration row */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 text-start font-sans">
        
        {/* Research notice block */}
        <div className="bg-slate-900/30 border border-slate-800/80 rounded-3xl p-8 backdrop-blur-md flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center gap-2.5 text-indigo-400">
              <BookOpen className="w-5 h-5" />
              <h4 className="font-sans font-bold text-base text-slate-200">
                {t.researchNoticeTitle}
              </h4>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed font-sans">
              {t.researchNoticeDesc}
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-slate-800/50 flex items-center justify-between font-mono text-[10px] text-slate-500">
            <span>R&D CLASSIFICATION : STABLE_SIM</span>
            <span>STATUS : ACTIVE_PUB</span>
          </div>
        </div>

        {/* Sponsor/Developer Warm Invitation block with email */}
        <div className="bg-slate-900/30 border border-slate-800/80 rounded-3xl p-8 backdrop-blur-md flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center gap-2.5 text-emerald-400">
              <HeartHandshake className="w-5 h-5 animate-pulse" />
              <h4 className="font-sans font-bold text-base text-slate-200">
                {t.collaborateTitle}
              </h4>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed font-sans">
              {t.collaborateDesc}
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-800/50 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-[10px] uppercase font-bold text-slate-400 font-mono tracking-wider">
                  {t.supportEmailLabel}:
                </span>
                <a 
                  href="mailto:siavashhamiri@gmail.com" 
                  className="text-xs font-bold font-mono text-indigo-400 hover:text-indigo-300 hover:underline transition-colors"
                  onClick={(e) => {
                    // Standard behavior is allowed and expected
                  }}
                >
                  siavashhamiri@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-[10px] uppercase font-bold text-slate-400 font-mono tracking-wider">
                  {t.linkedinLabel}:
                </span>
                <a 
                  href="https://linkedin.com/in/siavoshmiri" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold font-mono text-emerald-400 hover:text-emerald-300 hover:underline transition-colors"
                >
                  Siavash Undefined
                </a>
              </div>
            </div>

            <button
              onClick={() => {
                navigator.clipboard.writeText('siavashhamiri@gmail.com');
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
              }}
              className="flex items-center justify-center gap-2 px-4 py-2 bg-slate-950 hover:bg-slate-900 border border-slate-800 text-slate-300 hover:text-white rounded-xl text-xs font-bold transition-all cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="font-sans">
                    {lang === 'en' ? 'Copied!' : lang === 'fa' ? 'کپی شد!' : 'تم النسخ!'}
                  </span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span className="font-sans">
                    {lang === 'en' ? 'Copy Email' : lang === 'fa' ? 'کپی ایمیل' : 'نسخ البريد'}
                  </span>
                </>
              )}
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
