

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Playbutton from './Playbutton';
import Pausebutton from './Pausebutton';
import Settingsbutton from './Settingsbutton';
import { useContext, useState, useEffect, useRef } from "react";
import Settingscontext from './Settingscontext';
import alarm from './alarm.mp3';

const red = '#f54e4e';
const green = '#4aec8c';

function Timer() {
  const settingsInfo = useContext(Settingscontext);

  const [isPaused, setIsPaused] = useState(true);
  const [mode, setMode] = useState('work'); // work/break/null
  const [secondsLeft, setSecondsLeft] = useState(0);
  const navigate = useNavigate();

  const secondsLeftRef = useRef(secondsLeft);
  const isPausedRef = useRef(isPaused);
  const modeRef = useRef(mode);

  function tick() {
    secondsLeftRef.current--;
    setSecondsLeft(secondsLeftRef.current);
  }

  useEffect(() => {
    
    function switchMode() {
      const nextMode = modeRef.current === 'work' ? 'break' : 'work';
      const nextSeconds = (nextMode === 'work' ? settingsInfo.workMinutes : settingsInfo.breakMinutes) * 60;

      setMode(nextMode);
      modeRef.current = nextMode;

      setSecondsLeft(nextSeconds);
      secondsLeftRef.current = nextSeconds;

      // Play the audio file when the timer reaches zero
      const audio = new Audio(alarm);
      audio.play();
    }

    secondsLeftRef.current = settingsInfo.workMinutes * 60;
    setSecondsLeft(secondsLeftRef.current);

    const interval = setInterval(() => {
      if (isPausedRef.current) {
        return;
      }
      if (secondsLeftRef.current === 0) {
        return switchMode();
      }

      tick();
    }, 1000);

    return () => clearInterval(interval);
  }, [settingsInfo]);

  const totalSeconds = mode === 'work'
    ? settingsInfo.workMinutes * 60
    : settingsInfo.breakMinutes * 60;
  const percentage = Math.round(secondsLeft / totalSeconds * 100);

  const minutes = Math.floor(secondsLeft / 60);
  let seconds = secondsLeft % 60;
  if (seconds < 10) seconds = '0' + seconds;

  return (
    <div>
  <div style={{ marginTop: '80px', marginLeft: '100px' }}></div>
<CircularProgressbar
  value={percentage}
  text={minutes + ':' + seconds}
  styles={buildStyles({
    textColor: '#fff',
    pathColor: mode === 'work' ? red : green,
    tailColor: 'rgba(255,255,255,.2)'
  })}
/>
<div style={{ marginTop: '0px', marginLeft: '100px' }}>
  {isPaused
    ? <Playbutton onClick={() => { setIsPaused(false); isPausedRef.current = false; }} />
    : <Pausebutton onClick={() => { setIsPaused(true); isPausedRef.current = true; }} className="Settingsbutton" />}
</div>
<div style={{ marginTop: '90px', marginLeft: '20px' }}> 
  <Settingsbutton onClick={() => settingsInfo.setShowSettings(true)} />
</div>
<button style={{marginTop: '-99px', marginLeft: '220px' }} className='homebutton' onClick={() => navigate('/landing')}> Home</button>

         
    </div>
  );
}

export default Timer;