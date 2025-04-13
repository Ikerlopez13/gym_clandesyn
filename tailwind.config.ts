import type { Config } from 'tailwindcss'

// Extend the Config type to include DaisyUI properties
type DaisyUIConfig = Config & {
  daisyui: {
    themes?: any[];
    darkTheme?: string;
    base?: boolean;
    styled?: boolean;
    utils?: boolean;
    prefix?: string;
    logs?: boolean;
    themeRoot?: string;
  }
}

const config: DaisyUIConfig = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: "#D4AF37",
        secondary: "#000000",
        accent: "#FFFFFF",
        "base-100": "#000000",
        "base-200": "#111111",
        "base-300": "#222222",
        neutral: "#111111",
        "base-content": "#FFFFFF",
        info: "#3b82f6",
        success: "#22c55e",
        warning: "#f59e0b",
        error: "#ef4444",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#D4AF37",
          "secondary": "#000000",
          "accent": "#FFFFFF",
          "neutral": "#111111",
          "base-100": "#000000",
          "base-200": "#111111",
          "base-300": "#222222",
          "base-content": "#FFFFFF",
        },
      },
    ],
    base: true,
    styled: true,
    utils: true,
    prefix: "",
    logs: false,
    themeRoot: ":root",
  },
}

export default config 