import type { Metadata } from "next";
import React from "react";
import "./globals.css";
import { SessionProvider } from 'next-auth/react'
import ArrowUp from "@/components/ArrowUp";
import dynamic from "next/dynamic";

const Menu = dynamic(
  () => import("@/components/Menu"),
  { ssr: false }
)

export const metadata: Metadata = {
  title: "我不吃牛肉",
  description: "一个简约风格的网站",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="zh-CN">
      <body>
        <SessionProvider>
          <Menu />
          {children}
          <ArrowUp />
        </SessionProvider>
      </body>
    </html>
  );
}

export default RootLayout;
