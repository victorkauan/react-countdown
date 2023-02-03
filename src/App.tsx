import { Title } from './components/Title';
import { Counter } from './components/Counter';

import newYearBackgroundImage from './assets/new-year-background.jpg';
import './App.css';

export function App() {
  return (
    <div
      className='App'
      style={{ backgroundImage: `url(${newYearBackgroundImage})` }}
    >
      <div className='container'>
        <Title title='Countdown to 2024' />
        <div className='counter-container'>
          <Counter title='Days' number={0} />
          <Counter title='Hours' number={0} />
          <Counter title='Minutes' number={0} />
          <Counter title='Seconds' number={0} />
        </div>
      </div>
    </div>
  );
}
