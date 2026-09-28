import { site } from "@/site.config";
import { Kicker } from "./Kicker";
import { RevealGrid } from "./RevealGrid";

export function Feed() {
  const { feed } = site;
  return (
    <section className="section" id="feed" aria-labelledby="feed-title">
      <div className="wrap">
        <Kicker>{feed.kicker}</Kicker>
        <div className="section-head">
          <h2 id="feed-title" className="display">
            {feed.heading}
          </h2>
          <p className="section-intro">{feed.intro}</p>
        </div>
        <RevealGrid className="feed-grid">
          {feed.events.map((event, i) => (
            <li key={event.title} className="event-card" data-reveal>
              <div className={`initials tone-${event.tone}`} aria-hidden="true">
                {event.initials}
              </div>
              <p className="event-index" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="event-title">{event.title}</h3>
              <p className="event-meta">
                {event.when}
                <br />
                {event.where}
              </p>
              <p className="event-source">via {event.source}</p>
            </li>
          ))}
        </RevealGrid>
      </div>
    </section>
  );
}
