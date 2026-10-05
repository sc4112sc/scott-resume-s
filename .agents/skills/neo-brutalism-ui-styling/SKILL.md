---
name: neo-brutalism-ui-styling
description: >-
  Neo-brutalism / Pop 視覺設計系統實作指南。當使用者要求調整 UI 樣式、新增按鈕/卡片/標籤特效、設定 Pop 立體陰影、調整深色模式配色或編寫微動畫時使用此技能。
---

# Neo-brutalism & Pop UI Styling Skill

本 Skill 指導如何精確運用專案中的 Tailwind CSS 設計 Token、立體硬陰影、幾何邊框與微互動樣式，維持一致的 **Neo-brutalism / Pop** 視覺風格。

## 1. 核心設計語彙

- **幾何結構**：鮮明厚實的黑線邊框（`border-2 border-slate-900 dark:border-slate-700`）搭配柔和幾何大圓角（`rounded-2xl` 或 `rounded-3xl`）。
- **硬邊陰影 (Pop Shadow)**：不帶模糊的高對比單向位移硬陰影（`4px 4px 0px 0px #0f172a`），創造如貼紙或立體卡片般的實體觸感。
- **微互動回饋**：滑鼠 Hover 浮起位移、Active 壓下扁平化，提供絕佳操作手感。

---

## 2. Token 與 Class 速查表

### 2.1 品牌專屬色票 (`tailwind.config.js`)

| Token Class | 色碼 | 用途推薦 |
| :--- | :--- | :--- |
| `bg-brand-yellow` | `#FFE600` | 主視覺強調、醒目標記、高亮標籤 |
| `bg-brand-orange` | `#FF5722` | 警告提示、技術標籤（如 Flutter, 原生 iOS） |
| `bg-brand-coral` | `#FF6B6B` | 重點按鈕、愛心、聯絡與號召標籤 |
| `bg-brand-cyan` | `#00E5FF` | 科技感標籤、Web 專案識別、浮動裝飾 |
| `bg-brand-blue` | `#3B82F6` | 主要按鈕、超連結、TypeScript/Vue 標籤 |
| `bg-brand-purple` | `#8B5CF6` | 專案分類標籤、架構解析區塊 |
| `bg-brand-pink` | `#EC4899` | 亮點強調、互動圖示背景 |
| `bg-brand-mint` | `#10B981` | 成功狀態、在職/上線狀態、Vue 綠色生態 |
| `bg-brand-lime` | `#84CC16` | 活躍標籤、獲獎徽章 |

### 2.2 立體硬陰影 (Pop Shadows)

| 類別 Class | 規格 | 建議場景 |
| :--- | :--- | :--- |
| `shadow-pop-sm` | `2px 2px 0px #0f172a` | 小型標籤 (Badge)、小按鈕 |
| `shadow-pop` | `4px 4px 0px #0f172a` | 標準卡片、主要操作按鈕 |
| `shadow-pop-lg` | `6px 6px 0px #0f172a` | 重點突顯區塊、Hero 區域卡片 |
| `shadow-pop-xl` | `8px 8px 0px #0f172a` | 彈窗 (Modal)、全螢幕 Lightbox 容器 |
| `shadow-pop-primary` | `4px 4px 0px #0284c7` | 藍色系專屬聚焦陰影 |
| `shadow-pop-coral` | `4px 4px 0px #e11d48` | 珊瑚紅焦點陰影 |
| `shadow-pop-amber` | `4px 4px 0px #d97706` | 琥珀金/橘色焦點陰影 |
| `shadow-pop-purple` | `4px 4px 0px #7c3aed` | 紫色焦點陰影 |

---

## 3. 常用 UI 組合配方 (UI Recipes)

### 3.1 標準 Pop 卡片 (Pop Card)
```html
<div class="pop-card bg-white dark:bg-slate-900 border-2 border-slate-900 dark:border-slate-700 rounded-2xl p-6 shadow-pop hover:shadow-pop-lg transition-all duration-200">
  <h3 class="text-xl font-bold text-slate-900 dark:text-white font-mono mb-2">卡片標題</h3>
  <p class="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">內文說明與重點描述...</p>
</div>
```

### 3.2 彈簧按鈕 (Pop Button)
```html
<!-- 主要按鈕 -->
<button class="pop-button inline-flex items-center gap-2 px-5 py-2.5 bg-brand-blue text-white font-bold rounded-xl border-2 border-slate-900 dark:border-slate-700 shadow-pop active:shadow-none transition-all duration-150">
  <span>查看更多專案</span>
</button>

<!-- 次要/幽靈按鈕 -->
<button class="pop-button inline-flex items-center gap-2 px-5 py-2.5 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-bold rounded-xl border-2 border-slate-900 dark:border-slate-700 shadow-pop active:shadow-none transition-all duration-150">
  <span>下載履歷</span>
</button>
```

### 3.3 技術標籤徽章 (Pop Badge)
```html
<span class="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-yellow text-slate-900 text-xs font-bold font-mono rounded-lg border-2 border-slate-900 shadow-pop-sm">
  <span>Vue 3 Composition API</span>
</span>
```

### 3.4 微動畫效果 (Animations)
- **浮動效果**：`animate-float`（3.5s 柔和上下浮動，適合裝飾球或幾何圖形）。
- **搖擺晃動**：`animate-wiggle`（1.5s 輕微旋轉搖擺，適合歡迎揮手圖示或打招呼標籤）。
- **呼吸跳動**：`animate-bounce-subtle`（2s 輕微彈跳，適合向下捲動指標）。

---

## 4. 深色模式 (Dark Mode) 調校準則

1. **背景對比**：
   - 淺色：`bg-slate-50` 或 `bg-white`
   - 深色：`dark:bg-slate-950` 或 `dark:bg-slate-900`
2. **文字階層**：
   - 主標題：`text-slate-900 dark:text-white`
   - 次要內文：`text-slate-600 dark:text-slate-300`
   - 輔助說明：`text-slate-400 dark:text-slate-500`
3. **邊框處理**：
   - 一律使用 `border-slate-900 dark:border-slate-700`，保持深色模式下輪廓清晰但不刺眼。
