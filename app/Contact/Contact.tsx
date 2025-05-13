import React from "react";
import { FaBirthdayCake } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaMale } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationArrow } from "react-icons/fa6";

const Contact = () => {
  return (
    <>
      <div className="flex">
        <div className="mt-10 md:px-10 md:ml-15 ml-6 w-1/2">
          <h1 className="text-3xl md:text-4xl heading accent-color">
            Contact Info
          </h1>
          <div className="mt-5">
            <h2 className="dark-accent-color text-xl md:text-2xl">
              Personal Info:
            </h2>
            <div>
              <div className="mt-3 flex gap-2">
                <div className="bg-[#fefefe] w-[50px] h-[50px] rounded-lg flex items-center justify-center">
                  <FaBirthdayCake className="text-2xl" />
                </div>
                <div className="flex justify-center h-[50px] items-center">
                  <span className="text-xl heading">
                    29<sup>th</sup> November 1978
                  </span>
                </div>
              </div>
              <div className="mt-3 flex gap-2">
                <div className="bg-[#fefefe] w-[50px] h-[50px] rounded-lg flex items-center justify-center">
                  <FaMale className="text-2xl" />
                </div>
                <div className="flex justify-center h-[50px] items-center">
                  <span className="text-xl heading">Male</span>
                </div>
              </div>
              <div className="mt-3 flex gap-2">
                <div className="bg-[#fefefe] w-[50px] h-[50px] rounded-lg flex items-center justify-center">
                  <FaLocationArrow className="text-2xl" />
                </div>
                <div className="flex justify-center h-[50px] items-center">
                  <span className="text-xl heading">
                    13863 80A Avenue, Surrey, BC V3W 8V8 Canada
                  </span>
                </div>
              </div>
            </div>
            <h2 className="dark-accent-color text-xl md:text-2xl">
              Contact Info:
            </h2>
            <div>
              <div className="mt-3 flex gap-2">
                <div className="bg-[#fefefe] w-[50px] h-[50px] rounded-lg flex items-center justify-center">
                  <FaPhoneAlt className="text-2xl" />
                </div>
                <div className="flex justify-center h-[50px] items-center">
                  <span className="text-xl heading">+1 (778) 717-7675</span>
                </div>
              </div>
              <div className="mt-3 flex gap-2">
                <div className="bg-[#fefefe] w-[50px] h-[50px] rounded-lg flex items-center justify-center">
                  <MdEmail className="text-2xl" />
                </div>
                <div className="flex justify-center h-[50px] items-center">
                  <span className="text-xl heading">
                    kaushikrana874@gmail.com
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2 mt-[200px]">
            <h1 className="text-5xl heading dark-accent-color">
                Get in touch with 
                <br />
                Dr. Kaushikkumar Rana
            </h1>
        </div>
      </div>
    </>
  );
};

export default Contact;
