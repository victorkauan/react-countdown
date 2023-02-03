import './Title.css';

interface TitleProps {
  title: string;
}

export function Title({ title }: TitleProps) {
  return <h1 className='title'>{title}</h1>;
}
