import logo from "../assets/vinicius.png"

function Header(){
    return(
        <header className="bg-gray-700 flex justify-center py-4">
            <div className="container flex justify-between text-white">
                <img src={logo} alt="pequeno logo" width="200" height="200"></img>

                <nav className="pt-16 font-sans">
                    <a href="#Sobre" className="p-4 hover:text-gray-400">Sobre Mim</a>
                    <a href="#Portfolio" className="p-4 hover:text-gray-400">Portifolio</a>
                    <a href="#Contato" className="p-4 hover:text-gray-400">Contato</a>
                </nav>
            </div>
        </header>
    )
}

export default Header