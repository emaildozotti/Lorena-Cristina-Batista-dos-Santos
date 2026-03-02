'use client';

import React from 'react';
import { motion } from 'motion/react';
import {
  ArrowRight,
  CheckCircle2,
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
  transition: { duration: 0.8, ease: [0.21, 0.45, 0.32, 0.9] as [number, number, number, number] }
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
    <main className="overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 px-6 py-6 flex justify-between items-center bg-japandi-bg/80 backdrop-blur-md border-b border-japandi-stone/30">
        <div className="font-serif text-xl font-semibold tracking-tight text-japandi-ink">
          Lorena Cristina <span className="text-japandi-ochre">Santos</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-sans font-medium uppercase tracking-widest text-japandi-ink/70">
          <a href="#metodo" className="hover:text-japandi-terracotta transition-colors">Método</a>
          <a href="#sobre" className="hover:text-japandi-terracotta transition-colors">Sobre</a>
          <a href="#depoimentos" className="hover:text-japandi-terracotta transition-colors">Depoimentos</a>
          <a href="#faq" className="hover:text-japandi-terracotta transition-colors">Dúvidas</a>
        </div>
        <a href="#contato" className="text-xs font-sans font-bold uppercase tracking-widest bg-japandi-ink text-japandi-bg px-5 py-2.5 rounded-full hover:bg-japandi-terracotta transition-all">
          Agendar
        </a>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-japandi-sage/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-japandi-terracotta/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        <div className="section-padding relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <span className="inline-block text-japandi-sage font-sans font-bold uppercase tracking-[0.3em] text-xs mb-6">
              Terapia & Reprogramação Neuroemocional
            </span>
            <h1 className="text-5xl md:text-7xl font-serif leading-[1.1] mb-8 text-japandi-ink text-balance">
              Você sabe o que mudar, mas seu cérebro <span className="italic text-japandi-terracotta">repete o erro?</span>
            </h1>
            <p className="text-lg md:text-xl text-japandi-ink/70 font-sans leading-relaxed mb-10 max-w-lg">
              Não é falta de vontade, é biologia. O Método Neuroemocional reestrutura seus caminhos neurais para que você quebre ciclos de autossabotagem e reconstrua sua identidade.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#sintomas" className="btn-primary inline-flex items-center justify-center gap-2">
                Quero agendar minha sessão de clareza <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            <p className="mt-4 text-xs text-japandi-ink/50 font-sans italic">
              Atendimento 100% Online e Sigiloso
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative aspect-[4/5] md:aspect-square rounded-3xl overflow-hidden shadow-2xl"
          >
            <Image
              src="https://picsum.photos/seed/lorena/800/1000"
              alt="Lorena Cristina Santos"
              fill
              className="object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-japandi-ink/40 to-transparent" />
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
          <ChevronDown className="text-japandi-stone w-8 h-8" />
        </div>
      </section>

      {/* Mirror of Pain Section */}
      <section id="sintomas" className="bg-japandi-stone/20">
        <div className="section-padding">
          <motion.div
            {...fadeInUp}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-6 text-japandi-ink">
              O sucesso externo não preenche o vazio de uma <span className="text-japandi-terracotta">identidade fraturada.</span>
            </h2>
            <p className="text-lg text-japandi-ink/60 max-w-2xl mx-auto">
              Talvez você seja vista como uma pessoa forte e resolvida. Mas, no silêncio da sua mente, a realidade é outra. Você se identifica com isso?
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
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
                className="japandi-card flex flex-col items-center text-center group"
              >
                <div className="w-12 h-12 rounded-full bg-japandi-stone/30 flex items-center justify-center mb-6 group-hover:bg-japandi-terracotta group-hover:text-white transition-all duration-500">
                  <span className="font-serif text-xl">{i + 1}</span>
                </div>
                <h3 className="text-xl font-serif mb-4 text-japandi-ink">{item.title}</h3>
                <p className="text-sm text-japandi-ink/60 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            {...fadeInUp}
            className="mt-16 text-center"
          >
            <p className="text-xl font-serif italic text-japandi-ink/80">
              Se você marcou "sim" para algum desses pontos, entenda: <span className="text-japandi-terracotta font-bold">Você não está quebrada.</span> Você está apenas presa em um circuito neural antigo.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Logic Section */}
      <section className="relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-japandi-ochre/5 -skew-x-12 transform origin-top" />
        <div className="section-padding grid md:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-serif mb-8 text-japandi-ink leading-tight">
              Por que "só conversar" <span className="italic">não resolveu?</span>
            </h2>
            <div className="space-y-6 text-japandi-ink/70 leading-relaxed">
              <p>
                Falar sobre o problema alivia a angústia momentânea, mas não muda a estrutura do cérebro.
              </p>
              <p>
                Nossas experiências emocionais — especialmente rejeição ou traumas — criam "estradas" no seu cérebro. O seu sistema nervoso aprendeu a reagir assim para te proteger.
              </p>
              <p className="font-medium text-japandi-ink">
                Eu não trabalho apenas com o "porquê" você sofre. Eu trabalho com o "como" seu cérebro funciona.
              </p>
              <p>
                Através da Reprogramação Neuroemocional, nós ensinamos ao seu cérebro novos caminhos para reagir ao presente. É o encontro da ciência com a empatia.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl"
          >
            <Image
              src="https://picsum.photos/seed/brain/800/1000"
              alt="Neuroscience illustration"
              fill
              className="object-cover opacity-80"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-japandi-ochre/10 mix-blend-multiply" />
          </motion.div>
        </div>
      </section>

      {/* Method Section */}
      <section id="metodo" className="bg-japandi-ink text-japandi-bg">
        <div className="section-padding">
          <motion.div {...fadeInUp} className="text-center mb-20">
            <span className="text-japandi-ochre font-sans font-bold uppercase tracking-widest text-xs mb-4 block">O Caminho da Reconstrução</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-6">Conheça os 5 Passos do Método</h2>
            <p className="text-japandi-bg/60 max-w-2xl mx-auto">
              Não é uma conversa solta. É um processo estruturado com começo, meio e fim, desenhado para gerar autonomia.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-8">
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
                className="flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-6 group hover:bg-japandi-ochre transition-all duration-500">
                  <step.icon className="w-8 h-8 text-japandi-ochre group-hover:text-japandi-ink transition-colors" />
                </div>
                <h3 className="text-lg font-serif mb-3">{step.title}</h3>
                <p className="text-xs text-japandi-bg/50 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeInUp} className="mt-20 text-center">
            <a href="#sobre" className="btn-primary inline-block bg-japandi-ochre text-japandi-ink hover:bg-white">
              Quero conhecer esse método na prática
            </a>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="relative">
        <div className="section-padding grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative aspect-square rounded-full overflow-hidden border-8 border-japandi-stone/30"
          >
            <Image
              src="https://picsum.photos/seed/lorena2/800/800"
              alt="Lorena Cristina Santos"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <motion.div {...fadeInUp}>
            <span className="text-japandi-terracotta font-sans font-bold uppercase tracking-widest text-xs mb-4 block">Quem sou eu</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-8 text-japandi-ink">
              De uma introversão severa à liberdade de ser quem sou.
            </h2>
            <div className="space-y-6 text-japandi-ink/70 leading-relaxed">
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
              <p className="font-medium text-japandi-ink">
                Hoje, dedico minha vida a ser a estrategista que ajuda outras pessoas a fazerem essa mesma travessia: do medo para a autonomia.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="depoimentos" className="bg-japandi-sage/10">
        <div className="section-padding">
          <motion.div {...fadeInUp} className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif mb-6 text-japandi-ink">Histórias de identidades reconstruídas</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
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
                className="bg-white p-10 rounded-3xl shadow-sm border border-japandi-stone/30 relative"
              >
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-japandi-ochre rounded-full flex items-center justify-center text-white text-3xl font-serif">
                  "
                </div>
                <p className="text-lg text-japandi-ink/80 italic mb-8 leading-relaxed">
                  {testimonial.quote}
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-japandi-stone/50" />
                  <span className="font-sans font-bold text-sm uppercase tracking-widest text-japandi-ink">{testimonial.author}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="section-padding">
        <motion.div {...fadeInUp} className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-serif mb-6 text-japandi-ink">Dúvidas Frequentes</h2>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {[
            {
              q: "A terapia é online? Funciona mesmo?",
              a: "Sim, 100% online por vídeo. A neurociência comprova que a conexão terapêutica e a eficácia das técnicas não dependem do presencial, mas sim do compromisso e da metodologia aplicada."
            },
            {
              q: "Quanto tempo dura o processo?",
              a: "Diferente da psicanálise clássica, a Terapia Neuroemocional é focada. Não prometo 'cura em um dia', mas trabalhamos com metas e estrutura para que você veja evolução a cada etapa."
            },
            {
              q: "Aceita convênio?",
              a: "Não atendemos por convênio. O modelo de alta rotatividade dos planos de saúde inviabiliza a profundidade e a atenção personalizada que o Método Neuroemocional exige."
            },
            {
              q: "O que é a 'Sessão de Clareza'?",
              a: "É o nosso primeiro contato. Uma sessão onde vou ouvir sua história, identificar se o Método é ideal para o seu caso e te apresentar o plano de tratamento personalizado."
            }
          ].map((item, i) => (
            <motion.details
              key={i}
              {...fadeInUp}
              className="group japandi-card cursor-pointer"
            >
              <summary className="flex justify-between items-center list-none font-serif text-xl text-japandi-ink">
                {item.q}
                <ChevronDown className="w-5 h-5 group-open:rotate-180 transition-transform duration-300" />
              </summary>
              <p className="mt-6 text-japandi-ink/70 leading-relaxed font-sans">
                {item.a}
              </p>
            </motion.details>
          ))}
        </div>
      </section>

      {/* Footer / Final CTA */}
      <footer id="contato" className="bg-japandi-ink text-japandi-bg relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-japandi-ochre via-transparent to-transparent" />
        </div>

        <div className="section-padding relative z-10 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl md:text-6xl font-serif mb-8 text-balance">
              O passado não precisa ser sua <span className="italic text-japandi-ochre">morada permanente.</span>
            </h2>
            <p className="text-xl text-japandi-bg/60 mb-12 max-w-2xl mx-auto">
              Você já esperou tempo demais para se sentir segura na própria pele. As vagas são limitadas para garantir a qualidade do acompanhamento.
            </p>
            <a href="https://wa.me/556692634330?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20a%20sess%C3%A3o%20de%20clareza%20que%20vi%20no%20site." target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center justify-center gap-2 bg-japandi-terracotta text-japandi-bg hover:bg-japandi-ochre hover:text-japandi-ink text-xl px-12 py-6">
              Agendar sessão de clareza agora
            </a>
          </motion.div>

          <div className="mt-32 pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="font-serif text-2xl font-semibold">
              Lorena Cristina <span className="text-japandi-ochre">Santos</span>
            </div>

            <div className="flex gap-6">
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-japandi-ochre hover:border-japandi-ochre transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-japandi-ochre hover:border-japandi-ochre transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-japandi-ochre hover:border-japandi-ochre transition-all">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>

            <div className="text-xs text-japandi-bg/40 font-sans uppercase tracking-[0.2em]">
              © 2026 Lorena Cristina Santos | Terapia & Reprogramação Neuroemocional
            </div>
          </div>

          <div className="mt-8 flex justify-center gap-8 text-[10px] uppercase tracking-widest text-japandi-bg/30">
            <a href="#" className="hover:text-japandi-ochre">Política de Privacidade</a>
            <a href="#" className="hover:text-japandi-ochre">Termos de Uso</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
