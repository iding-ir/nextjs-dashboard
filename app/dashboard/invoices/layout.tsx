export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header>Header</header>
      <div>{children}</div>
    </>
  );
}
