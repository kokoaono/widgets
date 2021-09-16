import React from 'react';
import Accordion from './components/Accordion';

const items = [
  {
    title: 'What is React?',
    content: 'React is a front end javascript framework'
  },
  {
    title: 'Why use Rect?',
    content: 'React is a favourite JS library among engineers'
  },
  {
    title: 'test',
    content: 'result'
  }
];


const App = () => {
  return (
    <div>
      <Accordion items={items} />
    </div>
    
  ) 
};

export default App;