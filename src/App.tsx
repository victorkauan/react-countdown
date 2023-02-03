import { Title } from './components/Title';
import { Counter } from './components/Counter';

import useCountdown from './hooks/useCountdown';

import newYearBackgroundImage from './assets/new-year-background.jpg';
import './App.css';

export function App() {
  const { day, hour, minute, second } = useCountdown(
    '2024-01-01T00:00:00.000Z'
  );

  return (
    <div
      className='App'
      style={{ backgroundImage: `url(${newYearBackgroundImage})` }}
    >
      <div className='container'>
        <Title title='Countdown to 2024' />
        <div className='counter-container'>
          <Counter title='Days' number={day} />
          <Counter title='Hours' number={hour} />
          <Counter title='Minutes' number={minute} />
          <Counter title='Seconds' number={second} />
        </div>
      </div>
    </div>
  );
}
