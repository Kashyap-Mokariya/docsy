"use client"

import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { cn } from '@/lib/utils'
import { useEditorStore } from '@/store/use-editor-store'
import { ListCollapseIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const LineHeightButton = () => {
    const { editor } = useEditorStore()

    const lineHeights = [
        {
            label: "Default",
            value: "normal"
        },
        {
            label: "1",
            value: "1"
        },
        {
            label: "1.15",
            value: "1.15"
        },
        {
            label: "1.5",
            value: "1.5"
        },
        {
            label: "2",
            value: "2"
        },
        {
            label: "2.5",
            value: "2.5"
        },
        {
            label: "3",
            value: "3"
        },
        {
            label: "3.5",
            value: "3.5"
        },
    ]

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <button
                    className="h-7 min-w-7 shrink-0 flex flex-col items-center justify-center rounded-sm hover:bg-neutral-200/80 px-1.5 overflow-hidden"
                >
                    <Image
                        src="/line-spacing.png"
                        alt="Collapse Icon"
                        width={500}
                        height={500}
                        className="size-5"
                    />
                </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='p-0 flex flex-col gap-y-1'>
                {
                    lineHeights.map(({ label, value }) => (
                        <button
                            key={value}
                            onClick={() => editor?.chain().focus().setLineHeight(value).run()}
                            className={
                                cn(
                                    "flex items-center gap-x-2 px-2 py-1 rounded-sm hover:bg-neutral-200/80",
                                    editor?.getAttributes("paragraph").lineHeight === value && "bg-neutral-200/80"
                                )
                            }
                        >
                            <span className="text-sm">{label}</span>
                        </button>
                    ))
                }
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default LineHeightButton