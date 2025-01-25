# React Basics Portfolio

This repository contains a portfolio developed with **React**, **React Router**, **Bootstrap**, and other technologies, showcasing practical exercises completed during React learning.

## Overview

The project's goals are:

- Consolidate fundamental knowledge in React.
- Demonstrate best practices in using components, routing, and styling.
- Serve as a portfolio for future opportunities.

## Features

- Dynamic navigation using **React Router**.
- Responsive layout with **Bootstrap**.
- Code highlighting with **Prism.js**.
- Modular structure for easily adding new exercises.

## Technologies Used

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Bootstrap](https://getbootstrap.com/)
- [React Router](https://reactrouter.com/)
- [Prism.js](https://prismjs.com/)

## Project Structure

```plaintext
react-basics
├── src
│   ├── components          # Reusable components
│   │   ├── Accordion.jsx
│   │   ├── Card.jsx
│   │   ├── CodeViewer.jsx
│   │   ├── DynamicPage.jsx
│   │   ├── ArgsEditor.jsx
│   │   ├── Output.jsx
│   │   └── Navbar.jsx
│   ├── pages               # Main pages
│   │   ├── About.jsx
│   │   ├── Home.jsx
│   │   ├── constants       # Shared data
│   │   │   └── componentsData.jsx
│   │   └── exercises       # Practical exercises (folders are categories)
│   │       └── component
│   │           ├── Ex2.jsx
│   │           └── Greeting.jsx
│   ├── App.jsx             # Main component
│   ├── main.jsx            # React entry point
├── .github/workflows       # CI/CD automation settings
│   └── deploy.yml
├── public
│   └── index.html          # Base HTML of the project
├── package.json            # Project configurations and dependencies
├── vite.config.js          # Vite configuration
└── yarn.lock               # Yarn lockfile
```

## Components

### Accordion

A component to display item lists in an accordion format.

### Card

Styled component to display information with customizable title and content.

### CodeViewer

Code highlighting using Prism.js for better visualization.

### Navbar

Navigation bar that integrates dynamic links with React Router.

### DynamicPage

Page that generates dynamic content based on external data.

### ArgsEditor

Editor to dynamically manipulate arguments.

### Output

Component that displays output based on user input.

## Access Online

The project is available on [GitHub Pages](https://rafaelvgomes.github.io/react-basics/).

## How to Run the Project

1. Clone this repository:

   ```bash
   git clone https://github.com/RafaelVGomes/react-basics.git
   cd react-basics
   ```

2. Install dependencies:

   ```bash
   yarn
   ```

3. Start the development server:

   ```bash
   yarn dev
   ```

4. Access the project in the browser at [http://localhost:5000](http://localhost:5000).

## Exercises

Exercises will be dynamically added and displayed in the portfolio.

## License

This project is licensed under the [MIT License](LICENSE).

---

**Maintainer:** [Rafael Vieira Gomes](https://github.com/RafaelVGomes)
