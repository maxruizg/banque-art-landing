interface PageHeroProps {
  eyebrow: string;
  title: string;
  accentText: string;
  subtitle: string;
  backgroundImage: string;
  variant?: "dark" | "light";
}

export function PageHero({
  eyebrow,
  title,
  accentText,
  subtitle,
  backgroundImage,
  variant = "dark",
}: PageHeroProps) {
  const isDark = variant === "dark";

  return (
    <section
      className={`relative pt-32 pb-20 overflow-hidden ${
        isDark ? "bg-charcoal-800" : "bg-tan-100"
      }`}
    >
      <div className="absolute inset-0">
        <div
          className={`w-full h-full bg-cover bg-center bg-no-repeat ${
            isDark ? "opacity-30" : "opacity-20"
          }`}
          style={{ backgroundImage: `url('${backgroundImage}')` }}
        />
        <div
          className={`absolute inset-0 bg-gradient-to-b ${
            isDark
              ? "from-charcoal-800/50 to-charcoal-800"
              : "from-tan-100/50 to-tan-100"
          }`}
        />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <p
          className={`uppercase tracking-[0.3em] text-sm mb-4 ${
            isDark ? "text-gold-400" : "text-tan-600"
          }`}
        >
          {eyebrow}
        </p>
        <h1
          className={`font-serif text-4xl md:text-5xl lg:text-6xl font-medium leading-tight mb-6 ${
            isDark ? "text-cream-50" : "text-charcoal-800"
          }`}
          style={
            isDark
              ? {
                  textShadow:
                    "0 2px 8px rgba(0, 0, 0, 0.6), 0 6px 20px rgba(0, 0, 0, 0.4)",
                }
              : undefined
          }
        >
          {title}{" "}
          <span className={isDark ? "text-gold-400" : "text-gold-500"}>
            {accentText}
          </span>
        </h1>
        <p
          className={`text-lg md:text-xl max-w-2xl mx-auto leading-relaxed ${
            isDark ? "text-cream-200" : "text-charcoal-600"
          }`}
          style={
            isDark
              ? {
                  textShadow:
                    "0 2px 4px rgba(0, 0, 0, 0.5), 0 4px 12px rgba(0, 0, 0, 0.3)",
                }
              : undefined
          }
        >
          {subtitle}
        </p>
      </div>
    </section>
  );
}
