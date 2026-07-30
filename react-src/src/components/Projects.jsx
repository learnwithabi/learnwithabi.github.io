import { projects } from "../data";

export default function Projects() {
  return (
    <section className="alt" id="projects">
      <div className="wrap">
        <h2 className="sec-title">Key Projects</h2>
        <div className="proj-grid">
          {projects.map((p) => (
            <div className="card card-pad proj-card" key={p.name}>
              <h3>{p.name}</h3>
              <div className="proj-date">{p.date}</div>
              <p>{p.desc}</p>
              <div className="proj-tags">
                {p.tags.map((t) => <span key={t}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
