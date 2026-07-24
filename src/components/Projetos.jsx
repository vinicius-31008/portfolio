function Projeto({ nome, descricao, link }) {
  return (
    <div className="flex flex-col justify-between gap-4 rounded-lg border border-line bg-panel p-6 text-ink transition-all hover:-translate-y-1 hover:border-violet hover:shadow-glowViolet">
      <div>
        <h3 className="jsx-tag mb-2 text-lg">
          <span className="bracket">&lt;</span>
          {nome}
          <span className="bracket">/&gt;</span>
        </h3>
        <p className="text-sm text-muted">{descricao}</p>
      </div>

      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex w-fit items-center gap-2 rounded border border-cyan px-4 py-2 font-display text-sm font-medium text-cyan transition-colors hover:bg-cyan/10"
      >
        Ver projeto
        <span aria-hidden="true">→</span>
      </a>
    </div>
  )
}

export default Projeto
