<script setup lang="ts">
import { RouterLink } from 'vue-router'
import {
  Building2,
  Briefcase,
  Layers,
  Radio,
  Zap,
  Activity,
  Tv,
  MessageSquare,
  Video,
  PlayCircle,
  Film,
  Apple,
  Globe,
  CheckCheck,
  Bell,
  Sparkles,
  Paperclip,
  Home,
  FolderKanban
} from 'lucide-vue-next'
import VueIcon from '@/components/icons/VueIcon.vue'
import FlutterIcon from '@/components/icons/FlutterIcon.vue'
</script>

<template>
  <div class="space-y-12 py-4 sm:py-6">
    <!-- Top Breadcrumb & Return Button -->
    <div class="flex items-center justify-between gap-4">
      <RouterLink
        to="/"
        class="pop-button px-4 py-2 rounded-2xl bg-white dark:bg-slate-800 hover:bg-brand-yellow hover:text-slate-900 text-slate-800 dark:text-slate-200 font-black text-xs sm:text-sm border-2 border-slate-900 shadow-pop-sm flex items-center gap-2 transition-all"
      >
        <span>← 返回履歷總覽</span>
      </RouterLink>

      <span class="inline-flex items-center gap-1.5 text-xs font-black px-3 py-1 rounded-xl bg-brand-yellow text-slate-900 border-2 border-slate-900 shadow-pop-sm">
        <Building2 class="w-3.5 h-3.5" />
        <span>中佑資訊 · 6.5年核心研發專案</span>
      </span>
    </div>

    <!-- Company Hero Banner -->
    <section class="relative overflow-hidden rounded-3xl bg-gradient-to-r from-amber-300 via-sky-200 to-indigo-300 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 p-5 sm:p-7 border-2 border-slate-900 dark:border-slate-700 shadow-pop-lg text-slate-900 dark:text-white space-y-5">
      <div class="space-y-2.5">
        <div class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-lg bg-white dark:bg-slate-800 border-2 border-slate-900 text-xs font-black shadow-pop-sm">
          <Briefcase class="w-3.5 h-3.5 text-slate-900 dark:text-white" />
          <span>2020.02 - 2026.08 · 長達 6.5 年核心研發歷程</span>
        </div>
        <h1 class="text-xl sm:text-2xl font-black tracking-tight text-slate-900 dark:text-white">
          中佑資訊 · 核心專案與技術研究深度解析
        </h1>
        <p class="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300 max-w-3xl leading-relaxed">
          於中佑資訊長達六年半的工程師生涯中，主導 Web 與跨平台 App（Vue 3、Flutter、原生 iOS）架構設計，深度參與即時通訊平台、體育遊戲資訊平台、即時直播串流系統與平台控端，並為團隊導入 Vitest 單元測試體系與多項前端前瞻技術調優研究。
        </p>
      </div>

      <!-- Tech Stack Badges -->
      <div class="flex flex-wrap gap-2 pt-2 border-t-2 border-slate-900/10 dark:border-slate-700">
        <span class="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800 text-slate-900 dark:text-white border-2 border-slate-900 shadow-pop-sm">
          <VueIcon class="w-3.5 h-3.5" />
          <span>Vue 3 (Composition API)</span>
        </span>
        <span class="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800 text-slate-900 dark:text-white border-2 border-slate-900 shadow-pop-sm">
          <FlutterIcon class="w-3.5 h-3.5" />
          <span>Flutter (跨平台 SDK)</span>
        </span>
        <span class="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800 text-slate-900 dark:text-white border-2 border-slate-900 shadow-pop-sm">
          <Apple class="w-3.5 h-3.5 text-slate-900 dark:text-white" />
          <span>原生 iOS (Swift / UIKit)</span>
        </span>
        <span class="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800 text-slate-900 dark:text-white border-2 border-slate-900 shadow-pop-sm">
          <Layers class="w-3.5 h-3.5 text-amber-500" />
          <span>Pinia 狀態管理</span>
        </span>
        <span class="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800 text-slate-900 dark:text-white border-2 border-slate-900 shadow-pop-sm">
          <CheckCheck class="w-3.5 h-3.5 text-emerald-500" />
          <span>Vitest 單元測試</span>
        </span>
        <span class="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800 text-slate-900 dark:text-white border-2 border-slate-900 shadow-pop-sm">
          <Radio class="w-3.5 h-3.5 text-cyan-500" />
          <span>RTMP 直播推流 & WebSocket</span>
        </span>
        <span class="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800 text-slate-900 dark:text-white border-2 border-slate-900 shadow-pop-sm">
          <Zap class="w-3.5 h-3.5 text-amber-500" />
          <span>Scrum 敏捷開發</span>
        </span>
      </div>

      <!-- Quick Navigation Anchors -->
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
        <a href="#im-platform" class="p-3 rounded-2xl bg-white/90 dark:bg-slate-800/90 border-2 border-slate-900 shadow-pop-sm font-black text-xs text-center hover:bg-brand-cyan hover:text-slate-900 transition-colors flex items-center justify-center gap-1.5">
          <MessageSquare class="w-4 h-4 text-brand-cyan" />
          <span>即時通訊軟體</span>
        </a>
        <a href="#sports-platform" class="p-3 rounded-2xl bg-white/90 dark:bg-slate-800/90 border-2 border-slate-900 shadow-pop-sm font-black text-xs text-center hover:bg-brand-yellow hover:text-slate-900 transition-colors flex items-center justify-center gap-1.5">
          <Activity class="w-4 h-4 text-brand-orange" />
          <span>體育遊戲平台</span>
        </a>
        <a href="#live-streaming" class="p-3 rounded-2xl bg-white/90 dark:bg-slate-800/90 border-2 border-slate-900 shadow-pop-sm font-black text-xs text-center hover:bg-brand-coral hover:text-white transition-colors flex items-center justify-center gap-1.5">
          <Tv class="w-4 h-4 text-brand-coral" />
          <span>即時直播串流</span>
        </a>
        <a href="#admin-and-testing" class="p-3 rounded-2xl bg-white/90 dark:bg-slate-800/90 border-2 border-slate-900 shadow-pop-sm font-black text-xs text-center hover:bg-brand-mint hover:text-slate-900 transition-colors flex items-center justify-center gap-1.5">
          <CheckCheck class="w-4 h-4 text-brand-mint" />
          <span>平台後台與測試</span>
        </a>
      </div>
    </section>

    <!-- SECTION 1: 即時通訊平台研發 (TalkTo IM Platform) -->
    <section id="im-platform" class="space-y-6 pt-4">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b-2 border-slate-900/10 dark:border-slate-700 pb-3">
        <div class="flex items-center gap-3">
          <span class="w-10 h-10 rounded-xl bg-brand-cyan border-2 border-slate-900 flex items-center justify-center shadow-pop-sm flex-shrink-0">
            <MessageSquare class="w-5 h-5 text-slate-900" />
          </span>
          <div>
            <h2 class="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
              1. 即時通訊平台研發 (TalkTo IM Platform)
            </h2>
            <p class="text-xs font-bold text-slate-500">一手包辦 Web 客戶端與客服控端工作台開發，支援一對多群組聊天室、樂觀更新、Server Ack 與虛擬列表高效渲染</p>
          </div>
        </div>

        <!-- Direct Online Jump Buttons -->
        <div class="flex items-center gap-2.5 flex-shrink-0 self-start sm:self-center">
          <a
            href="https://apps.apple.com/tw/app/talkto/id6449272524"
            target="_blank"
            rel="noopener noreferrer"
            class="pop-button px-3.5 py-1.5 rounded-xl bg-white dark:bg-slate-800 hover:bg-brand-yellow hover:text-slate-900 text-slate-900 dark:text-white font-black text-xs border-2 border-slate-900 shadow-pop-sm flex items-center gap-1.5 transition-transform"
          >
            <Apple class="w-3.5 h-3.5" />
            <span>iOS App</span>
            <span class="text-[10px]">↗</span>
          </a>

          <a
            href="https://talkto.support/bb-web/login"
            target="_blank"
            rel="noopener noreferrer"
            class="pop-button px-3.5 py-1.5 rounded-xl bg-brand-cyan hover:bg-cyan-400 text-slate-900 font-black text-xs border-2 border-slate-900 shadow-pop-sm flex items-center gap-1.5 transition-transform"
          >
            <Globe class="w-3.5 h-3.5" />
            <span>Web 線上版</span>
            <span class="text-[10px]">↗</span>
          </a>
        </div>
      </div>

      <!-- Feature Details Grid (通訊端與控端) -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- Item A: Web 客服與會員端 -->
        <div class="pop-card p-6 rounded-3xl bg-white dark:bg-slate-900 border-2 border-slate-900 dark:border-slate-700 shadow-pop space-y-3">
          <div class="flex items-center gap-2">
            <span class="px-2.5 py-0.5 rounded-lg bg-brand-cyan text-slate-900 font-black text-xs border border-slate-900 whitespace-nowrap flex-shrink-0">
              Web 客服/會員端
            </span>
            <h3 class="font-black text-lg text-slate-900 dark:text-white">
              即時通訊 Web 客戶端全盤開發 (TalkTo Client)
            </h3>
          </div>
          <ul class="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
            <li class="flex items-start gap-2">
              <span class="text-brand-cyan font-black">▸</span>
              <span><strong>現代前端架構</strong>：基於 Vue 3 Composition API、TypeScript、Tailwind CSS、Pinia 與 Vite 建構，透過 Socket.io 實現低延遲雙向通訊與心跳保活機制。</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-brand-cyan font-black">▸</span>
              <span><strong>一對多群聊與豐富互動</strong>：支援一對多群組聊天室、公告佈告欄、對話置頂、訊息表情回應 (Emoji Reaction)、自訂貼圖與多圖上傳預覽。</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-brand-cyan font-black">▸</span>
              <span><strong>樂觀更新與 Server Ack</strong>：訊息發送立即上屏展示發送中狀態，待收到後端 Server Ack 回執即時確認已送達；超時未確認自動提供重試與 Rollback 回滾機制，提供零延遲極致體驗。</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-brand-cyan font-black">▸</span>
              <span><strong>效能優化與安全防護</strong>：導入虛擬列表與分批載入解決萬筆訊息渲染效能瓶頸，Pinia 狀態字典化 (Normalized Dictionary) 實現 O(1) 讀寫檢索，並採用 DOMPurify 嚴密過濾 XSS 跨站威脅。</span>
            </li>
          </ul>
        </div>

        <!-- Item B: 控端管理後台 -->
        <div class="pop-card p-6 rounded-3xl bg-white dark:bg-slate-900 border-2 border-slate-900 dark:border-slate-700 shadow-pop space-y-3">
          <div class="flex items-center gap-2">
            <span class="px-2.5 py-0.5 rounded-lg bg-brand-mint text-slate-900 font-black text-xs border border-slate-900 whitespace-nowrap flex-shrink-0">
              控端管理後台
            </span>
            <h3 class="font-black text-lg text-slate-900 dark:text-white">
              通訊營運控制台與客服工作台 (TalkTo Admin)
            </h3>
          </div>
          <ul class="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
            <li class="flex items-start gap-2">
              <span class="text-brand-mint font-black">▸</span>
              <span><strong>客服接待工作台</strong>：支援多會話即時切換接待、常用罐頭訊息快捷發送、即時對話調度與檔案安全傳輸。</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-brand-mint font-black">▸</span>
              <span><strong>一對多群組控管與公告系統</strong>：整合大廳一對多群組聊天室管理、群成員權限維護與禁言，並嵌入 CKEditor 5 富文本編輯器實現全站公告發布。</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-brand-mint font-black">▸</span>
              <span><strong>數據分析與安全審查</strong>：整合 ECharts 打造即時在線人數與會話趨勢圖表、敏感詞即時監控攔截、IP 白名單與操作稽核日誌。</span>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- SECTION 2: 體育遊戲即時資訊與跨平台 SDK -->
    <section id="sports-platform" class="space-y-6 pt-6">
      <div class="flex items-center gap-3 border-b-2 border-slate-900/10 dark:border-slate-700 pb-3">
        <span class="w-10 h-10 rounded-xl bg-brand-yellow border-2 border-slate-900 flex items-center justify-center shadow-pop-sm">
          <Activity class="w-5 h-5 text-slate-900" />
        </span>
        <div>
          <h2 class="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
            2. 體育遊戲即時資訊與跨平台 SDK 架構 (Sports Game Platform & SDK)
          </h2>
          <p class="text-xs font-bold text-slate-500">主導 Web 端即時看板與跨平台 App 開發，體育賽事獨立上架，封裝 iOS / Flutter 雙核心 SDK 與雲端設定中心</p>
        </div>
      </div>

      <!-- Feature Details Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- Item A -->
        <div class="pop-card p-6 rounded-3xl bg-white dark:bg-slate-900 border-2 border-slate-900 dark:border-slate-700 shadow-pop space-y-3">
          <div class="flex items-center gap-2">
            <span class="px-2.5 py-0.5 rounded-lg bg-brand-yellow text-slate-900 font-black text-xs border border-slate-900 whitespace-nowrap flex-shrink-0">
              Web 客端開發
            </span>
            <h3 class="font-black text-lg text-slate-900 dark:text-white">
              體育賽事 Web 即時看板全功能開發 (Sports Web Client)
            </h3>
          </div>
          <ul class="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
            <li class="flex items-start gap-2">
              <span class="text-brand-yellow font-black">▸</span>
              <span><strong>多維度賽況資訊呈現</strong>：Web 端支援全展開/全收合、單欄與雙欄靈活排版，即時呈現滾球比分、進行時間、紅黃牌即時動態與賽事時間軸。</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-brand-yellow font-black">▸</span>
              <span><strong>自訂關注賽事過濾</strong>：使用者可自訂關注焦點以精準追蹤賽況，具備高效率前端資料過濾與狀態持久化邏輯。</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-brand-yellow font-black">▸</span>
              <span><strong>高頻盤口與動畫防抖</strong>：攻克高頻盤口跳動，採用 WebSocket 差量更新 (Delta Patch) 與 300ms 動畫節流防抖，確保高併發推播下流暢不卡頓。</span>
            </li>
          </ul>
        </div>

        <!-- Item B -->
        <div class="pop-card p-6 rounded-3xl bg-white dark:bg-slate-900 border-2 border-slate-900 dark:border-slate-700 shadow-pop space-y-3">
          <div class="flex items-center gap-2">
            <span class="px-2.5 py-0.5 rounded-lg bg-brand-cyan text-slate-900 font-black text-xs border border-slate-900 whitespace-nowrap flex-shrink-0">
              原生 iOS SDK
            </span>
            <h3 class="font-black text-lg text-slate-900 dark:text-white">
              體育賽事獨立上架與雙核心 SDK 模組化封裝
            </h3>
          </div>
          <ul class="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
            <li class="flex items-start gap-2">
              <span class="text-brand-cyan font-black">▸</span>
              <span><strong>體育賽事獨立上架</strong>：負責體育賽事 App 架構設計、功能實現與 App Store 審核上架維運，具備完整跨端獨立交付能力。</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-brand-cyan font-black">▸</span>
              <span><strong>底層資料核心模組</strong>：專職提供網路通訊層、資料模型序列化、RESTful API 串接與本地資料快取管理。</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-brand-cyan font-black">▸</span>
              <span><strong>UI 視圖與互動模組</strong>：提供即時賽況看板、登入驗證、互動介面等對外公開視圖組件，以私有 Framework 形式發布供各站台無縫接入。</span>
            </li>
          </ul>
        </div>

        <!-- Item C -->
        <div class="pop-card p-6 rounded-3xl bg-white dark:bg-slate-900 border-2 border-slate-900 dark:border-slate-700 shadow-pop space-y-3">
          <div class="flex items-center gap-2">
            <span class="px-2.5 py-0.5 rounded-lg bg-brand-mint text-slate-900 font-black text-xs border border-slate-900 whitespace-nowrap flex-shrink-0">
              跨平台研究
            </span>
            <h3 class="font-black text-lg text-slate-900 dark:text-white">
              Flutter 跨平台 SDK 封裝與網頁爬蟲/SEO 預渲染研究
            </h3>
          </div>
          <ul class="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
            <li class="flex items-start gap-2">
              <span class="text-brand-mint font-black">▸</span>
              <span><strong>跨平台 SDK 模組化封裝</strong>：實現雙平台高效能跨端交付，嚴格遵循分層架構設計。</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-brand-mint font-black">▸</span>
              <span><strong>網頁爬蟲限制突破與預渲染方案</strong>：深度分析 Flutter Web 渲染模式對搜尋引擎爬蟲的限制，提出伺服器端預渲染 (SSR / Prerendering) 的架構解法。</span>
            </li>
          </ul>
        </div>

        <!-- Item D -->
        <div class="pop-card p-6 rounded-3xl bg-white dark:bg-slate-900 border-2 border-slate-900 dark:border-slate-700 shadow-pop space-y-3">
          <div class="flex items-center gap-2">
            <span class="px-2.5 py-0.5 rounded-lg bg-brand-coral text-white font-black text-xs border border-slate-900 whitespace-nowrap flex-shrink-0">
              工程優化
            </span>
            <h3 class="font-black text-lg text-slate-900 dark:text-white">
              Google Sheets API 雲端設定檔中心
            </h3>
          </div>
          <ul class="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
            <li class="flex items-start gap-2">
              <span class="text-brand-coral font-black">▸</span>
              <span><strong>跨端設定檔收攏</strong>：將 Web 客端、控端、賽程多端重複分散之設定檔集中收攏於雲端試算表管理。</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-brand-coral font-black">▸</span>
              <span><strong>建置自動化拉取同步</strong>：開發與打包時自動拉取同步最新設定，消弭人為維護錯誤與重複修改成本。</span>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- SECTION 3: 即時直播與多媒體串流平台 -->
    <section id="live-streaming" class="space-y-6 pt-6">
      <div class="flex items-center gap-3 border-b-2 border-slate-900/10 dark:border-slate-700 pb-3">
        <span class="w-10 h-10 rounded-xl bg-brand-coral text-white border-2 border-slate-900 flex items-center justify-center shadow-pop-sm">
          <Tv class="w-5 h-5 text-white" />
        </span>
        <div>
          <h2 class="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
            3. 即時直播與多媒體串流平台 (Interactive Live Streaming Platform)
          </h2>
          <p class="text-xs font-bold text-slate-500">涵蓋 Web 直播間、手機端開播、直播管理後台與原生 iOS RTMP 推流架構</p>
        </div>
      </div>

      <!-- Video Showcase in Section 3 -->
      <div class="pop-card p-6 sm:p-8 rounded-3xl bg-slate-950 text-white border-2 border-slate-900 shadow-pop-lg space-y-4">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
          <div class="flex items-center gap-2">
            <Video class="w-5 h-5 text-brand-yellow" />
            <h3 class="font-black text-lg text-brand-yellow">
              直播聊天室研究展示 (Live Chat Demo Video)
            </h3>
          </div>
          <span class="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-xl bg-slate-800 text-slate-300 border border-slate-700">
            <PlayCircle class="w-3.5 h-3.5 text-brand-yellow" />
            <span>MP4 實錄展示 · 彈幕與即時在線</span>
          </span>
        </div>

        <div class="relative rounded-2xl overflow-hidden border-2 border-slate-800 bg-black flex items-center justify-center max-h-[460px]">
          <video
            controls
            class="w-full max-h-[460px] object-contain rounded-xl"
            preload="metadata"
          >
            <source src="/videos/zhongyou/live-chat-demo.mp4" type="video/mp4" />
            您的瀏覽器不支援影片播放。
          </video>
        </div>
        <p class="flex items-center gap-1.5 text-xs text-slate-400 leading-relaxed font-medium">
          <Film class="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
          <span>展示 Web 直播間內高併發即時訊息流、彈幕發送、在線人數同步、贈禮互動與跑馬燈廣播機制。</span>
        </p>
      </div>

      <!-- Live Streaming Architecture Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- Item A -->
        <div class="pop-card p-6 rounded-3xl bg-white dark:bg-slate-900 border-2 border-slate-900 dark:border-slate-700 shadow-pop space-y-3">
          <div class="flex items-center gap-2">
            <span class="px-2.5 py-0.5 rounded-lg bg-brand-pink text-white font-black text-xs border border-slate-900 whitespace-nowrap flex-shrink-0">
              全端架構
            </span>
            <h3 class="font-black text-lg text-slate-900 dark:text-white">
              Web 直播間 / 主播端 / 直播管理維運後台
            </h3>
          </div>
          <ul class="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
            <li class="flex items-start gap-2">
              <span class="text-brand-pink font-black">▸</span>
              <span><strong>Web 直播間與會員端</strong>：Web 直播大廳、熱門推薦、主播房間搜尋、即時貢獻榜/守護榜、直播間即時文字訊息互動、道具/徽章、專屬 VIP 房間權限控制。</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-brand-pink font-black">▸</span>
              <span><strong>主播端</strong>：手機端快速一鍵開播、直播封面與標籤自訂、即時美顏濾鏡 SDK、關播數據統計報表、主播收益/提領管理。</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-brand-pink font-black">▸</span>
              <span><strong>維運管理後台</strong>：主播帳號審核、直播間即時監控、虛擬點數交易流水、多維度營運報表與創作者管理。</span>
            </li>
          </ul>
        </div>

        <!-- Item B -->
        <div class="pop-card p-6 rounded-3xl bg-white dark:bg-slate-900 border-2 border-slate-900 dark:border-slate-700 shadow-pop space-y-3">
          <div class="flex items-center gap-2">
            <span class="px-2.5 py-0.5 rounded-lg bg-brand-coral text-white font-black text-xs border border-slate-900 whitespace-nowrap flex-shrink-0">
              原生 iOS
            </span>
            <h3 class="font-black text-lg text-slate-900 dark:text-white">
              原生 iOS 直播推流 Broadcaster App
            </h3>
          </div>
          <ul class="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
            <li class="flex items-start gap-2">
              <span class="text-brand-coral font-black">▸</span>
              <span><strong>LFLiveKit 推流引擎</strong>：H.264 + AAC 硬編碼，支援 RTMP 協議傳輸、弱網自動丟幀與動態切換碼率。</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-brand-coral font-black">▸</span>
              <span><strong>GPUImage 美顏濾鏡與彈幕</strong>：整合高效美顏濾鏡、BarrageRenderer 高效能彈幕渲染庫與 SwiftOverlays 彈窗組件。</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-brand-coral font-black">▸</span>
              <span><strong>串流品質與成本平衡</strong>：採用 720P 30FPS 2000kbps 最佳平衡方案，兼顧 CDN 加速與高畫質低延遲體驗。</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Live Stream Highlights Box -->
      <div class="pop-card p-6 sm:p-8 rounded-3xl bg-slate-950 text-white border-2 border-slate-900 shadow-pop-lg space-y-4">
        <div class="flex items-center gap-2 border-b border-slate-800 pb-3">
          <Zap class="w-5 h-5 text-brand-yellow" />
          <h3 class="font-black text-lg text-brand-yellow">
            高併發即時訊息流與彈幕渲染核心技術
          </h3>
        </div>
        <p class="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
          在 Web 直播間萬人在線場景下，針對 WebSocket 訊息推播設計了前端流量平滑緩衝隊列（100ms 削峰填谷批量更新），避免高頻彈幕與送禮動畫造成主線程掉幀；彈幕採用獨立 CSS 圖層渲染，並結合虛擬列表與分批載入確保長時間掛播情況下的瀏覽器記憶體穩定。
        </p>
      </div>
    </section>

    <!-- SECTION 4: 平台控端現代化升級、單元測試與前端前瞻研究 -->
    <section id="admin-and-testing" class="space-y-6 pt-6">
      <div class="flex items-center gap-3 border-b-2 border-slate-900/10 dark:border-slate-700 pb-3">
        <span class="w-10 h-10 rounded-xl bg-brand-mint border-2 border-slate-900 flex items-center justify-center shadow-pop-sm">
          <CheckCheck class="w-5 h-5 text-slate-900" />
        </span>
        <div>
          <h2 class="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
            4. 平台控端現代化升級、單元測試與前端前瞻研究 (Admin System, Vitest & Technical Research)
          </h2>
          <p class="text-xs font-bold text-slate-500">推進舊系統由 Vue 2 升級至 Vue 3，制定 Vitest 自動化單元測試體系，並進行 Web Push、向量動畫與預覽技術調優</p>
        </div>
      </div>

      <!-- Grid for Vue 2 -> Vue 3 & Vitest -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- Item A: Vue 2 -> Vue 3 -->
        <div class="pop-card p-6 rounded-3xl bg-white dark:bg-slate-900 border-2 border-slate-900 dark:border-slate-700 shadow-pop space-y-3">
          <div class="flex items-center gap-2">
            <span class="px-2.5 py-0.5 rounded-lg bg-brand-yellow text-slate-900 font-black text-xs border border-slate-900 whitespace-nowrap flex-shrink-0">
              架構升級
            </span>
            <h3 class="font-black text-lg text-slate-900 dark:text-white">
              控端前端 Vue 2 升級重構至 Vue 3
            </h3>
          </div>
          <ul class="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
            <li class="flex items-start gap-2">
              <span class="text-brand-yellow font-black">▸</span>
              <span><strong>舊系統現代化遷移</strong>：由 Node 6.2 + Vue 2 升級至 Node 16 + Vue 3 (Composition API) + Pinia + Vite，打包冷啟動由數十秒縮短至毫秒級。</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-brand-yellow font-black">▸</span>
              <span><strong>共用組件庫盤點與收攏</strong>：盤點日曆選擇器、多條件篩選器、自訂資料表格與分頁器，統一 TypeScript 型別定義與元件代碼規範。</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-brand-yellow font-black">▸</span>
              <span><strong>前端技術窗口與代碼審查</strong>：擔任前端技術窗口推動團隊知識分享、技術方案審查與代碼重構規範，協助排解跨端疑難雜症。</span>
            </li>
          </ul>
        </div>

        <!-- Item B: Vitest -->
        <div class="pop-card p-6 rounded-3xl bg-indigo-950 text-white border-2 border-slate-900 shadow-pop space-y-3">
          <div class="flex items-center gap-2">
            <span class="px-2.5 py-0.5 rounded-lg bg-brand-mint text-slate-900 font-black text-xs border border-slate-900 whitespace-nowrap flex-shrink-0">
              單元測試
            </span>
            <h3 class="font-black text-lg text-brand-yellow">
              導入 Vitest 自動化單元測試體系
            </h3>
          </div>
          <ul class="space-y-2 text-xs sm:text-sm text-slate-300 font-medium leading-relaxed">
            <li class="flex items-start gap-2">
              <span class="text-brand-mint font-black">▸</span>
              <span><strong>測試標準制定</strong>：主導制定團隊前端自動化單元測試規範，全面覆蓋核心 UI 組件、Pinia 狀態管理與複雜業務數據邏輯。</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-brand-mint font-black">▸</span>
              <span><strong>常態化穩定執行</strong>：建立團隊常態化測試流程，顯著降低回歸缺陷率與線上事故率，大幅提升發布品質與可維護性。</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Technical Research Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
        <!-- Topic 1: Web Push -->
        <div class="pop-card p-6 rounded-3xl bg-white dark:bg-slate-900 border-2 border-slate-900 dark:border-slate-700 shadow-pop space-y-3">
          <div class="flex items-center gap-2 pb-1 border-b-2 border-slate-100 dark:border-slate-800">
            <Bell class="w-5 h-5 text-brand-cyan" />
            <h3 class="font-black text-base text-slate-900 dark:text-white">
              Web Push 網頁推播深度研究
            </h3>
          </div>
          <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
            深入探討 Service Workers 背景常駐、Push API、Notification API 與 Web Push Protocol 運作機制。
          </p>
          <ul class="space-y-1.5 text-xs text-slate-600 dark:text-slate-300 font-medium">
            <li>• 瀏覽器使用者授權與推播訂閱管理</li>
            <li>• 訂閱資訊傳送至後端儲存庫</li>
            <li>• 伺服器端觸發主動推播訊息</li>
            <li>• Service Worker 背景接收並喚醒通知視窗</li>
          </ul>
        </div>

        <!-- Topic 2: Rive -->
        <div class="pop-card p-6 rounded-3xl bg-white dark:bg-slate-900 border-2 border-slate-900 dark:border-slate-700 shadow-pop space-y-3">
          <div class="flex items-center gap-2 pb-1 border-b-2 border-slate-100 dark:border-slate-800">
            <Sparkles class="w-5 h-5 text-brand-purple" />
            <h3 class="font-black text-base text-slate-900 dark:text-white">
              Rive 向量動畫效能排查與調優
            </h3>
          </div>
          <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
            排查向量動畫在多組件掛載時的記憶體洩漏與 CPU 佔用問題。
          </p>
          <ul class="space-y-1.5 text-xs text-slate-600 dark:text-slate-300 font-medium">
            <li>• 修復視窗尺寸監聽事件生命週期釋放問題</li>
            <li>• 導入頁面可見度背景休眠機制</li>
            <li>• 切換分頁時暫停動畫以釋放 WebGL 記憶體</li>
            <li>• <strong>調優成果：穩定 60 FPS、CPU 降至 20% 以下、背景 CPU 歸零</strong></li>
          </ul>
        </div>

        <!-- Topic 3: Preview -->
        <div class="pop-card p-6 rounded-3xl bg-white dark:bg-slate-900 border-2 border-slate-900 dark:border-slate-700 shadow-pop space-y-3">
          <div class="flex items-center gap-2 pb-1 border-b-2 border-slate-100 dark:border-slate-800">
            <Paperclip class="w-5 h-5 text-brand-pink" />
            <h3 class="font-black text-base text-slate-900 dark:text-white">
              Web 多檔案與連結元數據預覽技術
            </h3>
          </div>
          <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
            評估前端客戶端預覽各類型檔案與網頁連結的可行技術架構。
          </p>
          <ul class="space-y-1.5 text-xs text-slate-600 dark:text-slate-300 font-medium">
            <li>• 連結預覽：網站圖示、標題與 OG 圖片元數據解析</li>
            <li>• 圖片即時預覽：動態物件網址建立與記憶體釋放</li>
            <li>• PDF / 辦公室文件：PDF 渲染引擎與線上檢視方案</li>
            <li>• 影音串流預覽：動態二進制快照與暫存播放技術</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Bottom Navigation Bar -->
    <div class="p-6 sm:p-8 rounded-3xl bg-slate-900 text-white border-2 border-slate-900 shadow-pop flex flex-col sm:flex-row items-center justify-between gap-4">
      <div class="space-y-1 text-center sm:text-left">
        <h3 class="font-black text-lg text-brand-yellow">
          想了解更多作品專案或聯繫合作？
        </h3>
        <p class="text-xs text-slate-300">
          歡迎隨時瀏覽精選作品頁面或直接發送信件與我聯繫！
        </p>
      </div>

      <div class="flex items-center gap-3">
        <RouterLink
          to="/"
          class="pop-button px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-black text-xs sm:text-sm border border-slate-700 shadow-pop-sm flex items-center gap-1.5"
        >
          <Home class="w-4 h-4" />
          <span>履歷總覽</span>
        </RouterLink>
        <RouterLink
          to="/projects"
          class="pop-button px-4 py-2 rounded-xl bg-brand-yellow hover:bg-amber-300 text-slate-900 font-black text-xs sm:text-sm border-2 border-slate-900 shadow-pop flex items-center gap-1.5"
        >
          <FolderKanban class="w-4 h-4" />
          <span>精選專案作品</span>
        </RouterLink>
      </div>
    </div>
  </div>
</template>
