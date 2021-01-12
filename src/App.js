
import './App.css';
import Search from './Search';
import Weather from './Weather';
import Forecast from "./Forecast"
import Opensource from './Opensource';

export default function App() {
  return (
    <div className="App">
     <div className="container"> 
     <Weather />
     <Search />
     <Forecast />
    <Opensource />
       
   </div>
    </div>
  );
}


