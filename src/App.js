import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Technology from './components/Technology/Technology';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Technology />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
