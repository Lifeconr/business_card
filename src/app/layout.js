import { Open_Sans, Roboto } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  weight: ["500", "600", "700"], // Add the desired weights
  variable: "--font-open-sans",
  subsets: ["latin"],
});

const roboto = Roboto({
  weight: ["500", "500", "700"], // Add the desired weights
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata = {
  title: "Kidst Mengistu",
  description: "Realtor at DMC Real Estate",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`bg-custom-bg ${openSans.variable} ${roboto.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
