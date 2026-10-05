---
name: resume-data-manager
description: >-
  履歷資料與靜態資源管理流程指南。當使用者要求新增、更新或維護履歷資料（工作經歷、專案清單、技能分類、教育背景、證照獎項、圖片資源、APK下載連結）時使用此技能。
---

# Resume Data Manager Skill

本 Skill 指導如何維護與擴充 `scott-resume-s` 專案中的履歷資料模型與靜態資源。

## 1. 資料模型核心位置

- **主資料存放檔**：`src/stores/resume.ts`
- **靜態資源存放目錄**：
  - 專案圖片與截圖：`public/images/projects/` 或 `public/images/`
  - 證書與獎項圖片：`public/images/certifications/` 或 `public/images/`
  - 下載檔案 (如 Android APK)：`public/downloads/`

---

## 2. 操作指南與標準步驟

### 2.1 新增或編輯「精選專案 (Projects)」

1. **準備靜態圖片**：
   - 將專案封面與多張展示圖放置於 `public/images/`。
   - 命名慣例：`[project-name]-preview.png`、`[project-name]-detail-1.png` 等。
2. **在 `src/stores/resume.ts` 的 `projects` 陣列中新增物件**：
   ```typescript
   {
     id: 'unique-project-slug',
     title: '專案名稱',
     type: 'WEB', // 或 'APP'
     description: '專案簡短說明與核心價值介紹...',
     image: '/images/project-cover.png',
     images: [
       '/images/project-cover.png',
       '/images/project-detail-1.png',
       '/images/project-detail-2.png'
     ],
     imageAlt: '專案名稱預覽',
     implementations: [
       '核心技術特點 1：例如 WebSocket 斷線重連機制',
       '核心技術特點 2：例如 虛擬列表虛擬滾動萬筆資料效能優化',
       '核心技術特點 3：例如 Pinia 集中狀態管理與 TypeScript 嚴格型別'
     ],
     tags: ['Vue 3', 'TypeScript', 'Tailwind CSS', 'Pinia'],
     demoUrl: 'https://example.com/demo',     // 選填
     githubUrl: 'https://github.com/sc4112sc/repo', // 選填
     apkUrl: '/downloads/app-release.apk',    // 選填（若是 APP 專案）
     featured: true                           // 是否於首頁精選區塊展示
   }
   ```
3. **檢查多圖展示**：
   - 確認 `images` 陣列包含所有欲在 `<ProjectGallery>` 輪播與 Lightbox 全螢幕展示的圖片路徑。

---

### 2.2 新增或編輯「工作經歷 (Experiences)」

1. **定位至 `src/stores/resume.ts` 中的 `experiences` 陣列**。
2. **結構規範**：
   ```typescript
   {
     id: 'company-slug',
     company: '公司名稱',
     period: 'Feb 2020 - Aug 2026',
     role: '職稱 (如 前端工程師)',
     products: '負責產品或業務範疇 (如 即時通訊軟體、體育遊戲資訊平台)',
     technologies: ['Vue 3', 'TypeScript', 'Pinia', 'Flutter', 'Tailwind CSS'],
     highlights: [
       '重點成就 1 (量化指標或具體架構優化成果)',
       '重點成就 2 (團隊協作、技術推進、資安防護)',
     ],
     images: ['/images/work-proof-1.png'] // 選填
   }
   ```
3. **若該經歷有深度解析頁面**（如 `src/views/ZhongyouExperienceView.vue`）：
   - 同步確認視圖元件中的技術細節、架構圖或模組說明是否一致。

---

### 2.3 更新技能庫 (Skill Groups)

1. **定位至 `src/stores/resume.ts` 中的 `skillGroups` 陣列**。
2. **結構規範**：
   ```typescript
   {
     category: '分類名稱 (如 Web 前端開發 / 跨平台 App / 狀態與工具)',
     icon: 'Code2', // Lucide 圖示名稱
     skills: ['Vue 3 (Composition API)', 'TypeScript', 'Tailwind CSS', 'Pinia', 'Vite']
   }
   ```

---

### 2.4 新增證照與獲獎 (Awards & Licenses)

1. **將證照截圖或證書圖檔放置於 `public/images/`**。
2. **在 `src/stores/resume.ts` 中的 `awardsAndLicenses` 陣列新增**：
   ```typescript
   {
     id: 'cert-slug',
     title: 'Oracle Certified Professional: Java SE Programmer',
     year: '2019',
     category: 'license', // 'license' 或 'award'
     image: '/images/oracle-java.jpg',
     issuer: 'Oracle',
     description: '掌握 Java 物件導向程式設計、多型、泛型與並行集合基礎。'
   }
   ```

---

## 3. 驗證步驟

完成資料修改後，請依序執行下列動作驗證：
1. 執行型別檢查：`yarn build`
2. 啟動本機測試：`yarn dev`
3. 檢查前台畫面中：
   - 圖片是否正常顯示（無破圖）
   - 標籤色彩與排版是否溢出
   - 外部連結（GitHub、Demo、APK 下載）點擊是否正常開啟新分頁（`target="_blank" rel="noopener noreferrer"`）。
