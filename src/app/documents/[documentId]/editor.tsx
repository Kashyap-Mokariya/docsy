'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import TaskItem from '@tiptap/extension-task-item'
import TaskList from '@tiptap/extension-task-list'
import Table from '@tiptap/extension-table'
import TableCell from '@tiptap/extension-table-cell'
import TableHeader from '@tiptap/extension-table-header'
import TableRow from '@tiptap/extension-table-row'
import Underline from '@tiptap/extension-underline'
import Image from '@tiptap/extension-image'
import ImageResize from "tiptap-extension-resize-image"
import FontFamily from '@tiptap/extension-font-family'
import TextStyle from '@tiptap/extension-text-style'
import Highlight from '@tiptap/extension-highlight'
import { Color } from '@tiptap/extension-color'
import Link from '@tiptap/extension-link'
import TextAlign from '@tiptap/extension-text-align'
import React from 'react'
import { useEditorStore } from '@/store/use-editor-store'
import { FontSizeExtension } from '@/extensions/font-size'
import { lineHeightExtension } from '@/extensions/line-height'
import { useLiveblocksExtension } from "@liveblocks/react-tiptap";
import { Ruler } from './ruler'
import { Threads } from './Threads'
import { useMyPresence, useOthers } from '@liveblocks/react';

type Props = {}

export const Editor = (props: Props) => {

  const liveblocks = useLiveblocksExtension()

  const { setEditor } = useEditorStore();

  // Liveblocks presence hooks
  const [_, updateMyPresence] = useMyPresence();
  const others = useOthers();

  const editor = useEditor({
    immediatelyRender: false,
    onCreate({ editor }) {
      setEditor(editor)
    },
    onDestroy(props) {
      setEditor(null)
    },
    onUpdate({ editor }) {
      setEditor(editor)
    },
    onSelectionUpdate({ editor }) {
      setEditor(editor)
    },
    onTransaction({ editor }) {
      setEditor(editor)
    },
    onFocus({ editor }) {
      setEditor(editor)
      updateMyPresence({ focused: true }); // Set presence to focused
    },
    onBlur({ editor }) {
      setEditor(editor)
      updateMyPresence({ focused: false }); // Set presence to not focused
    },
    onContentError({ editor }) {
      setEditor(editor)
    },
    editorProps: {
      attributes: {
        style: "padding-left: 56px; padding-right: 56px;",
        class: "focus:outline-none print:border-0 bg-white border border-[#C7C7C7] flex flex-col min-h-[1054px] w-[816px] pt-10 pr-14 pb-10 cursor-text"
      }
    },
    extensions: [
      liveblocks,
      StarterKit.configure({
        history: false
      }),
      lineHeightExtension,
      FontSizeExtension,
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
      Link.configure({
        openOnClick: false,
        autolink: true,
        defaultProtocol: "https",
      }),
      Color,
      Highlight.configure({ multicolor: true }),
      TextStyle,
      FontFamily,
      Underline,
      // Image,
      ImageResize,
      Table.configure({
        resizable: true,
      }),
      TableRow,
      TableHeader,
      TableCell,
      TaskList,
      TaskItem.configure({
        nested: true,
      }),
    ],
    content: '<p>Hello World! 🌎️</p>',
    // content: `
    //     <table>
    //       <tbody>
    //         <tr>
    //           <th>Name</th>
    //           <th colspan="3">Description</th>
    //         </tr>
    //         <tr>
    //           <td>Cyndi Lauper</td>
    //           <td>Singer</td>
    //           <td>Songwriter</td>
    //           <td>Actress</td>
    //         </tr>
    //       </tbody>
    //     </table>
    //   `,
  })

  // Effect: If any other user is focused, blur this editor
  React.useEffect(() => {
    if (!editor) return;
    const someoneElseFocused = others.some(other => other.presence?.focused);
    if (someoneElseFocused) {
      editor.commands.blur();
    }
  }, [others, editor]);

  return (
    <div className='size-full overflow-x-auto bg-[#F9FBFD] px-4 print:p-0 print:bg-white print:overflow-visible'>
      <Ruler />
      <div className='min-w-max flex justify-center w-[816px] py-4 print:py-0 mx-auto print:w-full print:min-w-0'>
        <EditorContent editor={editor} />
        <Threads editor={editor} />
      </div>
    </div>
  )
}