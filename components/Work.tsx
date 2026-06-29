import { featuredProjects } from "@/lib/projects";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import FeaturedProject from "@/components/FeaturedProject";
import ProjectGrid from "@/components/ProjectGrid";

export default function Work() {
  return (
    <section
      id="work"
      className="relative px-[clamp(20px,6vw,96px)] pt-[clamp(80px,11vh,130px)]"
    >
      <div className="mx-auto max-w-[1240px]">
        <SectionHeading
          index="01"
          title="Selected Work"
          intro="Built from first principles. More projects ship regularly."
        />

        <div className="mt-12 flex flex-col gap-7">
          {featuredProjects.map((p) => (
            <Reveal key={p.name} delay={80}>
              <FeaturedProject project={p} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mb-9 mt-14 flex items-center gap-[18px]">
          <div className="h-px flex-1 bg-white/[0.08]" />
          <span className="whitespace-nowrap font-mono text-xs text-faint">More Work ↓</span>
          <div className="h-px flex-1 bg-white/[0.08]" />
        </Reveal>

        <Reveal>
          <ProjectGrid />
        </Reveal>
      </div>
    </section>
  );
}
