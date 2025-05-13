"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Experience() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // ms
      once: true, // animate only once
    });
  }, []);

  return (
    <>
      <div>
        <h1 className="heading text-3xl md:text-4xl accent-color ml-6 md:px-10 md:ml-15">
          Experience
        </h1>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center mt-10 gap-6 px-4">
        <div
          data-aos="fade-right"
          className="md:w-1/3 p-6 w-[90%] h-[200px] bg-[#fefefe] rounded-lg flex justify-center flex-col shadow text-center"
        >
          <h2 className="text-md font-bold mb-2">
            Shri U. V. Patel College of Engineering
          </h2>
          <p>July 2006- April 2011</p>
          <b className="mt-1">Lecturer</b>
        </div>

        <div
          data-aos="flip-up"
          className="md:w-1/3 p-6 w-[90%] h-[200px] bg-[#fefefe] rounded-lg flex justify-center flex-col shadow text-center"
        >
          <h2 className="text-md font-bold mb-2">
            Vishwakarma Government Engineering College
          </h2>
          <p>May 2011 - April 2025</p>
          <b className="mt-1">Assistant Professor</b>
        </div>
        <div
          data-aos="fade-left"
          className="md:w-1/3 p-6 w-[90%] h-[200px] bg-[#fefefe] rounded-lg flex justify-center flex-col shadow text-center"
        >
          <h2 className="text-md font-bold mb-2">LD College of Eningeering</h2>
          <p>May 2025 - Now</p>
          <b className="mt-1">Associate Professor</b>
        </div>
      </div>
    </>
  );
}
