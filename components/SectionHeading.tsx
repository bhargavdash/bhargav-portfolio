import Reveal from "@/components/Reveal";

/**
 * Numbered section heading (01 / Title) + optional intro line. The numbering is
 * meaningful here — Work / Craft / Background read as an ordered narrative.
 */
export default function SectionHeading({
  index,
  title,
  intro,
}: {
  index: string;
  title: string;
  intro?: string;
}) {
  return (
    <>
      <Reveal className="flex items-baseline gap-[18px]">
        <span className="font-mono text-[15px] text-primary">{index} /</span>
        <h2 className="m-0 font-display text-[clamp(34px,5vw,52px)] font-semibold tracking-[-0.02em] text-ink">
          {title}
        </h2>
      </Reveal>
      {intro && (
        <Reveal delay={60}>
          <p className="mt-[18px] max-w-[560px] font-sans text-lg leading-[1.6] text-muted">
            {intro}
          </p>
        </Reveal>
      )}
    </>
  );
}
