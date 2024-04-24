import Navbar from '@/components/Navbar'
import { infotabs } from '@/components/infotabs'
import { phrase2 } from '@/components/phrase'
import { PinContainer } from '@/components/ui/3d-pin'
import { Tabs } from '@/components/ui/tabs'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'
import { TypewriterEffectSmooth } from '@/components/ui/typewriter-effect'
import React from 'react'
import Image from 'next/image'

export default function Workexperience() {
  return (
    <main>
      <Navbar></Navbar>      
      <div className="pt-6 flex flex-col items-center justify-center ">      
      <TextGenerateEffect words={"Brief lookthrough or download my CV"} className= "font-light text-orange flex-box text-center from-neutral-400 pt-8 md:pt-20 ">
      </TextGenerateEffect>
      {/* <TypewriterEffectSmooth words={phrase2} className= "text-xs flex-box p-8"></TypewriterEffectSmooth> */}
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 m-4">
      {/* <a href='' download={"C.V. J.R.V"}> */}
      <aside className="flex items-center gap-4p">
        <a href='#' download={"C.V. J.R.V"}className="p-[3px] relative">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-blue-500 rounded-md" />
        <div className="px-8 py-2  bg-black rounded-[3px]  relative group transition duration-200 text-white hover:bg-transparent">
          Resume for Humans
        </div>        
        </a>
      </aside>
      <aside className="flex items-center gap-4p">
        <a href='/CV ROBOT.pdf' download={"C.V. J.R.V +"}className="p-[3px] relative">
        <div className="absolute inset-0 bg-gradient-to-r from-rose-200 to-pink-600 rounded-md" />
        <div className="px-8 py-2  bg-black rounded-[3px]  relative group transition duration-200 text-white hover:bg-transparent">
          Resume for Robots
        </div>        
        </a>
      </aside>
      </div>
    </div>
      {/* This is the component tab */}
      <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b  flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-28">
      <Tabs tabs={infotabs} containerClassName='bg-inherit '></Tabs>
      </div>
      {/* Skill area */}

  </main>
  )
}
