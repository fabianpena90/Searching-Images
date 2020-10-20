import React, {useState} from 'react';
import 'semantic-ui-css/semantic.min.css'



function SearchBar(props) {
  const [text, setText] = useState('')

  function handleSubmit(e){
    e.preventDefault()
    props.onSubmit(text)
  }

  return (
    <div className="ui segment">
      <form onSubmit={handleSubmit} className="ui form">
        <div className="field">
          <label>Image Search</label>
          <input 
            type="text" 
            placeholder="Search" 
            value={text} 
            onChange={(e) => setText(e.target.value)}/>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;