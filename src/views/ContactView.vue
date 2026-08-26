<script setup lang="ts">
import { ref } from 'vue'
import { useResumeStore } from '@/stores/resume'
import {
  Sparkles,
  Mail,
  Phone,
  MapPin,
  Check,
  Copy,
  PhoneCall,
  Globe,
  MessageSquare,
  Send
} from 'lucide-vue-next'

const resumeStore = useResumeStore()

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: '',
})

const isSubmitted = ref(false)
const copied = ref(false)

const copyEmail = () => {
  navigator.clipboard.writeText(resumeStore.profile.email)
  copied.value = true
  setTimeout(() => {
    copied.value = false
  }, 2000)
}

const handleSubmit = () => {
  if (!form.value.name || !form.value.email || !form.value.message) {
    alert('請填寫完整資訊！')
    return
  }
  isSubmitted.value = true
  setTimeout(() => {
    const mailtoSubject = encodeURIComponent(`[履歷聯絡] ${form.value.subject || '來自作品集網站的訊息'}`)
    const mailtoBody = encodeURIComponent(`姓名: ${form.value.name}\nEmail: ${form.value.email}\n\n${form.value.message}`)
    window.location.href = `mailto:${resumeStore.profile.email}?subject=${mailtoSubject}&body=${mailtoBody}`

    form.value = { name: '', email: '', subject: '', message: '' }
    isSubmitted.value = false
    alert('已為您開啟電子郵件軟體！感謝您的來信。')
  }, 600)
}
</script>

