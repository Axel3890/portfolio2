import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Full Stack Developer - Axel Gomez",
  description: "Potencia tu búsqueda de empleo con los mejores consejos en tecnología, desde tips y plantillas de CV hasta preguntas típicas de entrevistas.",
  keywords: ["Axel Gomez", "developer", "full stack", "backend"],
  icons: {
    icon: ["/favicon.ico"]
  },
  og: {
    title: "Full Stack Developer - Axel Gomez",
    description: "Hola! soy axel Gomez desarrollador Full Stack React / node",
    image: "/favicon.ico",
    url: "https://desarrollo-laboral.vercel.app"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black scroll-smooth">
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}
