import { useEffect } from 'react'
import { Card } from 'antd'
import './style.css'

const { Meta } = Card;

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
                        hoverable
                        style={{ 
                            width: 240,
                            
                        }}
                        cover={<img 
                            style={{
                                width:"50%",
                            }} 
                            alt="example" 
                            src={`http://openweathermap.org/img/wn/${item.icon}@2x.png`} />}
                    >
                        <Meta 
                            title={(data.name) === 'Turan' ? 'Da Nang' : data.name} 
                            description={item.main} 
                        />
                    </Card>
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
