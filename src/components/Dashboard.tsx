import { RefreshCw, Activity, AlertCircle, Loader2 } from "lucide-react";
import { useCryptoPrices } from "../hooks/useCryptoPrices";
import PriceCard from "./PriceCard";
import PortfolioSimulator from "./PortfolioSimulator";

export default function Dashboard() {
  const { prices, loading, error, lastUpdated, refetch } = useCryptoPrices();

  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" translate="no">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs text-green-400 font-medium uppercase tracking-wider">
              <span>Live Market Data</span>
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            <span>Crypto Dashboard</span>
          </h1>
          <p className="mt-1 text-gray-500">
            <span>Prix en direct via CoinGecko API • Mise à jour auto toutes les 60s</span>
          </p>
        </div>

        <div className="flex items-center gap-3">
          {lastUpdated && (
            <span className="text-xs text-gray-600 font-mono">
              <span>{lastUpdated.toLocaleTimeString("fr-FR")}</span>
            </span>
          )}
          <button
            onClick={refetch}
            disabled={loading}
            className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all disabled:opacity-50"
            title="Rafraîchir"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
          </button>
        </div>
      </div>

      {error && (
        <div className="mb-8 p-4 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center gap-3">
          <AlertCircle className="w-5 h-5 text-red-400 shrink-0" />
          <div>
            <p className="text-sm text-red-300 font-medium">
              <span>Erreur de chargement</span>
            </p>
            <p className="text-xs text-red-400/70"><span>{error}</span></p>
          </div>
        </div>
      )}

      {loading && prices.length === 0 && (
        <div className="flex flex-col items-center justify-center py-24 gap-4">
          <Loader2 className="w-8 h-8 text-sky-500 animate-spin" />
          <p className="text-gray-500 text-sm">
            <span>Chargement des prix en cours...</span>
          </p>
        </div>
      )}

      {prices.length > 0 && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {prices.map((coin) => (
              <PriceCard key={coin.id} coin={coin} />
            ))}
          </div>
          <PortfolioSimulator prices={prices} />
        </>
      )}
    </section>
  );
}
