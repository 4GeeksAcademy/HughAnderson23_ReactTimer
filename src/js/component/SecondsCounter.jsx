import React, { useState, useEffect } from 'react';


const SecondsCounter = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    // Function to update seconds every second
    const interval = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);

    // Clean up the interval to avoid memory leaks
    return () => clearInterval(interval);
  }, []); // Empty dependency array means this effect runs once after initial render

  return (
    <div>
      <p>{seconds}</p>
    </div>
  );
};

export default SecondsCounter;