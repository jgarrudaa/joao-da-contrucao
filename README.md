# João da Construção

Loja virtual de produtos para construção e reforma desenvolvida com **Next.js 16**, **TypeScript** e **Tailwind CSS v4**.

## Visão geral

Esta aplicação apresenta:

- Página inicial com um carrossel de banners e cards de produtos em destaque.
- Página de produtos que exibe todos os itens disponíveis.
- Cards de produto com imagem otimizada, descrição, preço formatado em BRL e selo de destaque.
- Layout responsivo para celular, tablet e desktop.

## Tecnologias usadas

- Next.js 16.2.6
- React 19.2.4
- TypeScript 5
- Tailwind CSS v4
- Radix UI
- Embla Carousel + Autoplay
- Lucide Icons
- shadcn/ui

## Estrutura do projeto

- `src/app/page.tsx` - página inicial com produtos em destaque e carrossel.
- `src/app/produtos/page.tsx` - página que lista todos os produtos.
- `src/components/Carrossel.tsx` - componente de carrossel com autoplay.
- `src/components/CardProduto.tsx` - componente de card de produto com formatação de preço.
- `src/components/Header.tsx` - cabeçalho comum do site.
- `src/components/Footer.tsx` - rodapé comum.
- `produtos.json` - catálogo de produtos consumido pelas páginas.
- `src/app/layout.tsx` - layout global da aplicação.

## Como executar

### Instalar dependências

```bash
npm install
```

### Rodar em modo de desenvolvimento

```bash
npm run dev
```

Abra `https://joao-da-contrucao.vercel.app/` no navegador.

### Construir para produção

```bash
npm run build
```

### Iniciar servidor de produção

```bash
npm run start
```

### Executar lint

```bash
npm run lint
```

## Como o projeto funciona

- O catálogo de produtos está em `produtos.json` na raiz do projeto.
- A página inicial filtra apenas produtos com `destaque: true`.
- As imagens dos produtos estão em `public/produtos/`.
- O componente `CardProduto` usa `next/image` para otimização e exibe preço em formato `BRL`.
- O carrossel é construído com `embla-carousel-react` e possui autoplay controlado por `embla-carousel-autoplay`.

## Melhorias sugeridas

- Adicionar navegação entre páginas com links no `Header`.
- Implementar busca e filtros de categoria.
- Adicionar carrinho de compras e checkout.
- Incluir animações e interações extras para dispositivos móveis.

## Observações

- Este projeto usa aliases do TypeScript configurados em `tsconfig.json` para importações limpas (`@/components`, `@/lib`, etc.).
- O layout global aplica fontes do Google (`Roboto` e `Geist`) via `next/font`.

## Contato

`https://github.com/jgarrudaa`
