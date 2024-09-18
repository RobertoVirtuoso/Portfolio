'use client';
import Navbar from "@/components/Navbar";
import Image from "next/image";
import {motion} from "framer-motion"
import { TypewriterEffect, TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import Link from "next/link";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { phrase } from "@/components/phrase";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { thestreets } from "@/components/thestreets";
import { GlobeDemo } from "@/components/testglobe";
import Head from "next/head";



export default function Home() {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="JRV.png" type="image/png" sizes=""/>
      </Head>
      <main>
        {/* Use the responsive navbar component */}
        <Navbar></Navbar>

        <div className="bg-black text-center flex flex-col items-center pt-8 md:pt-20">
          <TextGenerateEffect words="I like to travel see some of the places I've been to." className="text-orange from-neutral-400" />
          <GlobeDemo />
          <div className="flex flex-col items-center justify-center mt-4 p-4 w-full">
            <div className="w-full h-0 relative pb-[56.25%] md:pb-[50%] lg:pb-[40%]"> {/* Responsive iframe container */}
              <iframe
                src="https://www.google.com/maps/d/u/1/embed?mid=1mUqlVMaEvd1DzGPEYzYhV1kkBMmyTTs&ehbc=2E312F&noprof=1"
                className="absolute top-0 left-0 w-full h-full"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}