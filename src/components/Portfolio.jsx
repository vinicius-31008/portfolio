import Projeto from "./Projetos.jsx"

// Troque os links abaixo pelos links reais dos seus repositórios/projetos em produção.
const PROJETOS = [
  {
    nome: "Sistem Of A Car",
    descricao: "Um projeto desenvolvido no SENAI para fins avaliativos, o projeto se trata de um sistema para uma locadora de carros",
    link: "https://github.com/vinicius-31008/SistemOfACar",
  },
  {
    nome: "Post-it",
    descricao: "Um projeto desenvolvido no SENAI para fins avaliativos, o projeto se trata de um sistema para um álbum de figurinhas online",
    link: "https://github.com/vinicius-31008/Post-it",
  },
  {
    nome: "Açaí Mart",
    descricao: "Um projeto desenvolvido no SENAI para fins avaliativos, o projeto se trata de um sistema para um supermercado",
    link: "https://github.com/vinicius-31008/SupermercadoFront",
  },
]

function Portfolio() {
  return (
    <section id="projetos" className="bg-void py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6">
        <p className="jsx-tag mb-3 text-sm text-cyan">
          <span className="bracket">&lt;</span>Projetos<span className="bracket">/&gt;</span>
        </p>
        <h2 className="mb-10 font-display text-3xl font-semibold text-ink sm:text-4xl">
          Meus <span className="text-cyan">projetos</span>
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJETOS.map((p) => (
            <Projeto key={p.nome} nome={p.nome} descricao={p.descricao} link={p.link} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
