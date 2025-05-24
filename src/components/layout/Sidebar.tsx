"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { useState } from "react";
import { IoHome } from "react-icons/io5";
import { GoProject } from "react-icons/go";
import { MdMessage } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { FaUsers, FaBloggerB, FaToolbox } from "react-icons/fa";

type SidebarProps = {
    sidebar_btn_isActive: boolean;
};

export default function Sidebar({ sidebar_btn_isActive }: SidebarProps) {
    const [sidebarGroupIsActive, setSidebarGroupIsActive] = useState<boolean>(false);
    const [sidebarGroupIdIsActive, setSidebarGroupIdIsActive] = useState<string>("");

    const handleGroupClick = (id: string) => {
        if (sidebarGroupIsActive && sidebarGroupIdIsActive === id) {
            setSidebarGroupIsActive(false);
        } else {
            setSidebarGroupIsActive(true);
            setSidebarGroupIdIsActive(id);
        }
    };

    return (
        <SidebarContainer>
            <SidebarMinimized>
                <SidebarMaximizedGroupItem
                    groupId="home"
                    icon={<IoHome className="w-5 h-5" />}
                    onClick={() => handleGroupClick("home")}
                    isActive={sidebarGroupIsActive && sidebarGroupIdIsActive === "home"}
                />
                <SidebarMaximizedGroupItem
                    groupId="tools"
                    icon={<FaToolbox className="w-5 h-5" />}
                    onClick={() => handleGroupClick("tools")}
                    isActive={sidebarGroupIsActive && sidebarGroupIdIsActive === "tools"}
                />
                <SidebarMaximizedGroupItem
                    groupId="messages"
                    icon={<MdMessage className="w-5 h-5" />}
                    onClick={() => handleGroupClick("messages")}
                    isActive={sidebarGroupIsActive && sidebarGroupIdIsActive === "messages"}
                />
                <SidebarMaximizedGroupItem
                    groupId="blog-management"
                    icon={<FaBloggerB className="w-5 h-5" />}
                    onClick={() => handleGroupClick("blog-management")}
                    isActive={sidebarGroupIsActive && sidebarGroupIdIsActive === "blog-management"}
                />
                <SidebarMaximizedGroupItem
                    groupId="project-management"
                    icon={<GoProject className="w-5 h-5" />}
                    onClick={() => handleGroupClick("project-management")}
                    isActive={sidebarGroupIsActive && sidebarGroupIdIsActive === "project-management"}
                />
                <SidebarMaximizedGroupItem
                    groupId="users"
                    icon={<FaUsers className="w-5 h-5" />}
                    onClick={() => handleGroupClick("user-management")}
                    isActive={sidebarGroupIsActive && sidebarGroupIdIsActive === "user-management"}
                />
                <SidebarMaximizedGroupItem
                    groupId="settings"
                    icon={<IoMdSettings className="w-5 h-5" />}
                    onClick={() => handleGroupClick("settings")}
                    isActive={sidebarGroupIsActive && sidebarGroupIdIsActive === "settings"}
                />
            </SidebarMinimized>

            {sidebar_btn_isActive && (
                <SidebarMaximized>
                    {sidebarGroupIsActive && sidebarGroupIdIsActive === "home" && (
                        <SidebarMaximizedGroup name="Home">
                            <SidebarMaximizedItem name="My Info" href="/overview/my-info" />
                            <SidebarMaximizedItem name="My Education" href="/overview/my-education" />
                            <SidebarMaximizedItem name="My Skills" href="/overview/my-skills" />
                            <SidebarMaximizedItem name="My Certificates" href="/overview/my-certificates" />
                            <SidebarMaximizedItem name="My Portfolio" href="/overview/my-portfolio" />
                            <SidebarMaximizedItem name="My Experience" href="/overview/my-experience" />
                        </SidebarMaximizedGroup>
                    )}
                    {sidebarGroupIsActive && sidebarGroupIdIsActive === "tools" && (
                        <SidebarMaximizedGroup name="Tools">
                            <SidebarMaximizedItem name="Google Dorking" href="/tools/google-dorking" />
                        </SidebarMaximizedGroup>
                    )}
                    {sidebarGroupIsActive && sidebarGroupIdIsActive === "messages" && (
                        <SidebarMaximizedGroup name="Messages">
                            <SidebarMaximizedItem name="Inbox" href="/messages/inbox" />
                            <SidebarMaximizedItem name="Starred" href="/messages/starred" />
                            <SidebarMaximizedItem name="Important" href="/messages/important" />
                            <SidebarMaximizedItem name="Spam" href="/messages/spam" />
                            <SidebarMaximizedItem name="Trash" href="/messages/trash" />
                        </SidebarMaximizedGroup>
                    )}
                    {sidebarGroupIsActive && sidebarGroupIdIsActive === "blog-management" && (
                        <SidebarMaximizedGroup name="Blog Management">
                            <SidebarMaximizedItem name="Overview" href="/blog-management/overview" />
                            <SidebarMaximizedItem name="My Categories" href="/blog-management/my-categories" />
                            <SidebarMaximizedItem name="My Posts" href="/blog-management/my-posts" />
                        </SidebarMaximizedGroup>
                    )}
                    {sidebarGroupIsActive && sidebarGroupIdIsActive === "project-management" && (
                        <SidebarMaximizedGroup name="Project Management">
                            <SidebarMaximizedItem name="Overview" href="/project-management/overview" />
                            <SidebarMaximizedItem name="Team Members" href="/project-management/team-members" />
                            <SidebarMaximizedItem name="Projects" href="/project-management/projects" />
                        </SidebarMaximizedGroup>
                    )}
                    {sidebarGroupIsActive && sidebarGroupIdIsActive === "user-management" && (
                        <SidebarMaximizedGroup name="User Management">
                            <SidebarMaximizedItem name="Overview" href="/user-management/overview" />
                            <SidebarMaximizedItem name="Users" href="/user-management/users" />
                            <SidebarMaximizedItem name="Permissions" href="/user-management/permissions" />
                            <SidebarMaximizedItem name="Roles" href="/user-management/roles" />
                        </SidebarMaximizedGroup>
                    )}
                    {sidebarGroupIsActive && sidebarGroupIdIsActive === "settings" && (
                        <SidebarMaximizedGroup name="Settings">
                            <SidebarMaximizedItem name="Appearance" href="/settings/appearance" />
                            <SidebarMaximizedItem name="Account" href="/settings/account" />
                            <SidebarMaximizedItem name="Backup" href="/settings/backup" />
                        </SidebarMaximizedGroup>
                    )}
                </SidebarMaximized>
            )}
        </SidebarContainer>
    );
}

