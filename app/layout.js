import './globals.css'
import {Inter} from 'next/font/google'
import Navbar from "../Components/Navbar/Navbar";

const inter = Inter({subsets: ['latin']})

export const metadata = {
    title: 'ZET: Web Design',
    description: 'Become a Financial Advisor',

}

export default function RootLayout({children}) {
    return <>

        <html lang="en">
        <head>
        {/*  cdn links of slick */}
        </head>
        <body className={inter.className}>
        <Navbar/>
        {children}
        </body>
        </html>
    </>
}
