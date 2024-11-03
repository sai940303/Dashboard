
import React, { useState } from 'react';
import { Editor, EditorState, ContentState } from 'draft-js';
import 'draft-js/dist/Draft.css'; // Import Draft.js styles
import { convertToRaw, convertFromRaw } from 'draft-js';

// Sample initial content as raw JSON (optional)
const initialContent = {
  blocks: [
    {
      key: '9n1i',
      text: 'Welcome to the Draft.js editor!',
      type: 'header-one',
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {},
    },
    {
      key: '9n1j',
      text: 'Start typing your content here...',
      type: 'unstyled',
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {},
    },
  ],
  entityMap: {},
};

const TextEditor = () => {
  const [editorState, setEditorState] = useState(
    EditorState.createWithContent(ContentState.createFromBlockArray(convertFromRaw(initialContent).blocks))
  );

  const onEditorStateChange = (newState) => {
    setEditorState(newState);
  };

  const handleSave = () => {
    const rawContentState = convertToRaw(editorState.getCurrentContent());
    console.log('Saved content:', JSON.stringify(rawContentState));
  };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <h2 className="text-lg font-semibold mb-4">Text Editor</h2>
      <Editor
        editorState={editorState}
        onEditorStateChange={onEditorStateChange}
        placeholder="Start typing..."
      />
      <button
        onClick={handleSave}
        className="mt-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Save Content
      </button>
    </div>
  );
};

export default TextEditor;
