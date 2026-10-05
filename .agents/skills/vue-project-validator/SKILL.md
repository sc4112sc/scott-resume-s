---
name: vue-project-validator
description: >-
  Vue 3 專案品質驗證、TypeScript 型別檢查與建置除錯流程。當修改完程式碼需要進行型別檢查、執行 yarn build、除錯 Vue 響應性問題或檢查生產打包產物時使用此技能。
---

# Vue Project Validator Skill

本 Skill 指導如何對 `scott-resume-s` 專案進行靜態分析、型別安全檢查、生產環境建置驗證與常見錯誤除錯。

## 1. 核心驗證指令

在任何功能開發或程式碼重構完成後，必須執行以下驗證步驟：

```bash
# 1. 執行 TypeScript 與 Vue SFC 靜態型別編譯檢查 + 生產建置
yarn build
# 實際執行: vue-tsc -b && vite build

# 2. 啟動本機開發伺服器進行熱重載互動測試
yarn dev

# 3. 預覽打包產物 (測試 HTML5 History Router 與靜態資源加載)
yarn preview
```

---

## 2. 常見問題與除錯流程 (Troubleshooting)

### 2.1 `vue-tsc` 型別報錯

#### 症狀 A：`Property '...' does not exist on type '...'`
- **原因**：Store 中的物件缺少定義或型別定義不完全。
- **解法**：檢查 `src/stores/resume.ts` 中的 Interface（如 `Project`, `Experience`, `AwardLicense`），補齊屬性並設定正確型別或選填標記 `?`。

#### 症狀 B：解構 Store 狀態遺失響應性
- **原因**：直接使用 `const { profile, projects } = useResumeStore()` 會使 ref 物件失去響應關聯。
- **解法**：一律使用 `storeToRefs`：
  ```typescript
  import { storeToRefs } from 'pinia'
  import { useResumeStore } from '@/stores/resume'

  const resumeStore = useResumeStore()
  const { profile, projects } = storeToRefs(resumeStore)
  ```

#### 症狀 C：`defineProps` 型別無法正確推導
- **原因**：未使用純型別宣告或預設值型別不吻合。
- **解法**：使用 `withDefaults(defineProps<Props>(), { ... })`，確保預設值符合 Interface。

---

### 2.2 靜態圖片與資源 404 / 破圖檢查

1. **確認檔案位置**：
   - 位於 `public/images/...` 的檔案，程式碼中路徑必須以 `/images/...` 開頭，**不要**包含 `/public/`。
   - 範例：`image: '/images/avatar.jpg'`。
2. **Fallback 健全性**：
   - 檢查是否使用 `<ImageSlot>` 或有綁定 `@error` 事件處理防呆機制。

---

### 2.3 深色模式 (Dark Mode) 與樣式異常

1. **確認 class 是否掛載**：
   - 查看 `<html class="dark">` 是否隨切換按鈕正常切換。
2. **顏色漏寫 dark 對應**：
   - 搜尋新增的 class，確保所有 `bg-white` 都有 `dark:bg-slate-900`（或 `dark:bg-slate-950`），所有 `text-slate-900` 都有 `dark:text-white`。

---

## 3. 交付前自檢清單 (Pre-flight Checklist)

- [ ] `yarn build` 無任何 TypeScript 報錯或警告。
- [ ] 控制台 (Console) 無 Vue warning、Uncaught error 或圖片 404。
- [ ] 響應式佈局：在 Mobile (375px)、Tablet (768px)、Desktop (1280px) 均能正常瀏覽無破版。
- [ ] 點擊所有外部連結（GitHub, CakeResume, 104, 專案 Demo, APK 下載）均能正確響應。
