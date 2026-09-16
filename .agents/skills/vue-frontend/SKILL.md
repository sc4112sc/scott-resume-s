---
name: vue-frontend
description: >-
  Vue 3 前端專案開發與維護規範指南。涵蓋此專案（scott-resume-s）的架構分層、TypeScript 與 Composition API 寫法、
  元件設計規範、Pinia 狀態管理模式、Tailwind CSS 設計系統、API 服務擴充原則以及測試與建置檢查規範。
---

# Vue 3 前端開發與專案規範指南 (Vue 3 Frontend Guidelines)

本文件定義此 Vue 3 專案（`scott-resume-s`）的架構原則、程式碼風格、元件設計規範、狀態管理、樣式系統與測試建置流程。未來 AI 或開發者在進行任何功能修改、頁面新增或重構時，**必須嚴格遵循本指南**以保持專案風格一致性與架構品質。

---

## 1. 技術棧總覽 (Tech Stack)

- **核心框架**：Vue 3 (`^3.5.x`)，全面採用 Composition API (`<script setup lang="ts">`)
- **建置工具**：Vite (`^5.4.x`)
- **程式語言**：TypeScript (`~5.6.x`)，開啟嚴格型別檢查 (`strict: true`)
- **狀態管理**：Pinia (`^4.0.x`)（Setup Store 寫法）
- **路由管理**：Vue Router 4 (`createWebHistory`)
- **樣式與設計系統**：Tailwind CSS (`^3.4.x`) + 自訂 Pop / Neo-brutalism 設計 Token
- **圖示庫**：`lucide-vue-next` + `@/components/icons/` 自製向量圖示
- **套件管理工具**：Yarn / npm

---

## 2. 專案架構與目錄結構 (Architecture & Structure)

```text
scott-resume-s/
├── .agents/
│   └── skills/
│       └── vue-frontend/
│           └── SKILL.md          # 本規範指南
├── public/                       # 靜態資源（直接映射至根路徑，如 /images/, /downloads/, favicon 等）
│   ├── images/                   # 履歷專案截圖、證照、大頭貼等
│   ├── downloads/                # 下載檔案（如 APK 等）
│   └── ...
├── src/
│   ├── assets/                   # 需要經由 Vite 打包處理的靜態資源
│   ├── components/               # 可重用 UI 元件
│   │   ├── icons/                # 自訂 SVG 圖示元件 (如 AndroidIcon, VueIcon, FlutterIcon)
│   │   ├── Navbar.vue            # 全域頂部導覽列
│   │   ├── Footer.vue            # 全域頁尾
│   │   ├── ImageSlot.vue         # 圖片載入/錯誤 Fallback 元件
│   │   └── ProjectGallery.vue    # 專案多圖輪播與全螢幕 Lightbox 預覽元件
│   ├── router/
│   │   └── index.ts              # 路由定義與 scrollBehavior 設定
│   ├── stores/                   # Pinia 狀態管理
│   │   └── resume.ts             # 履歷資料主 Store 與 TypeScript 型別定義
│   ├── views/                    # 頁面級視圖元件 (View / Page Components)
│   │   ├── HomeView.vue          # 首頁 / 履歷總覽
│   │   ├── ProjectsView.vue      # 精選專案列表與展示
│   │   ├── ZhongyouExperienceView.vue # 核心經歷與技術研究深度解析
│   │   └── ContactView.vue       # 聯絡與合作洽詢表單
│   ├── App.vue                   # 根元件（佈局框架、頁面切換 Transition）
│   ├── main.ts                   # 應用程式進入點（Pinia、Router、全域 CSS 掛載）
│   ├── style.css                 # 全域樣式、字體、背景網格與自訂 Utility Class
│   └── vite-env.d.ts             # Vite 環境宣告
├── index.html                    # 應用程式 HTML 模板與 Meta 設定
├── package.json                  # 專案相依套件與指令腳本
├── tailwind.config.js            # Tailwind 主題擴充、顏色與陰影設定
├── tsconfig.app.json             # 應用端 TypeScript 編譯設定（含 @/* Alias）
├── tsconfig.json                 # TypeScript 專案參考設定
└── vite.config.ts                # Vite 配置（含 Vue Plugin 與 @ Alias）
```

---

## 3. 程式碼風格與 TypeScript 規範 (Coding Style)

### 3.1 SFC 單一檔案元件結構
所有 `.vue` 檔案必須嚴格遵循下列標籤順序：
```vue
<script setup lang="ts">
// 1. Vue 核心 API 引用 (ref, computed, watch, onMounted, etc.)
// 2. 第三方套件引用 (vue-router, pinia, lucide-vue-next, etc.)
// 3. 內部模組與元件引用 (@/stores/..., @/components/...)
// 4. Props / Emits 定義
// 5. 元件內部 State / Computed / Methods / Lifecycle Hooks
</script>

<template>
  <!-- 語意化 HTML 結構與 Tailwind CSS Class -->
</template>

<style scoped>
/* 僅在 Tailwind 無法實現時撰寫必要自訂樣式或動畫 */
</style>
```

