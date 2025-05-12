"use client"
import Header from "@/components/Header";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import LoadingBar from "react-top-loading-bar";

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
  return (
    <>
      <LoadingBar
        color="#FE7743"
        progress={progress}
        height={3}
        shadow={true}
      />
      <Header />
      <div className="hidden mt-20 md:flex">
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
        </main>
      </div>
    </>
  );
}
