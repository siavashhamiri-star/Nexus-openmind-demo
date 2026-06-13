/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { EmotionType, EmotionProfile, DemoMessage } from '../types';
import { Sparkles, Send, ShieldCheck, HelpCircle, ArrowLeftRight, Terminal, RefreshCw } from 'lucide-react';

interface InteractiveConsoleProps {
  lang: 'en' | 'fa' | 'ar';
  t: Record<string, string>;
  emotions: EmotionProfile[];
  currentEmotion: EmotionProfile;
  onEmotionChange: (emotion: EmotionProfile) => void;
}

export default function InteractiveConsole({
  lang,
  t,
  emotions,
  currentEmotion,
  onEmotionChange
}: InteractiveConsoleProps) {
  const [inputText, setInputText] = useState('');
  const [chatHistory, setChatHistory] = useState<DemoMessage[]>([
    {
      id: 'welcome',
      sender: 'ai',
      text: lang === 'fa' 
        ? "درود بر شما حامی عزیز ایده احساس‌محور. من به عنوان گوی هوشمند شما فعال هستم. لطفا چند کلمه با من صحبت کنید تا تونم را با قلب فرکانس شما هماهنگ کنم." 
        : lang === 'ar'
        ? "أهلاً ومرحباً بكم مع هذا النموذج التجريبي التفاعلي للذكاء الاصطناعي القائم على المشاعر. أنا كرتكم الإدراكية النشطة. يرجى التحدث معي ومراقبة كيف تتناسق نبضاتي مع طاقة قلبكم العطرة."
        : "Welcome, valuable sponsor, to the Emotion-Centric console. I am your active cognitive core. Speak to me and observe how my core alters frequency in absolute alignment with your heart rate.",
      timestamp: new Date().toLocaleTimeString(lang === 'fa' ? 'fa-IR' : 'en-US', { hour: '2-digit', minute: '2-digit' }),
    }
  ]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [tempMetrics, setTempMetrics] = useState({
    latency: 0,
    syncRate: 98.4,
    shiftPercent: 0
  });

  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatHistory, isProcessing]);

  // Keyword-based local sentiment analyzer to simulate state machines safely and predictably
  const analyzeSentiment = (text: string): EmotionType => {
    const txt = text.toLowerCase();
    
    // Emotion keyword mappings (FA & EN)
    const joyWords = ['پیروز', 'خوشحال', 'تبریک', 'موفقیت', 'عالی', 'شاد', 'happy', 'fixed', 'victory', 'triumphant', 'success', 'won', 'joy'];
    const sorrowWords = ['خسته', 'غم', 'تنها', 'ناراحت', 'درمانده', 'گریه', 'اندوه', 'exhausted', 'sad', 'tired', 'sorry', 'depressed', 'lonely'];
    const stressWords = ['نگران', 'ترس', 'اضطراب', 'شکست', 'تپش', 'اضطراب', 'استرس', 'anxious', 'fail', 'scared', 'worry', 'stress', 'nervous', 'heart is beating'];
    const calmWords = ['آرامش', 'صلح', 'سکوت', 'شب', 'آرام', 'مدیتیشن', 'peace', 'calm', 'night', 'quiet', 'tranquil', 'reflecting'];
    const excitementWords = ['هیجان', 'شور', 'انگیزه', 'شتاب', 'فوق‌العاده', 'عاشق', 'excited', 'fantastic', 'amazing', 'hype', 'awesome', 'love'];
    const curiousWords = ['چرا', 'برنامه', 'تحلیل', 'چگونه', 'علم', 'سوال', 'سنجش', 'how', 'why', 'analyze', 'quantum', 'curious', 'question', 'research'];

    if (joyWords.some(w => txt.includes(w))) return 'joy';
    if (sorrowWords.some(w => txt.includes(w))) return 'sorrow';
    if (stressWords.some(w => txt.includes(w))) return 'stress';
    if (calmWords.some(w => txt.includes(w))) return 'calm';
    if (excitementWords.some(w => txt.includes(w))) return 'excitement';
    if (curiousWords.some(w => txt.includes(w))) return 'curious';

    return currentEmotion.id; // Retain current selection if neutral
  };

  const handleMessageSubmit = (text: string) => {
    if (!text.trim() || isProcessing) return;

    // Add User Message
    const userMsg: DemoMessage = {
      id: 'msg-' + Date.now(),
      sender: 'user',
      text: text,
      timestamp: new Date().toLocaleTimeString(lang === 'fa' ? 'fa-IR' : 'en-US', { hour: '2-digit', minute: '2-digit' })
    };

    setChatHistory(prev => [...prev, userMsg]);
    setInputText('');
    setIsProcessing(true);

    // Compute sentiment shifting values to make the code simulator look incredibly advanced
    const detectedId = analyzeSentiment(text);
    const matchedEmotion = emotions.find(e => e.id === detectedId) || currentEmotion;
    const computedLatency = Math.floor(180 + Math.random() * 240);
    const computedSync = parseFloat((94.5 + Math.random() * 5).toFixed(1));
    const computedShift = Math.floor(Math.abs(matchedEmotion.metrics.valence - currentEmotion.metrics.valence) * 100);

    setTempMetrics({
      latency: computedLatency,
      syncRate: computedSync,
      shiftPercent: computedShift,
    });

    // Simulate standard neural network weights matching and vocal breath modulation
    setTimeout(() => {
      onEmotionChange(matchedEmotion);

      let responseText = '';
      switch (detectedId) {
        case 'joy': responseText = t.resJoy; break;
        case 'sorrow': responseText = t.resSorrow; break;
        case 'stress': responseText = t.resStress; break;
        case 'calm': responseText = t.resCalm; break;
        case 'excitement': responseText = t.resExcitement; break;
        case 'curious': responseText = t.resCurious; break;
        default: responseText = lang === 'fa' 
          ? "دریافت شد. من سیگنال‌های نهان در لحن شما را دریافت کردم و بردارهای بیومتریک خود را برای تعاملی دلنشین همگام کردم." 
          : lang === 'ar'
          ? "تم الاستقبال والتحليل بنجاح. لقد تلقيت الإشارات المتموجة في نبرة كلماتك وقمت بضبط مصفوفتنا الحيوية لتتلاءم مع ترددك المزاجي."
          : "Understood. I have securely processed your query and adjusted my biological feedback vectors to sync with your current mindset.";
      }

      const aiMsg: DemoMessage = {
        id: 'msg-ai-' + Date.now(),
        sender: 'ai',
        text: responseText,
        emotionDetected: detectedId,
        timestamp: new Date().toLocaleTimeString(lang === 'fa' ? 'fa-IR' : 'en-US', { hour: '2-digit', minute: '2-digit' }),
        processingMetrics: {
          latencyMs: computedLatency,
          cognitiveSync: computedSync,
          modulationShift: computedShift
        }
      };

      setChatHistory(prev => [...prev, aiMsg]);
      setIsProcessing(false);
    }, 1200);
  };

  const loadScenario = (scenarioText: string) => {
    setInputText(scenarioText);
    handleMessageSubmit(scenarioText);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full max-w-7xl mx-auto px-4 mt-8" id="sandbox-container">
      {/* Simulation Console Screen */}
      <div className="lg:col-span-7 flex flex-col bg-slate-900/40 border border-slate-800/80 rounded-3xl overflow-hidden backdrop-blur-md min-h-[580px]">
        {/* Terminal Header */}
        <div className="flex justify-between items-center bg-slate-950/80 px-6 py-4 border-b border-slate-800/60">
          <div className="flex items-center gap-3">
            <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-mono text-xs font-bold text-slate-300 tracking-wider">
              {lang === 'fa' ? 'محیط ارائه‌ی خلاقانه احساسات' : 'EMPATHY SYNAPSE v2.1'}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-full bg-slate-700" />
            <div className="h-1.5 w-1.5 rounded-full bg-slate-700" />
            <div className="h-1.5 w-1.5 rounded-full bg-slate-700" />
          </div>
        </div>

        {/* Chat Stream Panel */}
        <div className="flex-1 p-6 overflow-y-auto max-h-[380px] space-y-4 font-sans">
          <AnimatePresence initial={false}>
            {chatHistory.map((msg) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[85%] rounded-2xl p-4 shadow-lg ${
                    msg.sender === 'user'
                      ? 'bg-gradient-to-br from-indigo-600 to-indigo-800 text-white rounded-br-none'
                      : 'bg-slate-950/90 text-slate-200 border border-slate-800 rounded-bl-none'
                  }`}
                  dir={lang === 'fa' ? 'rtl' : 'ltr'}
                >
                  <p className="text-sm leading-relaxed mb-2 whitespace-pre-line">{msg.text}</p>
                  
                  {/* Footer metadata within message bubble to impress investors */}
                  <div className="flex items-center justify-between text-[10px] text-slate-400 font-mono">
                    <span>{msg.timestamp}</span>
                    {msg.sender === 'ai' && msg.processingMetrics && (
                      <span className="flex items-center gap-1.5 text-emerald-400">
                        <Sparkles className="w-3 h-3" />
                        {msg.processingMetrics.cognitiveSync}% Sync
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}

            {isProcessing && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex justify-start"
              >
                <div className="bg-slate-950/80 p-4 rounded-2xl rounded-bl-none border border-slate-800/80 text-xs text-slate-400 flex items-center gap-3">
                  <RefreshCw className="w-4 h-4 text-emerald-500 animate-spin" />
                  <span className="font-mono">
                    {lang === 'fa' 
                      ? `شناسایی بار عاطفی و مدولاسیون ریتم تنفس (${tempMetrics.syncRate}% همگامی)...` 
                      : lang === 'ar'
                      ? `تحديد الإشارات العاطفية ومعدل نبض الكرة ومزامنتها (${tempMetrics.syncRate}% توافق)...`
                      : `Extracting cognitive state & adapting voice pitch (${tempMetrics.syncRate}% Match)...`}
                  </span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <div ref={chatEndRef} />
        </div>

        {/* Suggested Scenario Chips for Easy Pitching */}
        <div className="px-6 py-3 bg-slate-950/30 border-t border-slate-800/50">
          <div className="text-[11px] text-slate-400 font-bold mb-2 uppercase tracking-wider flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-amber-400" />
            {t.suggestedScenarios}
          </div>
          <div className="flex flex-wrap gap-2">
            {[
              { label: t.scenario1Name, text: t.scenario1Text, color: 'hover:text-blue-400 hover:border-blue-500/50' },
              { label: t.scenario2Name, text: t.scenario2Text, color: 'hover:text-amber-400 hover:border-amber-500/50' },
              { label: t.scenario3Name, text: t.scenario3Text, color: 'hover:text-emerald-400 hover:border-emerald-500/50' },
              { label: t.scenario4Name, text: t.scenario4Text, color: 'hover:text-red-400 hover:border-red-500/50' }
            ].map((scen, index) => (
              <button
                key={index}
                onClick={() => loadScenario(scen.text)}
                disabled={isProcessing}
                className={`text-[11px] font-medium py-1.5 px-3 bg-slate-950/60 hover:bg-slate-900 border border-slate-800 rounded-full transition-all duration-300 ${scen.color} cursor-pointer`}
              >
                {scen.label}
              </button>
            ))}
          </div>
        </div>

        {/* Input Dock */}
        <div className="p-4 bg-slate-950/80 border-t border-slate-800/60">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleMessageSubmit(inputText);
            }}
            className="flex items-center gap-3"
          >
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder={t.typeMessagePlaceholder}
              disabled={isProcessing}
              className="flex-1 min-w-0 px-4 py-3 bg-slate-900 text-slate-200 text-sm rounded-xl border border-slate-800 focus:outline-none focus:border-indigo-500/80 transition-colors font-sans"
              dir={lang === 'fa' ? 'rtl' : 'ltr'}
            />
            <button
              type="submit"
              disabled={!inputText.trim() || isProcessing}
              className="flex items-center justify-center p-3 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-40 disabled:hover:bg-indigo-600 text-white rounded-xl cursor-pointer transition-colors duration-200"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>

      {/* Proprietary Technical Vector Panel (Protected Intellectual Property display) */}
      <div className="lg:col-span-5 flex flex-col gap-6">
        <div className="bg-slate-900/40 border border-slate-800/80 rounded-3xl p-6 backdrop-blur-md">
          <div className="flex items-center gap-2 mb-4">
            <Terminal className="text-indigo-400 w-5 h-5" />
            <h3 className="font-mono text-sm font-bold text-slate-200 select-none">
              {t.vectorConsole}
            </h3>
          </div>

          {/* Secure Abstract Overlay representation */}
          <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800/50 font-mono text-[11px] text-slate-400 space-y-4">
            <div className="flex justify-between border-b border-slate-900 pb-2">
              <span className="text-slate-500">GATEWAY_ENCRYPTION</span>
              <span className="text-emerald-500 font-bold">AES_256_GCM</span>
            </div>
            
            <div className="space-y-2">
              <div className="text-indigo-400 font-bold font-sans">
                {lang === 'fa' ? 'معماری محافظت‌شده لایه ارائه:' : lang === 'ar' ? 'مخطط كبسلة وعزل لغة العرض:' : 'Presentation Layer Abstraction Map:'}
              </div>
              <div className="text-slate-300 text-xs font-sans leading-relaxed">
                {lang === 'fa'
                  ? 'این پنل الگوهای انتزاعی متدهای هوش مصنوعی احساسی را شبیه‌سازی می‌کند. محاسبات پیچیده تر کیب لحن و پارامتر سنجش به همراه متدهای تطبیق عصبی در سرور ما کپسوله‌شده‌اند و کدهای لایه فرانت‌اند به تنهایی قابلیت درز اطلاعات را نخواهند داشت.'
                  : lang === 'ar'
                  ? 'تقوم هذه اللوحة بنمذجة مسارات المشاعر العاطفية بشكل مشفر. حسابات المتجهات المعقدة ونبرة الصوت وصمامات الحماية مستضافة بالكامل في الخلفية الآمنة، متجاوزة خطر تسريب الشيفرة الأساسية.'
                  : 'This matrix models the secure abstract hooks. The high-performance vectors are calculated via RPC endpoint encapsulation. Third parties lack direct root file visibility, securing perfect immunity to theft.'}
              </div>
            </div>

            <div className="space-y-1 pt-2 border-t border-slate-900">
              <div className="flex justify-between">
                <span>COG_NODE_WEIGHTS:</span>
                <span className="text-slate-300">SECURE_ABSTR_VAL_0x9A</span>
              </div>
              <div className="flex justify-between">
                <span>SENTIMENT_PARSER:</span>
                <span className="text-slate-300">ACTIVE: {currentEmotion.id.toUpperCase()}</span>
              </div>
              <div className="flex justify-between">
                <span>VOCAL_SYNAPSE:</span>
                <span className="text-slate-300">SIMULATED_CORE</span>
              </div>
            </div>

            {/* Virtual Graphic Matrix representing neural weights */}
            <div className="h-20 bg-slate-900/60 rounded-lg p-2.5 flex items-end justify-between gap-1 overflow-hidden">
              {Array.from({ length: 24 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="w-full bg-indigo-500/30 rounded-t"
                  style={{
                    backgroundColor: currentEmotion.color,
                    height: `${20 + Math.sin(i * 0.5 + parseFloat(tempMetrics.syncRate.toString())) * 40 + Math.random() * 20}%`
                  }}
                  animate={{
                    height: isProcessing 
                      ? [`${10 + Math.random() * 80}%`, `${30 + Math.random() * 60}%`] 
                      : [`${20 + Math.sin(i * 0.5) * 40}%`]
                  }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* IP Safeguard Callout */}
        <div className="bg-gradient-to-r from-slate-900/60 to-indigo-950/20 border border-slate-800/80 rounded-3xl p-6 backdrop-blur-md flex items-start gap-4">
          <div className="p-3 bg-indigo-500/10 rounded-2xl border border-indigo-500/20 text-indigo-400 mt-1">
            <ShieldCheck className="w-5 h-5 animate-pulse" />
          </div>
          <div className="space-y-1">
            <h4 className="text-slate-200 text-sm font-bold font-sans">
              {lang === 'fa' ? 'امنیت فکری کامل' : lang === 'ar' ? 'سيادة وحماية الملكية الفكرية' : 'Intellectual Property Sovereign'}
            </h4>
            <p className="text-slate-400 text-xs leading-relaxed font-sans">
              {lang === 'fa'
                ? 'پروتکل امنیتی اتمیک برنامه مانع از بارگذاری ناخواسته ساختار شبکه‌ی وزن‌ها در گیتهاب یا مرورگر می‌شود. بدین تریتب، ارزش مادی و معنوی ایده شما برای جذب اسپانسر کاملا حفظ می‌گردد.'
                : lang === 'ar'
                ? 'تمنع بروتوكولات الأمان الذاتية أي تسريب غير مقصود لبنية الأوزار والشبكات العصبية في المتصفح أو مستودعات الكود المفتوح، واقيةً القيمة الاستثمارية لشركائنا.'
                : 'Atomic abstract patterns safeguard code compilation against unintended exports. Secure enterprise value is ensured for pitching, preserving complete intellectual property assets.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
