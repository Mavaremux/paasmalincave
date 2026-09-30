const MOBILE_MENU_TOGGLE = document.getElementById("mobile-menu-toggle");
const MOBILE_MENU = document.getElementById("mobile-menu");
const SERVICE_TABS = document.querySelectorAll(".service-tab-btn");
const SERVICE_DETAILS = document.querySelectorAll(".service-detail");
const CONTACT_FORM = document.getElementById("contact-form");
const WHATSAPP_NUMBER = "584248541279";

function setMenuState(open) {
  MOBILE_MENU.classList.toggle("open", open);
  MOBILE_MENU_TOGGLE.setAttribute("aria-expanded", String(open));
  MOBILE_MENU_TOGGLE.innerHTML = `<span class="material-icons">${open ? "close" : "menu"}</span>`;
  document.body.style.overflow = open ? "hidden" : "";
}

function closeMobileMenu() {
  setMenuState(false);
}

function openMobileMenu() {
  setMenuState(true);
}

MOBILE_MENU_TOGGLE.addEventListener("click", () => {
  setMenuState(!MOBILE_MENU.classList.contains("open"));
});

MOBILE_MENU.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => closeMobileMenu());
});

document.addEventListener("click", (event) => {
  if (!MOBILE_MENU.classList.contains("open")) return;
  if (MOBILE_MENU.contains(event.target) || MOBILE_MENU_TOGGLE.contains(event.target)) return;
  closeMobileMenu();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeMobileMenu();
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 980) closeMobileMenu();
});

