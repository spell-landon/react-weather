import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getWeather();
  }, []);

  const getWeather = () => {
    const url = `	http://musicbrainz.org/ws/2/artist/5b11f4ce-a62d-471e-81fc-a69a8278c7da?fmt=json`;
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        console.log(data);
      })
      .catch(console.error());
  };

  if (!data) {
    return null;
  }
  return (
    <div className='App'>
      <Header />
      <Main />
    </div>
  );
}

export default App;
