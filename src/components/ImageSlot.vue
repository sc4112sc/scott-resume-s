<script setup lang="ts">
import { ref, watch } from 'vue'
import { Image as ImageIcon } from 'lucide-vue-next'

const props = withDefaults(
  defineProps<{
    src: string
    alt?: string
    aspectRatio?: string
    rounded?: string
    objectFit?: 'cover' | 'contain' | 'fill'
    placeholderText?: string
    showPathHint?: boolean
  }>(),
  {
    alt: 'Image',
    aspectRatio: 'aspect-video',
    rounded: 'rounded-2xl',
    objectFit: 'cover',
    placeholderText: '圖片預留位置',
    showPathHint: false,
  }
)

const hasError = ref(false)

watch(
  () => props.src,
  () => {
    hasError.value = false
  }
)

const handleError = () => {
  hasError.value = true
}
</script>

<template>
  <div class="relative overflow-hidden group border-2 border-slate-900 dark:border-slate-700 bg-slate-900 shadow-pop" :class="[aspectRatio, rounded]">
    <!-- Actual Image -->
    <img
      v-if="!hasError && src"
      :src="src"
      :alt="alt"
      :class="[
        'w-full h-full transition-transform duration-500 group-hover:scale-105',
        objectFit === 'contain' ? 'object-contain' : 'object-cover'
      ]"
      @error="handleError"
    />

    <!-- Fallback / Placeholder if Image Not Found or Errored -->
    <div
      v-else
      class="w-full h-full flex flex-col items-center justify-center p-6 text-center text-slate-400 dark:text-slate-400 space-y-2 select-none bg-gradient-to-br from-slate-800 to-slate-900"
    >
      <div class="w-12 h-12 rounded-2xl bg-slate-800 border-2 border-slate-700 flex items-center justify-center text-xl shadow-pop-sm">
        <ImageIcon class="w-6 h-6 text-slate-400" />
      </div>
      <p class="text-xs font-black text-slate-200">{{ placeholderText }}</p>
    </div>
  </div>
</template>
