/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { TranslationSet } from './types';

export const translations: Record<'en' | 'fa' | 'ar', TranslationSet & Record<string, any>> = {
  en: {
    title: "Emotion-Centric AI",
    subtitle: "Interactive Architectural Mockup",
    tagline: "High-Fidelity Sponsor Demonstration & Intellectual Property Safeguard",
    switchLang: "فارسی",
    introText: "Welcome to the interactive prototype of Emotion-Centric AI. This demo has been designed on Google AI Studio as a closed-source sandbox to showcase our high-fidelity UX patterns, visual engine, and acoustic modulation architecture to investors and sponsors. By abstracting the core logic, our cognitive engine and proprietary weights remain fully protected against direct code replication or reverse-engineering.",
    
    // Sandbox
    sandboxTitle: "Interactive Emotion Sandbox",
    sandboxIntro: "Type an emotionally charged sentence, or click one of the quick scenarios below. The AI's cognitive orb will analyze user sentiment in real-time and adapt its temperament, response modulation, and visually emit customized bio-rhythms.",
    orbStatus: "Cognitive Orb Temperament",
    typeMessagePlaceholder: "Type your query to test emotional synergy...",
    sendMessage: "Analyze & Respond",
    vectorConsole: "Proprietary Cognitive Vectors (Protected IP)",
    latency: "Processing Latency",
    synapticSync: "Synaptic Sync Node",
    energyShift: "Orb Energy Shift",
    suggestedScenarios: "Suggested Demonstration Scenarios",
    scenario1Name: "Exhausted Worker",
    scenario1Text: "I am absolutely exhausted today... I have so much left to complete but I have zero energy. I feel overwhelmed.",
    scenario2Name: "Triumphant Innovator",
    scenario2Text: "We finally fixed the core engine! The sponsor pitch is ready, and it feels absolutely amazing!",
    scenario3Name: "Deep Reflection",
    scenario3Text: "Sometimes I wonder where we are heading. It's peaceful to program in the quiet midnight warmth, just seeking answers.",
    scenario4Name: "Anxious Presenter",
    scenario4Text: "What if they don't like my presentation? What if I fail this pitch? My heart is beating so fast.",

    // IP Protection & Architecture
    protectionTitle: "Intellectual Property Guard Rails",
    protectionIntro: "Why we demonstrate through interactive mockups rather than full repository publication:",
    ipCard1Title: "Algorithm Encapsulation",
    ipCard1Desc: "Our core emotion sentiment parser uses advanced synaptic weights. Keeping this demo at a client-side layout abstraction ensures our core mathematical vectors cannot be downloaded or reverse-engineered.",
    ipCard2Title: "API Gateways",
    ipCard2Desc: "Our actual production runtime works through secure, end-to-end encrypted RPC endpoints that sit behind solid enterprise firewalls, rendering direct injection attacks impossible.",
    ipCard3Title: "Acoustic Synthesizer",
    ipCard3Desc: "Our proprietary vocal rhythm modulator controls conversational breathing and voice pitch, simulated here visually but securely protected in our backend layers.",

    // ROI / Sponsorship
    roiTitle: "Sponsorship & Investment Estimator",
    roiSub: "Tune the sliders to see what Emotion-Centric AI can achieve in a enterprise system.",
    metric1Label: "Core User Base Size",
    metric2Label: "Projected Retention Increase",
    metric3Label: "Target Integration Cost Savings",
    roiResultLabel: "Projected Annual Value Delivery",
    sponsorFormTitle: "Secure Pitch Request",
    sponsorFormSub: "Request an NDA-protected copy of the complete Whitepaper and live API keys.",
    sponsorName: "Your Full Name / Organization",
    sponsorEmail: "Corporate Email Address",
    sendRequest: "Submit Secure Proposal Request",
    ndaSuccess: "Secure encryption link initiated. Our project leads will email your organization a secure, cryptographically signed NDA.",
    backToTop: "Back to Top",
    researchNoticeTitle: "Research & Development Insights",
    researchNoticeDesc: "This interactive architectural mockup represents an abstract segment of our active academic and industrial R&D research study. We explore dynamic biological states, human-centered NLP synergies, and adaptive voice/vibe modulations to reduce software user anxiety and promote cognitive health.",
    collaborateTitle: "Warm Invitation to Innovators & Visionary Sponsors",
    collaborateDesc: "We sincerely and warmly welcome like-minded developers, AI scientists, passionate researchers, and potential funding sponsors to join this movement. If you feel aligned with our vision and wish to explore clinical pilots, joint publications, or help sponsor further development, we invite you to connect with us. Together, let's craft an incredibly empathetic tomorrow.",
    supportEmailLabel: "Direct Contact Email",
    linkedinLabel: "LinkedIn Profile",

    // Emotion Names
    joy: "Joy & Celebration",
    sorrow: "Sorrow & Empathy",
    stress: "Stress & Anxiety",
    calm: "Peace & Tranquility",
    excitement: "Dynamic Excitement",
    curious: "Intellectual Curiosity",

    // AI Responses for Scenarios
    resJoy: "I can feel your triumphant energy! This is a tremendous achievement. Let's celebrate this milestone – code by code, step by step. You earned this victory!",
    resSorrow: "I hear you, and it is completely natural to feel exhausted when you are carrying so much weight. Take a deep breath. You don't have to carry it all right this second. I'm here to support you at your own pace.",
    resStress: "Breathe with me for a moment. Slow down... Let's break this massive wave into small, manageable drops. You are fully capable, and we will walk through each step together. One single task at a time.",
    resCalm: "The quiet quietness of the night is a beautiful generator of wisdom. Let's embrace this calm wavelength to craft something balanced and elegant. What thoughts are floating in your sky?",
    resExcitement: "Incredible energy! The kinetic momentum is moving rapidly. Let's capitalize on this focus window and transform your inspiration into beautiful, pristine architectures!",
    resCurious: "Fascinating query! Analyzing coordinates from multiple nodes shows an elegant intersection. Let's dive deep into the underlying mechanics of this pattern together."
  },
  fa: {
    title: "هوش مصنوعی احساس‌محور",
    subtitle: "ماکت تعاملی معماری نرم‌افزار",
    tagline: "دموی باکیفیت اسپانسر و محافظت از مالکیت معنوی طرح",
    switchLang: "English",
    introText: "به نسخه آزمایشی و تعاملی هوش مصنوعی احساس‌محور خوش آمدید. این ماکت در گوگل ای‌آی استودیو به عنوان یک فضای ایزوله و محافظت‌شده طراحی شده تا الگوهای تجربه کاربری پیشرفته، موتور بصری و معماری مدولاسیون صوتی را بدون لو رفتن کدهای اصلی به سرمایه‌گذاران و حامیان مالی نشان دهد. با انتزاعی‌کردن لایه‌های پیچیده، کدهای هسته مرکزی و فرمول‌های محاسباتی ما از کپی‌برداری غیرقانونی، مهندسی معکوس و تملک معنوی غیرمجاز کاملا در امان خواهند بود.",
    
    // Sandbox
    sandboxTitle: "محیط تعاملی کاوش احساسات",
    sandboxIntro: "یک جمله با بار احساسی تایپ کنید یا روی یکی از سناریوهای آماده زیر کلیک کنید. گویِ شناختیِ هوش مصنوعی در همان لحظه احساس شما را تحلیل کرده، لحن و واکنش‌هایش را همگام می‌سازد و ریتم‌های بصری زیستی منعکس می‌کند.",
    orbStatus: "وضعیت خلقی گوی شناختی AI",
    typeMessagePlaceholder: "چیز جالبی بنویسید تا همگامی احساسی را حس کنید...",
    sendMessage: "تحلیل احساس و پاسخ",
    vectorConsole: "بردار تداعی‌گر هوش احساسی (مالکیت معنوی محافظت‌شده)",
    latency: "تاخیر پردازش شناختی",
    synapticSync: "همگام‌سازی گره‌های سیناپسی",
    energyShift: "جهش فرکانس انرژی گوی",
    suggestedScenarios: "سناریوهای شبیه‌سازی‌شده برای ارائه به سرمایه‌گذاران",
    scenario1Name: "کارمند خستگی‌ناپذیر اما درمانده",
    scenario1Text: "امروز واقعا به شدت خسته‌ام... کلی کار روی سرم ریخته ولی هیچ انرژی و انگیزه‌ای ندارم. احساس غرق شدن می‌کنم.",
    scenario2Name: "نوآور پیروز و مصمم",
    scenario2Text: "بالاخره موتور اصلی کد رو دیباگ کردیم! دموی ارائه به سرمایه‌گذار آماده شد و حس فو‌ق‌العاده‌ای دارم!",
    scenario3Name: "تفکر عمیق نیمه‌شب",
    scenario3Text: "گاهی اوقات به این فکر می‌کنم که به کجا می‌ریم. برنامه‌نویسی توی آرامش و سکوت دلنشین نیمه‌شب احساس قشنگی داره.",
    scenario4Name: "ارائه‌دهنده نگران و مضطرب",
    scenario4Text: "نکنه از ارائه‌ام خوششون نیاد؟ اگه توی این جلسه شکست بخورم چی؟ تپش قلب گرفتم و دستام داره می‌لرزه.",

    // IP Protection & Architecture
    protectionTitle: "دیوارهای امنیتی حافظ مالکیت معنوی",
    protectionIntro: "چرا ایده ناب خود را در قالب ماکت تعاملی ارائه‌ می‌دهیم و از انتشار مستقیم کدها در گیت‌هاب پابلیک خودداری می‌کنیم:",
    ipCard1Title: "کپسوله‌سازی الگوریتم‌ها",
    ipCard1Desc: "بخش تجزیه احساسات ما بر پایه‌ی بردارهای اختصاصی شبکه‌ عصبی کار می‌کند. نگه داشتن کدهای اصلی در سرورهای ابری امن و نمایش بصری کارکرد آن در قالب ماکت، دسترسی مستقیم به هسته ماتریکس را مسدود می‌کند.",
    ipCard2Title: "دروازه‌های امن ارتباطی (API Gateways)",
    ipCard2Desc: "در محیط واقعی، فرآیندهای محاسباتی پشت دیوارهای آتشین محافظت‌شده و از طریق پروتکل‌های رمزگذاری‌شده RPC اجرا می‌شوند، که جلوی نفوذ یا سوءاستفاده رقبا را می‌گیرد.",
    ipCard3Title: "سنتزکننده صوتی تطبیقی",
    ipCard3Desc: "سیستم اختصاصی ما فرکانس لحن صدا و تنفس ربات را با احساس مخاطب سازگار می‌سازد و در این ماکت به صورت بصری مدل‌سازی شده تا گامی امن در محافظت ایده باشد.",

    // ROI / Sponsorship
    roiTitle: "تخمین ارزش تجاری برای حامیان مالی",
    roiSub: "با تغییر فاکتورها، تاثیر شگرف ادغام هوش مصنوعی احساس‌محور در بازدهی کسب‌وکارها را برآورد کنید.",
    metric1Label: "حجم کاربران هدف سیستم",
    metric2Label: "نرخ افزایش ماندگاری کاربر (Retention)",
    metric3Label: "صرفه‌جویی در پشتیبانی سنتی",
    roiResultLabel: "ارزش ارزی خلق‌شده سالانه",
    sponsorFormTitle: "ثبت درخواست امن و دریافت پروپوزال",
    sponsorFormSub: "برای دریافت پروپوزال رسمی و دسترسی به نسخه اختصاصی، ایمیل سازمانی خود را وارد کنید تا توافق‌نامه عدم افشا (NDA) ارسال شود.",
    sponsorName: "نام کامل شما / شرکت متقاضی",
    sponsorEmail: "آدرس ایمیل کاری و رسمی",
    sendRequest: "ثبت درخواست و ارسال NDA رمزگذاری‌شده",
    ndaSuccess: "درخواست شما با موفقیت در لایه امن ثبت شد. توافق‌نامه رسمی عدم افشای اطلاعات (NDA) تا دقایقی دیگر به ایمیل شما ارسال خواهد شد.",
    backToTop: "بازگشت به ابتدای صفحه",
    researchNoticeTitle: "ماهیت پژوهشی و فرآیند توسعه علمی",
    researchNoticeDesc: "این شبیه‌ساز تعلیمی و ماکت بصری، بخشی از کارهای علمی و پژوهش‌های جاری توسعه‌محور در حوزه مانیتورینگ بیومتریک غیرمستقیم، تحلیل الگوهای روانی در زبان طبیعی (NLP) و مدولاسیون تطبیقی کلام ماشین است. هدف این پژوهش، مدل‌سازی رابط‌های کاربری همدل برای پیشگیری از پیامدهای ناشی از تنش‌های روانی کاری است بدون آنکه در هیچ مرحله‌ای اطلاعات شخصی یا کلیدهای امنیتی به خطر افتند.",
    collaborateTitle: "دعوت گرم به همکاری همفکران و جذب اسپانسر",
    collaborateDesc: "توسعه این سیستم نیازمند همبستگی نخبگان و همفکران است. ما صمیمانه و با تواضع کامل از پژوهشگران، توسعه‌دهندگان، مهندسان علاقه‌مند به هوش عاطفی و حامیان مالی ارجمند دعوت می‌کنیم تا در این مسیر خلاقانه با ما مشارکت کنند. همفکری شما برای ما برگ زرینی است؛ پس در صورتی که تصمیم به یاری، هم‌افزایی علمی یا حمایت مالی گرفته‌اید، قدم روی چشمان ما بگذارید و با ما مکاتبه کنید تا آینده بهتری خلق کنیم.",
    supportEmailLabel: "مکاتبه مستقیم با مدیر و تیم توسعه",
    linkedinLabel: "پروفایل لینکدین",

    // Emotion Names
    joy: "عشق، شادی و غرور",
    sorrow: "غم‌خواری، درک و پذیرش",
    stress: "فشار روانی و اضطراب",
    calm: "آرامش درون و صلح",
    excitement: "هیجان پرشور و انگیزه",
    curious: "کنجکاوی ذهنی و تحلیل",

    // AI Responses for Scenarios
    resJoy: "واو! چقدر فوق‌العاده است! حس پیروزی و تلاش پرثمر شما رو کاملاً درک می‌کنم. این یک دستاورد بزرگ برای تیم شماست، خسته نباشید دوست من!",
    resSorrow: "صدای خستگی رو در کلماتت می‌شنوم. اصلاً اشکالی نداره که گاهی اوقات اینطور باشی. بیش از حد به خودت سخت نگیر، بیا کارها رو خرد کنیم تا برات سنگین نباشن.",
    resStress: "یک لحظه کار رو متوقف کن و با من یک دم و بازدم عمیق داشته باش... نگران نباش، جلسات پله‌پله جلو میرن. تو تمام پتانسیل لازم رو داری و ما با هم پیش میریم.",
    resCalm: "سکوت و خلوت شبانه بهترین مامن برای الهام‌بخشی است. در کمال صلح و تمرکز، می‌تونیم کارهای فوق‌العاده‌ای بنویسیم. چه ایده‌ای در ذهنت می‌چرخه؟",
    resExcitement: "این شور و هیجانت عالیه! این انرژی جنبشی شتاب عجیبی به پیشرفت کارها میده. بیا از این پنجره‌ی تمرکز طلایی کمال استفاده رو بکنیم!",
    resCurious: "موضوع بسیار پیچیده و عمیقیه! بیایید با تحلیل گره‌به‌گره و ترسیم بردارهای داده، ساختارش را موشکافی کنیم و به پاسخ برسیم."
  },
  ar: {
    title: "الذكاء الاصطناعي العاطفي",
    subtitle: "نموذج معماري تفاعلي",
    tagline: "عرض عالي الدقة للرعاة وحماية كاملة للملكية الفكرية",
    switchLang: "العربية",
    introText: "مرحبًا بكم في النموذج الأولي التفاعلي للذكاء الاصطناعي القائم على المشاعر. تم تصميم هذا العرض التوضيحي على Google AI Studio كبيئة آمنة ومغلقة المصدر لعرض واجهات الاستخدام المتقدمة والأنظمة المرئية وهياكل التنغيم الصوتي للمستثمرين والرعاة. من خلال عزل الشيفرة البرمجية الأساسية، تظل خوارزمياتنا وأوزاننا العصبية الحيوية محمية بالكامل ضد أي نسخ أو هندسة عكسية.",
    
    // Sandbox
    sandboxTitle: "بيئة المشاعر التفاعلية",
    sandboxIntro: "اكتب جملة تحمل شحنة عاطفية، أو انقر فوق أحد السيناريوهات المقترحة أدناه. ستقوم الكرة المعرفية بتحليل مشاعرك في الوقت الفعلي وضبط تردداتها الصوتية، ونبضاتها البصرية المتطابقة حيوياً.",
    orbStatus: "نظام الكرة المعرفية النشط",
    typeMessagePlaceholder: "اكتب شيئاً لاختبار التناغم العاطفي التفاعلي...",
    sendMessage: "تحليل واستجابة",
    vectorConsole: "المتجهات المعرفية الخاصة (ملكية فكرية محمية)",
    latency: "زمن معالجة الإدراك",
    synapticSync: "مزامنة العقد السينابسية",
    energyShift: "تحول طاقة الكرة",
    suggestedScenarios: "السيناريوهات المقترحة للعرض التوضيحي والرعاة",
    scenario1Name: "الموظف المرهق بشدة",
    scenario1Text: "أنا مرهق تماماً اليوم... لدي الكثير لإنجازه ولكن طاقتي صفر. أشعر بالضغط الشديد والجهد المتراكم.",
    scenario2Name: "المبتكر المنتصر",
    scenario2Text: "لقد نجحنا في إصلاح المحرك البرمجي الأساسي! عرض الرعاية جاهز الآن، والشعور رائع للغاية!",
    scenario3Name: "التأمل الهادئ منتصف الليل",
    scenario3Text: "أحياناً أتساءل إلى أين نتجه. من الجميل جداً البرمجة في هدوء وسكينة منتصف الليل الدافئ، بحثاً عن إجابات.",
    scenario4Name: "المتحدث القلق والمضطرب",
    scenario4Text: "ماذا لو لم يعجبهم عرضي التقديمي؟ ماذا لو فشلت في هذا اللقاء؟ نبضات قلبي سريعة جداً ويدي ترتجف.",

    // IP Protection & Architecture
    protectionTitle: "جدران حماية الملكية الفكرية والخصوصية",
    protectionIntro: "لماذا نقدم فكرتنا الرائدة من خلال نموذج تفاعلي محمي بدلاً من النشر العام على GitHub:",
    ipCard1Title: "تغليف الخوارزميات",
    ipCard1Desc: "يعتمد نظام تحليل المشاعر لدينا على أوزان حيوية وشبكات عصبية خاصة. إبقاء العرض في لغة عرض مجردة يضمن عدم تمكن أي طرف من تحميل المتجهات الرياضية للأوزان العصبية.",
    ipCard2Title: "بوابات الاتصال الآمنة (API)",
    ipCard2Desc: "تعمل برمجياتنا الحقيقية خلف جدران حماية صلبة مستضافة سحابياً عبر بروتوكولات RPC مشفرة، مما يستبعد أي محاولات اختراق أو تسريب.",
    ipCard3Title: "المصنع الصوتي المتكيف",
    ipCard3Desc: "يقوم نظامنا بتعديل وتوليد نبرات الصوت ومعدل التنفس لتتطابق مع الحالة النفسية للمستخدم بصرياً وحيوياً، وهو محمي تماماً في طبقات الخادم الآمن.",

    // ROI / Sponsorship
    roiTitle: "تقدير القيمة والعائد للمستثمرين والرعاة",
    roiSub: "قم بضبط المؤشرات لرؤية الأثر الكبير لدمج الذكاء الاصطناعي العاطفي في الأنظمة المؤسسية والمشاريع الريادية.",
    metric1Label: "حجم المستخدمين المستهدفين",
    metric2Label: "نسبة الزيادة المتوقعة في الاحتفاظ بالعملاء (Retention)",
    metric3Label: "معدل التوفير في تكاليف الدعم التقليدي",
    roiResultLabel: "القيمة السنوية المتوقعة للمشروع",
    sponsorFormTitle: "طلب عرض آمن وتقديم المقترحات",
    sponsorFormSub: "أدخل بريدك المؤسسي لتلقي العرض الرسمي واتفاقية عدم الإفصاح المتبادلة (NDA) وتجربة المزايا الحقيقية.",
    sponsorName: "اسمك الكامل / اسم المنظمة المتقدمة",
    sponsorEmail: "عنوان البريد الإلكتروني المؤسسي الرسمي",
    sendRequest: "تقديم الطلب وإرسال اتفاقية NDA مشفرة والملف التقني",
    ndaSuccess: "تم إنشاء رابط الاتصال الآمن بنجاح. سنرسل اتفاقية عدم إفصاح رسمية وموقعة رقمياً إلى بريدكم الوجداني خلال دقائق قليلة.",
    backToTop: "الرجوع إلى الأعلى للتحكم",
    researchNoticeTitle: "البعد البحثي وعملية التطوير العلمي",
    researchNoticeDesc: "يمثل هذا النموذج التفاعلي جانباً مجرداً من أبحاثنا الجارية في مختبرات البحث العلمي والتطوير الصناعي. نحن نستكشف المراقبة البيومترية غير المباشرة، وتناغم معالجة اللغة الطبيعية، والتعديل الصوتي المتكيف لتقليل التوتر النفسي وتحسين الصحة الإدراكية الرقمية.",
    collaborateTitle: "دعوة دافئة وصادقة للمبتكرين والرعاة الرائدين",
    collaborateDesc: "نرحب بصدق وبقلب مفتوح بجميع المطورين، علماء الذكاء الاصطناعي، والباحثين الشغوفين، والرعاة الذين يشاركوننا هذه الرؤية الإنسانية العميقة. إذا كنت تشعر بالتناغم مع أهدافنا وتود استكشاف شراكات علمية أو تجارية أو دعم تطوير المشروع، فإننا ندعوك بكل سرور للتواصل معنا لنصنع غداً أكثر تعاطفاً معاً.",
    supportEmailLabel: "التواصل المباشر مع المدير وفريق التطوير",
    linkedinLabel: "ملف لينكد إن",

    // Emotion Names
    joy: "الحب والبهجة والانتصار",
    sorrow: "التعاطف، الفهم والاحتواء الصادق",
    stress: "القلق والتوتر واهتزاز التردد",
    calm: "السكينة والسلام الداخلي",
    excitement: "الحماس المفرط والطاقة العالية",
    curious: "الفراسة، التحليل والاستكشاف العلمي",

    // AI Responses for Scenarios
    resJoy: "أشعر بطاقتك المنتصرة الرائعة! هذا إنجاز استثنائي يستحق الاحتفاء به خطوة بخطوة. لقد بذلت جهداً كبيراً وتستحق هذا الفوز الصادق!",
    resSorrow: "أسمع صدى التعب في كلماتك، ومن الطبيعي جداً أن تشعر بالإرهاق عندما تحمل على عاتقك الكثير. خذ نفساً عميقاً، لست مضطراً للحسم الآن. أنا هنا لدعمك بكل حب.",
    resStress: "توقف عن العمل للحظة وخذ معي شهيقاً وزفيراً عميقاً... لا تقلق، سنقوم بتبسيط المهام الكبيرة لنسهلها خطوة بخطوة. أنت قادر تماماً وسنتجاوز هذا معاً بكل ثقة.",
    resCalm: "هدوء منتصف الليل وسكينته يمثلان بيئة مثالية للإلهام والحكمة. لندع عقولنا تسترخي لنصنع بنى برمجية جميلة وبسيطة. ما الذي يدور في ذهنك؟",
    resExcitement: "حماس مذهل وطاقة حركية رائعة للغاية! دعنا نستغل نافذة التركيز الذهبي هذه لنحول هذا الشغف إلى روائع ملموسة وناجحة بكل إلهام!",
    resCurious: "موضوع غاية في الأهمية والعمق الدلالي! دعنا نقوم بتحليل المتجهات ورسم مسارات البيانات معاً لنصل إلى الإجابة النموذجية المستندة لأبحاثنا."
  }
};

