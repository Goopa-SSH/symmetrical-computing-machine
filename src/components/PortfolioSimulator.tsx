import { useState, useMemo } from "react";
import { Calculator, Coins, DollarSign, PieChart } from "lucide-react";
import type { CryptoPrice, PortfolioHolding } from "../types";

function formatUSD(n: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(n);
}

const COIN_COLORS: Record<string, string> = {
  bitcoin: "from-amber-500 to-orange-600",
  ethereum: "from-indigo-400 to-blue-600",
  solana: "from-purple-400 to-fuchsia-600",
};

const COIN_BG_COLORS: Record<string, string> = {
  bitcoin: "bg-amber-500/10 border-amber-500/20",
  ethereum: "bg-indigo-500/10 border-indigo-500/20",
  solana: "bg-purple-500/10 border-purple-500/20",
};

export default function PortfolioSimulator({
  prices,
}: {
  prices: CryptoPrice[];
}) {
  const [holdings, setHoldings] = useState<Record<string, number>>({
    bitcoin: 0,
    ethereum: 0,
    solana: 0,
  });

  const updateHolding = (coinId: string, value: string) => {
    const num = parseFloat(value);
    setHoldings((prev) => ({ ...prev, [coinId]: isNaN(num) ? 0 : num }));
  };

  const portfolio = useMemo(() => {
    return prices.map((coin) => {
      const amount = holdings[coin.id] || 0;
      const value = amount * coin.current_price;
      return { ...coin, amount, value };
    });
  }, [prices, holdings]);

  const totalValue = portfolio.reduce((sum, p) => sum + p.value, 0);

  return (
    <div className="mt-12">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-600 flex items-center justify-center">
          <Calculator className="w-5 h-5 text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-white">
            Portfolio Simulator
          </h2>
          <p className="text-sm text-gray-500">
            Entrez vos quantités pour voir la valeur en temps réel
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {prices.map((coin) => (
          <div
            key={coin.id}
            className={`glass-card p-6 border ${COIN_BG_COLORS[coin.id] || "border-white/10"}`}
          >
            <div className="flex items-center gap-3 mb-4">
              <img
                src={coin.image}
                alt={coin.name}
                className="w-8 h-8 rounded-full"
              />
              <div>
                <p className="font-semibold text-white">{coin.name}</p>
                <p className="text-xs text-gray-500 font-mono uppercase">
                  {formatUSD(coin.current_price)} / {coin.symbol}
                </p>
              </div>
            </div>

            <div className="relative">
              <Coins className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
              <input
                type="number"
                min="0"
                step="any"
                placeholder="0.00"
                value={holdings[coin.id] || ""}
                onChange={(e) => updateHolding(coin.id, e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-600 font-mono focus:outline-none focus:border-sky-500/50 focus:ring-1 focus:ring-sky-500/25 transition-all"
              />
            </div>

            <div className="mt-4 flex items-center justify-between">
              <span className="text-xs text-gray-500">Valeur</span>
              <span className="text-lg font-bold font-mono text-white">
                {formatUSD((holdings[coin.id] || 0) * coin.current_price)}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Total Value Card */}
      <div className="mt-8 glass-card p-8 glow relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-sky-500/5 via-violet-500/5 to-fuchsia-500/5" />
        <div className="relative flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-sky-500 to-violet-600 flex items-center justify-center shadow-lg shadow-sky-500/25">
              <PieChart className="w-7 h-7 text-white" />
            </div>
            <div>
              <p className="text-sm text-gray-400 font-medium">
                Valeur Totale du Portefeuille
              </p>
              <p className="text-4xl font-bold font-mono gradient-text">
                {formatUSD(totalValue)}
              </p>
            </div>
          </div>

          {totalValue > 0 && (
            <div className="flex gap-3">
              {portfolio
                .filter((p) => p.value > 0)
                .map((p) => {
                  const pct = ((p.value / totalValue) * 100).toFixed(1);
                  return (
                    <div
                      key={p.id}
                      className="text-center px-4 py-2 rounded-xl bg-white/5"
                    >
                      <p className="text-xs text-gray-500 uppercase font-mono">
                        {p.symbol}
                      </p>
                      <p className="text-sm font-bold text-white">{pct}%</p>
                    </div>
                  );
                })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
