import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
function Header() {
    return (
        <header className='flex justify-between px-10 py-2 bg-black text-white'>
            {/* left */}
            <div className='flex space-x-5 items-center '>
                <Image src='https://links.papareact.com/4t3'
                    alt='LOGO'
                    height={30}
                    width={30}
                />
                <div>
                    <h1>AI Image Generator App</h1>
                    <h2>Powered by DALL - 2 , Chat GPT</h2>
                </div>
            </div>
            {/* right */}
            <div className='flex space-x-5 items-center'>
                <Link href={'https://github.com/AayushDev-02/AI-Image-Generator-App'}><div><AiFillGithub className='text-3xl' /></div></Link>
                <Link href={'https://www.linkedin.com/in/aayush-yadav-50ab55239/'}><div><AiFillLinkedin className='text-3xl' /></div></Link>
            </div>
        </header>
    )
}

export default Header