<template>
  <div class="space-y-10 py-4 sm:py-6 max-w-3xl mx-auto">
    <!-- Header -->
    <div class="text-center space-y-3 p-6 sm:p-8 rounded-3xl bg-brand-coral/15 dark:bg-slate-900 border-2 border-slate-900 dark:border-slate-700 shadow-pop">
      <div class="inline-flex items-center gap-1.5 rounded-xl bg-white dark:bg-slate-800 border-2 border-slate-900 px-3 py-1 text-xs font-black shadow-pop-sm text-slate-900 dark:text-white">
        <Sparkles class="w-3.5 h-3.5 text-rose-500" />
        <span>Let's Connect</span>
      </div>
      <h1 class="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white flex items-center justify-center gap-2.5">
        <Mail class="w-7 h-7 sm:w-8 sm:h-8 text-brand-coral" />
        <span>聯絡與合作 (Contact)</span>
      </h1>
      <p class="text-xs sm:text-sm font-bold text-slate-600 dark:text-slate-300 max-w-lg mx-auto leading-relaxed">
        無論是技術交流、專案合作洽詢或職缺機會，都非常歡迎隨時與我聯繫！
      </p>
    </div>

    <!-- Contact Cards Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <!-- Email Card -->
      <div
        class="pop-card p-5 rounded-2xl bg-white dark:bg-slate-900 border-2 border-slate-900 dark:border-slate-700 shadow-pop text-center space-y-3 flex flex-col justify-between"
      >
        <div class="space-y-2">
          <div class="w-11 h-11 mx-auto rounded-xl bg-amber-100 dark:bg-slate-800 border-2 border-slate-900 flex items-center justify-center shadow-pop-sm text-slate-900 dark:text-amber-400">
            <Mail class="w-5 h-5" />
          </div>
          <div class="text-xs font-black text-slate-400 uppercase tracking-wider">電子郵件</div>
          <div class="text-xs sm:text-sm font-bold text-slate-900 dark:text-white truncate">
            {{ resumeStore.profile.email }}
          </div>
        </div>
        <button
          @click="copyEmail"
          class="pop-button mt-2 w-full py-1.5 rounded-xl bg-brand-yellow text-slate-900 border-2 border-slate-900 font-black text-xs shadow-pop-sm flex items-center justify-center gap-1.5"
        >
          <Check v-if="copied" class="w-3.5 h-3.5 text-emerald-700 font-black" />
          <Copy v-else class="w-3.5 h-3.5 text-slate-900" />
          <span>{{ copied ? '已複製！' : '點擊複製' }}</span>
        </button>
      </div>

      <!-- Phone Card -->
      <a
        :href="`tel:${resumeStore.profile.phone}`"
        class="pop-card p-5 rounded-2xl bg-white dark:bg-slate-900 border-2 border-slate-900 dark:border-slate-700 shadow-pop text-center space-y-3 flex flex-col justify-between group"
      >
        <div class="space-y-2">
          <div class="w-11 h-11 mx-auto rounded-xl bg-cyan-100 dark:bg-slate-800 border-2 border-slate-900 flex items-center justify-center shadow-pop-sm text-slate-900 dark:text-cyan-400 group-hover:scale-105 transition-transform">
            <Phone class="w-5 h-5" />
          </div>
          <div class="text-xs font-black text-slate-400 uppercase tracking-wider">電話聯絡</div>
          <div class="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
            {{ resumeStore.profile.phone }}
          </div>
        </div>
        <span class="w-full py-1.5 rounded-xl bg-brand-cyan text-slate-900 border-2 border-slate-900 font-black text-xs shadow-pop-sm flex items-center justify-center gap-1.5">
          <PhoneCall class="w-3.5 h-3.5" />
          <span>撥打電話</span>
        </span>
      </a>

      <!-- Location Card -->
      <div class="pop-card p-5 rounded-2xl bg-white dark:bg-slate-900 border-2 border-slate-900 dark:border-slate-700 shadow-pop text-center space-y-3 flex flex-col justify-between">
        <div class="space-y-2">
          <div class="w-11 h-11 mx-auto rounded-xl bg-emerald-100 dark:bg-slate-800 border-2 border-slate-900 flex items-center justify-center shadow-pop-sm text-slate-900 dark:text-emerald-400">
            <MapPin class="w-5 h-5" />
          </div>
          <div class="text-xs font-black text-slate-400 uppercase tracking-wider">所在位置</div>
          <div class="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
            {{ resumeStore.profile.location }}
          </div>
        </div>
        <span class="w-full py-1.5 rounded-xl bg-brand-mint text-slate-900 border-2 border-slate-900 font-black text-xs shadow-pop-sm flex items-center justify-center gap-1">
          <MapPin class="w-3.5 h-3.5" />
          <span>台灣 · 台中 / 台南</span>
        </span>
      </div>
    </div>

    <!-- Social Profile Strip -->
    <div class="p-6 rounded-3xl bg-white dark:bg-slate-900 border-2 border-slate-900 dark:border-slate-700 shadow-pop flex flex-wrap items-center justify-between gap-4">
      <div class="space-y-0.5">
        <h3 class="text-sm font-black text-slate-900 dark:text-white flex items-center gap-1.5">
          <Globe class="w-4 h-4 text-brand-purple" />
          <span>線上履歷與社群主頁</span>
        </h3>
        <p class="text-xs font-bold text-slate-500">歡迎造訪我的 GitHub、CakeResume 與 Facebook</p>
      </div>

      <div class="flex flex-wrap items-center gap-2.5">
        <a
          :href="resumeStore.profile.social.job104"
          target="_blank"
          rel="noopener noreferrer"
          class="pop-button px-3.5 py-1.5 rounded-xl bg-amber-400 text-slate-900 font-black text-xs border-2 border-slate-900 shadow-pop-sm"
        >
          104 人力銀行 ↗
        </a>
        <a
          :href="resumeStore.profile.social.cakeResume"
          target="_blank"
          rel="noopener noreferrer"
          class="pop-button px-3.5 py-1.5 rounded-xl bg-brand-mint text-slate-900 font-black text-xs border-2 border-slate-900 shadow-pop-sm"
        >
          CakeResume ↗
        </a>
        <a
          :href="resumeStore.profile.social.github"
          target="_blank"
          rel="noopener noreferrer"
          class="pop-button px-3.5 py-1.5 rounded-xl bg-slate-900 text-white font-black text-xs border-2 border-slate-900 shadow-pop-sm"
        >
          GitHub ↗
        </a>
        <a
          :href="resumeStore.profile.social.facebook"
          target="_blank"
          rel="noopener noreferrer"
          class="pop-button px-3.5 py-1.5 rounded-xl bg-blue-600 text-white font-black text-xs border-2 border-slate-900 shadow-pop-sm"
        >
          Facebook ↗
        </a>
      </div>
    </div>

    <!-- Direct Message Form -->
    <form
      @submit.prevent="handleSubmit"
      class="pop-card p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border-2 border-slate-900 dark:border-slate-700 shadow-pop-lg space-y-5"
    >
      <div class="border-b-2 border-slate-100 dark:border-slate-800 pb-3">
        <h2 class="text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
          <MessageSquare class="w-5 h-5 text-brand-cyan" />
          <span>發送訊息 (Send a Note)</span>
        </h2>
        <p class="text-xs font-bold text-slate-500 mt-0.5">填寫完成後將直接帶入您的信箱寄送給 {{ resumeStore.profile.name }}</p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div class="space-y-1.5">
          <label class="block text-xs font-black text-slate-800 dark:text-slate-200">您的姓名 / Name *</label>
          <input
            v-model="form.name"
            type="text"
            required
            placeholder="例如：Alex Chen"
            class="w-full px-4 py-2.5 rounded-xl border-2 border-slate-900 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm font-medium focus:outline-none focus:bg-amber-50/50 shadow-pop-sm"
          />
        </div>

        <div class="space-y-1.5">
          <label class="block text-xs font-black text-slate-800 dark:text-slate-200">電子信箱 / Email *</label>
          <input
            v-model="form.email"
            type="email"
            required
            placeholder="your-email@example.com"
            class="w-full px-4 py-2.5 rounded-xl border-2 border-slate-900 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm font-medium focus:outline-none focus:bg-amber-50/50 shadow-pop-sm"
          />
        </div>
      </div>

      <div class="space-y-1.5">
        <label class="block text-xs font-black text-slate-800 dark:text-slate-200">主旨 / Subject</label>
        <input
          v-model="form.subject"
          type="text"
          placeholder="專案合作洽詢 / 職缺交流"
          class="w-full px-4 py-2.5 rounded-xl border-2 border-slate-900 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm font-medium focus:outline-none focus:bg-amber-50/50 shadow-pop-sm"
        />
      </div>

      <div class="space-y-1.5">
        <label class="block text-xs font-black text-slate-800 dark:text-slate-200">訊息內容 / Message *</label>
        <textarea
          v-model="form.message"
          rows="4"
          required
          placeholder="請輸入您想交流或討論的內容..."
          class="w-full px-4 py-2.5 rounded-xl border-2 border-slate-900 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm font-medium focus:outline-none focus:bg-amber-50/50 shadow-pop-sm"
        ></textarea>
      </div>

      <button
        type="submit"
        :disabled="isSubmitted"
        class="pop-button w-full py-3.5 rounded-2xl bg-brand-yellow hover:bg-amber-300 disabled:bg-slate-400 text-slate-900 font-black text-sm border-2 border-slate-900 shadow-pop flex items-center justify-center gap-2"
      >
        <Send class="w-4 h-4" />
        <span>{{ isSubmitted ? '發送中...' : '送出訊息 (Send Message)' }}</span>
      </button>
    </form>
  </div>
</template>
