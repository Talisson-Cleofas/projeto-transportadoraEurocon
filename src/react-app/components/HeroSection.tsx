import { ArrowRight, Shield, Clock, MapPin } from "lucide-react";
import { Button } from "@/react-app/components/ui/button";

export default function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=2070&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/85 to-slate-900/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl opacity-40" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm mb-8">
            <Shield className="w-4 h-4 text-accent" />
            <span>+15 anos de experiência em transporte de cargas</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Transporte de Cargas com{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-yellow-400">
              Segurança
            </span>{" "}
            e{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
              Pontualidade
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed max-w-2xl">
            Soluções logísticas completas para sua empresa. Entregas em todo o
            Brasil com rastreamento em tempo real, seguro de carga e atendimento
            personalizado.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button
              size="lg"
              className="bg-gradient-to-r from-accent to-yellow-500 hover:from-yellow-500 hover:to-accent text-slate-900 font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-base px-8"
              onClick={() => scrollToSection("#contato")}
            >
              Solicitar Orçamento Grátis
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 hover:border-white/50 backdrop-blur-sm text-base px-8"
              onClick={() => scrollToSection("#servicos")}
            >
              Conheça Nossos Serviços
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex items-center gap-3 text-white/90">
              <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
                <Shield className="w-6 h-6 text-accent" />
              </div>
              <div>
                <p className="font-semibold">100% Seguro</p>
                <p className="text-sm text-white/60">Carga protegida</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-white/90">
              <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="font-semibold">Pontualidade</p>
                <p className="text-sm text-white/60">98% no prazo</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-white/90">
              <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
                <MapPin className="w-6 h-6 text-green-400" />
              </div>
              <div>
                <p className="font-semibold">Todo Brasil</p>
                <p className="text-sm text-white/60">Cobertura nacional</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/60 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
