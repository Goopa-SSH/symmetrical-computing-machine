import { useState, useEffect, useCallback } from "react";
import type { CryptoPrice } from "../types";

const COINGECKO_API = "https://api.coingecko.com/api/v3";
const COINS = "bitcoin,ethereum,solana";
const POLL_INTERVAL = 60_000;

export function useCryptoPrices() {
  const [prices, setPrices] = useState<CryptoPrice[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  const fetchPrices = useCallback(async () => {
    try {
      const apiKey = import.meta.env.VITE_COINGECKO_API_KEY;
      const url = `${COINGECKO_API}/coins/markets?vs_currency=usd&ids=${COINS}&order=market_cap_desc&sparkline=true&price_change_percentage=24h${apiKey ? `&x_cg_demo_api_key=${apiKey}` : ''}`;
      
      const res = await fetch(url);
      if (!res.ok) throw new Error(`API error: ${res.status}`);
      const data: CryptoPrice[] = await res.json();
      setPrices(data);
      setError(null);
      setLastUpdated(new Date());
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch prices");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchPrices();
    const interval = setInterval(fetchPrices, POLL_INTERVAL);
    return () => clearInterval(interval);
  }, [fetchPrices]);

  return { prices, loading, error, lastUpdated, refetch: fetchPrices };
}