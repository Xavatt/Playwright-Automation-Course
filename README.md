# 🎭 Playwright Automation Course

![Playwright](https://img.shields.io/badge/Playwright-2EAD33?style=for-the-badge&logo=playwright&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)

> **Learning repository** — documents my progress through a Playwright + TypeScript automation course, as part of my transition from QA Engineer to SDET.

---

## 📁 Project Structure

```
playwright-automation-course/
├── .github/
│   └── workflows/
│       └── playwright.yml    # CI pipeline (GitHub Actions)
├── tests/
│   ├── UIBasicstest.spec.js  # Browser context, navigation, basic interactions
│   └── practiceLogin.spec.js # Login flows and form interactions
├── .gitignore
├── package.json
├── playwright.config.js      # Playwright configuration
└── README.md
```

---

## 🛠️ Tech Stack

| Tool | Purpose |
|---|---|
| [Playwright](https://playwright.dev/) | End-to-end browser automation |
| [Node.js](https://nodejs.org/) | Runtime environment |
| [GitHub Actions](https://github.com/features/actions) | CI/CD pipeline |

---

## ⚙️ Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/playwright-automation-course.git
cd playwright-automation-course

# Install dependencies
npm install

# Install Playwright browsers
npx playwright install
```

---

## ▶️ Running the Tests

```bash
# Run all tests
npx playwright test

# Run a specific file
npx playwright test tests/UIBasicstest.spec.js

# Run in headed mode (visible browser)
npx playwright test --headed

# Open the HTML report
npx playwright show-report
```

---

> ⚠️ **This is a learning repository.** Code reflects progress through a structured course and may include work-in-progress exercises. Intended for portfolio and reference purposes.

---
---

# 🎭 Playwright Automation Course — Español

![Playwright](https://img.shields.io/badge/Playwright-2EAD33?style=for-the-badge&logo=playwright&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)

> **Repositorio de aprendizaje** — documenta mi progreso a través de un curso de automatización con Playwright + TypeScript, como parte de mi transición de QA Engineer a SDET.

---

## 📁 Estructura del Proyecto

```
playwright-automation-course/
├── .github/
│   └── workflows/
│       └── playwright.yml    # Pipeline CI (GitHub Actions)
├── tests/
│   ├── UIBasicstest.spec.js  # Contexto del navegador, navegación e interacciones básicas
│   └── practiceLogin.spec.js # Flujos de login e interacciones con formularios
├── .gitignore
├── package.json
├── playwright.config.js      # Configuración de Playwright
└── README.md
```

---

## ⚙️ Instalación

```bash
# Clonar el repositorio
git clone https://github.com/TU_USUARIO/playwright-automation-course.git
cd playwright-automation-course

# Instalar dependencias
npm install

# Instalar los navegadores de Playwright
npx playwright install
```

---

## ▶️ Ejecutar los Tests

```bash
# Ejecutar todos los tests
npx playwright test

# Ejecutar un archivo específico
npx playwright test tests/UIBasicstest.spec.js

# Ejecutar en modo headed (navegador visible)
npx playwright test --headed

# Ver el reporte HTML
npx playwright show-report
```

---

> ⚠️ **Este es un repositorio de aprendizaje.** El código refleja el avance a través de un curso estructurado y puede incluir ejercicios en progreso. Pensado con fines de portafolio y referencia personal.
