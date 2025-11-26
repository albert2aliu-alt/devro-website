// script.js

// Dictionary i plotë i përkthimeve
const translations = {
    sq: { // Albanian
        nav_about: 'Rreth Nesh',
        nav_features: 'Veçoritë',
        nav_pricing: 'Çmimet',
        nav_contact: 'Kontaktoni',
        cta_signup: 'Regjistrohu',
        hero_headline: 'Zgjidhje e fuqishme për biznes modern',
        hero_subtitle: 'Një përshkrim i shkurtër por bindës i produktit ose shërbimit kryesor.',
        btn_get_started: 'Fillo Tani',
        btn_learn_more: 'Mëso Më Shumë',
        btn_show_less: 'Më Pak', 
        details_why_us: 'Pse të na Zgjidhni Ne?',
        about_expanded_text: 'DEVRO është partneri juaj i besuar për shndërrimin e ideve dixhitale në realitete të prekshme. Ne specializohemi në krijimin e uebsajteve dhe aplikacioneve të personalizuara që nuk janë vetëm vizualisht tërheqëse, por që performojnë në mënyrë të jashtëzakonshme. Qëllimi ynë është të sigurojmë zgjidhje që rrisin dukshmërinë tuaj në internet, optimizojnë proceset e biznesit dhe u ofrojnë klientëve tuaj një përvojë të paharrueshme dixhitale.',
        feature1_title: 'Teknologji Moderne',
        feature1_description: 'Ne punojmë me standardet më të fundit të zhvillimit të uebit.',
        tech_html: 'HTML5/CSS3',
        tech_js: 'JavaScript ES6+',
        tech_responsive: 'Dizenjim Reagjues (Responsive)',
        feature2_title: 'Performancë & Shpejtësi',
        feature2_description: 'Faqja juaj do të jetë e shpejtë dhe e optimizuar për Google.',
        perf_seo: 'Optimizim i Bazuar në SEO',
        perf_speed: 'Ngarkim i Shpejtë i Faqes',
        perf_support: 'Mbështetje Teknike',
        feature3_title: 'Dizenjim Profesional',
        feature3_description: 'Përvoja e shkëlqyer e përdoruesit (UX) dhe ndërfaqja (UI).',
        design_custom: 'Dizenjim i Personalizuar',
        design_uiux: 'Fokus në UI/UX',
        design_branding: 'Përshtatje me Brendin',
        callout1_title: 'Krijoni Praninë Tuaj Online',
        callout1_description: 'Mos prisni, filloni projektin tuaj sot me ekspertët e DEVRO!',
        callout1_btn: 'Kërkoni Ofertë Falas',
        pricing_headline: 'Planet Tona të Çmimeve',
        price_onetime: ' / Njëherësh',
        price_contact: 'Kontakto',
        price_foroffer: ' / Për Ofertë',
        plan_basic_title: 'Plani Starter (Nisës)',
        plan_basic_cta: 'Zgjidh Planin',
        plan_basic_feature1: '1 Faqe Aterrimi (Landing Page)',
        plan_basic_feature2: 'Dizenjim Reagjues Bazik',
        plan_basic_feature3: 'Domen dhe Hosting (1 Vit)',
        plan_basic_feature4: 'Sistem Menaxhimi (CMS)',
        plan_standard_title: 'Plani Biznesor (Popullor)',
        plan_standard_cta: 'Zgjidh Planin',
        plan_standard_feature1: 'Deri në 5 Faqe (Home, About, Services...)',
        plan_standard_feature2: 'Dizenjim Unik & UI/UX',
        plan_standard_feature3: 'Hosting i Optimizuar (1 Vit)',
        plan_standard_feature4: 'Sistem Menaxhimi i Përmbajtjes (CMS)',
        plan_premium_title: 'Plani Custom (Premium)',
        plan_premium_cta: 'Kërkoni Ofertë',
        plan_premium_feature1: 'Zhvillim i plotë i aplikacionit (WebApp)',
        plan_premium_feature2: 'Funksionalitete të Personalizuara',
        plan_premium_feature3: 'Integrime me API/Pagesa',
        plan_premium_feature4: 'Mbështetje 24/7 dhe Trajnim',
        plan_select_starter: 'Ju zgjodhët **Planin Starter**. Plotësoni detajet për të konfirmuar.',
        plan_select_business: 'Ju zgjodhët **Planin Biznesor**. Fillo tani projektin tënd të ri!',
        plan_select_custom: 'Ju zgjodhët **Planin Custom**. Shkruani kërkesat tuaja specifike.',
        modal_prefill_plan_select: 'Dua të vazhdoj me planin: ',
        modal_prefill_contact: 'Përshëndetje DEVRO, dua të diskutoj një kërkesë të përgjithshme për uebsajt. Cilat janë hapat e radhës?',
        callout2_title: 'Gati të filloni projektin tuaj?',
        callout2_description: 'Na kontaktoni direkt sot për të diskutuar nevojat tuaja.',
        callout2_btn: 'Dërgo një E-mail',
        modal_title: 'Regjistrohu për Të Filluar',
        modal_subtitle: 'Plotësoni detajet më poshtë dhe ne do t\'ju kontaktojmë brenda 24 orëve.',
        modal_name_label: 'Emri i Plotë',
        modal_email_label: 'E-mail Adresa',
        modal_details_label: 'Si mund t\'ju ndihmojmë?',
        modal_submit_btn: 'Dërgo Kërkesën',
        footer_copyright: 'Të gjitha të drejtat e rezervuara.',
        page_title: 'DEVRO - Zgjidhje e Fuqishme Për Biznes Modern'
    },
    en: { // English
        nav_about: 'About Us',
        nav_features: 'Features',
        nav_pricing: 'Pricing',
        nav_contact: 'Contact',
        cta_signup: 'Sign Up',
        hero_headline: 'Powerful solution for modern business',
        hero_subtitle: 'A brief but compelling description of the main product or service.',
        btn_get_started: 'Get Started',
        btn_learn_more: 'Learn More',
        btn_show_less: 'Show Less',
        details_why_us: 'Why Choose Us?',
        about_expanded_text: 'DEVRO is your trusted partner for turning digital ideas into tangible realities. We specialize in creating custom websites and applications that are not only visually appealing but perform exceptionally well. Our goal is to provide solutions that boost your online visibility, optimize business processes, and offer your clients an unforgettable digital experience.',
        feature1_title: 'Modern Technology',
        feature1_description: 'We work with the latest web development standards.',
        tech_html: 'HTML5/CSS3',
        tech_js: 'JavaScript ES6+',
        tech_responsive: 'Responsive Design',
        feature2_title: 'Performance & Speed',
        feature2_description: 'Your website will be fast and optimized for Google.',
        perf_seo: 'SEO Optimization',
        perf_speed: 'Fast Page Load',
        perf_support: 'Technical Support',
        feature3_title: 'Professional Design',
        feature3_description: 'Excellent User Experience (UX) and Interface (UI).',
        design_custom: 'Custom Design',
        design_uiux: 'UI/UX Focus',
        design_branding: 'Brand Adaptation',
        callout1_title: 'Establish Your Online Presence',
        callout1_description: 'Don\'t wait, start your project today with DEVRO experts!',
        callout1_btn: 'Request Free Quote',
        pricing_headline: 'Our Pricing Plans',
        price_onetime: ' / One-time',
        price_contact: 'Contact',
        price_foroffer: ' / For Offer',
        plan_basic_title: 'Starter Plan',
        plan_basic_cta: 'Select Plan',
        plan_basic_feature1: '1 Landing Page',
        plan_basic_feature2: 'Basic Responsive Design',
        plan_basic_feature3: 'Domain and Hosting (1 Year)',
        plan_basic_feature4: 'Content Management System (CMS)',
        plan_standard_title: 'Business Plan (Popular)',
        plan_standard_cta: 'Select Plan',
        plan_standard_feature1: 'Up to 5 Pages (Home, About, Services...)',
        plan_standard_feature2: 'Unique Design & UI/UX',
        plan_standard_feature3: 'Optimized Hosting (1 Year)',
        plan_standard_feature4: 'Content Management System (CMS)',
        plan_premium_title: 'Custom Plan (Premium)',
        plan_premium_cta: 'Request Quote',
        plan_premium_feature1: 'Full WebApp Development',
        plan_premium_feature2: 'Custom Functionality',
        plan_premium_feature3: 'API/Payment Integrations',
        plan_premium_feature4: '24/7 Support and Training',
        plan_select_starter: 'You selected the **Starter Plan**. Fill in the details to confirm.',
        plan_select_business: 'You selected the **Business Plan**. Start your new project now!',
        plan_select_custom: 'You selected the **Custom Plan**. Write your specific requirements.',
        modal_prefill_plan_select: 'I want to proceed with the plan: ',
        modal_prefill_contact: 'Hello DEVRO, I would like to discuss a general website request. What are the next steps?',
        callout2_title: 'Ready to start your project?',
        callout2_description: 'Contact us directly today to discuss your needs.',
        callout2_btn: 'Send an E-mail',
        modal_title: 'Sign Up to Get Started',
        modal_subtitle: 'Fill in the details below and we will contact you within 24 hours.',
        modal_name_label: 'Full Name',
        modal_email_label: 'E-mail Address',
        modal_details_label: 'How can we help you?',
        modal_submit_btn: 'Submit Request',
        footer_copyright: 'All Rights Reserved.',
        page_title: 'DEVRO - Powerful Solution for Modern Business'
    },
    de: { // German
        nav_about: 'Über Uns',
        nav_features: 'Funktionen',
        nav_pricing: 'Preise',
        nav_contact: 'Kontakt',
        cta_signup: 'Anmelden',
        hero_headline: 'Leistungsstarke Lösung für modernes Geschäft',
        hero_subtitle: 'Eine kurze, aber überzeugende Beschreibung des Hauptprodukts oder der Dienstleistung.',
        btn_get_started: 'Jetzt starten',
        btn_learn_more: 'Mehr erfahren',
        btn_show_less: 'Weniger Anzeigen',
        details_why_us: 'Warum Sie uns wählen sollten?',
        about_expanded_text: 'DEVRO ist Ihr vertrauenswürdiger Partner, um digitale Ideen in greifbare Realitäten zu verwandeln. Wir sind spezialisiert auf die Erstellung maßgeschneiderter Websites und Anwendungen, die nicht nur optisch ansprechend sind, sondern auch hervorragende Leistungen erbringen. Unser Ziel ist es, Lösungen anzubieten, die Ihre Online-Sichtbarkeit erhöhen, Geschäftsprozesse optimieren und Ihren Kunden ein unvergessliches digitales Erlebnis bieten.',
        feature1_title: 'Moderne Technologie',
        feature1_description: 'Wir arbeiten mit den neuesten Webentwicklungsstandards.',
        tech_html: 'HTML5/CSS3',
        tech_js: 'JavaScript ES6+',
        tech_responsive: 'Responsives Design',
        feature2_title: 'Leistung & Geschwindigkeit',
        feature2_description: 'Ihre Website wird schnell und für Google optimiert sein.',
        perf_seo: 'SEO-Optimierung',
        perf_speed: 'Schnelles Laden der Seite',
        perf_support: 'Technischer Support',
        feature3_title: 'Professionelles Design',
        feature3_description: 'Ausgezeichnete Benutzererfahrung (UX) und Oberfläche (UI).',
        design_custom: 'Benutzerdefiniertes Design',
        design_uiux: 'Fokus auf UI/UX',
        design_branding: 'Markenanpassung',
        callout1_title: 'Etablieren Sie Ihre Online-Präsenz',
        callout1_description: 'Warten Sie nicht, starten Sie Ihr Projekt noch heute mit den Experten von DEVRO!',
        callout1_btn: 'Kostenloses Angebot anfordern',
        pricing_headline: 'Unsere Preispläne',
        price_onetime: ' / Einmalig',
        price_contact: 'Kontakt',
        price_foroffer: ' / Für Angebot',
        plan_basic_title: 'Starter-Plan',
        plan_basic_cta: 'Plan wählen',
        plan_basic_feature1: '1 Landingpage',
        plan_basic_feature2: 'Grundlegendes responsives Design',
        plan_basic_feature3: 'Domain und Hosting (1 Jahr)',
        plan_basic_feature4: 'Content Management System (CMS)',
        plan_standard_title: 'Geschäftsplan (Beliebt)',
        plan_standard_cta: 'Plan wählen',
        plan_standard_feature1: 'Bis zu 5 Seiten (Home, About, Services...)',
        plan_standard_feature2: 'Einzigartiges Design & UI/UX',
        plan_standard_feature3: 'Optimiertes Hosting (1 Jahr)',
        plan_standard_feature4: 'Content Management System (CMS)',
        plan_premium_title: 'Custom Plan (Premium)',
        plan_premium_cta: 'Angebot anfordern',
        plan_premium_feature1: 'Volle WebApp-Entwicklung',
        plan_premium_feature2: 'Benutzerdefinierte Funktionen',
        plan_premium_feature3: 'API/Zahlungsintegrationen',
        plan_premium_feature4: '24/7 Support und Schulung',
        plan_select_starter: 'Sie haben den **Starter-Plan** gewählt. Geben Sie Details zur Bestätigung ein.',
        plan_select_business: 'Sie haben den **Geschäftsplan** gewählt. Starten Sie jetzt Ihr neues Projekt!',
        modal_prefill_plan_select: 'Ich möchte mit dem Plan fortfahren: ',
        modal_prefill_contact: 'Hallo DEVRO, ich möchte eine allgemeine Website-Anfrage besprechen. Was sind die nächsten Schritte?',
        callout2_title: 'Bereit, Ihr Projekt zu starten?',
        callout2_description: 'Kontaktieren Sie uns noch heute direkt, um Ihre Bedürfnisse zu besprechen.',
        callout2_btn: 'E-Mail senden',
        modal_title: 'Anmelden, um zu starten',
        modal_subtitle: 'Füllen Sie die folgenden Details aus und wir werden Sie innerhalb von 24 Stunden kontaktieren.',
        modal_name_label: 'Vollständiger Name',
        modal_email_label: 'E-Mail-Adresse',
        modal_details_label: 'Wie können wir Ihnen helfen?',
        modal_submit_btn: 'Anfrage senden',
        footer_copyright: 'Alle Rechte vorbehalten.',
        page_title: 'DEVRO - Leistungsstarke Lösung für modernes Geschäft'
    }
};

