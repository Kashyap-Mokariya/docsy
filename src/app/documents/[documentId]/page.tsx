import React from 'react'

type DocumentsIdPageProps = {
    params: Promise<{ documentId: string }>
}

const DocumentsIdPage = async ({ params }: DocumentsIdPageProps) => {

    const { documentId } = await params

    return (
        <div>Document ID : {documentId} </div>
    )
}

export default DocumentsIdPage