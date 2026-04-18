// dpaul.studio — i18n translations
// Add more languages by adding a new key below.

const TRANSLATIONS = {
  en: {
    // ── Nav ──
    nav_design:   'design',
    nav_merch:    'merch',
    nav_music:    'music',
    nav_synths:   'synths',
    nav_tools:    'tools',
    nav_video:    'video',
    nav_devtools: 'dev tools',
    nav_about:    'about',

    // ── Font nudge ──
    nudge_label:   'Text too small?',
    nudge_dismiss: 'dismiss ×',

    // ── Tools — Hero ──
    tools_hero_label: '// dPaul Technologies — Utility Lab',
    tools_hero_h1:    'Browser tools.\nBuilt for\nreal use.',
    tools_hero_intro: 'Function should never be boring. Every tool on this page started as a problem that needed solving during music production or development work. No installs, no accounts, no subscriptions — just high-performance utilities that live entirely in your browser and work straight away.',

    // ── TTS player UI ──
    tts_speak_label: '// Speak this page',
    tts_speed:       'Speed',
    tts_voice:       'Voice',
    tts_jump:        'Jump to',

    // ── VU Meter ──
    vu_eyebrow:       '// 01 — Audio Utility',
    vu_story:         'Monitoring levels accurately is the difference between a clean take and a digital mess. The dPaul VU is a high-sensitivity monitoring tool that captures incoming audio via the Web Audio API to provide real-time decibel tracking, peak history, and signal-to-noise visualisation.',
    spec_processing:  'Processing',
    vu_processing_val:'Real-time Fast Fourier Transform',
    spec_range:       'Range',
    spec_features:    'Features',
    vu_features_val:  'Peak Hold · Test Tone · Reset',
    spec_engine:      'Engine',
    vu_launch_btn:    'Launch VU Meter →',
    vu_caption:       '3D render — the VU meter as a physical device',

    // ── VU Concept ──
    concept_eyebrow:  '// Concept — What if it existed in hardware?',
    concept_name:     'Pocket VU.\nBattery powered.',
    concept_story_1:  'The dPaul VU started as a browser utility. But at a certain point the question becomes inevitable: what would this actually look like as a physical object? This concept render explores exactly that — a slim, pocket-sized VU meter in deep navy blue, running on battery power, with the full feature set of the browser version built into a device small enough to clip to a mic stand or drop into a gig bag.',
    concept_story_2:  'The display carries over directly — large blue LED numerals for the decibel reading, signal bar across the middle, peak history below. The three hardware buttons at the bottom mirror the browser UI: MIC input, TEST tone, and RESET. Status feedback runs along the bottom edge. Everything that works in the browser, translated into something you could hold in one hand.',
    concept_story_3:  "It doesn't exist yet. But it could.",
    concept_caption:  'Concept render — pocket hardware VU · battery powered',

    // ── TTS Tool ──
    tts_eyebrow:        '// 02 — Voice Generation',
    tts_engine_tag:     'AI Engine',
    tts_story:          'Voiceover work often requires a quick turnaround. This tool bridges the gap between raw text and professional-grade audio by integrating high-fidelity AI voice models. Granular control over speed, pitch, and export options makes it a clean interface for rapid vocal prototyping.',
    spec_integration:   'Integration',
    tts_integration_val:'Unreal Speech API + Browser Fallback',
    spec_controls:      'Controls',
    tts_controls_val:   'Pitch · Rate · Multi-voice Selection',
    spec_export:        'Export',
    tts_export_val:     'Direct WAV Download',
    spec_format:        'Format',
    tts_launch_btn:     'Launch TTS Engine →',
    tts_caption:        '3D render — the TTS engine as a physical device',

    // ── Philosophy ──
    philosophy_label: '// The philosophy behind the tools',
    philosophy_p1:    'Building these tools taught more about JavaScript than any tutorial ever could. Dealing with the Web Audio API for the VU meter meant understanding buffers, sample rates, and how browsers handle real-time input. Getting HTMLHint integrated into HTML-Live meant reading API documentation properly for the first time — because the feature wouldn\'t work without it.',
    philosophy_p2:    'The Text-to-Speech tool was a lesson in API integration — handling asynchronous requests, managing the handoff between local browser capabilities and remote AI processing, and building a UI that made the complexity invisible to the person using it. If a feature didn\'t exist, it had to be built. If a script crashed, the logs had to be read until it didn\'t.',
    philosophy_p3:    'HTML-Live came from a more personal frustration. Reading through hundreds of lines of code in a flat text editor, switching between browser tabs to see the result, losing track of where things were — all of that friction adds up. The solution was to build the tool that should have existed already. Which, it turns out, is how most useful things get made.',
    strategy_label:   'The strategy',
    strategy_text:    'The goal is always a single-file utility. If a tool can run entirely from one HTML file, it can live anywhere — on a USB stick, a shared folder, a GitHub page, or sent as an email attachment. Portability is the core philosophy of the dPaul Tech Lab. No dependencies, no server, no setup.',
    free_label:       'Free & open',
    free_text:        'Every tool on this page is free to use. The work that goes into building and maintaining them takes time — if a tool has been useful to you, a coffee goes a long way.',

    // ── About ──
    about_hero_label:   '// dPaul Technologies — About',
    about_hero_h1:      '30 years in IT.\nStill building things.',
    about_bg_label:     '// 01 — Background',
    about_bg_h2:        'David. Creative technologist.',
    about_bio_p1:       'My name is David. For over 30 years I\'ve worked in IT — a journey that began in the 1990s, operating mainframe computers like the IBM System 38 and As400 for banks in central London, and evolved through IT support into consultancy for VIP clients.',
    about_bio_p2:       'Throughout that time, I\'ve always had a creative life running alongside the technical one. Music has been a constant — producing original tracks using hardware synthesisers, drum machines and keys, with two of my productions available on iTunes and a back catalogue on SoundCloud.',
    about_bio_p3:       'I believe we\'re at a remarkable moment. The tools available today — professional software, AI, accessible hardware — would have been unimaginable 20 years ago. I see AI the same way I saw the internet arriving in the mid-90s: a shift that ultimately opens doors. It\'s a tool, not a replacement for human creativity.',
    about_bio_p4:       'Today I\'m moving deliberately towards web development — combining the technical precision I\'ve built over a career with the creative instinct I\'ve never stopped developing.',
    tag_it:             '30 Years IT',
    tag_dev:            'Full-Stack Dev',
    tag_ai:             'AI Tools',
    tag_vip:            'VIP Support',
    about_disc_label:   '// 02 — Disciplines',
    about_disc_h2:      'What I bring to a project',
    card_infra_label:   '// Infrastructure',
    card_infra_h3:      'IT & Systems',
    card_infra_p:       '30 years spanning mainframes, hardware builds, VIP support, and infrastructure. Built for reliability under pressure.',
    card_dev_label:     '// Development',
    card_dev_h3:        'Front-End & APIs',
    card_dev_p:         'HTML, CSS, JavaScript — building functional tools, synthesisers, audio players, and interactive web experiences from scratch.',
    card_creative_label:'// Creative',
    card_creative_h3:   'Design & Motion',
    card_creative_p:    'Adobe Suite, Blender, logo design, animation, and brand identity work. Static through to cinematic motion graphics.',
    about_contact_label:'// 03 — Get in Touch',
    about_contact_h2:   'Let\'s talk.',
    about_contact_p:    'For a free 30-minute consultation to find out how I can help you with your next project — fill in the form or reach out directly.',
    cv_strip_p:         'Agencies can download a copy of my current CV.',
    cv_link:            'Download CV',
    form_name_label:    'Name',
    form_email_label:   'Email',
    form_message_label: 'Message',
    form_send_btn:      'SEND',
    form_error:         '// Something went wrong. Please try again.',
    form_success:       '// Message received. I\'ll be in touch shortly.',
    mobile_toggle:      '→ View Mobile Version',
  },

  fr: {
    nav_design:   'design',
    nav_merch:    'merch',
    nav_music:    'musique',
    nav_synths:   'synthés',
    nav_tools:    'outils',
    nav_video:    'vidéo',
    nav_devtools: 'outils dev',
    nav_about:    'à propos',

    nudge_label:   'Texte trop petit ?',
    nudge_dismiss: 'fermer ×',

    tools_hero_label: '// dPaul Technologies — Laboratoire utilitaire',
    tools_hero_h1:    'Outils navigateur.\nConçus pour\nune vraie utilisation.',
    tools_hero_intro: 'La fonction ne devrait jamais être ennuyeuse. Chaque outil sur cette page est né d\'un problème à résoudre pendant la production musicale ou le développement. Pas d\'installation, pas de compte, pas d\'abonnement — des utilitaires haute performance qui vivent entièrement dans votre navigateur.',

    tts_speak_label: '// Lire cette page',
    tts_speed:       'Vitesse',
    tts_voice:       'Voix',
    tts_jump:        'Aller à',

    vu_eyebrow:       '// 01 — Utilitaire audio',
    vu_story:         'Surveiller les niveaux avec précision fait la différence entre une prise propre et un désordre numérique. Le dPaul VU est un outil de surveillance haute sensibilité qui capture l\'audio entrant via l\'API Web Audio pour fournir un suivi décibel en temps réel.',
    spec_processing:  'Traitement',
    vu_processing_val:'Transformée de Fourier rapide en temps réel',
    spec_range:       'Plage',
    spec_features:    'Fonctions',
    vu_features_val:  'Maintien de crête · Ton de test · Réinitialisation',
    spec_engine:      'Moteur',
    vu_launch_btn:    'Lancer le VU Meter →',
    vu_caption:       'Rendu 3D — le VU meter en tant qu\'appareil physique',

    concept_eyebrow:  '// Concept — Et s\'il existait en hardware ?',
    concept_name:     'Pocket VU.\nSur batterie.',
    concept_story_1:  'Le dPaul VU a commencé comme un utilitaire navigateur. Mais à un moment donné, la question devient inévitable : à quoi ressemblerait-il en tant qu\'objet physique ? Ce rendu concept explore exactement cela — un VU meter de poche slim en bleu marine profond, fonctionnant sur batterie.',
    concept_story_2:  'L\'affichage est repris directement — grands chiffres LED bleus pour la lecture en décibels, barre de signal au milieu, historique de crête en dessous. Les trois boutons hardware en bas reflètent l\'interface navigateur : entrée MIC, ton TEST et RESET.',
    concept_story_3:  'Il n\'existe pas encore. Mais il pourrait.',
    concept_caption:  'Rendu concept — VU hardware de poche · sur batterie',

    tts_eyebrow:        '// 02 — Génération vocale',
    tts_engine_tag:     'Moteur IA',
    tts_story:          'Le travail de voix off nécessite souvent un rendu rapide. Cet outil comble le fossé entre le texte brut et l\'audio professionnel en intégrant des modèles de voix IA haute fidélité.',
    spec_integration:   'Intégration',
    tts_integration_val:'API Unreal Speech + Fallback navigateur',
    spec_controls:      'Contrôles',
    tts_controls_val:   'Hauteur · Débit · Sélection multi-voix',
    spec_export:        'Export',
    tts_export_val:     'Téléchargement WAV direct',
    spec_format:        'Format',
    tts_launch_btn:     'Lancer le moteur TTS →',
    tts_caption:        'Rendu 3D — le moteur TTS en tant qu\'appareil physique',

    philosophy_label: '// La philosophie derrière les outils',
    philosophy_p1:    'Construire ces outils a plus appris sur JavaScript que n\'importe quel tutoriel. Gérer l\'API Web Audio pour le VU meter a signifié comprendre les tampons, les fréquences d\'échantillonnage et la façon dont les navigateurs gèrent les entrées en temps réel.',
    philosophy_p2:    'L\'outil Text-to-Speech a été une leçon d\'intégration API — gestion des requêtes asynchrones, transfert entre les capacités locales du navigateur et le traitement IA distant.',
    philosophy_p3:    'HTML-Live est né d\'une frustration personnelle. Lire des centaines de lignes de code dans un éditeur plat, basculer entre les onglets — toute cette friction s\'accumule. La solution était de construire l\'outil qui aurait dû exister déjà.',
    strategy_label:   'La stratégie',
    strategy_text:    'L\'objectif est toujours un utilitaire en fichier unique. Si un outil peut fonctionner entièrement depuis un fichier HTML, il peut vivre n\'importe où — sur une clé USB, un dossier partagé, une page GitHub. Portabilité est la philosophie centrale du dPaul Tech Lab.',
    free_label:       'Gratuit & ouvert',
    free_text:        'Chaque outil sur cette page est gratuit. Le travail de construction et de maintenance prend du temps — si un outil vous a été utile, un café aide beaucoup.',

    // ── About ──
    about_hero_label:   '// dPaul Technologies — À propos',
    about_hero_h1:      '30 ans en IT.\nToujours en train de construire.',
    about_bg_label:     '// 01 — Parcours',
    about_bg_h2:        'David. Technologue créatif.',
    about_bio_p1:       'Je m\'appelle David. Pendant plus de 30 ans, j\'ai travaillé dans l\'IT — un parcours qui a débuté dans les années 1990, exploitant des ordinateurs mainframe comme l\'IBM System 38 et l\'As400 pour des banques au centre de Londres, avant d\'évoluer vers le support IT et la consultance pour des clients VIP.',
    about_bio_p2:       'Tout au long de cette période, j\'ai toujours eu une vie créative en parallèle. La musique est une constante — produire des morceaux originaux avec des synthétiseurs hardware, des boîtes à rythmes et des claviers, avec deux de mes productions disponibles sur iTunes.',
    about_bio_p3:       'Je crois que nous sommes à un moment remarquable. Les outils disponibles aujourd\'hui — logiciels professionnels, IA, hardware accessible — auraient été inimaginables il y a 20 ans. Je vois l\'IA comme j\'ai vu l\'arrivée d\'internet au milieu des années 90 : un changement qui ouvre des portes. C\'est un outil, pas un remplacement de la créativité humaine.',
    about_bio_p4:       'Aujourd\'hui, je m\'oriente délibérément vers le développement web — combinant la précision technique que j\'ai construite au fil d\'une carrière avec l\'instinct créatif que je n\'ai jamais cessé de développer.',
    tag_it:             '30 Ans IT',
    tag_dev:            'Dév Full-Stack',
    tag_ai:             'Outils IA',
    tag_vip:            'Support VIP',
    about_disc_label:   '// 02 — Disciplines',
    about_disc_h2:      'Ce que j\'apporte à un projet',
    card_infra_label:   '// Infrastructure',
    card_infra_h3:      'IT & Systèmes',
    card_infra_p:       '30 ans couvrant les mainframes, les constructions hardware, le support VIP et les infrastructures. Conçu pour la fiabilité sous pression.',
    card_dev_label:     '// Développement',
    card_dev_h3:        'Front-End & APIs',
    card_dev_p:         'HTML, CSS, JavaScript — construire des outils fonctionnels, synthétiseurs, lecteurs audio et expériences web interactives de zéro.',
    card_creative_label:'// Créatif',
    card_creative_h3:   'Design & Motion',
    card_creative_p:    'Suite Adobe, Blender, design de logo, animation et identité de marque. Du statique aux motion graphics cinématographiques.',
    about_contact_label:'// 03 — Contact',
    about_contact_h2:   'Parlons-en.',
    about_contact_p:    'Pour une consultation gratuite de 30 minutes afin de découvrir comment je peux vous aider dans votre prochain projet — remplissez le formulaire ou contactez-moi directement.',
    cv_strip_p:         'Les agences peuvent télécharger mon CV actuel.',
    cv_link:            'Télécharger CV',
    form_name_label:    'Nom',
    form_email_label:   'Email',
    form_message_label: 'Message',
    form_send_btn:      'ENVOYER',
    form_error:         '// Une erreur s\'est produite. Veuillez réessayer.',
    form_success:       '// Message reçu. Je vous répondrai bientôt.',
    mobile_toggle:      '→ Version mobile',
  },

  es: {
    nav_design:   'diseño',
    nav_merch:    'merch',
    nav_music:    'música',
    nav_synths:   'sintes',
    nav_tools:    'herramientas',
    nav_video:    'vídeo',
    nav_devtools: 'herr. dev',
    nav_about:    'sobre mí',

    nudge_label:   '¿Texto muy pequeño?',
    nudge_dismiss: 'cerrar ×',

    tools_hero_label: '// dPaul Technologies — Laboratorio de utilidades',
    tools_hero_h1:    'Herramientas de navegador.\nCreadas para\nuso real.',
    tools_hero_intro: 'La función nunca debería ser aburrida. Cada herramienta en esta página comenzó como un problema que necesitaba resolverse durante la producción musical o el trabajo de desarrollo. Sin instalaciones, sin cuentas, sin suscripciones.',

    tts_speak_label: '// Leer esta página',
    tts_speed:       'Velocidad',
    tts_voice:       'Voz',
    tts_jump:        'Ir a',

    vu_eyebrow:       '// 01 — Utilidad de audio',
    vu_story:         'Monitorear niveles con precisión es la diferencia entre una toma limpia y un desastre digital. El dPaul VU es una herramienta de monitoreo de alta sensibilidad que captura audio entrante a través de la API de Web Audio.',
    spec_processing:  'Procesamiento',
    vu_processing_val:'Transformada rápida de Fourier en tiempo real',
    spec_range:       'Rango',
    spec_features:    'Funciones',
    vu_features_val:  'Retención de pico · Tono de prueba · Reinicio',
    spec_engine:      'Motor',
    vu_launch_btn:    'Abrir VU Meter →',
    vu_caption:       'Render 3D — el VU meter como dispositivo físico',

    concept_eyebrow:  '// Concepto — ¿Y si existiera en hardware?',
    concept_name:     'Pocket VU.\nCon batería.',
    concept_story_1:  'El dPaul VU comenzó como una utilidad de navegador. Pero en cierto punto la pregunta se vuelve inevitable: ¿cómo se vería esto como objeto físico? Este render de concepto explora exactamente eso — un VU meter de bolsillo en azul marino profundo, con batería.',
    concept_story_2:  'La pantalla se traslada directamente — grandes números LED azules para la lectura de decibelios, barra de señal en el medio, historial de pico abajo. Los tres botones de hardware reflejan la interfaz del navegador: entrada MIC, tono TEST y RESET.',
    concept_story_3:  'Todavía no existe. Pero podría.',
    concept_caption:  'Render conceptual — VU hardware de bolsillo · con batería',

    tts_eyebrow:        '// 02 — Generación de voz',
    tts_engine_tag:     'Motor IA',
    tts_story:          'El trabajo de locución a menudo requiere una respuesta rápida. Esta herramienta cierra la brecha entre texto sin formato y audio de calidad profesional integrando modelos de voz IA de alta fidelidad.',
    spec_integration:   'Integración',
    tts_integration_val:'API Unreal Speech + Respaldo de navegador',
    spec_controls:      'Controles',
    tts_controls_val:   'Tono · Velocidad · Selección multi-voz',
    spec_export:        'Exportar',
    tts_export_val:     'Descarga WAV directa',
    spec_format:        'Formato',
    tts_launch_btn:     'Abrir motor TTS →',
    tts_caption:        'Render 3D — el motor TTS como dispositivo físico',

    philosophy_label: '// La filosofía detrás de las herramientas',
    philosophy_p1:    'Construir estas herramientas enseñó más sobre JavaScript que cualquier tutorial. Trabajar con la API de Web Audio para el VU meter significó entender buffers, frecuencias de muestreo y cómo los navegadores manejan la entrada en tiempo real.',
    philosophy_p2:    'La herramienta de texto a voz fue una lección en integración de API — manejo de solicitudes asíncronas, gestión de la transferencia entre capacidades locales del navegador y procesamiento de IA remoto.',
    philosophy_p3:    'HTML-Live surgió de una frustración personal. Leer cientos de líneas de código en un editor plano, cambiar entre pestañas — toda esa fricción se acumula. La solución fue construir la herramienta que ya debería haber existido.',
    strategy_label:   'La estrategia',
    strategy_text:    'El objetivo siempre es una utilidad de un solo archivo. Si una herramienta puede ejecutarse completamente desde un archivo HTML, puede vivir en cualquier lugar — en una memoria USB, una carpeta compartida, una página de GitHub. La portabilidad es la filosofía central del dPaul Tech Lab.',
    free_label:       'Gratis y abierto',
    free_text:        'Cada herramienta en esta página es gratuita. El trabajo de construcción y mantenimiento lleva tiempo — si una herramienta te ha sido útil, un café ayuda mucho.',

    // ── About ──
    about_hero_label:   '// dPaul Technologies — Sobre mí',
    about_hero_h1:      '30 años en IT.\nSiguiendo construyendo.',
    about_bg_label:     '// 01 — Trayectoria',
    about_bg_h2:        'David. Tecnólogo creativo.',
    about_bio_p1:       'Me llamo David. Durante más de 30 años he trabajado en IT — un camino que comenzó en los años 90, operando computadoras mainframe como el IBM System 38 y As400 para bancos en el centro de Londres, y evolucionó a través del soporte IT hacia la consultoría para clientes VIP.',
    about_bio_p2:       'Durante ese tiempo, siempre he tenido una vida creativa junto a la técnica. La música ha sido una constante — produciendo pistas originales con sintetizadores hardware, cajas de ritmos y teclados, con dos de mis producciones disponibles en iTunes.',
    about_bio_p3:       'Creo que estamos en un momento extraordinario. Las herramientas disponibles hoy — software profesional, IA, hardware accesible — habrían sido inimaginables hace 20 años. Veo la IA como vi la llegada de internet a mediados de los 90: un cambio que abre puertas. Es una herramienta, no un sustituto de la creatividad humana.',
    about_bio_p4:       'Hoy me dirijo deliberadamente hacia el desarrollo web — combinando la precisión técnica que he construido a lo largo de una carrera con el instinto creativo que nunca he dejado de desarrollar.',
    tag_it:             '30 Años IT',
    tag_dev:            'Dev Full-Stack',
    tag_ai:             'Herramientas IA',
    tag_vip:            'Soporte VIP',
    about_disc_label:   '// 02 — Disciplinas',
    about_disc_h2:      'Lo que aporto a un proyecto',
    card_infra_label:   '// Infraestructura',
    card_infra_h3:      'IT & Sistemas',
    card_infra_p:       '30 años abarcando mainframes, construcción de hardware, soporte VIP e infraestructura. Construido para la fiabilidad bajo presión.',
    card_dev_label:     '// Desarrollo',
    card_dev_h3:        'Front-End & APIs',
    card_dev_p:         'HTML, CSS, JavaScript — construyendo herramientas funcionales, sintetizadores, reproductores de audio y experiencias web interactivas desde cero.',
    card_creative_label:'// Creativo',
    card_creative_h3:   'Diseño & Motion',
    card_creative_p:    'Suite Adobe, Blender, diseño de logo, animación e identidad de marca. Desde estático hasta motion graphics cinematográficos.',
    about_contact_label:'// 03 — Contacto',
    about_contact_h2:   'Hablemos.',
    about_contact_p:    'Para una consulta gratuita de 30 minutos para descubrir cómo puedo ayudarte en tu próximo proyecto — rellena el formulario o contáctame directamente.',
    cv_strip_p:         'Las agencias pueden descargar mi CV actual.',
    cv_link:            'Descargar CV',
    form_name_label:    'Nombre',
    form_email_label:   'Email',
    form_message_label: 'Mensaje',
    form_send_btn:      'ENVIAR',
    form_error:         '// Algo salió mal. Por favor, inténtalo de nuevo.',
    form_success:       '// Mensaje recibido. Me pondré en contacto pronto.',
    mobile_toggle:      '→ Ver versión móvil',
  },
};

const I18N = (() => {
  const STORAGE_KEY = 'dpaul_lang';

  function applyLang(lang) {
    const strings = TRANSLATIONS[lang];
    if (!strings) return;

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (strings[key] !== undefined) el.textContent = strings[key];
    });

    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    document.documentElement.lang = lang;
    localStorage.setItem(STORAGE_KEY, lang);
  }

  function init() {
    const saved   = localStorage.getItem(STORAGE_KEY);
    const browser = navigator.language?.slice(0, 2);
    const lang    = TRANSLATIONS[saved] ? saved
                  : TRANSLATIONS[browser] ? browser
                  : 'en';
    applyLang(lang);
  }

  return { applyLang, init };
})();
