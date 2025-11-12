"use client"
import Link from "next/link"
import Navbar from "../navbar"
export default function Papa() {
    return (
        <div>
            <Navbar />
            <h1>Papa</h1>
            <div id="conteudo">
                <p>Na tradição católica, o Papa é o Bispo de Roma, sucessor direto de São Pedro, a quem Jesus confiou a missão de “apascentar Suas ovelhas”. Essa linha de sucessão apostólica garante a unidade da fé e da comunhão entre todas as dioceses espalhadas pelo mundo.</p>
                <p>Como líder da Igreja Católica, o Papa tem três missões principais:</p>
                <div className="lista">
                    <ul>
                        <li><strong>Ensinar:</strong> proclamar a fé, interpretar o Evangelho à luz dos tempos, orientar moralmente os fiéis.</li>
                        <li><strong>Santificar:</strong> promover os sacramentos, consagrações, inspirar santidade de vida.</li>
                        <li><strong>Governar:</strong> presidir a Igreja universal, zelar pela administração, indicar bispos, promover a evangelização.</li>
                    </ul>
                </div>
                <p>Além disso, o Papa é símbolo de comunhão: mesmo entre culturas, línguas e contextos diferentes, ele representa o elo que mantém a Igreja “uma e santa”.</p>
                <h2>Por que esse papel é tão importante?</h2>
                <p>Porque o mundo muda rápido — guerras, tecnologia, cultura etc. — e a Igreja precisa de um ponto de referência firme. O Papa oferece isso: estabilidade, autoridade e também abertura ao diálogo. Ele mostra que a fé não é algo isolado, mas que se insere na história humana.</p>
                <h2>Um pouco de história</h2>
                <p>Desde os primeiros séculos, a Sé de Roma foi reconhecida como central. Com o passar dos tempos, o Papa assumiu papéis novos: diplomático, mundial, pastor de bilhões. Hoje, liderar a Igreja requer entender o mundo contemporâneo e permanecer fiel à Tradição.</p>
            </div>
        </div>
    )
}