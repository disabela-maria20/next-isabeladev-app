{
  /* eslint-disable @next/next/no-img-element */
}

import Link from 'next/link';

import { Button } from '@/shared/components';

export default function Hero() {
  return (
    <section className="mx-auto grid min-h-screen max-w-7xl content-center items-center gap-14 px-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20 lg:px-16">
      <div className="relative">
        <div
          aria-hidden="true"
          className="relative before:absolute before:-top-10 before:-left-10 before:z-0 before:h-40 before:w-40 before:bg-[url('/img/vector.png')] before:bg-contain before:bg-center before:bg-no-repeat before:content-['']"
        >
          <h1 className="relative z-10 max-w-5xl font-sans text-[4.5rem] leading-[0.82] font-light tracking-[-0.06em] text-black uppercase sm:text-[6.5rem] md:text-7xl">
            <span className="block">Meu nome é</span>

            <span className="block">
              <span className="font-extrabold">Isabela M.</span>
            </span>

            <span className="block font-extrabold">Ribeiro...</span>
          </h1>

          <div className="relative z-10 mt-8 max-w-md sm:mt-10">
            <p className="font-sans text-sm font-medium text-black italic sm:text-base">
              Front-end Developer de{' '}
              <strong className="font-extrabold italic">
                São Paulo, Brasil
              </strong>
            </p>
          </div>

          <div className="relative z-10 mt-8 flex flex-wrap items-center gap-3">
            <Button>
              <span>Entre em contato</span>
            </Button>

            <Link
              href="/sobre"
              className="rounded-full border border-black/15 px-6 py-3 text-sm font-medium text-black transition-all duration-300 hover:-translate-y-1 hover:border-black/40"
            >
              Sobre mim
            </Link>
          </div>

          {/* Stack */}
          <div className="relative z-10 mt-16 flex flex-wrap gap-x-6 gap-y-2 text-xs tracking-[0.15em] text-black/40 uppercase">
            <span>React</span>
            <span>Next.js</span>
            <span>TypeScript</span>
            <span>Tailwind CSS</span>
          </div>
        </div>
      </div>

      {/* IMAGE */}
      <div className="relative mx-auto w-full max-w-md lg:max-w-lg">
        {/* Elementos decorativos */}
        <div
          aria-hidden="true"
          className="absolute -top-8 -right-8 h-32 w-32 rounded-full bg-orange-400/70 blur-3xl"
        />

        <div
          aria-hidden="true"
          className="absolute -bottom-8 -left-8 h-40 w-40 rounded-full bg-purple-500/60 blur-3xl"
        />

        {/* Imagem */}
        <div className="relative overflow-hidden rounded-[2.5rem]">
          <img
            src="/img/hero.png"
            alt="Isabela Ribeiro"
            className="block w-full"
          />
        </div>
      </div>
    </section>
  );
}
