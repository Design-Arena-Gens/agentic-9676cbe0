"use client";
import { useMemo } from "react";
import { DesignStyle } from "@/lib/designs";

export type DesignPreviewProps = {
  style: DesignStyle;
  title: string;
  subtitle: string;
  ctaLabel: string;
};

export default function DesignPreview({ style, title, subtitle, ctaLabel }: DesignPreviewProps) {
  const Hero = useMemo(() => {
    return (
      <section className={`w-full ${style.wrapperClasses}`}>
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
          <div className="flex flex-col gap-6">
            <h1 className={style.heroTitleClasses}>{title}</h1>
            <p className={style.heroSubtitleClasses}>{subtitle}</p>
            <div>
              <button className={style.buttonPrimaryClasses}>{ctaLabel}</button>
            </div>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {[1, 2, 3].map((n) => (
              <div key={n} className={style.cardClasses}>
                <h3 className="font-semibold mb-2">Feature {n}</h3>
                <p className="text-sm opacity-80">Short description of the feature with a benefit.</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }, [style, title, subtitle, ctaLabel]);

  return Hero;
}
