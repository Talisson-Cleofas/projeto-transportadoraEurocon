import { Package, Truck, Zap, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/react-app/components/ui/button";

export default function ServicesSection() {
  const services = [
    {
      icon: Package,
      title: "Carga Fracionada",
      subtitle: "Ideal para volumes menores",
      description:
        "Solução econômica para envio de pequenos e médios volumes. Consolidamos cargas de diferentes clientes em um único veículo, reduzindo custos sem comprometer a qualidade e segurança da entrega.",
      features: [
        "Coleta programada",
        "Rastreamento em tempo real",
        "Entregas em todo Brasil",
        "Seguro incluso",
      ],
      gradient: "from-primary to-blue-600",
      bgGradient: "from-primary/10 to-blue-600/5",
    },
    {
      icon: Truck,
      title: "Carga Completa",
      subtitle: "Veículo exclusivo para você",
      description:
        "Transporte dedicado com veículo exclusivo para sua carga. Ideal para grandes volumes ou cargas que necessitam de condições especiais de transporte e máxima agilidade na entrega.",
      features: [
        "Veículo exclusivo",
        "Rotas otimizadas",
        "Carga e descarga dedicada",
        "Maior agilidade",
      ],
      gradient: "from-accent to-yellow-500",
      bgGradient: "from-accent/10 to-yellow-500/5",
      featured: true,
    },
    {
      icon: Zap,
      title: "Transporte Expresso",
      subtitle: "Entregas urgentes",
      description:
        "Para quando o tempo é crucial. Serviço de entrega expressa com prazos reduzidos e prioridade máxima. Monitoramento 24h e equipe dedicada para garantir que sua carga chegue no menor tempo possível.",
      features: [
        "Entrega em até 24h",
        "Monitoramento 24/7",
        "Prioridade máxima",
        "Atendimento VIP",
      ],
      gradient: "from-green-500 to-emerald-600",
      bgGradient: "from-green-500/10 to-emerald-600/5",
    },
  ];

  const scrollToContact = () => {
    const element = document.querySelector("#contato");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="servicos" className="py-20 md:py-28 bg-muted/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Nossos Serviços
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Soluções{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">
              Logísticas
            </span>{" "}
            Completas
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Oferecemos diferentes modalidades de transporte para atender às necessidades
            específicas do seu negócio, sempre com segurança e pontualidade.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-2xl overflow-hidden shadow-lg border border-border/50 hover:shadow-2xl transition-all duration-500 ${
                service.featured ? "md:-translate-y-4" : ""
              }`}
            >
              {/* Featured badge */}
              {service.featured && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="px-3 py-1 rounded-full bg-gradient-to-r from-accent to-yellow-500 text-slate-900 text-xs font-bold uppercase tracking-wide">
                    Mais Popular
                  </span>
                </div>
              )}

              {/* Top gradient bar */}
              <div className={`h-2 bg-gradient-to-r ${service.gradient}`} />

              {/* Content */}
              <div className="p-8">
                {/* Icon */}
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.bgGradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon
                    className={`w-8 h-8 bg-gradient-to-br ${service.gradient} bg-clip-text`}
                    style={{
                      color:
                        service.gradient === "from-primary to-blue-600"
                          ? "#1d4ed8"
                          : service.gradient === "from-accent to-yellow-500"
                            ? "#f59e0b"
                            : "#22c55e",
                    }}
                  />
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">{service.subtitle}</p>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  className={`w-full bg-gradient-to-r ${service.gradient} hover:opacity-90 text-white shadow-lg hover:shadow-xl transition-all`}
                  onClick={scrollToContact}
                >
                  Solicitar Orçamento
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 md:p-12 text-center shadow-2xl">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Precisa de uma solução personalizada?
          </h3>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Nossa equipe de especialistas está pronta para analisar suas necessidades e
            criar uma solução logística sob medida para o seu negócio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-accent to-yellow-500 hover:from-yellow-500 hover:to-accent text-slate-900 font-semibold shadow-lg hover:shadow-xl transition-all"
              onClick={scrollToContact}
            >
              Falar com Especialista
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 hover:border-white/50"
              onClick={() => {
                window.open(
                  "https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre os serviços da EUROCON.",
                  "_blank"
                );
              }}
            >
              WhatsApp Comercial
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
