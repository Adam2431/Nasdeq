import { Avatar } from "@nextui-org/avatar";

export default function StockCard({ stock }: { stock: stock }) {
  return (
    <div>
      <div className="flex flex-col items-center justify-center rounded-xl bg-[#232639] p-4 min-h-40">
        <Avatar radius="full" name={stock.ticker} />
        <h1 className="pb-1 pt-2 text-lg font-bold">{stock.ticker}</h1>
        <p className="pb-1 text-sm text-gray-500 overflow-hidden text-center max-h-11">
          {stock.name}
        </p>
      </div>
    </div>
  );
}
