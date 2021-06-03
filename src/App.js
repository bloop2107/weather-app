import {  } from 'antd'
import 'antd/dist/antd.css'
import axios from 'axios'
import { useState, useEffect} from 'react'
import Weather from './components/Weather/index.js';

function App() {
  
  const [data,setData] = useState([])
  const [weather,setWeather] = useState([])


  useEffect(() => {
      axios.get('http://api.openweathermap.org/data/2.5/weather?id=1568770&units=metric&APPID=45d00c0b4244a41b481a403ef0623df7').then((res) => {
            setData(res.data);
            setWeather(res.data.weather);
      })


      

  }, [])

  

  return (
    <div className="App" style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        fontFamily: "Roboto",
        paddingTop: "150px"
    }}>
        <h1>Weather APP</h1>   
        <Weather data={data} weather={weather}/>
    </div>
  );
}

export default App;
