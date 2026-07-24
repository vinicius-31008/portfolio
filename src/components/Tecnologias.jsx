function Tecnologias({ img, nome }) {
  return (
    <div className="group flex flex-col items-center gap-3 rounded-lg border border-line bg-panelAlt p-6 text-center transition-all hover:-translate-y-1 hover:border-cyan hover:shadow-glow">
      <i className={`${img} text-5xl text-muted transition-colors group-hover:text-cyan`} />
      <span className="jsx-tag text-sm text-ink">
        <span className="bracket">&lt;</span>
        {nome}
        <span className="bracket">/&gt;</span>
      </span>
    </div>
  )
}

export default Tecnologias
