import Image from "next/image";
import StockCard from "./StockCard";

export default async function Home() {
  async function getData() {
    "use server";
    const res = await fetch(
      "https://api.polygon.io/v3/reference/tickers?market=stocks&active=true&limit=100&apiKey=48aLB9mDW6LLzX5bjQrHxac_D2UA5IwK"
    );
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch data");
    }

    return res.json();
  }
  const stocks: stock[] = (await getData()).results;
  console.log(stocks);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-[#1f202f]">
      <div className="@container">
        {stocks?.length === 0 && (
          <div className="text-center py-9">
            <h1 className="text-2xl font-semibold">No stocks are available</h1>
          </div>
        )}
        <div className="py-9 grid gap-6 grid-cols-1 @[680px]:grid-cols-2 @[1050px]:grid-cols-3">
          {stocks.map((stock, index) => (
            <StockCard stock={stock} key={index} />
          ))}
        </div>
      </div>
    </main>
  );
}
