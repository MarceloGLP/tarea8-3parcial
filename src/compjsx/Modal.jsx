import"../compcss/Modal.css"

export function Modal(params) {
    return(
        <section>
            <div className="wrapper">
                <a href="#modalbox">PRECIO</a>
            </div>
            <div id="modalbox" className="modal">
                <div className="modalcontent">
                    <h1>Precio de la vestimenta</h1>
                    <p><b>Completo:</b> 3,500 - 6,000 BOB (500 - 860 USD)  <br /><b>Materiales predominantes:</b> Lana de oveja, metales preciosos sintéticos, espejos.</p>
                    <a href="#" className="modalclose">&times;</a>
                </div>
            </div>
        </section>
    )
}
export function Modal2(params) {
    return(
        <section>
            <div className="wrapper">
                <a href="#modalbox2">PRECIO</a>
            </div>
            <div id="modalbox2" className="modal">
                <div className="modalcontent">
                    <h1>Precio de la vestimenta</h1>
                    <p><b>Completo:</b> 1,200 - 2,500 BOB (170 - 360 USD) <br />
                        <b>Materiales predominantes:</b> Lana de alpaca, cuero crudo, hilos de algodón teñidos con cochinilla.</p>
                    <a href="#" className="modalclose">&times;</a>
                </div>
            </div>
        </section>
    )
}
export function Modal3(params) {
    return(
        <section>
            <div className="wrapper">
                <a href="#modalbox3">PRECIO</a>
            </div>
            <div id="modalbox3" className="modal">
                <div className="modalcontent">
                    <h1>Precio de la vestimenta</h1>
                    <p><b>Completo:</b> 800 - 2,000 BOB (115 - 290 USD) <br />
<b>Materiales predominantes:</b> Algodón, plumas naturales, semillas, cuero.</p>
                    <a href="#" className="modalclose">&times;</a>
                </div>
            </div>
        </section>
    )
}