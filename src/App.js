import {  } from 'antd'
import 'antd/dist/antd.css'
import axios from 'axios'
import { useState, useEffect} from 'react'
import Weather from './components/Weather/index.js';
import SelectCountry from './components/SelectCountry/index.js';



function App() {
  
  const [data,setData] = useState([])
  const [weather,setWeather] = useState([])
  const [countries,setCountry] = useState([])
  const [countryId,setCountryId] = useState('1583992')


  useEffect(() => {
      //GET WEATHER
      axios.get(`http://api.openweathermap.org/data/2.5/weather?id=${countryId}&units=metric&APPID=45d00c0b4244a41b481a403ef0623df7`).then((res) => {
            setData(res.data);
            setWeather(res.data.weather);
      }).catch((err) => console.log('error'))

      //Get countries
      axios({
          method: 'get',
          url: "https://parseapi.back4app.com/classes/City?limit=661&keys=name,country,countryCode,cityId&where=true",
          headers: {
            'X-Parse-Application-Id': 'kysTM8sxjGAzL9kRFu5SbI3zRSZgRvzj6Feb9CaI',
            'X-Parse-Master-Key': 'saeclF3NoaHo0ETX9uN88H85xT2KAY4QCHNp4n1F',
          }
      }).then((res) => {
          setCountry(res.data.results);
      })

  }, [countryId])
  

  //Country select 
  const countrySelect = (countryId) => {
    setCountryId(countryId)
    console.log(countryId);
  }
  

  return (
    <div className="App" style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        fontFamily: "Montserrat",
        paddingTop: "150px"
    }}>
        <h1 style={{color: "white", fontWeight: "bold"}}>WEATHER APP</h1>   
        <SelectCountry countries={countries} countrySelect={countrySelect} />
        <Weather data={data} weather={weather}/>
    </div>
  );
}

export default App;
