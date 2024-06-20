import { Inter } from "next/font/google";
import "./globals.css";
// app/layout.jsx
import { UserProvider } from '@auth0/nextjs-auth0/client';


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Authh",
  description: "Just Authh",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <UserProvider>
        <body className={inter.className}>{children}</body>
      </UserProvider>
    </html>
  );
}
