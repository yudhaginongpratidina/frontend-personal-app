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
            <Sidebar 
                sidebar_btn_isActive={sidebarIsActive}
            />
            {children}
        </>
    )
}