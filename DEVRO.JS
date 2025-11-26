// DEVRO.js 

// Dictionary i plotë i përkthimeve
const translations = {
    sq: { 
        page_title: 'DEVRO - Zgjidhje e Fuqishme Për Biznes Modern',
        nav_about: 'Rreth Nesh', nav_features: 'Veçoritë', nav_pricing: 'Çmimet', nav_contact: 'Kontaktoni', cta_signup: 'Regjistrohu',
        hero_headline: 'Zgjidhje e fuqishme për biznes modern', hero_subtitle: 'Një përshkrim i shkurtër por bindës i produktit ose shërbimit kryesor.',
        btn_get_started: 'Fillo Tani', btn_learn_more: 'Mëso Më Shumë', btn_show_less: 'Më Pak', 
        details_why_us: 'Pse të na Zgjidhni Ne?',
        about_expanded_text: 'DEVRO është partneri juaj i besuar për shndërrimin e ideve dixhitale në realitete të prekshme. Ne specializohemi në krijimin e uebsajteve dhe aplikacioneve të personalizuara që nuk janë vetëm vizualisht tërheqëse, por që performojnë në mënyrë të jashtëzakonshme. Qëllimi ynë është të sigurojmë zgjidhje që rrisin dukshmërinë tuaj në internet, optimizojnë proceset e biznesit dhe u ofrojnë klientëve tuaj një përvojë të paharrueshme dixhitale.',
        pricing_headline: 'Planet Tona të Çmimeve',
        plan_basic_title: 'Plani Starter (Nisës)',
        price_onetime: '/ Njëherësh',
        plan_basic_cta: 'Zgjidh Planin',
        plan_select_starter: 'Ju zgjodhët Plani Starter. Plotësoni detajet për të konfirmuar.',
        modal_title: 'Regjistrohu për Të Filluar', modal_subtitle: 'Plotësoni detajet më poshtë dhe ne do t\'ju kontaktojmë brenda 24 orëve.',
        modal_name_label: 'Emri i Plotë', modal_email_label: 'E-mail Adresa', modal_details_label: 'Si mund t\'ju ndihmojmë?', modal_submit_btn: 'Dërgo Kërkesën',
        footer_copyright: 'DEVRO © 2024. Të gjitha të drejtat të rezervuara.'
    },
    en: { 
        page_title: 'DEVRO - Powerful Solution for Modern Business',
        nav_about: 'About Us', nav_features: 'Features', nav_pricing: 'Pricing', nav_contact: 'Contact', cta_signup: 'Sign Up',
        hero_headline: 'Powerful solution for modern business', hero_subtitle: 'A short but convincing description of the main product or service.',
        btn_get_started: 'Get Started', btn_learn_more: 'Learn More', btn_show_less: 'Show Less',
        details_why_us: 'Why Choose Us?',
        about_expanded_text: 'DEVRO is your trusted partner for transforming digital ideas into tangible realities. We specialize in creating custom websites and applications that are not only visually appealing but perform exceptionally. Our goal is to provide solutions that increase your online visibility, optimize business processes, and offer your clients an unforgettable digital experience.',
        pricing_headline: 'Our Pricing Plans',
        plan_basic_title: 'Starter Plan',
        price_onetime: '/ One-time',
        plan_basic_cta: 'Select Plan',
        plan_select_starter: 'You chose the Starter Plan. Fill in the details to confirm.',
        modal_title: 'Sign Up to Get Started', modal_subtitle: 'Fill in the details below and we will contact you within 24 hours.',
        modal_name_label: 'Full Name', modal_email_label: 'Email Address', modal_details_label: 'How can we help you?', modal_submit_btn: 'Send Request',
        footer_copyright: 'DEVRO © 2024. All rights reserved.'
    },
    de: { /* Përkthime të tjera... */ }
};

let currentLanguage = 'sq';

