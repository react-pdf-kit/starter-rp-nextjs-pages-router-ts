"use client";
import { PropsWithChildren } from "react";
import LazyAppProviders from "./LazyAppProviders";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <LazyAppProviders>
        <main>{children}</main>
      </LazyAppProviders>
    </>
  );
}
