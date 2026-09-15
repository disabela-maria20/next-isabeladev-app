import { FaGithub, FaLinkedin } from 'react-icons/fa';
import {
  HiOutlineDownload,
  HiOutlineLocationMarker,
  HiOutlineMail,
  HiOutlinePhone,
} from 'react-icons/hi';

import { Button } from '@/shared/components';

const contactInfo = [
  {
    href: 'tel:+5511955905953',
    icon: HiOutlinePhone,
    label: '(11) 95590-5953',
  },
  {
    href: 'mailto:dev@isabelamribeiro.com.br',
    icon: HiOutlineMail,
    label: 'dev@isabelamribeiro.com.br',
  },
];

const socialLinks = [
  {
    href: 'https://github.com/disabela-maria20',
    icon: FaGithub,
    label: 'GitHub',
  },
  {
    href: 'https://linkedin.com/in/isabela-maria-ribeiro',
    icon: FaLinkedin,
    label: 'LinkedIn',
  },
];

export default function Intro() {
  return (
    <section>
      <p className="font-sans text-sm font-medium text-black/60 italic">
        Prazer em te conhecer!
      </p>

      <h1 className="mt-2 font-sans text-5xl leading-[0.9] font-light tracking-[-0.04em] text-black uppercase sm:text-6xl">
        Sobre <span className="font-extrabold">mim</span>
      </h1>
      <section className="mx-auto grid max-w-7xl gap-14 px-6 py-20 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-20 lg:px-16">
        {/* FOTO */}
        <div className="relative mx-auto w-full max-w-xs">
          <div
            aria-hidden="true"
            className="absolute -top-6 -right-6 h-28 w-28 rounded-full bg-orange-400/70 blur-3xl"
          />

          <div
            aria-hidden="true"
            className="absolute -bottom-6 -left-6 h-32 w-32 rounded-full bg-purple-500/60 blur-3xl"
          />

          <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 shadow-xl">
            {/* TODO: troque pelo componente Image do next/image com a sua foto quando tiver uma (ex.: public/img/sobre.png) */}
            <span className="font-sans text-7xl font-extrabold text-white/90">
              IR
            </span>
          </div>

          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black px-5 py-2 text-xs font-medium tracking-[0.1em] text-white uppercase shadow-lg">
            5+ anos de experiência
          </div>
        </div>

        {/* CONTEÚDO */}
        <div>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-black/70">
            <span className="inline-flex items-center gap-2">
              <HiOutlineLocationMarker className="text-lg" />
              São Paulo, Brasil
            </span>

            <span className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-black/30" />
              Desenvolvedora Front-End Pleno
            </span>

            {contactInfo.map(({ href, icon: Icon, label }) => (
              <a
                key={href}
                href={href}
                className="inline-flex items-center gap-2 transition-colors hover:text-black"
              >
                <Icon className="text-lg" />
                {label}
              </a>
            ))}
          </div>

          <div className="mt-6 flex items-center gap-4">
            {socialLinks.map(({ href, icon: Icon, label }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-black/15 text-black/70 transition-colors hover:border-black/40 hover:text-black"
              >
                <Icon className="text-base" />
              </a>
            ))}
          </div>

          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            <div>
              <p className="font-sans text-xs tracking-[0.15em] text-black/40 uppercase">
                Stack principal
              </p>

              <p className="mt-2 text-sm text-black/70">
                React.js, Next.js, TypeScript e Vue.js.
              </p>
            </div>

            <div>
              <p className="font-sans text-xs tracking-[0.15em] text-black/40 uppercase">
                Como eu trabalho
              </p>

              <p className="mt-2 text-sm text-black/70">
                Componentização de interfaces, arquitetura de micro frontends e
                integração com APIs REST, sempre com foco em qualidade.
              </p>
            </div>
          </div>

          <blockquote className="mt-8 rounded-2xl bg-black px-6 py-5 text-sm text-white/80 italic">
            &ldquo;Desenvolvedora Front-End Pleno com 5 anos de experiência em
            React.js, Next.js e TypeScript, atuando com arquitetura de micro
            frontends e evolução de aplicações para o setor corporativo.&rdquo;
          </blockquote>

          <div className="mt-8">
            <Button
              href="/cv.pdf"
              variant="secondary"
              rightIcon={<HiOutlineDownload />}
              gtmEvent={{ cta_location: 'about_intro', event: 'cv_download' }}
            >
              Baixar currículo
            </Button>
          </div>
        </div>
      </section>
    </section>
  );
}
