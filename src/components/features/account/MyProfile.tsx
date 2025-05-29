"use client";
import Link from "next/link";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { MdEdit, MdSettings } from "react-icons/md";

type MyProfileProps = {
    count: {
        posts: number;
        followers: number;
        following: number;
    }
    profile: {
        image: string;
        full_name: string;
        bio: string;
    }
    stories: {
        id: number | string;
        title: string;
        image: string;
    }[]
};

export default function MyProfile({ count, profile, stories }: MyProfileProps) {
    const [activeTab, setActiveTab] = useState<string>('posts');
    return (
        <Container>
            <Section name="profile">
                <Profile
                    avatar={profile.image}
                    fullName={profile.full_name}
                    bio={profile.bio}
                    stats={{
                        posts: count.posts,
                        followers: count.followers,
                        following: count.following
                    }}
                />
            </Section>
            <Section name="stories">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-semibold text-black">Stories</h2>
                    <button className="text-sm text-gray-600 hover:text-black">View All</button>
                </div>
                <div className="flex gap-4 overflow-x-auto pb-2">
                    <div className="flex-shrink-0 text-center">
                        <div className="w-16 h-16 border-2 border-dashed border-gray-300 rounded-full flex items-center justify-center hover:border-gray-400 transition-colors cursor-pointer">
                            <FaPlus className="w-6 h-6 text-gray-400" />
                        </div>
                        <p className="text-xs text-gray-600 mt-2">Add Story</p>
                    </div>
                    {stories.map((story) => (
                        <div key={story.id} className="flex-shrink-0 text-center cursor-pointer">
                            <div className="w-16 h-16 rounded-full border-2 border-black p-0.5">
                                <img src={story.image} alt={story.title} className="w-full h-full rounded-full object-cover" />
                            </div>
                            <p className="text-xs text-gray-600 mt-2">{story.title}</p>
                        </div>
                    ))}
                </div>
            </Section>
            <Section name="activity">
                <div className="border-b border-gray-200">
                    <div className="flex">
                        <ActivityButton name="Posts" isActive={activeTab === 'posts'} onClick={() => setActiveTab('posts')} />
                        <ActivityButton name="Saved" isActive={activeTab === 'saved'} onClick={() => setActiveTab('saved')} />
                        <ActivityButton name="Tagged" isActive={activeTab === 'tagged'} onClick={() => setActiveTab('tagged')} />
                    </div>
                </div>
            </Section>
        </Container>
    )
}

const Container = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <div className="w-full max-w-4xl flex flex-col gap-4">
            {children}
        </div>
    )
}

const Section = ({ name, children }: { name: "profile" | "stories" | "activity"; children: React.ReactNode }) => {
    return (
        <>
            {name === "profile" && <div className="w-full border rounded-sm border-gray-200 bg-white">{children}</div>}
            {name === "stories" && <div className="w-full p-2.5 border rounded-sm border-gray-200 bg-white">{children}</div>}
            {name === "activity" && <div className="w-full p-2.5 border rounded-sm border-gray-200 bg-white">{children}</div>}
        </>
    )
}

const Profile = ({ avatar, fullName, bio, stats }: { avatar: string, fullName: string, bio: string, stats: { posts: number, followers: number, following: number } }) => {
    return (
        <>
            <div className="h-48 bg-gradient-to-r from-gray-800 to-black relative">
                <div className="absolute top-4 right-4 flex gap-2">
                    <ProfileActionButtonItem href="/settings" icon={<MdEdit className="w-4 h-4" />} />
                    <ProfileActionButtonItem href="/settings" icon={<MdSettings className="w-4 h-4" />} />
                </div>
            </div>
            <div className="w-full px-6 pb-6 flex flex-col gap-2.5">
                <div className="w-full flex flex-row gap-2.5 relative">
                    <div className="-mt-16 w-32 h-32 bg-gray-300 rounded-full border-4 border-white shadow-lg relative">
                        <img src={avatar} alt={avatar} className="w-full h-full object-cover rounded-full" />
                        <button className="absolute bottom-2 right-2 p-1.5 z-10 bg-black text-white rounded-full hover:bg-gray-800 transition-colors">
                            <FaPlus className="w-3 h-3" />
                        </button>
                    </div>
                    <div className="flex gap-4 pt-4">
                        <div className="text-center">
                            <div className="text-xl font-bold text-black">{stats.posts}</div>
                            <div className="text-sm text-gray-600">Posts</div>
                        </div>
                        <div className="text-center">
                            <div className="text-xl font-bold text-black">{stats.followers}</div>
                            <div className="text-sm text-gray-600">Followers</div>
                        </div>
                        <div className="text-center">
                            <div className="text-xl font-bold text-black">{stats.following}</div>
                            <div className="text-sm text-gray-600">Following</div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-2.5">
                    <div className="text-2xl font-bold text-black">{fullName}</div>
                    <div className="text-sm text-gray-600">{bio}</div>
                </div>
            </div>
        </>
    )
}


const ProfileActionButtonItem = ({ href, icon }: { href: string; icon: React.ReactNode; }) => {
    return (
        <Link href={href || "/"}>
            <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors">{icon}</button>
        </Link>
    );
};


const ActivityButton = ({ onClick, name, isActive }: Readonly<{ onClick: () => void, name: string, isActive: boolean }>) => {
    return (
        <button
            onClick={onClick}
            className={`w-full py-4 px-6 text-center font-medium transition-colors ${isActive ? 'text-black border-b-2 border-black' : 'hover:cursor-pointer text-gray-600 hover:text-black'}`}
        >{name}</button>
    )
}