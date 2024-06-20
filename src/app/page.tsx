"use client";

import Image from "next/image";
import DynamicUrl from "./DynamicUrl";
import "../styles/waves.css"; // Import the waves CSS

export default function Home() {
  const baseUrl = "";

  return (
    <main className="flex flex-col items-center justify-center min-h-screen relative">
      <div className="wave"></div>
      <div className="wave"></div>
      <div className="wave"></div>
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
            onMouseEnter={() => {
              const dynamicUrlElement = document.getElementById('dynamic-url');
              if (dynamicUrlElement) {
                dynamicUrlElement.innerText = `https://www.${platform.toLowerCase()}.com/`;
              }
            }}
            onMouseLeave={() => {
              const dynamicUrlElement = document.getElementById('dynamic-url');
              if (dynamicUrlElement) {
                dynamicUrlElement.innerText = "";
              }
            }}
          >
            {platform}
          </span>
        ))}
      </div>
    </main>
  );
}
