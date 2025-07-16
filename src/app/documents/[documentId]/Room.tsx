"use client";

import { ReactNode, useEffect, useMemo, useState } from "react";
import {
    LiveblocksProvider,
    RoomProvider,
    ClientSideSuspense,
} from "@liveblocks/react/suspense";
import { useParams } from "next/navigation";
import { FullScreenLoader } from "@/components/FullScreenLoader";
import { getUsers } from "./actions";
import { toast } from "sonner";

type User = {
    id: string;
    name: string;
    avatar: string;
}

export function Room({ children }: { children: ReactNode }) {

    const params = useParams()

    const [users, setUsers] = useState<User[]>([]);

    const fetchUsers = useMemo(
        () => async () => {
            try {
                const list = await getUsers()
                setUsers(list);
            }
            catch (error) {
                toast.error("Failed to fetch users");
            }
        },
        []
    )

    useEffect(() => {
        fetchUsers()
    }, [fetchUsers])

    return (
        <LiveblocksProvider
            throttle={16}
            authEndpoint="/api/liveblocks-auth"
            resolveUsers={({userIds}) => {
                return userIds.map(
                    (userId) => users.find((user) => user.id === userId) ?? undefined
                )
            }}
            resolveMentionSuggestions={(args) => {
                let filteredUsers = users;

                // Adjust 'args.text' to the correct property if needed
                const query = typeof args === "string" ? args : (args.text ?? "");

                if (query) {
                    filteredUsers = users.filter((user) =>
                        user.name.toLowerCase().includes(query.toLowerCase())
                    );
                }

                return filteredUsers.map((user) => user.id);
            }}
            resolveRoomsInfo={() => []}
        >
            <RoomProvider id={params.documentId as string}>
                <ClientSideSuspense fallback={<FullScreenLoader label="Loading room..." />}>
                    {children}
                </ClientSideSuspense>
            </RoomProvider>
        </LiveblocksProvider>
    );
}