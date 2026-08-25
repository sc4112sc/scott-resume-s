<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useResumeStore } from '@/stores/resume'
import { RouterLink } from 'vue-router'
import ImageSlot from '@/components/ImageSlot.vue'

const resumeStore = useResumeStore()

const hobbies = [
  { icon: '🛹', title: '滑板 (Skateboarding)', desc: '享受街頭滑行與挑戰自我的暢快感' },
  { icon: '🏸', title: '羽球 (Badminton)', desc: '敏捷反應與團隊搭檔的揮汗運動' },
  { icon: '🏋️', title: '健身 (Fitness)', desc: '維持專注與高體能的最佳充電站' },
  { icon: '🪀', title: '打陀螺 (Spinning Tops)', desc: '專注與力學結合的療癒手感活動' },
]

// Universal Lightbox Modal State
interface ActiveGallery {
  title: string
  category: string
  images: string[]
  description?: string
  currentIndex: number
}

const activeGallery = ref<ActiveGallery | null>(null)
const isGalleryOpen = ref(false)

const openGallery = (title: string, category: string, images: string[], description?: string, startIndex = 0) => {
  activeGallery.value = {
    title,
    category,
    images,
    description,
    currentIndex: startIndex,
  }
  isGalleryOpen.value = true
}

const closeGallery = () => {
  isGalleryOpen.value = false
  activeGallery.value = null
}

const prevGalleryImage = () => {
  if (!activeGallery.value) return
  const len = activeGallery.value.images.length
  activeGallery.value.currentIndex = (activeGallery.value.currentIndex - 1 + len) % len
}

const nextGalleryImage = () => {
  if (!activeGallery.value) return
  const len = activeGallery.value.images.length
  activeGallery.value.currentIndex = (activeGallery.value.currentIndex + 1) % len
}

const handleKeyDown = (e: KeyboardEvent) => {
  if (!isGalleryOpen.value) return
  if (e.key === 'Escape') closeGallery()
  if (e.key === 'ArrowLeft') prevGalleryImage()
  if (e.key === 'ArrowRight') nextGalleryImage()
}

onMounted(() => {
  window.addEventListener('keydown', handleKeyDown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown)
})
</script>

