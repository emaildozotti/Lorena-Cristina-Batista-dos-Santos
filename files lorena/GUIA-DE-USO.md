# Como Usar o Design System no Next.js

## 📁 Onde colocar cada arquivo

```
lorena-cristina-santos-/-terapia-neuroemocional/
├── app/
│   ├── globals.css        ← SUBSTITUIR pelo novo
│   ├── layout.tsx         ← SUBSTITUIR pelo novo
│   └── page.tsx           ← Seus componentes aqui
├── tailwind.config.ts     ← SUBSTITUIR pelo novo
└── ...
```

> **Importante:** Remova o `@import url(...)` do topo do `globals.css` —
> o Next.js já carrega as fontes via `next/font/google` no `layout.tsx`,
> que é mais performático. A linha de import está ali só como fallback.


## 🎨 Como usar as cores (Tailwind)

```tsx
{/* Backgrounds */}
<div className="bg-cream-50">...</div>
<div className="bg-neutral-900">...</div>
<div className="bg-sage-100">...</div>

{/* Texto */}
<p className="text-neutral-800">Texto principal</p>
<p className="text-neutral-600">Texto secundário</p>
<span className="text-gold-500">Texto dourado accent</span>

{/* Bordas */}
<div className="border border-neutral-200">...</div>
<div className="border border-gold-300">...</div>
```


## ✍️ Como usar a tipografia

```tsx
{/* Display — Cormorant Garamond (títulos grandes) */}
<h1 className="font-display text-6xl font-light tracking-tight text-neutral-800">
  Cuide da sua <em className="italic text-gold-500">mente</em>
</h1>

{/* Heading — Playfair Display */}
<h2 className="font-heading text-4xl font-medium text-neutral-800">
  Transformação Interior
</h2>

{/* Body — DM Sans */}
<p className="font-body text-base text-neutral-600 leading-relaxed">
  Cada sessão é um passo...
</p>

{/* Overline / Label */}
<span className="overline">Psicóloga Clínica</span>
{/* ou via Tailwind: */}
<span className="font-body text-[11px] font-semibold tracking-[3px] uppercase text-gold-500">
  Psicóloga Clínica
</span>
```


## 🔘 Botões (classes do globals.css)

```tsx
<button className="btn-primary">Agendar Sessão</button>
<button className="btn-secondary">Saiba Mais</button>
<button className="btn-gold">Primeira Consulta</button>
<button className="btn-ghost">Sobre Mim</button>
<button className="btn-text">
  Ver abordagens <span className="arrow">→</span>
</button>
```


## 🃏 Cards

```tsx
{/* Card Feature (serviços) */}
<div className="card-feature">
  <h3 className="font-heading text-xl font-medium text-neutral-800 mb-3">
    Terapia Individual
  </h3>
  <p className="text-sm text-neutral-500 leading-relaxed">
    Espaço seguro para autoconhecimento...
  </p>
</div>

{/* Card Testimonial */}
<div className="card-testimonial">
  <blockquote className="font-display text-xl italic font-light text-cream-200 mb-6">
    "Transformou minha vida..."
  </blockquote>
  <span className="text-sm font-medium text-gold-400">— Paciente</span>
</div>
```


## 🖼️ Seções com backgrounds

```tsx
{/* Hero com degradê cream */}
<section className="bg-cream">...</section>

{/* Seção dark */}
<section className="bg-dark">...</section>

{/* Efeito mármore */}
<section className="bg-marble">...</section>
```


## 📐 Inputs

```tsx
<input
  type="text"
  className="input"
  placeholder="Seu nome"
/>

<textarea
  className="input min-h-[120px] resize-y"
  placeholder="Conte um pouco..."
/>
```


## ✨ Animações

```tsx
{/* Tailwind animations */}
<div className="animate-fade-up">Aparece de baixo</div>
<div className="animate-fade-up [animation-delay:0.1s]">Com delay</div>
<div className="animate-slide-left">Entra da esquerda</div>
<div className="animate-slide-right">Entra da direita</div>

{/* Ou as classes CSS: */}
<div className="animate-fade-up animate-delay-2">...</div>
```


## 🔹 Divisores

```tsx
{/* Linha dourada com gradiente */}
<div className="divider-gold" />

{/* Com ornamento de diamante */}
<div className="divider-ornament">
  <div className="line" />
  <div className="diamond" />
  <div className="line" />
</div>
```


## 💡 Dica: Sombras

```tsx
<div className="shadow-sm">...</div>
<div className="shadow-md">...</div>
<div className="shadow-lg">...</div>
<div className="shadow-xl">...</div>
<div className="shadow-gold">...</div>  {/* brilho dourado */}
```
