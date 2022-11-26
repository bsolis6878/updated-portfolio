import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Project from './components/Project';
import Footer from './components/Footer';

function App() {

  const [currentlySelected, setCurrentlySelected] = useState('About Me');

  return (
    <>
      <Header setCurrentlySelected={setCurrentlySelected} />
      <Project currentlySelected={currentlySelected} />
      <Footer />
    </>
  );
}

export default App;