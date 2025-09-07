"use client"
import Link from "next/link"
export default function Igreja() {
    return (
        <div>
            <h1>Igreja Católica</h1>
            <h2 id="saudacao">Bem-vindo ao meu site sobre a Igreja Católica</h2>
            <div id="conteudo">
                <h2>Sobre a Igreja Católica:</h2>
                <p>
                    A Igreja Católica é a segunda maior religião do mundo, com cerca de 1,3 bilhão de adeptos, sendo o maior ramo único do Cristianismo. Ela é liderada pelo <Link href="/papa">Papa</Link>, que é considerado o sucessor de São Pedro, um dos apóstolos de Jesus Cristo.
                </p>
                <p>
                    A Igreja Católica tem uma rica história que remonta aos tempos de Jesus Cristo e dos apóstolos. Ela desempenhou um papel significativo na formação da civilização ocidental, influenciando a arte, a cultura, a filosofia e a política ao longo dos séculos.
                </p>
                <p>
                    A doutrina da Igreja Católica é baseada na Bíblia, na tradição apostólica e no magistério da Igreja. Ela ensina a importância dos <Link href="/sacramentos">Sacramentos</Link>, como o batismo, a eucaristia e a confissão, como meios de graça para os fiéis.
                </p>
                <p>
                    A Igreja Católica também é conhecida por seu compromisso com a caridade e a justiça social. Ela administra inúmeras instituições de caridade, hospitais, escolas e universidades em todo o mundo, ajudando os necessitados e promovendo a dignidade humana.
                </p>
                <p>
                    A Igreja Católica enfrenta desafios contemporâneos, como a secularização, o relativismo moral e os escândalos de abuso sexual. No entanto, ela continua a ser uma força espiritual e moral significativa em muitas partes do mundo.
                </p>
                <p>
                    Em resumo, a Igreja Católica é uma instituição religiosa com uma longa história, uma rica tradição e um papel importante na vida de milhões de pessoas em todo o mundo.
                </p>
                <p>
                    A Igreja Católica também venera inúmeros <Link href="/santos">Santos</Link>, que são exemplos de vida cristã e inspiração para os fiéis.
                </p>
            </div>
        </div>
    )
}