import { site } from "@/site.config";

export function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="wrap hero-inner">
        <div className="hero-labels">
          <p className="label hero-tagline">
            {site.tagline[0]}
            <br />
            {site.tagline[1]}
          </p>
          <p className="label hero-invite">
            {site.invitation.map((line, i) => (
              <span key={i}>
                {line}
                {i < site.invitation.length - 1 && <br />}
              </span>
            ))}
          </p>
        </div>
        <div className="hero-mark">
          <h1 id="hero-title" className="sr-only">
            {site.brand}: {site.tagline.join(" ")}
          </h1>
          <div className="hero-mark-clip">
            <svg className="wordmark" viewBox="0 0 1200 300" aria-hidden="true" focusable="false">
              <text x="0" y="296" textLength="1200" lengthAdjust="spacingAndGlyphs">
                {site.brand.toUpperCase()}
              </text>
            </svg>
          </div>
          <p className="stamp">
            <span className="stamp-inner">
              <span>{site.stamp.dates}</span>
              <span aria-hidden="true"> · </span>
              <span>{site.stamp.city}</span>
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
