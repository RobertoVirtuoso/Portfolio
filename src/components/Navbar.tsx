import React from 'react'
import Image from "next/image";
import Link from 'next/link'
import { MenuIcon } from 'lucide-react';

type Props = {}

const Navbar = async (props: Props) => {
  return (
    <header className="fixed right-0 left-0 top-0 py-4 px-4 bg-black/40 backdrop-blur-lg z-[100] flex items-center border-b-[1px] border-neutral-900 justify-between">
      <aside className="flex items-center gap-[2px]">
        <p className="text-3xl font-bold hover:text-rose-700 transition duration-150 outline-none"><Link href="/">Roberto</Link> </p>
        <div style={{ transform: 'rotate(90deg)' }}>
        <Image
        src="free-dna-2130814-1798594.webp"
        width={30}
        height={30}
        alt="logo"
        className="shadow-sm"
         />
        </div>
        <p className="text-3xl font-bold hover:text-cyan-500 transition duration-150 outline-none "><Link href="/Main">Vicioso</Link></p>
        </aside>
        <nav className="absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%] hidden md:block">
        <ul className="flex items-center gap-4 list-none">
        <li>
            <Link href="Aboutme">About Me</Link>
          </li>
          <li>
            <Link href="Skills">Skills & Experience</Link>
          </li>
          <li>
            <Link href="/">Testimonials</Link>
          </li>
        </ul>
      </nav>
      <a href="mailto:rvirtuosodev@gmail.com?body=Website contact">
      <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-blue-700 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        Contact me
      </button>
      </a>
      <MenuIcon className='md:hidden'/>
    </header>
  )
}

export default Navbar