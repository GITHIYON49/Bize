import React from "react";
import { Instagram, Facebook, X, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <>
      <footer className=" text-white flex flex-col items-center relative md:mt-40">
        <div className="w-full md:w-11/12 h-auto bg-gray-100 md:absolute md:-top-36 text-black flex flex-col lg:flex-row items-center justify-evenly py-10">
          <p className="w-4/5 md:w-3/5 text-center lg:text-start lg:w-2/5 text-xl lg:text-2xl xl:text-3xl font-extralight p-4">
            Get Updates And Stay Connected -Subscribe To Our Newsletter
          </p>
          <form
            action=""
            className="w-11/12 sm:w-4/5 lg:w-2/5 flex flex-col md:flex-row items-center justify-center gap-5"
          >
            <input
              className="w-full md:w-3/5 p-2 border-2 border-gray-300 bg-gray-100 placeholder:text-gray-400"
              type="text"
              placeholder="Email"
            />
            <button
              type="button"
              className="w-full md:w-1/3 py-2 rounded-xs bg-blue-950 capitalize text-base text-white"
            >
              Subscribe
            </button>
          </form>
        </div>
        <div className="h-auto w-full bg-blue-950" >
          <div className="w-full flex items-center justify-start pt-5 md:pt-20  pb-5">
            <div className="w-full lg:w-4/5 flex flex-col items-center justify-center lg:flex-row lg:items-end lg:justify-around mb-5 gap-10">
              <div className="w-28 h-28 md:w-36 md:h-36">
                <img
                  className="w-full h-full object-cover"
                  src="https://biz-excellence.net/wp-content/uploads/2024/08/Add-a-subheading-1.png"
                  alt="logo"
                />
              </div>
              <div className="w-full lg:w-2/5 flex flex-col gap-10 lg:flex-row items-center justify-center lg:justify-between">
                <div className="flex flex-col items-center lg:items-start justify-center gap-5 lg:gap-6 text-base">
                  <h6 className="uppercase text-gray-400 font-semibold">
                    Contact Information
                  </h6>
                  <ul className="flex text-center lg:text-start flex-col gap-1">
                    <li>Phone: +971 56 406 1611</li>
                    <li>Mail: getintouch@biz-excellence.net</li>
                    <li>Address: Dubai, UAE</li>
                  </ul>
                </div>
                <div className="flex flex-col items-center lg:items-start justify-center gap-5 lg:gap-6 text-base">
                  <h6 className="uppercase text-gray-400 font-semibold">
                    company
                  </h6>
                  <ul className="flex flex-col text-center md:text-start gap-1">
                    <li>About</li>
                    <li>Register</li>
                    <li>Contact</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="w-11/12 mx-auto flex items-center flex-col gap-5 md:gap-0 md:flex-row justify-between px-5 pb-2">
            <span className="inline-block text-xs text-gray-500">
              &copy; 2024 All rights Reserved. Powered by{" "}
              <span className="text-white">Toshiba</span>
            </span>
            <ul className="flex items-center gap-5 text-gray-500">
              <li className="w-4 h-4">
                <Linkedin className="w-full h-full" />
              </li>
              <li className="w-4 h-4">
                <Facebook className="w-full h-full" />
              </li>
              <li className="w-4 h-4">
                <X className="w-full h-full" />
              </li>
              <li className="w-4 h-4">
                <Instagram className="w-full h-full" />
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
