<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps<{
  images: string[]
  projectTitle: string
  projectType: 'WEB' | 'APP'
}>()

const activeIndex = ref(0)
const isLightboxOpen = ref(false)

const setActive = (idx: number) => {
  activeIndex.value = idx
}

const openLightbox = (idx?: number) => {
  if (typeof idx === 'number') activeIndex.value = idx
  isLightboxOpen.value = true
}

const closeLightbox = () => {
  isLightboxOpen.value = false
}

const prevImage = () => {
  activeIndex.value = (activeIndex.value - 1 + props.images.length) % props.images.length
}

const nextImage = () => {
  activeIndex.value = (activeIndex.value + 1) % props.images.length
}

// Keyboard navigation (Arrow keys & Escape)
const handleKeyDown = (e: KeyboardEvent) => {
  if (!isLightboxOpen.value) return
  if (e.key === 'Escape') closeLightbox()
  if (e.key === 'ArrowLeft') prevImage()
  if (e.key === 'ArrowRight') nextImage()
}

onMounted(() => {
  window.addEventListener('keydown', handleKeyDown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown)
})
</script>

<template>
  <div class="space-y-3">
    <!-- Main Display Frame (Compact, Crisp, Centered) -->
    <div
      class="relative group rounded-2xl overflow-hidden border-2 border-slate-900 dark:border-slate-700 bg-slate-950/90 shadow-pop flex items-center justify-center p-2 sm:p-4 min-h-[220px] max-h-[360px] sm:max-h-[400px]"
    >
      <!-- Clickable Preview Image Container -->
      <div
        class="relative w-full h-full flex items-center justify-center cursor-zoom-in"
        @click="openLightbox(activeIndex)"
      >
        <img
          :src="images[activeIndex]"
          :alt="`${projectTitle} - 截圖 0${activeIndex + 1}`"
          class="max-h-[300px] sm:max-h-[350px] w-auto max-w-full object-contain rounded-xl shadow-lg transition-transform duration-300 group-hover:scale-[1.02]"
          loading="lazy"
        />
      </div>

      <!-- Image Index Badge -->
      <div class="absolute top-3 left-3 pointer-events-none">
        <span class="px-2.5 py-1 rounded-xl bg-slate-900/90 text-brand-yellow font-black text-xs border border-slate-700 backdrop-blur-md shadow-pop-sm flex items-center gap-1.5">
          <span>📸</span>
          <span>0{{ activeIndex + 1 }} / 0{{ images.length }}</span>
        </span>
      </div>

      <!-- Zoom Button -->
      <button
        @click="openLightbox(activeIndex)"
        class="absolute top-3 right-3 px-3 py-1.5 rounded-xl bg-white/95 dark:bg-slate-900/95 hover:bg-brand-yellow text-slate-900 dark:text-white hover:text-slate-900 font-black text-xs border-2 border-slate-900 shadow-pop-sm transition-all flex items-center gap-1 opacity-90 group-hover:opacity-100"
        title="點擊全螢幕放大"
      >
        <span>🔍 放大檢視</span>
      </button>

      <!-- Quick Prev / Next Arrows on Hover -->
      <button
        @click.stop="prevImage"
        class="absolute left-2 w-8 h-8 rounded-full bg-white/90 dark:bg-slate-900/90 text-slate-900 dark:text-white border border-slate-900 flex items-center justify-center font-black text-sm opacity-0 group-hover:opacity-100 transition-opacity hover:scale-110 shadow-pop-sm"
        title="上一張"
      >
        ‹
      </button>
      <button
        @click.stop="nextImage"
        class="absolute right-2 w-8 h-8 rounded-full bg-white/90 dark:bg-slate-900/90 text-slate-900 dark:text-white border border-slate-900 flex items-center justify-center font-black text-sm opacity-0 group-hover:opacity-100 transition-opacity hover:scale-110 shadow-pop-sm"
        title="下一張"
      >
        ›
      </button>
    </div>

    <!-- 5-Thumbnail Strip (Crisp & Clean) -->
    <div class="grid grid-cols-5 gap-2 sm:gap-3">
      <button
        v-for="(img, idx) in images"
        :key="idx"
        @click="setActive(idx)"
        type="button"
        :class="[
          'pop-button p-1 sm:p-1.5 rounded-xl border-2 transition-all flex flex-col items-center justify-center space-y-1 overflow-hidden group/thumb',
          activeIndex === idx
            ? 'bg-brand-yellow text-slate-900 border-slate-900 shadow-pop-sm scale-[1.03] ring-2 ring-brand-yellow'
            : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-300 dark:border-slate-700 hover:border-slate-900'
        ]"
      >
        <!-- Mini Crisp Thumbnail -->
        <div class="w-full h-12 sm:h-14 rounded-lg overflow-hidden bg-slate-900 flex items-center justify-center p-0.5">
          <img
            :src="img"
            :alt="`縮圖 0${idx + 1}`"
            class="w-full h-full object-contain group-hover/thumb:scale-110 transition-transform"
            loading="lazy"
          />
        </div>
        <span class="text-[10px] font-black leading-tight">
          截圖 0{{ idx + 1 }}
        </span>
      </button>
    </div>

    <!-- Fullscreen Lightbox Modal (Fully Proportional, Never Cropped) -->
    <Teleport to="body">
      <div
        v-if="isLightboxOpen"
        class="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md flex flex-col items-center justify-between p-3 sm:p-6 animate-fadeIn select-none"
        @click.self="closeLightbox"
      >
        <!-- Top Bar -->
        <div class="w-full max-w-7xl flex items-center justify-between text-white pb-3 border-b border-slate-800">
          <div class="flex items-center gap-3">
            <span class="px-3 py-1 rounded-xl bg-brand-yellow text-slate-900 font-black text-xs shadow-pop-sm">
              {{ projectTitle }} · 截圖 0{{ activeIndex + 1 }} / 0{{ images.length }}
            </span>
            <span class="text-xs text-slate-400 font-medium hidden sm:inline">
              支援鍵盤 ← → 鍵切換，ESC 鍵退出
            </span>
          </div>

          <button
            @click="closeLightbox"
            class="px-4 py-1.5 rounded-xl bg-slate-800 hover:bg-rose-500 hover:text-white text-slate-200 font-black text-sm border border-slate-700 shadow-pop-sm transition-all"
          >
            ✕ 關閉 (ESC)
          </button>
        </div>

        <!-- High-Res Image Display Area (Centered, Full view, Never Cropped) -->
        <div class="relative w-full max-w-7xl flex-1 flex items-center justify-center my-2 p-1">
          <!-- Prev Button -->
          <button
            @click.stop="prevImage"
            class="absolute left-1 sm:left-4 z-20 w-11 h-11 sm:w-14 sm:h-14 rounded-2xl bg-white/90 dark:bg-slate-800/90 text-slate-900 dark:text-white border-2 border-slate-900 shadow-pop font-black text-2xl sm:text-3xl hover:scale-110 active:scale-95 transition-all flex items-center justify-center"
            title="上一張 (←)"
          >
            ‹
          </button>

          <!-- Crisp Full Image View (No Cropping) -->
          <div class="w-full h-full flex items-center justify-center p-2">
            <img
              :src="images[activeIndex]"
              :alt="`${projectTitle} - 截圖 0${activeIndex + 1}`"
              class="max-h-[76vh] max-w-[86vw] w-auto h-auto object-contain rounded-2xl border-2 border-slate-800 shadow-2xl bg-slate-900"
            />
          </div>

          <!-- Next Button -->
          <button
            @click.stop="nextImage"
            class="absolute right-1 sm:right-4 z-20 w-11 h-11 sm:w-14 sm:h-14 rounded-2xl bg-white/90 dark:bg-slate-800/90 text-slate-900 dark:text-white border-2 border-slate-900 shadow-pop font-black text-2xl sm:text-3xl hover:scale-110 active:scale-95 transition-all flex items-center justify-center"
            title="下一張 (→)"
          >
            ›
          </button>
        </div>

        <!-- Bottom Dot Thumbnails -->
        <div class="flex items-center justify-center gap-3 pt-2">
          <button
            v-for="(_, idx) in images"
            :key="idx"
            @click.stop="setActive(idx)"
            :class="[
              'w-3 h-3 rounded-full transition-all',
              activeIndex === idx
                ? 'bg-brand-yellow scale-125 ring-2 ring-brand-yellow'
                : 'bg-slate-700 hover:bg-slate-500'
            ]"
            :title="`第 ${idx + 1} 張`"
          ></button>
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