let currentLanguage = 'sq'; 

// Funksioni për të zbatuar përkthimet
function applyTranslations(lang) {
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[lang] && translations[lang][key]) {
            // Për etiketat e thjeshta të tekstit
            if (element.tagName !== 'INPUT' && element.tagName !== 'TEXTAREA' && element.tagName !== 'SELECT') {
                element.innerHTML = translations[lang][key];
            } else if (element.tagName === 'INPUT' || element.tagName === 'BUTTON') {
                element.textContent = translations[lang][key];
            }
        }
    });
    // Përditëso titullin e faqes
    document.title = translations[lang].page_title || 'DEVRO';
    // Përditëso butonin e Mëso Më Shumë bazuar në gjendjen e shfaqjes
    updateLearnMoreButton(document.getElementById('expandedContentContainer').classList.contains('visible'));
    // Zgjidh butonin e duhur në modal
    const modalSubmitBtn = document.querySelector('.modal-form button[type="submit"]');
    if (modalSubmitBtn) {
        modalSubmitBtn.textContent = translations[lang].modal_submit_btn;
    }
}

// Funksioni për butonin "Mëso Më Shumë"
function toggleLearnMore() {
    const content = document.getElementById('expandedContentContainer');
    const button = document.getElementById('learnMoreBtn');

    const isVisible = content.classList.toggle('visible');
    
    // Përditëso tekstin e butonit
    updateLearnMoreButton(isVisible);

    // Lëviz tek seksioni pasi të jetë zgjeruar
    if (isVisible) {
        // Përdor setTimeout për të lejuar CSS-in të ndryshojë lartësinë
        setTimeout(() => {
            const rect = content.getBoundingClientRect();
            // Lëviz pak më lart se seksioni për shkak të header-it sticky
            window.scrollTo({
                top: window.scrollY + rect.top - 80, 
                behavior: 'smooth'
            });
        }, 700); 
    }
}

