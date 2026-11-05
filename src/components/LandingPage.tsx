import { Link } from "react-router-dom";
import {
  ArrowRight,
  BarChart3,
  Sparkles,
  Rocket,
  ChevronDown,
} from "lucide-react";
import SkillsSection from "./SkillsSection";
import ContactSection from "./ContactSection";

export default function LandingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-[128px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-[128px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[200px]" />
        </div>

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "64px 64px",
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
            <Sparkles className="w-4 h-4 text-sky-400" />
            <span className="text-sm text-gray-400">
              Développeur Fullstack Web3 & Automatisation
            </span>
          </div>

          {/* Name */}
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight">
            <span className="text-white">Hamady</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Je conçois des applications{" "}
            <span className="text-sky-400 font-medium">Web3</span>,
            des dashboards{" "}
            <span className="text-violet-400 font-medium">crypto</span> et des
            systèmes d&apos;
            <span className="text-emerald-400 font-medium">automatisation</span>{" "}
            sur mesure pour les entreprises et startups du monde entier.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/dashboard"
              className="group px-8 py-4 rounded-xl bg-gradient-to-r from-sky-500 to-violet-600 text-white font-semibold text-lg hover:from-sky-400 hover:to-violet-500 transition-all shadow-lg shadow-sky-500/25 flex items-center gap-2"
            >
              <BarChart3 className="w-5 h-5" />
              Voir le Dashboard
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="#skills"
              className="px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-gray-300 font-semibold text-lg hover:bg-white/10 hover:text-white transition-all flex items-center gap-2"
            >
              <Rocket className="w-5 h-5" />
              Mes Compétences
            </a>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-3 gap-8 max-w-xl mx-auto">
            {[
              { label: "Projets Web3", value: "20+" },
              { label: "Clients", value: "15+" },
              { label: "Automations", value: "50+" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl font-bold gradient-text">{stat.value}</p>
                <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Scroll indicator */}
          <div className="mt-16 animate-bounce">
            <ChevronDown className="w-6 h-6 text-gray-600 mx-auto" />
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-wider text-sky-400 mb-3">
              Démo Live
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Ce que je construis
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "📊",
                title: "Dashboards Crypto",
                desc: "Tableaux de bord en temps réel avec données de marché, graphiques et alertes personnalisées.",
              },
              {
                icon: "🔗",
                title: "Smart Contracts",
                desc: "Développement et audit de smart contracts Solidity — DeFi, NFT, DAO, tokenisation.",
              },
              {
                icon: "⚡",
                title: "Automatisation",
                desc: "Workflows n8n/Make, bots Telegram, intégrations API et pipelines de données automatisés.",
              },
            ].map((feat) => (
              <div
                key={feat.title}
                className="glass-card p-8 text-center hover:bg-white/[0.08] transition-all group"
              >
                <div className="text-4xl mb-4">{feat.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feat.title}
                </h3>
                <p className="text-gray-500 leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SkillsSection />
      <ContactSection />
    </>
  );
}