<template>
  <div class="space-y-12 py-4 sm:py-6">
    <!-- Hero Banner (Vibrant & Playful) -->
    <section class="relative overflow-hidden rounded-3xl bg-gradient-to-r from-amber-300 via-rose-300 to-indigo-300 dark:from-slate-900 dark:via-indigo-950 dark:to-slate-900 p-6 sm:p-10 border-2 border-slate-900 dark:border-slate-700 shadow-pop-lg text-slate-900 dark:text-white">
      <!-- Background floating stickers decoration -->
      <div class="absolute -right-6 -top-6 w-36 h-36 rounded-full bg-brand-yellow/60 border-2 border-slate-900 -rotate-12 hidden md:flex items-center justify-center font-black text-xs shadow-pop-sm select-none">
        🚀 6.5+ 年經驗
      </div>
      <div class="absolute right-12 -bottom-4 w-28 h-28 rounded-2xl bg-brand-cyan/60 border-2 border-slate-900 rotate-6 hidden md:flex items-center justify-center font-black text-xs shadow-pop-sm select-none">
        ⚡ Vue3 & App
      </div>

      <div class="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-6 sm:gap-8">
        <!-- Avatar with Pop Border (Click to zoom) -->
        <div class="flex-shrink-0 flex flex-col items-center">
          <div
            @click="openGallery(resumeStore.profile.name + ' (' + resumeStore.profile.englishName + ')', '個人照片', [resumeStore.profile.avatar], resumeStore.profile.title + ' · ' + resumeStore.profile.experienceYears + ' 經驗')"
            class="relative group cursor-zoom-in"
            title="點擊放大檢視大頭貼"
          >
            <div class="relative w-36 h-36 sm:w-40 sm:h-40 rounded-3xl overflow-hidden border-3 border-slate-900 dark:border-slate-600 bg-white shadow-pop group-hover:rotate-2 group-hover:scale-105 transition-all">
              <ImageSlot
                :src="resumeStore.profile.avatar"
                :alt="resumeStore.profile.name"
                aspect-ratio="aspect-square"
                rounded="rounded-2xl"
                placeholder-text="大頭照"
                :show-path-hint="false"
              />

              <!-- Zoom Hover Overlay -->
              <div class="absolute inset-0 bg-slate-950/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                <span class="px-2.5 py-1 rounded-xl bg-brand-yellow text-slate-900 font-black text-xs border-2 border-slate-900 shadow-pop-sm flex items-center gap-1">
                  <span>🔍</span>
                  <span>放大</span>
                </span>
              </div>
            </div>

            <!-- Fun Status Pin -->
            <div class="absolute -bottom-2 -right-2 bg-brand-mint text-slate-900 font-black text-[11px] px-2.5 py-0.5 rounded-full border-2 border-slate-900 shadow-pop-sm flex items-center gap-1 animate-bounce-subtle">
              <span class="w-2 h-2 rounded-full bg-emerald-700 animate-ping"></span>
              <span>Available</span>
            </div>
          </div>
        </div>

        <!-- Hero Content -->
        <div class="flex-1 text-center md:text-left space-y-4">
          <div class="flex flex-wrap items-center justify-center md:justify-start gap-2">
            <span class="inline-flex items-center gap-1.5 rounded-xl bg-white dark:bg-slate-800 border-2 border-slate-900 px-3 py-1 text-xs font-black shadow-pop-sm text-slate-900 dark:text-white">
              <span>🎯</span> 應徵：{{ resumeStore.profile.jobTarget }}
            </span>
            <span class="inline-flex items-center gap-1.5 rounded-xl bg-brand-yellow text-slate-900 border-2 border-slate-900 px-3 py-1 text-xs font-black shadow-pop-sm">
              <span>⏱️</span> 工作經驗：{{ resumeStore.profile.experienceYears }}
            </span>
          </div>

          <div>
            <h1 class="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
              哈囉！我是 {{ resumeStore.profile.name }}
              <span class="inline-block animate-wiggle">👋</span>
            </h1>
            <p class="text-lg sm:text-xl font-black text-indigo-900 dark:text-sky-300 mt-1">
              {{ resumeStore.profile.englishName }} · {{ resumeStore.profile.title }}
            </p>
          </div>

          <!-- Quick Badges -->
          <div class="flex flex-wrap items-center justify-center md:justify-start gap-2 pt-1">
            <span class="bg-white/80 dark:bg-slate-800/80 border-2 border-slate-900 px-3 py-1 rounded-xl text-xs font-bold shadow-pop-sm">
              📍 {{ resumeStore.profile.location }}
            </span>
            <a
              :href="`mailto:${resumeStore.profile.email}`"
              class="bg-white/80 dark:bg-slate-800/80 hover:bg-brand-cyan hover:text-slate-900 border-2 border-slate-900 px-3 py-1 rounded-xl text-xs font-bold shadow-pop-sm transition-all"
            >
              ✉️ {{ resumeStore.profile.email }}
            </a>
            <span class="bg-white/80 dark:bg-slate-800/80 border-2 border-slate-900 px-3 py-1 rounded-xl text-xs font-bold shadow-pop-sm">
              📞 {{ resumeStore.profile.phone }}
            </span>
          </div>

          <!-- Action Buttons -->
          <div class="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-3">
            <RouterLink
              to="/projects"
              class="pop-button px-5 py-2.5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-black text-sm border-2 border-slate-900 shadow-pop flex items-center gap-2"
            >
              <span>🚀 查看精選作品</span>
            </RouterLink>
            <RouterLink
              to="/contact"
              class="pop-button px-5 py-2.5 rounded-2xl bg-brand-coral hover:bg-rose-400 text-white font-black text-sm border-2 border-slate-900 shadow-pop flex items-center gap-2"
            >
              <span>📬 與我聊聊 (Contact)</span>
            </RouterLink>
            <a
              :href="resumeStore.profile.social.job104"
              target="_blank"
              rel="noopener noreferrer"
              class="pop-button px-4 py-2.5 rounded-2xl bg-amber-400 text-slate-900 font-black text-sm border-2 border-slate-900 shadow-pop"
            >
              104 履歷 ↗
            </a>
            <a
              :href="resumeStore.profile.social.cakeResume"
              target="_blank"
              rel="noopener noreferrer"
              class="pop-button px-4 py-2.5 rounded-2xl bg-brand-mint text-slate-900 font-black text-sm border-2 border-slate-900 shadow-pop"
            >
              CakeResume ↗
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- About Me / 自傳 -->
    <section class="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border-2 border-slate-900 dark:border-slate-700 shadow-pop space-y-4">
      <div class="flex items-center gap-3 border-b-2 border-slate-900/10 dark:border-slate-700 pb-3">
        <span class="w-10 h-10 rounded-xl bg-brand-yellow border-2 border-slate-900 flex items-center justify-center text-lg shadow-pop-sm">
          💡
        </span>
        <div>
          <h2 class="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">關於我 (About Me)</h2>
          <p class="text-xs font-bold text-slate-500">軟體開發理念與個人特質</p>
        </div>
      </div>

      <div class="space-y-4 text-slate-700 dark:text-slate-200 leading-relaxed text-sm sm:text-base font-medium">
        <p v-for="(p, i) in resumeStore.profile.bioParagraphs" :key="i" class="p-3.5 rounded-2xl bg-amber-50/60 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
          {{ p }}
        </p>
      </div>
    </section>

    <!-- Work Experience (經歷) -->
    <section class="space-y-6">
      <div class="flex items-center justify-between border-b-2 border-slate-900/10 dark:border-slate-700 pb-3">
        <div class="flex items-center gap-3">
          <span class="w-10 h-10 rounded-xl bg-brand-cyan border-2 border-slate-900 flex items-center justify-center text-lg shadow-pop-sm">
            💼
          </span>
          <div>
            <h2 class="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">工作經歷 (Experience)</h2>
            <p class="text-xs font-bold text-slate-500">深耕前端 6.5 年 · 跨足 Web、Flutter 與原生 iOS</p>
          </div>
        </div>
        <span class="text-xs font-black px-3 py-1 rounded-xl bg-brand-yellow text-slate-900 border-2 border-slate-900 shadow-pop-sm">
          2015 - 2026
        </span>
      </div>

      <div class="space-y-6">
        <div
          v-for="exp in resumeStore.experiences"
          :key="exp.id"
          class="pop-card p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border-2 border-slate-900 dark:border-slate-700 shadow-pop space-y-4"
        >
          <!-- Company & Role Header -->
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b-2 border-slate-100 dark:border-slate-800 pb-3">
            <div>
              <div class="flex items-center gap-2">
                <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white">
                  {{ exp.company }}
                </h3>
                <span class="text-xs font-black px-2.5 py-0.5 rounded-lg bg-indigo-100 dark:bg-indigo-900/60 text-indigo-800 dark:text-indigo-200 border border-indigo-900">
                  {{ exp.role }}
                </span>
              </div>
              <p class="text-xs font-bold text-slate-500 dark:text-slate-400 mt-1">
                <strong>負責產品：</strong> {{ exp.products }}
              </p>
            </div>
            <div class="text-xs font-black bg-brand-yellow text-slate-900 px-3 py-1 rounded-xl border-2 border-slate-900 shadow-pop-sm self-start sm:self-center">
              {{ exp.period }}
            </div>
          </div>

          <!-- Technologies Tags & View Images Button -->
          <div class="flex flex-wrap items-center justify-between gap-3">
            <div class="flex flex-wrap gap-1.5">
              <span
                v-for="tech in exp.technologies"
                :key="tech"
                class="text-xs font-bold px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-900 shadow-pop-sm"
              >
                {{ tech }}
              </span>
            </div>

            <!-- View Images Button (for Beijing AIDS Tech VR) -->
            <button
              v-if="exp.images && exp.images.length > 0"
              @click="openGallery(exp.company + ' · VR實境導覽製作截圖', '工作與實習經歷', exp.images, '赴北京愛迪斯科技參與室內設計 VR 虛擬實境導覽產品之製作與互動展示畫面。')"
              type="button"
              class="pop-button px-3.5 py-1.5 rounded-xl bg-brand-cyan hover:bg-cyan-300 text-slate-900 font-black text-xs border-2 border-slate-900 shadow-pop-sm flex items-center gap-1.5 transition-all"
            >
              <span>🖼️ 查看實習/VR作品圖片 ({{ exp.images.length }}張)</span>
              <span>↗</span>
            </button>
          </div>

          <!-- Highlights Bullets -->
          <div class="space-y-2 pt-2">
            <h4 class="text-xs font-black text-slate-400 uppercase tracking-wider">主要成就與工作內容</h4>
            <ul class="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium">
              <li
                v-for="(hl, i) in exp.highlights"
                :key="i"
                class="flex items-start gap-2.5"
              >
                <span class="w-5 h-5 rounded-full bg-brand-mint text-slate-900 font-black text-xs flex items-center justify-center flex-shrink-0 mt-0.5 border border-slate-900">
                  ✓
                </span>
                <span class="leading-relaxed">{{ hl }}</span>
              </li>
            </ul>
          </div>

          <!-- Deep-dive page button for Zhongyou Information -->
          <div v-if="exp.id === 'zy-info'" class="pt-3 border-t-2 border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div class="text-xs font-bold text-slate-600 dark:text-slate-300">
              💡 包含體育賽事資訊平台、即時直播串流、TalkTo 通訊平台與 Vitest 單元測試
            </div>
            <RouterLink
              to="/experience/zhongyou"
              class="pop-button px-4 py-2.5 rounded-2xl bg-brand-yellow hover:bg-amber-300 text-slate-900 font-black text-xs sm:text-sm border-2 border-slate-900 shadow-pop flex items-center justify-center gap-2 transition-all self-start sm:self-auto"
            >
              <span>🚀 查看中佑 6.5年核心研發與專案深度專頁</span>
              <span>↗</span>
            </RouterLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Matrix (專業技能矩陣) -->
    <section class="space-y-6">
      <div class="flex items-center gap-3 border-b-2 border-slate-900/10 dark:border-slate-700 pb-3">
        <span class="w-10 h-10 rounded-xl bg-brand-mint border-2 border-slate-900 flex items-center justify-center text-lg shadow-pop-sm">
          ⚡
        </span>
        <div>
          <h2 class="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">專業技能 (Skills & Tech Stack)</h2>
          <p class="text-xs font-bold text-slate-500">前端框架、跨平台 App 與工程工具鏈</p>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          v-for="group in resumeStore.skillGroups"
          :key="group.category"
          class="pop-card p-6 rounded-3xl bg-white dark:bg-slate-900 border-2 border-slate-900 dark:border-slate-700 shadow-pop space-y-4"
        >
          <div class="flex items-center gap-2 pb-2 border-b-2 border-slate-100 dark:border-slate-800">
            <span class="text-2xl">{{ group.icon }}</span>
            <h3 class="font-black text-slate-900 dark:text-white text-base">
              {{ group.category }}
            </h3>
          </div>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="skill in group.skills"
              :key="skill"
              class="text-xs font-bold px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border-2 border-slate-900 shadow-pop-sm hover:bg-brand-yellow hover:text-slate-900 transition-colors"
            >
              {{ skill }}
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- Awards & Licenses (獲獎與專業認證展示) -->
    <section class="space-y-6">
      <div class="flex items-center justify-between border-b-2 border-slate-900/10 dark:border-slate-700 pb-3">
        <div class="flex items-center gap-3">
          <span class="w-10 h-10 rounded-xl bg-brand-yellow border-2 border-slate-900 flex items-center justify-center text-lg shadow-pop-sm">
            🏆
          </span>
          <div>
            <h2 class="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">獲獎與認證 (Licenses & Awards)</h2>
            <p class="text-xs font-bold text-slate-500">國際原廠專業技術認證與競賽獲獎榮譽</p>
          </div>
        </div>
      </div>

      <!-- 3-Column Certificate Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          v-for="item in resumeStore.licensesAndAwards"
          :key="item.id"
          class="pop-card rounded-3xl bg-white dark:bg-slate-900 border-2 border-slate-900 dark:border-slate-700 shadow-pop overflow-hidden flex flex-col justify-between group"
        >
          <!-- Certificate Image Preview Frame -->
          <div
            class="relative h-56 w-full bg-slate-950/90 border-b-2 border-slate-900 dark:border-slate-700 flex items-center justify-center p-3 cursor-zoom-in overflow-hidden"
            @click="openGallery(item.title, item.category === 'license' ? '📜 國際專業認證' : '🥇 獲獎榮譽', [item.image], item.description)"
          >
            <img
              :src="item.image"
              :alt="item.title"
              class="max-h-full max-w-full object-contain rounded-lg shadow-md group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />

            <!-- Hover Zoom Overlay -->
            <div class="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
              <span class="px-3 py-1.5 rounded-xl bg-brand-yellow text-slate-900 font-black text-xs border-2 border-slate-900 shadow-pop-sm flex items-center gap-1.5">
                <span>🔍</span>
                <span>點擊放大檢視</span>
              </span>
            </div>

            <!-- Top Floating Year Badge -->
            <div class="absolute top-2.5 right-2.5">
              <span class="text-[11px] font-black px-2.5 py-0.5 rounded-lg bg-slate-900/90 text-brand-yellow border border-slate-700 shadow-pop-sm">
                {{ item.year }}
              </span>
            </div>
          </div>

          <!-- Certificate Content Details -->
          <div class="p-5 space-y-2 flex-1 flex flex-col justify-between">
            <div class="space-y-1.5">
              <div class="flex items-center gap-2">
                <span
                  :class="[
                    'text-[10px] font-black px-2 py-0.5 rounded-md border border-slate-900 uppercase',
                    item.category === 'license'
                      ? 'bg-brand-cyan text-slate-900'
                      : 'bg-brand-pink text-white'
                  ]"
                >
                  {{ item.category === 'license' ? '📜 國際認證' : '🥇 競賽榮譽' }}
                </span>
                <span v-if="item.issuer" class="text-[11px] font-bold text-slate-500 dark:text-slate-400 truncate">
                  {{ item.issuer }}
                </span>
              </div>

              <h3 class="font-black text-base text-slate-900 dark:text-white leading-snug">
                {{ item.title }}
              </h3>

              <p v-if="item.description" class="text-xs text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                {{ item.description }}
              </p>
            </div>

            <button
              type="button"
              @click="openGallery(item.title, item.category === 'license' ? '📜 國際專業認證' : '🥇 獲獎榮譽', [item.image], item.description)"
              class="pop-button w-full mt-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-brand-yellow dark:hover:bg-brand-yellow text-slate-800 dark:text-slate-200 hover:text-slate-900 dark:hover:text-slate-900 font-black text-xs border-2 border-slate-900 shadow-pop-sm flex items-center justify-center gap-1.5 transition-colors"
            >
              <span>🔍 檢視完整證書</span>
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Education (學歷與專業培訓) -->
    <section class="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border-2 border-slate-900 dark:border-slate-700 shadow-pop space-y-6">
      <div class="flex items-center gap-3 border-b-2 border-slate-100 dark:border-slate-800 pb-3">
        <span class="w-10 h-10 rounded-xl bg-brand-cyan border-2 border-slate-900 flex items-center justify-center text-lg shadow-pop-sm">
          🎓
        </span>
        <div>
          <h2 class="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">學歷與培訓 (Education & Training)</h2>
          <p class="text-xs font-bold text-slate-500">大專院校設計模擬養成與專業技術深造</p>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div
          v-for="edu in resumeStore.educations"
          :key="edu.id"
          class="pop-card p-5 sm:p-6 rounded-2xl bg-amber-50/50 dark:bg-slate-800/60 border-2 border-slate-900 shadow-pop space-y-3 flex flex-col justify-between"
        >
          <div class="space-y-2">
            <div class="flex items-center justify-between">
              <h3 class="font-black text-lg text-slate-900 dark:text-white">
                {{ edu.school }}
              </h3>
              <span class="text-xs font-black bg-brand-yellow text-slate-900 px-2.5 py-0.5 rounded-lg border border-slate-900 shadow-pop-sm">
                {{ edu.period }}
              </span>
            </div>
            <p class="text-xs sm:text-sm font-black text-indigo-600 dark:text-sky-400">
              {{ edu.departmentOrCourse }} · {{ edu.degreeOrType }}
            </p>
            <p v-if="edu.courses" class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
              <strong class="text-slate-800 dark:text-slate-100">主要課程：</strong> {{ edu.courses }}
            </p>
            <p v-if="edu.project" class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
              <strong class="text-slate-800 dark:text-slate-100">畢業專題：</strong> {{ edu.project }}
            </p>
          </div>

          <!-- View Images Button (for Shih Chien University) -->
          <div v-if="edu.images && edu.images.length > 0" class="pt-1">
            <button
              type="button"
              @click="openGallery(edu.school + ' · 學歷/專題照片', '學歷與培訓', edu.images, '實踐大學資訊模擬與設計學系相關照片紀錄。')"
              class="pop-button w-full sm:w-auto px-3.5 py-1.5 rounded-xl bg-brand-yellow hover:bg-amber-300 text-slate-900 font-black text-xs border-2 border-slate-900 shadow-pop-sm flex items-center justify-center gap-1.5 transition-all"
            >
              <span>🖼️ 查看相關照片 ({{ edu.images.length }}張)</span>
              <span>↗</span>
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Beyond Coding / Hobbies Section (活潑生活特質 - 移動到最後) -->
    <section class="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-cyan-100 via-pink-100 to-amber-100 dark:from-slate-900 dark:via-indigo-950 dark:to-slate-900 border-2 border-slate-900 dark:border-slate-700 shadow-pop space-y-6">
      <div class="flex items-center justify-between border-b-2 border-slate-900/10 dark:border-slate-700 pb-3">
        <div class="flex items-center gap-3">
          <span class="w-10 h-10 rounded-xl bg-brand-pink text-white border-2 border-slate-900 flex items-center justify-center text-lg shadow-pop-sm">
            🛹
          </span>
          <div>
            <h2 class="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">程式之外 (Beyond Coding)</h2>
            <p class="text-xs font-bold text-slate-600 dark:text-slate-400">保持工作與生活平衡的充沛活力</p>
          </div>
        </div>
        <span class="text-xs font-bold px-3 py-1 rounded-xl bg-white dark:bg-slate-800 border-2 border-slate-900 shadow-pop-sm">
          🌟 Work-Life Harmony
        </span>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div
          v-for="hobby in hobbies"
          :key="hobby.title"
          class="p-4 rounded-2xl bg-white/90 dark:bg-slate-800/90 border-2 border-slate-900 shadow-pop-sm space-y-2 hover:-translate-y-1 transition-transform"
        >
          <div class="text-3xl">{{ hobby.icon }}</div>
          <h3 class="font-black text-sm text-slate-900 dark:text-white">{{ hobby.title }}</h3>
          <p class="text-xs font-medium text-slate-600 dark:text-slate-300 leading-relaxed">{{ hobby.desc }}</p>
        </div>
      </div>
    </section>

    <!-- Universal Fullscreen Lightbox Modal (for VR, Education & Certificates) -->
    <Teleport to="body">
      <div
        v-if="isGalleryOpen && activeGallery !== null"
        class="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md flex flex-col items-center justify-between p-3 sm:p-6 animate-fadeIn select-none"
        @click.self="closeGallery"
      >
        <!-- Top Bar -->
        <div class="w-full max-w-5xl flex items-center justify-between text-white pb-3 border-b border-slate-800">
          <div class="flex items-center gap-3">
            <span class="px-3 py-1 rounded-xl bg-brand-yellow text-slate-900 font-black text-xs shadow-pop-sm">
              {{ activeGallery.category }}
              <span v-if="activeGallery.images.length > 1">
                · {{ activeGallery.currentIndex + 1 }} / {{ activeGallery.images.length }}
              </span>
            </span>
            <span class="font-black text-sm text-slate-200 hidden sm:inline truncate max-w-md">
              {{ activeGallery.title }}
            </span>
          </div>

          <button
            @click="closeGallery"
            class="px-4 py-1.5 rounded-xl bg-slate-800 hover:bg-rose-500 hover:text-white text-slate-200 font-black text-sm border border-slate-700 shadow-pop-sm transition-all"
          >
            ✕ 關閉 (ESC)
          </button>
        </div>

        <!-- High-Res Image View Area -->
        <div class="relative w-full max-w-5xl flex-1 flex items-center justify-center my-3 p-2">
          <!-- Prev Button (only if multiple images) -->
          <button
            v-if="activeGallery.images.length > 1"
            @click.stop="prevGalleryImage"
            class="absolute left-1 sm:left-4 z-20 w-11 h-11 sm:w-14 sm:h-14 rounded-2xl bg-white/90 dark:bg-slate-800/90 text-slate-900 dark:text-white border-2 border-slate-900 shadow-pop font-black text-2xl sm:text-3xl hover:scale-110 active:scale-95 transition-all flex items-center justify-center"
            title="上一張 (←)"
          >
            ‹
          </button>

          <!-- Image Container: Uncropped High-Res View -->
          <div class="w-full h-full flex items-center justify-center p-2">
            <img
              :src="activeGallery.images[activeGallery.currentIndex]"
              :alt="activeGallery.title"
              class="max-h-[75vh] max-w-[86vw] w-auto h-auto object-contain rounded-2xl border-2 border-slate-800 shadow-2xl bg-slate-900"
            />
          </div>

          <!-- Next Button (only if multiple images) -->
          <button
            v-if="activeGallery.images.length > 1"
            @click.stop="nextGalleryImage"
            class="absolute right-1 sm:right-4 z-20 w-11 h-11 sm:w-14 sm:h-14 rounded-2xl bg-white/90 dark:bg-slate-800/90 text-slate-900 dark:text-white border-2 border-slate-900 shadow-pop font-black text-2xl sm:text-3xl hover:scale-110 active:scale-95 transition-all flex items-center justify-center"
            title="下一張 (→)"
          >
            ›
          </button>
        </div>

        <!-- Bottom Description Bar -->
        <div class="w-full max-w-5xl bg-slate-900/90 border border-slate-800 rounded-2xl p-3.5 text-center space-y-1.5 text-white">
          <h4 class="text-sm sm:text-base font-black text-brand-yellow">
            {{ activeGallery.title }}
            <span v-if="activeGallery.images.length > 1" class="text-xs text-slate-300 font-bold ml-1.5">
              (第 {{ activeGallery.currentIndex + 1 }} / {{ activeGallery.images.length }} 張)
            </span>
          </h4>
          <p v-if="activeGallery.description" class="text-xs text-slate-300 max-w-2xl mx-auto">
            {{ activeGallery.description }}
          </p>

          <!-- Thumbnails Dot Selector if multiple images -->
          <div v-if="activeGallery.images.length > 1" class="flex items-center justify-center gap-3 pt-1">
            <button
              v-for="(_, idx) in activeGallery.images"
              :key="idx"
              @click.stop="activeGallery.currentIndex = idx"
              :class="[
                'w-3 h-3 rounded-full transition-all',
                activeGallery.currentIndex === idx
                  ? 'bg-brand-yellow scale-125 ring-2 ring-brand-yellow'
                  : 'bg-slate-700 hover:bg-slate-500'
              ]"
              :title="`第 ${idx + 1} 張`"
            ></button>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<style scoped>
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
.animate-fadeIn {
  animation: fadeIn 0.2s ease-out;
}
</style>
