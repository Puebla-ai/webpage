/* ============================================================
   PueblAI — styles.css
   No framework. Vanilla CSS with custom properties.
   ============================================================ */

/* ── Google Fonts imported in HTML via <link> ── */

/* ============================================================
   1. CUSTOM PROPERTIES
   ============================================================ */
/* Talavera Poblana palette — cobalt + cream + terracotta */
:root {
  /* ─── PALETA PRINCIPAL ─── */
  --color-cobalt:        #1A3B8C;
  --color-cobalt-mid:    #2B5299;
  --color-cobalt-light:  #D6E4F7;
  --color-cobalt-border: #4A72B8;

  --color-base:          #F8F5EE;
  --color-cream:         #F0EAD8;

  /* ─── ACENTOS ─── */
  --color-terracotta:    #C4522A;
  --color-amber:         #D4920A;
  --color-sage:          #5A7A3A;

  /* ─── TIPOGRAFÍA ─── */
  --color-ink:           #1C1C1C;
  --color-warm-gray:     #7A756C;
  --color-border:        #D3CFC6;

  /* ─── BADGES ─── */
  --color-badge-terra-bg:   #F5E5DF;
  --color-badge-amber-bg:   #FBF0D6;
  --color-badge-sage-bg:    #E6EFD9;
  --color-badge-amber-text: #8A5E05;

  /* ─── ALIASES (compatibilidad con clases existentes) ─── */
  --accent:       var(--color-cobalt);
  --accent-2:     #6b9fd4;
  --accent-light: var(--color-cobalt-light);
  --ink:          var(--color-ink);
  --muted:        var(--color-warm-gray);
  --bg:           var(--color-base);
  --card:         #fff;
  --border:       var(--color-border);
  --tag-bg:       var(--color-cream);
  --bg-rgb:       248,245,238;

  /* ─── FUENTES ─── */
  --font-display: 'Playfair Display', Georgia, serif;
  --font-ui:      'DM Sans', system-ui, sans-serif;
  --font-serif:   var(--font-display);
  --font-sans:    var(--font-ui);

  /* ─── LAYOUT ─── */
  --radius-sm:    6px;
  --radius-md:    12px;
  --radius-lg:    16px;
  --shadow-card:  0 2px 12px rgba(26, 59, 140, 0.08);
  --shadow-hover: 0 8px 28px rgba(26, 59, 140, 0.16);
  --transition:   0.2s ease;
  --max-width:    1200px;
  --section-pad:  5rem 1.5rem;
}

/* ============================================================
   2. RESET & BASE
   ============================================================ */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
  font-size: 16px;
}

body {
  font-family: var(--font-sans);
  background-color: var(--bg);
  color: var(--ink);
  line-height: 1.65;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

img {
  display: block;
  max-width: 100%;
}

a {
  color: var(--accent);
  text-decoration: none;
  transition: opacity var(--transition);
}

a:hover {
  opacity: 0.8;
}

ul {
  list-style: none;
}

button, input, select, textarea {
  font-family: inherit;
  font-size: inherit;
}

/* ============================================================
   3. TYPOGRAPHY SCALE
   ============================================================ */
h1, h2, h3, h4 {
  font-family: var(--font-serif);
  line-height: 1.2;
  color: var(--ink);
}

h1 { font-size: clamp(2.2rem, 5vw, 3.5rem); }
h2 { font-size: clamp(1.8rem, 3.5vw, 2.6rem); }
h3 { font-size: clamp(1.2rem, 2vw, 1.5rem); }
h4 { font-size: 1.1rem; }

p {
  color: var(--muted);
  max-width: 68ch;
}

/* ============================================================
   4. UTILITY CLASSES
   ============================================================ */

/* Fade-in animation via IntersectionObserver */
.fade-in {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.55s ease, transform 0.55s ease;
}

.fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Section eyebrow label */
.section-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-ui);
  font-size: 0.6875rem;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-cobalt-mid);
  margin-bottom: 0.75rem;
}
.section-eyebrow::before {
  content: '';
  display: inline-block;
  width: 20px; height: 2px;
  background: var(--color-cobalt-mid);
  border-radius: 2px;
  flex-shrink: 0;
}

/* Metric number */
.metric-num {
  font-family: var(--font-serif);
  font-size: 2.25rem;
  font-style: italic;
  color: var(--accent);
  line-height: 1;
}

/* Tag pill (legado — mantenido para compatibilidad) */
.tag {
  display: inline-block;
  background: var(--color-cobalt-light);
  color: var(--color-cobalt);
  font-size: 0.6875rem;
  font-weight: 500;
  letter-spacing: 0.02em;
  padding: 4px 10px;
  border-radius: 4px;
}

/* ── Badge system ── */
.badge {
  display: inline-block;
  font-family: var(--font-ui);
  font-size: 0.6875rem;
  font-weight: 500;
  padding: 4px 10px;
  border-radius: 4px;
  letter-spacing: 0.02em;
}
.badge--cobalt { background: var(--color-cobalt-light);      color: var(--color-cobalt); }
.badge--terra  { background: var(--color-badge-terra-bg);    color: var(--color-terracotta); }
.badge--amber  { background: var(--color-badge-amber-bg);    color: var(--color-badge-amber-text); }
.badge--sage   { background: var(--color-badge-sage-bg);     color: var(--color-sage); }

