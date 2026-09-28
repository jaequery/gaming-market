import { site } from "@/site.config";
import { Arrow } from "./Arrow";

export function Header() {
  return (
    <header className="site-header">
      <div className="wrap header-row">
        <a className="header-mark" href="#top" aria-label={`${site.brand}, back to top`}>
          {site.brand}
        </a>
        <nav className="header-nav" aria-label="Primary">
          <ul>
            {site.nav.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <a className="btn btn-ink header-cta" href="#signup">
          {site.headerCta} <Arrow />
        </a>
      </div>
    </header>
  );
}
