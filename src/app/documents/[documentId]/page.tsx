import React from 'react'
import { Editor } from './editor'

type DocumentsIdPageProps = {
    params: Promise<{ documentId: string }>
}

const DocumentsIdPage = async ({ params }: DocumentsIdPageProps) => {

    const { documentId } = await params

    return (
        <div className='min-h-screen bg-[#FAFBFD]'>
            <Editor />
        </div>
    )
}

export default DocumentsIdPage