const SidebarContainer = ({ children }: { children: React.ReactNode }) => {
    return <aside className="w-full flex">{children}</aside>;
};

const SidebarMinimized = ({ children }: { children?: React.ReactNode }) => {
    return (
        <div className="w-[74px] min-h-screen pt-16 flex flex-col items-center gap-4 border-r border-gray-200 bg-white">
            {children}
        </div>
    );
};

type SidebarMaximizedGroupItemProps = {
    groupId: string;
    icon: React.ReactNode;
    onClick: () => void;
    isActive: boolean;
};

const SidebarMaximizedGroupItem = ({ icon, onClick, isActive }: SidebarMaximizedGroupItemProps) => {
    return (
        <button
            onClick={onClick}
            className={`p-1.5 rounded-sm flex justify-center items-center ${isActive ? "bg-black text-white" : "hover:cursor-pointer bg-white hover:bg-gray-200 text-black"}`}
        >{icon}</button>
    );
};

const SidebarMaximized = ({ children }: { children?: React.ReactNode }) => {
    return (
        <div className="w-[246px] pt-16 px-2 min-h-screen border-r border-gray-200 bg-white">
            {children}
        </div>
    );
};

const SidebarMaximizedGroup = ({ name, children }: { name: string; children?: React.ReactNode }) => {
    return (
        <div className="flex flex-col gap-2.5">
            <div className="w-full p-2 rounded-sm text-center text-sm font-semibold bg-black text-white">
                {name}
            </div>
            {children}
        </div>
    );
};

const SidebarMaximizedItem = ({ name, href }: Readonly<{ name: string, href: string }>) => {
    const pathname = usePathname();
    return (
        <Link href={href || "/"} className={`w-full p-2 rounded-sm text-sm font-semibold ${pathname === href ? "bg-gray-200" : "hover:cursor-pointer hover:bg-gray-200"}`}>
            {name}
        </Link>
    )
}