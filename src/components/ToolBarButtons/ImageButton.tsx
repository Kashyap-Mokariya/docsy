"use client"

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { useEditorStore } from '@/store/use-editor-store'
import { ImageIcon, SearchIcon, UploadIcon } from 'lucide-react'
import React, { useState } from 'react'
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '../ui/dialog'
import { Button } from '../ui/button'
import { Input } from '../ui/input'

const ImageButton = () => {
    const { editor } = useEditorStore()

    const [imageUrl, setImageUrl] = useState("")
    const [isDialogOpen, setIsDialogOpen] = useState(false)

    const onChange = (src: string) => {
        editor?.chain().focus().setImage({ src }).run()
        setIsDialogOpen(false)
    }

    const onUpload = () => {
        const input = document.createElement("input")
        input.type = 'file'
        input.accept = 'image/*'

        input.onchange = (e) => {
            const file = (e.target as HTMLInputElement).files?.[0]

            if (file) {
                const imageUrl = URL.createObjectURL(file)
                onChange(imageUrl)
            }
        }

        input.click()
    }

    const handleImageUrlSubmit = () => {
        if (imageUrl) {
            onChange(imageUrl)
            setImageUrl("")
            setIsDialogOpen(false)
        }
    }

    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <button
                        className="h-7 min-w-7 shrink-0 flex flex-col items-center justify-center rounded-sm hover:bg-neutral-200/80 px-1.5 overflow-hidden"
                    >
                        <ImageIcon className='size-4' />
                    </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem
                        onClick={onUpload}
                    >
                        <UploadIcon className='size-4 mr-2' />
                        Upload
                    </DropdownMenuItem>
                    <DropdownMenuItem
                        onClick={() => setIsDialogOpen(true)}
                    >
                        <SearchIcon className='size-4 mr-2' />
                        Insert image URL
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

            <Dialog
                open={isDialogOpen}
                onOpenChange={setIsDialogOpen}
            >
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>
                            Insert image URL
                        </DialogTitle>
                    </DialogHeader>

                    <Input
                        placeholder="Insert image URL"
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                handleImageUrlSubmit()
                            }
                        }}
                    />
                    <DialogFooter>
                        <Button
                            onClick={handleImageUrlSubmit}
                        >
                            Insert
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default ImageButton