"use client"

import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { useEditorStore } from '@/store/use-editor-store'
import { Link2Icon } from 'lucide-react'
import React, { useState } from 'react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'

const LinkButton = () => {
    const { editor } = useEditorStore()

    const [value, setValue] = useState("")
    const [isDialogOpen, setIsDialogOpen] = useState(false)

    const onChange = (href: string) => {
        editor?.chain().focus().extendMarkRange("link").setLink({ href }).run()
        setValue("")
        setIsDialogOpen(false)
    }

    return (
        <DropdownMenu
            open={isDialogOpen}
            onOpenChange={(open) => {
                setIsDialogOpen(open)
                if (open) {
                    setValue(editor?.getAttributes("link").href || "")
                }
            }}
        >
            <DropdownMenuTrigger asChild>
                <button
                    className="h-7 min-w-7 shrink-0 flex flex-col items-center justify-center rounded-sm hover:bg-neutral-200/80 px-1.5 overflow-hidden"
                >
                    <Link2Icon className='size-4' />
                </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='p-2.5 flex items-center gap-x-2'>
                <Input
                    placeholder='www.example.com'
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                <Button
                    onClick={() => onChange(value)}
                >
                    Apply
                </Button>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default LinkButton