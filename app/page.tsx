import Image from "next/image";
import { getStocks } from "./actions/getStocks";
import StockBox from "./StockBox";

export default async function Home() {
  return (
    <main className="dark flex min-h-screen flex-col items-center justify-between bg-[#1f202f] min-w-full">
      <div className="min-w-full">
        <nav className="flex items-center justify-between w-full px-5 pb-1 pt-10 bg-[#191a28]">
          <Image
            src="/nasdeq.png"
            alt="Nasdeq"
            width={125}
            height={125}
            className="mb-4"
          />
        </nav>
        <div className="p-5">
          <div>
            <h1 className="text-3xl font-bold text-white text-center">
              Welcome to Nasdeq
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
