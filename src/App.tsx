import { Route, Routes } from '@solidjs/router';
import { Component } from 'solid-js';
import Home from './pages/Home';

const App: Component = () => {
  return (
    <div class='h-screen w-screen bg-primary overflow-hidden'>
      <Routes>
        <Route path="/" component={Home} />
      </Routes>
    </div>
  )
};

export default App;
