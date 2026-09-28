import { site } from "@/site.config";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-row">
          <a className="footer-mark" href="#top" aria-label={`${site.brand}, back to top`}>
            {site.brand}
          </a>
          <nav aria-label="Footer">
            <ul className="footer-links">
              {site.footer.links.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <p className="small-print">
          © {site.year} {site.brand}. {site.footer.smallPrint}
        </p>
      </div>
    </footer>
  );
}