export const emotions: Record<string, any>[] = [
  {
    id: 'calm',
    nameEn: 'Tranquil & Balanced',
    nameFa: 'صلح و آرامش درون',
    nameAr: 'السكينة والسلام الداخلي',
    color: '#10b981', // emerald
    glowColor: 'rgba(16, 185, 129, 0.6)',
    orbScale: 1.0,
    pulseSpeed: 4.5,
    vibrationIntensity: 1,
    themeGradient: 'from-emerald-950 via-slate-900 to-slate-950',
    metrics: { valence: 0.8, arousal: 0.1, dominance: 0.7, empathyIndex: 0.95 }
  },
  {
    id: 'joy',
    nameEn: 'Joyful & Empathetic',
    nameFa: 'شادی و شور زندگی',
    nameAr: 'البهجة والسرور والتمكين',
    color: '#eab308', // amber/gold
    glowColor: 'rgba(234, 179, 8, 0.7)',
    orbScale: 1.15,
    pulseSpeed: 2.2,
    vibrationIntensity: 2,
    themeGradient: 'from-amber-950 via-slate-900 to-slate-950',
    metrics: { valence: 0.95, arousal: 0.7, dominance: 0.8, empathyIndex: 0.9 }
  },
  {
    id: 'sorrow',
    nameEn: 'Melancholic & Empathetic',
    nameFa: 'درک متقابل و صمیمیت غمخوارانه',
    nameAr: 'الاحتواء والتعاطف المشترك',
    color: '#3b82f6', // blue
    glowColor: 'rgba(59, 130, 246, 0.55)',
    orbScale: 0.9,
    pulseSpeed: 6.0,
    vibrationIntensity: 0.8,
    themeGradient: 'from-blue-950 via-slate-900 to-slate-950',
    metrics: { valence: -0.6, arousal: 0.15, dominance: 0.3, empathyIndex: 0.99 }
  },
  {
    id: 'stress',
    nameEn: 'Vibrant but Stressed',
    nameFa: 'اضطراب و لرزش فرکانس',
    nameAr: 'التوتر واهتزاز التردد العصبي',
    color: '#ef4444', // red
    glowColor: 'rgba(239, 68, 68, 0.7)',
    orbScale: 0.85,
    pulseSpeed: 1.1,
    vibrationIntensity: 5,
    themeGradient: 'from-red-950 via-slate-900 to-slate-950',
    metrics: { valence: -0.5, arousal: 0.9, dominance: 0.4, empathyIndex: 0.8 }
  },
  {
    id: 'excitement',
    nameEn: 'Ecstatic & Motivated',
    nameFa: 'اشتیاق و انرژی مضاعف',
    nameAr: 'الحماس والشغف المتوقد',
    color: '#f97316', // orange
    glowColor: 'rgba(249, 115, 22, 0.75)',
    orbScale: 1.25,
    pulseSpeed: 1.5,
    vibrationIntensity: 4,
    themeGradient: 'from-orange-950 via-slate-900 to-slate-950',
    metrics: { valence: 0.9, arousal: 0.95, dominance: 0.9, empathyIndex: 0.85 }
  },
  {
    id: 'curious',
    nameEn: 'Analytical & Curious',
    nameFa: 'فراست، تفکر و کاوش علمی',
    nameAr: 'الفراسة والاستكشاف المعرفي',
    color: '#8b5cf6', // purple
    glowColor: 'rgba(139, 92, 246, 0.6)',
    orbScale: 1.05,
    pulseSpeed: 3.0,
    vibrationIntensity: 1.5,
    themeGradient: 'from-purple-950 via-slate-900 to-slate-950',
    metrics: { valence: 0.4, arousal: 0.5, dominance: 0.75, empathyIndex: 0.7 }
  }
];
