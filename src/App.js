import React, { useState, useEffect } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'

function App() {

    const [value, setValue] = useState();

    useEffect( () => {
      //My plan was to catch the html and add the collapseable properties with it. But it didn't feel like the right aproach to me. 
      
      console.log(value);
    });

    return (
      <ReactQuill 
        theme="snow" 
        value={value} 
        onChange={setValue}
      />
    );
}

export default App;
 