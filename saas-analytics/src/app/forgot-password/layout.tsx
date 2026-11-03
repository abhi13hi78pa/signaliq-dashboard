import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "../globals.css";
import "../theme.css";

const NunitoSans = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SignalIQ | Reset Password",
  description: "SignalIQ — B2B Sales Intelligence & Analytics Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
        {children}
    </div>
  );
}