/* ── Separador decorativo talavera ── */
.divider-talavera {
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 0;
  padding: 0 1.5rem;
}
.divider-talavera__line {
  flex: 1;
  height: 1px;
  background: var(--color-border);
}
.divider-talavera__diamond {
  width: 14px;
  height: 14px;
  border: 2px solid var(--color-cobalt-border);
  transform: rotate(45deg);
  flex-shrink: 0;
  position: relative;
}
.divider-talavera__diamond::after {
  content: '';
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  width: 4px; height: 4px;
  background: var(--color-cobalt-border);
  border-radius: 50%;
}

/* ── Primario: SOLO para "Agendar consulta gratuita" ── */
.btn-primary {
  display: inline-block;
  background: var(--color-terracotta);
  color: #fff !important;
  font-family: var(--font-ui);
  font-weight: 500;
  font-size: 0.9375rem;
  padding: 0.75rem 1.5rem;
  border-radius: var(--radius-sm);
  border: none;
  cursor: pointer;
  transition: background var(--transition);
  text-align: center;
  white-space: nowrap;
}
.btn-primary:hover {
  background: #A84420;
  opacity: 1;
}

/* ── Secundario: acciones importantes no-CTA ── */
.btn-secondary {
  display: inline-block;
  background: var(--color-cobalt);
  color: #fff !important;
  font-family: var(--font-ui);
  font-weight: 500;
  font-size: 0.9375rem;
  padding: 0.75rem 1.5rem;
  border-radius: var(--radius-sm);
  border: none;
  cursor: pointer;
  transition: background var(--transition);
  text-align: center;
  white-space: nowrap;
}
.btn-secondary:hover {
  background: var(--color-cobalt-mid);
  opacity: 1;
}

/* ── Outline: cuando hay dos CTAs juntos ── */
.btn-outline {
  display: inline-block;
  background: transparent;
  color: var(--color-cobalt) !important;
  font-family: var(--font-ui);
  font-weight: 500;
  font-size: 0.9375rem;
  padding: 0.75rem 1.5rem;
  border-radius: var(--radius-sm);
  border: 1.5px solid var(--color-cobalt);
  cursor: pointer;
  transition: background var(--transition), color var(--transition);
  text-align: center;
  white-space: nowrap;
}
.btn-outline:hover {
  background: var(--color-cobalt);
  color: #fff !important;
  opacity: 1;
}

/* ── Ghost / Link: CTAs de servicios y casos ── */
.btn-ghost {
  display: inline-block;
  background: none;
  border: none;
  color: var(--color-cobalt);
  font-family: var(--font-ui);
  font-weight: 500;
  font-size: 0.9375rem;
  text-decoration: underline;
  text-underline-offset: 3px;
  cursor: pointer;
  padding: 0;
}
.btn-ghost:hover {
  color: var(--color-terracotta);
  opacity: 1;
}

/* Section layout wrapper */
.section-inner {
  max-width: var(--max-width);
  margin: 0 auto;
}

/* Section header */
.section-header {
  text-align: center;
  margin-bottom: 3.5rem;
}

.section-header p {
  margin: 0.75rem auto 0;
  font-size: 1.1rem;
  max-width: 56ch;
}

/* ============================================================
   5. NAVIGATION
   ============================================================ */
.site-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  border-top: 3px solid var(--accent);
  padding: 1.25rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  transition: background var(--transition), box-shadow var(--transition), padding var(--transition);
}

.site-nav.scrolled {
  background: var(--bg);
  box-shadow: 0 1px 0 var(--border);
  padding: 0.75rem 1.5rem;
}

.nav-inner {
  max-width: var(--max-width);
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
}

/* Logo */
.nav-logo {
  font-family: var(--font-serif);
  font-size: 1.5rem;
  color: var(--ink);
  text-decoration: none;
  flex-shrink: 0;
  letter-spacing: -0.02em;
}

.nav-logo span {
  color: var(--accent);
}

/* Center links */
.nav-links {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.nav-links a {
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--ink);
  text-decoration: none;
  transition: color var(--transition);
}

.nav-links a:hover {
  color: var(--accent);
  opacity: 1;
}

/* Lang toggle */
.lang-toggle {
  background: transparent;
  border: 1.5px solid var(--border);
  border-radius: var(--radius-sm);
  padding: 0.35rem 0.75rem;
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--muted);
  cursor: pointer;
  letter-spacing: 0.05em;
  transition: border-color var(--transition), color var(--transition);
  flex-shrink: 0;
}

.lang-toggle:hover {
  border-color: var(--accent);
  color: var(--accent);
}

/* Hamburger */
.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
}

.hamburger span {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--ink);
  border-radius: 2px;
  transition: transform var(--transition), opacity var(--transition);
}

/* Mobile nav overlay */
.nav-overlay {
  display: none;
  position: fixed;
  inset: 0;
  background: var(--bg);
  z-index: 999;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
}

