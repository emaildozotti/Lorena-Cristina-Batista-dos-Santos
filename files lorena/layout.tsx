import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  Playfair_Display,
  DM_Sans,
} from "next/font/google";
import "./globals.css";

/* ─── Fontes otimizadas via next/font ─── */
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-heading",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dra. Lorena Cristina Santos — Terapia Neuroemocional",
  description:
    "Psicóloga clínica especializada em terapia neuroemocional. Agende sua consulta.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${cormorant.variable} ${playfair.variable} ${dmSans.variable}`}
    >
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
