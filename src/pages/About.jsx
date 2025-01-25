export default function About() {
  return (
    <div className="container mt-4">
      <h1 className="text-center">About This Project / Sobre o Projeto</h1>

      <div className="row mt-4">
        <div className="col-md-6">
          <h2>English</h2>
          <p>
            This project is a React-based portfolio designed to consolidate practical knowledge in React development. It showcases exercises, best practices, and reusable components, aiming to serve as both a learning tool and a professional portfolio.
          </p>
          <h3>Goals</h3>
          <ul>
            <li>Strengthen React concepts such as components, state, props, and hooks.</li>
            <li>Provide examples of modular design and reusable code.</li>
            <li>Build a professional portfolio to share with potential employers.</li>
          </ul>
        </div>

        <div className="col-md-6">
          <h2>Português</h2>
          <p>
            Este projeto é um portfólio baseado em React, projetado para consolidar o conhecimento prático no desenvolvimento com React. Ele exibe exercícios, boas práticas e componentes reutilizáveis, com o objetivo de servir como uma ferramenta de aprendizado e um portfólio profissional.
          </p>
          <h3>Objetivos</h3>
          <ul>
            <li>Fortalecer conceitos de React como componentes, estado, props e hooks.</li>
            <li>Fornecer exemplos de design modular e código reutilizável.</li>
            <li>Construir um portfólio profissional para compartilhar com potenciais empregadores.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
