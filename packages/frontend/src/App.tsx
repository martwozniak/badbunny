import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <Hero />
      <div className="w-full min-h-screen bg-slate-900 py-8 px-4">
        <span className="text-gray-300 text-3xl font-bold">
          Claim your extra 300 000 points.
        </span>
      </div>
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
