import React from "react";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

function Footer() {
  return (
    <>
      <div className="bg-[#efebe5] border-t-2 border-gray-900 h-1/2 w-full flex lg:flex-row md:flex-row flex-col justify-around items-start">
        <div className="p-5 ">
          <ul className="">
            <p className="text-gray-800 font-bold text-3xl pb-6">
              <span>
                <img
                  // src="https://flowbite.com/docs/images/logo.svg"
                  src="/images/sid-blog.png"
                  className=" h-40 w-60 object-cover"
                  alt="Student Integration Logo"
                  // width={50}
                />
              </span>
              {/* <span className="text-primary-600">S</span>tudent
              <span className="text-primary-600"> I</span>ntegration */}
            </p>
            <div className="flex gap-6 pb-5 ml-8">
              <Link href={"https://www.instagram.com/siddo.me"}>
                {" "}
                <FaInstagram className="text-4xl cursor-pointer text-primary-600" />
              </Link>
              {/* <FaInstagram className="text-4xl cursor-pointer text-pink-400" />
              <FaTwitter className="text-4xl cursor-pointer text-primary-500" /> */}
              <Link href={"https://www.linkedin.com/in/siddharth-sable"}>
                <FaLinkedin className="text-4xl cursor-pointer text-primary-600" />
              </Link>
              <Link href={`https://www.github.com/siddharth-sable`}>
                <FaGithub className="text-4xl cursor-pointer text-black-600" />
              </Link>
            </div>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-gray-800 font-bold text-2xl pb-4">
              Explore Blogs
            </p>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-primary-600 cursor-pointer">
              Blog #1
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-primary-600 cursor-pointer">
              Blog #2
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-primary-600 cursor-pointer">
              Blog #3
            </li>
          </ul>
        </div>

        <div className="p-5">
          <ul>
            <p className="text-gray-800 font-bold text-2xl pb-4">About me</p>

            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-primary-600 cursor-pointer">
              Get in touch via{"  "}
              <Link
                href={"mailto:siddharth.sable4618@gmail.com"}
                target={"_blank"}
              >
                <code className="text-blue-600">mail</code>
              </Link>
            </li>

            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-primary-600 cursor-pointer ">
              More info at{" "}
              <Link href={"https://siddo.me"} target={"_blank"}>
                <code className="text-blue-600">siddo.me</code>
              </Link>
            </li>

            {/* <Link href="/apply">
              <li className="text-gray-500 text-md pb-2 font-semibold hover:text-primary-600 cursor-pointer">
                Apply for Universities
              </li>
            </Link> */}
            {/* <li className="text-gray-500 text-md pb-2 font-semibold hover:text-primary-600 cursor-pointer">
              Downloads & Resources
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-primary-600 cursor-pointer">
              Videos
            </li> */}
          </ul>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center text-center  p-5 bg-[#efebe5]">
        <h1 className=" text-gray-800 font-semibold text-xl">
          © 2023 Blogs by Siddharth. All rights reserved.{" "}
          <span className="hover:text-primary-600 font-semibold cursor-pointer">
            {" "}
          </span>
        </h1>
      </div>
    </>
  );
}

export default Footer;
