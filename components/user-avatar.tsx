"use-client"


import { AvatarImage } from "@radix-ui/react-avatar"
import { Avatar } from "./ui/avatar"
import { useUser } from "@clerk/nextjs"



export const UserAvatar = () => {
    const { user } = useUser()

    return (
        <Avatar className="h-12 w-12">
            <AvatarImage src={user?.imageUrl}/>
        </Avatar>
    )
}