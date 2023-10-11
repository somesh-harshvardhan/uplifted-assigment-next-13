import "./globals.css";
import { Nunito } from "next/font/google";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "Uplift Quiz App",
  description: "Take the quiz to rizz!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={[nunito.className, " flex justify-center"]}>
        <div className=" max-w-md w-full min-h-screen">{children}</div>
      </body>
    </html>
  );
}
