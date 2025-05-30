import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Blog Management',
}

export default function Layout({ children }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <>
            {children}
        </>
    )
}