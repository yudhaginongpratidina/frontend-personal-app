// --------------------------------------------------------------------------------------------------
// IMPORT FONT AND STYLES
// --------------------------------------------------------------------------------------------------
import { Poppins } from "next/font/google";
import "./globals.css";

// --------------------------------------------------------------------------------------------------
// CONFIG FONT
// --------------------------------------------------------------------------------------------------
const poppins = Poppins({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-poppins',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

// --------------------------------------------------------------------------------------------------
// ROOT LAYOUT
// --------------------------------------------------------------------------------------------------
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
            <body className={`${poppins.variable} antialiased`}>
                {children}
            </body>
        </html>
    );
}
