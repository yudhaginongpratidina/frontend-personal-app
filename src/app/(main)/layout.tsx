import Navbar from "@/components/layout/Navbar";

export default function Layout({ children }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <>
            <Navbar />
            <main className="w-full pt-16">
                {children}
            </main>
        </>
    )
}