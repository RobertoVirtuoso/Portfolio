'use client';
import Navbar from "@/components/Navbar";
import Image from "next/image";
import {motion} from "framer-motion"
import { TypewriterEffect, TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import {twMerge} from "tailwind-merge"


export default function Aboutme() {
  return (
    <main>
      <link  rel="icon"  href="JRV.png"  type="image/<generated>"  sizes=""/>
      <Navbar></Navbar>

      <TextGenerateEffect words={"Comitted to continuous growth, embracing challenges and trying to make the best of it. One day at a time"} className= "text-orange flex-box text-center from-neutral-400 pt-8 md:pt-20 ">
        </TextGenerateEffect>
        {/* Creating a designing hell here and willingly avoiding the DRY rule i apologize future self but i got it right the first time *shrug* */}
        <motion.div
  animate={{ x: [-2000, 0,0] }}
>
        <div className="max-w-5xl mx-auto px-8 mt-10 relative">
    <p className="text-zinc-400 text-sm md:text-base mt-8 md:leading-loose tracking-wide">
        When I&apos;m not busy working or with a IDE open you&apos;ll often find either reading or indulging in some other obscure series. I like a good laugh and can find the humor in just about anything.
        <p className="text-zinc-400 text-sm md:text-base mt-8 md:leading-loose tracking-wide">But beyond work and cheesy punchlines, I have a passion for my personal interests which include, bouldering, hiking, diving, windsurfing, and reading I try my best to have a well-rounded approach to both work and life. 
        I try my best to travel when I can and visit atleast one new place per year whether within europe or outside Europe. If you know a person I do obstacle runs a few times per year an can always use an extra casuality not worried about getting muddy.</p>
    </p>
    <p className="text-zinc-400 text-sm md:text-base mt-8 md:leading-loose tracking-wide">
        Here&apos;s a timeline of what I&apos;ve been upto 
    </p>
    <p className="text-zinc-400 text-sm md:text-base mt-8 md:leading-loose tracking-wide">
        (If you&apos;re looking for more work related stuff swipe right)
    </p>
    
    <div className="max-w-3xl mx-auto   divide-zinc-800 relative">
        <div className="absolute h-full w-[4px] bg-gradient-to-b from-transparent via-cyan-700 to:transparent  -left-4 md:-left-10"></div>
        <div className="border-b border-zinc-800">
            <h1 className="text-xl font-bold text-zinc-200 my-8 relative">
                <div className="h-3 md:h-4 w-3 md:w-4 border-2 border-cyan-500 bg-zinc-800 rounded-full absolute -left-[20px] md:-left-[46px] top-2 md:top-1"></div>
                2024
            </h1>
            <div className="mb-8">
                <div className="flex flex-row space-x-2 items-start my-2">
                    <svg
                        stroke="currentColor"
                        fill="none"
                        stroke-width="1.5"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        className="text-cyan-500 mt-[3px] flex-shrink-0"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                    </svg>
                    <span className="text-zinc-400 text-sm md:text-base">
                        Joined a former colleague with his startup in early March still in the designing phase but would like to consult me going into Q3-Q4 2024.
                    </span>
                </div>
                <div className="flex flex-row space-x-2 items-start my-2">
                    <svg
                        stroke="currentColor"
                        fill="none"
                        stroke-width="1.5"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        className="text-cyan-500 mt-[3px] flex-shrink-0"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                    </svg>
                    <span className="text-zinc-400 text-sm md:text-base">
                        Placed 18th place at a local open bouldering competition (Sadly did not win the Chalkbag). 
                    </span>
                </div>
                <div className="flex flex-row space-x-2 items-start my-2">
                    <svg
                        stroke="currentColor"
                        fill="none"
                        stroke-width="1.5"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        className="text-cyan-500 mt-[3px] flex-shrink-0"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                    </svg>
                    <span className="text-zinc-400 text-sm md:text-base">
                        Helped my sister with University Applications while visiting family.
                    </span>
                </div>
                <div className="flex flex-row space-x-2 items-start my-2">
                    <svg
                        stroke="currentColor"
                        fill="none"
                        stroke-width="1.5"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        className="text-cyan-500 mt-[3px] flex-shrink-0"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                    </svg>
                    <span className="text-zinc-400 text-sm md:text-base">
                        Looking for new working opportunities after returning from 3 months in Colombia.
                    </span>
                </div>
            </div>
        </div>
        <div className="border-b border-zinc-800">
            <h1 className="text-xl font-bold text-zinc-200 my-8 relative">
                <div className="h-3 md:h-4 w-3 md:w-4 border-2 border-cyan-500 bg-zinc-800 rounded-full absolute -left-[20px] md:-left-[46px] top-2 md:top-1"></div>
                2023
            </h1>
            <div className="mb-8">
                <div className="flex flex-row space-x-2 items-start my-2">
                    <svg
                        stroke="currentColor"
                        fill="none"
                        stroke-width="1.5"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        className="text-cyan-500 mt-[3px] flex-shrink-0"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                    </svg>
                    <span className="text-zinc-400 text-sm md:text-base">
                        Climbed my first 7a (now to do it more consistenly)
                    </span>
                </div>
                <div className="flex flex-row space-x-2 items-start my-2">
                    <svg
                        stroke="currentColor"
                        fill="none"
                        stroke-width="1.5"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        className="text-cyan-500 mt-[3px] flex-shrink-0"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                    </svg>
                    <span className="text-zinc-400 text-sm md:text-base">
                        Visited Barcelona Spain
                    </span>
                </div>
                <div className="flex flex-row space-x-2 items-start my-2">
                    <svg
                        stroke="currentColor"
                        fill="none"
                        stroke-width="1.5"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        className="text-cyan-500 mt-[3px] flex-shrink-0"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                    </svg>
                    <span className="text-zinc-400 text-sm md:text-base">
                        Became a qualified trainer at work to assist new coming lab techs.
                    </span>
                </div>
                <div className="flex flex-row space-x-2 items-start my-2">
                    <svg
                        stroke="currentColor"
                        fill="none"
                        stroke-width="1.5"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        className="text-cyan-500 mt-[3px] flex-shrink-0"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                    </svg>
                    <span className="text-zinc-400 text-sm md:text-base">
                        Completed 2x Mudmasters(12k) and Viking run(13k).
                    </span>
                </div>
                <div className="flex flex-row space-x-2 items-start my-2">
                    <svg
                        stroke="currentColor"
                        fill="none"
                        stroke-width="1.5"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        className="text-cyan-500 mt-[3px] flex-shrink-0"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                    </svg>
                    <span className="text-zinc-400 text-sm md:text-base">
                        Started working at KitePharma.
                    </span>
                </div>
            </div>
        </div>
        <div className="border-b border-zinc-800">
            <h1 className="text-xl font-bold text-zinc-200 my-8 relative">
                <div className="h-3 md:h-4 w-3 md:w-4 border-2 border-cyan-500 bg-zinc-800 rounded-full absolute -left-[20px] md:-left-[46px] top-2 md:top-1"></div>
                2022
            </h1>
            <div className="mb-8">
                <div className="flex flex-row space-x-2 items-start my-2">
                    <svg
                        stroke="currentColor"
                        fill="none"
                        stroke-width="1.5"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        className="text-cyan-500 mt-[3px] flex-shrink-0"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                    </svg>
                    <span className="text-zinc-400 text-sm md:text-base">
                        Finished my tenure at Eurofins Clinical Diagnostics. (It was a good run and i enjoyed my there.)
                    </span>
                </div>
                <div className="flex flex-row space-x-2 items-start my-2">
                    <svg
                        stroke="currentColor"
                        fill="none"
                        stroke-width="1.5"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        className="text-cyan-500 mt-[3px] flex-shrink-0"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                    </svg>
                    <span className="text-zinc-400 text-sm md:text-base">
                        Ran my first half marathon. Now double it and give it to the next person.
                    </span>
                </div>
                <div className="flex flex-row space-x-2 items-start my-2">
                    <svg
                        stroke="currentColor"
                        fill="none"
                        stroke-width="1.5"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        className="text-cyan-500 mt-[3px] flex-shrink-0"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                    </svg>
                    <span className="text-zinc-400 text-sm md:text-base">
                        Started coding more passionately to automate processes at work.
                    </span>
                </div>
            </div>
        </div>
        <div className="border-b border-zinc-800">
            <h1 className="text-xl font-bold text-zinc-200 my-8 relative">
                <div className="h-3 md:h-4 w-3 md:w-4 border-2 border-cyan-500 bg-zinc-800 rounded-full absolute -left-[20px] md:-left-[46px] top-2 md:top-1"></div>
                2021
            </h1>
            <div className="mb-8">
                <div className="flex flex-row space-x-2 items-start my-2">
                    <svg
                        stroke="currentColor"
                        fill="none"
                        stroke-width="1.5"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        className="text-cyan-500 mt-[3px] flex-shrink-0"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                    </svg>
                    <span className="text-zinc-400 text-sm md:text-base">
                    Started working at Oxford Global Resources as a Lab Assistant.
                    </span>
                </div>
                <div className="flex flex-row space-x-2 items-start my-2">
                    <svg
                        stroke="currentColor"
                        fill="none"
                        stroke-width="1.5"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        className="text-cyan-500 mt-[3px] flex-shrink-0"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                    </svg>
                    <span className="text-zinc-400 text-sm md:text-base">
                        Sadly no travel this year.
                    </span>
                </div>
                <div className="flex flex-row space-x-2 items-start my-2">
                    <svg
                        stroke="currentColor"
                        fill="none"
                        stroke-width="1.5"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        className="text-cyan-500 mt-[3px] flex-shrink-0"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                    </svg>
                    <span className="text-zinc-400 text-sm md:text-base">
                    Did oddjobs during covid some notable ones are, construction, chef, call-center, Hardware store.
                    </span>
                </div>
            </div>
        </div>
        <div className="border-b border-zinc-800">
            <h1 className="text-xl font-bold text-zinc-200 my-8 relative">
                <div className="h-3 md:h-4 w-3 md:w-4 border-2 border-cyan-500 bg-zinc-800 rounded-full absolute -left-[20px] md:-left-[46px] top-2 md:top-1"></div>
                2020
            </h1>
            <div className="mb-8">
                <div className="flex flex-row space-x-2 items-start my-2">
                    <svg
                        stroke="currentColor"
                        fill="none"
                        stroke-width="1.5"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        className="text-cyan-500 mt-[3px] flex-shrink-0"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                    </svg>
                    <span className="text-zinc-400 text-sm md:text-base">
                        Visited Frankfurt, Berlin, Munich, Paris and Brussels
                    </span>
                </div>
                <div className="flex flex-row space-x-2 items-start my-2">
                    <svg
                        stroke="currentColor"
                        fill="none"
                        stroke-width="1.5"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        className="text-cyan-500 mt-[3px] flex-shrink-0"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                    </svg>
                    <span className="text-zinc-400 text-sm md:text-base">
                       Finished my Pre-Master and moved to the Hague.
                    </span>
                </div>
            </div>
        </div>
        <div className="border-b border-zinc-800">
            <h1 className="text-xl font-bold text-zinc-200 my-8 relative">
                <div className="h-3 md:h-4 w-3 md:w-4 border-2 border-cyan-500 bg-zinc-800 rounded-full absolute -left-[20px] md:-left-[46px] top-2 md:top-1"></div>
                2019
            </h1>
            <div className="mb-8">
                <div className="flex flex-row space-x-2 items-start my-2">
                    <svg
                        stroke="currentColor"
                        fill="none"
                        stroke-width="1.5"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        className="text-cyan-500 mt-[3px] flex-shrink-0"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                    </svg>
                    <span className="text-zinc-400 text-sm md:text-base">
                        Got introduced to coding started incorporating it more in my workflow.
                    </span>
                </div>
                <div className="flex flex-row space-x-2 items-start my-2">
                    <svg
                        stroke="currentColor"
                        fill="none"
                        stroke-width="1.5"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        className="text-cyan-500 mt-[3px] flex-shrink-0"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                    </svg>
                    <span className="text-zinc-400 text-sm md:text-base">
                        Started a Pre-Master in Health Sciences UT Twente
                    </span>
                </div>
                <div className="flex flex-row space-x-2 items-start my-2">
                    <svg
                        stroke="currentColor"
                        fill="none"
                        stroke-width="1.5"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        className="text-cyan-500 mt-[3px] flex-shrink-0"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                    </svg>
                    <span className="text-zinc-400 text-sm md:text-base">
                        Ended up falling into a comittee at school that helps expat students during their time in the Netherlands.
                    </span>
                </div>
            </div>
        </div>
        <div className="border-b border-zinc-800">
            <h1 className="text-xl font-bold text-zinc-200 my-8 relative">
                <div className="h-3 md:h-4 w-3 md:w-4 border-2 border-cyan-500 bg-zinc-800 rounded-full absolute -left-[20px] md:-left-[46px] top-2 md:top-1"></div>
                2018
            </h1>
            <div className="mb-8">
            <div className="flex flex-row space-x-2 items-start my-2">
                    <svg
                        stroke="currentColor"
                        fill="none"
                        stroke-width="1.5"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        className="text-cyan-500 mt-[3px] flex-shrink-0"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                    </svg>
                    <span className="text-zinc-400 text-sm md:text-base">
                        Finished my first Internship at the UMC got to work with some amazing people.
                    </span>
                </div>
            </div>

        </div>
        <div className="border-b border-zinc-800">
            <h1 className="text-xl font-bold text-zinc-200 my-8 relative">
                <div className="h-3 md:h-4 w-3 md:w-4 border-2 border-cyan-500 bg-zinc-800 rounded-full absolute -left-[20px] md:-left-[46px] top-2 md:top-1"></div>
                2017
            </h1>
            <div className="mb-8">
                <div className="flex flex-row space-x-2 items-start my-2">
                    <svg
                        stroke="currentColor"
                        fill="none"
                        stroke-width="1.5"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        className="text-cyan-500 mt-[3px] flex-shrink-0"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                    </svg>
                    <span className="text-zinc-400 text-sm md:text-base">
                        Travelled back to St. Maarten to help family and contribute to relief efforts after Irma.
                    </span>
                </div>
                <div className="flex flex-row space-x-2 items-start my-2">
                    <svg
                        stroke="currentColor"
                        fill="none"
                        stroke-width="1.5"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        className="text-cyan-500 mt-[3px] flex-shrink-0"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                    </svg>
                    <span className="text-zinc-400 text-sm md:text-base">
                        Attended the HU for Life Sciences 
                    </span>
                </div>         
            </div> 
        </div>
        <div className="border-b border-zinc-800">
            <h1 className="text-xl font-bold text-zinc-200 my-8 relative">
                <div className="h-3 md:h-4 w-3 md:w-4 border-2 border-cyan-500 bg-zinc-800 rounded-full absolute -left-[20px] md:-left-[46px] top-2 md:top-1"></div>
                2016
            </h1>
            <div className="mb-8">
                <div className="flex flex-row space-x-2 items-start my-2">
                    <svg
                        stroke="currentColor"
                        fill="none"
                        stroke-width="1.5"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        className="text-cyan-500 mt-[3px] flex-shrink-0"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                    </svg>
                    <span className="text-zinc-400 text-sm md:text-base">
                        Joined the UBV
                    </span>
                </div>
                <div className="flex flex-row space-x-2 items-start my-2">
                    <svg
                        stroke="currentColor"
                        fill="none"
                        stroke-width="1.5"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        className="text-cyan-500 mt-[3px] flex-shrink-0"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                    </svg>
                    <span className="text-zinc-400 text-sm md:text-base">
                        Attended UU for biology with a focus on genetics.
                    </span>
                </div>
                <div className="flex flex-row space-x-2 items-start my-2">
                    <svg
                        stroke="currentColor"
                        fill="none"
                        stroke-width="1.5"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        className="text-cyan-500 mt-[3px] flex-shrink-0"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                    </svg>
                    <span className="text-zinc-400 text-sm md:text-base">
                        Traveled to the Netherlands on a scholarship to start my University journey
                    </span>
                </div>        
            </div>  
        </div>
    </div>
</div>;

</motion.div>



    </main>
  );
}