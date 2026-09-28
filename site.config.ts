// Every word, date, event, number and price on the landing page lives here.
// Rebrand the whole page by editing this one file (see README.md).

export type NavLink = { label: string; href: string };

export type FeedEvent = {
  initials: string;
  title: string;
  when: string;
  where: string;
  source: "Luma" | "Eventbrite";
  tone: "paper" | "ink" | "stone" | "accent";
};

export type DigestRow =
  | { kind: "event"; time: string; title: string; host: string }
  | { kind: "quiet"; time: string; note: string };

export type DigestTab = { id: string; label: string; rows: DigestRow[] };

export type Stat = { figure: string; caption: string };

export type Plan = {
  name: string;
  price: string;
  cadence: string;
  blurb: string;
  features: string[];
  cta: string;
  featured?: boolean;
};

export type SiteConfig = {
  brand: string;
  year: number;
  tagline: [string, string];
  invitation: [string, string, string];
  stamp: { dates: string; city: string };
  nav: NavLink[];
  headerCta: string;
  marquee: string[];
  feed: { kicker: string; heading: string; intro: string; events: FeedEvent[] };
  digest: { kicker: string; heading: string; intro: string; tabs: DigestTab[] };
  city: {
    kicker: string;
    heading: string;
    name: string;
    address: string;
    notes: { title: string; body: string }[];
    stats: Stat[];
  };
  plans: { kicker: string; heading: string; recommendedLabel: string; tiers: Plan[] };
  signup: {
    kicker: string;
    heading: string;
    body: string;
    interestsLabel: string;
    interests: string[];
    submit: string;
    success: string;
  };
  footer: { links: NavLink[]; smallPrint: string };
};

