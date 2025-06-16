import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Inicio1 } from "./Inicio1";
import { Oferta1 } from "./Oferta1";
import "../compcss/Menu.css"

export function Menu(params) {
    return (
        <section className="menu">
            <div className="fondo">
                <div className="menu2">
                    <div className="contenido">
                        <ul>
                            <li><Link className="a" to="/"> INICIO</Link></li>
                            <li><Link className="a" to="/pag2">OFERTAS</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="contenido2">
                <Routes>
                    <Route path="/" element={<Inicio></Inicio>}></Route>
                    <Route path="/pag2" element={<Oferta></Oferta>}></Route>
                </Routes>
            </div>
        </section>
    )

}

function Inicio(params) {
    return (

        <Inicio1 />

    )

}
function Oferta(params) {
    return (
        <Oferta1 />

    )

}