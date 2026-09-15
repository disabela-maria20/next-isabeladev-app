const experiences = [
  {
    company: 'Topaz',
    period: 'Março 2025 — Atual',
    role: 'Desenvolvedora Front-End Pleno',
  },
  {
    company: 'Vibezz',
    period: 'Junho 2023 — Março 2025',
    role: 'Desenvolvedora Front-End Pleno',
  },
  {
    company: 'Adventures.inc',
    period: 'Abril 2021 — Abril 2023',
    role: 'Desenvolvedora Front-End',
  },
];

export default function Experience() {
  return (
    <section className="bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 px-6 py-20 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <p className="font-sans text-sm font-medium text-white/70 italic">
          Experiência
        </p>

        <h2 className="mt-2 font-sans text-4xl font-extrabold tracking-[-0.03em] text-white uppercase sm:text-5xl">
          Minha trajetória
        </h2>

        <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {experiences.map((item) => (
            <li
              key={`${item.period}-${item.role}`}
              className="border-t border-white/30 pt-4"
            >
              <p className="text-xs tracking-[0.15em] text-white/70 uppercase">
                {item.period}
              </p>

              <p className="mt-2 text-lg font-bold text-white">{item.role}</p>

              <p className="text-sm text-white/80">{item.company}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
