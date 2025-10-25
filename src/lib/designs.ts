export type DesignStyle = {
  id: string;
  name: string;
  description: string;
  wrapperClasses: string;
  heroTitleClasses: string;
  heroSubtitleClasses: string;
  buttonPrimaryClasses: string;
  cardClasses: string;
};

export const DESIGN_STYLES: DesignStyle[] = [
  {
    id: "minimal",
    name: "Minimal",
    description: "Clean, spacious, monochrome with subtle borders.",
    wrapperClasses:
      "bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100",
    heroTitleClasses: "text-4xl sm:text-5xl font-semibold tracking-tight",
    heroSubtitleClasses: "text-zinc-600 dark:text-zinc-400 max-w-prose",
    buttonPrimaryClasses:
      "rounded-full bg-black text-white px-5 py-2.5 hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200 transition",
    cardClasses:
      "rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/60 backdrop-blur p-6",
  },
  {
    id: "neon",
    name: "Neon",
    description: "Dark with vibrant neon accents and glow.",
    wrapperClasses:
      "bg-gradient-to-b from-zinc-900 to-black text-zinc-100",
    heroTitleClasses:
      "text-4xl sm:text-5xl font-bold tracking-tight drop-shadow-[0_0_15px_rgba(34,197,94,0.35)] text-emerald-300",
    heroSubtitleClasses: "text-zinc-400 max-w-prose",
    buttonPrimaryClasses:
      "rounded-md bg-emerald-500/20 text-emerald-200 ring-1 ring-emerald-400/50 px-5 py-2.5 hover:bg-emerald-500/30 transition shadow-[0_0_20px_rgba(16,185,129,0.35)]",
    cardClasses:
      "rounded-xl bg-zinc-900/60 border border-emerald-500/20 shadow-[0_0_30px_rgba(16,185,129,0.15)] p-6",
  },
  {
    id: "brutalist",
    name: "Brutalist",
    description: "Bold, blocky, high-contrast with heavy borders.",
    wrapperClasses: "bg-yellow-50 text-black",
    heroTitleClasses: "text-5xl sm:text-6xl font-black tracking-tighter",
    heroSubtitleClasses: "text-black/80 max-w-prose",
    buttonPrimaryClasses:
      "rounded-none bg-black text-white px-6 py-3 border-4 border-black hover:translate-x-0.5 hover:translate-y-0.5 transition",
    cardClasses:
      "rounded-none border-4 border-black bg-white p-6 shadow-[8px_8px_0_0_#000]",
  },
  {
    id: "glass",
    name: "Glassmorphism",
    description: "Frosted glass panels with soft gradients.",
    wrapperClasses:
      "bg-gradient-to-br from-indigo-100 via-white to-cyan-100 dark:from-zinc-900 dark:via-zinc-950 dark:to-black text-zinc-900 dark:text-zinc-100",
    heroTitleClasses:
      "text-4xl sm:text-5xl font-semibold tracking-tight",
    heroSubtitleClasses: "text-zinc-600 dark:text-zinc-400 max-w-prose",
    buttonPrimaryClasses:
      "rounded-xl bg-white/20 dark:bg-zinc-800/40 text-zinc-900 dark:text-zinc-100 px-5 py-2.5 ring-1 ring-white/50 dark:ring-zinc-700 backdrop-blur hover:bg-white/30 dark:hover:bg-zinc-800/60 transition",
    cardClasses:
      "rounded-2xl bg-white/30 dark:bg-zinc-800/40 p-6 ring-1 ring-white/60 dark:ring-zinc-700 backdrop-blur",
  },
  {
    id: "retro",
    name: "Retro",
    description: "Warm palette, serif headings, subtle textures.",
    wrapperClasses: "bg-amber-50 text-stone-900",
    heroTitleClasses: "text-4xl sm:text-5xl font-serif tracking-tight",
    heroSubtitleClasses: "text-stone-600 max-w-prose",
    buttonPrimaryClasses:
      "rounded-full bg-amber-600 text-amber-50 px-5 py-2.5 hover:bg-amber-700 transition",
    cardClasses:
      "rounded-xl bg-amber-100 border border-amber-200 p-6",
  },
  {
    id: "magazine",
    name: "Magazine",
    description: "Editorial layout with big typography.",
    wrapperClasses: "bg-white text-neutral-900",
    heroTitleClasses: "text-6xl sm:text-7xl font-extrabold leading-[0.9] tracking-tight",
    heroSubtitleClasses: "text-neutral-600 max-w-prose",
    buttonPrimaryClasses:
      "rounded-none uppercase tracking-wider bg-neutral-900 text-white px-6 py-3 hover:bg-neutral-800 transition",
    cardClasses:
      "rounded-none border border-neutral-200 p-6",
  },
  {
    id: "dashboard",
    name: "Dashboard",
    description: "Neutral surfaces with accent states and cards.",
    wrapperClasses: "bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100",
    heroTitleClasses: "text-4xl sm:text-5xl font-semibold",
    heroSubtitleClasses: "text-neutral-600 dark:text-neutral-400 max-w-prose",
    buttonPrimaryClasses:
      "rounded-md bg-blue-600 text-white px-5 py-2.5 hover:bg-blue-700 transition",
    cardClasses:
      "rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-6",
  },
];

export function getDesignStyleById(id: string): DesignStyle {
  return DESIGN_STYLES.find((s) => s.id === id) ?? DESIGN_STYLES[0];
}
