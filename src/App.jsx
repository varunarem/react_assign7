import React from 'react'
import { useState } from 'react'
import InputField from './Inputfield'
import Toggletext from './Toggletext'
import CharacterCounter from './charactercount'


const App = () => {
  return (
    <div>
      <h2>Controlled Input Field</h2>
      <InputField />
      
      <h2>Toggle Text Visibility</h2>
      <Toggletext />
      
      <h2>Character Counter</h2>
      <CharacterCounter />

    </div>
  )
}

export default App
