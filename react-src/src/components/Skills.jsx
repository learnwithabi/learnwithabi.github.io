import { skillCategories } from "../data";

export default function Skills() {
  return (
    <section id="skills">
      <div className="wrap">
        <h2 className="sec-title">Tech Stack</h2>
        <div className="skill-grid">
          {skillCategories.map((cat) => (
            <div className="card card-pad" key={cat.name}>
              <h3 className="skill-cat-name">
                {cat.icon && <img className="skill-cat-icon" src={cat.icon} alt="" />}
                {cat.name}
              </h3>
              <div className="pill-row">
                {cat.skills.map((s) => {
                  const label = typeof s === "string" ? s : s.label;
                  const icon = typeof s === "string" ? null : s.icon;
                  return (
                    <span className="pill" key={label}>
                      {icon && <img src={icon} alt="" />}
                      {label}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
