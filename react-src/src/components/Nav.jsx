import { profile } from "../data";

const links = [
  ["About", "#about"],
  ["Experience", "#experience"],
  ["Skills", "#skills"],
  ["Projects", "#projects"],
  ["Certifications", "#certifications"],
];

export default function Nav() {
  return (
    <nav className="site-nav">
      <div className="nav-inner">
        <a href="#top" className="brand">
          <span className="brand-mark">AS</span> {profile.name}
        </a>
        <div className="nav-links">
          {links.map(([label, href]) => (
            <a key={href} href={href}>{label}</a>
          ))}
        </div>
        <a className="nav-cta" href={profile.resume}>Resume</a>
      </div>
    </nav>
  );
}
