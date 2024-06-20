"use client";

import Image from "next/image";
import DynamicUrl from "./DynamicUrl";

export default function Home() {
  const baseUrl = "";

  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl flex items-center justify-center text-black">
        <div className="flex justify-end w-1/2">
          <DynamicUrl baseUrl={baseUrl} />
        </div>
        <div className="flex justify-start w-1/2">
          <span>shahaayush1999</span>
        </div>
      </h1>
      <div className="social-links flex space-x-4 mt-4">
        {["Linkedin", "Github", "Twitter", "Instagram", "Facebook"].map((platform) => (
          <span
            key={platform}
            className="social-link cursor-pointer"
            onMouseEnter={() => document.getElementById('dynamic-url').innerText = `https://www.${platform.toLowerCase()}.com/`}
            onMouseLeave={() => document.getElementById('dynamic-url').innerText = ""}
          >
            {platform}
          </span>
        ))}
      </div>
    </main>
  );
}
