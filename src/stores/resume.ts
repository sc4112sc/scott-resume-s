import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export interface Experience {
  id: string
  company: string
  period: string
  role: string
  products: string
  technologies: string[]
  highlights: string[]
  images?: string[]
}

export interface Education {
  id: string
  school: string
  period: string
  degreeOrType: string
  departmentOrCourse: string
  details?: string
  courses?: string
  project?: string
  images?: string[]
}

export interface AwardLicense {
  id: string
  title: string
  year: string
  category: 'license' | 'award'
  image: string
  issuer?: string
  description?: string
}

export interface Project {
  id: string
  title: string
  type: 'WEB' | 'APP'
  description: string
  image: string
  images: string[]
  imageAlt: string
  implementations: string[]
  tags: string[]
  demoUrl?: string
  githubUrl?: string
  apkUrl?: string
  featured?: boolean
}

export interface SkillGroup {
  category: string
  icon: string
  skills: string[]
}

export const useResumeStore = defineStore('resume', () => {
  const profile = ref({
    name: '李書賢',
    englishName: 'SCOTT LEE',
    title: '前端工程師 (Front-End Developer)',
    jobTarget: '前端工程師',
    experienceYears: '6.5 年 (2020 - 2026)',
    location: 'Taichung, TW (來自台南，現居台中)',
    email: 'sc4112sc@gmail.com',
    phone: '0975817857',
    avatar: '/images/avatar.jpg',
    bioParagraphs: [
      '你好，我是李書賢，來自台南的一位軟體工程師，現居台中，擁有六年半的前端相關工作經驗，包含 WEB 與 APP。',
      '我畢業於實踐大學，就讀的科系為資訊模擬與設計學系，從剛開始接觸就對程式開發產生了興趣。在大學專題部分，我所負責的是程式設計與 Unity 整合的部分，專題參賽獲得了優勝與名次；同時也很幸運有機會到北京的軟體公司實習參與 VR 的製作。',
      '在中佑資訊長達六年半的經歷中，我主攻 Vue 3、Flutter 與原生 iOS App 開發，並在多個核心專案中展現了獨當一面的能力。期間我不僅獨立主導體育遊戲 App 從無到有的開發並順利審核上架，更幾乎一手包辦了即時通訊軟體 Web 端的架構與全盤功能開發；同時為提升系統穩定度，更為團隊導入單元測試體系並維持常態化穩定執行。工作上除了前端領域，也有機會學習後端與 AI 相關技術以拓展全端視野；配合團隊成熟的 Scrum 敏捷流程與每日站會，培養了團隊合作默契與專案推動力。',
      '我是一個配合度極高的人，相較於爭辯我傾向優先接納別人的意見，時而提供自己的想法。在工作之餘能體驗不同活動，比如滑板、羽球、健身或打陀螺等，都能使我身心放鬆。',
    ],
    social: {
      github: 'https://github.com/sc4112sc',
      cakeResume: 'https://www.cake.me/s--MVjOy8UM8PKvuh8E-bRS1g--/sc4112sc',
      job104: 'https://pda.104.com.tw/profile/preview?vno=75j2voxp5',
      facebook: 'https://www.facebook.com/profile.php?id=100001591123078',
      linkedin: 'https://www.linkedin.com/',
    },
  })

  const experiences = ref<Experience[]>([
    {
      id: 'zy-info',
      company: '中佑資訊有限公司',
      period: 'Feb 2020 - Aug 2026',
      role: '工程師',
      products: '體育賽事資訊平台、即時直播串流、通訊軟體、平台後台',
      technologies: ['Vue 3', 'Vue.js', 'Flutter', '原生 iOS (Swift/UIKit)', 'Unit Testing', 'Scrum 敏捷開發', 'WebSocket', 'RESTful API'],
      highlights: [
        '主導 Web 與跨平台 App（Vue、Flutter、iOS）架構設計、功能開發、單元測試與上架維運。',
        '獨立主導體育賽事資訊 App 從零到一之開發，完成架構設計與流暢互動，並順利通過審核上架。',
        '一手包辦即時通訊軟體 Web 端架構與全盤功能開發（含直播聊天室、即時通訊與群組管理）。',
        '為團隊導入單元測試體系（Unit Testing），制定測試標準並維持常態化穩定執行，顯著提升發布品質。',
        '評估新技術導入可行性，擔任前端技術諮詢窗口，積極推動技術知識分享並協助疑難排解。',
        '協同企劃、美術以及後端團隊規劃系統架構，敏捷實現各項核心業務功能與高互動需求。',
        '遵循 Scrum 敏捷流程與每日站會，精確掌握時程控管與自我技術成長。',
      ],
    },
    {
      id: 'aids-tech',
      company: '北京愛迪斯科技',
      period: 'July 2015 - Aug 2015',
      role: '實習生',
      products: '室內設計 VR 導覽',
      technologies: ['Unity 3D', 'C#', 'Virtual Reality (VR)'],
      highlights: [
        '赴北京軟體公司參與室內設計 VR 虛擬實境導覽產品之製作與互動程式開發。',
      ],
      images: [
        '/images/vr/vr_01.png',
        '/images/vr/vr_02.png',
      ],
    },
  ])

  const educations = ref<Education[]>([
    {
      id: 'usc',
      school: '實踐大學',
      period: '2012 - 2016',
      degreeOrType: '大學學士',
      departmentOrCourse: '資訊模擬與設計學系',
      courses: 'APP開發、遊戲設計、網頁程式設計、虛擬實境、3D電腦動畫、平面設計',
      project: 'Jungle Life 遊戲電子書（負責程式設計與 Unity 整合，獲競賽優勝與名次）',
      images: [
        '/images/education/實踐大學.jpeg',
      ],
    },
    {
      id: 'iii',
      school: '資策會 (III)',
      period: '2019',
      degreeOrType: '專業培訓',
      departmentOrCourse: 'AI 智慧系統應用人才就業養成班',
      courses: 'iOS 應用開發、Android 應用開發、網頁前後端、深度學習、雲端整合應用、資料庫',
    },
  ])

  const licensesAndAwards = ref<AwardLicense[]>([
    {
      id: 'ocajp',
      title: 'Oracle OCAJP 國際 Java 認證',
      year: '2018',
      category: 'license',
      image: '/images/licenses/oracle.png',
      issuer: 'Oracle Corporation',
      description: 'Oracle Certified Associate, Java SE Programmer 國際原廠專業技術認證。',
    },
    {
      id: 'award-south',
      title: '南區大專資訊專題競賽 - 優勝',
      year: '2016',
      category: 'award',
      image: '/images/licenses/南區大專專題競賽.png',
      issuer: '南區大專資訊專題競賽',
      description: '專題《Jungle Life》多媒體互動遊戲電子書開發，榮獲專題競賽優勝。',
    },
    {
      id: 'award-app',
      title: '全國資訊科技應用研討會 - 行動裝置組 第三名',
      year: '2016',
      category: 'award',
      image: '/images/licenses/全國研討會專題競賽.png',
      issuer: '全國資訊科技應用研討會',
      description: '以行動裝置 App 創新互動應用為題，榮獲全國研討會專題競賽季軍。',
    },
  ])

  const skillGroups = ref<SkillGroup[]>([
    {
      category: '前端開發 (Web Frontend)',
      icon: 'globe',
      skills: ['Vue 3 (Composition API)', 'Vue 2', 'TypeScript', 'JavaScript (ES6+)', 'Tailwind CSS', 'Vite', 'Pinia', 'HTML5 / CSS3', 'Nuxt', 'React'],
    },
    {
      category: '行動應用開發 (Mobile App)',
      icon: 'smartphone',
      skills: ['Flutter (跨平台)', 'Dart', 'Swift (原生 iOS)', 'UIKit / Xcode', 'BLoC 架構', 'GetX', 'RxSwift', 'Clean Architecture'],
    },
    {
      category: '工程規範、工具與後端技術 (Engineering & Tools)',
      icon: 'cpu',
      skills: ['Golang', 'Unit Testing (單元測試)', 'Scrum 敏捷開發', 'Git / GitHub', 'RESTful API / WebSocket', 'Firebase (Realtime DB / Auth)', 'Unity 3D', 'Java'],
    },
  ])

  const projects = ref<Project[]>([
    {
      id: 's-element',
      title: 'S-Element',
      type: 'WEB',
      description: '這是一套由自研 UI 元件庫與互動式展示平台組成的完整前端設計系統。底層元件庫基於 Vue 3、TypeScript、Tailwind 與 Element Plus 深度封裝，採用卡通視覺風格，提供高對比粗邊框、動態深淺主題及 20+ 款高重用性組件，並透過 Vite Lib Mode 打包產出標準 ES/UMD 模組。展示平台則以遊戲化的元件解碼輪盤呈現，結合亂數與 component 動態渲染，讓使用者能即時測試各元件的互動屬性；架構上更實現了 Pinia 歷史紀錄管理與外部元件路由無縫掛載，展現了從底層組件封裝、樣式架構設計到上層應用落地的完整前端工程能力。',
      image: '/images/sElement/s_01.png',
      imageAlt: 'S-Element Vue 3 UI Component Library & Demo Showcase',
      images: [
        '/images/sElement/s_01.png',
        '/images/sElement/s_02.png',
        '/images/sElement/s_03.png',
        '/images/sElement/s_04.png',
        '/images/sElement/s_05.png',
      ],
      implementations: [
        'Vue 3 元件封裝',
        'TypeScript 型別定義',
        'Vite Lib 模組打包',
        'Tailwind CSS 寫法',
        '動態主題切換',
        '動態組件渲染',
        '亂數動畫特效',
        'Pinia 狀態管理',
        '動態路由整合',
        '前端規範工程化',
      ],
      tags: ['Vue 3', 'TypeScript', 'Tailwind CSS', 'Vite Lib Mode', 'Pinia', 'Element Plus'],
      demoUrl: 'https://component-application.vercel.app/',
      githubUrl: 'https://github.com/sc4112sc/component-application',
      featured: true,
    },
    {
      id: 'jungle-life',
      title: 'Jungle Life',
      type: 'APP',
      description: '這是一款結合多媒體與遊戲化機制的兒童英文學習 App。專案歷經從 Unity 跨平台轉為 Swift/UIKit 原生 iOS 的全面重構，大幅優化渲染效能與記憶體管理。核心功能包含結合 AVPlayer 的三大章節情境故事、基於 Timer 與亂數演算法的互動式單字對戰關卡，以及具備即時發音功能的單字字典庫。系統更整合了 Core Data 本地儲存與 RESTful API 雲端排行榜，實現離線與線上數據同步的高可用性體驗。',
      image: '/images/jungleLife/j_01.png',
      imageAlt: 'Jungle Life iOS Children English Learning App',
      images: [
        '/images/jungleLife/j_01.png',
        '/images/jungleLife/j_02.png',
        '/images/jungleLife/j_03.png',
        '/images/jungleLife/j_04.png',
        '/images/jungleLife/j_05.png',
      ],
      implementations: [
        'UIKit 原生架構設計',
        'AVAudioPlayer 語音引擎',
        'Core Data 資料庫儲存',
        'RESTful API 資料串接',
        'JSONSerialization 序列化',
        'CocoaPods 第三方庫整合',
        '關鍵幀與 ViewAnimator 動畫',
        'GCD 主背景執行緒調度',
        '即時成績演算機制',
      ],
      tags: ['Swift', 'UIKit', 'iOS', 'AVAudioPlayer', 'Core Data', 'RESTful API', 'GCD'],
      githubUrl: 'https://github.com/sc4112sc/JungleLife',
      featured: true,
    },
    {
      id: 'movie-people',
      title: 'Movie People',
      type: 'APP',
      description: '這是一款以 Flutter 打造的高效能電影資訊與社群回報應用程式。架構上採用事件驅動的 BLoC 模式，嚴格分離 UI 視圖、業務邏輯與資料層。專案透過自研 Web Scraping 模組克服無公開 API 的限制，智慧解析並重組各院線廳別與時刻數據；後端結合 Firebase Realtime Database Stream 監聽與 Transaction 交易機制，確保高併發情境下特典回報與評分資料的一致性；此外，更整合了 Geolocator 座標計算、第三方授權認證、本地排程推播及 Shimmer 骨架屏載入體驗，展現了完整的行動端全端架構與工程落地能力。',
      image: '/images/moviePeople/m_01.png',
      imageAlt: 'Movie People Flutter BLoC App',
      images: [
        '/images/moviePeople/m_01.png',
        '/images/moviePeople/m_02.png',
        '/images/moviePeople/m_03.png',
        '/images/moviePeople/m_04.png',
        '/images/moviePeople/m_05.png',
      ],
      implementations: [
        'BLoC 事件驅動架構',
        'HTML DOM 爬蟲解析',
        'Firebase Transaction 併發控制',
        'Realtime Database 串流',
        'Geolocator 地理定位',
        'Google / Facebook 授權',
        'GetX 輕量路由彈窗',
        'Local Notifications 排程推播',
        'Clean Architecture 分層設計',
      ],
      tags: ['Flutter', 'Dart', 'BLoC Pattern', 'Firebase', 'Web Scraping', 'Geolocator'],
      githubUrl: 'https://github.com/sc4112sc/movie_people',
      apkUrl: '/downloads/MoviePeople.apk',
      featured: true,
    },
  ])

  const featuredProjects = computed(() => projects.value.filter((p) => p.featured))

  return {
    profile,
    experiences,
    educations,
    licensesAndAwards,
    skillGroups,
    projects,
    featuredProjects,
  }
})
