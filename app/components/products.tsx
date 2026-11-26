"use client";

import { useEffect, useRef, useState, type MouseEvent } from "react";
import { WhatsAppIcon } from "./icons";

type Product = {
  name: string;
  category: string;
  description: string;
  image: string;
  imageHover?: string;
  imageAlt: string;
  brandLogo?: {
    src: string;
    alt: string;
  };
  imageFit?: "contain" | "cover";
  specifications: string[];
};

const whatsappNumber = "51994748870";

const standardKitProduct: Product = {
  name: "Kit Antidengue",
  category: "Prevención sanitaria",
  description:
    "Elementos de prevención y protección para reducir riesgos de transmisión del dengue.",
  image: "/products/kitantidengue.jpeg",
  imageHover: "/products/kitantidengue-sinfondo.jpeg",
  imageAlt: "Kit Antidengue con mochila, mosquitero, repelente y suministros",
  imageFit: "contain",
  specifications: [
    "Mosquitero para cama y malla protectora para tanques.",
    "Repelente de insectos, sales de rehidratación oral y paracetamol.",
    "Puede incluir malathion para control vectorial, según presentación.",
    "Contenido sujeto a la ficha del proveedor y a las recomendaciones sanitarias vigentes.",
  ],
};

const riskProducts: Product[] = [
  {
    name: "Barrera NEX",
    brandLogo: { src: "/logos/logo-nexora.jpeg", alt: "NEXORA TECH" },
    category: "Protección contra inundaciones",
    description:
      "Barrera modular para ayudar a proteger accesos y zonas expuestas ante aniegos.",
    image: "/products/barrera-antiinundacion.jpeg",
    imageHover: "/products/barrera-antiinundacion-sinfondo.jpeg",
    imageAlt: "Barrera modular NEX para protección contra inundaciones",
    imageFit: "cover",
    specifications: [
      "Alto: 60 cm",
      "Ancho: 95 cm",
      "Profundidad: 75 cm",
      "La cantidad y disposición se definen según el espacio a proteger.",
    ],
  },
  {
    name: "Aqua Móvil",
    brandLogo: { src: "/logos/logo-aquamovil.jpeg", alt: "Aqua Móvil" },
    category: "Control de inundaciones",
    description:
      "Solución móvil para desplegar barreras de contención en puntos críticos.",
    image: "/products/aquamovil.jpeg",
    imageHover: "/products/aquamovil-sinfondo.PNG",
    imageAlt: "Barrera Aqua Móvil para contención de agua",
    imageFit: "contain",
    specifications: [
      "Sistema de protección temporal y modular.",
      "Diseñado para facilitar el despliegue en zonas evaluadas.",
      "Configuración y requerimientos se confirman para cada proyecto.",
    ],
  },
  {
    name: "Blocktech",
    brandLogo: { src: "/logos/logo-blocktech.jpeg", alt: "Blocktech" },
    category: "Sistemas de contención",
    description:
      "Bloques modulares para configurar barreras de contención de acuerdo con el terreno.",
    image: "/products/blocktech.jpeg",
    imageHover: "/products/blocktech-sinfondo.PNG",
    imageAlt: "Sistema Blocktech de bloques modulares de contención",
    imageFit: "contain",
    specifications: [
      "Configuración modular según el perímetro requerido.",
      "Aplicación definida tras revisar el terreno y el objetivo de protección.",
      "Cantidades, disponibilidad y montaje se confirman al cotizar.",
    ],
  },
  {
    ...standardKitProduct,
    brandLogo: {
      src: "/logos/logo-kitantidengue.jpeg",
      alt: "Kit Antidengue",
    },
  },
  {
    name: "Geobolsas",
    brandLogo: { src: "/logos/logo-geobolsas.jpeg", alt: "Geobolsas" },
    category: "Protección contra inundaciones",
    description:
      "Geobolsas para formar barreras de contención según la evaluación del terreno.",
    image: "/products/geobolsas.jpeg",
    imageHover: "/products/geobolsa-sinfondo.jpeg",
    imageAlt: "Geobolsas utilizadas como barrera de contención",
    imageFit: "cover",
    specifications: [
      "Formato y cantidad según las condiciones del terreno.",
      "Aplicación y despliegue se definen para cada proyecto.",
      "Solicita asesoría para elegir la configuración adecuada.",
    ],
  },
];

