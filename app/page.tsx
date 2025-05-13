"use client";
import Header from "@/components/Header";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import LoadingBar from "react-top-loading-bar";
import { IoMdDownload } from "react-icons/io";
import Projects from "./Projects/Projects";
import QuotesScroller from "./Quotes/Quotes";
import { Button } from "@/components/ui/button";
import Interest from "./Interests/Interest";
import Publications from "./Publications/Publications";

export default function Home() {
  const [progress, setProgress] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const currentPosition = window.pageYOffset;
      const scrollPercentage = (currentPosition / totalHeight) * 100;
      setScrollPosition(scrollPercentage);
      setProgress(scrollPercentage);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    console.log("User scrolled to:", scrollPosition);
  }, [scrollPosition]);

  return (
    <>
      <LoadingBar
        color="#FE7743"
        progress={progress}
        height={3}
        shadow={true}
      />
      <Header />
      <div className="hidden mt-20 md:flex" id="#introduction">
        <main className="w-[50%] flex">
          <div className="flex flex-col w-full space-y-2 px-10">
            <div className="flex justify-start ml-15 w-full">
              <h2 className="text-5xl font-light dark-accent-color">Rana</h2>
            </div>
            <div className="flex justify-start w-full flex-col">
              <h1 className="lg:text-8xl font-light accent-color ml-15 italic md:text-6xl">
                Kaushikkumar
              </h1>
              <h3 className="text-4xl font-bold accent-color ml-15">
                Phd, Associate Professor
              </h3>
              <h4 className="text-2xl font-extralight dark-accent-color ml-15">
                LD College of Engineering
              </h4>
              <h4 className="text-2xl font-extralight dark-accent-color ml-15">
                Computer Department
              </h4>
            </div>
          </div>
        </main>
        <section className="w-[50%] flex justify-center">
          <Image
            src="/Kaushik's Image.png"
            width={350}
            height={100}
            alt="Kaushik's Image"
          />
        </section>
      </div>
      <div className="flex md:hidden flex-col">
        <section className="w-full flex mt-10 justify-center">
          <Image
            src="/Kaushik's Image.png"
            width={300}
            height={100}
            alt="Kaushik's Image"
          />
        </section>
        <main className="ml-6 mt-10">
          <h2 className="text-3xl font-light dark-accent-color">Rana</h2>
          <h1 className="font-light accent-color italic text-5xl">
            Kaushikkumar
          </h1>
          <h3 className="text-xl font-bold accent-color">
            Phd, Associate Professor
          </h3>
          <h4 className="text-lg font-extralight dark-accent-color">
            LD College of Engineering
          </h4>
          <h4 className="text-lg font-extralight dark-accent-color">
            Computer Department
          </h4>
        </main>
      </div>
      <div className="md:px-10">
        <h1 className="heading accent-color text-4xl md:ml-15 text-justify mt-5 ml-5">
          Introduction
        </h1>
        <p className="md:ml-15 md:mr-15 ml-5 mr-5">
          Dr. Kaushikkumar Rana is a highly qualified academician and educator
          of more than 19 years with a phenomenal expertise in over 10
          languages. He has an international outlook towards his work with a
          unique blend of global insight. Dr. Kaushikkumar has over 15 research
          publications to his credit and has successfully contributed to over 10
          high-profile projects across disciplines during his professional
          journey. His commitment to academic excellence, research, and
          multilingual education has placed him in a reputable position in
          national and international academic communities.
        </p>
      </div>
      <div className="md:ml-15 md:px-10 mt-10 ml-6">
        <table border={1}>
          <tbody>
            <tr>
              <td className="pr-5">
                <b>Languages</b>
              </td>
              <td>Python, C, C++, Java, Javascript</td>
            </tr>
            <tr>
              <td className="pr-5">
                <b>Interests</b>
              </td>
              <td>Machine Learning, Data Science, Software Testing, AI</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mt-5 md:ml-15 md:px-10 ml-6">
        <Button variant={"default"}>
          <IoMdDownload /> Download CV
        </Button>
      </div>
      <div className="mt-10">
        <hr className="w-full h-1 border-none bg-[#FE7743] my-4" />
        <QuotesScroller></QuotesScroller>
        <hr className="w-full h-1 border-none bg-[#FE7743] my-4" />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="interest">
        <Interest />
      </div>
      <div id="publications"><Publications /></div>
      <div className="h-[500px]"></div>
    </>
  );
}
