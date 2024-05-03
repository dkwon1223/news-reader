import React from 'react';
import Nav from './components/Nav';
import Home from './components/Home';

const App = () => {
  return (
    <main className='w-screen h-screen flex flex-col'>
      <Nav />
      <Home />
    </main>
  )
}

export default App;
