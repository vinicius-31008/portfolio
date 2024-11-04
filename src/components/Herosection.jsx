import pc from "../assets/computador.png"


function Herosection(){
    return(
            <section className="flex items-center bg-gray-700">

                <section className="pt-2 pl-2 container text-white">

                    <br></br>

                    <nav className="pl-3 pb-16">
                        <div className="pl-10">
                            <h1 className="font-sans">Eu sou<span className="text-sky-400 font-bold text-3xl"> Vinicius Souza dos Santos</span></h1>
                        </div>
                
                        <br></br>

                        <div>
                        <p className="pl-10 flex justify-start font-sans">
                            desenvolvedor em python, HTML, <br></br>CSS & javascript
                        </p>
                        </div>
                    </nav>

                    <br />
                    <br />
                    <br />

                </section>
                <img src={pc} alt="computador" width="1100" height="75" className="blur-sm"></img>
            </section>
            
    )
}

export default Herosection