const familyKitProduct: Product = {
  name: "Kit Antidengue Familiar",
  category: "Prevención sanitaria",
  description:
    "Una presentación para apoyar medidas de prevención en hogares y comunidades.",
  image: "/products/kitantidenguefamiliar.jpeg",
  imageHover: "/products/kitantidenguefamiliar-sinfondo.jpeg",
  imageAlt:
    "Ilustración del Kit Antidengue Familiar con mochila, mosquitero y suministros",
  imageFit: "contain",
  specifications: [
    "Mosquitero para cama y malla protectora para tanques.",
    "Repelente de insectos, sales de rehidratación oral y paracetamol.",
    "Puede incluir malathion para control vectorial, según presentación.",
    "Contenido sujeto a la ficha del proveedor y a las recomendaciones sanitarias vigentes.",
  ],
};

const technologyProducts: Product[] = [
  {
    name: "Riken Keiki GX-3R",
    category: "Detección de gases",
    description:
      "Detector portátil para apoyar la supervisión de gases en entornos de trabajo.",
    image: "/products/RikenKeikiGX-3R.jpeg",
    imageHover: "/products/RikenKeikiGX-3R-sinfondo.jpeg",
    imageAlt: "Ilustración de un detector portátil de gases",
    imageFit: "contain",
    specifications: [
      "Formato portátil para uso en campo.",
      "Los gases monitoreados dependen de la configuración del equipo.",
      "Sensores, calibración y disponibilidad se validan antes de la compra.",
    ],
  },
  {
    name: "Keyence LJ-X8000",
    category: "Inspección y medición",
    description:
      "Sensor de perfil láser para tareas de inspección y medición industrial.",
    image: "/products/KeyenceLJ-X8000.jpeg",
    imageHover: "/products/KeyenceLJ-X8000-sinfondo.jpeg",
    imageAlt: "Ilustración de un sensor láser de perfil industrial",
    imageFit: "contain",
    specifications: [
      "Medición de perfil sin contacto.",
      "La configuración depende de la aplicación y del sistema de control.",
      "Modelo, integración y disponibilidad se confirman al cotizar.",
    ],
  },
  {
    name: "Tesla Powerwall 3",
    category: "Respaldo energético",
    description:
      "Sistema de almacenamiento de energía para proyectos que requieren respaldo.",
    image: "/products/TeslaPowerwall3.jpeg",
    imageHover: "/products/TeslaPowerwall3-sinfondo.jpeg",
    imageAlt:
      "Ilustración de un sistema residencial de almacenamiento energético",
    imageFit: "contain",
    specifications: [
      "Sistema de almacenamiento energético residencial.",
      "La instalación requiere evaluación eléctrica y compatibilidad del proyecto.",
      "Disponibilidad, configuración y condiciones se confirman al cotizar.",
    ],
  },
];

function ProductCard({
  product,
  onDetails,
}: {
  product: Product;
  onDetails: (product: Product) => void;
}) {
  return (
    <div className="product-card-group" data-reveal>
      {product.brandLogo && (
        <div className="product-card__brand">
          <img
            src={product.brandLogo.src}
            alt={product.brandLogo.alt}
            loading="lazy"
          />
        </div>
      )}
      <article className="product-card">
        <div className="product-card__image">
          <img
            src={product.image}
            alt={product.imageAlt}
            className={`is-default${product.imageFit === "cover" ? " is-cover" : ""}`}
            loading="lazy"
          />
          {product.imageHover && (
            <img
              src={product.imageHover}
              alt=""
              aria-hidden="true"
              className="is-hover"
              loading="lazy"
            />
          )}
        </div>
        <div className="product-card__content">
          <h3>{product.name}</h3>
          <p className="product-card__category">{product.category}</p>
          <p className="product-card__description">{product.description}</p>
          <button
            className="product-card__details"
            type="button"
            onClick={() => onDetails(product)}
            aria-label={`Ver detalles de ${product.name}`}
          >
            <svg viewBox="0 0 16 16" aria-hidden="true">
              <circle cx="6.8" cy="6.8" r="4.3" />
              <path d="m10 10 3.2 3.2" />
            </svg>
            Ver detalles
          </button>
        </div>
      </article>
    </div>
  );
}

