import { experience, earlierCareer } from "../data";
import Bold from "./Bold";

export default function Experience() {
  return (
    <section className="alt" id="experience">
      <div className="wrap">
        <h2 className="sec-title">Experience</h2>

        <div className="timeline">
          {experience.map((job) => (
            <div className={`tl-item${job.current ? " current" : ""}`} key={job.company + job.role}>
              <span className="tl-node" />
              <div className="card card-pad">
                <div className="tl-logo">
                  <img src={job.logo} alt={job.company} />
                </div>
                <div className="tl-hdr">
                  <div>
                    <div className="tl-role">{job.role}</div>
                    <div className="tl-co">{job.company}</div>
                  </div>
                  <span className="tl-date">{job.date}</span>
                </div>
                <div className="tl-loc">{job.location}</div>
                <ul className="tl-list">
                  {job.bullets.map((b, i) => (
                    <li key={i}><Bold text={b} /></li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="earlier-label">Earlier Career</div>
        <div className="card card-pad">
          {earlierCareer.map((e) => (
            <div className="earlier-row" key={e.role}>
              <span className="earlier-left">
                <span className="earlier-logo" style={!e.logo ? { background: e.color, color: "#fff" } : undefined}>
                  {e.logo ? <img src={e.logo} alt={e.company} /> : e.initials}
                </span>
                <span><span className="earlier-role">{e.role}</span> — <span className="earlier-co">{e.company}</span></span>
              </span>
              <span className="earlier-dt">{e.date}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
