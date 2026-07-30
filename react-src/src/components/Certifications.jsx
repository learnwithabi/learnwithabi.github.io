import { certifications, recognition } from "../data";

export default function Certifications() {
  return (
    <section id="certifications">
      <div className="wrap">
        <h2 className="sec-title">Certifications</h2>
        <div className="cert-grid">
          {certifications.map((c) => (
            <div className="card card-pad" key={c.provider}>
              <div className="cert-prov"><span className="cert-dot" />{c.provider}</div>
              <ul className="cert-items">
                {c.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          ))}
        </div>

        <h2 className="sec-title" style={{ marginTop: 56 }}>Speaking & Recognition</h2>
        <div className="recog-grid">
          {recognition.map((r) => (
            <div className="card card-pad recog-card" key={r.title}>
              <strong>{r.title}</strong>
              <span>{r.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
