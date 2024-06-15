"use server";

export async function getStocks(search: string) {
  const res = await fetch(
    `https://api.polygon.io/v3/reference/tickers?${
      search.length == 0 ? "" : "search=" + search + "&"
    }active=true&limit=100&apiKey=48aLB9mDW6LLzX5bjQrHxac_D2UA5IwK`
  );
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    console.error(res.body);
  }
  return res.json();
}
