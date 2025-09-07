"use client"
import './navbar2.css'
import santissimo from '../public/santissimo.png'
import Image from 'next/image'
export default function Navbar2() {
    return (
        <nav className='navbar2'>
            <Image src={santissimo} alt="Imagem do Santíssimo Sacramento" width={100} height={100} />
            <h1>IGREJA CATÓLICA</h1>
            <Image src={santissimo} alt="Imagem do Santíssimo Sacramento" width={100} height={100} />
        </nav>
    )
}