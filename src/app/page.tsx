import PromptBuilder from "@/components/PromptBuilder";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-zinc-50 dark:from-black dark:to-zinc-950">
      <main className="mx-auto max-w-6xl px-6 py-10 sm:py-16">
        <header className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold tracking-tight">AI Prompt + Design Showcase</h1>
          <div className="text-sm text-zinc-500">Build, preview, and iterate faster</div>
        </header>
        <section className="mt-10">
          <PromptBuilder />
        </section>
        <footer className="mt-16 text-xs text-zinc-500">
          Made with Next.js + Tailwind
        </footer>
      </main>
    </div>
  );
}
