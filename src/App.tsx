/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { translations, emotions } from './translations';
import { EmotionProfile } from './types';
import EmotionOrb from './components/EmotionOrb';
import InteractiveConsole from './components/InteractiveConsole';
import InvestorDeck from './components/InvestorDeck';
import MigrationRoadmap from './components/MigrationRoadmap';
import SponsorROI from './components/SponsorROI';
import { 
  Globe, 
  ShieldCheck, 
  ArrowUp, 
  HelpCircle, 
  Sparkles, 
  Cpu, 
  Terminal, 
  Lock, 
  MessageSquareDiff, 
  CheckCircle,
  EyeOff
} from 'lucide-react';

export default function App() {
  const [lang, setLang] = useState<'fa' | 'en' | 'ar'>('fa');
  const [currentEmotion, setCurrentEmotion] = useState<EmotionProfile>(emotions[0] as EmotionProfile);

  const t = translations[lang];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div 
      className={`min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans transition-all duration-1000 ease-in-out bg-gradient-to-b ${currentEmotion.themeGradient}`}
      dir={lang === 'en' ? 'ltr' : 'rtl'}
    >
      {/* Upper ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[1px] bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent pointer-events-none" />

      {/* Main Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/60 border-b border-slate-900/80">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Visual Abstract Logo */}
            <motion.div 
              className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-teal-400 flex items-center justify-center shadow-lg"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Cpu className="w-5 h-5 text-white" />
            </motion.div>
            <div className="text-start">
              <h1 className="text-sm font-extrabold text-white tracking-tight leading-tight">
                {lang === 'en' ? 'Emotion-Centric AI' : lang === 'fa' ? 'هوش مصنوعی احساس‌محور' : 'الذكاء الاصطناعي العاطفي'}
              </h1>
              <span className="text-[10px] text-slate-400 font-mono tracking-wider block">
                {lang === 'en' ? 'SECURE IDEA PROTOTYPE' : lang === 'fa' ? 'ماکت محافظت از ایده' : 'نموذج حماية الفكرة'}
              </span>
            </div>
          </div>

          {/* Nav Links & Controls */}
          <div className="flex items-center gap-4">
            <nav className="hidden md:flex items-center gap-6 text-xs font-semibold text-slate-300">
              <button 
                onClick={() => scrollToSection('sandbox-container')} 
                className="hover:text-white transition-colors cursor-pointer"
              >
                {lang === 'en' ? 'Playground' : lang === 'fa' ? 'محیط آزمایشی' : 'بيئة التجربة'}
              </button>
              <button 
                onClick={() => scrollToSection('pitch-deck-section')} 
                className="hover:text-white transition-colors cursor-pointer"
              >
                {lang === 'en' ? 'Sovereign IP' : lang === 'fa' ? 'امنیت ایده علمی' : 'حماية الفكرة'}
              </button>
              <button 
                onClick={() => scrollToSection('roadmap-section')} 
                className="hover:text-white transition-colors cursor-pointer"
              >
                {lang === 'en' ? 'Migration Roadmap' : lang === 'fa' ? 'نقشه راه انتقال' : 'خارطة طريق الهجرة'}
              </button>
              <button 
                onClick={() => scrollToSection('roi-section')} 
                className="hover:text-white transition-colors cursor-pointer"
              >
                {lang === 'en' ? 'Sponsor ROI' : lang === 'fa' ? 'ارزش سرمایه‌گذاری' : 'العائد الاستثماري'}
              </button>
            </nav>

            {/* Language Selection Trigger (Compact Segmented Selector) */}
            <div className="flex items-center bg-slate-900/80 border border-slate-800/80 rounded-lg p-1 gap-0.5 font-mono">
              {[
                { code: 'en', label: 'EN' },
                { code: 'fa', label: 'FA' },
                { code: 'ar', label: 'AR' }
              ].map((item) => (
                <button
                  key={item.code}
                  onClick={() => setLang(item.code as 'en' | 'fa' | 'ar')}
                  className={`px-2 py-1 rounded text-[10px] font-extrabold transition-all duration-200 cursor-pointer ${
                    lang === item.code
                      ? 'bg-indigo-600 text-white shadow-md'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/30'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 pb-20">
        
        {/* Pitch Hero Section */}
        <section className="max-w-4xl mx-auto px-6 pt-16 pb-12 text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 rounded-full text-xs font-bold"
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>{t.tagline}</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl font-sans font-extrabold text-white tracking-tight leading-tight select-none"
          >
            {t.title}
          </motion.h2>

          <motion.h3 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto font-sans leading-relaxed"
          >
            {t.introText}
          </motion.h3>

          {/* Quick Stats Banner */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto pt-6"
          >
            {[
              { labelEn: "IP Status", labelFa: "امنیت سورس‌کد", labelAr: "أمان البرمجيات", valEn: "Fully Shielded", valFa: "کپسوله‌شده", valAr: "محمي بالكامل" },
              { labelEn: "Acoustic Tuning", labelFa: "تنظیم صوت", labelAr: "التعديل الصوتي", valEn: "Simulated", valFa: "مدل‌سازی", valAr: "محاكاة ليفية" },
              { labelEn: "Interactive Scenarios", labelFa: "سناریوهای فعال", labelAr: "السيناريوهات التفاعلية", valEn: "4 Native", valFa: "۴ الگوی زنده", valAr: "٤ سيناريوهات حية" },
              { labelEn: "Target Market", labelFa: "بازار هدف", labelAr: "السوق المستهدف", valEn: "Enterprise NLP", valFa: "پشتیبانی و روان", valAr: "محاكاة التفاعلات" }
            ].map((stat, i) => (
              <div key={i} className="bg-slate-900/40 border border-slate-800/60 p-4 rounded-2xl backdrop-blur-sm text-center">
                <div className="text-slate-500 text-[10px] uppercase font-bold tracking-wider mb-1 font-sans">
                  {lang === 'en' ? stat.labelEn : lang === 'fa' ? stat.labelFa : stat.labelAr}
                </div>
                <div className="text-white text-xs font-bold font-sans">
                  {lang === 'en' ? stat.valEn : lang === 'fa' ? stat.valFa : stat.valAr}
                </div>
              </div>
            ))}
          </motion.div>
        </section>

        {/* Dynamic Sandbox Section */}
        <section className="w-full max-w-7xl mx-auto px-6 py-6 font-sans">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Visualizer Orb Column */}
            <div className="lg:col-span-4 flex flex-col justify-between">
              <div className="bg-slate-900/20 border border-slate-800/40 rounded-3xl p-6 backdrop-blur-md flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Sparkles className="w-4 h-4 text-amber-400" />
                    <span className="font-mono text-[10px] uppercase tracking-widest font-bold text-slate-400">
                      {t.orbStatus}
                    </span>
                  </div>
                  <h4 className="text-white text-lg font-bold mb-1 font-sans">
                    {lang === 'en' ? 'Atmospheric Orb States' : lang === 'fa' ? 'حالات گوی شناختی' : 'حالات الكرة المعرفية البصرية'}
                  </h4>
                  <p className="text-slate-400 text-xs leading-relaxed font-sans mb-6">
                    {lang === 'en' 
                      ? 'The orb adjusts its wavelength, vibration jitter and speed in response to vocal cues.'
                      : lang === 'fa'
                      ? 'رنگ گوی نشان‌دهنده‌ی همگامی فرکانسی با بار عاطفی پیام شما یا وضعیت خلقی فعال سرور است.'
                      : 'تغير الكرة تردداتها، اهتزازها وسرعتها بصرياً لتتوافق مع المدخلات والخلجات النفسية للعملاء.'}
                  </p>
                </div>

                <EmotionOrb currentEmotion={currentEmotion} lang={lang} />
                
                {/* Manual emotion selector for demo pitching */}
                <div className="mt-4 pt-4 border-t border-slate-800/80">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-2 font-mono">
                    {lang === 'en' ? 'FORCE ORB TEMPERAMENT (PITCH MODE)' : lang === 'fa' ? 'تغییر دستی اتمسفر خلقی (مخصوص پرزنت)' : 'تعديل المزاج يدوياً (للعرض والتقديم)'}
                  </span>
                  <div className="grid grid-cols-3 gap-1.5">
                    {emotions.map((m) => (
                      <button
                        key={m.id}
                        onClick={() => setCurrentEmotion(m as EmotionProfile)}
                        className={`text-[10px] font-semibold py-1.5 px-1 rounded-lg border text-center transition-all cursor-pointer ${
                          currentEmotion.id === m.id
                            ? 'bg-white/10 text-white shadow-sm'
                            : 'bg-slate-950/40 text-slate-400 border-slate-900 hover:text-slate-200'
                        }`}
                        style={{
                          borderColor: currentEmotion.id === m.id ? m.color : 'transparent'
                        }}
                      >
                        {lang === 'en' ? m.id.toUpperCase() : lang === 'fa' ? m.nameFa.split(' ')[0] : m.nameAr.split(' ')[0]}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Chat Sandbox Column */}
            <div className="lg:col-span-8 flex flex-col">
              <InteractiveConsole 
                lang={lang} 
                t={t} 
                emotions={emotions as EmotionProfile[]} 
                currentEmotion={currentEmotion}
                onEmotionChange={setCurrentEmotion}
              />
            </div>

          </div>
        </section>

        {/* Investor Pitch Slides / Bento Deck */}
        <InvestorDeck lang={lang} t={t} />

        {/* Architectural Migration Roadmap */}
        <MigrationRoadmap lang={lang} />

        {/* Sponsor ROI Sliders & NDA Request */}
        <SponsorROI lang={lang} t={t} />

      </main>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-900 text-slate-500 py-12 px-6 text-sm mt-auto relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-start space-y-1">
            <h5 className="text-white text-xs font-extrabold uppercase tracking-wide">
              {lang === 'en' ? 'EMOTION-CENTRIC AI LABS' : lang === 'fa' ? 'پروژه هوش مصنوعی احساس‌محور' : 'مختبرات الذكاء الاصطناعي العاطفي'}
            </h5>
            <p className="text-[11px] text-slate-500 max-w-md leading-relaxed font-sans">
              {lang === 'en'
                ? 'All conceptual designs, kinetic visualizations, and acoustic structures are proprietary. Raw logic exports are strictly restricted without a mutual NDA.'
                : lang === 'fa'
                ? 'کلیه حقوق این ایده و لایه‌های شبیه‌سازی متعلق به توسعه‌دهندگان آن است. نمایش کدهای خام بدون موافقت نامه NDA ممنوع می‌باشد.'
                : 'جميع التصاميم المفاهيمية، والمحاكاة الحركية، والهياكل الصوتية محمية بموجب حقوق الملكية. يمنع تصدير الكود الخام دون اتفاقية NDA متبادلة.'}
            </p>
          </div>

          <div className="flex items-center gap-6 text-[10px] uppercase font-mono tracking-wider">
            <span>NO TELEMETRY LOGGED</span>
            <span>•</span>
            <span>SECURE HOSTING</span>
            <span>•</span>
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-1.5 text-indigo-400 hover:text-indigo-300 font-bold hover:underline cursor-pointer"
            >
              <span>{t.backToTop}</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-slate-900/80 text-center text-[10px] text-slate-600">
          © {new Date().getFullYear()} Emotion-Centric AI. Protected via Abstract Gateway Protocols. Designed on Google AI Studio.
        </div>
      </footer>
    </div>
  );
}
