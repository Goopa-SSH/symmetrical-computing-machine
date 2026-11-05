import { MapPin, Send, Github, Linkedin, ExternalLink } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-violet-400 mb-3">
            Collaborons
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Me Contacter
          </h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            Un projet Web3, un besoin d&apos;automatisation ou une idée à concrétiser
            ? Je suis disponible pour en discuter.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="glass-card p-6 flex items-center gap-4 hover:bg-white/[0.08] transition-all">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Localisation</p>
                <p className="text-white font-medium">
                  Annemasse, France 🇫🇷
                </p>
              </div>
            </div>

            <div className="glass-card p-6 flex items-center gap-4 hover:bg-white/[0.08] transition-all">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center shrink-0">
                <Github className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-500">GitHub</p>
                <a
                  href="https://github.com/Goopa023"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-medium hover:text-sky-400 transition-colors flex items-center gap-1"
                >
                  github.com/Goopa023
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form (opens the visitor's email app) */}
          <div className="glass-card p-8">
            <h3 className="text-lg font-semibold text-white mb-6">
              Envoyer un message
            </h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const f = new FormData(e.currentTarget);
                const subject = encodeURIComponent("Contact depuis le portfolio - " + f.get("nom"));
                const body = encodeURIComponent(String(f.get("message")) + "\n\nEmail : " + f.get("email"));
                window.location.href = "mailto:sysawane200@gmail.com?subject=" + subject + "&body=" + body;
              }}
              className="space-y-4"
            >
              <div>
                <label className="block text-sm text-gray-400 mb-1.5">
                  Nom
                </label>
                <input
                  name="nom"
                  type="text"
                  required
                  placeholder="Votre nom"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-sky-500/50 focus:ring-1 focus:ring-sky-500/25 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-1.5">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="votre@email.com"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-sky-500/50 focus:ring-1 focus:ring-sky-500/25 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-1.5">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="Décrivez votre projet..."
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-sky-500/50 focus:ring-1 focus:ring-sky-500/25 transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-violet-600 text-white font-semibold hover:from-sky-400 hover:to-violet-500 transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                Envoyer
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
