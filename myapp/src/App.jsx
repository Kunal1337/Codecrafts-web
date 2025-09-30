import React, { useState } from 'react';
import './App.css';

// Define a list of colors to cycle through
const COLORS = ['#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#33FFF6']

// --------------------------------------------------------
// SECTION: ColorCounter Component
// --------------------------------------------------------
function ColorCounter() {
  // score: Tracks the number
  const [score, setScore] = useState(0)
  
  // colorIndex: Tracks which color in the COLORS array is active
  const [colorIndex, setColorIndex] = useState(0)

  // hover: Tracks the mouse hover state (kept from your original code)
  const [hover, setHover] = useState(false)

  // Function to handle the button click
  const handleClick = () => {
    setScore(score + 1)
    
    // Cycle the color index: go to next or wrap to 0
    setColorIndex((colorIndex + 1) % COLORS.length)
  }

  // Determine the CSS class based on hover state
  let className = 'counter'
  if (hover) {
    className += ' hover'
  }

  return (
    <div
      className={className}
      style={{ 
        backgroundColor: COLORS[colorIndex], 
        transition: 'background-color 0.3s',
        padding: '20px',
        borderRadius: '8px',
        minWidth: '220px',
        textAlign: 'center'
      }}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
    >
      <h1>Count: {score}</h1>
      <button onClick={handleClick}>
        Click to Change Color and Add One
      </button>
      <p style={{marginTop: '10px', fontSize: '0.8em'}}>Current Color: {COLORS[colorIndex]}</p>
    </div>
  )
}


// --------------------------------------------------------
// SECTION: THE MAIN APP COMPONENT (Renders two instances)
// --------------------------------------------------------
import Header from './Header';
import Highlights from './Highlights';
import LatestEvent from './LatestEvent';
import Footer from './Footer';

export default function App() {
  return (
    <div>
      <Header />
      <hr />
      <Highlights />
      <LatestEvent />
      <Footer />
    </div>
  );
}