export const site: SiteConfig = {
  brand: "Nearby",
  year: 2026,
  tagline: ["The weekly event digest", "for founders who ship."],
  invitation: [
    "Pick your city. Pick your scene.",
    "Every Monday, the rooms worth being in.",
    "Skip the rest. Go build.",
  ],
  stamp: { dates: "Every Monday", city: "Any city" },
  nav: [
    { label: "Feed", href: "#feed" },
    { label: "Digest", href: "#digest" },
    { label: "Cities", href: "#city" },
    { label: "Plans", href: "#plans" },
  ],
  headerCta: "Get the digest",
  marquee: [
    "Luma + Eventbrite",
    "Any home city",
    "In person near you",
    "Online from anywhere",
    "1 email every Monday",
    "0 pitch-night filler",
  ],
  feed: {
    kicker: "01 / The feed",
    heading: "This week, picked for you",
    intro:
      "A sample of what a founder in Lisbon who follows AI, fundraising and dev tools sees on the feed. Your city, your interests, your picks.",
    events: [
      { initials: "SA", title: "Seed to Series A, no slides", when: "Tue 14 Oct · 08:00", where: "Lisbon · In person", source: "Luma", tone: "ink" },
      { initials: "AI", title: "Shipping agents in production", when: "Tue 14 Oct · 18:30", where: "Lisbon · In person", source: "Luma", tone: "stone" },
      { initials: "DT", title: "Dev tools founders dinner", when: "Wed 15 Oct · 20:00", where: "Lisbon · In person", source: "Eventbrite", tone: "accent" },
      { initials: "PR", title: "Pricing teardown live", when: "Wed 15 Oct · 17:00 WEST", where: "Online", source: "Luma", tone: "paper" },
      { initials: "CF", title: "Climate founders coffee", when: "Thu 16 Oct · 09:00", where: "Lisbon · In person", source: "Eventbrite", tone: "stone" },
      { initials: "YC", title: "Office hours with ex-partners", when: "Thu 16 Oct · 16:00 WEST", where: "Online", source: "Luma", tone: "ink" },
      { initials: "HW", title: "Hardware night at the port", when: "Fri 17 Oct · 19:00", where: "Lisbon · In person", source: "Luma", tone: "paper" },
      { initials: "OS", title: "Open source to revenue", when: "Sat 18 Oct · 15:00 WEST", where: "Online", source: "Eventbrite", tone: "stone" },
    ],
  },
  digest: {
    kicker: "02 / The Monday email",
    heading: "One email. Your whole week.",
    intro:
      "Every Monday at 07:00 local time: what's on in your city, what's worth dialing into, and which nights to keep free for building.",
    tabs: [
      {
        id: "in-person",
        label: "In your city",
        rows: [
          { kind: "event", time: "Mon 18:30", title: "Founders & funders, first Monday", host: "Luma · LX Factory" },
          { kind: "event", time: "Tue 08:00", title: "Seed to Series A, no slides", host: "Luma · Cais do Sodré" },
          { kind: "quiet", time: "Wed", note: "Nothing cleared the bar. Build something." },
          { kind: "event", time: "Wed 20:00", title: "Dev tools founders dinner", host: "Eventbrite · Príncipe Real" },
          { kind: "event", time: "Thu 09:00", title: "Climate founders coffee", host: "Eventbrite · Marvila" },
          { kind: "event", time: "Fri 19:00", title: "Hardware night at the port", host: "Luma · Alcântara" },
          { kind: "quiet", time: "Sat–Sun", note: "Weekend off. The inbox can wait." },
        ],
      },
      {
        id: "online",
        label: "Online, anywhere",
        rows: [
          { kind: "event", time: "Mon 16:00", title: "Cold email that gets replies", host: "Luma · Remote" },
          { kind: "quiet", time: "Tue", note: "No online picks. Your city has better ones." },
          { kind: "event", time: "Wed 17:00", title: "Pricing teardown live", host: "Luma · Remote" },
          { kind: "event", time: "Thu 16:00", title: "Office hours with ex-partners", host: "Luma · Remote" },
          { kind: "event", time: "Thu 21:00", title: "B2B SaaS metrics AMA", host: "Eventbrite · Remote" },
          { kind: "quiet", time: "Fri", note: "Quiet online. Go to the hardware night." },
          { kind: "event", time: "Sat 15:00", title: "Open source to revenue", host: "Eventbrite · Remote" },
        ],
      },
    ],
  },
  city: {
    kicker: "03 / Your city",
    heading: "Set it once. Works anywhere.",
    name: "Your home city",
    address: "Chosen at sign-up · changeable any week",
    notes: [
      { title: "In person", body: "Events inside your home city, pulled from Luma and Eventbrite every night." },
      { title: "Online", body: "The best remote sessions from anywhere, converted to your time zone." },
      { title: "On the road", body: "Travelling? Swap your city for a week. It swaps back on its own." },
    ],
    stats: [
      { figure: "2", caption: "sources, synced nightly" },
      { figure: "1", caption: "email every Monday" },
      { figure: "10", caption: "interest tags to pick from" },
      { figure: "0", caption: "sponsored slots" },
    ],
  },
  plans: {
    kicker: "04 / Plans",
    heading: "Free to start. Cheap to keep.",
    recommendedLabel: "Most founders",
    tiers: [
      {
        name: "Digest",
        price: "€0",
        cadence: "forever",
        blurb: "The Monday email and nothing else.",
        features: ["Weekly digest", "Home city + online", "Up to 3 interests"],
        cta: "Start free",
      },
      {
        name: "Founder",
        price: "€6",
        cadence: "per month",
        blurb: "The full feed and every interest tag.",
        features: ["Everything in Digest", "Browsable feed, all week", "All 10 interests", "Travel-city swaps"],
        cta: "Go founder",
        featured: true,
      },
      {
        name: "Team",
        price: "€19",
        cadence: "per month",
        blurb: "For cofounders splitting the room list.",
        features: ["Everything in Founder", "Up to 5 seats", "Shared team feed", "Multiple home cities"],
        cta: "Get team",
      },
    ],
  },
  signup: {
    kicker: "05 / Sign up",
    heading: "Get Monday's digest",
    body: "Tell us where you live and what you care about. The first email lands next Monday. Unsubscribe with one click.",
    interestsLabel: "What are you into?",
    interests: [
      "AI & ML",
      "Fundraising",
      "B2B SaaS",
      "Dev tools",
      "Climate",
      "Fintech",
      "Hardware",
      "Hiring",
      "Demo days",
      "Founder dinners",
    ],
    submit: "Submit",
    success: "You're on the list.",
  },
  footer: {
    links: [
      { label: "Feed", href: "#feed" },
      { label: "Digest", href: "#digest" },
      { label: "Plans", href: "#plans" },
      { label: "Sign up", href: "#signup" },
    ],
    smallPrint:
      "Sample content: the events, hosts, venues, city, numbers and prices on this page are illustrative. Nearby is not affiliated with Luma or Eventbrite.",
  },
};
