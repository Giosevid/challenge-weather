import React from 'react';
import './App.scss';
import WeatherSearch from "./components/WeatherSearch";
import WeatherDetails from "./components/WeatherDetails";
import Error from "./components/Error";


function App() {
  return (
    <div className="App">
      <header>
        <WeatherSearch/>
        <Error/>
        <WeatherDetails/>
      </header>
    </div>
  );
}

export default App;