.nav-overlay.open {
  display: flex;
}

.nav-overlay a {
  font-family: var(--font-serif);
  font-size: 2rem;
  color: var(--ink);
  text-decoration: none;
}

.nav-overlay .close-overlay {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  color: var(--ink);
}

/* ============================================================
   6. WHATSAPP FLOAT
   ============================================================ */
.whatsapp-float {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 900;
  background: #25d366;
  color: #fff;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 16px rgba(37,211,102,0.45);
  transition: transform var(--transition), box-shadow var(--transition);
}

.whatsapp-float:hover {
  transform: translateY(-3px) scale(1.06);
  box-shadow: 0 8px 24px rgba(37,211,102,0.55);
  opacity: 1;
}

.whatsapp-float svg {
  width: 28px;
  height: 28px;
  fill: #fff;
}

/* ============================================================
   7. HERO SECTION
   ============================================================ */
/* Hero — patrón azulejo talavera a 7% opacidad */
#hero {
  min-height: 100vh;
  padding: 8rem 1.5rem 5rem;
  display: flex;
  align-items: center;
  position: relative;
  background-color: var(--color-base);
  overflow: hidden;
}

#hero-particles {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
}

/* Gradient overlay suave — texto legible sobre partículas */
#hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to right,
    rgba(var(--bg-rgb), 0.85) 0%,
    rgba(var(--bg-rgb), 0.70) 50%,
    rgba(var(--bg-rgb), 0.20) 75%,
    rgba(var(--bg-rgb), 0.05) 100%
  );
  pointer-events: none;
  z-index: 0;
}

@media (max-width: 768px) {
  #hero::before {
    background: rgba(var(--bg-rgb), 0.93);
  }
}

.hero-inner {
  max-width: var(--max-width);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 60% 40%;
  gap: 4rem;
  align-items: center;
  width: 100%;
  position: relative;
  z-index: 1;
}

.hero-left {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.hero-left h1 {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: var(--text-display, clamp(2rem, 5vw, 3.5rem));
  color: var(--color-cobalt);
  line-height: 1.15;
  letter-spacing: -0.01em;
}

.hero-left h1 em {
  font-style: italic;
}

.hero-left p {
  font-family: var(--font-ui);
  font-size: 1rem;
  color: #4A4540;
  line-height: 1.7;
  max-width: 52ch;
}

/* ── Hero card flotante ── */
.hero__card {
  background: #fff;
  border: 1px solid var(--color-border);
  border-left: 4px solid var(--color-cobalt);
  border-radius: var(--radius-md);
  padding: 1.5rem;
  max-width: 340px;
  box-shadow: 0 2px 12px rgba(26, 59, 140, 0.08);
}
.hero__card-tag {
  display: flex;
  gap: 6px;
  margin-bottom: 0.75rem;
}
.hero__card-problem {
  font-family: var(--font-ui);
  font-size: 0.9375rem;
  font-weight: 500;
  color: var(--color-ink);
  margin-bottom: 1rem;
  line-height: 1.4;
}
.hero__card-metric {
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.hero__card-number {
  display: block;
  font-family: var(--font-display);
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--color-cobalt);
  line-height: 1;
}
.hero__card-label {
  font-family: var(--font-ui);
  font-size: 0.8125rem;
  color: var(--color-warm-gray);
}

.hero-ctas {
  display: flex;
  align-items: center;
  gap: 1.25rem;
  flex-wrap: wrap;
  margin-top: 0.5rem;
}

.hero-ctas .secondary-link {
  font-weight: 600;
  color: var(--ink);
  display: flex;
  align-items: center;
  gap: 0.35rem;
}

.hero-ctas .secondary-link::after {
  content: '→';
  color: var(--accent);
}

.hero-right {
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Stats cluster */
.stats-cluster {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  width: 100%;
}

.stat-card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  padding: 1.25rem 1rem;
  text-align: center;
  box-shadow: var(--shadow-card);
}

.stat-card .metric-num {
  display: block;
  margin-bottom: 0.35rem;
}

.stat-card .stat-label {
  font-size: 0.78rem;
  color: var(--muted);
  line-height: 1.4;
}

/* Scroll indicator */
.scroll-indicator {
  position: absolute;
  bottom: 2.5rem;
  left: 50%;
  z-index: 2;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: var(--muted);
  font-size: 0.75rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  animation: bounce 2s infinite;
}

.scroll-indicator svg {
  width: 20px;
  height: 20px;
  stroke: var(--muted);
  fill: none;
}

@keyframes bounce {
  0%, 100% { transform: translateX(-50%) translateY(0); }
  50%       { transform: translateX(-50%) translateY(6px); }
}

/* ============================================================
   8. TRUST SIGNALS (#credibilidad)
   ============================================================ */
#credibilidad {
  padding: 4rem 1.5rem;
  background: var(--tag-bg);
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
}

.credibilidad-inner {
  max-width: var(--max-width);
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  align-items: start;
}

.trust-col {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.trust-col-title {
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--muted);
}

/* Company logos placeholder */
.company-logos {
  display: flex;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;
}

