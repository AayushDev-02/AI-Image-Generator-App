import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
function Header() {
    return (
        <header className='sm:flex justify-between px-10 py-5 space-y-10 sm:space-y-0 sticky top-0 z-50 text-primary_text'>
            {/* left */}
            <div className='flex space-x-5 items-center justify-center mx-auto sm:mx-0 '>
                <Image src='https://links.papareact.com/4t3'
                    alt='LOGO'  
                    height={30}
                    width={30}
                />
                <div className=''>
                    <h1 className='text-lg md:text-base  text-barnd font-bold'>AI Image Generator App</h1>
                    <h2 className='text-xs text-primary_text/30'>Powered by DALL - 2 , Chat GPT</h2>
                </div>
            </div>
            {/* right */}
            <div className='flex space-x-5 items-center w-fit mx-auto sm:mx-0 text-3xl md:text-xl'>
                <Link href={'https://github.com/AayushDev-02/AI-Image-Generator-App'}><div><AiFillGithub  /></div></Link>
                <Link href={'https://www.linkedin.com/in/aayush-yadav-50ab55239/'}><div><AiFillLinkedin /></div></Link>
            </div>
        </header>
    )
}

export default Header   

