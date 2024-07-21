import type { Metadata } from "next";
import React, { ReactNode } from 'react';
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";  // 引入 Header 组件
import Footer from "./_components/Footer";  // 引入 Footer 组件


interface LayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  );
}
