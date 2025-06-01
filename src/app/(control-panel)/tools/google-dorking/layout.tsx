import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Google Dorking',
}

export default function Layout({ children }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <>
            {children}
        </>
    )
}