function updateContent(lang) {
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[lang] && translations[lang][key]) {
            if (element.tagName === 'TITLE') {
                document.title = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });
    // Kujdeset për butonin "Mëso Më Shumë"
    const hiddenText = document.getElementById('aboutExpandedText');
    if (hiddenText) { updateLearnMoreButton(hiddenText.classList.contains('visible')); }
    
    // Kujdeset për copyright
    const copyrightElement = document.getElementById('footerCopyright');
    if (copyrightElement) { copyrightElement.textContent = translations[lang].footer_copyright; }
}

function saveLanguage(lang) { localStorage.setItem('selectedLanguage', lang); }
function loadLanguage() { return localStorage.getItem('selectedLanguage') || 'sq'; }

document.addEventListener('DOMContentLoaded', () => {
    currentLanguage = loadLanguage();
    const langSelect = document.getElementById('language-select');
    
    if (langSelect) {
        langSelect.value = currentLanguage;
        langSelect.addEventListener('change', (event) => {
            currentLanguage = event.target.value;
            saveLanguage(currentLanguage);
            updateContent(currentLanguage);
        });
    }

    updateContent(currentLanguage);

    const learnMoreBtn = document.getElementById('learnMoreBtn');
    if (learnMoreBtn) { learnMoreBtn.addEventListener('click', toggleAboutExpansion); }
    
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenu && navLinks) {
        mobileMenu.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = mobileMenu.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        });
        
        // Mbyll menunë kur klikohet një link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                setTimeout(() => {
                    navLinks.classList.remove('active');
                    const icon = mobileMenu.querySelector('i');
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }, 150);
            });
        });
    }

    initModalFunctionality();
});

function toggleAboutExpansion(e) {
    e.preventDefault(); // Ndalon lëvizjen (scroll) të lidhjes
    const hiddenText = document.getElementById('aboutExpandedText');
    const isVisible = hiddenText.classList.toggle('visible');
    
    updateLearnMoreButton(isVisible);

    // Lëviz tek seksioni "Rreth Nesh" pasi hapet teksti
    if (isVisible) {
        const aboutSection = document.getElementById('about');
        setTimeout(() => { aboutSection.scrollIntoView({ behavior: 'smooth' }); }, 700);
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

function openModal(plan = null, action = 'register') {
    const modal = document.getElementById('registrationModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalSubtitle = document.getElementById('modalSubtitle');
    const modalDetails = document.getElementById('modal-details');
    const modalForm = document.querySelector('.modal-form');

    if (modal && modalTitle && modalSubtitle && modalDetails && modalForm) {
        modalForm.reset();
        modalTitle.textContent = translations[currentLanguage].modal_title;
        modalSubtitle.textContent = translations[currentLanguage].modal_subtitle;

        let prefillText = '';

        if (action === 'plan' && plan) {
            let planMessage = '';
            if (plan === 'starter') { planMessage = translations[currentLanguage].plan_select_starter; } 
            
            prefillText = planMessage;
        }
        
        modalDetails.value = prefillText;
        modal.style.display = 'block';
    }
}

function closeModal() {
    const modal = document.getElementById('registrationModal');
    if (modal) { modal.style.display = 'none'; }
}

function initModalFunctionality() {
    const modal = document.getElementById('registrationModal');
    const closeBtn = document.querySelector('.modal .close-btn');

    const signupBtn = document.getElementById('signupCtaBtn');
    if (signupBtn) signupBtn.addEventListener('click', () => openModal('General', 'register'));
    
    document.querySelectorAll('.plan-cta').forEach(button => {
        button.addEventListener('click', () => {
            const planName = button.getAttribute('data-plan');
            openModal(planName, 'plan');
        });
    });

    if (closeBtn) closeBtn.addEventListener('click', closeModal);

    window.addEventListener('click', (event) => {
        if (event.target === modal) { closeModal(); }
    });

    const modalForm = document.querySelector('.modal-form');
    if (modalForm) {
        modalForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert("Kërkesa u dërgua me sukses! Ju do të kontaktoheni së shpejti."); 
            closeModal();
        });
    }
}