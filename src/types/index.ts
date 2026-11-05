export interface CryptoPrice {
  id: string;
  symbol: string;
  name: string;
  current_price: number;
  price_change_percentage_24h: number;
  market_cap: number;
  total_volume: number;
  image: string;
  sparkline_in_7d?: { price: number[] };
}

export interface PortfolioHolding {
  coinId: string;
  symbol: string;
  name: string;
  amount: number;
  image: string;
}
