'use client';
import Navbar from "@/components/Navbar";
import Image from "next/image";
import {motion} from "framer-motion"
import { TypewriterEffect, TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import Link from "next/link";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { phrase } from "@/components/phrase";
import { PinContainer } from "@/components/ui/3d-pin";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { thestreets } from "@/components/thestreets";


export default function Home() {
  return (
    <main>
       {/* Edit the nav in components or break navbar */}
       <link  rel="icon"  href="/JRV.png"  type="image/<generated>"  sizes=""/>
      <Navbar></Navbar>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
        <TypewriterEffectSmooth words={phrase} className= "md-text-large text-center flex-box md:mt-16 from-neutral-400 p-8"></TypewriterEffectSmooth>
        </div>
        <div className="font-normal text-2xl md:text-4xl dark:text-neutral-200 py-4">
        Meet Jose, who with enough caffeine and time can find a solution for all your laboratory needs with half a decade of GxP experience. I try to combine my passion for science and tech to innovate the pharmaceutical industry all while adhering to SOP and following best practices.
        </div>
        <div className="font-extralight text-2xl md:text-4xl dark:text-neutral-200 py-4">
          In my freetime I&apos;m Building websites, reading, bouldering, and assisting a startup soon to go public. you can read more in my<a data-state="closed" className="text-zinc-100 font-bold hover:text-purple-500 transition duration-150 outline-none" href="Aboutme"> About me</a> page.
        </div> 
        <section>
      <div className="mx-auto max-w-7xl">
  <h1 className="text-center text-2xl md:text-4xl text-white font-bold mt-18 md:mt-40 sm:mt-20">Work Experience</h1>
  <p className="text-center text-base text-zinc-400 md:text-base max-w-4xl mt-4 leading-loose tracking-wide">With my experience, I&apos;m trying now to branch into Lab adjacent roles within the new Cell Therapy developments. This is a brief summary of my work experience for details, see <a data-state="closed" className="text-zinc-200 font-bold hover:text-cyan-500 transition duration-150 outline-none" href="/Workexperience">here</a>.</p>

  <div className="max-w-5xl mx-auto px-8">
    <HoverEffect items={[
      {
        title: "KitePharma 2023",
        position: "QC Microbiologist Technician",
        description: "Kite Pharma is a pioneering biopharmaceutical company focused on developing innovative cancer immunotherapy treatments harnessing the power of engineered T-cell therapy.",
        link: "https://www.kitepharma.com/"
      },
      {
        title: "Eurofins PSS 2023",
        position: "QC Technician",
        description: "Eurofins PSS is a leading provider of laboratory services and solutions, offering comprehensive analytical testing and support to pharmaceutical, biotechnology, and medical device companies worldwide.",
        link: "https://www.eurofins.com/biopharma-services/product-testing/services/pss-insourcing-solutions/"
      },
      {
        title: "Eurofins Clinical Diagnostics 2021-2022",
        position: "Assistant Teamlead /Teamlead",
        description: "Eurofins Clinical Diagnostics is a trusted provider of high-quality diagnostic testing services, offering a wide range of clinical laboratory testing solutions to healthcare providers, pharmaceutical companies, and research institutions globally.",
        link: "https://eurofins-clinicaldiagnostics.nl/nl/"
      },
      {
        title: "Oxford Global Resources 2021",
        position: "Lab Assistant",
        description: "Oxford Global Resources is a premier staffing and consulting firm specializing in providing top-tier talent and expert solutions to companies across various industries worldwide.",
        link: "https://www.oxfordcorp.com/nl/"
      }
    ]}/>
  </div>
</div>      
</section>
<section>
  <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.2,
          duration: 0.9,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
      <h1 className="text-center text-2xl md:text-4xl text-white font-bold mt-18 md:mt-40 sm:mt-20">Testimonials</h1>  
      <p className="text-center text-base text-zinc-400 md:text-base max-w-4xl mt-4 leading-loose tracking-wide">Peek into the past experiences and see what others have to say about our time together.</p><a data-state="closed" className="text-zinc-200 font-bold hover:text-cyan-500 transition duration-150 outline-none" href="/Testimonials">Want more?</a>
      
      
      <div className="rounded-lg flex flex-col antialiased bg-inherit dark:bg-inherit dark:bg-grid-white items-center justify-center relative overflow-hidden bottom-3"> 
        <InfiniteMovingCards items={thestreets} direction="right" speed="slow" className="" >

        </InfiniteMovingCards>
</div>
      </motion.div>

</section>
</motion.div>
<div className="p-10">
 
</div>
    </main>
  );
}
