"use client";

import { useEffect, useState } from "react";

const slides = [
  {
    className: "hero-slide--team",
    eyebrow: "Construcción con propósito",
    title: (
      <>
        Construimos hoy
        <br />
        el lugar de <em>mañana.</em>
      </>
    ),
    description:
      "Soluciones confiables para construir, renovar y proteger lo que más importa.",
    primaryText: "Conoce nuestros servicios",
    primaryHref: "#servicios",
    secondaryText: "Conócenos",
    secondaryHref: "#nosotros",
    caption: "Equipo y experiencia en cada obra",
  },
  {
    className: "hero-slide--roof",
    eyebrow: "Calidad que se ve",
    title: (
      <>
        Un buen techo.
        <br />
        Un hogar <em>protegido.</em>
      </>
    ),
    description:
      "Trabajamos cada detalle de tu proyecto, desde la estructura hasta el último acabado.",
    primaryText: "Hagamos tu proyecto",
    primaryHref: "#servicios",
    secondaryText: "Contáctanos",
    secondaryHref: "#contacto",
    caption: "Equipo instalando tejas en una vivienda",
  },
  {
    className: "hero-slide--materials",
    eyebrow: "Materiales para avanzar",
    title: (
      <>
        La base correcta
        <br />
        para una gran <em>obra.</em>
      </>
    ),
    description:
      "Materiales seleccionados y asesoría cercana para cada etapa de la construcción.",
    primaryText: "Explora materiales",
    primaryHref: "#materiales",
    secondaryText: "Pide una cotización",
    secondaryHref: "#contacto",
    caption: "Buenos materiales. Mejores resultados.",
  },
];

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 6500);

    return () => window.clearInterval(timer);
  }, [isPaused]);

  function changeSlide(direction: number) {
    setActiveSlide(
      (current) => (current + direction + slides.length) % slides.length,
    );
  }

  return (
    <>
      <div className="contact-bar">
        <div className="container contact-bar__inner">
          <a href="mailto:info@nexoratech.global">
            <span aria-hidden="true">✉</span> info@nexoratech.global
          </a>
          <span className="contact-bar__phone">
            <span aria-hidden="true">☎</span> (+51) 994 748 870
          </span>
          <span className="contact-bar__address">
            <span aria-hidden="true">⌖</span> Av. Mariategui 1030, Jesús María
          </span>
          <a
            className="contact-bar__web"
            href="https://nexoratech.global"
            target="_blank"
            rel="noreferrer"
          >
            nexoratech.global <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>

      <header className="site-header">
        <div className="container site-header__inner">
          <a className="brand" href="#inicio" aria-label="NEXORA TECH, inicio">
            <img
              src="/logo-nexora.jpeg"
              alt="NEXORA TECH — Inversiones y Negocios CYA SAC"
            />
          </a>
          <nav
            className="main-nav"
            id="main-navigation"
            aria-label="Estado del sitio"
          >
            {/* Menú temporalmente desactivado mientras el sitio está en construcción.
                Reactiva estos enlaces cuando la empresa abra y las secciones vuelvan a mostrarse.
            <button
              className="menu-toggle"
              type="button"
              aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={isMenuOpen}
              aria-controls="main-navigation"
              onClick={() => setIsMenuOpen((open) => !open)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
            <a className="main-nav__link is-active" href="#inicio" onClick={closeMenu}>
              Inicio
            </a>
            <a className="main-nav__link" href="#nosotros" onClick={closeMenu}>
              Nosotros
            </a>
            <a className="main-nav__link" href="#servicios" onClick={closeMenu}>
              Servicios
            </a>
            <a className="main-nav__link" href="#materiales" onClick={closeMenu}>
              Materiales
            </a>
            <a className="button button--nav" href="#contacto" onClick={closeMenu}>
              Hablemos <span aria-hidden="true">↗</span>
            </a>
            */}
            <span className="construction-badge">
              <span aria-hidden="true"></span> Web en construcción
            </span>
          </nav>
        </div>
      </header>

      <main>
        <section
          className="hero"
          id="inicio"
          aria-roledescription="carrusel"
          aria-label="Proyectos de construcción"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) {
              setIsPaused(false);
            }
          }}
        >
          <div className="hero__slides">
            {slides.map((slide, index) => (
              <article
                className={`hero-slide ${slide.className}${
                  index === activeSlide ? " is-active" : ""
                }`}
                key={slide.className}
                aria-hidden={index !== activeSlide}
              >
                <div className="container hero-slide__content">
                  <p className="eyebrow eyebrow--light">
                    <span></span> {slide.eyebrow}
                  </p>
                  {index === 0 ? (
                    <h1>{slide.title}</h1>
                  ) : (
                    <h2>{slide.title}</h2>
                  )}
                  <p className="hero-slide__description">{slide.description}</p>
                  {/* Reactiva las llamadas a servicios y contacto cuando el sitio esté listo.
                  <div className="hero-slide__actions">
                    <a className="button button--accent" href={slide.primaryHref}>
                      {slide.primaryText} <span aria-hidden="true">↗</span>
                    </a>
                    <a className="hero__text-link" href={slide.secondaryHref}>
                      {slide.secondaryText} <span aria-hidden="true">→</span>
                    </a>
                  </div>
                  */}
                </div>
                <div className="hero-slide__caption">
                  <span>{String(index + 1).padStart(2, "0")}</span>{" "}
                  {slide.caption}
                </div>
              </article>
            ))}
          </div>
          <div className="hero__controls container">
            <div className="hero__dots" aria-label="Seleccionar presentación">
              {slides.map((slide, index) => (
                <button
                  className={`hero__dot${index === activeSlide ? " is-active" : ""}`}
                  type="button"
                  key={slide.className}
                  aria-label={`Ver presentación ${index + 1}`}
                  aria-pressed={index === activeSlide}
                  onClick={() => setActiveSlide(index)}
                />
              ))}
            </div>
            <div className="hero__arrows">
              <button
                className="hero__arrow"
                type="button"
                aria-label="Presentación anterior"
                onClick={() => changeSlide(-1)}
              >
                ←
              </button>
              <button
                className="hero__arrow"
                type="button"
                aria-label="Presentación siguiente"
                onClick={() => changeSlide(1)}
              >
                →
              </button>
            </div>
            <span className="hero__counter">
              <strong>{String(activeSlide + 1).padStart(2, "0")}</strong> / 03
            </span>
          </div>
        </section>

        <section className="coming-soon" aria-labelledby="coming-soon-title">
          <div className="coming-soon__inner">
            <span className="coming-soon__mark" aria-hidden="true">
              N
            </span>
            <p className="eyebrow">
              <span></span> NEXORA TECH
            </p>
            <h2 id="coming-soon-title">
              Estamos construyendo
              <br />
              algo <em>grande.</em>
            </h2>
            <p className="coming-soon__message">
              Muy pronto estaremos listos para construir contigo.
            </p>
            <span className="coming-soon__rule" aria-hidden="true">
              <span></span>
            </span>
          </div>
        </section>

        <section className="trust-strip" aria-label="Nuestro compromiso">
          <div className="container trust-strip__inner">
            <p>
              <span className="trust-strip__mark">✳</span> Construcción que
              inspira confianza
            </p>
            <span className="trust-strip__divider"></span>
            <p>
              Personas primero <span className="trust-strip__dot">·</span>{" "}
              Calidad siempre <span className="trust-strip__dot">·</span>{" "}
              Compromiso en cada obra
            </p>
          </div>
        </section>

        <section className="intro section-space" id="nosotros">
          <div className="container intro__grid">
            <div className="intro__visual">
              <img
                src="https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?auto=format&fit=crop&w=1100&q=85"
                alt="Equipo trabajando en una obra de construcción"
                loading="lazy"
              />
              <div className="intro__badge">
                <span>Construimos</span>
                <strong>con confianza</strong>
              </div>
              <div className="intro__visual-label">
                <span>01</span> Personas que hacen realidad tus ideas
              </div>
            </div>
            <div className="intro__copy">
              <p className="eyebrow">
                <span></span> Somos NEXORA TECH
              </p>
              <h2>
                Ideas firmes.
                <br />
                <em>Obras que perduran.</em>
              </h2>
              <p className="intro__lead">
                Cada gran proyecto comienza con confianza. En NEXORA TECH unimos
                experiencia, materiales de calidad y compromiso para acompañarte
                en cada paso.
              </p>
              <p className="intro__text">
                Somos Inversiones y Negocios CYA SAC. Trabajamos cerca de
                nuestros clientes para crear espacios seguros, funcionales y
                hechos para durar.
              </p>
              <a className="text-link" href="#contacto">
                Conversemos sobre tu proyecto <span aria-hidden="true">↗</span>
              </a>
              <div className="intro__values">
                <div>
                  <span className="value-icon" aria-hidden="true">
                    ✳
                  </span>
                  <strong>Trato cercano</strong>
                  <span>Te acompañamos de principio a fin.</span>
                </div>
                <div>
                  <span className="value-icon" aria-hidden="true">
                    ⌂
                  </span>
                  <strong>Calidad duradera</strong>
                  <span>Elegimos soluciones hechas para durar.</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="services section-space" id="servicios">
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="eyebrow">
                  <span></span> Lo que hacemos
                </p>
                <h2>
                  Todo lo que tu obra
                  <br />
                  <em>necesita para crecer.</em>
                </h2>
              </div>
              <p>
                Desde la planificación hasta los acabados, ponemos atención y
                experiencia en cada etapa de tu proyecto.
              </p>
            </div>
            <div className="service-grid">
              <article className="service-card">
                <span className="service-card__number">01</span>
                <div className="service-card__icon" aria-hidden="true">
                  ⌂
                </div>
                <h3>Construcción y remodelación</h3>
                <p>
                  Espacios residenciales y comerciales diseñados para acompañar
                  tu vida y tu negocio.
                </p>
                <a
                  href="#contacto"
                  aria-label="Consultar sobre construcción y remodelación"
                >
                  Conoce más <span aria-hidden="true">↗</span>
                </a>
              </article>
              <article className="service-card service-card--featured">
                <span className="service-card__number">02</span>
                <div className="service-card__icon" aria-hidden="true">
                  ⌁
                </div>
                <h3>Techos y estructuras</h3>
                <p>
                  Instalación y renovación de techos para cuidar tu hogar frente
                  a cada temporada.
                </p>
                <a
                  href="#contacto"
                  aria-label="Consultar sobre techos y estructuras"
                >
                  Conoce más <span aria-hidden="true">↗</span>
                </a>
              </article>
              <article className="service-card">
                <span className="service-card__number">03</span>
                <div className="service-card__icon" aria-hidden="true">
                  ▧
                </div>
                <h3>Materiales de construcción</h3>
                <p>
                  Insumos esenciales y asesoría para que avances con los
                  materiales adecuados.
                </p>
                <a
                  href="#materiales"
                  aria-label="Ver materiales de construcción"
                >
                  Conoce más <span aria-hidden="true">↗</span>
                </a>
              </article>
            </div>
          </div>
        </section>

        <section className="materials" id="materiales">
          <div
            className="materials__photo"
            role="img"
            aria-label="Materiales y herramientas para construcción"
          ></div>
          <div className="materials__content">
            <p className="eyebrow eyebrow--light">
              <span></span> Materiales para cada etapa
            </p>
            <h2>
              La calidad de tu obra
              <br />
              empieza en sus <em>materiales.</em>
            </h2>
            <p>
              Te ayudamos a encontrar lo necesario para construir con seguridad,
              cuidar tu presupuesto y lograr un acabado del que te sientas
              orgulloso.
            </p>
            <div className="materials__list">
              <span>
                <i aria-hidden="true">✓</i> Cemento y agregados
              </span>
              <span>
                <i aria-hidden="true">✓</i> Ladrillos y bloques
              </span>
              <span>
                <i aria-hidden="true">✓</i> Coberturas y techos
              </span>
              <span>
                <i aria-hidden="true">✓</i> Acabados y herramientas
              </span>
            </div>
            <a className="button button--accent" href="#contacto">
              Consulta disponibilidad <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>

        <section className="cta section-space">
          <div className="container cta__inner">
            <div>
              <p className="eyebrow eyebrow--light">
                <span></span> Tu proyecto empieza aquí
              </p>
              <h2>
                ¿Listo para construir
                <br />
                algo <em>extraordinario?</em>
              </h2>
            </div>
            <a
              className="button button--light"
              href="mailto:info@nexoratech.global"
            >
              Cuéntanos tu idea <span aria-hidden="true">↗</span>
            </a>
            <span className="cta__shape" aria-hidden="true">
              N
            </span>
          </div>
        </section>

        <section className="contact section-space" id="contacto">
          <div className="container">
            <div className="section-heading section-heading--contact">
              <div>
                <p className="eyebrow">
                  <span></span> Estamos para ayudarte
                </p>
                <h2>
                  Hablemos de tu <em>proyecto.</em>
                </h2>
              </div>
              <p>
                Cuéntanos qué tienes en mente. Será un gusto ayudarte a
                encontrar el próximo paso.
              </p>
            </div>
            <div className="contact-grid">
              <a className="contact-card" href="mailto:info@nexoratech.global">
                <span className="contact-card__icon" aria-hidden="true">
                  ✉
                </span>
                <span className="contact-card__label">Escríbenos</span>
                <strong>info@nexoratech.global</strong>
                <span className="contact-card__arrow" aria-hidden="true">
                  ↗
                </span>
              </a>
              <div className="contact-card">
                <span className="contact-card__icon" aria-hidden="true">
                  ☎
                </span>
                <span className="contact-card__label">Llámanos</span>
                <strong>(+51) 994 748 870</strong>
              </div>
              <div className="contact-card contact-card--address">
                <span className="contact-card__icon" aria-hidden="true">
                  ⌖
                </span>
                <span className="contact-card__label">Visítanos</span>
                <strong>
                  Av. Mariategui 1030,
                  <br />
                  Jesús María
                </strong>
                <span className="contact-card__arrow" aria-hidden="true">
                  ⌖
                </span>
              </div>
              <a
                className="contact-card"
                href="https://leonxivminera.com"
                target="_blank"
                rel="noreferrer"
              >
                <span className="contact-card__icon" aria-hidden="true">
                  ↗
                </span>
                <span className="contact-card__label">
                  Redes sociales y sitio web
                </span>
                <strong>https://leonxivminera.com</strong>
                <span className="contact-card__arrow" aria-hidden="true">
                  ↗
                </span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container site-footer__main">
          <a
            className="brand brand--footer"
            href="#inicio"
            aria-label="NEXORA TECH, volver al inicio"
          >
            <img src="/logo-nexora.jpeg" alt="NEXORA TECH" />
          </a>
          <p>
            Construimos confianza.
            <br />
            Hacemos crecer tus ideas.
          </p>
          <a
            className="site-footer__email"
            href="mailto:info@nexoratech.global"
          >
            info@nexoratech.global <span aria-hidden="true">↗</span>
          </a>
          <a
            className="site-footer__social"
            href="https://leonxivminera.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Visita leonxivminera.com"
          >
            Redes y web <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="container site-footer__bottom">
          <span>
            © {new Date().getFullYear()} NEXORA TECH · Inversiones y Negocios
            CYA SAC
          </span>
          <a href="#inicio">Volver arriba ↑</a>
        </div>
      </footer>
    </>
  );
}
