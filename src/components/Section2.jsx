import Tecnologias from "./Tecnologias"

const STACK = [
  { img: "devicon-csharp-plain", nome: "C#" },
  { img: "devicon-java-plain", nome: "Java" },
  { img: "devicon-php-plain", nome: "PHP" },
  { img: "devicon-mysql-plain", nome: "MySQL" },
  { img: "devicon-javascript-plain", nome: "JavaScript" },
  { img: "devicon-python-plain", nome: "Python" },
  { img: "devicon-angularjs-plain", nome: "Angular" },
  { img: "devicon-react-original", nome: "React" },  
  { img: "devicon-html5-plain", nome: "HTML" },
  { img: "devicon-css3-plain", nome: "CSS" },
  
  
]

function Section() {
  return (
    <section id="sobre" className="bg-panel py-20 text-ink sm:py-28">
      <div className="container mx-auto px-4 sm:px-6">
        <p className="jsx-tag mb-3 text-sm text-cyan">
          <span className="bracket">&lt;</span>Sobre<span className="bracket">/&gt;</span>
        </p>

        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <h2 className="mb-6 font-display text-3xl font-semibold sm:text-4xl">
              Sobre <span className="text-cyan">mim</span>
            </h2>
            <p className="text-muted leading-relaxed">
            Sou estudante do Senai Álvares Romi, no curso de desenvolvimento de sistemas, e
            atuo como desenvolvedor na{" "}
            <a
              href="https://swpd.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan underline decoration-cyan/40 underline-offset-2 hover:text-cyan-soft"
            >
              SWPD
            </a>
            , com experiência em diversas linguagens de programação.
            <br /><br />

            Minha formação atual em programação inclui as seguintes áreas:
            <br /><br />
            <span className="text-ink">JavaScript, Angular e React</span> — com o uso de
            frameworks modernos, desenvolvo aplicações dinâmicas e interativas, criando
            experiências envolventes para os usuários.
            <br /><br />
            <span className="text-ink">HTML e CSS</span> — tenho uma boa experiência em design
            responsivo e acessibilidade, garantindo que as páginas que crio sejam visualmente
            atraentes e funcionais em diferentes dispositivos.
            <br /><br />
            <span className="text-ink">C#, Java e PHP</span> — desenvolvo o back-end de
            aplicações, construindo regras de negócio e integrações robustas.
            <br /><br />
            <span className="text-ink">Python e MySQL</span> — utilizo para desenvolver scripts,
            automações, modelagem de banco de dados e análise de dados.
            <br /><br />
            Estou sempre em busca de novos desafios e oportunidades para aprimorar minhas
            habilidades e contribuir para projetos inovadores.
            </p>
          </div>

          <div>
            <h3 className="jsx-tag mb-6 font-display text-3xl font-semibold text-violet-soft sm:text-2xl">
              <span className="bracket">&lt;</span>Tecnologias<span className="bracket">/&gt;</span>
            </h3>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-2">
              {STACK.map((tech) => (
                <Tecnologias key={tech.nome} img={tech.img} nome={tech.nome} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section