import { site } from "@/site.config";
import { DigestTabs } from "./DigestTabs";
import { Kicker } from "./Kicker";

export function Digest() {
  const { digest } = site;
  return (
    <section className="section band" id="digest" aria-labelledby="digest-title">
      <div className="wrap">
        <Kicker>{digest.kicker}</Kicker>
        <div className="section-head">
          <h2 id="digest-title" className="display">
            {digest.heading}
          </h2>
          <p className="section-intro">{digest.intro}</p>
        </div>
        <DigestTabs tabs={digest.tabs} label="Sample digest" />
      </div>
    </section>
  );
}
