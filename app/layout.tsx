import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import AppRouter from "@/components/AppRouter/AppRouter";
import styles from "./layout.module.css";
import SidebarRouter from "@/components/AppRouter/SidebarRouter";

export const metadata: Metadata = {
  title: "To-Do-App",
  description: "An Application For Tasks Managment",
};

const vazirFont = localFont({
  src: "../public/font/Vazirmatn-Regular.woff2",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={` bg-slate-900 text-slate-200 ${vazirFont.className}`}>
        <div className="grid grid-cols-12">
          <div className="col-span-2 bg-slate-800 p-2 pt-3 m-2 rounded-lg text-sm text-center shadow-[0_0_5px_0_rgba(250,250,250,0.8)]">
            logo
          </div>
          <div className="col-span-10 bg-slate-800 p-2 m-2 rounded-lg shadow-[0_0_5px_0_rgba(250,250,250,0.8)]">
            <AppRouter />
          </div>
          <div className={`col-span-2 bg-slate-800 p-2 m-2 rounded-lg text-sm shadow-[0_0_5px_0_rgba(250,250,250,0.8)] ${styles.rowHeigth}`}>
            <SidebarRouter />
          </div>
          <div className={`col-span-10 bg-slate-800 p-2 m-2 rounded-lg shadow-[0_0_5px_0_rgba(250,250,250,0.8)] ${styles.rowHeigth}`}>
            <main className="p-2">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
