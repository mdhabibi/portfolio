import Link from "next/link";
import type { Project } from "@/data/content";

/** Whole card links to the case study; repo/paper links sit underneath. */
export function ProjectCard({ p, img, compact }: { p: Project; img: boolean; compact?: boolean }) {
  return (
    <div className="card">
      <Link href={`/work/${p.slug}/`} aria-label={p.title}>
        {img ? (
          <div className="banner" style={{ backgroundImage: `url(/work/${p.slug}.webp)` }} />
        ) : (
          <div className="banner ph">{p.title.split(/[—:]/)[0].trim()}</div>
        )}
      </Link>
      <div className="body">
        <div className="mono">{p.kicker}</div>
        <Link href={`/work/${p.slug}/`}><h3>{p.title}</h3></Link>
        <p>{compact ? p.result : p.summary}</p>
        <div className="links">
          <Link href={`/work/${p.slug}/`} style={{ color: "var(--blue)" }}>Case study →</Link>
          {p.links.slice(0, 2).map((l) => <a key={l.href} href={l.href} target="_blank" rel="noreferrer">{l.label} ↗</a>)}
        </div>
      </div>
    </div>
  );
}
