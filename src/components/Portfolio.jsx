import Projeto from './Projetos.jsx'

function Portifolio(){
    return(
        <section className='bg-gray-700 text-white '>

            <section className='flex flex-col items-center'>

            <h1 className='text-2xl'>Meus <span className='text-sky-400'>Projetos</span></h1>
            <h1 className='text-2xl pl-16 text-sky-400'>_______</h1>

            <div className='flex  items-center container py-8 justify-stretch flex-wrap'>
            <Projeto nome="projeto 1" descricao={"descrição"} href="30"/>
            <Projeto nome="projeto 2" descricao={"descrição"} href="30"/>
            <Projeto nome="projeto 3" descricao={"descrição"} href="30"/>
            </div>

            </section>

        </section>
    )
}

export default Portifolio