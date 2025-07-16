"use client";

import { ReactNode, useEffect, useMemo, useState } from "react";
import {
    LiveblocksProvider,
    RoomProvider,
    ClientSideSuspense,
} from "@liveblocks/react/suspense";
import { useParams } from "next/navigation";
import { FullScreenLoader } from "@/components/FullScreenLoader";
import { getUsers, getRoomDocuments } from "./actions";
import { toast } from "sonner";
import { Id } from "../../../../convex/_generated/dataModel";
import { LEFT_MARGIN_DEFAULT, RIGHT_MARGIN_DEFAULT } from "@/constants/margin";

type User = {
    id: string;
    name: string;
    avatar: string;
    color: string;
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
            catch {
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
            authEndpoint={async () => {
                const endpoint = "/api/liveblocks-auth"
                const room = params.documentId as string

                const response = await fetch(endpoint, {
                    method: "POST",
                    body: JSON.stringify({ room }),
                })

                return await response.json()
            }}
            resolveUsers={({ userIds }) => {
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
            resolveRoomsInfo={async ({ roomIds }) => {
                const documents = await getRoomDocuments(roomIds as Id<"documents">[]);

                return documents.map((document) => ({
                    id: document.id,
                    name: document.name,
                }));
            }}
        >
            <RoomProvider
                id={params.documentId as string}
                initialStorage={
                    { leftMargin: LEFT_MARGIN_DEFAULT, rightMargin: RIGHT_MARGIN_DEFAULT }
                }
            >
                <ClientSideSuspense fallback={<FullScreenLoader label="Loading room..." />}>
                    {children}
                </ClientSideSuspense>
            </RoomProvider>
        </LiveblocksProvider>
    );
}