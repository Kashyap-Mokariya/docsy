"use client";

import { ReactNode } from "react";
import {
    LiveblocksProvider,
    RoomProvider,
    ClientSideSuspense,
} from "@liveblocks/react/suspense";
import { useParams } from "next/navigation";

export function Room({ children }: { children: ReactNode }) {

    const params = useParams()

    return (
        <LiveblocksProvider publicApiKey={"pk_dev_ExEYZoFuzysVA1xQkLGgAJlKGsKpDm3oHm0iVcmHBNzklRS_E5aTI4t6zxKqfO2i"}>
            <RoomProvider id={params.documentId as string}>
                <ClientSideSuspense fallback={<div>Loading…</div>}>
                    {children}
                </ClientSideSuspense>
            </RoomProvider>
        </LiveblocksProvider>
    );
}