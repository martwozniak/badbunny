import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <Hero />
      <button
        onClick={() => {
          fetch('http://localhost:3001/data')
            .then((response) => response.json())
            .then((data) => console.log(data));
        }}
      >
        GET SOME DATA
      </button>
    </div>
  );
}

export default App;
