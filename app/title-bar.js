"use client"
import './title-bar.css'
import santissimo from '../public/santissimo.png'
import Image from 'next/image'
export default function TitleBar() {
    return (
        <nav className='title-bar'>
            <Image src={santissimo} alt="Imagem do Santíssimo Sacramento" width={70} height={70} />
            <h1>IGREJA CATÓLICA</h1>
            <Image src={santissimo} alt="Imagem do Santíssimo Sacramento" width={70} height={70} />
        </nav>
    )
}