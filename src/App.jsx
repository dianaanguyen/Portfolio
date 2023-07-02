import React from 'react';
import NavBar from './NavBar';

function App() {
  return (
    <div>
      <NavBar />
      <div className="w-screen h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </div>
    </div>
  );
}

export default App;
