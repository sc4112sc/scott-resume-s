<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useResumeStore } from '@/stores/resume'
import { Sparkles, Home, FolderKanban, Mail } from 'lucide-vue-next'

const resumeStore = useResumeStore()
</script>

<template>
  <header class="sticky top-4 z-50 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto mb-4">
    <div class="bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-2 border-slate-900 dark:border-slate-700 rounded-2xl shadow-pop p-2 sm:px-5 flex items-center justify-between transition-all">
      <!-- Brand Avatar & Logo -->
      <RouterLink to="/" class="flex items-center space-x-3 group">
        <div class="relative w-10 h-10 rounded-xl bg-brand-yellow border-2 border-slate-900 overflow-hidden shadow-pop-sm group-hover:rotate-6 group-hover:scale-105 transition-transform flex items-center justify-center font-black text-slate-900">
          <img
            :src="resumeStore.profile.avatar"
            :alt="resumeStore.profile.name"
            class="w-full h-full object-cover"
            @error="(e) => { (e.target as HTMLElement).style.display = 'none'; }"
          />
        </div>
        <div class="flex flex-col">
          <div class="flex items-center gap-1.5">
            <span class="font-black text-base text-slate-900 dark:text-white tracking-tight">
              {{ resumeStore.profile.name }}
            </span>
            <Sparkles class="w-3.5 h-3.5 text-amber-500 fill-amber-400" />
          </div>
          <span class="text-[11px] font-bold text-slate-500 dark:text-slate-400">
            {{ resumeStore.profile.englishName }} · Frontend Dev
          </span>
        </div>
      </RouterLink>

      <!-- Nav Links -->
      <nav class="flex items-center space-x-1 sm:space-x-2">
        <RouterLink
          to="/"
          active-class="!bg-brand-yellow !text-slate-900 !border-slate-900 shadow-pop-sm font-black"
          class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-200 border-2 border-transparent hover:border-slate-900 hover:bg-amber-100 dark:hover:bg-slate-800 transition-all"
        >
          <Home class="w-4 h-4" />
          <span>履歷總覽</span>
        </RouterLink>
        <RouterLink
          to="/projects"
          active-class="!bg-brand-cyan !text-slate-900 !border-slate-900 shadow-pop-sm font-black"
          class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-200 border-2 border-transparent hover:border-slate-900 hover:bg-cyan-100 dark:hover:bg-slate-800 transition-all"
        >
          <FolderKanban class="w-4 h-4" />
          <span>作品專案</span>
        </RouterLink>
        <RouterLink
          to="/contact"
          active-class="!bg-brand-coral !text-white !border-slate-900 shadow-pop-sm font-black"
          class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-200 border-2 border-transparent hover:border-slate-900 hover:bg-rose-100 dark:hover:bg-slate-800 transition-all"
        >
          <Mail class="w-4 h-4" />
          <span>聯絡我</span>
        </RouterLink>

        <!-- Social Buttons -->
        <div class="hidden sm:flex items-center pl-2 border-l-2 border-slate-200 dark:border-slate-800 ml-1 space-x-2">
          <a
            :href="resumeStore.profile.social.github"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
            class="p-1.5 rounded-xl border-2 border-slate-900 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 hover:bg-brand-yellow hover:text-slate-900 text-slate-800 dark:text-slate-200 shadow-pop-sm hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
          >
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
          </a>
          <a
            :href="resumeStore.profile.social.job104"
            target="_blank"
            rel="noopener noreferrer"
            class="px-2.5 py-1 rounded-xl border-2 border-slate-900 bg-amber-400 text-slate-900 font-black text-xs shadow-pop-sm hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
          >
            104 ↗
          </a>
          <a
            :href="resumeStore.profile.social.cakeResume"
            target="_blank"
            rel="noopener noreferrer"
            class="px-2.5 py-1 rounded-xl border-2 border-slate-900 bg-brand-mint text-slate-900 font-black text-xs shadow-pop-sm hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
          >
            Cake ↗
          </a>
        </div>
      </nav>
    </div>
  </header>
</template>
