import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
// import localFont from "next/font/local";

const inter = Inter({ subsets: ["latin"] });

// const myFont = localFont({
//   src: [
//     {
//       path: "./Roboto-Regular.ttf",
//       weight: "400",
//       style: "normal",
//     },
//     {
//       path: "./Roboto-Thin.ttf",
//       weight: "100",
//       style: "normal",
//     },
//   ],

//   variable: "--font-roboto",
// });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* <header className="bg-slate-200">Page Header</header> */}
          {children}
          {/* <footer className="bg-slate-200">Page Footer</footer> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