.company-logo-badge {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  padding: 0.6rem 1.1rem;
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--muted);
  letter-spacing: 0.03em;
  transition: color var(--transition);
}

.company-logo-badge:hover {
  color: var(--ink);
}

.company-logo-img {
  height: 26px;
  width: auto;
  opacity: 0.55;
  filter: grayscale(100%);
  transition: opacity var(--transition), filter var(--transition);
}

.company-logo-img:hover {
  opacity: 1;
  filter: grayscale(0%);
}

.trust-caption {
  font-size: 0.88rem;
  color: var(--muted);
  max-width: none;
}

/* Stat row */
.stat-row {
  display: flex;
  gap: 1rem;
}

.stat-item {
  flex: 1;
  text-align: center;
}

.stat-item .metric-num {
  display: block;
  margin-bottom: 0.3rem;
  font-size: 2rem;
}

.stat-item .stat-sub {
  font-size: 0.75rem;
  color: var(--muted);
  line-height: 1.4;
}

/* Cert / quote */
.cert-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.pull-quote {
  border-left: 3px solid var(--accent);
  padding: 0.75rem 1rem;
  font-size: 0.95rem;
  color: var(--muted);
  font-style: italic;
  background: var(--card);
  border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
}

/* ============================================================
   9. SERVICES (#servicios)
   ============================================================ */
#servicios {
  padding: var(--section-pad);
}

.services-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 0;
}

.service-card {
  background: #fff;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: 1.75rem 1.5rem;
  box-shadow: var(--shadow-card);
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
  transition: box-shadow var(--transition), border-left var(--transition), transform var(--transition);
  border-left: 3px solid transparent;
  width: calc(33.333% - 1rem);
  min-width: 280px;
}

.service-card:hover {
  box-shadow: var(--shadow-hover);
  border-left: 3px solid var(--color-cobalt);
  transform: translateY(-2px);
}

.service-icon {
  width: 44px;
  height: 44px;
  background: var(--accent-light);
  border-radius: var(--radius-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.service-icon svg {
  width: 24px;
  height: 24px;
  stroke: var(--accent);
  fill: none;
  stroke-width: 1.8;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.service-card h3 {
  font-size: 1.15rem;
  margin: 0;
}

.service-card p {
  font-size: 0.9rem;
  line-height: 1.6;
  margin: 0;
  flex: 1;
}

.service-outcome {
  font-size: 0.8rem !important;
  font-weight: 600;
  color: var(--accent) !important;
  background: var(--accent-light);
  border-radius: var(--radius-sm);
  padding: 0.4rem 0.75rem;
  display: inline-block;
}

.service-link {
  font-size: 0.88rem;
  font-weight: 600;
  color: var(--accent);
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  margin-top: auto;
  transition: gap var(--transition);
}

.service-link:hover {
  gap: 0.6rem;
  opacity: 1;
}

/* ============================================================
   9b. CÓMO FUNCIONA (#como-funciona)
   ============================================================ */
#como-funciona {
  padding: var(--section-pad);
  background: var(--tag-bg);
}

.steps-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 1rem;
}

.step-card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  padding: 2rem 1.75rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.step-number {
  width: 48px;
  height: 48px;
  background: var(--accent);
  color: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-serif);
  font-size: 1.3rem;
  font-weight: 700;
}

.step-card h3 {
  font-size: 1.15rem;
  margin: 0;
}

.step-card p {
  font-size: 0.9rem;
  line-height: 1.6;
  color: var(--muted);
  margin: 0;
}

.steps-cta {
  text-align: center;
  margin-top: 2.5rem;
}

/* Calendly popup button */
.calendly-cta {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background: var(--accent);
  color: #fff;
  padding: 0.9rem 1.5rem;
  border-radius: var(--radius-sm);
  font-weight: 600;
  font-size: 0.95rem;
  transition: background var(--transition);
  cursor: pointer;
  text-decoration: none;
}

.calendly-cta:hover {
  background: var(--accent-hover);
  color: #fff;
}

/* ============================================================
   10. CASE STUDIES (#casos)
   ============================================================ */
#casos {
  padding: var(--section-pad);
  background: var(--tag-bg);
}

.cases-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 1.75rem;
}

.case-card {
  background: var(--color-base);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  overflow: hidden;
  box-shadow: var(--shadow-card);
  display: flex;
  transition: box-shadow var(--transition), transform var(--transition);
}

.case-card:hover {
  box-shadow: var(--shadow-hover);
  transform: translateY(-2px);
}

/* Accent lateral strip */
.case-card__accent {
  width: 4px;
  flex-shrink: 0;
}

