import { site } from "@/site.config";
import { Arrow } from "./Arrow";
import { Kicker } from "./Kicker";

export function Plans() {
  const { plans } = site;
  return (
    <section className="section" id="plans" aria-labelledby="plans-title">
      <div className="wrap">
        <Kicker>{plans.kicker}</Kicker>
        <h2 id="plans-title" className="display">
          {plans.heading}
        </h2>
        <ul className="plans-grid">
          {plans.tiers.map((tier) => (
            <li key={tier.name} className={`plan${tier.featured ? " is-featured" : ""}`}>
              {tier.featured && <p className="plan-flag">{plans.recommendedLabel}</p>}
              <h3 className="plan-name">{tier.name}</h3>
              <p className="plan-price">
                <span className="plan-amount">{tier.price}</span>
                <span className="plan-cadence">{tier.cadence}</span>
              </p>
              <p className="plan-blurb">{tier.blurb}</p>
              <ul className="plan-features">
                {tier.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <a className={`btn ${tier.featured ? "btn-accent" : "btn-ink"} plan-cta`} href="#signup">
                {tier.cta} <Arrow />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
