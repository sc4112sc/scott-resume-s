# Scott Resume (Vue 3 + Vite + TypeScript)

現代化的個人簡歷與作品集網站，採用 Vue 3、Vite、TypeScript、Pinia、Vue Router 與 Tailwind CSS 建置。

## 🛠 技術棧 (Tech Stack)

- **框架**：[Vue 3](https://vuejs.org/) (Composition API, `<script setup>`)
- **建置工具**：[Vite](https://vite.dev/)
- **語言**：[TypeScript](https://www.typescriptlang.org/)
- **狀態管理**：[Pinia](https://pinia.vuejs.org/)
- **路由管理**：[Vue Router 4](https://router.vuejs.org/)
- **樣式庫**：[Tailwind CSS](https://tailwindcss.com/)
- **套件管理**：[Yarn](https://yarnpkg.com/)

## 🚀 快速啟動 (Getting Started)

### 1. 安裝依賴
```bash
yarn install
```

### 2. 本地開發伺服器
```bash
yarn dev
```

### 3. 正式建置 (Production Build)
```bash
yarn build
```

### 4. 預覽建置成果
```bash
yarn preview
```

## 📁 專案結構 (Project Structure)

```text
scott-resume/
├── src/
│   ├── assets/         # 靜態資源 (圖檔、圖示等)
│   ├── components/     # 共用 UI 組件 (Navbar, Footer 等)
│   ├── router/         # Vue Router 路由設定
│   ├── stores/         # Pinia 狀態管理 (resume store 等)
│   ├── views/          # 頁面視圖 (HomeView, ProjectsView, ContactView)
│   ├── App.vue         # 根組件
│   ├── main.ts         # 應用進入點
│   └── style.css       # 全域與 Tailwind 樣式
├── index.html          # HTML 模板
├── tailwind.config.js  # Tailwind CSS 配置
├── tsconfig.json       # TypeScript 配置
└── vite.config.ts      # Vite 配置
```
