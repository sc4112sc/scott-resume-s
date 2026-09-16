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
          於中佑資訊長達六年半的工程師生涯中，主導並參與了體育賽事資訊跨平台應用、即時直播串流系統、即時通訊平台與控端系統，並為團隊導入 Vitest 單元測試體系與多項前端前瞻技術調優研究。
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
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
        <a href="#sports-platform" class="p-3 rounded-2xl bg-white/90 dark:bg-slate-800/90 border-2 border-slate-900 shadow-pop-sm font-black text-xs text-center hover:bg-brand-yellow hover:text-slate-900 transition-colors flex items-center justify-center gap-1.5">
          <Activity class="w-4 h-4 text-brand-orange" />
          <span>體育賽事平台 & SDK</span>
        </a>
        <a href="#live-streaming" class="p-3 rounded-2xl bg-white/90 dark:bg-slate-800/90 border-2 border-slate-900 shadow-pop-sm font-black text-xs text-center hover:bg-brand-coral hover:text-white transition-colors flex items-center justify-center gap-1.5">
          <Tv class="w-4 h-4 text-brand-coral" />
          <span>即時直播串流平台</span>
        </a>
        <a href="#im-and-research" class="p-3 rounded-2xl bg-white/90 dark:bg-slate-800/90 border-2 border-slate-900 shadow-pop-sm font-black text-xs text-center hover:bg-brand-cyan hover:text-slate-900 transition-colors flex items-center justify-center gap-1.5">
          <MessageSquare class="w-4 h-4 text-brand-cyan" />
          <span>即時通訊、測試與技術調優</span>
        </a>
      </div>
    </section>

    <!-- SECTION 1: 體育賽事資訊與跨平台 SDK -->
    <section id="sports-platform" class="space-y-6 pt-4">
      <div class="flex items-center gap-3 border-b-2 border-slate-900/10 dark:border-slate-700 pb-3">
        <span class="w-10 h-10 rounded-xl bg-brand-yellow border-2 border-slate-900 flex items-center justify-center shadow-pop-sm">
          <Activity class="w-5 h-5 text-slate-900" />
        </span>
        <div>
          <h2 class="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
            1. 體育賽事即時資訊與跨平台 SDK 架構 (Sports Event & SDK)
          </h2>
          <p class="text-xs font-bold text-slate-500">獨立主導體育賽事客戶端開發、iOS / Flutter SDK 模組化封裝與設定檔中心</p>
        </div>
      </div>

      <!-- Feature Details Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- Item A -->
        <div class="pop-card p-6 rounded-3xl bg-white dark:bg-slate-900 border-2 border-slate-900 dark:border-slate-700 shadow-pop space-y-3">
          <div class="flex items-center gap-2">
            <span class="px-2.5 py-0.5 rounded-lg bg-brand-yellow text-slate-900 font-black text-xs border border-slate-900 whitespace-nowrap flex-shrink-0">
              客端開發
            </span>
            <h3 class="font-black text-lg text-slate-900 dark:text-white">
              體育賽事即時看板全功能開發 (Sports Client App)
            </h3>
          </div>
          <ul class="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
            <li class="flex items-start gap-2">
              <span class="text-brand-yellow font-black">▸</span>
              <span><strong>多維度賽況資訊呈現</strong>：支援全展開/全收合、單欄與雙欄靈活排版，即時呈現滾球比分、進行時間、紅黃牌即時動態與賽事時間軸。</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-brand-yellow font-black">▸</span>
              <span><strong>自訂關注賽事過濾</strong>：使用者可自訂關注焦點以精準追蹤賽況，具備高效率前端資料過濾與狀態持久化邏輯。</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-brand-yellow font-black">▸</span>
              <span><strong>高併發即時推播更新</strong>：精確處理 WebSocket 高頻賽事數據與比分跳動事件，達成流暢不卡頓的高效能渲染。</span>
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
              iOS 體育專站雙核心 SDK 模組化封裝
            </h3>
          </div>
          <ul class="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
            <li class="flex items-start gap-2">
              <span class="text-brand-cyan font-black">▸</span>
              <span><strong>底層資料核心模組</strong>：專職提供網路通訊層、資料模型序列化、RESTful API 串接與本地資料快取管理。</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-brand-cyan font-black">▸</span>
              <span><strong>UI 視圖與互動模組</strong>：提供即時賽況看板、登入驗證、互動介面等對外公開視圖組件與業務方法。</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-brand-cyan font-black">▸</span>
              <span><strong>私有套件庫模組化發布</strong>：遵循標準依賴隔離規範，以私有 Framework 形式發布，供各站台與專案無縫接入。</span>
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
              Google Sheets API 設定檔中心 & 控端架構升級
            </h3>
          </div>
          <ul class="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
            <li class="flex items-start gap-2">
              <span class="text-brand-coral font-black">▸</span>
              <span><strong>Google Sheets API 設定中心</strong>：將客端、控端、賽程多端重複分散之設定檔收攏於雲端試算表，開發與打包時自動拉取同步，消弭人為維護錯誤。</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-brand-coral font-black">▸</span>
              <span><strong>控端前端 Vue 3 + Pinia 重構</strong>：由 Node 6.2 + Vue 2 升級至 Node 16 + Vue 3 + Pinia，盤點共用組件庫（日曆、篩選、表格），大幅提升工程規範。</span>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- SECTION 2: 即時直播與多媒體串流平台 -->
    <section id="live-streaming" class="space-y-6 pt-6">
      <div class="flex items-center gap-3 border-b-2 border-slate-900/10 dark:border-slate-700 pb-3">
        <span class="w-10 h-10 rounded-xl bg-brand-coral text-white border-2 border-slate-900 flex items-center justify-center shadow-pop-sm">
          <Tv class="w-5 h-5 text-white" />
        </span>
        <div>
          <h2 class="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
            2. 即時直播與多媒體串流平台 (Interactive Live Streaming Platform)
          </h2>
          <p class="text-xs font-bold text-slate-500">會員端互動、主播端手機開播、管理後台與原生 iOS RTMP 推流架構</p>
        </div>
      </div>

      <!-- Video Showcase in Section 2 -->
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
          <span>展示直播間內高併發即時訊息流、彈幕發送、在線人數同步、贈禮互動與跑馬燈廣播機制。</span>
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
              會員端 / 主播端 / 直播管理維運後台
            </h3>
          </div>
          <ul class="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
            <li class="flex items-start gap-2">
              <span class="text-brand-pink font-black">▸</span>
              <span><strong>會員端</strong>：直播大廳、熱門推薦、主播房間搜尋、即時貢獻榜/守護榜、直播間即時文字訊息互動、道具/徽章、專屬 VIP 房間權限控制。</span>
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
          在直播間萬人在線場景下，針對 WebSocket 訊息推播設計了前端流量平滑緩衝隊列（Message Throttling Queue），避免高頻彈幕與送禮動畫造成主線程掉幀；並透過虛擬列表（Virtual Scroll）技術確保長時間掛播情況下的瀏覽器記憶體穩定。
        </p>
      </div>
    </section>

    <!-- SECTION 3: 即時通訊平台研發、單元測試與前端前瞻技術調優 (整合第3點與第4點) -->
    <section id="im-and-research" class="space-y-6 pt-6">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b-2 border-slate-900/10 dark:border-slate-700 pb-3">
        <div class="flex items-center gap-3">
          <span class="w-10 h-10 rounded-xl bg-brand-cyan border-2 border-slate-900 flex items-center justify-center shadow-pop-sm flex-shrink-0">
            <MessageSquare class="w-5 h-5 text-slate-900" />
          </span>
          <div>
            <h2 class="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
              3. 即時通訊平台研發、單元測試與前端技術調優 (IM Platform, Testing & Optimization)
            </h2>
            <p class="text-xs font-bold text-slate-500">主導 Web 客服端與控端後台開發、制定 Vitest 單元測試體系，並進行 Web Push、向量動畫與預覽技術調優</p>
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
              即時通訊 Web 客戶端全盤開發
            </h3>
          </div>
          <ul class="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
            <li class="flex items-start gap-2">
              <span class="text-brand-cyan font-black">▸</span>
              <span><strong>現代前端架構</strong>：基於 Vue 3 Composition API、TypeScript、Tailwind CSS、Pinia 與 Vite 建構，透過 Socket.io 實現低延遲雙向通訊。</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-brand-cyan font-black">▸</span>
              <span><strong>全功能通訊體驗</strong>：支援即時一對一私聊、群發訊息、佈告欄、對話置頂、自訂貼圖表情彈窗、多媒體檔案傳輸與快速回覆功能。</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-brand-cyan font-black">▸</span>
              <span><strong>工程化與容器化</strong>：配置嚴格 TypeScript 型別檢查、樣式編譯優化與 Helm Values 雲端容器化發布流程。</span>
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
              通訊維運與管理控制台
            </h3>
          </div>
          <ul class="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
            <li class="flex items-start gap-2">
              <span class="text-brand-mint font-black">▸</span>
              <span><strong>客服會話即時監控</strong>：支援即時會話狀態追蹤、通訊錄搜尋管理與歷史紀錄快速檢索。</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-brand-mint font-black">▸</span>
              <span><strong>標籤管理與即時告警</strong>：多維度標籤分類維護、敏感詞即時監控攔截與動態告警報表展示。</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-brand-mint font-black">▸</span>
              <span><strong>全站設定中心</strong>：全域系統參數配置、操作權限管控與檔案傳輸安全限制。</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Unit Testing Feature Card (Simplified & Impactful) -->
      <div class="pop-card p-6 sm:p-8 rounded-3xl bg-indigo-950 text-white border-2 border-slate-900 shadow-pop-lg space-y-3">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-indigo-800 pb-3">
          <div class="flex items-center gap-2">
            <CheckCheck class="w-6 h-6 text-brand-mint" />
            <h3 class="font-black text-lg text-brand-yellow">
              為團隊導入 Vitest 自動化單元測試體系
            </h3>
          </div>
          <span class="text-xs font-black px-3 py-1 rounded-xl bg-brand-mint text-slate-900 border border-slate-900">
            常態化執行 · 顯著降低回歸缺陷
          </span>
        </div>

        <p class="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
          在通訊端與控端開發過程中，主導制定前端自動化單元測試規範，全面覆蓋核心 UI 組件、Pinia 狀態管理與複雜業務數據邏輯，建立團隊常態化測試流程，顯著提升專案代碼健壯度與維護效率。
        </p>
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
