import React from 'react';
import Button from './components/button';
import './App.css';

function App() {
  return (
    <div className="App">
      <Button className='btn dd'>button</Button>
      <Button className='btn ff' id='mybtn'>按钮</Button>
      <Button className='btn' style={{'color':'red'}}>please touch me</Button>
    </div>
  );
}

export default App;
