import 'react-quill/dist/quill.snow.css' // ES6

import { Delta, Sources } from 'quill'
import React from 'react'
import ReactQuill from 'react-quill'

interface RichTextEditorProps {
  value?: string
  onChange?: (content: string, delta: Delta, source: Sources, editor: any) => void
}

export const RichTextEditor: React.FC<RichTextEditorProps> = ({ value = '', onChange }) => {
  return (
    <ReactQuill
      modules={{
        toolbar: [
          [{ header: [2, false] }],
          ['bold', 'italic', 'underline'],
          [{ list: 'ordered' }, { list: 'bullet' }],
        ],
      }}
      value={value}
      onChange={onChange}
    />
  )
}
