"use client"

import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { useEditorStore } from '@/store/use-editor-store'
import { HighlighterIcon } from 'lucide-react'
import React from 'react'
import { ColorResult, SketchPicker } from 'react-color'

const HighlightColorButton = () => {
    const { editor } = useEditorStore()

    const value = editor?.getAttributes("highlight").color || "#000000"

    const onChange = (color: ColorResult) => {
        editor?.chain().focus().setHighlight({ color: color.hex }).run()
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <button
                    className="h-7 min-w-7 shrink-0 flex flex-col items-center justify-center rounded-sm hover:bg-neutral-200/80 px-1.5 overflow-hidden"
                >
                    <HighlighterIcon className='size-4' />
                </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='p-0'>
                <SketchPicker
                    color={value}
                    onChange={onChange}
                />
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default HighlightColorButton