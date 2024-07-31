export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <header className="bg-gray-500">Login Header</header>
      <main>{children}</main>
      <footer className="bg-gray-500">Login Footer</footer>
    </div>
  );
}
