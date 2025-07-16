/* eslint-disable @typescript-eslint/no-explicit-any */
"use server"

import { auth, clerkClient } from "@clerk/nextjs/server";
import { ConvexHttpClient } from "convex/browser";
import { Id } from "../../../../convex/_generated/dataModel";
import { api } from "../../../../convex/_generated/api";

const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export async function getRoomDocuments(ids: Id<"documents">[]) {
    return convex.query(api.documents.getByIds, { ids });
}

export async function getUsers() {
    const { sessionClaims } = await auth();

    const clerk = await clerkClient()

    const orgId = (sessionClaims as any)?.o?.id;

    const response = await clerk.users.getUserList({
        organizationId: [orgId],
    })

    const users = response.data.map((user) => ({
        id: user.id,
        name: user.fullName ?? user.primaryEmailAddress?.emailAddress ?? "Anonymous",
        avatar: user.imageUrl,
        color: ""
    }))

    return users
}