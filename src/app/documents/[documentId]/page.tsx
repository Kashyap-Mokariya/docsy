import React from 'react'

type DocumentsIdPageProps = {
    params: Promise<{ documentId: string }>
}

const DocumentsIdPage = async ({ params }: DocumentsIdPageProps) => {

    const { documentId } = await params

    return (
        <div>DocumentsIdPage</div>
    )
}

export default DocumentsIdPage