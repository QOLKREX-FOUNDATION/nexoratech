"use client";

import { useEffect, useState } from "react";
import { ContactIcon } from "./components/icons";
import { ProductShowcase, WhatsAppFloat } from "./components/products";

const slides = [
  {
    className: "hero-slide--team",
    eyebrow: "Barreras anti inundaciones",
    title: (
      <>
        Actuemos ahora
        <br />y no esperemos <em>mañana.</em>
      </>
    ),
    description:
      "Soluciones confiables para prevenir y proteger lo que más importa.",
    primaryText: "Conoce nuestros servicios",
    primaryHref: "#servicios",
    secondaryText: "Conócenos",
    secondaryHref: "#nosotros",
    caption: "Equipo y experiencia en cada obra",
  },
  {
    className: "hero-slide--roof",
    eyebrow: "Geobolsas",
    title: (
      <>
        Una buena barrera.
        <br />
        Muchos hogares <em>protegidos.</em>
      </>
    ),
    description:
      "Trabajemos juntos para prevenir, hasta la última zona Vulnerable.",
    primaryText: "Hagamos tu proyecto",
    primaryHref: "#servicios",
    secondaryText: "Contáctanos",
    secondaryHref: "#contacto",
    caption: "Equipo instalando tejas en una vivienda",
  },
  {
    className: "hero-slide--materials",
    eyebrow: "Mochilas de emergencia",
    title: (
      <>
        La decisón correcta
        <br />
        para una gran <em>azaña.</em>
      </>
    ),
    description: "Pueblo preparado valen por mil vidas.",
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isPaused) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 6500);

    return () => window.clearInterval(timer);
  }, [isPaused]);

  useEffect(() => {
    const revealElements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );

    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    ) {
      revealElements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    document.documentElement.classList.add("motion-ready");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -35px 0px" },
    );

    revealElements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("motion-ready");
    };
  }, []);

  function changeSlide(direction: number) {
    setActiveSlide(
      (current) => (current + direction + slides.length) % slides.length,
    );
  }

  function closeMenu() {
    setIsMenuOpen(false);
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
          <nav
            className={`main-nav${isMenuOpen ? " is-open" : ""}`}
            id="main-navigation"
            aria-label="Navegación principal"
          >
            <a
              className="main-nav__link is-active"
              href="#inicio"
              onClick={closeMenu}
            >
              Inicio
            </a>
            <a className="main-nav__link" href="#nosotros" onClick={closeMenu}>
              Nosotros
            </a>
            <a className="main-nav__link" href="#productos" onClick={closeMenu}>
              Productos
            </a>
            <a
              className="main-nav__link"
              href="#kit-dengue"
              onClick={closeMenu}
            >
              Kit Anti Dengue
            </a>
            <a
              className="button button--nav"
              href="#contacto"
              onClick={closeMenu}
            >
              Hablemos <span aria-hidden="true">↗</span>
            </a>
            {/* Aviso temporal de construcción: se conserva para poder reactivarlo.
            <span className="construction-badge">
              <span aria-hidden="true"></span> Web en construcción
            </span>
            */}
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
                  <div className="hero-slide__actions">
                    <a
                      className="button button--accent"
                      href={slide.primaryHref}
                    >
                      {slide.primaryText} <span aria-hidden="true">↗</span>
                    </a>
                    <a className="hero__text-link" href={slide.secondaryHref}>
                      {slide.secondaryText} <span aria-hidden="true">→</span>
                    </a>
                  </div>
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

        {/* Vista temporal de construcción; se conserva para poder reactivarla.
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
        */}

        <section
          className="trust-strip"
          aria-label="Nuestro compromiso"
          data-reveal
        >
          <div className="container trust-strip__inner">
            <p>
              <span className="trust-strip__mark">✳</span> Prevención que
              inspira confianza
            </p>
            <span className="trust-strip__divider"></span>
            <p>
              Personas primero <span className="trust-strip__dot">·</span>{" "}
              Prevención siempre <span className="trust-strip__dot">·</span>{" "}
              Compromiso en cada proyecto
            </p>
          </div>
        </section>

        <section className="intro section-space" id="nosotros" data-reveal>
          <div className="container intro__grid">
            <div className="intro__visual">
              <img
                src="/products/barrera-antiinundacion.jpeg"
                alt="Barrera modular de contención para protección ante inundaciones"
                loading="lazy"
              />
              <div className="intro__badge">
                <span>Prevenimos</span>
                <strong>con soluciones</strong>
              </div>
              <div className="intro__visual-label">
                <span>01</span> Protección para cada proyecto
              </div>
            </div>
            <div className="intro__copy">
              <p className="eyebrow">
                <span></span> Equipamiento para gestión de riesgos
              </p>
              <h2>
                Ideas firmes.
                <br />
                <em>Protección que perdura.</em>
              </h2>
              <p className="intro__lead">
                En NEXORA TECH acercamos soluciones y equipos para la prevención
                de riesgos, la protección de infraestructura y la continuidad de
                tus operaciones.
              </p>
              <p className="intro__text">
                Somos Inversiones y Negocios CYA SAC. Te acompañamos a evaluar
                cada necesidad y encontrar el equipamiento adecuado para tu
                proyecto.
              </p>
              <a className="text-link" href="#contacto">
                Conversemos sobre tu proyecto <span aria-hidden="true">↗</span>
              </a>
              <div className="intro__values">
                <div>
                  <span className="value-icon" aria-hidden="true">
                    ✳
                  </span>
                  <strong>Asesoría cercana</strong>
                  <span>Te orientamos según tus necesidades.</span>
                </div>
                <div>
                  <span className="value-icon" aria-hidden="true">
                    ⌂
                  </span>
                  <strong>Soluciones confiables</strong>
                  <span>Equipos seleccionados para cada desafío.</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ProductShowcase />

        <section className="cta section-space" data-reveal>
          <div className="container cta__inner">
            <div>
              <p className="eyebrow eyebrow--light">
                <span></span> Tu proyecto empieza aquí
              </p>
              <h2>
                ¿Listo para proteger
                <br />
                lo que más <em>importa?</em>
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

        <section className="contact section-space" id="contacto" data-reveal>
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
                  <ContactIcon name="mail" />
                </span>
                <span className="contact-card__label">Escríbenos</span>
                <strong>info@nexoratech.global</strong>
                <span className="contact-card__arrow" aria-hidden="true">
                  ↗
                </span>
              </a>
              <a className="contact-card" href="tel:+51994748870">
                <span className="contact-card__icon" aria-hidden="true">
                  <ContactIcon name="phone" />
                </span>
                <span className="contact-card__label">Llámanos</span>
                <strong>(+51) 994 748 870</strong>
                <span className="contact-card__arrow" aria-hidden="true">
                  ↗
                </span>
              </a>
              <div className="contact-card contact-card--address">
                <span className="contact-card__icon" aria-hidden="true">
                  <ContactIcon name="pin" />
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
                href="https://nexoratech.global"
                target="_blank"
                rel="noreferrer"
              >
                <span className="contact-card__icon" aria-hidden="true">
                  <ContactIcon name="globe" />
                </span>
                <span className="contact-card__label">Sitio web</span>
                <strong>nexoratech.global</strong>
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
          <div className="site-footer__brand">
            <a
              className="brand brand--footer"
              href="#inicio"
              aria-label="NEXORA TECH, volver al inicio"
            >
              <img src="/logo-nexora2.jpeg" alt="NEXORA TECH" />
            </a>
            <p>
              Soluciones para gestionar riesgos
              <br />y proteger lo que importa.
            </p>
          </div>
          <h2>
            <em> Únicos en el Perú con stock</em>
          </h2>
          <div
            className="site-footer__links"
            aria-label="Información de contacto"
          >
            <a href="mailto:info@nexoratech.global">
              <ContactIcon name="mail" />
              <span>info@nexoratech.global</span>
            </a>
            <a href="tel:+51994748870">
              <ContactIcon name="phone" />
              <span>(+51) 994 748 870</span>
            </a>
            <a
              href="https://maps.google.com/?q=Av.+Mariategui+1030,+Jes%C3%BAs+Mar%C3%ADa,+Lima,+Per%C3%BA"
              target="_blank"
              rel="noreferrer"
            >
              <ContactIcon name="pin" />
              <span>Av. Mariategui 1030, Jesús María</span>
            </a>
            <a
              href="https://nexoratech.global"
              target="_blank"
              rel="noreferrer"
            >
              <ContactIcon name="globe" />
              <span>nexoratech.global</span>
            </a>
          </div>
        </div>
        <div className="container site-footer__bottom">
          <span>
            © {new Date().getFullYear()} NEXORA TECH · Qolkrex Foundation
          </span>
          <a href="#inicio">Volver arriba ↑</a>
        </div>
      </footer>
      <WhatsAppFloat />
    </>
  );
}
