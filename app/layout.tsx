import type { ReactNode } from "react";
import '@mysten/dapp-kit/dist/index.css';
import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import ClientProviders from "@/components/ClientProviders";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ocean DeFi Garden",
  description: "Interactive DeFi aquarium dashboard",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        {/* ThemeProvider でダークモードなどを管理する場合はここでラップ */}
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {/* ClientProviders でウォレット状態や React Query のプロバイダをラップ */}
          <ClientProviders>
            {children}
          </ClientProviders>
        </ThemeProvider>
      </body>
    </html>
  );
}