### 3.2 TypeScript 型別規範
- **禁止使用 `any`**：所有資料結構必須定義精準 Interface 或 Type。
- **型別命名**：採用 PascalCase（例如 `Experience`, `Project`, `ActiveGallery`）。
- **資料模型共用**：跨元件共用的資料模型定義於對應 Store 檔案頂部並 `export`（例如 `src/stores/resume.ts` 中的 `Project`, `Education` 等）。
- **路徑別名**：跨目錄引用必須一律使用 `@/` 別名，禁止多層相對路徑 `../../`。

### 3.3 命名慣例
- **Vue 元件檔案**：PascalCase（例如 `ProjectGallery.vue`, `HomeView.vue`, `FlutterIcon.vue`）。
- **View 元件命名**：以 `*View.vue` 結尾（例如 `ContactView.vue`）。
- **Store 檔案**：camelCase（例如 `resume.ts`），Hook 命名為 `use*Store`（例如 `useResumeStore`）。
- **常數與工具**：camelCase 或 UPPER_SNAKE_CASE（常數）。

---

## 4. 元件開發與設計規範 (Component Standards)

### 4.1 職責分離原則 (Separation of Concerns)
- **展示型元件 (Presentational Components)**：放置於 `src/components/`，專注於 UI 渲染與本地元件狀態（如 `ImageSlot.vue`、`ProjectGallery.vue`）。透過 `defineProps` 接收資料，避免直接依賴外部全域狀態（除非是全域性導覽如 `Navbar.vue`）。
- **視圖型元件 (View Components)**：放置於 `src/views/`，負責頁面版面配置、呼叫 Store 資料、組合展示型元件與路由互動。
- **圖示元件 (Icon Components)**：客製化向量 SVG 一律抽離至 `src/components/icons/`，內部採用純 SVG 搭配 `fill="currentColor"` 或自訂品牌色。

### 4.2 Props 與 Emits 定義規範
採用 TypeScript 純型別宣告搭配 `withDefaults`：
```typescript
interface Props {
  src: string
  alt?: string
  aspectRatio?: string
  objectFit?: 'cover' | 'contain' | 'fill'
  placeholderText?: string
}

const props = withDefaults(defineProps<Props>(), {
  alt: 'Image',
  aspectRatio: 'aspect-video',
  objectFit: 'cover',
  placeholderText: '圖片載入中...',
})
```

### 4.3 圖片載入與 Fallback 規範
- 專案展示圖片一律需具備載入失敗降級保護：
  - 獨立圖片使用 `<ImageSlot :src="..." :alt="..." />`。
  - 多圖展示使用 `<ProjectGallery :images="..." :project-title="..." :project-type="..." />`。
  - 原生 `<img>` 需綁定 `@error` 事件處理防呆。

### 4.4 彈窗與全螢幕 Lightbox 規範
- 彈窗或全螢幕預覽必須使用 `<Teleport to="body">` 渲染至最外層。
- 必須支援鍵盤操作監聽（`Escape` 關閉、方向鍵 `ArrowLeft`/`ArrowRight` 切換），並於 `onUnmounted` 正確移除事件監聽器以防記憶體洩漏。

---

## 5. Pinia 狀態管理規範 (Pinia Patterns)

### 5.1 Setup Store 語法
一律採用 Composition API 風格的 Setup Store 語法：
```typescript
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export interface MyData {
  id: string
  title: string
}

export const useMyStore = defineStore('myStore', () => {
  // 1. State
  const items = ref<MyData[]>([])
  const activeId = ref<string | null>(null)

  // 2. Getters
  const activeItem = computed(() => items.value.find((i) => i.id === activeId.value))

  // 3. Actions
  function setActiveId(id: string) {
    activeId.value = id
  }

  return {
    items,
    activeId,
    activeItem,
    setActiveId,
  }
})
```

### 5.2 元件中使用 Store
- 在 `<script setup>` 中透過 `const store = useMyStore()` 取得實例。
- 存取 State 與 Getters 時直接透過 `store.property` 讀取，保持響應性。
- 解構 Store 狀態時必須使用 `storeToRefs`，以避免遺失響應性。

---

## 6. 樣式與視覺設計系統 (Tailwind & Visual System)

專案採用兼具活潑、現代感與專業度的 **Pop / Neo-brutalism** 風格：

### 6.1 核心設計 Token (`tailwind.config.js`)
- **品牌色彩 (Brand Colors)**：
  - `brand-yellow`: `#FFE600`（醒目黃）
  - `brand-orange`: `#FF5722`（亮橘）
  - `brand-coral`: `#FF6B6B`（珊瑚紅）
  - `brand-cyan`: `#00E5FF`（青藍）
  - `brand-blue`: `#3B82F6`（科技藍）
  - `brand-purple`: `#8B5CF6`（紫羅蘭）
  - `brand-pink`: `#EC4899`（粉紅）
  - `brand-mint`: `#10B981`（薄荷綠）
  - `brand-lime`: `#84CC16`（萊姆綠）
