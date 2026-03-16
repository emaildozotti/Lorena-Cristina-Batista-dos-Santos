'use client';

import React from 'react';
import { motion } from 'motion/react';
import {
  ArrowRight,
  Brain,
  Target,
  RefreshCcw,
  ShieldCheck,
  User,
  ChevronDown,
  MessageCircle,
  Instagram,
  Linkedin
} from 'lucide-react';
import Image from 'next/image';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
};

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function LandingPage() {
  return (
    <main className="overflow-x-hidden bg-cream-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 px-6 py-4 md:py-6 hidden md:flex justify-between items-center bg-cream-50/90 backdrop-blur-md border-b border-neutral-200/50">
        <div className="font-display text-2xl md:text-3xl font-light tracking-tight text-neutral-800">
          Lorena Cristina <span className="italic text-gold-500 font-medium">Santos</span>
        </div>
        <div className="hidden md:flex gap-10 text-[12px] font-body font-semibold uppercase tracking-[2px] text-neutral-800/80">
          <a href="#metodo" className="hover:text-gold-500 transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-gold-400 after:transition-all hover:after:w-full">Método</a>
          <a href="#sobre" className="hover:text-gold-500 transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-gold-400 after:transition-all hover:after:w-full">Sobre</a>
          <a href="#depoimentos" className="hover:text-gold-500 transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-gold-400 after:transition-all hover:after:w-full">Depoimentos</a>
          <a href="#faq" className="hover:text-gold-500 transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-gold-400 after:transition-all hover:after:w-full">Dúvidas</a>
        </div>
        <a href="https://wa.me/556692634330?text=Ol%C3%A1%20Lorena%2C%20vim%20atrav%C3%A9s%20do%20seu%20site%20e%20gostaria%20de%20agendar%20uma%20sess%C3%A3o%20de%20clareza." target="_blank" rel="noopener noreferrer" className="btn-primary !px-7 !py-2.5 !text-sm">
          Agendar
        </a>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-cream pt-32 pb-16 md:pt-48 md:pb-32 overflow-hidden min-h-[90vh] flex items-center">
        {/* Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-gold-200/20 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-sage-200/20 blur-[120px] rounded-full" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-2xl"
            >
              <h1 className="text-display text-4xl sm:text-5xl md:text-7xl mb-8 leading-[1.15]">
                Você sabe o que mudar, mas seu cérebro <em className="italic text-gold-500">repete o erro?</em>
              </h1>
              <p className="text-body-lg mb-10 text-neutral-600">
                Não é falta de vontade, é biologia. O Método Neuroemocional reestrutura seus caminhos neurais para que você quebre ciclos de autossabotagem e reconstrua sua identidade.
              </p>
              <div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center">
                <a href="https://wa.me/556692634330?text=Ol%C3%A1%20Lorena%2C%20vim%20atrav%C3%A9s%20do%20seu%20site%20e%20gostaria%20de%20agendar%20uma%20sess%C3%A3o%20de%20clareza." target="_blank" rel="noopener noreferrer" className="btn-primary group w-full sm:w-auto">
                  Agendar sessão de clareza 
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
                <p className="text-caption italic flex items-center gap-2 text-neutral-500">
                  <ShieldCheck className="w-4 h-4 text-gold-500" /> Atendimento 100% Online e Sigiloso
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[4/5] w-full max-w-[500px] lg:max-w-none mx-auto rounded-2xl overflow-hidden shadow-2xl border border-white/50"
            >
              <Image
                src="https://i.imgur.com/u7My6wR.jpeg"
                alt="Lorena Cristina Santos"
                fill
                className="object-cover object-[center_top]"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/30 via-transparent to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mirror of Pain Section */}
      <section id="sintomas" className="bg-neutral-50 py-24 md:py-32">
        <div className="container mx-auto px-6">
          <motion.div
            {...fadeInUp}
            className="text-center mb-20"
          >
            <h2 className="text-h1 mb-6 max-w-3xl mx-auto">
              O sucesso externo não preenche o vazio de uma <span className="text-gold-500 font-light italic">identidade fraturada.</span>
            </h2>
            <p className="text-body max-w-2xl mx-auto text-neutral-600">
              Talvez você seja vista como uma pessoa forte e resolvida. Mas, no silêncio da sua mente, a realidade é outra. Você se identifica com isso?
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                title: "Ciclo dos Relacionamentos",
                desc: "Você se anula para agradar por medo da rejeição ou tenta controlar tudo por medo do abandono."
              },
              {
                title: "Síndrome da Impostora",
                desc: "Mesmo competente, vive com medo de ser descoberta. Acha que sua conquista foi sorte."
              },
              {
                title: "Bloqueio de Posicionamento",
                desc: "Tem ideias incríveis, mas trava na hora de falar. O medo do julgamento é maior que a vontade de crescer."
              },
              {
                title: "Autossabotagem Crônica",
                desc: "Quando tudo começa a dar certo, você inconscientemente cria um problema para voltar à estaca zero."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="card p-8 flex flex-col items-center text-center group bg-white border-neutral-200/60"
              >
                <div className="w-12 h-12 rounded-full bg-gold-50 flex items-center justify-center mb-6 text-gold-600 font-display text-lg transition-all duration-500 group-hover:bg-gold-500 group-hover:text-white">
                  0{i + 1}
                </div>
                <h3 className="text-h3 mb-4 text-neutral-800">{item.title}</h3>
                <p className="text-body !text-[15px] leading-relaxed text-neutral-500">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            {...fadeInUp}
            className="mt-16 text-center"
          >
            <div className="divider-gold max-w-md mx-auto mb-10" />
            <p className="text-h3 italic text-neutral-700">
              Se você marcou "sim" para algum desses pontos, entenda: <span className="text-gold-500 font-medium">Você não está quebrada.</span> Você está apenas presa em um circuito neural antigo.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Video Presentation */}
      <section className="bg-white py-24 md:py-32 border-y border-neutral-100">
        <div className="container mx-auto px-6">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-h2 mb-6 text-neutral-800">
              Uma nova forma de <span className="italic text-gold-500 font-light">enxergar sua mente</span>
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-[400px] mx-auto rounded-3xl overflow-hidden shadow-2xl aspect-[9/16] bg-neutral-900 border-8 border-neutral-50 relative"
          >
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/m4qoREW9YZM"
              title="Apresentação Lorena Cristina Santos"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full opacity-90 transition-opacity hover:opacity-100"
            ></iframe>
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-marble py-24 md:py-32 border-b border-neutral-100">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-display text-4xl md:text-6xl mb-12 text-neutral-800 leading-tight">
              Por que "só conversar" <span className="italic text-gold-500">não resolveu?</span>
            </h2>
            <div className="space-y-8 text-lg md:text-xl text-neutral-600 leading-relaxed">
              <p>
                Falar sobre o problema alivia a angústia momentânea, mas não muda a estrutura do cérebro.
              </p>
              <p>
                Nossas experiências emocionais — especialmente rejeição ou traumas — criam "estradas" no seu cérebro. O seu sistema nervoso aprendeu a reagir assim para te proteger.
              </p>
              <div className="py-10 border-y border-gold-200/30 my-10">
                <p className="text-2xl md:text-3xl font-display italic text-neutral-800 max-w-2xl mx-auto">
                  "Eu não trabalho apenas com o <span className="text-gold-500">porquê</span> você sofre. Eu trabalho com o <span className="text-gold-500">como</span> seu cérebro funciona."
                </p>
              </div>
              <p>
                Através da Reprogramação Neuroemocional, nós ensinamos ao seu cérebro novos caminhos para reagir ao presente. É o encontro da ciência com a empatia.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Method Steps */}
      <section id="metodo" className="bg-dark py-24 md:py-32">
        <div className="container mx-auto px-6">
          <motion.div {...fadeInUp} className="text-center mb-20">
            <h2 className="text-h1 !text-cream-50 mb-6 font-display">Conheça os 5 Passos do Método</h2>
            <p className="text-body !text-cream-100/60 max-w-2xl mx-auto">
              Não é uma conversa solta. É um processo estruturado com começo, meio e fim, desenhado para gerar autonomia.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
            {[
              { icon: Brain, title: "Mapeamento", desc: "Entendemos a raiz biológica e emocional dos seus padrões." },
              { icon: Target, title: "Gatilhos", desc: "Descobrimos o que ativa sua insegurança no dia a dia." },
              { icon: RefreshCcw, title: "Reprocessamento", desc: "Técnicas para esvaziar a carga emocional de memórias dolorosas." },
              { icon: ShieldCheck, title: "Novos Circuitos", desc: "Exercícios práticos para treinar seu cérebro a reagir com segurança." },
              { icon: User, title: "Identidade", desc: "Você descobre quem você é de verdade, sem as máscaras." }
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-20 h-20 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-gold-500 transition-all duration-500 border border-white/10 group-hover:border-gold-400">
                  <step.icon className="w-10 h-10 text-gold-400 group-hover:text-neutral-900 transition-colors" />
                </div>
                <h3 className="text-h3 !text-cream-100 mb-3">{step.title}</h3>
                <p className="text-body !text-[14px] !text-cream-100/50 leading-relaxed px-4">{step.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeInUp} className="mt-20 text-center">
            <a href="https://wa.me/556692634330?text=Ol%C3%A1%20Lorena%2C%20vim%20atrav%C3%A9s%20do%20seu%20site%20e%20gostaria%20de%20agendar%20uma%20sess%C3%A3o%20de%20clareza." target="_blank" rel="noopener noreferrer" className="btn-gold !px-12 !py-5 text-base shadow-xl">
              Quero conhecer esse método na prática
            </a>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="bg-white py-24 md:py-32">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative h-[500px] md:h-[700px] w-full max-w-lg mx-auto rounded-2xl overflow-hidden shadow-2xl border-8 border-neutral-50"
          >
            <Image
              src="https://i.imgur.com/fTJs2XP.jpeg"
              alt="Lorena Cristina Santos"
              fill
              className="object-cover object-top"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/20 to-transparent" />
          </motion.div>
          <motion.div {...fadeInUp}>
            <h2 className="text-h1 mb-8 text-neutral-800 leading-tight">
              De uma introversão severa à <span className="italic text-gold-500 font-light">liberdade de ser quem sou.</span>
            </h2>
            <div className="space-y-6 text-body text-neutral-600">
              <p>Prazer, sou Lorena Cristina Santos.</p>
              <p>
                Hoje sou Terapeuta e especialista em Neurociência Aplicada, mas meu maior "diploma" foi a minha própria história.
              </p>
              <p>
                Cresci carregando as marcas da ausência paterna e de uma rejeição que me fez encolher. Eu sabia que tinha potencial, mas minhas emoções me sabotavam.
              </p>
              <p>
                Precisei mergulhar fundo no funcionamento da mente humana para entender que eu não precisava nascer de novo; eu precisava apenas reeducar minhas emoções.
              </p>
              <p className="font-semibold text-neutral-900">
                Hoje, dedico minha vida a ser a estrategista que ajuda outras pessoas a fazerem essa mesma travessia: do medo para a autonomia.
              </p>
            </div>
            <div className="divider-ornament mt-12">
              <div className="line" />
              <div className="diamond" />
              <div className="line" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="depoimentos" className="bg-sage-50 py-24 md:py-32 overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div {...fadeInUp} className="text-center mb-20 text-neutral-800">
            <h2 className="text-h1 mb-6">Histórias de identidades <span className="italic text-gold-600 font-light">reconstruídas</span></h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                quote: "Eu achava que minha personalidade era ser 'tímida e insegura'. A Lorena me mostrou que isso era só uma defesa. Hoje me posiciono no trabalho sem tremer.",
                author: "A.M., Advogada"
              },
              {
                quote: "Já tinha feito 3 anos de terapia. Em 2 meses com o método estruturado, entendi padrões que nunca tinha visto. É direto ao ponto.",
                author: "J.S., Empreendedora"
              }
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                {...fadeInUp}
                className="card-testimonial group shadow-xl"
              >
                <div className="absolute top-8 right-8 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Brain className="w-16 h-16 text-gold-200" />
                </div>
                <div className="text-gold-400 text-6xl font-display leading-none mb-4 opacity-50">
                  “
                </div>
                <blockquote className="font-display text-xl md:text-2xl !text-cream-100 italic mb-8 leading-relaxed font-light">
                  {testimonial.quote}
                </blockquote>
                <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                  <div className="w-10 h-10 rounded-full bg-gold-500/10 border border-gold-500/30 flex items-center justify-center">
                    <User className="w-4 h-4 text-gold-400" />
                  </div>
                  <span className="text-[11px] uppercase tracking-widest font-semibold text-gold-400">{testimonial.author}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-h2 mb-4 text-neutral-800">Dúvidas Frequentes</h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: "A terapia é online? Funciona mesmo?",
                a: "Sim, 100% online por vídeo. A neurociência comprova que a conexão terapêutica e a eficácia das técnicas não dependem do presencial."
              },
              {
                q: "Quanto tempo dura o processo?",
                a: "A Terapia Neuroemocional é focada. Trabalhamos com metas e estrutura para que você veja evolução a cada etapa do tratamento."
              },
              {
                q: "Aceita convênio?",
                a: "Não atendemos por convênio. Nosso foco é a profundidade e personalização, o que o modelo de planos de saúde muitas vezes impede."
              },
              {
                q: "O que é a 'Sessão de Clareza'?",
                a: "É nosso primeiro passo. Identificamos se o Método é ideal para você e traçamos o seu plano de tratamento personalizado."
              }
            ].map((item, i) => (
              <motion.details
                key={i}
                {...fadeInUp}
                className="group card !p-0 cursor-pointer transition-all duration-300 open:shadow-lg border-neutral-200"
              >
                <summary className="flex justify-between items-center list-none p-6 md:p-8 select-none">
                  <span className="text-h3 !text-lg md:!text-xl text-neutral-800">{item.q}</span>
                  <div className="w-8 h-8 rounded-full border border-neutral-100 flex items-center justify-center transition-all group-open:bg-gold-500 group-open:text-white">
                    <ChevronDown className="w-4 h-4 group-open:rotate-180 transition-transform duration-300" />
                  </div>
                </summary>
                <div className="px-6 md:px-8 pb-8 text-neutral-600 text-body">
                  {item.a}
                </div>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      {/* Footer / Final CTA */}
      <footer id="contato" className="bg-dark text-cream-50 py-24 md:py-32 relative overflow-hidden border-t border-white/5">
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div {...fadeInUp} className="max-w-3xl mx-auto">
            <h2 className="text-display text-4xl sm:text-5xl md:text-7xl mb-8 leading-[1.15] text-cream-50">
              O passado não precisa ser sua <span className="italic text-gold-400">morada permanente.</span>
            </h2>
            <p className="text-body-lg !text-cream-100/80 mb-12 max-w-2xl mx-auto">
              Recomece sua história com a clareza e a força que sua mente merece. Vagas limitadas para acompanhamento individualizado.
            </p>
            <a href="https://wa.me/556692634330?text=Ol%C3%A1%20Lorena%2C%20vim%20atrav%C3%A9s%20do%20seu%20site%20e%20gostaria%20de%20agendar%20uma%20sess%C3%A3o%20de%20clareza." target="_blank" rel="noopener noreferrer" className="btn-gold !text-lg !px-12 !py-6 group shadow-2xl shadow-gold/20 inline-flex items-center gap-4 hover:scale-105 transition-transform active:scale-95">
              Agendar minha Sessão de Clareza <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-2" />
            </a>
          </motion.div>

          <div className="mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-neutral-500">
            <div className="font-display text-2xl font-light text-cream-100">
              Lorena Cristina <span className="italic text-gold-400">Santos</span>
            </div>

            <div className="flex gap-5">
              <a href="#" className="hover:text-gold-400 transition-colors"><Instagram className="w-6 h-6" /></a>
              <a href="#" className="hover:text-gold-400 transition-colors"><Linkedin className="w-6 h-6" /></a>
              <a href="#" className="hover:text-gold-400 transition-colors"><MessageCircle className="w-6 h-6" /></a>
            </div>

            <div className="text-[10px] uppercase tracking-widest opacity-40">
              © 2026 Dra. Lorena Santos | Todos os direitos reservados
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
