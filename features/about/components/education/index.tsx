const education = [
  {
    course: 'Tecnólogo em Análise e Desenvolvimento de Sistemas',
    institution: 'Faculdade de Tecnologia Carlos Drummond de Andrade',
    period: 'Conclusão: 2021',
  },
  {
    course: 'Técnico em Informática',
    institution: 'ETEC Professor Aprígio Gonzaga',
    period: 'Conclusão: 2019',
  },
];

export default function Education() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-16">
      <p className="font-sans text-sm font-medium text-black/60 italic">
        Formação
      </p>

      <h2 className="mt-2 font-sans text-4xl font-extrabold tracking-[-0.03em] text-black uppercase sm:text-5xl">
        Formação acadêmica
      </h2>

      <ul className="mt-10 grid gap-8 sm:grid-cols-2">
        {education.map((item) => (
          <li key={item.course} className="border-t border-black/15 pt-4">
            <p className="text-xs tracking-[0.15em] text-black/40 uppercase">
              {item.period}
            </p>

            <p className="mt-2 text-lg font-bold text-black">{item.course}</p>

            <p className="text-sm text-black/60">{item.institution}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
