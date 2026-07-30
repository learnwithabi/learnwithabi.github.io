import { profile, stats } from "../data";

export default function Hero() {
  return (
    <header className="hero" id="top">
      <div className="wrap">
        <div className="eyebrow">{profile.role}</div>
        <h1 className="hero-name">{profile.name}</h1>
        <p className="hero-tagline">{profile.tagline}</p>

        <div className="pill-row">
          <span className="badge">Databricks Lakehouse Architecture</span>
          <span className="badge">Unity Catalog & Governance</span>
          <span className="badge">GenAI / RAG</span>
          <span className="badge">Multi-Cloud · Azure · AWS · GCP</span>
        </div>

        <div className="btn-row">
          <a className="btn primary" href="#experience">View Experience →</a>
          <a className="btn" href="#projects">See Projects</a>
          <a className="btn" href={`mailto:${profile.email}`}>Contact Me</a>
        </div>

        <div className="stats">
          {stats.map((s) => (
            <div className="stat" key={s.label}>
              <b>{s.value}</b>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
