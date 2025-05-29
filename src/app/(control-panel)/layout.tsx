"use client";
import { useState } from "react";

import Navbar from "@/components/layout/Navbar";
import Sidebar from "@/components/layout/Sidebar";

export default function Layout({ children }: Readonly<{ children: React.ReactNode; }>) {

    const [sidebarIsActive, setSidebarIsActive] = useState<boolean>(false);

    return (
        <>
            <Navbar
                sidebar_btn_onClick={() => setSidebarIsActive(!sidebarIsActive)}
                sidebar_btn_isActive={sidebarIsActive}
            />
            <Main>
                <Sidebar sidebar_btn_isActive={sidebarIsActive} />
                <Content>{children}</Content>
            </Main>
        </>
    )
}

const Main = ({ children }: Readonly<{ children: React.ReactNode; }>) => {
    return (
        <main className="w-full flex">
            {children}
        </main>
    )
}

const Content = ({ children }: Readonly<{ children: React.ReactNode; }>) => {
    return (
        <div className="w-full px-4 md:px-6 pt-16">
            {children}
        </div>
    )
}