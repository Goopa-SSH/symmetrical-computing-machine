import { TrendingUp, TrendingDown } from "lucide-react";
import type { CryptoPrice } from "../types";

function MiniChart({ data, positive }: { data: number[]; positive: boolean }) {
  if (!data || data.length < 2) return null;
  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;
  const w = 120;
  const h = 40;
  const points = data
    .map((v, i) => {
      const x = (i / (data.length - 1)) * w;
      const y = h - ((v - min) / range) * h;
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-10 mt-2">
      <polyline
        fill="none"
        stroke={positive ? "#22c55e" : "#ef4444"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        points={points}
      />
    </svg>
  );
}

function formatUSD(n: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: n >= 1 ? 2 : 4,
    maximumFractionDigits: n >= 1 ? 2 : 6,
  }).format(n);
}

function formatLargeNumber(n: number): string {
  if (n >= 1e12) return `$${(n / 1e12).toFixed(2)}T`;
  if (n >= 1e9) return `$${(n / 1e9).toFixed(2)}B`;
  if (n >= 1e6) return `$${(n / 1e6).toFixed(2)}M`;
  return formatUSD(n);
}

export default function PriceCard({ coin }: { coin: CryptoPrice }) {
  const positive = coin.price_change_percentage_24h >= 0;
  return (
    <div className="glass-card p-6 hover:bg-white/[0.08] transition-all group hover:glow" translate="no">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <img
            src={coin.image}
            alt={coin.name}
            className="w-10 h-10 rounded-full ring-2 ring-white/10"
          />
          <div>
            <h3 className="font-semibold text-white"><span>{coin.name}</span></h3>
            <p className="text-xs text-gray-500 uppercase font-mono">
              <span>{coin.symbol}</span>
            </p>
          </div>
        </div>
        <div
          className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold ${
            positive
              ? "bg-green-500/15 text-green-400"
              : "bg-red-500/15 text-red-400"
          }`}
        >
          {positive ? (
            <TrendingUp className="w-3 h-3" />
          ) : (
            <TrendingDown className="w-3 h-3" />
          )}
          <span>{Math.abs(coin.price_change_percentage_24h).toFixed(2)}%</span>
        </div>
      </div>

      <div className="mt-4">
        <p className="text-2xl font-bold text-white font-mono">
          <span>{formatUSD(coin.current_price)}</span>
        </p>
      </div>

      {coin.sparkline_in_7d && (
        <MiniChart
          data={coin.sparkline_in_7d.price}
          positive={positive}
        />
      )}

      <div className="mt-4 pt-4 border-t border-white/5 grid grid-cols-2 gap-4 text-xs">
        <div>
          <p className="text-gray-500"><span>Market Cap</span></p>
          <p className="text-gray-300 font-medium font-mono">
            <span>{formatLargeNumber(coin.market_cap)}</span>
          </p>
        </div>
        <div>
          <p className="text-gray-500"><span>Volume 24h</span></p>
          <p className="text-gray-300 font-medium font-mono">
            <span>{formatLargeNumber(coin.total_volume)}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
