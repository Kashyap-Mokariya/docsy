import React from 'react'
import { Id } from '../../../../convex/_generated/dataModel'
import { Document } from './document'
import { preloadQuery } from 'convex/nextjs'
import { auth } from '@clerk/nextjs/server'
import { api } from '../../../../convex/_generated/api'

type DocumentsIdPageProps = {
    params: Promise<{ documentId: Id<"documents"> }>
}

const DocumentsIdPage = async ({ params }: DocumentsIdPageProps) => {

    const { documentId } = await params

    const {getToken} = await auth()
    const token = await getToken({template: 'convex'}) ?? undefined

    if(!token) {
        throw new Error("Unauthorized: No token found")
    }

    const preloadedDocument = await preloadQuery(
        api.documents.getDocumentById,
        { id: documentId },
        { token }
    )

    return (
        <Document preloadedDocument={preloadedDocument}/>
    )
}

export default DocumentsIdPage