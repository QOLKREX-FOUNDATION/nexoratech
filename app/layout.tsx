import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://nexoratech.global"),
  title: "NEXORA TECH | Construcción, techos y materiales en Lima",
  description:
    "NEXORA TECH ofrece construcción y remodelación, techos, estructuras y materiales en Lima, Perú. Construimos contigo con calidad y confianza.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_PE",
    url: "https://nexoratech.global/",
    siteName: "NEXORA TECH",
    title: "NEXORA TECH | Construcción, techos y materiales en Lima",
    description:
      "Construcción y remodelación, techos, estructuras y materiales en Lima, Perú. Construimos contigo con calidad y confianza.",
    images: [
      {
        url: "/logo-nexora.jpeg",
        alt: "NEXORA TECH — Inversiones y Negocios CYA SAC",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "NEXORA TECH | Construcción, techos y materiales en Lima",
    description:
      "Construcción y remodelación, techos, estructuras y materiales en Lima, Perú.",
    images: ["/logo-nexora.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#102d50",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Manrope:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HomeAndConstructionBusiness",
              "@id": "https://nexoratech.global/#business",
              name: "NEXORA TECH",
              legalName: "Inversiones y Negocios CYA SAC",
              url: "https://nexoratech.global/",
              logo: "https://nexoratech.global/logo-nexora.jpeg",
              image: "https://nexoratech.global/logo-nexora.jpeg",
              description:
                "Servicios de construcción y remodelación, techos, estructuras y materiales de construcción en Lima, Perú.",
              telephone: "+51994748870",
              email: "info@nexoratech.global",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Av. Mariategui 1030",
                addressLocality: "Jesús María",
                addressRegion: "Lima",
                addressCountry: "PE",
              },
              areaServed: {
                "@type": "City",
                name: "Lima",
              },
              availableLanguage: "Spanish",
            }).replace(/</g, "\\u003c"),
          }}
        />
        {children}
      </body>
    </html>
  );
}
