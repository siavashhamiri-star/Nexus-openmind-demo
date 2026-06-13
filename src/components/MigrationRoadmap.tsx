/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  GitFork, 
  Network, 
  Database, 
  KeyRound, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Server, 
  ShieldAlert, 
  Cpu, 
  Globe,
  Milestone
} from 'lucide-react';

interface MigrationRoadmapProps {
  lang: 'en' | 'fa' | 'ar';
}

export default function MigrationRoadmap({ lang }: MigrationRoadmapProps) {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      titleEn: "Step 1: Pure Decoupled Backend Layer",
      titleFa: "گام ۱: لایه‌بندی و جداسازی کامل فرانت‌‌اند از پس‌زمینه",
      titleAr: "الخطوة ١: فصل الواجهة بالكامل عن الخادم الخلفي",
      icon: <Server className="w-5 h-5 text-indigo-400" />,
      tag: "ARCHITECTURAL SETUP",
      descEn: "Since direct client-to-Firebase connections are fully blocked within Iran, rewrite all data transactions to flow through internal HTTP/RPC proxies in Express or Go. The client never knows or touches the target server credentials or IP ranges, preserving complete operational immunity.",
      descFa: "از آنجا که اتصال مستقیم کلاینت به لایه فرانت‌اند فایربیس به دلیل تحریم یا فیلترینگ مستقیم در ایران با قطعی مواجه می‌شود، کلیه تراکنش‌ها را به یک API محلی (Express/Node.js یا Go) در لایه هاست میانی هدایت کنید. بدین ترتیب مرور کاربران کاملا از سرور اصلی ایزوله می‌ماند.",
      descAr: "نظراً لأن الاتصالات المباشرة من العميل إلى Firebase محظورة تماماً داخل إيران، يجب إعادة كتابة جميع معاملات البيانات لتمر عبر وكلاء HTTP/RPC داخليين في Express أو Go. لا يعرف العميل أبداً بيانات اعتماد الخادم المستهدف، مما يحافظ على استمرارية الخدمة.",
      details: {
        en: [
          "Eliminate client-side Firebase SDK references completely.",
          "Establish high-speed RESTful/gRPC wrappers on a local domestic proxy.",
          "Enforce strict CORS policies to protect intellectual properties."
        ],
        fa: [
          "حذف کامل رفرنس‌های مستقیم پکیج‌های فایربیس از سمت کلاینت.",
          "ایجاد اندپوینت‌های سریع برای فراخوانی داده‌ها بر روی سرورهای میانی بدون تحریم.",
          "تنظیم سیاست‌های سخت‌گیرانه CORS برای جلوگیری از سرقت و تملک کد."
        ],
        ar: [
          "إزالة مراجع Firebase SDK من جانب العميل بالكامل.",
          "إنشاء مغلفات RESTful/gRPC سريعة على وكيل خادم محلي.",
          "فرض سياسات CORS صارمة لحماية الأصول البرمجية من السرقة."
        ]
      },
      codeSnippet: `// ❌ OLD (Blocked in Iran):
import { initializeApp } from 'firebase/app';
const db = getFirestore(initializeApp(firebaseConfig));

// ✅ NEW (Zero-Trust Local API proxy):
const response = await fetch('/api/v1/cognitive-states', {
  headers: { 'Authorization': \`Bearer \${token}\` }
});`
    },
    {
      titleEn: "Step 2: Database Migration & Local Storage",
      titleFa: "گام ۲: مهاجرت پایگاه داده به گزینه‌های دردسترس",
      titleAr: "الخطوة ٢: هجرة قواعد البيانات والتخزين المحلي الموثوق",
      icon: <Database className="w-5 h-5 text-emerald-400" />,
      tag: "DATABASE SYNCHRONIZATION",
      descEn: "Replace the proprietary Firebase Firestore structure with free, accessible relational databases like PostgreSQL (utilizing lightweight Drizzle ORM) or localized SQLite, which can be easily hosted anywhere in the region without geo-blocking or unexpected provider halts.",
      descFa: "مهاجرت از ماتریکس بسته فایربیس به یک دیتابیس متن‌باز و همه‌جایی مانند PostgreSQL (با ابزار ساده Drizzle ORM) یا SQLite محلی. این پایگاه‌‌های داده را بدون هیچ‌گونه فیلترینگ جغرافیایی یا توقف ناگهانی توسط ارائه‌دهندگان غربی در هر لوکیشنی می‌توان میزبانی کرد.",
      descAr: "استبدال هيكلية Firestore الخاصة بقواعد بيانات علائقية مجانية ومتاحة مثل PostgreSQL (باستخدام Drizzle ORM خفيف الوزن) أو SQLite المحلي، والتي يمكن استضافتها بسهولة داخل المنطقة دون حظر جغرافي.",
      details: {
        en: [
          "Export your existing JSON schemes into cleanly indexed SQL Tables.",
          "Deploy a lightweight local database engine or fallback JSON database in local isolated Docker.",
          "Implement automatic local disk state backups with high integrity."
        ],
        fa: [
          "خروجی گرفتن از ساختارهای درختی JSON به جداول رابطه‌ای تمیز در SQL.",
          "راه‌اندازی انجین محلی پایگاه داده با داکر به صورت کاملا کپسوله‌شده.",
          "پیاده‌سازی نسخه پشتیبان بر روی دیسک لوکال برای ممانعت از رفتن داده‌ها."
        ],
        ar: [
          "تصدير هياكل JSON الحالية إلى جداول SQL مفهرسة بشكل منظم.",
          "نشر محرك قاعدة بيانات محلي خفيف الوزن داخل بيئة دوجكر معزولة.",
          "تفعيل عمليات النسخ الاحتياطي التلقائي لضمان الموثوقية التامة للأعطال."
        ]
      },
      codeSnippet: `// src/db/schema.ts (Drizzle ORM setup)
import { pgTable, serial, text, integer } from 'drizzle-orm/pg-core';

export const userSessions = pgTable('user_sessions', {
  id: serial('id').primaryKey(),
  email: text('email').notNull(),
  lastState: text('last_state').default('calm')
});`
    },
    {
      titleEn: "Step 3: Secure Local Custom Authentication",
      titleFa: "گام ۳: احرازهویت محلی و مستقل بر پایه توکن‌های ایمن",
      titleAr: "الخطوة ٣: نظام توثيق محلي مستقل وآمن تماماً",
      icon: <KeyRound className="w-5 h-5 text-teal-400" />,
      tag: "IDENTITY MANAGEMENT",
      descEn: "Since Firebase Auth popups fail or slow down dramatically behind proxy limits, implement a custom JWT (JSON Web Token) authentication service with industry-grade argon2/bcrypt password hashing. It gives you 100% control of user identity storage.",
      descFa: "از آنجا که سیستم احرازهویت فایربیس (Firebase Auth) در ایران با تاخیر فاجعه‌بار جفت می‌شود یا از کار می‌افتد، یک سیستم توکن امن JWT به همراه پکیج‌های سبک ماتریکس بومی یا سرور محلی بسازید. این امر کنترل کامل ذخیره‌سازی هویت‌ها را در اختیار شخص شما قرار می‌دهد.",
      descAr: "نظراً لأن نوافذ Firebase Auth تفشل أو تتباطأ بشكل كبير خلف قيود الخوادم البديلة، يجب تطبيق نظام توثيق مخصص يعتمد على JWT مع تشفير كلمات المرور باستخدام bcrypt/argon2 المعتمدة عالمياً.",
      details: {
        en: [
          "No external corporate middleware required, protecting privacy.",
          "Store passwords cryptographically using modern hashing.",
          "Grant custom access tokens with programmatic expiry timelines."
        ],
        fa: [
          "عدم نیاز به واسطه‌های تجاری غربی، تضمین صددرصدی حریم خصوصی کاربران.",
          "ذخیره‌سازی اطلاعات با به‌کارگیری الگوهای رمزنگاری پیشرفته.",
          "تولید و منقضی کردن منظم توکن‌ها به صورت هوشمند."
        ],
        ar: [
          "لا حاجة لوسيط خارجي تجاري، مما يضمن الخصوصية الكاملة.",
          "تشفير وحشو كلمات المرور بأحدث الطرق الموثوقة برمجياً.",
          "إصدار توهينات مرور ذكية بمدد صلاحية ديناميكية مؤتمتة."
        ]
      },
      codeSnippet: `// server/auth.ts (JWT & Hashing abstraction)
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

export const generateSecureToken = (user: { id: string }) => {
  return jwt.sign({ sub: user.id }, process.env.JWT_SECRET || 'fallback', { 
    expiresIn: '7d' 
  });
};`
    },
    {
      titleEn: "Step 4: Containerization & Dual-Region Deployments",
      titleFa: "گام ۴: داکریزه کردن و استقرار ترکیبی ملی/بین‌المللی",
      titleAr: "الخطوة ٤: الحجز السحابي وتوزع الخوادم الإقليمي",
      icon: <Globe className="w-5 h-5 text-rose-400" />,
      tag: "CONTINUOUS DELIVERY",
      descEn: "Wrap your entire full-stack application (Vite + local Express/Go) inside a light Docker container. Deploy on a local regional cloud provider (like ArvanCloud, Hamravesh, or a local server) for blazing-fast national accessibility, alongside a remote mirrored node for global audiences.",
      descFa: "کل بدنه برنامه (فرانت‌اند پیشرفته و بک‌اند امن اکسپرس) را در قالب یک ایمیج سبک داکر درآورید. آن را بر روی ارائه‌دهندگان ابری داخلی (مانند ابر آروان یا هم‌روش) آپلود کنید تا کاربران ایرانی با پینگ فوق‌سریع به آن متصل شوند و هم‌زمان نسخه قرینه را برای کاربران خارجی نگه دارید.",
      descAr: "جمع التطبيق بالكامل (Vite + Express) في حاوية دوجكر مرنة وسريعة. انشرها على خوادم إقليمية لتوفير سرعات وصول وطنية مذهلة مع موازنة حمولتها على خوادم دولية للجمهور العالمي.",
      details: {
        en: [
          "Achieve sub-50ms ping times by bypassing global routing hops.",
          "Maintain absolute continuous uptime in the event of national network isolation.",
          "Easy migration and zero-vendor-lock-in design paradigm."
        ],
        fa: [
          "دسترسی فوق‌العاده سریع زیر ۵۰ میلی‌ثانیه با حذف گره‌های ارتباطی خارجی.",
          "حفظ پایداری کامل برنامه حتی در مواقع قطعی‌های سراسری اینترنت بین‌الملل.",
          "استقلال در انتخاب هاستینگ بدون قفل شدن روی سرویس‌دهندگان خاص."
        ],
        ar: [
          "الوصول السريع بزمن استجابة أقل من ٥٠ ملي ثانية.",
          "الحفاظ على وقت تشغيل مستقر ومستمر حتى في أحلك ظروف انقطاع الشبكة الدولية.",
          "الاستقلال البرمجي التام دون الارتباط باحتكار الشركات الكبرى."
        ]
      },
      codeSnippet: `# Dockerfile (Single self-contained delivery image)
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "start"]`
    }
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-16 border-t border-slate-900/60" id="roadmap-section">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-start" dir={lang === 'en' ? 'ltr' : 'rtl'}>
        
        {/* Core Strategic Explanation Column */}
        <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full text-xs font-bold">
              <Milestone className="w-3.5 h-3.5" />
              <span>
                {lang === 'en' 
                  ? 'IRAN-LOCALIZED ARCHITECTURAL ROADMAP' 
                  : lang === 'fa' 
                  ? 'نقشه راه بومی‌سازی معماری و عبور از تحریم‌ها' 
                  : 'خارطة طريق الهجرة الهيكلية وتجاوز الحظر'}
              </span>
            </div>

            <h2 className="text-3xl font-sans font-bold text-white tracking-tight leading-tight">
              {lang === 'en' 
                ? 'Sovereign Architectural Migration Roadmap' 
                : lang === 'fa' 
                ? 'نقشه راه انتقال سورس‌کد و کپسوله‌سازی مستقل' 
                : 'خارطة الطريق التقنية لتأصيل البرمجيات ونقل السيادة'}
            </h2>

            <p className="text-slate-400 text-sm leading-relaxed font-sans">
              {lang === 'en'
                ? "Since technical obstacles block standard Firebase services in Iran, a robust sovereign architecture is vital. This roadmap illustrates the literal blueprint to migrate, package, and launch your software on secure, zero-trust regional pipelines."
                : lang === 'fa'
                ? "به دلیل محدودیت‌های تحریم و بسترهای فایربیس در کشور، توسعه با یک معماری مستقل و قابل‌کنترل تنها راه پایداری محصول است. ماکت جاری طوری مهندسی شده که کل کدهای سمت کاربر را بدون کمترین وابستگی به فایربیس سازمان‌دهی کرده و یک راهکار شفاف برای انتقال سریع نشان می‌دهد."
                : "بسبب العقبات والمضايقات التي تحول دون تشغيل خدمات سحابة Firebase في إيران، قمنا بهندسة هذا النموذج ليمهد الطريق إلى هجرة سلسة وشاملة نحو خوادم معزولة ذات أمان تام خالية من التبعية التقنية الاحتكارية."}
            </p>

            <div className="bg-slate-900/20 border border-slate-800/80 p-5 rounded-2xl space-y-3">
              <div className="flex items-center gap-2 text-amber-400">
                <ShieldAlert className="w-4 h-4" />
                <h4 className="text-xs font-bold uppercase tracking-wider font-mono">
                  {lang === 'en' ? 'Decision Memo for Sharing Work' : lang === 'fa' ? 'یادداشت راجع به انتشار عمومی پروژه' : 'مذكرة القرار لطلب المشاركة العامة'}
                </h4>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-sans">
                {lang === 'en'
                  ? "Sharing your work openly builds credibility but risks IP copying. By keeping the interface modular (as structured in this mockup) and exposing an interactive simulator rather than dumping database keys, you can confidently attract sponsors without donating your intellectual crown jewels."
                  : lang === 'fa'
                  ? "انتشار کدهای اصلی در فضای وب برای جلب نظر سرمایه‌گذاران مفید است اما می‌تواند باعث سرقت ایده و کپی غیرقانونی تلاش‌های شما شود. با ارائه‌ی این شبیه‌ساز تعاملیِ مدرن و بدون لو دادن فرمول‌ها و کلیدهای اصلی بک‌اند، شما می‌توانید در کمال امنیت نظر اسپانسرها را به کار خود جلب کنید."
                  : "مشاركة كودك المصدر علناً تمنحك الثقة والاعتراف، لكنها تعرض مشروعك للاستنساخ الجائر. بدلاً من نشر تفاصيل الأوزان الرياضية وقواعد البيانات، يتيح لك هذا المحاكي الواعد جذب المستثمرين بثقة عارمة وحماية كاملة لجوهر الابتكار."}
              </p>
            </div>
          </div>

          {/* Miniature step bubbles for fast toggle */}
          <div className="space-y-2 pt-6">
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block font-mono">
              {lang === 'en' ? 'SELECT ARCHITECTURAL STAGE' : lang === 'fa' ? 'انتخاب مرحله از نقشه راه' : 'اختر المرحلة التقنية وعقد الربط'}
            </span>
            <div className="grid grid-cols-4 gap-2">
              {steps.map((st, i) => (
                <button
                  key={i}
                  onClick={() => setActiveStep(i)}
                  className={`py-2 px-1 rounded-xl text-center border font-sans text-xs font-bold transition-all cursor-pointer ${
                    activeStep === i 
                      ? 'bg-indigo-600 text-white border-indigo-500 shadow-md shadow-indigo-600/10' 
                      : 'bg-slate-950/80 text-slate-400 border-slate-900 hover:text-slate-200'
                  }`}
                >
                  {lang === 'en' ? `S${i+1}` : lang === 'fa' ? `گام ${i+1}` : `خ${i+1}`}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Interactive Detailed Roadmap Stage Column */}
        <div className="lg:col-span-7 bg-slate-900/30 border border-slate-800/80 rounded-3xl p-8 backdrop-blur-md flex flex-col justify-between min-h-[480px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, x: lang === 'en' ? 20 : -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: lang === 'en' ? -20 : 20 }}
              transition={{ duration: 0.3 }}
              className="space-y-6 text-start"
            >
              {/* Step Title Badge Row */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-slate-950 rounded-2xl border border-slate-800/80">
                    {steps[activeStep].icon}
                  </div>
                  <div>
                    <span className="text-[10px] text-indigo-400 font-mono uppercase font-bold tracking-widest block">
                      {steps[activeStep].tag}
                    </span>
                    <h3 className="text-white text-base font-bold font-sans">
                      {lang === 'en' ? steps[activeStep].titleEn : lang === 'fa' ? steps[activeStep].titleFa : steps[activeStep].titleAr}
                    </h3>
                  </div>
                </div>
                <span className="text-xs bg-slate-950 text-slate-500 px-3 py-1 rounded-full font-mono border border-slate-800/50">
                  STAGE 0{activeStep + 1} / 04
                </span>
              </div>

              {/* Main Desc */}
              <p className="text-slate-300 text-xs leading-relaxed font-sans mt-2">
                {lang === 'en' ? steps[activeStep].descEn : lang === 'fa' ? steps[activeStep].descFa : steps[activeStep].descAr}
              </p>

              {/* Details Bullet Points */}
              <div className="space-y-2.5">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider font-mono">
                  {lang === 'en' ? "TECHNICAL ACTIONS & GUARANTEES:" : lang === 'fa' ? "اقدامات فنی و آورده محصول:" : "الإجراءات البرمجية والضمانات الحيوية:"}
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-1 gap-2">
                  {(lang === 'en' ? steps[activeStep].details.en : lang === 'fa' ? steps[activeStep].details.fa : steps[activeStep].details.ar).map((det, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-400">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="font-sans">{det}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Abstract code/CLI snippet illustrating security */}
              <div className="space-y-2">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block font-mono">
                  {lang === 'en' ? 'MIGRATION BluePrint' : lang === 'fa' ? 'طرح و پترن کد ارتقا یافته' : 'مخطط الكود البرمجي الآمن'}
                </span>
                <pre className="bg-slate-950 p-4 rounded-2xl border border-slate-800/80 text-[11px] font-mono text-slate-300 overflow-x-auto whitespace-pre leading-loose">
                  {steps[activeStep].codeSnippet}
                </pre>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dynamic Action Buttons inside component */}
          <div className="mt-8 pt-6 border-t border-slate-800/50 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-[10px] text-slate-500 font-mono uppercase tracking-wider">
              {lang === 'en' ? 'Sovereign Architecture Protocol' : lang === 'fa' ? 'طراحی شده بر بستر معماری کپسوله کاربر' : 'نموذج السيادة الكاملة للتنمية المستدامة'}
            </span>
            <div className="flex gap-2">
              <button
                onClick={() => setActiveStep(prev => (prev > 0 ? prev - 1 : 3))}
                className="py-2 px-4 bg-slate-950 hover:bg-slate-900 border border-slate-800 text-slate-300 rounded-xl text-xs font-bold transition-all cursor-pointer"
              >
                {lang === 'en' ? 'Previous' : lang === 'fa' ? 'مرحله قبل' : 'السابق'}
              </button>
              <button
                onClick={() => setActiveStep(prev => (prev < 3 ? prev + 1 : 0))}
                className="py-2 px-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5"
              >
                <span>{lang === 'en' ? 'Next Stage' : lang === 'fa' ? 'مرحله بعد' : 'المرحلة التالية'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
