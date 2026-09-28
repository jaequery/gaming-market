"use client";

import { useRef, useState } from "react";
import type { DigestTab } from "@/site.config";

export function DigestTabs({ tabs, label }: { tabs: DigestTab[]; label: string }) {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  function select(index: number) {
    const next = (index + tabs.length) % tabs.length;
    setActive(next);
    tabRefs.current[next]?.focus();
  }

  function onKeyDown(e: React.KeyboardEvent) {
    if (e.key === "ArrowRight" || e.key === "ArrowDown") select(active + 1);
    else if (e.key === "ArrowLeft" || e.key === "ArrowUp") select(active - 1);
    else if (e.key === "Home") select(0);
    else if (e.key === "End") select(tabs.length - 1);
    else return;
    e.preventDefault();
  }

  const tab = tabs[active];

  return (
    <div className="digest">
      <div className="tablist" role="tablist" aria-label={label} onKeyDown={onKeyDown}>
        {tabs.map((t, i) => (
          <button
            key={t.id}
            ref={(el) => {
              tabRefs.current[i] = el;
            }}
            type="button"
            role="tab"
            id={`tab-${t.id}`}
            aria-selected={i === active}
            aria-controls={`panel-${t.id}`}
            tabIndex={i === active ? 0 : -1}
            className="btn tab"
            onClick={() => setActive(i)}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div
        key={tab.id}
        className="tabpanel"
        role="tabpanel"
        id={`panel-${tab.id}`}
        aria-labelledby={`tab-${tab.id}`}
        tabIndex={0}
      >
        <table className="digest-table">
          <caption className="sr-only">{tab.label}: this week&apos;s picks</caption>
          <thead>
            <tr>
              <th scope="col">When</th>
              <th scope="col">Event</th>
              <th scope="col">Source</th>
            </tr>
          </thead>
          <tbody>
            {tab.rows.map((row, i) =>
              row.kind === "event" ? (
                <tr key={i}>
                  <td className="col-time">{row.time}</td>
                  <td className="col-title">{row.title}</td>
                  <td className="col-host">{row.host}</td>
                </tr>
              ) : (
                <tr key={i} className="is-quiet">
                  <td className="col-time">{row.time}</td>
                  <td className="col-title" colSpan={2}>
                    {row.note}
                  </td>
                </tr>
              ),
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
