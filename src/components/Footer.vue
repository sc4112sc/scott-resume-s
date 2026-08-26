<script setup lang="ts">
import { useResumeStore } from '@/stores/resume'
import SkateboardIcon from '@/components/icons/SkateboardIcon.vue'

const resumeStore = useResumeStore()
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="mt-12 py-8 text-center text-xs sm:text-sm text-slate-600 dark:text-slate-400">
    <div class="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-2xl bg-white/80 dark:bg-slate-900/80 border-2 border-slate-900 dark:border-slate-700 shadow-pop-sm">
      <div class="flex items-center gap-2 font-bold text-slate-800 dark:text-slate-200">
        <SkateboardIcon class="w-4 h-4 text-brand-yellow" />
        <span>© {{ currentYear }} {{ resumeStore.profile.name }} ({{ resumeStore.profile.englishName }}).</span>
      </div>

      <div class="flex items-center space-x-2">
        <a
          :href="resumeStore.profile.social.github"
          target="_blank"
          rel="noopener noreferrer"
          class="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-900 text-xs font-bold hover:bg-brand-yellow hover:text-slate-900 transition-colors shadow-pop-sm"
        >
          GitHub
        </a>
        <a
          :href="resumeStore.profile.social.job104"
          target="_blank"
          rel="noopener noreferrer"
          class="px-2.5 py-1 rounded-lg bg-amber-400 text-slate-900 border border-slate-900 text-xs font-black shadow-pop-sm"
        >
          104 人力銀行
        </a>
        <a
          :href="resumeStore.profile.social.cakeResume"
          target="_blank"
          rel="noopener noreferrer"
          class="px-2.5 py-1 rounded-lg bg-brand-mint text-slate-900 border border-slate-900 text-xs font-black shadow-pop-sm"
        >
          CakeResume
        </a>
        <a
          :href="resumeStore.profile.social.facebook"
          target="_blank"
          rel="noopener noreferrer"
          class="px-2.5 py-1 rounded-lg bg-blue-600 text-white border border-slate-900 text-xs font-bold shadow-pop-sm"
        >
          Facebook
        </a>
      </div>
    </div>
  </footer>
</template>