.case-card__body {
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.case-card__tags {
  display: flex;
  gap: 6px;
}

.case-card__problem {
  font-family: var(--font-ui);
  font-size: 1rem;
  font-weight: 500;
  color: var(--color-ink);
  line-height: 1.4;
  margin: 0;
}

.case-card__solution {
  font-family: var(--font-ui);
  font-size: 0.9375rem;
  color: var(--color-warm-gray);
  line-height: 1.6;
  margin: 0;
  flex: 1;
}

.case-card__metric {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.case-card__number {
  display: block;
  font-family: var(--font-display);
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--color-cobalt);
  line-height: 1;
}

.case-card__metric-label {
  font-family: var(--font-ui);
  font-size: 0.8125rem;
  color: var(--color-warm-gray);
  display: block;
}

/* Legado — evitar que los h3/p sin clase rompan el layout */
.case-card h3 {
  font-size: 1.2rem;
}
.case-card p {
  font-size: 0.9rem;
}

/* .case-metric y .case-link usados en legado */
.case-metric {
  font-family: var(--font-display);
  font-size: 2rem;
  font-style: italic;
  color: var(--color-cobalt);
  line-height: 1;
}
.case-metric-label {
  font-size: 0.8rem;
  color: var(--muted);
  margin-top: 0.2rem;
}
.case-link {
  font-size: 0.88rem;
  font-weight: 500;
  color: var(--color-cobalt);
  margin-top: auto;
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  transition: gap var(--transition);
  text-decoration: underline;
  text-underline-offset: 3px;
}
.case-link:hover {
  color: var(--color-terracotta);
  gap: 0.6rem;
  opacity: 1;
}

/* ============================================================
   11. PRICING (#precios)
   ============================================================ */
#precios {
  padding: var(--section-pad);
}

.pricing-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  align-items: stretch;
}

.pricing-card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 2rem 1.75rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  position: relative;
  box-shadow: var(--shadow-card);
  transition: box-shadow var(--transition);
}

.pricing-card:hover {
  box-shadow: var(--shadow-hover);
}

.pricing-card.featured {
  border: 2px solid var(--accent);
  transform: scale(1.02);
  box-shadow: 0 8px 32px rgba(200,75,17,0.15);
}

.pricing-badge {
  position: absolute;
  top: -1px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--accent);
  color: #fff;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 0.35rem 1rem;
  border-radius: 0 0 var(--radius-sm) var(--radius-sm);
}

.pricing-tier {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--accent);
}

.pricing-name {
  font-family: var(--font-serif);
  font-size: 1.4rem;
  color: var(--ink);
  margin-top: 0.25rem;
}

.pricing-price {
  display: flex;
  align-items: baseline;
  gap: 0.35rem;
  margin: 0.5rem 0;
}

.price-from {
  font-size: 0.8rem;
  color: var(--muted);
}

.price-amount {
  font-family: var(--font-serif);
  font-size: 2.4rem;
  font-style: italic;
  color: var(--ink);
  line-height: 1;
}

.price-period {
  font-size: 0.82rem;
  color: var(--muted);
}

.pricing-features {
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
  flex: 1;
}

.pricing-features li {
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;
  font-size: 0.88rem;
  color: var(--muted);
}

.pricing-features li::before {
  content: '•';
  color: var(--accent);
  flex-shrink: 0;
  margin-top: 0.05em;
}

.pricing-cta {
  margin-top: auto;
}

.pricing-cta .btn-primary,
.pricing-cta .btn-outline {
  width: 100%;
}

/* Trust strip below pricing */
.trust-strip {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid var(--border);
}

.trust-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.88rem;
  color: var(--muted);
  font-weight: 500;
}

.trust-item::before {
  content: '✓';
  color: var(--accent);
  font-weight: 700;
}

/* ============================================================
   12. ABOUT (#nosotros)
   ============================================================ */
#nosotros {
  padding: var(--section-pad);
  background: var(--tag-bg);
}

.about-inner {
  max-width: var(--max-width);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: stretch;
}

.about-left {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.about-left p {
  font-size: 1rem;
  max-width: none;
}

.about-photo-placeholder {
  flex: 1;
  min-height: 180px;
  background: var(--border);
  border-radius: var(--radius-lg);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: var(--muted);
  font-size: 0.8rem;
  margin-top: 0.5rem;
}

.about-photo-placeholder svg {
  width: 40px;
  height: 40px;
  stroke: var(--muted);
  fill: none;
}

/* Right column: 2x2 team cards grid */
.about-right-cards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
}

.about-right p {
  font-size: 1rem;
  max-width: none;
}

/* Team cards */
.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.25rem;
  margin-top: 0.5rem;
}

.team-card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  padding: 1.5rem 1.25rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
}

.team-avatar {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: var(--accent-light);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-serif);
  font-size: 1.4rem;
  color: var(--accent);
  font-weight: 400;
  /* REPLACE: team member photo */
}

.team-card h4 {
  font-family: var(--font-serif);
  font-size: 1rem;
  color: var(--ink);
}

.team-title {
  font-size: 0.78rem;
  color: var(--accent);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.team-bio {
  font-size: 0.82rem;
  color: var(--muted);
  max-width: none;
}

.team-linkedin {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.78rem;
  font-weight: 600;
  color: var(--muted);
  transition: color var(--transition);
}

.team-linkedin:hover {
  color: #0077b5;
  opacity: 1;
}

/* Mission statement */
.mission-block {
  text-align: center;
  padding: 3.5rem 1.5rem;
  background: var(--bg);
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
  margin-top: 4rem;
}

.mission-block blockquote {
  font-family: var(--font-serif);
  font-size: clamp(1.4rem, 3vw, 2rem);
  font-style: italic;
  color: var(--ink);
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.4;
}

.mission-block blockquote::before { content: '\201C'; color: var(--accent); }
.mission-block blockquote::after  { content: '\201D'; color: var(--accent); }

/* ============================================================
   13. CONTACT (#contacto)
   ============================================================ */
#contacto {
  padding: var(--section-pad);
}

