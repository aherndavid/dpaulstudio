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
