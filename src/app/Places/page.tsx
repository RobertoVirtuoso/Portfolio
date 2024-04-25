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
import { GlobeDemo } from "@/components/testglobe";


export default function Home() {
  return (
    <main>
       {/* Edit the nav in components or break navbar */}
       <link  rel="icon"  href="JRV.png"  type="image/<generated>"  sizes=""/>
      <Navbar></Navbar>
       <div className="bg-black">
      <TextGenerateEffect words={"I like to travel see some of the places. I've been."} className= "text-orange flex-box text-center from-neutral-400 pt-8 md:pt-20 ">
        </TextGenerateEffect>
        <div className="flex flex-col-reverse items-center justify-center mt-4 p-4">
      <iframe src="https://www.google.com/maps/d/u/1/embed?mid=1mUqlVMaEvd1DzGPEYzYhV1kkBMmyTTs&ehbc=2E312F&noprof=1" width="1280" height="1000"></iframe>
      <GlobeDemo></GlobeDemo>
      </div>
    </div>
    </main>
  );
}