.contact-inner {
  max-width: var(--max-width);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: start;
}

.contact-header {
  margin-bottom: 2.5rem;
}

.contact-header h2 {
  margin-bottom: 0.75rem;
}

.contact-header p {
  font-size: 1.05rem;
  max-width: none;
}

/* Form */
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.form-group label {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--muted);
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.form-group input,
.form-group select,
.form-group textarea {
  background: var(--card);
  border: 1.5px solid var(--border);
  border-radius: var(--radius-sm);
  padding: 0.8rem 1rem;
  color: var(--ink);
  transition: border-color var(--transition), box-shadow var(--transition);
  outline: none;
}

.form-group input::placeholder,
.form-group textarea::placeholder {
  color: var(--muted);
  opacity: 0.7;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  border-color: var(--accent);
  box-shadow: 0 0 0 3px var(--accent-light);
}

.form-group input.error,
.form-group select.error,
.form-group textarea.error {
  border-color: var(--accent);
}

.form-group textarea {
  resize: vertical;
  min-height: 120px;
}

.form-group select {
  appearance: none;
  cursor: pointer;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath d='M2 4l4 4 4-4' stroke='%236b6b6b' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  padding-right: 2.5rem;
}

.form-submit .btn-primary {
  width: 100%;
  font-size: 1rem;
  padding: 1rem 1.75rem;
}

.form-success {
  display: none;
  background: #edfaf2;
  border: 1px solid #6bcf9e;
  border-radius: var(--radius-sm);
  padding: 1rem 1.25rem;
  font-size: 0.9rem;
  color: #1a7a45;
  margin-top: 0.5rem;
}

.form-success.visible {
  display: block;
}

/* Right column — alt contact */
.alt-contact {
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
  padding-top: 5.5rem; /* align with form start */
}

.wa-cta {
  display: flex;
  align-items: center;
  gap: 1rem;
  background: #edfcf3;
  border: 1px solid #c6efda;
  border-radius: var(--radius-md);
  padding: 1.25rem 1.5rem;
  color: #1a7a45 !important;
  font-weight: 700;
  font-size: 1.05rem;
  transition: box-shadow var(--transition), transform var(--transition);
}

.wa-cta:hover {
  box-shadow: 0 4px 16px rgba(37,211,102,0.25);
  transform: translateY(-1px);
  opacity: 1;
}

.wa-cta svg {
  width: 32px;
  height: 32px;
  fill: #25d366;
  flex-shrink: 0;
}

.contact-detail {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  font-size: 0.92rem;
  color: var(--muted);
}

.contact-detail svg {
  width: 18px;
  height: 18px;
  stroke: var(--accent);
  fill: none;
  flex-shrink: 0;
  margin-top: 2px;
}

.contact-detail a {
  color: var(--ink);
  font-weight: 500;
}

/* Calendly embed placeholder */
.calendly-placeholder {
  background: var(--tag-bg);
  border: 1px dashed var(--border);
  border-radius: var(--radius-md);
  padding: 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  align-items: center;
}

.calendly-placeholder p {
  font-size: 0.85rem;
  max-width: none;
}

/* ============================================================
   14. FOOTER
   ============================================================ */
.site-footer {
  background: var(--card);
  border-top: 1px solid var(--border);
  padding: 3.5rem 1.5rem 2rem;
}

.footer-inner {
  max-width: var(--max-width);
  margin: 0 auto;
}

.footer-top {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr;
  gap: 3rem;
  padding-bottom: 2.5rem;
  border-bottom: 1px solid var(--border);
}

.footer-brand p {
  font-size: 0.9rem;
  margin-top: 0.75rem;
  max-width: 34ch;
}

.footer-nav h5,
.footer-social h5 {
  font-family: var(--font-sans);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--muted);
  margin-bottom: 1rem;
}

.footer-nav ul,
.footer-social ul {
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
}

.footer-nav a,
.footer-social a {
  font-size: 0.9rem;
  color: var(--muted);
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: color var(--transition);
}

.footer-nav a:hover,
.footer-social a:hover {
  color: var(--ink);
  opacity: 1;
}

.footer-social svg {
  width: 16px;
  height: 16px;
  fill: currentColor;
}

.footer-bottom {
  padding-top: 1.75rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
}

.footer-legal {
  font-size: 0.78rem;
  color: var(--muted);
}

/* ============================================================
   15. SUB-PAGE SHARED STYLES (casos.html, servicios.html)
   ============================================================ */
.subpage-hero {
  padding: 10rem 1.5rem 4rem;
  background: var(--tag-bg);
  border-bottom: 1px solid var(--border);
}

.subpage-hero-inner {
  max-width: var(--max-width);
  margin: 0 auto;
}

