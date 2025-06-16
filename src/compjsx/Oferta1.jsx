import "../compcss/Oferta1.css"
import { Carrusel } from "./Carrusel"
import { Modal, Modal2, Modal3 } from "./Modal"

export function Oferta1(props) {
    return (
        <main>
            <section className="container">
                <div className="carta">
                    <div className="imgBx imagen1">
                    </div>
                    <div className="content">
                        <h2>KULLAWADA</h2>
                        <p>Vestimenta Masculina:  <hr/>Traje de lana bordado con hilos de plata y oro, incluye capa con figuras astrales, pantalón ajustado y sombrero de fieltro con espejos. Accesorios: rueca de madera y máscara de ojos rasgados. <br/>Vestimenta Femenina: <hr/>Pollera (falda) de bayeta con bordados de constelaciones, blusa de seda, mantilla sujetada con tupu (prendedor incaico) y sombrero similar al masculino pero más pequeño.</p>
                        <Modal/>
                    </div>
                </div>
                <div className="carta">
                    <div className="imgBx imagen2">
                    </div>
                    <div className="content">
                        <h2>TINKU</h2>
                        <p>Vestimenta Masculina:  <hr />Montera (casco de cuero de llama), poncho rojo con franjas negras, pantalón blanco y ojotas (sandalias). Portan qhuris (hondas) y protectores de brazos.<br />Vestimenta Femenina: <hr />Ajsu (falda) de bayeta roja con bordados de chakana, sombrero de paño negro, y awayo (manta) para cargar piedras rituales.</p>
                        <Modal2/>
                    </div>

                </div>
                <div className="carta">
                    <div className="imgBx imagen3">

                    </div>
                    <div className="content">
                        <h2>TAQUIRARI</h2>
                        <p>Vestimenta Masculina:<hr />Camisa blanca de algodón con bordados florales, pantalón negro hasta la rodilla, faja de chaguar y tocado de plumas de paraba. Calzado: abarcas de cuero.<br />Vestimenta Femenina: <hr />Tipoy (túnica sin mangas) de seda estampada con motivos de flora amazónica, collar de semillas de tajibo, y vincha con plumas de guacamayo.</p>
                        <Modal3/>
                    </div>
                </div>
            </section>
        </main>
    )
}