function whatsappHref(productName: string) {
  const message = `Hola, quisiera información sobre ${productName}.`;
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function ProductShowcase() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (selectedProduct && dialogRef.current && !dialogRef.current.open) {
      dialogRef.current.showModal();
    }
  }, [selectedProduct]);

  function closeDetails() {
    dialogRef.current?.close();
    setSelectedProduct(null);
  }

  function closeOnBackdrop(event: MouseEvent<HTMLDialogElement>) {
    if (event.target === event.currentTarget) {
      closeDetails();
    }
  }

  return (
    <>
      <section className="products section-space" id="servicios" data-reveal>
        <div className="container">
          <div className="section-heading" id="productos">
            <div>
              <p className="eyebrow">
                <span></span> Equipamiento para proteger lo que importa
              </p>
              <h2>
                Gestión de riesgos,
                <br />
                <em>con soluciones concretas.</em>
              </h2>
            </div>
            <p>
              Explora equipos para prevención, protección de infraestructura y
              respuesta ante riesgos. Te ayudamos a elegir según las necesidades
              de tu proyecto.
            </p>
          </div>

          <div className="product-grid">
            {riskProducts.map((product) => (
              <ProductCard
                key={product.name}
                product={product}
                onDetails={setSelectedProduct}
              />
            ))}
          </div>
        </div>
      </section>

      <section
        className="kit-feature kit-feature--standard"
        id="kit-dengue"
        data-reveal
      >
        <div className="kit-feature__visual">
          <img
            src={standardKitProduct.image}
            alt={standardKitProduct.imageAlt}
            className="is-default"
            loading="lazy"
          />
          <img
            src={standardKitProduct.imageHover}
            alt=""
            aria-hidden="true"
            className="is-hover"
            loading="lazy"
          />
        </div>
        <div
          className="kit-feature__content kit-feature__content--dark"
          id="materiales"
        >
          <p className="eyebrow eyebrow--light">
            <span></span> Prevención y protección
          </p>
          <h2>
            KIT ANTIDENGUE
            <br />
            <em>materiales.</em>
          </h2>
          <p>
            Una presentación con artículos de protección personal y del hogar
            para acompañar las medidas de prevención contra el dengue.
          </p>
          <ul className="kit-feature__list">
            <li>Mosquitero para cama</li>
            <li>Malla protectora para tanques</li>
            <li>Repelente de insectos</li>
            <li>Sales de rehidratación oral</li>
            <li>Paracetamol</li>
            <li>Malathion, según presentación</li>
          </ul>
          <button
            className="button button--accent"
            type="button"
            onClick={() => setSelectedProduct(standardKitProduct)}
          >
            Consulta disponibilidad <span aria-hidden="true">↗</span>
          </button>
          <p className="kit-feature__disclaimer">
            El contenido puede variar según la presentación. Los productos
            sanitarios deben usarse conforme a su etiqueta y a las
            recomendaciones de las autoridades competentes.
          </p>
        </div>
      </section>

      <section
        className="kit-feature kit-feature--family"
        id="kit-antidengue-familiar"
        data-reveal
      >
        <div className="kit-feature__content">
          <p className="eyebrow">
            <span></span> Somos NEXORA TECH
          </p>
          <h2>¿Qué es el Kit Antidengue?</h2>
          <p className="kit-feature__subtitle">El Kit Antidengue Familiar</p>
          <p>
            Una presentación pensada para apoyar la prevención en el hogar y la
            comunidad. Incluye artículos como mosquitero para cama, malla para
            tanques, repelente y productos de uso sanitario.
          </p>
          <ul className="kit-feature__benefits">
            <li>Protección para la familia</li>
            <li>Apoyo para reducir criaderos de zancudos</li>
            <li>Para hogares, escuelas y comunidades</li>
          </ul>
          <button
            className="button button--accent"
            type="button"
            onClick={() => setSelectedProduct(familyKitProduct)}
          >
            Ver detalles del kit familiar <span aria-hidden="true">↗</span>
          </button>
          <p className="kit-feature__disclaimer">
            El contenido exacto se confirma según la presentación disponible.
            Sigue siempre las indicaciones del etiquetado y de las autoridades
            sanitarias.
          </p>
        </div>
        <div className="kit-feature__visual">
          <img
            src={familyKitProduct.image}
            alt={familyKitProduct.imageAlt}
            className="is-default"
            loading="lazy"
          />
          <img
            src={familyKitProduct.imageHover}
            alt=""
            aria-hidden="true"
            className="is-hover"
            loading="lazy"
          />
        </div>
      </section>

      <section
        className="technology-section section-space"
        aria-labelledby="technology-title"
        data-reveal
      >
        <div className="container">
          <div className="technology-showcase">
            <div className="product-grid product-grid--technology">
              {technologyProducts.map((product) => (
                <ProductCard
                  key={product.name}
                  product={product}
                  onDetails={setSelectedProduct}
                />
              ))}
            </div>
            <div className="section-heading technology-section__heading">
              <div>
                <p className="eyebrow">
                  <span></span> Tecnología para prevención y continuidad
                </p>
                <h2 id="technology-title">
                  Equipos especializados
                  <br />
                  <em>para cada desafío.</em>
                </h2>
              </div>
              <p>
                Soluciones de monitoreo, inspección y respaldo energético.
                Confirmamos modelos, compatibilidad y disponibilidad para cada
                requerimiento.
              </p>
            </div>
          </div>
        </div>
      </section>

      <dialog
        className="product-dialog"
        ref={dialogRef}
        aria-labelledby="product-dialog-title"
        onClose={() => setSelectedProduct(null)}
        onClick={closeOnBackdrop}
        onKeyDown={(event) => {
          if (event.key === "Escape") {
            event.preventDefault();
            closeDetails();
          }
        }}
      >
        {selectedProduct && (
          <div className="product-dialog__inner">
            <button
              className="product-dialog__close"
              type="button"
              onClick={closeDetails}
              aria-label="Cerrar detalles del producto"
            >
              <span aria-hidden="true">×</span>
            </button>
            <div className="product-dialog__image">
              <img src={selectedProduct.image} alt={selectedProduct.imageAlt} />
            </div>
            <div className="product-dialog__content">
              <p className="eyebrow">
                <span></span> {selectedProduct.category}
              </p>
              <h2 id="product-dialog-title">{selectedProduct.name}</h2>
              <p className="product-dialog__description">
                {selectedProduct.description}
              </p>
              <h3>Especificaciones</h3>
              <ul>
                {selectedProduct.specifications.map((specification) => (
                  <li key={specification}>{specification}</li>
                ))}
              </ul>
              <p className="product-dialog__note">
                Las fichas técnicas, condiciones y disponibilidad vigentes se
                confirman al cotizar.
              </p>
              <a
                className="button button--whatsapp"
                href={whatsappHref(selectedProduct.name)}
                target="_blank"
                rel="noreferrer"
              >
                <WhatsAppIcon className="whatsapp-icon" />
                WhatsApp +51 994 748 870
              </a>
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}

export function WhatsAppFloat() {
  return (
    <a
      className="whatsapp-float"
      href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hola, quisiera información sobre sus productos.")}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Escríbenos por WhatsApp al +51 994 748 870"
    >
      <WhatsAppIcon className="whatsapp-icon" />
      <span>WhatsApp</span>
    </a>
  );
}
