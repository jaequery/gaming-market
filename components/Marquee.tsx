import { site } from "@/site.config";

function Line({ hidden }: { hidden?: boolean }) {
  return (
    <span className="marquee-line" aria-hidden={hidden || undefined}>
      {site.marquee.map((fact) => (
        <span key={fact} className="marquee-item">
          {fact}
          <span className="marquee-sep" aria-hidden="true">
            ✦
          </span>
        </span>
      ))}
    </span>
  );
}

export function Marquee() {
  return (
    <div className="marquee" tabIndex={0} role="region" aria-label="At a glance">
      <div className="marquee-track">
        <Line />
        <Line hidden />
      </div>
    </div>
  );
}
