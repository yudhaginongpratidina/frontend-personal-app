"use client"

import { usePathname } from "next/navigation"
import { useState } from "react";
import Link from "next/link"

import { HiMenuAlt3 } from "react-icons/hi";
import { IoCloseSharp, IoLogOutOutline, IoMenuSharp, IoClose } from "react-icons/io5";
import { FaBell } from "react-icons/fa";

type NavbarProps = {
    sidebar_btn_onClick?: () => void
    sidebar_btn_isActive?: boolean
}

export default function Navbar({ sidebar_btn_onClick, sidebar_btn_isActive }: Readonly<NavbarProps>) {
    const pathname = usePathname();

    const [hamburgerIsActive, setHamburgerIsActive] = useState<boolean>(false);
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

    const showBrandAndTitle = ["/", "/home", "/login", "/register",].includes(pathname);
    const basePaths = ['/overview']

    const showSidebarButton = basePaths.some((base) => pathname === base || pathname.startsWith(`${base}/`))
    const showMainNav = ["/", "/home"].includes(pathname);
    const showAuthActions = !["/login", "/register"].includes(pathname);

    return (
        <NavbarContainer>
            <NavbarDesktop>
                <NavbarItemsLeft>
                    {showBrandAndTitle && (
                        <NavbarBrand>
                            <h1 className="font-bold uppercase text-lg">PORTFOLIO</h1>
                        </NavbarBrand>
                    )}
                    {showSidebarButton && (
                        <NavbarIconButton
                            onClick={sidebar_btn_onClick ?? (() => { })}
                            icon={sidebar_btn_isActive
                                ? <IoClose className="w-5 h-5" />
                                : <IoMenuSharp className="w-5 h-5" />
                            }
                        />
                    )}
                </NavbarItemsLeft>
                {showMainNav && (
                    <NavbarItemsCenter>
                        <NavbarLink href="/home" name="Home" />
                    </NavbarItemsCenter>
                )}
                <NavbarItemsRight>
                    {showAuthActions && (
                        isAuthenticated ? (
                            <>
                                <NavbarIconButton
                                    onClick={() => { }}
                                    icon={<FaBell className="w-5 h-5" />}
                                />
                                <NavbarIconButton
                                    onClick={() => { }}
                                    icon={<IoLogOutOutline className="w-5 h-5" />}
                                />
                            </>
                        ) : (
                            <NavbarButton
                                onClick={() => { window.location.href = "/login" }}
                                name="Login"
                                className="border-black bg-black hover:bg-gray-800 text-white"
                            />
                        )
                    )}
                    {showMainNav && (<NavabarHamburger onClick={() => setHamburgerIsActive(!hamburgerIsActive)} isActive={hamburgerIsActive} />)}
                </NavbarItemsRight>
            </NavbarDesktop>
            {(pathname === "/" || pathname === "/home" || pathname === "/projects" || pathname === "/blogs" || pathname === "/contact") && (
                <>
                    {hamburgerIsActive && (
                        <NavbarMobile>
                            <NavbarLink href="/home" name="Home" />
                        </NavbarMobile>
                    )}
                </>
            )}
        </NavbarContainer>
    )
}

const NavbarContainer = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <nav className="w-full fixed top-0 z-20 flex flex-col gap-0.5">
            {children}
        </nav>
    )
}

const NavbarDesktop = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <div className="box-border w-full h-14 px-6 flex justify-between items-center shadow drop-shadow bg-white">
            {children}
        </div>
    )
}

const NavbarMobile = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <div className="md:hidden w-full py-4 px-6 flex flex-col gap-2.5 shadow drop-shadow bg-white">
            {children}
        </div>
    )
}

const NavbarItemsLeft = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <div className="flex items-center gap-2.5">
            {children}
        </div>
    )
}

const NavbarItemsCenter = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <div className="hidden md:flex items-center gap-2.5">
            {children}
        </div>
    )
}

const NavbarItemsRight = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <div className="flex items-center gap-2.5">
            {children}
        </div>
    )
}

const NavbarBrand = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-sm bg-gray-200" />
            {children}
        </div>
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