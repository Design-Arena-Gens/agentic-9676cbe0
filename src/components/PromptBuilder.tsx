"use client";
import { useMemo, useState } from "react";
import { DESIGN_STYLES, getDesignStyleById } from "@/lib/designs";
import { generatePrompt, PromptOptions } from "@/lib/prompt";
import DesignPreview from "@/components/DesignPreview";

export default function PromptBuilder() {
  const [styleId, setStyleId] = useState(DESIGN_STYLES[0].id);
  const [goal, setGoal] = useState("Promote a new AI design tool");
  const [audience, setAudience] = useState("Product designers and frontend engineers");
  const [tone, setTone] = useState("confident, friendly, benefit-focused");
  const [length, setLength] = useState<PromptOptions["length"]>("medium");
  const [format, setFormat] = useState<PromptOptions["format"]>("hero-copy");
  const [keywords, setKeywords] = useState("AI, web design, speed, iteration");
  const [constraints, setConstraints] = useState("Avoid buzzwords; include concrete outcomes");

  const style = useMemo(() => getDesignStyleById(styleId), [styleId]);

  const prompt = useMemo(
    () =>
      generatePrompt({
        goal,
        audience,
        tone,
        length,
        format,
        keywords: keywords
          .split(",")
          .map((s) => s.trim())
          .filter(Boolean),
        constraints: constraints
          .split(";")
          .map((s) => s.trim())
          .filter(Boolean),
      }),
    [goal, audience, tone, length, format, keywords, constraints]
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Prompt Builder</h2>
          <a
            className="text-sm text-blue-600 hover:underline"
            href="https://nextjs.org"
            target="_blank"
            rel="noreferrer"
          >
            Docs
          </a>
        </div>
        <div className="grid grid-cols-1 gap-4">
          <label className="grid gap-2">
            <span className="text-sm text-zinc-600">Design Style</span>
            <select
              className="rounded-md border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-3 py-2"
              value={styleId}
              onChange={(e) => setStyleId(e.target.value)}
            >
              {DESIGN_STYLES.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.name}
                </option>
              ))}
            </select>
            <span className="text-xs text-zinc-500">{style.description}</span>
          </label>

          <label className="grid gap-2">
            <span className="text-sm text-zinc-600">Goal</span>
            <input
              className="rounded-md border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-3 py-2"
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              placeholder="Describe what the copy should achieve"
            />
          </label>

          <label className="grid gap-2">
            <span className="text-sm text-zinc-600">Audience</span>
            <input
              className="rounded-md border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-3 py-2"
              value={audience}
              onChange={(e) => setAudience(e.target.value)}
            />
          </label>

          <label className="grid gap-2">
            <span className="text-sm text-zinc-600">Tone</span>
            <input
              className="rounded-md border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-3 py-2"
              value={tone}
              onChange={(e) => setTone(e.target.value)}
            />
          </label>

          <div className="grid grid-cols-2 gap-4">
            <label className="grid gap-2">
              <span className="text-sm text-zinc-600">Length</span>
              <select
                className="rounded-md border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-3 py-2"
                value={length}
                onChange={(e) => setLength(e.target.value as PromptOptions["length"])}
              >
                <option value="short">Short</option>
                <option value="medium">Medium</option>
                <option value="long">Long</option>
              </select>
            </label>
            <label className="grid gap-2">
              <span className="text-sm text-zinc-600">Format</span>
              <select
                className="rounded-md border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-3 py-2"
                value={format}
                onChange={(e) => setFormat(e.target.value as PromptOptions["format"])}
              >
                <option value="hero-copy">Hero Copy</option>
                <option value="cta">Call to Action</option>
                <option value="tweet">Tweet</option>
                <option value="post">Social Post</option>
                <option value="email">Email</option>
                <option value="blog-outline">Blog Outline</option>
              </select>
            </label>
          </div>

          <label className="grid gap-2">
            <span className="text-sm text-zinc-600">Keywords (comma-separated)</span>
            <input
              className="rounded-md border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-3 py-2"
              value={keywords}
              onChange={(e) => setKeywords(e.target.value)}
            />
          </label>

          <label className="grid gap-2">
            <span className="text-sm text-zinc-600">Constraints (separate with semicolons)</span>
            <input
              className="rounded-md border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-3 py-2"
              value={constraints}
              onChange={(e) => setConstraints(e.target.value)}
            />
          </label>

          <label className="grid gap-2">
            <span className="text-sm text-zinc-600">Generated Prompt</span>
            <textarea
              className="rounded-md border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-3 py-2 h-48 font-mono text-sm"
              readOnly
              value={prompt}
            />
          </label>
        </div>
      </div>
      <div className="rounded-2xl overflow-hidden ring-1 ring-zinc-200 dark:ring-zinc-800">
        <DesignPreview
          style={style}
          title="Design, faster."
          subtitle="Generate design-ready copy and explore visual styles in one place. Iterate quickly with AI-guided prompts tailored to your goals."
          ctaLabel="Try it now"
        />
      </div>
    </div>
  );
}
