import { Star, Quote } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Carlos Eduardo Silva",
      role: "Diretor de Logística",
      company: "TechParts Indústria",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
      rating: 5,
      text: "Trabalhamos com a EUROCON há 5 anos e a parceria só cresce. A pontualidade é impressionante, nunca tivemos problemas com atrasos. O rastreamento em tempo real nos dá total controle sobre nossas cargas.",
    },
    {
      name: "Mariana Costa",
      role: "Gerente de Compras",
      company: "Distribuidora Nacional",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
      rating: 5,
      text: "O atendimento personalizado faz toda diferença. Sempre que precisamos de uma solução urgente, a equipe da EUROCON resolve rapidamente. São parceiros de verdade, não apenas fornecedores.",
    },
    {
      name: "Roberto Mendes",
      role: "CEO",
      company: "Mendes & Associados",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
      rating: 5,
      text: "Migrei para a EUROCON após ter problemas com outras transportadoras. A diferença é gritante: profissionalismo, transparência e zero dor de cabeça. Recomendo fortemente para qualquer empresa.",
    },
    {
      name: "Ana Paula Ribeiro",
      role: "Coordenadora de Supply Chain",
      company: "Varejo Express",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
      rating: 5,
      text: "A EUROCON entende as demandas do varejo. Entregas fracionadas, prazos apertados, múltiplos destinos... Eles dominam tudo isso com maestria. Nossa operação melhorou 40% desde que começamos a parceria.",
    },
    {
      name: "Fernando Alves",
      role: "Proprietário",
      company: "Alves Materiais de Construção",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
      rating: 5,
      text: "Cargas pesadas e delicadas exigem cuidado especial. A EUROCON sempre tratou nossos materiais com o máximo zelo. Em 3 anos, zero avarias. Isso é qualidade!",
    },
    {
      name: "Juliana Santos",
      role: "Diretora Comercial",
      company: "E-commerce Brasil",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80",
      rating: 5,
      text: "No e-commerce, velocidade é tudo. A EUROCON nos ajudou a reduzir o tempo de entrega em 30%. Nossos clientes notaram a diferença e as avaliações positivas aumentaram significativamente.",
    },
  ];

  return (
    <section id="depoimentos" className="py-20 md:py-28 bg-muted/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Depoimentos
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            O Que Nossos{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">
              Clientes
            </span>{" "}
            Dizem
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A satisfação dos nossos clientes é o nosso maior patrimônio. Veja o que
            empresas de todo o Brasil falam sobre nossos serviços.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg border border-border/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative"
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Quote className="w-5 h-5 text-primary" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Testimonial text */}
              <p className="text-muted-foreground leading-relaxed mb-6">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-border">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/20"
                />
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <p className="text-sm text-primary font-medium">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 px-8 py-4 rounded-2xl bg-white shadow-lg border border-border">
            <div className="flex -space-x-3">
              {testimonials.slice(0, 4).map((t, i) => (
                <img
                  key={i}
                  src={t.image}
                  alt=""
                  className="w-10 h-10 rounded-full border-2 border-white object-cover"
                />
              ))}
            </div>
            <div className="text-left">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="ml-2 font-bold text-foreground">4.9/5</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Baseado em <strong className="text-foreground">2.000+</strong> avaliações
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
