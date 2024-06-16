"use client";

import { Input } from "@nextui-org/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { SearchIcon } from "./SearchIcon";
import { getStocks } from "./actions/getStocks";
import { useEffect, useState } from "react";
import StockCard from "./StockCard";

export default function StockBox(props: { stocks: stock[]; error: boolean }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const { stocks, error } = props;

  const searchFunc = (value: string) => {
    // now you got a read/write object
    const current = new URLSearchParams(Array.from(searchParams.entries())); // -> has to use this form

    if (!value) {
      current.delete("q");
    } else {
      current.set("q", value);
    }
    // cast to string
    const search = current.toString();
    // or const query = `${'?'.repeat(search.length && 1)}${search}`;
    const query = search ? `?${search}` : "";

    router.push(`${pathname}${query}`);
  };
  const [search, setSearch] = useState("");

  function handleKeyDown(event: { keyCode: number }) {
    if (event.keyCode === 13) {
      searchFunc(search);
    }
  }

  return (
    <div>
      <div className="rounded-full flex justify-center items-center text-white py-6">
        <Input
          label="Search"
          onKeyDown={(e) => {
            handleKeyDown(e);
          }}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          isClearable
          radius="full"
          classNames={{
            label: "text-black/50 dark:text-white/90",
            input: [
              "bg-transparent",
              "text-white/90 dark:text-white/90",
              "placeholder:text-default-700/50 dark:placeholder:text-white/60",
            ],
            innerWrapper: "bg-transparent",
            inputWrapper: [
              "shadow-xl",
              "bg-default-200/50",
              "dark:bg-[#232639]",
              "backdrop-blur-xl",
              "backdrop-saturate-200",
              "hover:bg-default-200/70",
              "dark:hover:bg-[#232639]",
              "group-data-[focus=true]:bg-default-200/50",
              "dark:group-data-[focus=true]:bg-[#232639]",
              "!cursor-text",
            ],
          }}
          placeholder="Type to search..."
          startContent={
            <SearchIcon className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
          }
        />
      </div>
      <div className="grid gap-6 grid-cols-1 min-[375px]:grid-cols-2 xl:grid-cols-3 h-full">
        {stocks.map((stock, index) => (
          <StockCard stock={stock} key={index} />
        ))}
      </div>
      {stocks?.length === 0 && !error && (
        <div className="text-center py-9">
          <h1 className="text-2xl font-semibold">No stocks are available</h1>
        </div>
      )}

      {error && (
        <div className="text-center py-9">
          <h1 className="text-2xl font-semibold text-red-600">
            Too many requests! Please try again in a minute!
          </h1>
        </div>
      )}
    </div>
  );
}
