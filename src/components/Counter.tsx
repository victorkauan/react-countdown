interface CounterProps {
  title: string;
  number: number;
}

export function Counter({ title, number }: CounterProps) {
  return (
    <div className='counter'>
      <p className='counter-number'>{number}</p>
      <h3 className='counter-text'>{title}</h3>
    </div>
  );
}
