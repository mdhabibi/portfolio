import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { banners, projects } from "@/data/content";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  return p ? { title: p.title, description: p.summary } : {};
}

export default async function Case({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const i = projects.findIndex((x) => x.slug === slug);
  if (i < 0) notFound();
  const p = projects[i];
  const next = projects[(i + 1) % projects.length];

  return (
    <main className="case">
      <div className="wrap">
        <Link className="back" href="/#work">← All work</Link>
        <div className="mono reveal" style={{ marginTop: 40 }}>{p.kicker}</div>
        <h1 className="reveal d1">{p.title}</h1>
        <p className="lead reveal d2">{p.summary}</p>
        {!!banners[p.slug] && (
          // eslint-disable-next-line @next/next/no-img-element
          <div className="case-banner reveal d3"><img src={banners[p.slug]} alt={p.title} /></div>
        )}
        <div className="case-grid reveal d3">
          <article>
            <h2>The problem</h2><p>{p.problem}</p>
            <h2>Approach</h2><ul>{p.approach.map((a) => <li key={a}>{a}</li>)}</ul>
            <h2>Result</h2><p>{p.result}</p>
          </article>
          <aside className="side">
            <div className="mono">Stack</div>
            <div className="tags" style={{ marginBottom: 32 }}>{p.stack.map((s) => <span key={s}>{s}</span>)}</div>
            <div className="mono">Links</div>
            {p.links.map((l) => <a key={l.href} href={l.href} target="_blank" rel="noreferrer">{l.label} ↗</a>)}
          </aside>
        </div>
        <div style={{ marginTop: 96, borderTop: "1px solid var(--line)", paddingTop: 32 }}>
          <div className="mono">Next</div>
          <Link href={`/work/${next.slug}/`}><h3 style={{ fontFamily: "var(--serif)", fontWeight: 500, fontSize: 28, marginTop: 8 }}>{next.title} →</h3></Link>
        </div>
      </div>
    </main>
  );
}
