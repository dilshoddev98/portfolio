import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import ThemeContextProvider from "@/context/theme-context";

export const metadata: Metadata = {
  title: "Dilshoddev | Portfolio",
  description:
    "Dilshoddev is Frontend developer (React) with almost 2 years of experience.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={"!scroll-smooth"}>
      <body
        cz-shortcut-listen="true"
        className="bg-gradient-to-r from-purple-200 via-pink-100 to-gray-200 w-full h-full min-h-[200vh] pt-28 sm:pt-36
                   dark:bg-dark-gradient-r dark:from-blue-dark dark:via-black-dark dark:to-blue-dark dark:text-gray-50 dark:text-opacity-90
              "
      >
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />

            <Toaster position={"top-right"} />
          </ActiveSectionContextProvider>

          <ThemeSwitcher />
        </ThemeContextProvider>
      </body>
    </html>
  );
}
