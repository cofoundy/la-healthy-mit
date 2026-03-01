import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "La Healthy Mit — Carnes de Crianza Libre",
  description:
    "Pollos, gallinas, patos y cuyes de crianza libre. Alimentación natural, sin hormonas. Haz tu pedido por WhatsApp.",
  keywords: [
    "crianza libre",
    "pollo orgánico",
    "gallina de campo",
    "cuy",
    "pato",
    "carnes saludables",
    "La Healthy Mit",
  ],
  openGraph: {
    title: "La Healthy Mit — Carnes de Crianza Libre",
    description:
      "Pollos, gallinas, patos y cuyes de crianza libre. Alimentación natural, sin hormonas.",
    type: "website",
    locale: "es_PE",
  },
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
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=Playfair+Display:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
