export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <header className="bg-red-600">Auth Header</header>
      {children}
      <footer className="bg-red-600">Auth Footer</footer>
    </div>
  );
}
