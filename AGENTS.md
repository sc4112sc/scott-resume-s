# Vue 3 前端專案開發規範與指南 (Project Rules)

本專案（`scott-resume-s`）為個人品牌展示與互動履歷 Single Page Application (SPA)，採用 Vue 3、TypeScript、Tailwind CSS (Neo-brutalism 風格) 與 Pinia 建置。
所有在此專案中編寫、修改或重構程式碼的行為，必須嚴格遵守以下規範。

---

## 1. 核心架構與目錄原則

```text
scott-resume-s/
├── public/                 # 靜態原生檔案（/images/, /downloads/ 等，直接映射根路徑）
├── src/
│   ├── assets/             # 經由 Vite 打包處理的靜態資源
│   ├── components/         # 可重用 UI 元件（展示型、圖示型、彈窗預覽型）
│   │   └── icons/          # 自訂 SVG 圖示元件 (如 AndroidIcon, VueIcon)
│   ├── router/             # 路由配置與切換行為 (Vue Router 4)
│   ├── stores/             # Pinia 狀態管理 (resume.ts)
│   ├── views/              # 頁面級視圖元件 (HomeView, ProjectsView, etc.)
│   ├── App.vue             # 根元件與全域轉場
│   ├── main.ts             # 應用進入點
│   └── style.css           # 全域樣式、字體與自訂 Pop Utility Class
├── tailwind.config.js      # Tailwind 色彩、Pop 陰影與動畫擴充
├── tsconfig.app.json       # 應用端 TypeScript 設定 (@/* alias)
└── vite.config.ts          # Vite 設定
```

- **模組路徑引用**：跨目錄引用必須一律使用 `@/` 別名（例如 `@/stores/resume`、`@/components/Navbar.vue`），嚴禁出現多層相對路徑（如 `../../components/...`）。
- **職責分明**：
  - `src/components/`：展示型 UI 元件（Presentational），透過 `props` 與 `emit` 通訊，避免緊密耦合全域 State。
  - `src/views/`：頁面級別元件，負責調度 Store 資料、路由互動與組裝展示型元件。
  - `src/stores/`：資料狀態主體，所有履歷資料與跨頁面共享狀態集中管理。

---

## 2. 程式碼風格與 TypeScript 規範

### 2.1 SFC 單一檔案元件結構
所有 `.vue` 檔案必須採用 `<script setup lang="ts">`，並嚴格維持下列標籤與程式碼段落順序：

```vue
<script setup lang="ts">
// 1. Vue 核心 API (ref, computed, watch, onMounted, onUnmounted, etc.)
// 2. 第三方套件 (vue-router, pinia, lucide-vue-next, etc.)
// 3. 內部模組與元件 (@/stores/..., @/components/...)
// 4. Props 與 Emits 定義 (withDefaults + defineProps / defineEmits)
// 5. 元件內部狀態、計算屬性與事件處理方法
</script>

<template>
  <!-- 語意化 HTML 結構與 Tailwind CSS Class -->
</template>

<style scoped>
/* 僅在 Tailwind 無法實現時撰寫必要自訂樣式或特殊動畫 */
</style>
```

### 2.2 TypeScript 嚴格規範
- **嚴禁 `any`**：所有資料結構必須定義精準 Interface 或 Type。
- **型別命名**：採用 PascalCase（例如 `Experience`, `Project`, `GalleryImage`）。
- **共用型別位置**：跨元件共用的資料模型一律定義並導出於 `src/stores/resume.ts`。
- **命名慣例**：
  - 元件檔案：PascalCase（例如 `ProjectGallery.vue`, `HomeView.vue`, `FlutterIcon.vue`）。
  - View 元件：以 `*View.vue` 結尾。
  - Store 檔案：camelCase（例如 `resume.ts`），Hook 命名為 `useResumeStore`。

---

## 3. 狀態管理規範 (Pinia)

1. **Setup Store 語法**：一律採用 Composition API 風格（`defineStore('name', () => { ... })`）。
2. **響應性保護**：在元件中解構 Store 的 state/getters 時，**必須**使用 `storeToRefs()`，避免丟失響應性。
3. **資料變更集中化**：複雜的狀態變更應封裝在 Store Action 中，避免在 View 中直接多重侵入式修改 State。

---

## 4. 視覺與設計系統規範 (Neo-brutalism / Pop Style)

本專案採用兼具活力、專業度與幾何質感的 **Pop / Neo-brutalism** 風格：

### 4.1 核心 Token 與 Utility
- **邊框與圓角**：大量採用 `border-2 border-slate-900 dark:border-slate-700` 與 `rounded-2xl` / `rounded-3xl`。
- **立體硬陰影 (Pop Shadows)**：
  - `shadow-pop-sm` (`2px 2px 0px 0px #0f172a`)
  - `shadow-pop` (`4px 4px 0px 0px #0f172a`)
  - `shadow-pop-lg` (`6px 6px 0px 0px #0f172a`)
  - `shadow-pop-xl` (`8px 8px 0px 0px #0f172a`)
- **互動類別 (`src/style.css`)**：
  - `.pop-card`：懸停時微幅上浮位移 (`hover:translate-x-[-3px] hover:translate-y-[-3px]`)。
  - `.pop-button`：點擊時彈簧壓下回饋 (`active:translate-x-[2px] active:translate-y-[2px]`)。
- **品牌重點色彩**：
  - `brand-yellow` (`#FFE600`)、`brand-orange` (`#FF5722`)、`brand-coral` (`#FF6B6B`)
  - `brand-cyan` (`#00E5FF`)、`brand-blue` (`#3B82F6`)、`brand-purple` (`#8B5CF6`)
  - `brand-pink` (`#EC4899`)、`brand-mint` (`#10B981`)、`brand-lime` (`#84CC16`)

### 4.2 深色模式 (Dark Mode)
- 專案使用 class 模式（`<html class="dark">`）。
- **所有新元件與樣式必須同時適配淺色與深色階層**，例如：
  `bg-white dark:bg-slate-900 text-slate-900 dark:text-white border-slate-900 dark:border-slate-700`。

---

## 5. 互動與彈窗安全性

1. **圖片載入保護**：專案中的圖片展示必須包含失敗降級與 Loading 狀態（推薦使用 `<ImageSlot>` 或 `<ProjectGallery>`）。
2. **彈窗與 Lightbox**：全螢幕遮罩或預覽彈窗必須使用 `<Teleport to="body">`，並在 `onMounted` 綁定 `Escape` 鍵監聽、在 `onUnmounted` 正確移除監聽器，防止記憶體洩漏。

---

## 6. AI 程式碼修改核對清單 (Checklist)

AI 或開發者在提交任何修改前，必須自檢以下項目：
1. [ ] 是否遵守 SFC `<script setup lang="ts">` 規範且無 `any` 型別？
2. [ ] 是否一律使用 `@/` 路徑別名？
3. [ ] 新元件是否符合 Neo-brutalism 邊框、陰影與圓角風格？
4. [ ] 是否完整支援深色模式 (`dark:*`) 且對比度清晰？
5. [ ] 執行 `yarn build`（包含 `vue-tsc -b`）是否零錯誤通過？
6. [ ] 是否未破壞 `src/stores/resume.ts` 的既有型別與結構？
