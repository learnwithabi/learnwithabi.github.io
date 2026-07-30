import { profile } from "../data";

export default function Footer() {
  return (
    <div className="cta-wrap">
      <div className="wrap">
        <div className="cta-band">
          <div className="eyebrow">Get in touch</div>
          <h2>Let's build something together.</h2>
          <p>Open to senior architect and data engineering leadership roles, consulting engagements, and technical collaborations.</p>
          <div className="btn-row" style={{ justifyContent: "center" }}>
            <a className="btn primary" href={`mailto:${profile.email}`}>Say Hello</a>
            <a className="btn" href={profile.linkedin}>LinkedIn</a>
          </div>
        </div>
      </div>
      <footer className="site-footer wrap">
        <span>© 2026 {profile.name}</span>
        <span>
          <a href={profile.github}>GitHub</a> · <a href={profile.linkedin}>LinkedIn</a> · <a href={`mailto:${profile.email}`}>Email</a>
        </span>
      </footer>
    </div>
  );
}
