export default function RegisterLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <header className="bg-green-500">Register Header</header>
      <main>{children}</main>
      <footer className="bg-green-500">Register Footer</footer>
    </div>
  );
}
