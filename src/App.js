import React from 'react';
import Navigation from './components/Navigation'
import './App.css'
import Router from './Router';
// Write imports for Router & BrowserRouter here //

function App() {
  return (
    <div>
      <Navigation />
      <Router />
    </div>
  );
}

export default App;
