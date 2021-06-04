import { useEffect } from 'react'
import { Card } from 'antd'
import './style.css'


const Weather = ({weather,data}) => {

    useEffect(() => {
        console.log(data)        
    },[data])

    return (
        <>
            {
                weather.map((item,index) => 
                    <Card 
                        key={index}
                        style={{ width: 300, textTransform: 'uppercase' }}
                        hoverable
                        title={(data.name === "Turan") ? "Da Nang" : data.name}
                    >
                        <div 
                            className="weather-info"
                            style={{display: "flex", alignItems: 'center'}}
                        >
                            <img alt="example" src={`http://openweathermap.org/img/wn/${item.icon}@2x.png`} />
                            <h3>{item.main}</h3>
                        </div>
                        <div
                            className="temperature-info"
                            style={{
                                display: "flex",
                                alignItems: 'center',
                                justifyContent: 'space-between'
                            }}
                        >
                            <p style={{fontSize: "50px"}}>{Math.round(data.main.feels_like)+"°"}</p>
                            <div className="temperature-range">
                                <p>{Math.round(data.main.temp_max) + "°C"}</p>
                                <p>{Math.round(data.main.temp_min) + "°C"}</p>
                            </div>
                        </div>
                    </Card>
                    // <Card
                    //     key={index}
                    //     hoverable
                    //     style={{ 
                    //         width: 240,
                            
                    //     }}
                    //     cover={<img 
                    //         style={{
                    //             width:"50%",
                    //         }} 
                    //         alt="example" 
                    //         src={`http://openweathermap.org/img/wn/${item.icon}@2x.png`} />}
                    // >
                    //     <Meta 
                    //         title={(data.name) === 'Turan' ? 'Da Nang' : data.name} 
                    //         description={item.main} 
                    //     />
                    // </Card>
                )
            }
            
        </>
        // <ul>
        //     <>
        //         {
        //             weather.map((item,index) => 
        //                 <li key={index}>{item.main}</li>
        //             )
        //         }
        //     </>
        // </ul>
    )
}

export default Weather
