
import './App.css';
import Search from './Search';
import Weather from './Weather';
import Forecast from "./Forecast"
import Opensource from './Opensource';

function App() {
  return (
    <div className="App">
      <header className="App-header">
     <Weather />
     <Search />
     <Forecast />
    <Opensource />
       
      </header>
    </div>
  );
}

export default App;
