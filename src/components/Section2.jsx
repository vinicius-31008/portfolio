import Tecnologias from "./Tecnologias"

function Section(){
    return(
            <section id="Sobre" className="bg-gray-700 py-4 text-white pt-10 flex flex-col items-center">
                
                <section>

                    <br />
                    <br />
                    <br />
                    <br />

                    <h1 className="text-2xl pl-2">Sobre <span className="text-sky-400 font-bold">Mim</span></h1>

                    <div className="flex items-start">
                        <h1 className="text-sky-400 text-3xl pl-20 ">____</h1>
                        <p className="pl-6">Sou um desenvolvedor com experiência em diversas linguagens de programação. <br />
                        Minha formação atual em programação inclui as seguintes áreas:<br />
                        <br />
                        - JavaScript; Com o uso de frameworks modernos, desenvolvo aplicações dinâmicas e interativas<br />
                        criando experiências envolventes para os usuários.<br />
                        <br />
                        - HTML e CSS: Tenho uma boa expêriencia de design responsivo e acessibilidade<br />
                        garantindo que as páginas que crio sejam visualmente atraentes e funcionais em diferentes dispositivos.<br />
                        <br />
                        - Python: Utilizo Python para desenvolver scripts e automações, além de trabalhar com análise de dados.<br />
                        <br />
                        Estou sempre em busca de novos desafios e oportunidades <br />
                        para aprimorar minhas habilidades e contribuir para projetos inovadores.</p>
                    </div>
                </section>

                <br />
                <br />
                <br />

                <section>

                <h1 className="text-2xl pl-2"><span className="text-sky-400 font-bold">Tecnologias</span> com que trabalho</h1>
                <h1 className="text-2xl pl-6 text-sky-400">___________</h1>

                <div className="container py-8 flex justify-stretch flex-wrap">
                    <Tecnologias img="devicon-javascript-plain"  nome="JavaScript"/>
                    <Tecnologias img="devicon-html5-plain"  nome="HTML"/>
                    <Tecnologias img="devicon-css3-plain"  nome="CSS"/>
                    <Tecnologias img="devicon-python-plain"  nome="Python"/> 
                </div>

                </section>

            </section>
    )
}

export default Section