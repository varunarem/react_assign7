import React, { useState } from 'react';

function CharacterCounter() {
  // State to track the text input
  const [text, setText] = useState('');

  // Function to handle text change
  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <textarea
        value={text}
        onChange={handleTextChange}
        placeholder="Type here..."
        rows="4"
        cols="50"
      ></textarea>
      <p>Character Count: {text.length}</p>
    </div>
  );
}

export default CharacterCounter;