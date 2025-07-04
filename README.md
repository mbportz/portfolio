# 💼 Portfolio Website

---

### 🔧 **Tech Stack**

![HTML5](https://img.shields.io/badge/HTML5-orange?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-blue?logo=css3&logoColor=white)
![SCSS](https://img.shields.io/badge/Sass-SCSS-pink?logo=sass&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow?logo=javascript&logoColor=black)
![Visual Studio Code](https://img.shields.io/badge/VSCode-Editor-007ACC?logo=visualstudiocode&logoColor=white)

---

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Site-brightgreen)](https://portfolio-marc-five.vercel.app/)
![License](https://img.shields.io/badge/license-MIT-green)
![Last Commit](https://img.shields.io/github/last-commit/mbportz/projects)

---

> 🚀 **A fully responsive, modern personal portfolio website built using HTML, SCSS (Sass), and JavaScript — fully customizable, modular, and easy to maintain.**

---

## ✨ Features

-  📱 Mobile-first responsive design
-  🎯 Modular SCSS architecture (variables, components, sections)
-  ⚡ Live Sass Compilation with VS Code integration
-  🎨 Modern clean layout and navigation
-  🚰 Easy customization and scalability

---

## 📂 Project Structure

```bash
portfolio/
│
├── index.html
├── styles/
│   ├── scss/
│   │   ├── main.scss
│   │   ├── _abstracts.scss
│   │   ├── _components.scss
│   │   └── _sections.scss
│   └── css/
│       └── main.css
├── scripts/
│   └── main.js
├── images/
└── README.md
```

---

## 🚀 Getting Started

### ✅ Prerequisites

| Tool               | Link                                                                                        |
| ------------------ | ------------------------------------------------------------------------------------------- |
| Node.js (optional) | [nodejs.org](https://nodejs.org/)                                                           |
| Visual Studio Code | [code.visualstudio.com](https://code.visualstudio.com/)                                     |
| Live Sass Compiler | [VSCode Extension](https://marketplace.visualstudio.com/items?itemName=glenn2223.live-sass) |

---

### 🔧 Installation

```bash
git clone https://github.com/mbportz/projects.git
cd your-repo
```

---

### ▶ Running the Project

#### Option 1 — Live Sass Compiler (Recommended)

1️⃣ Install the **Live Sass Compiler** extension in VSCode.
2️⃣ Update `.vscode/settings.json`:

```json
"liveSassCompile.settings.formats": [
  {
    "format": "expanded",
    "extensionName": ".css",
    "savePath": "/styles/css"
  }
]
```

3️⃣ Click **"Watch Sass"** in VSCode.
4️⃣ Edit any `.scss` file to generate CSS.

#### Option 2 — Sass CLI

```bash
sass --watch styles/scss/main.scss:styles/css/main.css
```

---

## 🎨 Customization

-  Design tokens: `scss/_abstracts.scss` (colors, fonts)
-  Components: `scss/_components.scss` (buttons, cards, etc.)
-  Sections: `scss/_sections.scss` (layout structure)
-  Content: `index.html`
-  Assets: `images/`

---

## 🧹 Troubleshooting

-  Make sure Live Sass Compiler is running.
-  Verify correct paths in your VSCode settings.
-  If output is missing, save any `.scss` file again.

---

## 📄 License

This project is licensed under the MIT License — feel free to modify, customize, and use it for personal or professional purposes.

---

## 🌐 Connect with Me

-  🔗 [Portfolio Website](https://portfolio-marc-five.vercel.app/)
-  🐙 [GitHub](https://github.com/mbportz)
-  💼 [LinkedIn](https://linkedin.com/in/marc-bryan-portuguez-0a67a1145)

---

🚀 **This project is ready for recruiters, employers, and open-source contributors.**