SERVICE_TABS.forEach((button) => {
  button.addEventListener("click", () => {
    const tabIndex = button.dataset.tab;
    SERVICE_TABS.forEach((btn) => btn.classList.remove("active"));
    SERVICE_DETAILS.forEach((detail) => detail.classList.remove("active"));

    button.classList.add("active");
    const target = document.querySelector(`.service-detail[data-detail='${tabIndex}']`);
    if (target) {
      target.classList.add("active");
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

if (SERVICE_TABS.length) {
  SERVICE_TABS[0].classList.add("active");
}

if (CONTACT_FORM) {
  CONTACT_FORM.addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const name = form.name.value.trim();
    const company = form.company.value.trim();
    const requirement = form.req.value.trim();
    const message = `Hola PAASMALINC.A, soy ${name} de ${company}. Req: ${requirement}`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, "_blank");
    form.reset();
  });
}

/* ══════════════════════════════════════════════
   SISTEMA DE TRADUCCIÓN EN / ES
   Sin frameworks externos — HTML / CSS / JS puro
   ══════════════════════════════════════════════ */

const i18n = {
  es: {
    /* Navegación */
    nav_servicios:  "Servicios",
    nav_nosotros:   "Nosotros",
    nav_contacto:   "Contacto",
    nav_cotizar:    "COTIZAR",
    nav_solicitar:  "SOLICITAR COTIZACIÓN",

    /* Hero */
    hero_label:       "Instrumentación Industrial",
    hero_h1:          "Excelencia y Precisión en <span data-i18n=\"hero_h1_span\">Instrumentación Industrial</span>",
    hero_h1_span:     "Instrumentación Industrial",
    hero_desc:        "Soluciones avanzadas en calibración, mantenimiento y control automatizado para el sector petrolero y gasífero en Venezuela.",
    hero_cta1:        "VER SERVICIOS",
    hero_cta2:        "HABLA CON UN EXPERTO AHORA",
    hero_trust_label: "Empresas que confían en nosotros",

    /* Nosotros */
    about_h2:            "Quienes Somos",
    about_intro:         "PAASMALIN, C.A. es una empresa venezolana de ingeniería y servicios industriales especializada en instrumentación, electricidad, electrónica y control automatizado, ubicada en Anaco, Estado Anzoátegui.",
    about_text:          "PAASMALIN, C.A. es una empresa venezolana con 16 años de trayectoria, constituida en el año 2010. Nos especializamos en la ejecución de obras de gran envergadura, proyectos de ingeniería y servicios especializados, así como en la distribución masiva de bienes, equipos y suministros esenciales para el desarrollo industrial, tecnológico y comercial de la nación. Ofrecemos servicios de mantenimiento, automatización, y asesorías en sectores energéticos. Su experiencia está representada por Mantenimientos Mayores a Equipos Rotativos, Facilidades de Producción en Superficie, Fabricación e Implantación de nuevos diseños y optimizaciones. Desarrollo de Ingeniería para Estaciones, Plantas de Producción, Procesamiento y Tratamiento en Gas & Crudo, Plantas de Generación Eléctrica.",
    about_contact_label: "Persona Contacto",
    about_highlight:     "Con el compromiso de la reactivación energética de Venezuela y el suministro de expertos, servicios e instrumentos para la industria petrolera y gasífera.",

    /* Experiencia */
    exp_label:      "Trayectoria comprobada",
    exp_title:      "Experiencia y <span data-i18n=\"exp_title_span\">Capacidad</span>",
    exp_title_span: "Capacidad",

    /* Servicios */
    srv_h2:      "Servicios <span data-i18n=\"srv_h2_span\">Especializados</span>",
    srv_h2_span: "Especializados",
    srv_intro:   "Transmisores y Posicionadores, Paneles de Control, Pruebas Hidrostáticas, Mecanizado de Piezas, Reparación In Situ.",

    /* Casos de Éxito */
    success_h2:    "Casos de <span>Éxito</span>",
    success_intro: "Proyectos ejecutados con excelencia operativa para la industria petrolera y gasífera nacional.",
    success_card1_p: "Mantenimiento integral de instrumentación y válvulas de seguridad.",
    success_card2_p: "Calibración de transmisores y puesta en marcha de sistema de control.",
    success_card3_title: "Estación de Flujo",
    success_card3_p: "Instalación de medidores Coriolis y cajas orificio Daniel.",
    success_card4_title: "Proyecto de Automatización",
    success_card4_p: "Diseño e integración de paneles de control PLC y RTU.",

    /* Metodología */
    method_h2:    "Metodología de <span>Trabajo</span>",
    method_intro: "Proceso estructurado para garantizar el éxito operativo.",
    proc1: "Diagnóstico",
    proc2: "Ingeniería",
    proc3: "Ejecución",
    proc4: "Supervisión",
    proc5: "Entrega",

    /* FAQ */
    faq_h2:    "Preguntas <span>Frecuentes</span>",
    faq_intro: "Resolvemos las dudas más comunes sobre nuestros servicios industriales.",
    faq1_q: "¿Qué tipo de certificaciones tienen sus calibraciones?",
    faq1_a: "Nuestras calibraciones se realizan siguiendo los más altos estándares y normativas internacionales (como AGA, API, NFPA e ISA), utilizando equipos patrón certificados y trazables.",
    faq2_q: "¿Ofrecen servicios de mantenimiento en campo (in-situ)?",
    faq2_a: "Sí, contamos con personal altamente calificado para realizar mantenimientos preventivos y correctivos, así como diagnósticos y calibraciones directamente en las instalaciones del cliente.",
    faq3_q: "¿En qué zonas de Venezuela operan?",
    faq3_a: "Nuestra sede principal está en Anaco, Estado Anzoátegui, pero ofrecemos cobertura y servicios especializados a nivel nacional para todo el sector petrolero y gasífero.",
    faq4_q: "¿Tienen capacidad para actualizar sistemas de control obsoletos?",
    faq4_a: "Absolutamente. Nos especializamos en la migración de sistemas obsoletos, integración de gabinetes y actualización de lógicas de control para PLC y RTU.",

    /* Contacto */
    contact_h2:   "Inicie su Proyecto",
    contact_desc: "Contáctenos hoy para evaluar sus requerimientos técnicos. Nuestro equipo de ingenieros está listo para brindarle soluciones.",
    contact_sede:      "Sede Principal",
    contact_tel:       "Contacto Directo",
    contact_email_lbl: "Correo Electrónico",
    contact_form_title: "Formulario Rápido",
    contact_name_lbl:  "Nombre Completo",
    contact_company_lbl: "Empresa",
    contact_req_lbl:   "Requerimiento Técnico",
    contact_submit:    "ENVIAR POR WHATSAPP",

    /* Footer */
    footer_copy: "© 2026 PAASMALIN C.A. Todos los derechos reservados.",
  },

  en: {
    /* Navigation */
    nav_servicios:  "Services",
    nav_nosotros:   "About Us",
    nav_contacto:   "Contact",
    nav_cotizar:    "GET A QUOTE",
    nav_solicitar:  "REQUEST A QUOTE",

    /* Hero */
    hero_label:       "Industrial Instrumentation",
    hero_h1:          "Excellence and Precision in <span data-i18n=\"hero_h1_span\">Industrial Instrumentation</span>",
    hero_h1_span:     "Industrial Instrumentation",
    hero_desc:        "Advanced solutions in calibration, maintenance and automated control for the oil and gas sector in Venezuela.",
    hero_cta1:        "VIEW SERVICES",
    hero_cta2:        "SPEAK WITH AN EXPERT NOW",
    hero_trust_label: "Companies that trust us",

    /* About */
    about_h2:            "Who We Are",
    about_intro:         "PAASMALIN, C.A. is a Venezuelan engineering and industrial services company specializing in instrumentation, electrical, electronics and automated control, located in Anaco, Anzoátegui State.",
    about_text:          "PAASMALIN, C.A. is a Venezuelan company with 16 years of experience, established in 2010. We specialize in large-scale works, engineering projects and specialized services, as well as the mass distribution of goods, equipment and essential supplies for the nation's industrial, technological and commercial development. We offer maintenance, automation and consulting services in the energy sector. Our experience includes Major Maintenance of Rotating Equipment, Surface Production Facilities, Manufacturing and Implementation of new designs and optimizations, and Engineering Development for Stations, Production, Processing and Treatment Plants for Gas & Crude, and Power Generation Plants.",
    about_contact_label: "Contact Person",
    about_highlight:     "Committed to Venezuela's energy reactivation and the supply of experts, services and instruments for the oil and gas industry.",

    /* Experience */
    exp_label:      "Proven track record",
    exp_title:      "Experience and <span data-i18n=\"exp_title_span\">Capacity</span>",
    exp_title_span: "Capacity",

    /* Services */
    srv_h2:      "Specialized <span data-i18n=\"srv_h2_span\">Services</span>",
    srv_h2_span: "Services",
    srv_intro:   "Transmitters and Positioners, Control Panels, Hydrostatic Testing, Parts Machining, In-Situ Repair.",

    /* Success Cases */
    success_h2:    "Success <span>Cases</span>",
    success_intro: "Projects executed with operational excellence for the national oil and gas industry.",
    success_card1_p: "Comprehensive maintenance of instrumentation and safety valves.",
    success_card2_p: "Transmitter calibration and control system commissioning.",
    success_card3_title: "Flow Station",
    success_card3_p: "Installation of Coriolis meters and Daniel orifice plates.",
    success_card4_title: "Automation Project",
    success_card4_p: "Design and integration of PLC and RTU control panels.",

    /* Methodology */
    method_h2:    "Work <span>Methodology</span>",
    method_intro: "Structured process to ensure operational success.",
    proc1: "Diagnosis",
    proc2: "Engineering",
    proc3: "Execution",
    proc4: "Supervision",
    proc5: "Delivery",

    /* FAQ */
    faq_h2:    "Frequently Asked <span>Questions</span>",
    faq_intro: "We answer the most common questions about our industrial services.",
    faq1_q: "What type of certifications do your calibrations have?",
    faq1_a: "Our calibrations are performed following the highest international standards and regulations (such as AGA, API, NFPA and ISA), using certified and traceable reference equipment.",
    faq2_q: "Do you offer on-site (in-situ) maintenance services?",
    faq2_a: "Yes, we have highly qualified personnel to perform preventive and corrective maintenance, as well as diagnostics and calibrations directly at the client's facilities.",
    faq3_q: "In which areas of Venezuela do you operate?",
    faq3_a: "Our main office is in Anaco, Anzoátegui State, but we offer nationwide coverage and specialized services for the entire oil and gas sector.",
    faq4_q: "Do you have the capacity to update obsolete control systems?",
    faq4_a: "Absolutely. We specialize in migrating obsolete systems, integrating cabinets and updating control logic for PLC and RTU.",

    /* Contact */
    contact_h2:   "Start Your Project",
    contact_desc: "Contact us today to assess your technical requirements. Our team of engineers is ready to provide solutions.",
    contact_sede:      "Main Office",
    contact_tel:       "Direct Contact",
    contact_email_lbl: "Email Address",
    contact_form_title: "Quick Form",
    contact_name_lbl:  "Full Name",
    contact_company_lbl: "Company",
    contact_req_lbl:   "Technical Requirement",
    contact_submit:    "SEND VIA WHATSAPP",

    /* Footer */
    footer_copy: "© 2026 PAASMALIN C.A. All rights reserved.",
  }
};

/* ── Aplica idioma a todos los elementos con data-i18n ── */
function applyLang(lang) {
  const dict = i18n[lang];
  if (!dict) return;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (dict[key] !== undefined) {
      el.innerHTML = dict[key];
    }
  });

  /* Actualizar atributo lang del <html> para accesibilidad */
  document.documentElement.lang = lang;

  /* Sincronizar etiqueta de ambos botones */
  const nextLang = lang === "es" ? "EN" : "ES";
  document.querySelectorAll(".lang-btn__label").forEach((lbl) => {
    lbl.textContent = nextLang;
  });

  /* Marcar estado activo en el botón de escritorio */
  const btnDesktop = document.getElementById("lang-toggle");
  if (btnDesktop) btnDesktop.classList.toggle("lang-active", lang === "en");

  /* Persistir elección */
  localStorage.setItem("paasmalin_lang", lang);
}

/* ── Toggle de idioma ── */
function toggleLang() {
  const current = localStorage.getItem("paasmalin_lang") || "es";
  applyLang(current === "es" ? "en" : "es");
}

/* ── Vincular ambos botones (desktop y móvil) ── */
["lang-toggle", "lang-toggle-mobile"].forEach((id) => {
  const btn = document.getElementById(id);
  if (btn) btn.addEventListener("click", toggleLang);
});

/* ── Restaurar idioma guardado al cargar la página ── */
(function initLang() {
  const saved = localStorage.getItem("paasmalin_lang");
  if (saved && saved !== "es") {
    applyLang(saved);
  }
}());
