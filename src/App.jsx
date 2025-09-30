import { useState } from 'react';
import './App.css'; 

const COLORS = ['#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#33FFF6'];

function ColorCounter() {
  const [score, setScore] = useState(0);
  
  const [colorIndex, setColorIndex] = useState(0);

  const [hover, setHover] = useState(false);

  const handleClick = () => {
    setScore(score + 1);
 
    setColorIndex((colorIndex + 1) % COLORS.length);
  };

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



export default function App() {
  const counterComponent = <ColorCounter />;
  
  return (
    <div className="app-container" style={{ display: 'flex', gap: '20px', justifyContent: 'center', padding: '50px' }}>
      {counterComponent} 
      {counterComponent} 
    </div>
  );
}