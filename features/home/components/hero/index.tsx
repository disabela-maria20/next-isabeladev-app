/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-80px)] overflow-hidden px-6 py-16 sm:px-10 lg:px-16">
      <div className="mx-auto grid min-h-[80vh] max-w-7xl items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
        {/* CONTENT */}
        <div className="relative">
          <div aria-hidden="true" className="" />

          <h1 className="relative z-10 max-w-5xl font-sans text-[4.5rem] leading-[0.82] font-light tracking-[-0.06em] text-black uppercase sm:text-[6.5rem] md:text-7xl">
            <span className="block">Meu nome é</span>

            <span className="block">
              <span className="font-extrabold">Isabela M.</span>
            </span>

            <span className="block font-extrabold">Ribeiro...</span>
          </h1>

          {/* Apresentação */}
          <div className="relative z-10 mt-8 max-w-md sm:mt-10">
            <p className="font-sans text-sm font-medium text-black italic sm:text-base">
              Front-end Developer de{' '}
              <strong className="font-extrabold italic">
                São Paulo, Brasil
              </strong>
            </p>
          </div>

          {/* Ações */}
          <div className="relative z-10 mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/trabalhos"
              className="rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition-transform duration-300 hover:-translate-y-1"
            >
              Ver projetos
            </Link>

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
              className="object-cover"
              sizes="(max-width: 1024px) 80vw, 40vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
