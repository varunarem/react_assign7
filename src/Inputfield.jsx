import React, { useState } from 'react';

function InputField() {
  const [text, setText] = useState(''); // Initialize state to track the text input

  return (
    <div>
      <input 
        type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)} // Update state as user types
        placeholder="Type something..."
      />
      <p>Text You Entered: {text}</p> {/* Display the text in real-time */}
    </div>
  );
}

export default InputField;