"use client";

import { useState } from "react";
import { site } from "@/site.config";
import { Arrow } from "./Arrow";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

type Errors = { email?: string; city?: string };

// Validates locally and confirms inline. Nothing is sent anywhere.
export function SignupForm() {
  const { signup } = site;
  const [errors, setErrors] = useState<Errors>({});
  const [done, setDone] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const email = String(data.get("email") ?? "").trim();
    const city = String(data.get("city") ?? "").trim();
    const next: Errors = {};
    if (!EMAIL.test(email)) next.email = "Enter an email like you@company.com.";
    if (!city) next.city = "Tell us your home city.";
    setErrors(next);
    setDone(false);
    if (next.email) {
      document.getElementById("signup-email")?.focus();
      return;
    }
    if (next.city) {
      document.getElementById("signup-city")?.focus();
      return;
    }
    setDone(true);
    e.currentTarget.reset();
  }

  return (
    <form className="signup-form" noValidate onSubmit={onSubmit}>
      <div className="field-row">
        <div className="field">
          <label htmlFor="signup-name">First name</label>
          <input id="signup-name" name="firstName" type="text" autoComplete="given-name" />
        </div>
        <div className="field">
          <label htmlFor="signup-email">Email</label>
          <input
            id="signup-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            aria-invalid={errors.email ? true : undefined}
            aria-describedby={errors.email ? "signup-email-error" : undefined}
          />
          {errors.email && (
            <p className="field-error" id="signup-email-error">
              {errors.email}
            </p>
          )}
        </div>
        <div className="field">
          <label htmlFor="signup-city">Home city</label>
          <input
            id="signup-city"
            name="city"
            type="text"
            autoComplete="address-level2"
            required
            aria-invalid={errors.city ? true : undefined}
            aria-describedby={errors.city ? "signup-city-error" : undefined}
          />
          {errors.city && (
            <p className="field-error" id="signup-city-error">
              {errors.city}
            </p>
          )}
        </div>
      </div>
      <fieldset className="interests">
        <legend>{signup.interestsLabel}</legend>
        <div className="chips">
          {signup.interests.map((interest) => (
            <label key={interest} className="chip">
              <input type="checkbox" name="interests" value={interest} />
              <span>{interest}</span>
            </label>
          ))}
        </div>
      </fieldset>
      <div className="form-foot">
        <button type="submit" className="btn btn-paper">
          {signup.submit} <Arrow />
        </button>
        <p className="form-status" role="status" aria-live="polite">
          {done ? signup.success : ""}
        </p>
      </div>
    </form>
  );
}
