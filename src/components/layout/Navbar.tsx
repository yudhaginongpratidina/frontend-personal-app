"use client"

import { usePathname } from "next/navigation"
import { useState } from "react";
import Link from "next/link"

import { HiMenuAlt3 } from "react-icons/hi";
import { IoCloseSharp, IoLogOutOutline } from "react-icons/io5";
import { FaBell } from "react-icons/fa";

export default function Navbar() {
    const pathname = usePathname();
    const [hamburgerIsActive, setHamburgerIsActive] = useState<boolean>(false);
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

    const showMainNav = ["/", "/home", "/projects", "/blogs", "/contact"].includes(pathname);
    const showTitle = showMainNav || pathname === "/login" || pathname === "/register";
    const showAuthActions = !["/login", "/register"].includes(pathname)

    return (
        <nav className="w-full fixed top-0 z-10 flex flex-col gap-0.5">
            <div className="box-border w-full h-14 px-6 flex justify-between items-center shadow drop-shadow bg-white">
                {/* left - start */}
                <div className="flex items-center gap-2.5">
                    <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-sm bg-gray-200" />
                        {showTitle && (<h1 className="font-bold uppercase text-lg">PORTFOLIO</h1>)}
                    </div>
                </div>
                {/* left - end */}

                {/* center - start */}
                {showMainNav && (
                    <div className="hidden md:flex items-center gap-2.5">
                        <NavbarLink href="/home" name="Home" />
                        <NavbarLink href="/projects" name="Projects" />
                        <NavbarLink href="/blogs" name="Blogs" />
                        <NavbarLink href="/contact" name="Contact" />
                    </div>
                )}
                {/* center - end */}

                {/* right - start */}
                <div className="flex items-center gap-2.5">
                    {showAuthActions && (
                        isAuthenticated ? (
                            <>
                                <NavbarIconButton onClick={() => { }} icon={<FaBell className="w-5 h-5" />} />
                                <NavbarIconButton onClick={() => { }} icon={<IoLogOutOutline className="w-5 h-5" />} />
                            </>
                        ) : (
                            <NavbarButton onClick={() => { }} name="Login" className="border-black bg-black hover:bg-gray-800 text-white"/>
                        )
                    )}
                    {showMainNav && ( <NavabarHamburger onClick={() => setHamburgerIsActive(!hamburgerIsActive)} isActive={hamburgerIsActive}/>)}
                </div>
                {/* right - end */}
            </div>

            {/* mobile menu - start */}
            {(pathname === "/" || pathname === "/home" || pathname === "/projects" || pathname === "/blogs" || pathname === "/contact") && (
                <>
                    {hamburgerIsActive && (
                        <div className="md:hidden w-full py-4 px-6 flex flex-col gap-2.5 shadow drop-shadow bg-white">
                            <NavbarLink href="/home" name="Home" />
                            <NavbarLink href="/projects" name="Projects" />
                            <NavbarLink href="/blogs" name="Blogs" />
                            <NavbarLink href="/contact" name="Contact" />
                        </div>
                    )}
                </>
            )}
            {/* mobile menu - end */}
        </nav>
    )
}

const NavbarLink = ({ href, name }: Readonly<{ href: string, name: string }>) => {
    const pathname = usePathname();

    return (
        <Link href={href || "/"} className={`px-2 font-semibold text-md md:hover:underline md:hover:underline-offset-8 duration-150 ${pathname === href ? "md:underline md:underline-offset-8" : ""}`}>
            {name}
        </Link>
    )
}

const NavbarButton = ({ onClick, name, className }: Readonly<{ onClick: () => void, name: string, className?: string }>) => {
    return (
        <button onClick={onClick} className={`w-fit px-4 py-1.5 rounded-sm font-semibold text-md hover:cursor-pointer duration-150 ${className}`}>
            {name}
        </button>
    )
}

const NavbarIconButton = ({ onClick, icon, className }: Readonly<{ onClick: () => void, icon: React.ReactNode, className?: string }>) => {
    return (
        <button onClick={onClick} className={`w-fit p-1.5 border rounded-sm hover:cursor-pointer hover:bg-black hover:text-white duration-150 ${className}`}>
            {icon}
        </button>
    )
}

const NavabarHamburger = ({ onClick, isActive }: Readonly<{ onClick: () => void, isActive: boolean }>) => {
    return (
        <button onClick={onClick} className={`md:hidden w-fit p-1.5 border rounded-sm hover:cursor-pointer hover:bg-black hover:text-white duration-150`}>
            {isActive ? <IoCloseSharp className="w-5 h-5" /> : <HiMenuAlt3 className="w-5 h-5" />}
        </button>
    )
}