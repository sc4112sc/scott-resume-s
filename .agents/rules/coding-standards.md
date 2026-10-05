# Vue 3 Frontend Coding Standards & Architecture Rules

本文件定義 `scott-resume-s` 專案的通用編程風格、架構規範與 AI 開發約束。

## 1. 核心規範摘要

- **框架與語言**：Vue 3.5+ (`<script setup lang="ts">`)、TypeScript 5.6+、Tailwind CSS 3.4+、Pinia 4+。
- **型別安全**：全專案嚴禁使用 `any`，所有 Props / Emits / Store 狀態必須具備明確的 TypeScript 型別定義。
- **路徑別名**：內部跨目錄引用一律使用 `@/` 別名。
- **設計風格**：嚴格遵循 Neo-brutalism / Pop 視覺系統（黑色立體厚邊框 `border-2 border-slate-900`、硬陰影 `shadow-pop-*`、微互動 `.pop-card` / `.pop-button`）。
- **深色模式**：Tailwind `darkMode: 'class'`，所有 UI 元素必須同時提供 `dark:` 適配。
- **品質檢核**：任何程式碼修改完成後，必須維持 `yarn build` (`vue-tsc -b && vite build`) 零錯誤。
