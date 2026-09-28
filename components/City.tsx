import { site } from "@/site.config";
import { Kicker } from "./Kicker";

export function City() {
  const { city } = site;
  return (
    <section className="section" id="city" aria-labelledby="city-title">
      <div className="wrap">
        <Kicker>{city.kicker}</Kicker>
        <h2 id="city-title" className="display">
          {city.heading}
        </h2>
        <div className="city-grid">
          <div className="city-info">
            <p className="city-name">{city.name}</p>
            <p className="city-address">{city.address}</p>
            <ul className="city-notes">
              {city.notes.map((note) => (
                <li key={note.title}>
                  <span className="label">{note.title}</span>
                  <span>{note.body}</span>
                </li>
              ))}
            </ul>
          </div>
          <dl className="stats">
            {city.stats.map((stat) => (
              <div key={stat.caption} className="stat">
                <dt className="stat-figure">{stat.figure}</dt>
                <dd className="stat-caption">{stat.caption}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
