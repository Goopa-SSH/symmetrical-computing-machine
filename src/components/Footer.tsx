import { Heart, Github, Wallet } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Wallet className="w-5 h-5 text-sky-500" />
          <span className="text-sm text-gray-500">
            © {new Date().getFullYear()} Hamady — Développeur Web3
          </span>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/Goopa023"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-white transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
          <span className="text-xs text-gray-700 flex items-center gap-1">
            Built with <Heart className="w-3 h-3 text-red-500" /> React &
            Tailwind
          </span>
        </div>
      </div>
    </footer>
  );
}
