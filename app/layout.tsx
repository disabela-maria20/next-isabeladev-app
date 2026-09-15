import './globals.css';

import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';
import type { Metadata } from 'next';
import { IBM_Plex_Sans, IBM_Plex_Serif } from 'next/font/google';

import { Sidebar } from '@/shared/components/layout';

const GTM_ID = 'GTM-MHW6F6GN';
const GA_MEASUREMENT_ID = 'G-RRHGHE8313';

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
  verification: {
    google: 'qP1L-UbCctnjg6IZnNsVLmJyezYj3hrsBnuQZD6aREE',
  },
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      className={`${ibmPlexSerif.variable} ${ibmPlexSans.variable}`}
      lang="pt-BR"
    >
      <GoogleTagManager gtmId={GTM_ID} />

      <body className="overflow-hidden">
        <div className="grid min-h-screen lg:grid-cols-[256px_1fr]">
          <Sidebar />
          {/* Background decoration */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-pink-500/10 blur-3xl"
          />
          <main className="relative m-auto h-full w-full">{children}</main>
        </div>
      </body>

      <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />
    </html>
  );
}
