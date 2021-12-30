import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import { useState, useEffect } from 'react';


function App() {
  const [data, setData] = useState([]);
  const [searchString, setSearchString] = useState('');
  const [lastSearch, setLastSearch] = useState('');
  const searchOptions = {
    key: process.env.REACT_APP_WEATHER_KEY,
    api: `http://api.openweathermap.org/data/2.5/weather?q=${searchString}&units=imperial&appid=`,
  };

  useEffect(() => {
    getWeather();
  }, []);

  const getWeather = () => {
    const url = `${searchOptions.api}${searchOptions.key}`;
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        console.log(res);
        setLastSearch(searchString);
        setSearchString('');
      })
      .catch(console.error());
  };
  function handleChange(e) {
    setSearchString(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    getWeather(searchString);
  }


  return (
    <div className='App'>
      <Header
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        searchString={searchString}
      />
      <Main data={data} />
    </div>
  );
}

export default App;
