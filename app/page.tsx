import { GraphCanvas } from "@/components/Client";
import { ProjectCard } from "@/components/ProjectCard";
import { banners, profile, focus, projects, experience, education, publications, skills, writing } from "@/data/content";

const pad = (n: number) => String(n + 1).padStart(2, "0");

export default function Home() {
  const featured = projects.filter((p) => p.featured);
  const more = projects.filter((p) => !p.featured);
  const liveWriting = writing.filter((w) => w.href);

  return (
    <main>
      <header className="hero">
        <GraphCanvas />
        <div className="wrap">
          <div className="hero-grid">
            <div className="portrait reveal d2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/mahdi.jpg" alt="Portrait of Dr. Mahdi Habibi" />
            </div>
            <div>
              <div className="mono reveal">{profile.role} · {profile.location}</div>
              <h1 className="reveal d1">Retrieval, recommendation &amp; agents that <em>explain themselves.</em></h1>
              <p className="lead reveal d2">{profile.intro}</p>
              <div className="cta reveal d3">
                <a className="btn primary" href="#work">View selected work →</a>
                <a className="btn" href={`mailto:${profile.email}`}>Get in touch</a>
              </div>
              <div className="socials reveal d4">
                {Object.entries(profile.links).map(([k, v]) => <a key={k} href={v} target="_blank" rel="noreferrer">{k} ↗</a>)}
              </div>
            </div>
          </div>
          <div className="stats">
            {profile.stats.map((s) => <div key={s.label}><b>{s.value}</b><span>{s.label}</span></div>)}
          </div>
        </div>
      </header>

      <section className="block">
        <div className="wrap">
          <div className="head"><div><div className="mono">What I do</div><h2>Four areas, one standard: production-grade.</h2></div></div>
          <div className="grid g4">
            {focus.map((f, i) => (
              <div className="cell" key={f.title}><span className="num">{pad(i)}</span><h3>{f.title}</h3><p>{f.body}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="block" id="work">
        <div className="wrap">
          <div className="head"><div><div className="mono">Selected work</div><h2>Case studies</h2></div><span className="muted">Problem → approach → result</span></div>
          <div className="cards">
            {featured.map((p) => <ProjectCard key={p.slug} p={p} img={!!banners[p.slug]} />)}
          </div>
          <div className="head" style={{ marginTop: 72 }}><div><div className="mono">More projects</div></div></div>
          <div className="cards">
            {more.map((p) => <ProjectCard key={p.slug} p={p} img={!!banners[p.slug]} compact />)}
          </div>
        </div>
      </section>

      <section className="block" id="experience">
        <div className="wrap">
          <div className="head"><div><div className="mono">Experience</div><h2>From particle physics to production AI</h2></div></div>
          <div className="tl">
            {experience.map((e) => (
              <div className="tl-item" key={e.org}>
                <div className="mono" style={{ color: "var(--muted)" }}>{e.when}<br />{e.where}</div>
                <div><h3>{e.role}</h3><div className="org">{e.org}</div><ul>{e.points.map((p) => <li key={p}>{p}</li>)}</ul></div>
              </div>
            ))}
          </div>
          <div className="grid g3" style={{ marginTop: 48 }}>
            {education.map((ed) => (
              <div className="cell" key={ed.degree}>
                <div className="mono">{ed.when}</div><h3 style={{ fontSize: 18 }}>{ed.degree}</h3><p>{ed.school}{ed.note && ` · ${ed.note}`}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="block" id="publications">
        <div className="wrap">
          <div className="head"><div><div className="mono">Publications &amp; book</div><h2>Peer-reviewed and published</h2></div>
            <a className="btn" href={profile.links.Scholar} target="_blank" rel="noreferrer">Google Scholar ↗</a></div>
          {publications.map((p) => (
            <a className="pub" href={p.href} target="_blank" rel="noreferrer" key={p.title}>
              <div><h3>{p.title}</h3><p>{p.authors}</p><p>{p.venue}</p></div><span className="arrow">↗</span>
            </a>
          ))}
        </div>
      </section>

      {liveWriting.length > 0 && (
        <section className="block" id="writing">
          <div className="wrap">
            <div className="head"><div><div className="mono">Writing &amp; films</div><h2>Explaining production AI</h2></div></div>
            <div className="grid g3">
              {liveWriting.map((w) => (
                <a className="cell" href={w.href} target="_blank" rel="noreferrer" key={w.title}>
                  <div className="mono">{w.kind}</div><h3>{w.title}</h3><span className="arrow">Open ↗</span>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="block">
        <div className="wrap">
          <div className="head"><div><div className="mono">Toolbox</div><h2>Skills</h2></div></div>
          <div className="skills">
            {Object.entries(skills).map(([k, v]) => (
              <div key={k}><h4>{k}</h4><ul>{v.map((s) => <li key={s}>{s}</li>)}</ul></div>
            ))}
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="wrap">
          <div className="mono">Contact</div>
          <h2>Let&apos;s build something that holds up in production.</h2>
          <p className="muted">Open to senior AI / ML engineering roles, consulting and research collaborations.</p>
          <div className="cta">
            <a className="btn primary" href={`mailto:${profile.email}`}>{profile.email}</a>
            <a className="btn" href={profile.links.LinkedIn} target="_blank" rel="noreferrer">LinkedIn ↗</a>
          </div>
        </div>
      </section>
    </main>
  );
}
