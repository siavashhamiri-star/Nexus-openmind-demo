/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldAlert, Cpu, EyeOff, Bot, HeartHandshake, PhoneCall, GraduationCap } from 'lucide-react';

interface InvestorDeckProps {
  lang: 'en' | 'fa' | 'ar';
  t: Record<string, string>;
}

export default function InvestorDeck({ lang, t }: InvestorDeckProps) {
  const [activeTab, setActiveTab] = useState<'ip' | 'usecases'>('ip');

  const ipCards = [
    {
      icon: <EyeOff className="w-6 h-6 text-indigo-400" />,
      title: t.ipCard1Title || "Algorithm Encapsulation",
      desc: t.ipCard1Desc || "Our core weights are locked in secure hosting, protecting them from GitHub theft."
    },
    {
      icon: <Cpu className="w-6 h-6 text-emerald-400" />,
      title: t.ipCard2Title || "Secure Callbacks",
      desc: t.ipCard2Desc || "All model inferences flow through encrypted token streams and solid firewall gateways."
    },
    {
      icon: <ShieldAlert className="w-6 h-6 text-rose-400" />,
      title: t.ipCard3Title || "Intellectual Sovereignty",
      desc: t.ipCard3Desc || "Visual layers are fully abstracted from engine weights, preventing reverse engineering."
    }
  ];

  const usecases = [
    {
      icon: <PhoneCall className="w-6 h-6 text-teal-400" />,
      title_en: "Empathetic Customer Care",
      title_fa: "تکریم هوشمند مشتریان",
      title_ar: "رعاية العملاء الذكية والهمدية",
      desc_en: "Sensitises support replies based on customer irritation levels, increasing net promoter score (NPS) by 34%.",
      desc_fa: "تنظیم لحن و شدت صبوری ربات متناسب با میزان عصبانیت مشتری، که رضایت مشتریان را ۳۴٪ افزایش می‌دهد.",
      desc_ar: "توجيه ردود الدعم الفني بناءً على درجة انفعال العميل، مما يرفع نسبة الولاء والرضا بمعدل ٣٤٪."
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-pink-400" />,
      title_en: "Mental Health Companion",
      title_fa: "دستیار سلامت روان و حمایتی",
      title_ar: "مساعد التوجيه النفسي والتأملي",
      desc_en: "Analyzes underlying stress waveforms silently to recommend correct breathing loops and cognitive pacing.",
      desc_fa: "تحلیل الگوهای فرکانسی اضطراب برای هدایت تمرین‌های بهبود تنفس و هدایت ذهن‌آگاهی.",
      desc_ar: "تحليل موجات القلق الحيوية والخلجات غير المسموعة بصمت لتوجيه جلسات التنفس وزيادة الهدوء."
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-amber-400" />,
      title_en: "Adaptive Learning Tutors",
      title_fa: "مربی‌های آموزشی تطبیقی",
      title_ar: "المعلم والمدرب التفاعلي المرن",
      desc_en: "Senses mathematical frustration in student queries, breaking down difficult topics with patient scaffolding.",
      desc_fa: "تشخیص سرخوردگی یا خستگی دانش‌آموز از تکالیف سخت و تغییر ریتم آموزش با مهندسی تدریس صبورانه.",
      desc_ar: "استشعار درجات الصعوبة والإرهاق التعليمي في الأسئلة، لتبسيط المفاهيم بصبر وتدرج ذكي."
    },
    {
      icon: <Bot className="w-6 h-6 text-indigo-400" />,
      title_en: "Emotional Gaming NPCs",
      title_fa: "شخصیت‌های فرعی خودآگاه در بازی",
      title_ar: "شخصيات الألعاب العاطفية الذكية",
      desc_en: "Empowers in-game synthetic actors to form genuine alignments, fear or companionship towards player actions.",
      desc_fa: "دمیدن روح احساس در کاراکترهای بازی؛ به طوری که بر اساس رفتارهای بازیکن مرعوب، خشمگین یا صمیمی می‌شوند.",
      desc_ar: "تمكين الممثلين غير اللاعبين في الألعاب من تكوين تحالفات حقيقية، خوف أو صداقة بناءً على قرارات اللاعب."
    }
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-16 border-t border-slate-900/60" id="pitch-deck-section">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl font-sans font-bold text-white tracking-tight leading-tight">
          {lang === 'en' 
            ? 'Enterprise Scale & Sovereign IP Shield' 
            : lang === 'fa' 
            ? 'ابعاد تجاری و استراتژی امنیت ایده' 
            : 'الأبعاد التجارية والريادية وحماية الملكية'}
        </h2>
        <p className="text-slate-400 text-sm mt-3 font-sans">
          {lang === 'en' 
            ? 'Explore how we protect core technological secrets while serving industry-disrupting use cases.' 
            : lang === 'fa' 
            ? 'بررسی دیوارهای دفاعی مالکیت معنوی به همراه کابردهای عملیاتی این فناوری پیشرو در بازارهای مدرن جهان' 
            : 'استكشف كيف نحمي براءات الاختراع والشيفرة المصدرية الحساسة أثناء خدمة الحالات التشغيلية الريادية.'}
        </p>

        {/* Tab Switcher */}
        <div className="flex bg-slate-950 p-1.5 rounded-xl border border-slate-800/80 max-w-xs mx-auto mt-8">
          <button
            onClick={() => setActiveTab('ip')}
            className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all duration-300 font-sans cursor-pointer ${
              activeTab === 'ip' ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-400 hover:text-white'
            }`}
          >
            {lang === 'en' ? 'Code Safety (IP)' : lang === 'fa' ? 'حفاظت از کدهای شما' : 'أمان الشيفرة والملكية'}
          </button>
          <button
            onClick={() => setActiveTab('usecases')}
            className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all duration-300 font-sans cursor-pointer ${
              activeTab === 'usecases' ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-400 hover:text-white'
            }`}
          >
            {lang === 'en' ? 'Target Industries' : lang === 'fa' ? 'کاربردهای تجاری' : 'التطبيقات التجارية'}
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {activeTab === 'ip' ? (
          <motion.div
            key="ip-tab"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 font-sans"
            dir={lang === 'en' ? 'ltr' : 'rtl'}
          >
            {ipCards.map((card, idx) => (
              <div 
                key={idx} 
                className="bg-slate-900/30 border border-slate-800/80 rounded-2xl p-6 backdrop-blur-sm hover:border-indigo-500/30 transition-all duration-300 hover:scale-[1.01] flex flex-col gap-4 text-start"
              >
                <div className="p-3 bg-slate-950 rounded-xl w-fit border border-slate-800/50">
                  {card.icon}
                </div>
                <div>
                  <h3 className="text-slate-200 font-bold font-sans text-md leading-snug">
                    {card.title}
                  </h3>
                  <p className="text-slate-400 text-xs leading-relaxed mt-2 font-sans">
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            key="usecase-tab"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 font-sans"
            dir={lang === 'en' ? 'ltr' : 'rtl'}
          >
            {usecases.map((use, idx) => (
              <div 
                key={idx} 
                className="group relative bg-slate-900/30 border border-slate-800/80 rounded-2xl p-6 backdrop-blur-sm hover:border-teal-500/30 transition-all duration-300 flex gap-4 text-start"
              >
                <div className="p-3 bg-slate-950 rounded-xl h-fit border border-slate-800/50 group-hover:scale-110 transition-transform">
                  {use.icon}
                </div>
                <div className="space-y-1">
                  <h3 className="text-slate-200 font-bold font-sans text-base">
                    {lang === 'en' ? use.title_en : lang === 'fa' ? use.title_fa : use.title_ar}
                  </h3>
                  <p className="text-slate-400 text-xs leading-relaxed font-sans">
                    {lang === 'en' ? use.desc_en : lang === 'fa' ? use.desc_fa : use.desc_ar}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Visualized Architecture Banner */}
      <div 
        className="mt-12 bg-gradient-to-br from-slate-950 to-indigo-950/40 border border-slate-800/60 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-8 text-start"
        dir={lang === 'en' ? 'ltr' : 'rtl'}
      >
        <div className="space-y-3 max-w-xl">
          <span className="text-[10px] bg-indigo-500/10 text-indigo-400 px-3 py-1 rounded-full font-bold uppercase tracking-widest border border-indigo-500/20">
            {lang === 'en' ? 'ZERO TRUST ARCHITECTURE' : lang === 'fa' ? 'طراحی شده بر بستر ابری امن' : 'بنية أمان صفرية الثقة سحابياً'}
          </span>
          <h3 className="text-slate-200 text-xl font-bold font-sans">
            {lang === 'en' ? 'Decoupled Client-Server Pipeline' : lang === 'fa' ? 'امنیت لایه‌بندی‌شده کلاینت و سرور' : 'بنية خط المعالجة المنفصل بين العميل والخادم'}
          </h3>
          <p className="text-slate-400 text-xs leading-relaxed font-sans">
            {lang === 'en'
              ? 'Our isolated delivery design lets you showcase high-fidelity product reactions confidently to sponsors. The core mathematical engines sit miles away behind token boundaries, entirely abstract.'
              : lang === 'fa'
              ? 'با مدل‌سازی لایه‌ی ارائه‌ی بدون ریشه، شما می‌توانید با خیالی آسوده ایده نایاب خود را به هر سرمایه‌گذار یا سازمانی ارائه دهید بدون آن که کدهای اصلی موتور محاسباتی در مادیات فیزیکی سورس کلاینت قابل ردیابی باشد.'
              : 'تتيح بنيتنا المعزولة تقديم تجربة تفاعلية مبهرة للرعاة بثقة تامة. المحرك الرياضي والأوزان الحيوية مستضافة بأمان سحابي بعيداً عن كود الواجهة.'}
          </p>
        </div>
        <div className="flex gap-4 font-mono text-center text-xs w-full md:w-auto">
          <div className="flex-1 bg-slate-900 border border-slate-800/80 p-4 rounded-2xl min-w-[120px]">
            <div className="text-indigo-400 font-bold mb-1">0%</div>
            <div className="text-slate-500 text-[10px]">
              {lang === 'en' ? 'Source Code Leak' : lang === 'fa' ? 'درز کد منبع' : 'تسريب الشيفرة المصدرية'}
            </div>
          </div>
          <div className="flex-1 bg-slate-900 border border-slate-800/80 p-4 rounded-2xl min-w-[120px]">
            <div className="text-emerald-400 font-bold mb-1">100%</div>
            <div className="text-slate-500 text-[10px]">
              {lang === 'en' ? 'IP Ownership' : lang === 'fa' ? 'حفظ حریم امن ایده' : 'ملكية وحماية الفكرة معنوياً'}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
