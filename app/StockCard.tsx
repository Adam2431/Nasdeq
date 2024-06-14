export default function StockCard({ stock }: { stock: stock }) {
  return (
    <div>
      <div className="flex flex-col items-center justify-center rounded-lg bg-[#232639]">
        <h1 className="text-2xl font-bold">{stock.name}</h1>
        <p className="text-sm text-gray-500">{stock.ticker}</p>
      </div>
    </div>
  );
}
