"use client";
import { type PropsWithChildren } from "react";
import { LazyAppProviders } from "./LazyAppProviders";

export default function RootLayout({ children } : PropsWithChildren) {
  return (
    <>
      <html lang="en">
        <body className={"antialiased"}>
          <LazyAppProviders licenseKey="your-license-key">
            <main>{children}</main>
          </LazyAppProviders>
        </body>
      </html>
    </>
  );
}