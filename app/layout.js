import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from "../Components/Navbar/Navbar";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ZET: Become a Financial Advisor',
  description: 'Become a Financial Advisor and Earn Rs.1 Lakh/Month',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navbar/>
      <div className={"container xl mx-auto xl:px-36 2xl:px-4"}>
          {children}
      </div>

      </body>
    </html>
  )
}
