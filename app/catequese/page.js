"use client"
import Navbar from '../navbar'
import Link from 'next/link'

export default function Catequese() {
    return (
        <div>
            <Navbar />
            <h1>Catequese</h1>
            <div id='conteudo'>
                <p>A catequese é a ação da Igreja que transmite a fé cristã, formando discípulos de Jesus. Não é só aula teórica: é um processo integral que visa tocar a cabeça (conhecimento), o coração (experiência) e os braços (prática) do cristão. Em suma: ensinar, evangelizar e acompanhar.</p>
                <p>Desde os primeiros séculos, a Igreja preparava os catecúmenos antes do Batismo. A catequese tem fundamento na Palavra de Deus, na Tradição apostólica e no Magistério. Seu objetivo é tornar a pessoa capaz de crer, orar, celebrar os sacramentos e viver como membro ativo da comunidade cristã.</p>
                <h2>Objetivos principais</h2>
                <ul>
                    <li><strong>Transmitir a fé:</strong> apresentar o conteúdo do Credo, os sacramentos, a moral cristã e a vida em comunidade.|apresentar o conteúdo do Credo, os sacramentos, a moral cristã e a vida em comunidade.</li>
                    <li><strong>Formar discípulos:</strong> não basta saber; é preciso seguir Cristo, crescer na intimidade com Ele e assumir missão.</li>
                    <li><strong>Preparar para os sacramentos:</strong> sobretudo Batismo (quando aplicável), Eucaristia e Crisma.</li>
                    <li><strong>Promover conversão e santidade:</strong> gerar transformação de vida através da graça.</li>
                    <li><strong>Fomentar vida comunitária:</strong> integrar o catequizando na paróquia e nas obras de caridade.</li>
                </ul>
                <p>O conteúdo essencial da Catequese é o ensinamento sobre a fé cristã: quem é Deus, quem é Jesus Cristo, o que é a Igreja e como viver o amor de Deus no cotidiano.
                    Ela também ajuda o fiel a compreender os sacramentos, a oração e a vida em comunidade, fortalecendo o compromisso com a fé e com o serviço ao próximo.
                </p>
            </div>
        </div>
    )
}