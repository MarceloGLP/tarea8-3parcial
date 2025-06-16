import "../compcss/Inicio1.css"
import { Carrusel, Carrusel1, Carrusel2, Carrusel3, Carrusel4 } from "./Carrusel"
export function Inicio1(params) {
    return (
        <section className="acordeon">
            <details>
                <summary className="summary aco1">Macheteros (Beni)</summary>
                <div className="contenido3">
                    <p>Danza guerrera de los moxeños que recrea técnicas ancestrales de caza y defensa territorial. Los bailarines, cubiertos solo con cushmas (taparrabos de algodón silvestre) y tocados de plumas de paraba jacinta, empuñan machetes de chonta tallados con figuras de jaguares. Sus pasos quebrados imitan felinos acechando, mientras las filas en zigzag simbolizan ríos amazónicos como el Mamoré. La música, ejecutada con moseños (flautas de caña gigante) y tambores de cuero de caimán, reproduce sonidos de la selva: lluvia, truenos y rugidos. En la Feria de San Ignacio de Moxos, la coreografía incluye piruetas rituales donde los danzantes "vuelan" sobre fogatas, representando la comunicación con espíritus del bosque. Etnomusicólogos registran 12 variantes regionales, cada una vinculada a mitos de creación locales.</p>
                <Carrusel imag1="/public/mach1.jpg" imag2="/public/mach2.jpeg" imag3="/public/mach3.jpg"/>
                </div>
            </details>
            <details>
                <summary className="summary aco2">Tinku (Potosí)</summary>
                <div className="contenido3">
                    <p>Ritual combativo del norte potosino donde comunidades quechua buscan equilibrio cósmico mediante enfrentamientos controlados. Los varones usan monteras de cuero de llama endurecido y unkus (ponchos) rojos teñidos con cochinilla, mientras las mujeres portan ajsus (faldas) con patrones de chakana (cruz andina). Los golpes sincopados – codazos, patadas y bloqueos – se coordinan con música de charangos en afinación kirki, y wankaras (tambores rituales) que marcan compases de 6/8. Estudios de Xavier Albó confirman su función como ofrenda de sangre a la Pachamama: las heridas "alimentan" la tierra para garantizar cosechas. En versiones modernas como el Gran Poder de La Paz, se estilizan los movimientos, pero se conservan saltos en cuclillas y giros en eje, simbolizando la lucha entre Hanan Pacha (mundo superior) y Kay Pacha (tierra).</p>
                <Carrusel1  imag4="/public/tin1.jpg" imag5="/public/tin2.jpg" imag6="/public/tin3.jpg"/>
                </div>
            </details>
            <details>
                <summary className="summary aco3">Diablada (Oruro)</summary>
                <div className="contenido3">
                    <p>Declarada Obra Maestra del Patrimonio Oral por la UNESCO, este drama danzado narra la lucha entre el Arcángel Miguel y legiones demoníacas. Las máscaras diabólicas de siete cuernos – talladas en yeso y fibra de vidrio – representan pecados capitales, mientras las tullmas (armaduras) bordadas con dragones aluden al Tío de las minas, deidad subterránea. Los danzantes avanzan en bloques geométricos de 12×12 pasos, arrastrando cadenas al ritmo de bandas de bronce con más de 50 músicos. Según crónicas del siglo XVIII, su origen se vincula a rituales precolombinos de Anata Andino (juego ceremonial), luego cristianizados para honrar a la Virgen del Socavón. En el Carnaval de Oruro, 50,000 bailarines desfilan en una coreografía que dura 20 horas, fusionando teatro callejero, fe y resistencia cultural minera.</p>
                <Carrusel2 imag7="/public/dia1.jpg" imag8="/public/dia2.jpg" imag9="/public/dia3.jpg"/>
                </div>
            </details>
            <details>
                <summary className="summary aco4">Kullawada (La Paz)</summary>
                <div className="contenido3">
                    <p>Originaria del altiplano aymara, esta danza ritual simboliza la cadena social de los hilanderos prehispánicos. Los bailarines, llamados kullawas, lucen trajes bordados con hilos de plata y oro que denotan jerarquías: capas con figuras astrales para líderes, y faldillas con símbolos agrícolas para el pueblo. Sus movimientos circulares sincronizados, guiados por zampoñas y bombos, recrean el tejido colectivo de la vida. Las máscaras de ojos rasgados y sombreros con espejos reflejan sincretismo: fusionan la cosmovisión andina (culto a Pachamama) con iconografía colonial. Actualmente, en el Carnaval de Oruro, miles de danzantes avanzan en espirales perfectas portando ruecas de madera, simbolizando la interdependencia humana. Investigaciones etnográficas confirman su vínculo con rituales de fertilidad ligados al ciclo de la quinua, donde cada giro representa la conexión entre el Kay Pacha (mundo terrenal) y el Alax Pacha (cosmos).</p>
                <Carrusel3 imag10="/public/ku1.jpg" imag11="public/ku2.jpg" imag12="public/ku3.jpg"/>
                </div>
            </details>
            <details>
                <summary className="summary aco5">Taquirari (Santa Cruz)</summary>
                <div className="contenido3">
                    <p>Emblema de la identidad oriental, este baile nace de la fusión guaraní, africana y española en las tierras bajas. Las parejas ejecutan giros rácticos y zapateados ágiles, imitando el vuelo de aves como el surucuá. Los trajes, tejidos en tipoy (túnica ligera) con fibras de chonta, incorporan plumas de paraba y semillas de tajibo, reflejando la biodiversidad amazónica. El acompañamiento musical único combina arpas coloniales, violines de jacarandá y tambores mbororó de cuero de capibara, creando ritmos binarios acelerados. Antropólogos como David Mendoza destacan su rol en festividades patronales (ej. San Ignacio de Velasco), donde coreografías en círculos concéntricos simbolizan la unidad comunal. Hoy, el Taquirari se revitaliza en proyectos educativos cruceños, enseñando a niños la conexión entre danza y ecología mediante movimientos que evocan ríos y bosques.</p>
                <Carrusel4 imag13="/public/ta1.jpeg" imag14="/public/ta2.jpg" imag15="/public/ta3.jpg"/>
                </div>
            </details>
        </section>
    )
}