<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <!-- Top peg handle -->
    <path d="M12 2v3.5" />
    <circle cx="12" cy="2" r="1" fill="currentColor" />
    <!-- Spinning Top Crown -->
    <ellipse cx="12" cy="7" rx="7" ry="2.2" fill="currentColor" fill-opacity="0.2" />
    <!-- Cone body -->
    <path d="M5 7c.6 3.8 4.2 8.5 7 11.5 2.8-3 6.4-7.7 7-11.5" />
    <!-- Dynamic Grooves / Stripes -->
    <path d="M6.8 10.5c1.5 1.5 3.3 2 5.2 2s3.7-.5 5.2-2" />
    <!-- Bottom sharp contact point -->
    <path d="M12 18.5v3" />
    <!-- Spin motion trail lines -->
    <path d="M2.5 13.5c.3 1.5 1.2 2.8 2.5 3.8" stroke-dasharray="2 2" />
    <path d="M21.5 10.5c-.3-1.5-1.2-2.8-2.5-3.8" stroke-dasharray="2 2" />
  </svg>
</template>