.back-link {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.88rem;
  font-weight: 600;
  color: var(--muted);
  margin-bottom: 2rem;
  transition: color var(--transition);
}

.back-link:hover {
  color: var(--accent);
  opacity: 1;
}

.back-link::before {
  content: '←';
}

/* Case study full page */
.case-full {
  padding: 4rem 1.5rem;
}

.case-full-inner {
  max-width: 780px;
  margin: 0 auto;
}

.case-full h2 {
  margin-top: 2.5rem;
  margin-bottom: 1rem;
}

.case-full p {
  max-width: none;
  margin-bottom: 1rem;
}

.case-metrics-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
  margin: 2rem 0;
}

.case-metric-card {
  background: var(--card);
  border: 1px solid var(--border);
  border-top: 3px solid var(--accent);
  border-radius: var(--radius-md);
  padding: 1.5rem 1.25rem;
  text-align: center;
}

.case-metric-card .metric-num {
  display: block;
  margin-bottom: 0.4rem;
}

.case-metric-card .metric-label {
  font-size: 0.8rem;
  color: var(--muted);
}

.client-quote {
  border-left: 4px solid var(--accent);
  background: var(--accent-light);
  border-radius: 0 var(--radius-md) var(--radius-md) 0;
  padding: 1.5rem 1.75rem;
  margin: 2rem 0;
}

.client-quote blockquote {
  font-family: var(--font-serif);
  font-size: 1.2rem;
  font-style: italic;
  color: var(--ink);
  margin-bottom: 0.75rem;
}

.client-quote cite {
  font-size: 0.85rem;
  color: var(--muted);
  font-style: normal;
}

.case-cta-band {
  background: var(--tag-bg);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  padding: 2rem;
  text-align: center;
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
}

/* Service full page */
.service-full {
  padding: 4rem 1.5rem;
}

.service-full-inner {
  max-width: 860px;
  margin: 0 auto;
}

.service-full section {
  padding: 3.5rem 0;
  border-bottom: 1px solid var(--border);
}

.service-full section:last-child {
  border-bottom: none;
}

.service-full h2 {
  margin-bottom: 1rem;
}

.service-full p {
  max-width: none;
  margin-bottom: 1rem;
}

.process-steps {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin: 1.5rem 0;
}

.process-step {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  padding: 1.5rem;
}

.step-num {
  font-family: var(--font-serif);
  font-size: 2rem;
  font-style: italic;
  color: var(--accent);
  opacity: 0.4;
  line-height: 1;
  margin-bottom: 0.75rem;
}

.process-step h4 {
  font-size: 1rem;
  margin-bottom: 0.5rem;
}

.process-step p {
  font-size: 0.85rem;
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
}

.service-price-band {
  background: var(--accent-light);
  border: 1px solid rgba(200,75,17,0.2);
  border-radius: var(--radius-md);
  padding: 1.25rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1.5rem;
}

.service-price-range {
  font-family: var(--font-serif);
  font-size: 1.4rem;
  font-style: italic;
  color: var(--accent);
}

/* ============================================================
   16. RESPONSIVE
   ============================================================ */
