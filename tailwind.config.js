/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        void: "#05070d",
        panel: "#0b1120",
        panelAlt: "#0f1830",
        line: "#1e2a44",
        ink: "#eaf1fb",
        muted: "#8695b7",
        cyan: {
          DEFAULT: "#35e6ff",
          soft: "#8ff2ff",
        },
        violet: {
          DEFAULT: "#9d5cff",
          soft: "#c4a4ff",
        },
        danger: "#ff5d7a",
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(53,230,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(53,230,255,0.06) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "40px 40px",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(53,230,255,0.35), 0 0 24px rgba(53,230,255,0.25)",
        glowViolet: "0 0 0 1px rgba(157,92,255,0.35), 0 0 24px rgba(157,92,255,0.25)",
      },
      keyframes: {
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scan: {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "0 40px" },
        },
      },
      animation: {
        blink: "blink 1s step-end infinite",
        float: "float 7s ease-in-out infinite",
        fadeUp: "fadeUp 0.7s ease-out both",
        scan: "scan 3s linear infinite",
      },
    },
  },
  plugins: [],
}