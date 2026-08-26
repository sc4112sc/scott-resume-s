<script setup lang="ts">
import { useResumeStore } from '@/stores/resume'
import ProjectGallery from '@/components/ProjectGallery.vue'

const resumeStore = useResumeStore()
</script>

<template>
  <div class="space-y-10 py-4 sm:py-6">
    <!-- Header Banner -->
    <div class="p-6 sm:p-8 rounded-3xl bg-brand-yellow dark:bg-slate-900 border-2 border-slate-900 dark:border-slate-700 shadow-pop flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      <div class="space-y-2">
        <div class="inline-flex items-center gap-1.5 rounded-xl bg-white dark:bg-slate-800 border-2 border-slate-900 px-3 py-1 text-xs font-black shadow-pop-sm">
          <span>🎨</span> 代表作展示 · 專案功能截圖
        </div>
        <h1 class="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white">
          精選專案作品 (Projects)
        </h1>
        <p class="text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300 max-w-2xl">
          收錄自研 Vue 3 UI 設計系統、iOS Swift 原生開發與 Flutter BLoC 跨平台應用之代表專案畫面。
        </p>
      </div>

      <div class="flex items-center gap-2">
        <span class="text-2xl sm:text-3xl">🚀</span>
      </div>
    </div>

    <!-- Projects List -->
    <div class="space-y-10">
      <div
        v-for="(project, index) in resumeStore.projects"
        :key="project.id"
        class="pop-card p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border-2 border-slate-900 dark:border-slate-700 shadow-pop-lg space-y-7"
      >
        <!-- Title & Badges Header -->
        <div class="flex flex-wrap items-center justify-between gap-4 border-b-2 border-slate-100 dark:border-slate-800 pb-4">
          <div class="flex items-center gap-3">
            <span class="w-10 h-10 rounded-2xl bg-brand-cyan border-2 border-slate-900 text-slate-900 font-black flex items-center justify-center text-sm shadow-pop-sm">
              0{{ index + 1 }}
            </span>
            <h2 class="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              {{ project.title }}
            </h2>
          </div>

          <div class="flex items-center gap-2">
            <span
              :class="[
                'text-xs font-black px-3 py-1 rounded-xl border-2 border-slate-900 shadow-pop-sm uppercase tracking-wider',
                project.type === 'WEB'
                  ? 'bg-brand-mint text-slate-900'
                  : 'bg-brand-pink text-white'
              ]"
            >
              {{ project.type }}
            </span>
            <span
              v-if="project.featured"
              class="text-xs font-black px-3 py-1 rounded-xl bg-brand-yellow text-slate-900 border-2 border-slate-900 shadow-pop-sm"
            >
              ⭐ Featured
            </span>
          </div>
        </div>

        <!-- Project Overview -->
        <div class="space-y-2">
          <h3 class="text-xs font-black uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
            <span>📖</span> 專案簡介 (Overview)
          </h3>
          <p class="text-sm sm:text-base font-medium text-slate-700 dark:text-slate-200 leading-relaxed p-4 sm:p-5 rounded-2xl bg-amber-50/50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
            {{ project.description }}
          </p>
        </div>

        <!-- 5-Image Compact Gallery -->
        <div class="space-y-2">
          <div class="flex items-center justify-between pb-1">
            <h3 class="text-xs font-black uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
              <span>🖼️</span> 專案畫面展示 (Screenshots)
            </h3>
            <span class="text-[11px] font-bold text-slate-500">點擊縮圖切換，點擊大圖可開啟全螢幕原解析度檢視</span>
          </div>

          <ProjectGallery
            :images="project.images"
            :project-title="project.title"
            :project-type="project.type"
          />
        </div>

        <!-- Tech Stack & Action Links Row -->
        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
          <!-- Tags -->
          <div class="space-y-1.5">
            <div class="text-[11px] font-black uppercase tracking-wider text-slate-400">技術標籤 (Tech Stack)</div>
            <div class="flex flex-wrap gap-1.5">
              <span
                v-for="tag in project.tags"
                :key="tag"
                class="text-xs font-bold px-3 py-1 rounded-xl bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 border-2 border-slate-900 shadow-pop-sm"
              >
                {{ tag }}
              </span>
            </div>
          </div>

          <!-- Action Links -->
          <div class="flex flex-wrap items-center gap-2.5 pt-2 sm:pt-0">
            <a
              v-if="project.demoUrl"
              :href="project.demoUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="pop-button px-4 py-2 rounded-xl bg-brand-coral hover:bg-rose-500 text-white font-black text-xs sm:text-sm border-2 border-slate-900 shadow-pop flex items-center gap-1.5"
            >
              <span>🚀 Live Demo 即時展示</span>
              <span>↗</span>
            </a>
            <a
              v-if="project.apkUrl"
              :href="project.apkUrl"
              download="MoviePeople.apk"
              class="pop-button px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs sm:text-sm border-2 border-slate-900 shadow-pop flex items-center gap-1.5"
            >
              <span>🤖 下載 Android APK</span>
              <span>⬇</span>
            </a>
            <a
              v-if="project.githubUrl"
              :href="project.githubUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="pop-button px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-black text-xs sm:text-sm border-2 border-slate-900 shadow-pop flex items-center gap-1.5"
            >
              <span>GitHub Repo</span>
              <span>↗</span>
            </a>
          </div>
        </div>

        <!-- Key Implementations (主要實作重點) -->
        <div class="p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-950/60 border-2 border-slate-900 dark:border-slate-700 space-y-3 shadow-pop-sm">
          <h3 class="text-sm font-black text-slate-900 dark:text-white flex items-center gap-2">
            <span>⚙️</span> 主要實作重點 (Key Implementations)
          </h3>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
            <div
              v-for="(item, idx) in project.implementations"
              :key="idx"
              class="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border-2 border-slate-900 text-xs font-bold text-slate-800 dark:text-slate-200 shadow-pop-sm"
            >
              <span class="w-5 h-5 rounded-lg bg-brand-yellow text-slate-900 font-black flex items-center justify-center text-[10px] flex-shrink-0 border border-slate-900">
                {{ idx + 1 }}
              </span>
              <span class="truncate">{{ item }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