function updateLearnMoreButton(isVisible) {
    const button = document.getElementById('learnMoreBtn');
    if (button) {
        if (isVisible) {
            button.textContent = translations[currentLanguage].btn_show_less;
        } else {
            button.textContent = translations[currentLanguage].btn_learn_more;
        }
    }
}

// Funksioni për të hapur modalin (pop-up)
function openModal(plan = null, action = 'register') {
    const modal = document.getElementById('registrationModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalSubtitle = document.getElementById('modalSubtitle');
    const modalDetails = document.getElementById('modal-details');
    const modalSubmitBtn = document.querySelector('.modal-form button[type="submit"]');

    let newTitle = translations[currentLanguage].modal_title;
    let newSubtitle = translations[currentLanguage].modal_subtitle;
    let prefillDetails = '';
    
    // Logjika për Planet
    if (plan) {
        newTitle = plan + ' ' + translations[currentLanguage].modal_title; // P.sh. "Starter Regjistrohu..."
        if (plan === 'Starter') {
             newSubtitle = translations[currentLanguage].plan_select_starter;
             prefillDetails = translations[currentLanguage].modal_prefill_plan_select + 'Starter';
        } else if (plan === 'Business') {
            newSubtitle = translations[currentLanguage].plan_select_business;
            prefillDetails = translations[currentLanguage].modal_prefill_plan_select + 'Business';
        } else if (plan === 'Custom') {
            newSubtitle = translations[currentLanguage].plan_select_custom;
            prefillDetails = translations[currentLanguage].modal_prefill_plan_select + 'Custom';
        }
    } 
    // Logjika për Kontakt/Emailin
    else if (action === 'email') {
        newTitle = translations[currentLanguage].callout2_btn; // P.sh. "Dërgo një E-mail"
        newSubtitle = translations[currentLanguage].callout2_description;
        prefillDetails = translations[currentLanguage].modal_prefill_contact;
    }
    
    // Zbatimi i tekstit të modalit
    modalTitle.innerHTML = newTitle;
    modalSubtitle.innerHTML = newSubtitle; // Përdorim innerHTML për shkak të etiketave **
    modalDetails.value = prefillDetails;
    modalSubmitBtn.textContent = translations[currentLanguage].modal_submit_btn;

    modal.style.display = 'block';
}

// Funksioni për të mbyllur modalin (pop-up)
function closeModal() {
    const modal = document.getElementById('registrationModal');
    modal.style.display = 'none';
}

// Logjika pas ngarkimit të faqes
document.addEventListener('DOMContentLoaded', () => {
    // Inicializimi i Gjuhës
    const langSelect = document.getElementById('language-select');
    if (langSelect) {
        // Kontrollon nëse gjuha është ruajtur, përndryshe përdor 'sq'
        currentLanguage = localStorage.getItem('language') || 'sq';
        langSelect.value = currentLanguage;
        applyTranslations(currentLanguage);

        langSelect.addEventListener('change', (event) => {
            currentLanguage = event.target.value;
            localStorage.setItem('language', currentLanguage);
            applyTranslations(currentLanguage);
        });
    }

    // Inicializimi i vitit aktual në footer
    const currentYear = new Date().getFullYear();
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = currentYear;
    }

    // Lidhja e butonit "Mëso Më Shumë"
    const learnMoreBtn = document.getElementById('learnMoreBtn');
    if (learnMoreBtn) {
        learnMoreBtn.addEventListener('click', (e) => {
            e.preventDefault();
            toggleLearnMore();
        });
    }

    // Lidhja e Menu-së Celulare
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    if (mobileMenu) {
        mobileMenu.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = mobileMenu.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times'); // Ikonë e ndryshuar për mbyllje
        });
        // Mbyll menunë celulare pas klikimit të një linku
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                const icon = mobileMenu.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            });
        });
    }

    // --- LOGJIKA E MODALIT ---
    const modal = document.getElementById('registrationModal');
    const closeBtn = document.querySelector('.modal .close-btn');

    // Hap Modalin nga butoni i headerit (Regjistrohu)
    document.getElementById('signupCtaBtn').addEventListener('click', () => openModal('General', 'register'));
    
    // Hap Modalin nga butonat e planit (Zgjidh Planin/Kërkoni Ofertë)
    document.querySelectorAll('.plan-cta').forEach(button => {
        button.addEventListener('click', () => {
            const planName = button.getAttribute('data-plan');
            openModal(planName, 'plan');
        });
    });

    // Hap Modalin nga butoni i fundit (Dërgo një E-mail)
    document.getElementById('emailCtaBtn').addEventListener('click', () => openModal(null, 'email'));

    // Mbyll Modalin me X
    closeBtn.addEventListener('click', closeModal);

    // Mbyll Modalin kur klikohet jashtë tij
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    // Dërgimi i Formës (për demonstrim)
    const modalForm = document.querySelector('.modal-form');
    if (modalForm) {
        modalForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Këtu do të shkonte kodi për të dërguar të dhënat (p.sh., në një API ose shërbim EmailJS)
            alert(translations[currentLanguage].modal_submit_btn + ' u dërgua! Faleminderit!');
            closeModal();
            modalForm.reset();
        });
    }
});