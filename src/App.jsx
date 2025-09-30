import { useState } from 'react';
import './App.css'; // Keep the CSS import for styling

// Define a list of colors to cycle through
const COLORS = ['#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#33FFF6'];

// --------------------------------------------------------
// SECTION: ColorCounter Component
// --------------------------------------------------------
function ColorCounter() {
  // score: Tracks the number
  const [score, setScore] = useState(0);
  
  // colorIndex: Tracks which color in the COLORS array is active
  const [colorIndex, setColorIndex] = useState(0);

  // hover: Tracks the mouse hover state (kept from your original code)
  const [hover, setHover] = useState(false);

  // Function to handle the button click
  const handleClick = () => {
    setScore(score + 1);
    
    // Cycle the color index: 
    // Go to the next index, or wrap around to 0 if it reaches the end of the COLORS array.
    setColorIndex((colorIndex + 1) % COLORS.length);
  };

  // Determine the CSS class based on hover state
  let className = 'counter';
  if (hover) {
    className += ' hover';
  }

  return (
    <div
      className={className}
      style={{ 
        backgroundColor: COLORS[colorIndex], 
        transition: 'background-color 0.3s' 
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
  );
}


// --------------------------------------------------------
// SECTION: THE MAIN APP COMPONENT (Renders two instances)
// --------------------------------------------------------
export default function App() {
  const counterComponent = <ColorCounter />;
  
  return (
    <div className="app-container" style={{ display: 'flex', gap: '20px', justifyContent: 'center', padding: '50px' }}>
      {/* Each instance has its own independent score and color! */}
      {counterComponent} 
      {counterComponent} 
    </div>
  );
}