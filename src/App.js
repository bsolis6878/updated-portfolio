import './App.css';
import Header from './components/Header';
import Project from './components/Project';
import Footer from './components/Footer';

function App() {

  const [currentlySelected, setCurrentlySelected] = useState('');

  return (
    <div>
      <Header
        currentlySelected={currentlySelected}
        setCurrentlySelected={setCurrentlySelected}
        />
      <Project
        currentlySelected={currentlySelected}
        setCurrentlySelected={setCurrentlySelected}
        />
      <Footer />
    </div>
  );
}

export default App;