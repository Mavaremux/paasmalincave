"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  };

  const WHATSAPP_NUMBER = "584248541279";
  const EMAIL_ADDRESS = "paasmalinca@gmail.com";
  const MAILTO_LINK = `mailto:${EMAIL_ADDRESS}?subject=Solicitud%20de%20Cotizaci%C3%B3n&body=Hola%2C%0A%0AMe%20gustar%C3%ADa%20solicitar%20una%20cotizaci%C3%B3n%20para%20sus%20servicios%20industriales.%0A%0ANombre%3A%0AEmpresa%3A%0ATel%C3%A9fono%3A%0ARequerimiento%3A`;
  const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Hola%20PAASMALINC.A,%20solicito%20informaci%C3%B3n%20t%C3%A9cnica.`;

  return (
    <>
      {/* TopNavBar */}
      <header className="bg-surface w-full top-0 sticky border-b border-outline-variant z-40 transition-all duration-200">
        <div className="flex justify-between items-center max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop h-20">
          <Link href="/" className="text-headline-sm font-headline-sm font-bold text-primary tracking-tight">
            PAASMALINC.A
          </Link>

          <nav className="hidden md:flex gap-gutter items-center h-full">
            <Link href="/" className="font-label-bold text-label-bold text-on-surface-variant hover:text-secondary transition-colors duration-200 h-full flex items-center">Inicio</Link>
            <a href="#services" className="font-label-bold text-label-bold text-on-surface-variant hover:text-secondary transition-colors duration-200 h-full flex items-center">Servicios</a>
            <a href="#about" className="font-label-bold text-label-bold text-on-surface-variant hover:text-secondary transition-colors duration-200 h-full flex items-center">Nosotros</a>
            <a href="#clients" className="font-label-bold text-label-bold text-on-surface-variant hover:text-secondary transition-colors duration-200 h-full flex items-center">Clientes</a>
            <a href="#contact" className="font-label-bold text-label-bold text-on-surface-variant hover:text-secondary transition-colors duration-200 h-full flex items-center">Contacto</a>
          </nav>

          <div className="hidden md:block">
            <a href={MAILTO_LINK} className="inline-flex items-center justify-center bg-secondary-container text-on-secondary-container font-label-bold text-label-bold px-6 py-2.5 rounded hover:bg-secondary transition-colors">
              Solicitar Cotización
            </a>
          </div>

          <button className="md:hidden text-primary p-2" onClick={toggleMenu}>
            <span className="material-symbols-outlined text-[28px]">menu</span>
          </button>
        </div>
      </header>

      {/* SideNavBar (Mobile Overlay) */}
      <div className={`fixed inset-0 bg-primary/50 z-50 md:hidden transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`} onClick={(e) => { if (e.target === e.currentTarget) toggleMenu(); }}>
        <aside className={`fixed inset-y-0 left-0 w-64 bg-surface shadow-md transform transition-transform duration-300 flex flex-col h-full border-r border-surface-container-high ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
          <div className="p-6 border-b border-surface-container-high flex justify-between items-center">
            <div>
              <h2 className="font-headline-sm text-headline-sm font-bold text-primary">PAASMALINC.A</h2>
              <p className="font-caption text-caption text-on-surface-variant mt-1">Instrumentación Industrial</p>
            </div>
            <button className="text-on-surface-variant p-1" onClick={toggleMenu}>
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>
          <nav className="flex-1 overflow-y-auto py-4 px-3 flex flex-col gap-2">
            <Link href="/" onClick={toggleMenu} className="flex items-center gap-3 text-on-surface-variant p-3 rounded hover:bg-surface-container-highest transition-all font-body-md">
              <span className="material-symbols-outlined">home</span>
              Inicio
            </Link>
            <a href="#services" onClick={toggleMenu} className="flex items-center gap-3 text-on-surface-variant p-3 rounded hover:bg-surface-container-highest transition-all font-body-md">
              <span className="material-symbols-outlined">engineering</span>
              Servicios
            </a>
            <a href="#about" onClick={toggleMenu} className="flex items-center gap-3 text-on-surface-variant p-3 rounded hover:bg-surface-container-highest transition-all font-body-md">
              <span className="material-symbols-outlined">info</span>
              Sobre Nosotros
            </a>
            <a href="#clients" onClick={toggleMenu} className="flex items-center gap-3 text-on-surface-variant p-3 rounded hover:bg-surface-container-highest transition-all font-body-md">
              <span className="material-symbols-outlined">groups</span>
              Clientes
            </a>
            <a href="#contact" onClick={toggleMenu} className="flex items-center gap-3 text-on-surface-variant p-3 rounded hover:bg-surface-container-highest transition-all font-body-md">
              <span className="material-symbols-outlined">mail</span>
              Contacto
            </a>
          </nav>
          <div className="p-4 border-t border-surface-container-high">
            <a href={MAILTO_LINK} onClick={toggleMenu} className="w-full flex justify-center items-center bg-secondary-container text-on-secondary-container font-label-bold text-label-bold px-4 py-3 rounded">
              Solicitar Cotización
            </a>
          </div>
        </aside>
      </div>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative w-full h-[600px] flex items-center">
          <div className="absolute inset-0 z-0 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDLWOdGmvpnHpea_hXgDa0ZFljqWEqYqYZeUt0PV4r46mSaJ4AyHTUwXMOn8q_1DwXWs2bcKFdQM9Nd7dcbim47STgJ36N-qO04w8PnSo409ThJ-vNFrIV0b83VYdZFSUXzMiU33Q4pf15JXaXPE7Z1PxhqIeDQ4Bxwtii2vDsbXSLJo10UUIImJt_zrZP7MNK3E6ALhwRSYZZAbZAUkmVfRCye9zJP4inq4RQAGV_9HO44Wn45J9Kl5w')" }}></div>
          <div className="absolute inset-0 bg-primary-container bg-opacity-75 z-10"></div>
          <div className="relative z-20 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop w-full">
            <div className="max-w-3xl">
              <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-white mb-stack-md leading-tight">
                Excelencia y Precisión en Instrumentación Industrial
              </h1>
              <p className="font-body-lg text-body-lg text-inverse-primary mb-stack-lg max-w-2xl">
                Soluciones avanzadas en calibración, mantenimiento y control de válvulas para el sector petrolero e industrial. Confiabilidad absoluta para operaciones críticas.
              </p>
              <div className="flex flex-col sm:flex-row gap-stack-md">
                <a href={MAILTO_LINK} className="bg-secondary-container text-white font-label-bold text-label-bold px-8 py-4 rounded hover:bg-secondary transition-colors text-center shadow-sm">
                  Solicitar Cotización
                </a>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="border border-outline-variant text-white font-label-bold text-label-bold px-8 py-4 rounded hover:bg-white hover:text-primary-container hover:border-white transition-all flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined" style={{ fontSize: "20px" }}>chat</span>
                  Contactar por WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-section-gap bg-background">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="mb-stack-lg">
              <h2 className="font-headline-md text-headline-md text-primary mb-stack-sm">Servicios Especializados</h2>
              <div className="w-12 h-1 bg-secondary rounded mb-4"></div>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
                Desarrollamos e implementamos arquitecturas de control y medición con los más altos estándares de seguridad y eficiencia operativa.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
              {/* Card 1 */}
              <div className="bg-surface-container-lowest border border-outline-variant rounded p-6 group hover:border-primary-container hover:shadow-sm transition-all duration-300 flex flex-col h-full">
                <div className="w-12 h-12 bg-surface-container flex items-center justify-center rounded mb-stack-md text-primary-container group-hover:bg-primary-container group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined fill">box</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-stack-sm">Cajas Orificio Daniel</h3>
                <p className="font-body-md text-body-md text-on-surface-variant flex-grow mb-stack-md">
                  Soluciones precisas para la medición de flujo de gas y líquidos con estándares internacionales.
                </p>
                <a href="#contact" className="font-label-bold text-label-bold text-primary-container flex items-center gap-1 group-hover:text-secondary transition-colors mt-auto">
                  Ver Especificaciones <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </a>
              </div>
              {/* Card 2 */}
              <div className="bg-surface-container-lowest border border-outline-variant rounded p-6 group hover:border-primary-container hover:shadow-sm transition-all duration-300 flex flex-col h-full">
                <div className="w-12 h-12 bg-surface-container flex items-center justify-center rounded mb-stack-md text-primary-container group-hover:bg-primary-container group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined fill">water_drop</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-stack-sm">Coriolis Medidor de Flujo</h3>
                <p className="font-body-md text-body-md text-on-surface-variant flex-grow mb-stack-md">
                  Medición directa de masa y densidad de alta precisión para fluidos complejos y desafiantes.
                </p>
                <a href="#contact" className="font-label-bold text-label-bold text-primary-container flex items-center gap-1 group-hover:text-secondary transition-colors mt-auto">
                  Ver Especificaciones <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </a>
              </div>
              {/* Card 3 */}
              <div className="bg-surface-container-lowest border border-outline-variant rounded p-6 group hover:border-primary-container hover:shadow-sm transition-all duration-300 flex flex-col h-full">
                <div className="w-12 h-12 bg-surface-container flex items-center justify-center rounded mb-stack-md text-primary-container group-hover:bg-primary-container group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined fill">settings_input_component</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-stack-sm">Paneles de Control</h3>
                <p className="font-body-md text-body-md text-on-surface-variant flex-grow mb-stack-md">
                  Diseño, ensamblaje y puesta en marcha de sistemas de control industrial personalizados.
                </p>
                <a href="#contact" className="font-label-bold text-label-bold text-primary-container flex items-center gap-1 group-hover:text-secondary transition-colors mt-auto">
                  Ver Especificaciones <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </a>
              </div>
              {/* Card 4 */}
              <div className="bg-surface-container-lowest border border-outline-variant rounded p-6 group hover:border-primary-container hover:shadow-sm transition-all duration-300 flex flex-col h-full">
                <div className="w-12 h-12 bg-surface-container flex items-center justify-center rounded mb-stack-md text-primary-container group-hover:bg-primary-container group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined fill">security</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-stack-sm">Válvulas de Seguridad</h3>
                <p className="font-body-md text-body-md text-on-surface-variant flex-grow mb-stack-md">
                  Mantenimiento, calibración y suministro de válvulas de seguridad y alivio de presión.
                </p>
                <a href="#contact" className="font-label-bold text-label-bold text-primary-container flex items-center gap-1 group-hover:text-secondary transition-colors mt-auto">
                  Ver Especificaciones <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="bg-surface-container-low border-y border-outline-variant">
          {/* Dark Header */}
          <div className="w-full bg-primary py-16 md:py-24 px-margin-mobile md:px-margin-desktop text-white">
            <div className="max-w-container-max mx-auto">
              <div className="inline-flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-sm mb-4 border border-white/20">
                <span className="material-symbols-outlined text-[16px]">business</span>
                <span className="font-label-bold text-label-bold text-[12px] uppercase tracking-widest text-white">PERFIL CORPORATIVO</span>
              </div>
              <h2 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-white">
                Ingeniería de Alta Especialización
              </h2>
            </div>
          </div>

          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-section-gap">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
              
              {/* Left Column */}
              <div className="md:col-span-8 flex flex-col gap-gutter">
                {/* Vision Card */}
                <article className="bg-surface-container-lowest border border-outline-variant p-6 md:p-10 rounded hover:shadow-sm hover:border-primary-container transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-surface-container-low text-primary rounded border border-outline-variant hidden sm:block shrink-0">
                      <span className="material-symbols-outlined text-[32px] font-light">my_location</span>
                    </div>
                    <div>
                      <h2 className="font-headline-md text-headline-md text-primary mb-stack-sm">Visión Estratégica</h2>
                      <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                        La creación de PAASMALINCA, C.A. responde a una visión estratégica de ingeniería de alta especialización, diseñada para transformar radicalmente el panorama del mantenimiento industrial y la tecnología en el oriente venezolano. Específicamente, la organización concentra sus operaciones en los estados Anzoátegui y Monagas, abarcando las áreas operacionales clave de la Faja Petrolífera del Orinoco y sus complejos de refinación adyacentes.
                      </p>
                    </div>
                  </div>
                </article>

                {/* Leadership Card */}
                <article className="bg-surface-container-lowest border border-outline-variant p-6 md:p-10 rounded hover:shadow-sm hover:border-primary-container transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-surface-container-low text-primary rounded border border-outline-variant hidden sm:block shrink-0">
                      <span className="material-symbols-outlined text-[32px] font-light">assignment_ind</span>
                    </div>
                    <div>
                      <h2 className="font-headline-md text-headline-md text-primary mb-stack-sm">Liderazgo Corporativo</h2>
                      <div className="flex flex-col gap-1 mt-4">
                        <span className="font-headline-sm text-headline-sm text-primary text-[18px]">Alex Mavares</span>
                        <span className="font-label-bold text-label-bold text-secondary uppercase tracking-widest text-[12px]">PDTE. PAASMALINCA</span>
                        <span className="font-body-md text-body-md text-on-surface-variant flex items-center gap-2 mt-1 text-[14px]">
                          <span className="material-symbols-outlined text-[16px]">call</span>
                          +58 424 8541279
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              </div>

              {/* Right Column */}
              <div className="md:col-span-4 flex flex-col gap-gutter" id="clients">
                {/* Aliado Tecnológico Card */}
                <article className="bg-surface-container-lowest border border-outline-variant p-6 md:p-8 rounded hover:shadow-sm hover:border-primary-container transition-all duration-300">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-secondary/10 p-2 rounded-full text-secondary">
                       <span className="material-symbols-outlined text-[20px]">handshake</span>
                    </div>
                    <h2 className="font-headline-sm text-headline-sm text-primary text-[20px]">Aliado Tecnológico</h2>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-6 text-[14px]">
                    PAASMALINCA, C.A. se posiciona como un aliado estratégico enfocado en la optimización de procesos mediante soluciones de vanguardia.
                  </p>
                  
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3 border border-outline-variant rounded p-3 bg-white">
                      <span className="material-symbols-outlined text-on-surface-variant text-[20px]">tune</span>
                      <span className="font-label-bold text-label-bold text-[14px] text-primary">Instrumentación</span>
                    </div>
                    <div className="flex items-center gap-3 border border-outline-variant rounded p-3 bg-white">
                      <span className="material-symbols-outlined text-on-surface-variant text-[20px]">dns</span>
                      <span className="font-label-bold text-label-bold text-[14px] text-primary">Sistemas DCS</span>
                    </div>
                    <div className="flex items-center gap-3 border border-outline-variant rounded p-3 bg-white">
                      <span className="material-symbols-outlined text-on-surface-variant text-[20px]">router</span>
                      <span className="font-label-bold text-label-bold text-[14px] text-primary">Controladores PLC</span>
                    </div>
                    <div className="flex items-center gap-3 border border-outline-variant rounded p-3 bg-white">
                      <span className="material-symbols-outlined text-on-surface-variant text-[20px]">monitor</span>
                      <span className="font-label-bold text-label-bold text-[14px] text-primary">Sistemas SCADA</span>
                    </div>
                  </div>
                </article>

                {/* Normativas Card */}
                <div className="bg-primary text-on-primary p-6 md:p-8 rounded border border-primary-container relative overflow-hidden flex flex-col justify-center shadow-md">
                  <div className="absolute -right-10 -top-10 opacity-10">
                    <span className="material-symbols-outlined text-[150px]">verified</span>
                  </div>
                  <div className="relative z-10">
                    <h3 className="font-headline-sm text-headline-sm mb-stack-md text-white text-[20px]">Normativas y Calidad</h3>
                    <p className="font-body-md text-body-md text-inverse-primary/80 mb-stack-lg text-[14px]">
                      La organización alinea rigurosamente sus procesos con exigentes normativas internacionales y especificaciones técnicas.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 border border-inverse-primary/30 font-caption text-caption rounded text-inverse-primary text-[11px]">Normas API</span>
                      <span className="px-2 py-1 border border-inverse-primary/30 font-caption text-caption rounded text-inverse-primary text-[11px]">Estándares ISO</span>
                      <span className="px-2 py-1 border border-inverse-primary/30 font-caption text-caption rounded text-inverse-primary text-[11px]">Specs PDVSA</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Clientes Section */}
            <div className="mt-20 pt-16 border-t border-outline-variant flex flex-col items-center">
              <h3 className="font-headline-sm text-headline-sm text-primary mb-12 text-center relative pb-4">
                Algunos de Nuestros Clientes
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-secondary rounded"></span>
              </h3>
              
              <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
                {/* PDVSA Industrial Logo Placeholder */}
                <div className="flex items-center gap-3 bg-white px-6 py-4 border border-outline-variant rounded hover:shadow-sm transition-shadow grayscale hover:grayscale-0">
                  <div className="w-10 h-10 bg-primary flex items-center justify-center rounded-full text-white shrink-0">
                    <span className="material-symbols-outlined text-[24px]">oil_barrel</span>
                  </div>
                  <div className="flex flex-col border-l-2 border-primary pl-3">
                    <span className="font-display-lg-mobile text-[22px] font-bold text-primary leading-none tracking-tight">PDVSA</span>
                    <span className="font-label-bold text-[11px] tracking-widest text-primary">INDUSTRIAL</span>
                  </div>
                </div>
                
                {/* PDVSA Gas Logo Placeholder */}
                <div className="flex items-center gap-3 bg-white px-6 py-4 border border-outline-variant rounded hover:shadow-sm transition-shadow grayscale hover:grayscale-0">
                  <div className="w-10 h-10 bg-primary flex items-center justify-center rounded-full text-white shrink-0">
                    <span className="material-symbols-outlined text-[24px]">local_gas_station</span>
                  </div>
                  <div className="flex flex-col border-l-2 border-primary pl-3">
                    <span className="font-display-lg-mobile text-[22px] font-bold text-primary leading-none tracking-tight">PDVSA</span>
                    <span className="font-label-bold text-[11px] tracking-widest text-primary">GAS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-section-gap bg-background">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-section-gap">
              <div className="bg-surface-container-lowest border border-outline-variant rounded p-6 md:p-8 shadow-sm">
                <h2 className="font-headline-md text-headline-md text-primary mb-stack-sm">Solicitud de Servicio</h2>
                <p className="font-body-md text-body-md text-on-surface-variant mb-stack-lg">
                  Complete el formulario detallando sus requerimientos técnicos y un ingeniero de ventas se comunicará a la brevedad.
                </p>
                <form className="flex flex-col gap-stack-md" onSubmit={(e) => e.preventDefault()}>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="font-label-bold text-label-bold text-on-surface">Nombre Completo</label>
                    <input type="text" id="name" placeholder="Ej. Carlos Mendoza" className="border border-outline-variant rounded bg-surface-container-lowest p-3 font-body-md focus:border-primary-container focus:ring-1 focus:ring-primary-container outline-none transition-colors" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="company" className="font-label-bold text-label-bold text-on-surface">Empresa</label>
                    <input type="text" id="company" placeholder="Razón Social" className="border border-outline-variant rounded bg-surface-container-lowest p-3 font-body-md focus:border-primary-container focus:ring-1 focus:ring-primary-container outline-none transition-colors" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="requirement" className="font-label-bold text-label-bold text-on-surface">Requerimiento Técnico</label>
                    <textarea id="requirement" placeholder="Describa el alcance de su necesidad..." rows={4} className="border border-outline-variant rounded bg-surface-container-lowest p-3 font-body-md focus:border-primary-container focus:ring-1 focus:ring-primary-container outline-none transition-colors resize-none"></textarea>
                  </div>
                  <button type="submit" className="mt-stack-sm bg-primary-container text-white font-label-bold text-label-bold px-6 py-4 rounded hover:bg-tertiary-container transition-colors shadow-sm self-start">
                    Enviar Solicitud
                  </button>
                </form>
              </div>
              <div className="flex flex-col justify-center">
                <div className="mb-stack-lg">
                  <h3 className="font-headline-sm text-headline-sm text-primary mb-stack-md border-b border-outline-variant pb-2">Datos Corporativos</h3>
                  <ul className="flex flex-col gap-stack-md mt-stack-md">
                    <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-primary-container">location_on</span>
                      <div>
                        <span className="font-label-bold text-label-bold text-on-surface block">Sede Principal</span>
                        <span className="font-body-md text-body-md text-on-surface-variant">Anzoátegui, Venezuela</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-primary-container">call</span>
                      <div>
                        <span className="font-label-bold text-label-bold text-on-surface block">Atención Técnica (WhatsApp)</span>
                        <span className="font-body-md text-body-md text-on-surface-variant">+58 424 854 1279</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-primary-container">mail</span>
                      <div>
                        <span className="font-label-bold text-label-bold text-on-surface block">Correo Electrónico</span>
                        <span className="font-body-md text-body-md text-on-surface-variant">{EMAIL_ADDRESS}</span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="w-full h-48 rounded border border-outline-variant overflow-hidden">
                  <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAnR_4_4P5yDWs5H_OxhM2vkpVYxnw7Gx4EDpVBTpMaMpT4EosQ1ubtdg8tj-o6uiRRVdl-Qtk3MRV3zpGU-jGvzSoAN1rxlIBroVt9xLAo-Al2jjbTeV0DBnO0uZGxAJ_2OTgxdrWAta1-hn2OoMmDTxetAGRgLMmzTlcRonSMATWd1DkqKmTnFwdQdwtVuHtefiES3OZmnvH_ZxMYqzalqM_9JwKhQAq0ICgou___-_6xrGdmC9vJXQ')" }}></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-surface-container-lowest w-full py-10 border-t border-outline-variant">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-lg max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="flex flex-col gap-stack-sm">
            <span className="font-label-bold text-label-bold uppercase tracking-widest text-on-surface">PAASMALINC.A</span>
            <p className="font-caption text-caption text-on-surface-variant">© 2024 PAASMALINC.A. Todos los derechos reservados. Excelencia Industrial.</p>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 md:justify-end">
            <a href="#about" className="font-caption text-caption text-on-surface-variant hover:text-primary hover:underline transition-all">Política de Privacidad</a>
            <a href="#about" className="font-caption text-caption text-on-surface-variant hover:text-primary hover:underline transition-all">Términos de Servicio</a>
          </div>
        </div>
      </footer>

      {/* WhatsApp FAB */}
      <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 w-14 h-14 bg-secondary text-white rounded-full flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-transform z-40">
        <span className="material-symbols-outlined" style={{ fontSize: "28px" }}>chat</span>
      </a>
    </>
  );
}
