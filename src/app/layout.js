import "./globals.css";
import Navbar from "../../components/Navbar";

export const metadata = {
  title: "Where in the world",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/world.svg" sizes="any" />
      </head>
      <body>
        <Navbar />
        <div className='content'>
          {children}
        </div>
      </body>
    </html>
  );
}
