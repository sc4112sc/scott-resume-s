---
name: vue-component-dev
description: >-
  Vue 3 元件、頁面視圖與自訂向量圖示開發工作流。當使用者要求新增或重構 UI 元件、建立客製化 SVG Icon、新增 View 頁面或配置 Vue Router 路由時使用此技能。
---

# Vue Component Development Skill

本 Skill 指導如何在 `scott-resume-s` 專案中依據 Vue 3 Composition API、TypeScript 與專案架構規範建立或重構元件。

## 1. 元件分類與存放原則

| 元件類型 | 存放路徑 | 範例 | 說明 |
| :--- | :--- | :--- | :--- |
| **展示型元件** | `src/components/` | `ImageSlot.vue`, `ProjectGallery.vue` | 透過 Props/Emits 通訊，維持純粹與高可覆用性 |
| **自訂圖示元件** | `src/components/icons/` | `AndroidIcon.vue`, `FlutterIcon.vue` | 純 SVG 向量圖示，支援 `currentColor` 或品牌顏色 |
| **視圖頁面元件** | `src/views/` | `HomeView.vue`, `ProjectsView.vue` | 頁面級容器，調用 Pinia Store 與組合 UI 元件 |

---

## 2. 標準元件模板與實作步驟

### 2.1 建立展示型 UI 元件 (Presentational Component)

1. **建立檔案**：`src/components/[ComponentName].vue`
2. **標準程式碼結構**：
   ```vue
   <script setup lang="ts">
   import { computed } from 'vue'

   // 1. 定義 Props Interface
   interface Props {
     title: string
     tag?: string
     isActive?: boolean
     variant?: 'primary' | 'coral' | 'amber' | 'purple'
   }

   // 2. 設定 Props 預設值
   const props = withDefaults(defineProps<Props>(), {
     tag: '',
     isActive: false,
     variant: 'primary'
   })

   // 3. 定義 Emits
   const emit = defineEmits<{
     (e: 'select', id: string): void
     (e: 'close'): void
   }>()

   // 4. 計算樣式 Class
   const variantClasses = computed(() => {
     switch (props.variant) {
       case 'coral':
         return 'bg-brand-coral text-white shadow-pop-coral'
       case 'amber':
         return 'bg-brand-orange text-white shadow-pop-amber'
       case 'purple':
         return 'bg-brand-purple text-white shadow-pop-purple'
       default:
         return 'bg-brand-blue text-white shadow-pop-primary'
     }
   })
   </script>

   <template>
     <div
       class="pop-card p-6 bg-white dark:bg-slate-900 border-2 border-slate-900 dark:border-slate-700 rounded-2xl transition-all duration-200"
     >
       <div class="flex items-center justify-between gap-4 mb-4">
         <h3 class="text-xl font-bold text-slate-900 dark:text-white font-mono">{{ title }}</h3>
         <span
           v-if="tag"
           :class="['px-2.5 py-1 text-xs font-bold rounded-lg border-2 border-slate-900 dark:border-slate-700', variantClasses]"
         >
           {{ tag }}
         </span>
       </div>
       <slot />
     </div>
   </template>
   ```

---

### 2.2 建立自訂向量圖示 (Custom SVG Icon)

1. **建立檔案**：`src/components/icons/[IconName]Icon.vue`
2. **標準結構**（預設寬高 `w-5 h-5`，繼承文字顏色）：
   ```vue
   <script setup lang="ts">
   interface Props {
     className?: string
   }

   withDefaults(defineProps<Props>(), {
     className: 'w-5 h-5'
   })
   </script>

   <template>
     <svg
       :class="className"
       viewBox="0 0 24 24"
       fill="none"
       stroke="currentColor"
       stroke-width="2"
       stroke-linecap="round"
       stroke-linejoin="round"
       xmlns="http://www.w3.org/2000/svg"
     >
       <!-- SVG Path 內容 -->
     </svg>
   </template>
   ```

---

### 2.3 建立新頁面 View 與設定路由 (Routing)

1. **建立頁面檔案**：`src/views/[Name]View.vue`
   ```vue
   <script setup lang="ts">
   import { storeToRefs } from 'pinia'
   import { useResumeStore } from '@/stores/resume'
   import Navbar from '@/components/Navbar.vue'
   import Footer from '@/components/Footer.vue'

   const resumeStore = useResumeStore()
   const { profile } = storeToRefs(resumeStore)
   </script>

   <template>
     <div class="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans">
       <Navbar />
       <main class="flex-grow pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full">
         <!-- 頁面主題內容 -->
       </main>
       <Footer />
     </div>
   </template>
   ```

2. **註冊路由 (`src/router/index.ts`)**：
   - 採用動態 `import()` 懶載入提升效能：
   ```typescript
   {
     path: '/my-new-path',
     name: 'my-new-page',
     component: () => import('@/views/MyNewView.vue'),
     meta: { title: '頁面標題 | Scott Resume' }
   }
   ```

---

### 2.4 彈窗 / Lightbox 安全實作規範

若建立 Modal、Dialog 或全螢幕燈箱：
1. **使用 `<Teleport to="body">`** 確保渲染不受父層 `overflow: hidden` 或 `z-index` 限制。
2. **監聽 `Escape` 與方向鍵**，並務必在 `onUnmounted` 移除監聽器：
   ```typescript
   function handleKeyDown(e: KeyboardEvent) {
     if (e.key === 'Escape') {
       closeModal()
     }
   }

   onMounted(() => {
     window.addEventListener('keydown', handleKeyDown)
   })

   onUnmounted(() => {
     window.removeEventListener('keydown', handleKeyDown)
   })
   ```

---

## 3. 驗證清單

- [ ] 元件內部沒有使用 `any`。
- [ ] 跨目錄 import 一律使用 `@/`。
- [ ] 所有顏色與背景皆具備 `dark:` 樣式對應。
- [ ] 執行 `yarn build` 驗證 `vue-tsc` 編譯通過。
