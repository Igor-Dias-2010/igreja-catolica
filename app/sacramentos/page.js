"use client"
import Navbar from '../navbar'
import Link from "next/link"
import Creditos from '../creditos'

export default function Sacramentos() {
    return (
        <div>
            <Navbar />
            <h1>Sacramentos</h1>
            <div id='conteudo'>
                <p>Na fé católica, os sacramentos são sinais visíveis da graça invisível de Deus. Foram instituídos por Jesus Cristo e são os meios pelos quais Ele continua agindo no mundo, santificando os fiéis e fortalecendo sua comunhão com a Igreja</p>
                <p>Os sacramentos marcam as etapas mais importantes da vida cristã — do nascimento espiritual até o encontro definitivo com Deus. Cada um deles comunica uma graça especial e nos aproxima mais do amor de Cristo.</p>
                <p>A Igreja reconhece sete sacramentos, divididos em três grupos:</p>

                <h2>1. Sacramentos da Iniciação Cristã</h2>
                <ul>
                    <li><strong>Batismo:</strong> é o primeiro sacramento e a porta de entrada para a vida cristã. Apaga o pecado original e nos torna filhos de Deus e membros da Igreja.</li>
                    <li><strong>Crisma (ou Confirmação):</strong> fortalece os dons do Espírito Santo recebidos no Batismo, confirmando nossa fé e nos enviando a testemunhar Cristo.</li>
                    <li><strong>Eucaristia:</strong> é o centro da vida cristã. Nela, o próprio Cristo se oferece em corpo e sangue sob as espécies do pão e do vinho. É o alimento espiritual do cristão.</li>
                </ul>
                <h2>2. Sacramentos de Cura</h2>
                <ul>
                    <li><strong>Penitência (ou Confissão):</strong> reconcilia o fiel com Deus e com a Igreja. Por meio do perdão dos pecados, restaura a paz da alma e renova a graça batismal.</li>
                    <li><strong>Unção dos Enfermos:</strong> concede força, paz e coragem diante da doença e do sofrimento. Quando é da vontade de Deus, também traz cura física.</li>
                </ul>
                <h2>3. Sacramentos de Serviço e Missão</h2>
                <ul>
                    <li><strong>Ordem:</strong> confere aos ministros (bispos, padres e diáconos) a missão de servir a Igreja em nome de Cristo, pregando a Palavra e administrando os sacramentos.</li>
                    <li><strong>Matrimônio:</strong> une o homem e a mulher diante de Deus, tornando-os sinal do amor fiel e fecundo de Cristo pela Igreja.</li>
                </ul>
                <h2>A importância dos sacramentos</h2>
                <p>Por meio deles, Deus toca nossa vida concreta: o nascimento, o amor, o perdão, o sofrimento e até a morte. São caminhos pelos quais a graça divina entra na nossa história e transforma o coração humano.</p>
            </div>
            <Creditos />
        </div>
    )
}