export function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <p className="kicker">
      <span>{children}</span>
    </p>
  );
}
