export type PromptOptions = {
  goal: string;
  audience?: string;
  tone?: string;
  length?: 'short' | 'medium' | 'long';
  format?: 'tweet' | 'post' | 'email' | 'blog-outline' | 'cta' | 'hero-copy';
  keywords?: string[];
  constraints?: string[];
};

export function generatePrompt(options: PromptOptions): string {
  const {
    goal,
    audience = 'general audience',
    tone = 'clear and friendly',
    length = 'medium',
    format = 'hero-copy',
    keywords = [],
    constraints = [],
  } = options;

  type LengthOption = NonNullable<PromptOptions['length']>;
  const lengthGuidance: Record<LengthOption, string> = {
    short: '50-80 words',
    medium: '120-180 words',
    long: '250-400 words',
  };

  const base = [
    `You are an expert copywriter and product marketer.`,
    `Write ${format} that accomplishes: ${goal}.`,
    `Target audience: ${audience}.`,
    `Tone: ${tone}.`,
    `Length: ${lengthGuidance[length]}.`,
  ];

  if (keywords.length) base.push(`Incorporate these keywords: ${keywords.join(', ')}.`);
  if (constraints.length) base.push(`Constraints: ${constraints.join('; ')}.`);

  base.push(
    `Provide 2 concise variants separated by \n---\n with strong headlines and a clear call-to-action.`
  );

  return base.join(' ');
}
