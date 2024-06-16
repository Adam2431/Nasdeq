import Image from "next/image";
import StockBox from "../StockBox";
import { getStocks } from "../actions/getStocks";

export default async function Stocks({
  searchParams,
}: {
  searchParams?: { [q: string]: string };
}) {
  const res = await getStocks(searchParams?.q || "");
  return (
    <div className="min-w-full bg-[#1f202f] dark flex min-h-screen flex-col">
      <nav className="flex items-center justify-between w-full px-5 pb-1 pt-10">
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
        <StockBox stocks={res.error ? [] : res.results} error={res.error} />
      </div>
    </div>
  );
}
