# 🏗️ João da Construção

![João da Construção Banner](https://via.placeholder.com/1200x400)

> Loja virtual moderna de materiais para construção e reforma, desenvolvida com tecnologias atuais do ecossistema React/Next.js. O projeto apresenta uma experiência responsiva, rápida e otimizada para navegação em diferentes dispositivos.

---

## 🚀 Tecnologias utilizadas

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge\&logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge\&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge\&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=for-the-badge\&logo=tailwindcss)
![Radix UI](https://img.shields.io/badge/Radix_UI-Components-111111?style=for-the-badge)
![shadcn/ui](https://img.shields.io/badge/shadcn/ui-Components-black?style=for-the-badge)
![Lucide Icons](https://img.shields.io/badge/Lucide-Icons-orange?style=for-the-badge)
![Embla Carousel](https://img.shields.io/badge/Embla_Carousel-React-purple?style=for-the-badge)

</div>

---

# 📌 Sobre o projeto

O **João da Construção** é uma aplicação web de e-commerce desenvolvida para uma loja de materiais de construção e reforma.

O projeto possui uma interface moderna, responsiva e otimizada, permitindo a visualização de produtos, destaques da loja e navegação intuitiva.

A aplicação foi construída utilizando **Next.js 16**, aproveitando recursos como otimização de imagens, organização por componentes e renderização eficiente.

---

# ✨ Funcionalidades

✅ Página inicial com:

* Carrossel de banners com autoplay
* Produtos em destaque
* Cards responsivos
* Layout adaptável para mobile, tablet e desktop

✅ Página de produtos:

* Listagem completa do catálogo
* Organização dos produtos através de JSON
* Exibição de:

  * Nome
  * Descrição
  * Imagem
  * Preço em Real (BRL)
  * Selo de destaque

✅ Componentização:

* Header reutilizável
* Footer reutilizável
* Cards dinâmicos
* Carrossel independente

---

# 🖥️ Demonstração

🌐 Aplicação online:

```
https://joao-da-contrucao.vercel.app/
```

---

# 📂 Estrutura do projeto

```
src
│
├── app
│   ├── page.tsx
│   ├── layout.tsx
│   │
│   └── produtos
│       └── page.tsx
│
├── components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── CardProduto.tsx
│   └── Carrossel.tsx
│
├── lib
│
public
│
├── produtos
│   └── imagens dos produtos
│
produtos.json
```

---

# ⚙️ Como executar o projeto

## Clone o repositório

```bash
git clone https://github.com/jgarrudaa
```

Entre na pasta:

```bash
cd joao-da-construcao
```

---

## Instale as dependências

```bash
npm install
```

---

## Execute em desenvolvimento

```bash
npm run dev
```

Acesse:

```
http://localhost:3000
```

---

# 📦 Build para produção

Gerar versão otimizada:

```bash
npm run build
```

Iniciar servidor:

```bash
npm run start
```

---

# 🔍 Lint

Para verificar padrões e possíveis problemas:

```bash
npm run lint
```

---

# 🧩 Como funciona

## Catálogo de produtos

Os produtos são armazenados em:

```
produtos.json
```

Exemplo:

```json
{
  "nome": "Cimento 50kg",
  "descricao": "Cimento para construção",
  "preco": 39.90,
  "destaque": true
}
```

A página inicial filtra automaticamente produtos marcados como:

```json
"destaque": true
```

---

## 🖼️ Otimização de imagens

O projeto utiliza:

```tsx
next/image
```

garantindo:

* Melhor carregamento
* Otimização automática
* Melhor performance

---

## 🎠 Carrossel

Implementado utilizando:

* Embla Carousel
* Autoplay Plugin

Possui:

* Reprodução automática
* Responsividade
* Integração com React

---

# 🛠️ Scripts disponíveis

| Comando         | Descrição                           |
| --------------- | ----------------------------------- |
| `npm run dev`   | Executa ambiente de desenvolvimento |
| `npm run build` | Gera build de produção              |
| `npm run start` | Inicia aplicação em produção        |
| `npm run lint`  | Analisa qualidade do código         |

---

# 🚧 Próximas melhorias

* [ ] Sistema de busca de produtos
* [ ] Filtros por categoria
* [ ] Carrinho de compras
* [ ] Checkout
* [ ] Integração com pagamentos
* [ ] Área administrativa
* [ ] Banco de dados
* [ ] Sistema de autenticação
* [ ] Animações avançadas

---

# 📚 Conceitos aplicados

Durante o desenvolvimento foram utilizados:

* Componentização React
* Tipagem com TypeScript
* Server Components do Next.js
* Responsividade com Tailwind CSS
* Organização modular
* Reutilização de componentes
* Otimização de performance

---

# 👨‍💻 Desenvolvedor

Desenvolvido por:

**João Guilherme**

GitHub:

```
https://github.com/jgarrudaa
```

---

⭐ Se este projeto ajudou ou inspirou você, considere deixar uma estrela no repositório!

