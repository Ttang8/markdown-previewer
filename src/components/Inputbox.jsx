import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import { marked } from 'marked';

const Inputbox = props => {
  const [input, setInput] = useState("");

  const divRef = React.createRef();

  const handleChange = event => {
    setInput(event.target.value);
    
  }
  useEffect(() => {
    divRef.current.innerHTML = marked.parse(input);
  })

  return (
    <div>
      <div className="editor-container flex center column">
        <div className='editor-toolbar flex'>
          <i className='fa fa-free-code-camp'></i>
          Editor
          <i className='fa fa-arrows-alt'></i>
        </div>
        <textarea name="editor" id="editor" onChange={handleChange} value={input}></textarea>
      </div>
      <div id="preview" ref={divRef}></div>
    </div>
  )
}

Inputbox.propTypes = {}

export default Inputbox