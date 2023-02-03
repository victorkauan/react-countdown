import { Title } from './components/Title';

export function App() {
  return (
    <div className='App'>
      <div className='container'>
        <Title title='Countdown to 2024' />
        <div className='counter-container'>
          <p>2 days</p>
        </div>
      </div>
    </div>
  );
}
