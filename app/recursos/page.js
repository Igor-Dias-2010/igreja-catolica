"use client"

import Link from 'next/link'
import Navbar from '../navbar'
export default function Recursos() {
    return (
        <div>
            <Navbar />
            <h1>Recursos oficiais</h1>
            <div id='conteudo'>
                <p>Para acessar o Catecismo oficial completo, <Link href="https://www.vatican.va/archive/ccc/index_po.htm" target='_blank' rel='noopener noreferrer'>clique aqui</Link></p>
                <p>Se quiser ler o Compêndio do Catecismo, <Link href="https://www.vatican.va/archive/compendium_ccc/documents/archive_2005_compendium-ccc_po.html" target='_blank' rel='noopener noreferrer'>clique aqui</Link></p>
                <p>Para ler a Bíblia on-line (Edição Ave-Maria), <Link href="https://fatima.org.br/biblia-online/" target='_blank' rel='noopener noreferrer'>clique aqui</Link></p>
                <p>Para acessar a Liturgia Diária, <Link href="https://liturgia.cancaonova.com/" target='_blank' rel='noopener noreferrer'>clique aqui</Link></p>
            </div>
        </div>
    )
}