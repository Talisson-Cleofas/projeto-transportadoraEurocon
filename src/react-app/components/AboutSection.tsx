import { Target, Eye, Heart, Award, Users, Truck, Calendar } from "lucide-react";

export default function AboutSection() {
  const stats = [
    {
      icon: Calendar,
      value: "15+",
      label: "Anos de Experiência",
      color: "text-primary",
    },
    {
      icon: Truck,
      value: "50.000+",
      label: "Entregas Realizadas",
      color: "text-accent",
    },
    {
      icon: Users,
      value: "2.000+",
      label: "Clientes Satisfeitos",
      color: "text-green-500",
    },
    {
      icon: Award,
      value: "98%",
      label: "Taxa de Pontualidade",
      color: "text-primary",
    },
  ];

  const values = [
    {
      icon: Target,
      title: "Missão",
      description:
        "Oferecer soluções logísticas de excelência, garantindo a entrega segura e pontual de cargas em todo o território nacional, superando as expectativas dos nossos clientes.",
      gradient: "from-primary to-blue-600",
    },
    {
      icon: Eye,
      title: "Visão",
      description:
        "Ser reconhecida como a transportadora de referência no Brasil, líder em inovação, qualidade de serviço e compromisso com a sustentabilidade até 2030.",
      gradient: "from-accent to-yellow-500",
    },
    {
      icon: Heart,
      title: "Valores",
      description:
        "Compromisso com o cliente, integridade em cada ação, segurança em primeiro lugar, inovação constante e responsabilidade socioambiental.",
      gradient: "from-green-500 to-emerald-600",
    },
  ];

  return (
    <section id="sobre" className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Sobre Nós
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Sua Carga em{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">
              Boas Mãos
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Há mais de 15 anos conectando o Brasil através de soluções logísticas
            confiáveis e eficientes.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800&q=80"
                alt="Frota EUROCON"
                className="w-full h-80 md:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-6 max-w-xs border border-border">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center">
                  <Award className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="font-bold text-foreground text-lg">ISO 9001</p>
                  <p className="text-sm text-muted-foreground">Certificação de Qualidade</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Nossa História
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                A <strong className="text-foreground">EUROCON Transportadora</strong> nasceu
                em 2009 com uma missão clara: revolucionar o transporte de cargas no Brasil
                através de serviços de excelência, tecnologia de ponta e um atendimento
                verdadeiramente humanizado.
              </p>
              <p>
                O que começou como uma pequena operação com apenas 3 veículos, hoje se
                transformou em uma das transportadoras mais respeitadas do país, com uma
                frota moderna de mais de 150 veículos e presença em todas as regiões
                brasileiras.
              </p>
              <p>
                Nosso diferencial está no compromisso inabalável com a{" "}
                <strong className="text-foreground">segurança</strong>,{" "}
                <strong className="text-foreground">pontualidade</strong> e{" "}
                <strong className="text-foreground">transparência</strong> em cada operação.
                Investimos constantemente em tecnologia de rastreamento, capacitação de
                equipe e processos sustentáveis.
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-muted/50 to-muted/30 rounded-2xl p-6 text-center border border-border/50 hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-white shadow-sm flex items-center justify-center">
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <p className="text-3xl md:text-4xl font-bold text-foreground mb-1">
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-lg border border-border/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}
              >
                <item.icon className="w-7 h-7 text-white" />
              </div>
              {/* Content */}
              <h4 className="text-xl font-bold text-foreground mb-3">{item.title}</h4>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
