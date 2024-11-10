import { useState } from 'react'
import './App.css'

function Toggletext() {
   
    // Initialize state with true to show text initially
    const [isTextVisible, setIsTextVisible] = useState(true);
  
    // Toggle the state between true and false
    const toggleTextVisibility = () => {
      setIsTextVisible((prevState) => !prevState);
    };
  
    return (
      <div>
        <button onClick={toggleTextVisibility}>
          {isTextVisible ? 'Hide Text' : 'Show Text'}
        </button>
        {isTextVisible && <p>This is the text to show or hide.</p>}
      </div>
    );
  }
  
  
export default Toggletext