- **立體立體陰影 (Pop Shadow Tokens)**：
  - `shadow-pop-sm`: `2px 2px 0px 0px #0f172a`
  - `shadow-pop`: `4px 4px 0px 0px #0f172a`
  - `shadow-pop-lg`: `6px 6px 0px 0px #0f172a`
  - `shadow-pop-xl`: `8px 8px 0px 0px #0f172a`
- **自訂 Utility 類別 (`src/style.css`)**：
  - `.pop-card`：卡片懸停位移效果 (`transform: translate(-3px, -3px)`)。
  - `.pop-button`：按鈕點擊彈簧手感 (`active: translate(2px, 2px)` 且陰影貼平)。
- **深色模式 (Dark Mode)**：
  - 設定為 `darkMode: 'class'`。
  - 所有卡片與文字必須同時支援淺色與深色階層（例如 `bg-white dark:bg-slate-900 border-2 border-slate-900 dark:border-slate-700 text-slate-900 dark:text-white`）。

---

## 7. API 服務與資料流規範 (API Service & Data Flow)

### 7.1 當前資料流架構
目前專案為靜態履歷與展示型 SPA，核心履歷資料直接託管於 `src/stores/resume.ts` 內，表單送出（如 `ContactView.vue`）透過 `mailto:` 協議與剪貼簿原生 API 處理。

### 7.2 未來擴充 API 服務之規範
若未來需要對接後端 RESTful API、Headless CMS 或第三方服務（如 GitHub API、電子郵件發送服務），必須遵循以下分層結構：
1. **API Client 集中管理 (`src/services/apiClient.ts`)**：
   - 封裝 `fetch` 或 `axios` 實例，設定 `baseURL`、`timeout`、全域請求頭與攔截器（Interceptor）。
2. **領域 API 模組 (`src/services/*.service.ts`)**：
   - 依業務切分（例如 `projectService.ts`, `contactService.ts`）。
   - 函式回傳強型別 Promise（如 `Promise<ApiResponse<Project[]>>`）。
3. **Store 作為中間層**：
   - 頁面元件不直接呼叫 API 模組，由 Store Action 負責調用 Service、處理 Loading / Error 狀態並寫入 State。

---

## 8. 路由與佈局規範 (Routing & Layout)

- **路由模式**：採用 HTML5 History 模式 (`createWebHistory`)。
- **代碼分割 (Code Splitting)**：除首頁 `HomeView` 可靜態引入外，其餘子頁面一律使用動態 `import()` 懶載入（例如 `component: () => import('@/views/ProjectsView.vue')`）。
- **換頁滾動**：所有換頁預設平滑滾動至頂端：
  ```typescript
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' }
  }
  ```
- **過渡動畫**：根元件 `App.vue` 統一使用 `<transition name="fade" mode="out-in">` 達成絲滑轉場。

---

## 9. 測試、型別驗證與建置標準 (Testing & Build Standards)

### 9.1 型別檢查與建置指令
- **靜態型別檢查與編譯**：
  ```bash
  yarn build
  # 執行內容: vue-tsc -b && vite build
  ```
  所有修改完成後，**必須確保 `vue-tsc` 零錯誤通過**。

### 9.2 本地開發與預覽
- **啟動開發伺服器**：`yarn dev`
- **預覽生產打包成品**：`yarn preview`

### 9.3 單元測試擴充建議
如需為核心邏輯或 Store 導入單元測試：
- 推薦使用 **Vitest** + **@vue/test-utils**。
- 測試檔案命名為 `*.spec.ts` 或 `*.test.ts`，置於 `tests/` 或鄰近模組旁。
- 針對 Pinia Store，需在測試前呼叫 `setActivePinia(createPinia())` 建立乾淨環境。

---

## 10. AI 修改與新增程式碼之檢核清單 (AI Contribution Checklist)

當 AI 協助開發者新增功能或修改程式碼時，必須按以下清單逐項核對：

1. [ ] **不隨意更動既有資料結構**：除非使用者要求，避免破壞 `src/stores/resume.ts` 的型別定義。
2. [ ] **保持 SFC `<script setup lang="ts">` 規範**：不可降級至 Options API。
3. [ ] **嚴格型別定義**：不使用 `any`，所有 Props / Emits / API 資料結構皆具備完整型別。
4. [ ] **遵循 Neo-brutalism 視覺規範**：新元件需套用 `border-2 border-slate-900`, `shadow-pop`, `rounded-2xl`, `pop-button` 等專案專屬風格。
5. [ ] **深色模式適配**：確認所有文字、背景、邊框皆具備 `dark:*` 對應樣式。
6. [ ] **無無效引用**：確保無未使用的變數與 import，維持 `vue-tsc` 編譯通過。
7. [ ] **路徑引用統一**：一律使用 `@/` 別名。
8. [ ] **無 Source Code 污染**：嚴格遵守使用者的限制，未獲授權不得擅自刪改業務程式碼。
