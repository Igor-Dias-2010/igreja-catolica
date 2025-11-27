"use client"
import Link from "next/link"
import Navbar from "../navbar"
import Creditos from "../creditos"

export default function Missa() {
    return (
        <div>
            <Navbar />
            <h1>Santa Missa</h1>
            <div id="conteudo">
                <p>A Missa é o coração da vida católica — o momento em que o céu e a terra se encontram. Nela, os fiéis revivem o sacrifício de Cristo, celebram sua ressurreição e renovam a própria fé. É um tempo de comunhão, silêncio e entrega, onde cada gesto e palavra têm um sentido profundo.</p>
                <p>Durante a celebração, a Palavra de Deus é proclamada e o pão e o vinho se tornam o Corpo e o Sangue de Cristo, alimento espiritual que fortalece a alma e aproxima o fiel de Deus.</p>
                <p>A Missa também é encontro e missão: une a comunidade em oração e envia cada pessoa de volta ao mundo com o compromisso de viver o Evangelho. Participar dela é deixar-se transformar, é aprender a reconhecer Cristo no altar — e também no outro.</p>
                <p>Além disso, a Missa proporciona uma oportunidade para refletir sobre a própria vida, reconhecer as próprias falhas e buscar crescimento espiritual. Para muitos, é um momento de paz e renovação interior, que fortalece a esperança e a dedicação aos valores cristãos. A participação regular na Missa ajuda a criar uma conexão mais profunda com a fé e com a comunidade, mantendo viva a tradição e a espiritualidade que permeiam a história da Igreja Católica.</p>
            </div>
            <Creditos />
        </div>
    )
}