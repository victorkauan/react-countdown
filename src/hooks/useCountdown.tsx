import { useState } from 'react';

interface UseCountdownReturn {
  day: number;
  hour: number;
  minute: number;
  second: number;
}

function useCountdown(date: string): UseCountdownReturn {
  const [day, setDay] = useState(0);
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);

  const countdownDate = new Date(date).getTime();

  function countDown() {
    const now = new Date().getTime();
    const interval = countdownDate - now;

    const second = 1000; // 1 second = 1000 milliseconds
    const minute = 60 * second; // 1 minute = 60 seconds
    const hour = 60 * minute; // 1 hour = 60 minutes
    const day = 24 * hour; // 1 day = 24 hours

    const dayNumber = Math.floor(interval / day);
    const hourNumber = Math.floor((interval % day) / hour);
    const minuteNumber = Math.floor((interval % hour) / minute);
    const secondNumber = Math.floor((interval % minute) / second);

    setDay(dayNumber);
    setHour(hourNumber);
    setMinute(minuteNumber);
    setSecond(secondNumber);
  }

  setInterval(countDown, 1000);

  return { day, hour, minute, second };
}

export default useCountdown;
