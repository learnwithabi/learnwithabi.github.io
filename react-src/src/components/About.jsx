import { profile, education } from "../data";

export default function About() {
  return (
    <section id="about">
      <div className="wrap">
        <h2 className="sec-title">About</h2>
        <div className="about-grid">
          <img className="about-photo" src={profile.photo} alt={profile.name} />
          <div>
            <p className="about-bio">{profile.bio}</p>
            <div className="about-meta">
              <span>📍 {profile.location}</span>
              <span>🎓 {education.degree} — {education.school}, {education.years}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
