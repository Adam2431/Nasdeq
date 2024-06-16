import { getStocks } from "../actions/getStocks";

describe("getStocks", () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("should return data when fetch is successful", async () => {
    const mockResponse = {
      json: jest.fn().mockResolvedValue({ data: "mockData" }),
      ok: true,
    };
    (global.fetch as jest.Mock).mockResolvedValue(mockResponse);

    const result = await getStocks("AAPL");
    expect(result).toEqual({ data: "mockData" });
    expect(global.fetch).toHaveBeenCalledWith(
      "https://api.polygon.io/v3/reference/tickers?search=AAPL&active=true&limit=100&apiKey=48aLB9mDW6LLzX5bjQrHxac_D2UA5IwK"
    );
  });

  it("should return an error message when fetch fails with too many requests", async () => {
    const mockResponse = {
      ok: false,
    };
    (global.fetch as jest.Mock).mockResolvedValue(mockResponse);

    const result = await getStocks("AAPL");
    expect(result).toEqual({ error: "Too many requests!" });
    expect(global.fetch).toHaveBeenCalledWith(
      "https://api.polygon.io/v3/reference/tickers?search=AAPL&active=true&limit=100&apiKey=48aLB9mDW6LLzX5bjQrHxac_D2UA5IwK"
    );
  });

  it("should handle empty search string correctly", async () => {
    const mockResponse = {
      json: jest.fn().mockResolvedValue({ data: "mockData" }),
      ok: true,
    };
    (global.fetch as jest.Mock).mockResolvedValue(mockResponse);

    const result = await getStocks("");
    expect(result).toEqual({ data: "mockData" });
    expect(global.fetch).toHaveBeenCalledWith(
      "https://api.polygon.io/v3/reference/tickers?active=true&limit=100&apiKey=48aLB9mDW6LLzX5bjQrHxac_D2UA5IwK"
    );
  });
});
