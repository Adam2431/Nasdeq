"use client";
import Image from "next/image";
import StockBox from "./StockBox";
import { useState } from "react";

export default async function Home() {
  const [splash, setSplash] = useState(true);

  return (
    <main
      className="dark flex min-h-screen flex-col items-center justify-between bg-[#1f202f] min-w-full"
      onClick={() => {
        setSplash(false);
      }}
    >
      <div className={`${splash ? "block" : "hidden"}`}>
        <div className="w-full">
          <div className="flex flex-col h-screen items-center justify-center">
            <Image
              src="/nasdeq.png"
              alt="Nasdeq"
              width={300}
              height={300}
              className="mt-auto"
            />
            <div className="w-full justify-center items-center text-center text-lg text-slate-500">
              Tap to continue
            </div>
            <div className="w-full text-center text-2xl mt-auto mb-5">Adam Samy</div>
          </div>
        </div>
      </div>
      <div className={`min-w-full ${splash ? "hidden" : "block"}`}>
        <nav className="flex items-center justify-between w-full px-5 pb-1 pt-10 bg-[#191a28]">
          <Image
            src="/nasdeq.png"
            alt="Nasdaq"
            width={125}
            height={125}
            className="mb-4"
          />
        </nav>
        <div className="p-5">
          <div>
            <h1 className="text-3xl font-bold text-white text-center">
              Welcome to Nasdaq
            </h1>
            <p className="text-lg text-gray-400 text-center">
              The best place to find stocks
            </p>
          </div>
          <StockBox />
        </div>
      </div>
    </main>
  );
}
