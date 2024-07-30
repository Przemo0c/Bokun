import type { Metadata } from "next";
import "./globals.css";

//ETC
import QueryClientProviderComponent from "@/components/_other/QueryClientPovider";
import { DM_Sans } from 'next/font/google'

//Components
import HeaderComponent from "@/components/_organisms/Header";

const DM = DM_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Bókun App",
  description: "Created via NextJS by PK",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
 
  return (
    <QueryClientProviderComponent>
      <html lang="en" className={DM.className}>
        <body className={''}>
          <HeaderComponent/>
          {children}
        </body> 
      </html>
    </QueryClientProviderComponent>
  );
}
