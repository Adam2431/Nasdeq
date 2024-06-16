"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Loading from "./loading";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    function redirectToStocks() {
      router.push("/stocks");
    }
    setTimeout(redirectToStocks, 1500);
  }, []);

  return (
    <main className="dark flex min-h-screen flex-col items-center justify-between bg-[#1f202f] min-w-full">
      <div>
        <div className="w-full flex flex-col h-screen items-center justify-center">
          <div className="mt-auto">
            <Image src="/nasdeq.png" alt="Nasdeq" width={300} height={300} />
            <Loading />
          </div>
          <div className="w-full text-center text-2xl mb-5 mt-auto">
            Adam Samy
          </div>
        </div>
      </div>
    </main>
  );
}
