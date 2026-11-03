import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SignalIQ Customers",
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
