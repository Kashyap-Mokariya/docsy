"use server"

import {auth, clerkClient} from "@clerk/nextjs/server";

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
    }))

    return users
}