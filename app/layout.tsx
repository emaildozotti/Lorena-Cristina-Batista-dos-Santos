import type {Metadata} from 'next';
import { Inter, Cormorant_Garamond, Montserrat } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-serif',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Lorena Cristina Santos | Terapia Neuroemocional',
  description: 'Reconstrua sua identidade através da Neurociência e Empatia.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${cormorant.variable} ${montserrat.variable} scroll-smooth`}>
      <body suppressHydrationWarning className="bg-[#F9F7F2] text-[#2C2C2C] antialiased selection:bg-[#D4A373]/30">
        {children}
      </body>
    </html>
  );
}
