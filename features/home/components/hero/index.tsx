import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 py-20 sm:px-10">
      <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24">
        {/* =====================================================
            CONTENT
        ====================================================== */}
        <div>
          {/* Label */}
          <p className="mb-6 flex items-center gap-3 text-sm font-medium tracking-wide text-black/50">
            <span className="h-px w-8 bg-black/30" />
            Front-end Developer
          </p>

          {/* Title */}
          <h1 className="max-w-4xl font-serif text-5xl leading-[0.98] font-light tracking-tight text-black sm:text-6xl lg:text-7xl xl:text-8xl">
            Transformo ideias em{' '}
            <span className="font-extrabold">experiências digitais.</span>
          </h1>

          {/* Description */}
          <p className="mt-8 max-w-xl text-base leading-relaxed text-black/60 sm:text-lg">
            Oi, eu sou{' '}
            <strong className="font-semibold text-black">
              Isabela M. Ribeiro
            </strong>
            . Desenvolvo interfaces modernas, intuitivas e responsivas, unindo
            tecnologia, design e atenção aos detalhes.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            {/* Primary button */}
            <Link
              href="/trabalhos"
              className="group inline-flex items-center gap-3 rounded-full bg-black py-4 pr-3 pl-6 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              Ver meus trabalhos
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black transition-transform duration-300 group-hover:rotate-45">
                <svg
                  aria-hidden="true"
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M7 17 17 7M9 7h8v8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </Link>

            {/* Secondary button */}
            <Link
              href="/contato"
              className="rounded-full border border-black/10 px-6 py-4 text-sm font-medium text-black transition-all duration-300 hover:-translate-y-1 hover:border-black/30 hover:bg-black/[0.03]"
            >
              Vamos conversar
            </Link>
          </div>

          {/* Skills / Areas */}
          <div className="mt-14 flex flex-wrap items-center gap-x-6 gap-y-4 text-xs text-black/40">
            <div>
              <span className="mb-1 block text-black">01</span>
              <span>Desenvolvimento</span>
            </div>

            <div className="hidden h-8 w-px bg-black/10 sm:block" />

            <div>
              <span className="mb-1 block text-black">02</span>
              <span>UI &amp; Interfaces</span>
            </div>

            <div className="hidden h-8 w-px bg-black/10 sm:block" />

            <div>
              <span className="mb-1 block text-black">03</span>
              <span>Experiência</span>
            </div>
          </div>
        </div>

        {/* =====================================================
            VISUAL
        ====================================================== */}
        <div className="relative mx-auto w-full max-w-md">
          {/* Purple glow */}
          <div
            aria-hidden="true"
            className="absolute -top-10 -left-10 h-40 w-40 rounded-full bg-purple-500/30 blur-3xl"
          />

          {/* Orange glow */}
          <div
            aria-hidden="true"
            className="absolute -right-10 -bottom-10 h-48 w-48 rounded-full bg-orange-400/30 blur-3xl"
          />

          {/* Main card */}
          <div className="relative aspect-[4/5] overflow-hidden rounded-[3rem] bg-black shadow-2xl">
            {/* Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 opacity-90" />

            {/* Gradient texture */}
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  'radial-gradient(circle at 20% 20%, white 0, transparent 25%), radial-gradient(circle at 80% 80%, white 0, transparent 20%)',
              }}
            />

            {/* Card content */}
            <div className="absolute inset-0 flex flex-col justify-between p-8">
              {/* Top */}
              <div className="flex items-center justify-between text-xs font-medium tracking-[0.2em] text-white/70 uppercase">
                <span>Portfolio</span>
                <span>2026</span>
              </div>

              {/* Bottom */}
              <div>
                <span className="font-serif text-[7rem] leading-none font-extrabold tracking-[-0.08em] text-white sm:text-[8rem]">
                  IR
                </span>

                <div className="mt-4 h-px w-full bg-white/20" />

                <p className="mt-4 text-sm text-white/70">
                  Interfaces &amp; digital experiences
                </p>
              </div>
            </div>
          </div>

          {/* Floating card */}
          <div className="absolute -right-5 bottom-10 rounded-2xl border border-black/5 bg-white/90 px-5 py-4 shadow-xl backdrop-blur-sm">
            <span className="block text-xs text-black/40">Disponível para</span>

            <span className="text-sm font-semibold text-black">
              novos projetos
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
