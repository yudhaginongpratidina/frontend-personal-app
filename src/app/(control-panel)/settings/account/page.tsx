import MyProfile from "@/components/features/account/MyProfile";

export default function Page() {
    return (
        <MyProfile
            count={{ posts: 156, followers: 2.4, following: 892 }}
            profile={{
                image: "https://picsum.photos/100/100?random=1",
                full_name: "John Doe",
                bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            }}
            stories={[
                { id: 1, title: "Today", image: "https://picsum.photos/100/100?random=7" },
                { id: 2, title: "Weekend", image: "https://picsum.photos/100/100?random=8" },
                { id: 3, title: "Work", image: "https://picsum.photos/100/100?random=9" },
                { id: 4, title: "Travel", image: "https://picsum.photos/100/100?random=10" },
            ]}
        />
    );
}