import {
  Code2,
  Database,
  Globe,
  Cpu,
  Blocks,
  Zap,
  GitBranch,
  Shield,
} from "lucide-react";

const skills = [
  {
    icon: Blocks,
    title: "Web3 & Blockchain",
    items: ["Solidity", "Ethers.js", "Hardhat", "Smart Contracts"],
    gradient: "from-violet-500 to-purple-600",
  },
  {
    icon: Code2,
    title: "Frontend",
    items: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
    gradient: "from-sky-500 to-blue-600",
  },
  {
    icon: Database,
    title: "Backend",
    items: ["Node.js", "Express", "PostgreSQL", "Prisma"],
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    icon: Zap,
    title: "Automatisation",
    items: ["n8n", "Make", "API REST", "Webhooks"],
    gradient: "from-amber-500 to-orange-600",
  },
  {
    icon: Globe,
    title: "Déploiement",
    items: ["Cloudflare", "Vercel", "Docker", "CI/CD"],
    gradient: "from-pink-500 to-rose-600",
  },
  {
    icon: Shield,
    title: "Sécurité & Auth",
    items: ["JWT", "OAuth 2.0", "Wallet Connect", "RBAC"],
    gradient: "from-cyan-500 to-sky-600",
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-sky-400 mb-3">
            Stack Technique
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Compétences & Technologies
          </h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            Un stack moderne orienté performance, sécurité et scalabilité pour
            vos projets Web3 et automatisation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="glass-card p-6 group hover:bg-white/[0.08] transition-all"
            >
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${skill.gradient} flex items-center justify-center mb-4 group-hover:shadow-lg transition-shadow`}
              >
                <skill.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">
                {skill.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-gray-400 border border-white/5"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