@media (max-width: 1024px) {
  .pricing-grid {
    grid-template-columns: repeat(2, 1fr);
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
  }

  .pricing-card.featured {
    transform: none;
  }

  .about-inner {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .about-right-cards {
    grid-template-columns: 1fr 1fr;
  }

  .contact-inner {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .alt-contact {
    padding-top: 0;
  }

  .footer-top {
    grid-template-columns: 1fr 1fr;
  }

  .footer-brand {
    grid-column: 1 / -1;
  }
}

@media (max-width: 768px) {
  :root {
    --section-pad: 4rem 1.25rem;
  }

  .nav-links,
  .lang-toggle {
    display: none;
  }

  .hamburger {
    display: flex;
  }

  .hero-inner {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .stats-cluster {
    grid-template-columns: repeat(3, 1fr);
  }

  .credibilidad-inner {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }

  .stat-row {
    justify-content: flex-start;
  }

  .cases-grid {
    grid-template-columns: 1fr;
  }

  .steps-grid {
    grid-template-columns: 1fr;
  }

  .footer-top {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .footer-bottom {
    flex-direction: column;
    align-items: flex-start;
  }

  .case-metrics-grid {
    grid-template-columns: 1fr;
  }

  .process-steps {
    grid-template-columns: 1fr;
  }

  .service-price-band {
    flex-direction: column;
    align-items: flex-start;
  }

  .service-card {
    width: 100%;
    min-width: 0;
  }

  .about-right-cards {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .hero-ctas {
    flex-direction: column;
    align-items: flex-start;
  }

  .stats-cluster {
    grid-template-columns: 1fr;
  }

  .pricing-grid {
    grid-template-columns: 1fr;
    max-width: 380px;
  }

  .trust-strip {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
}

/* ============================================================
   17. HERO AI VISUAL & TALAVERA DECORATION
   ============================================================ */

/* Container */
.ai-visual {
  position: relative;
  width: 100%;
}

/* Card that wraps the neural network SVG */
.ai-visual-card {
  background: var(--card);
  border: 2px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 1.5rem 1.5rem 1rem;
  position: relative;
  box-shadow: var(--shadow-card);
  overflow: visible;
}

/* Talavera-inspired corner brackets (4 corners) */
.ai-visual-card::before,
.ai-visual-card::after {
  content: '';
  position: absolute;
  width: 28px;
  height: 28px;
  border: 2.5px solid var(--accent);
  opacity: 0.35;
  pointer-events: none;
}
.ai-visual-card::before {
  top: 10px;
  left: 10px;
  border-bottom: none;
  border-right: none;
  border-radius: var(--radius-sm) 0 0 0;
}
.ai-visual-card::after {
  bottom: 10px;
  right: 10px;
  border-top: none;
  border-left: none;
  border-radius: 0 0 var(--radius-sm) 0;
}
.talavera-corner-tr,
.talavera-corner-bl {
  position: absolute;
  width: 28px;
  height: 28px;
  border: 2.5px solid var(--accent);
  opacity: 0.35;
  pointer-events: none;
}
.talavera-corner-tr {
  top: 10px;
  right: 10px;
  border-bottom: none;
  border-left: none;
  border-radius: 0 var(--radius-sm) 0 0;
}
.talavera-corner-bl {
  bottom: 10px;
  left: 10px;
  border-top: none;
  border-right: none;
  border-radius: 0 0 0 var(--radius-sm);
}

/* SVG */
.ai-neural {
  display: block;
  width: 100%;
  height: auto;
}

/* Small label below the animation */
.ai-visual-label {
  text-align: center;
  font-size: 0.78rem;
  color: var(--muted);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  padding: 0.5rem 0 0.25rem;
}

/* Floating stat badges */
.stat-badge {
  position: absolute;
  background: var(--card);
  border: 1.5px solid var(--border);
  border-radius: var(--radius-md);
  padding: 0.55rem 0.85rem;
  text-align: center;
  box-shadow: var(--shadow-hover);
  min-width: 72px;
  line-height: 1.2;
  pointer-events: none;
}
.stat-badge .metric-num {
  font-size: 1.4rem;
  display: block;
}
.stat-badge .badge-label {
  font-size: 0.68rem;
  color: var(--muted);
  display: block;
  margin-top: 0.1rem;
}
.badge-1 {
  top: -16px;
  left: -16px;
}
.badge-2 {
  top: 50%;
  right: -20px;
  transform: translateY(-50%);
}
.badge-3 {
  bottom: -16px;
  left: 38%;
  transform: translateX(-50%);
}

/* Talavera tile background for alternating sections */
/* Cross + circle + corner dots in cobalt & sky blue */
#credibilidad,
#casos,
.subpage-hero {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Cline x1='30' y1='0' x2='30' y2='60' stroke='%231a3a7c' stroke-width='0.6' opacity='0.14'/%3E%3Cline x1='0' y1='30' x2='60' y2='30' stroke='%231a3a7c' stroke-width='0.6' opacity='0.14'/%3E%3Ccircle cx='30' cy='30' r='4' fill='none' stroke='%231a3a7c' stroke-width='1' opacity='0.2'/%3E%3Ccircle cx='30' cy='30' r='1.5' fill='%231a3a7c' opacity='0.26'/%3E%3Ccircle cx='0' cy='0' r='2.5' fill='%231a3a7c' opacity='0.2'/%3E%3Ccircle cx='60' cy='0' r='2.5' fill='%231a3a7c' opacity='0.2'/%3E%3Ccircle cx='0' cy='60' r='2.5' fill='%231a3a7c' opacity='0.2'/%3E%3Ccircle cx='60' cy='60' r='2.5' fill='%231a3a7c' opacity='0.2'/%3E%3Ccircle cx='30' cy='0' r='1.5' fill='%236b9fd4' opacity='0.26'/%3E%3Ccircle cx='30' cy='60' r='1.5' fill='%236b9fd4' opacity='0.26'/%3E%3Ccircle cx='0' cy='30' r='1.5' fill='%236b9fd4' opacity='0.26'/%3E%3Ccircle cx='60' cy='30' r='1.5' fill='%236b9fd4' opacity='0.26'/%3E%3C/svg%3E");
  background-size: 60px 60px;
}

#credibilidad {
  background-color: var(--color-cream);
}

#casos {
  background-color: var(--color-cream);
}

.subpage-hero {
  background-color: var(--tag-bg);
}

/* Desktop: show floating badges, hide row */
.ai-badges-row { display: none; }

/* Mobile: hide floating badges, show row */
@media (max-width: 768px) {
  .badge-1, .badge-2, .badge-3 { display: none; }
  .ai-badges-row {
    display: flex;
    justify-content: center;
    gap: 0.75rem;
    margin-top: 1rem;
    flex-wrap: wrap;
  }
  .ai-badges-row .stat-badge {
    position: static !important;
    transform: none !important;
  }
}

/* ============================================================
   18. PRINT
   ============================================================ */
@media print {
  .site-nav,
  .whatsapp-float,
  .hamburger,
  .nav-overlay,
  .scroll-indicator { display: none !important; }
  body { background: #fff; color: #000; }
}
