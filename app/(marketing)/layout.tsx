import React from "react";
import Navbar from "./_components/navbar";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="h-full ">
    <main className="h-full pt-40 dark:bg-[#1f1f1f]">
    <Navbar />
    {children}
    </main>
  </div>;
}
