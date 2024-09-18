import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [level, setLevel] = useState(0);
  const [isMaxLevel, setIsMaxLevel] = useState(false);

  const feedPig = (points) => {
    setLevel(prevLevel => prevLevel + points);
  };

  useEffect(() => {
    if (level >= 100) {
      setIsMaxLevel(true);
    }
  }, [level]);

  return (
    <div className="App">
      <h1>เกมส์หมูเด้ง</h1>
      <div className="pig-container">
        <img 
          src={isMaxLevel ? "kob1.jpg" : "pig.jpg"} 
          alt="Pig"
          style={{ width: `${150 + level}px`, height: `${150 + level}px` }}
        />
      </div>
      <p>Level: {level}</p>
      <div className="buttons">
        <button onClick={() => feedPig(5)}>
          <img src="watermelon.png" alt="แตงโม" style={{ width: '50px', height: '50px' }} />
        </button>
        <button onClick={() => feedPig(10)}>
          <img src="pumpkin.png" alt="ฟักทอง" style={{ width: '50px', height: '50px' }} />
        </button>
        <button onClick={() => feedPig(20)}>
          <img src="grass.png" alt="หญ้า" style={{ width: '50px', height: '50px' }} />
        </button>
      </div>
    </div>
  );
}

export default App;
