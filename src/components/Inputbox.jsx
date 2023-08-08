import React, {useEffect, useState, useRef} from 'react';
import PropTypes from 'prop-types';
import { marked } from 'marked';
import { sample } from '../sampleText';

marked.use({
  gfm: true,
  breaks: true
});

const Inputbox = props => {
  const [input, setInput] = useState(sample);
  const [editorActive, setEditorActive] = useState(true);
  const [previewActive, setPreviewActive] = useState(true);

  const divRef = useRef(null);

  const handleChange = event => {
    setInput(event.target.value);
    
  }

  const toggleView = e => {
    e.preventDefault();
    console.log(e.target.dataset.name)
    if(e.target.dataset.name === "editor") {
      setPreviewActive(!previewActive);
    } else {
      setEditorActive(!editorActive)
    }

    
  }

  useEffect(() => {
    divRef.current.innerHTML = marked.parse(input);
  })

  return (
    <div>
      <div className={`${editorActive ? '' : 'hidden'} editor-container flex center column`}>
        <div className={`editor-toolbar flex`}>
          <i className='fa fa-free-code-camp'></i>
          Editor
          <i className={`fa ${previewActive ? 'fa-arrows-alt' : 'fa-compress'}`} data-name="editor" onClick={toggleView}></i>
        </div>
        <textarea name="editor" id="editor" className={`editorTA ${previewActive ? '' : 'expand'}`} onChange={handleChange} value={input}></textarea>
      </div>
      <div className={`${previewActive ? '' : 'hidden'} preview-container flex center column`}>
        <div className='preview-toolbar flex'>
          <i className='fa fa-free-code-camp'></i>
          Previewer
          <i className={`fa ${editorActive ? 'fa-arrows-alt' : 'fa-compress'}`} data-name="previewer" onClick={toggleView}></i>
        </div>
        <div id="preview" ref={divRef} className={`${editorActive ? '' : 'expand'} preview-box`}></div>
      </div>
      
    </div>
  )
}

Inputbox.propTypes = {}

export default Inputbox