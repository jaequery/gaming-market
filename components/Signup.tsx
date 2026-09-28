import { site } from "@/site.config";
import { Kicker } from "./Kicker";
import { SignupForm } from "./SignupForm";

export function Signup() {
  const { signup } = site;
  return (
    <section className="section band band-signup" id="signup" aria-labelledby="signup-title">
      <div className="wrap">
        <Kicker>{signup.kicker}</Kicker>
        <div className="signup-grid">
          <div>
            <h2 id="signup-title" className="display">
              {signup.heading}
            </h2>
            <p className="section-intro">{signup.body}</p>
          </div>
          <SignupForm />
        </div>
      </div>
    </section>
  );
}
