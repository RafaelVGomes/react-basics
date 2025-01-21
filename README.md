# React Basics Portfolio

Este repositório contém um portfólio desenvolvido com **React**, **React Router**, **Bootstrap** e outras tecnologias, exibindo exercícios práticos realizados durante o aprendizado de React.

## Visão Geral

O projeto tem como objetivo:

- Consolidar conhecimentos fundamentais em React.
- Demonstrar boas práticas no uso de componentes, roteamento e estilização.
- Servir como portfólio para futuras oportunidades.

## Funcionalidades

- Navegação dinâmica utilizando **React Router**.
- Layout responsivo com **Bootstrap**.
- Destaque de código com **Prism.js**.
- Estrutura modular para adicionar novos exercícios facilmente.

## Tecnologias Utilizadas

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Bootstrap](https://getbootstrap.com/)
- [React Router](https://reactrouter.com/)
- [Prism.js](https://prismjs.com/)

## Estrutura do Projeto

```plaintext
react-basics
├── src
│   ├── components          # Componentes reutilizáveis
│   │   ├── Accordion.jsx
│   │   ├── Card.jsx
│   │   ├── CodeViewer.jsx
│   │   └── Navbar.jsx
│   ├── pages               # Páginas principais
│   │   ├── About.jsx
│   │   ├── Home.jsx
│   │   ├── constants       # Dados compartilhados
│   │   │   └── componentsData.jsx
│   │   └── exercises       # Exercícios práticos
│   │       └── (Pastas de categorias...)
│   │           └── (Arquivos JSX...)
│   ├── App.jsx             # Componente principal
│   ├── main.jsx            # Ponto de entrada do React
├── public
│   └── index.html          # HTML base do projeto
├── package.json            # Configurações do projeto e dependências
├── vite.config.js          # Configuração do Vite
└── yarn.lock               # Lockfile do Yarn
```

## Componentes

### Accordion

Um componente para exibir listas de itens em formato de acordeão.

### Card

Componente estilizado para exibir informações com título e conteúdo personalizados.

### CodeViewer

Destaque de código usando Prism.js para melhor visualização.

### Navbar

Barra de navegação que integra links dinâmicos com React Router.

## Como Executar o Projeto

1. Clone este repositório:

   ```bash
   git clone https://github.com/RafaelVGomes/react-basics.git
   cd react-basics
   ```

2. Instale as dependências:

   ```bash
   yarn
   ```

3. Inicie o servidor de desenvolvimento:

   ```bash
   yarn dev
   ```

4. Acesse o projeto no navegador em [http://localhost:5000](http://localhost:5000).

## Exercícios

Os exercícios serão adicionados e exibidos dinamicamente no portfólio.

## Licença

Este projeto é licenciado sob a [MIT License](LICENSE).

---

**Mantenedor:** [Rafael Vieira Gomes](https://github.com/RafaelVGomes)