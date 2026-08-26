import './globals.css';

import type { Metadata } from 'next';
import { IBM_Plex_Sans, IBM_Plex_Serif } from 'next/font/google';

import { Sidebar } from '@/shared/components/layout';

const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ['latin'],
  variable: '--font-ibm-plex-serif',
  weight: ['100', '200', '300', '400', '500', '600', '700'],
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  variable: '--font-ibm-plex-sans',
  weight: ['100', '200', '300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  description: 'Portfólio de Isabela, Front-end Developer.',
  title: 'Isabela | Front-end Developer',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      className={`${ibmPlexSerif.variable} ${ibmPlexSans.variable}`}
      lang="pt-BR"
    >
      <body>
        <div className="grid min-h-screen lg:grid-cols-[256px_1fr]">
          <Sidebar />

          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
