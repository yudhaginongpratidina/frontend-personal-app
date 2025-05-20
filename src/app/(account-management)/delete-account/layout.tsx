import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Delete Account',
}

export default function Layout({ children }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <>
            {children}
        </>
    )
}