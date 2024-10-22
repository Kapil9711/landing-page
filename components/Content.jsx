"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Expo } from "gsap";
import Link from "next/link";

const Content = () => {
  useGSAP(() => {
    gsap.from(".content", {
      delay: 2.3,
      duration: 2,
      y: 10,
      opacity: 0,
      ease: Expo.easeInOut,
    });

    gsap.from(".content p", {
      delay: 2.4,
      duration: 2,
      y: 30,
      opacity: 0,
      ease: Expo.easeInOut,
    });

    gsap.from(".content button", {
      delay: 2.6,
      duration: 2,
      y: 30,
      opacity: 0,
      ease: Expo.easeInOut,
    });
  });
  return (
    <section className="z-30  content border-2 border-orange-500 px-2 py-4 absolute right-0 bottom-1 sm:bottom-12 sm:w-5/12 ">
      <p className="sm:leading-7 text-sm  sm:text-lg">
        Welcome to Listify, your ultimate companion for staying organized and
        productive! We understand that managing tasks, projects, and daily
        activities can be overwhelming, which is why we created this platform to
        help you streamline your life and achieve your goals with ease.
      </p>
      <button>
        <Link
          className="inline-block mt-4 text-2xl hover:bg-orange-600   bg-orange-500  py-4 px-10  text-white"
          href={"./tasks"}
        >
          Get Started
        </Link>
      </button>
    </section>
  );
};

export default Content;
