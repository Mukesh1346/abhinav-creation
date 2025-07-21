"use client";
import React, { useState, useEffect } from 'react';

export default function CounterBox({title = "Counter", count1 = 100, count2 = 200, duration = 2000 }) {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
//   const [title, settitle] = useState('');

  useEffect(() => {
    let start1 = 0;
    let start2 = 0;
    const stepTime1 = Math.floor(duration / count1);
    const stepTime2 = Math.floor(duration / count2);

    const timer1 = setInterval(() => {
      start1 += 1;
      setNum1(start1);
      if (start1 >= count1) clearInterval(timer1);
    }, stepTime1);

    const timer2 = setInterval(() => {
      start2 += 1;
      setNum2(start2);
      if (start2 >= count2) clearInterval(timer2);
    }, stepTime2);

    return () => {
      clearInterval(timer1);
      clearInterval(timer2);
    };
  }, [count1, count2, duration]);

  return (
    <div style={{
      backgroundColor: '#188fc7',
      color: 'white',
      height: '250px',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '1.5rem',
    }}>
      <div >
            <p className="text-white fs-4">{title}</p>
        
        {num1}
        </div>
      {/* <div>Count 2: {num2}</div> */}
    </div>
  );
}
