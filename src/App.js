import React, { useState } from 'react';

const App = () => {

const[temperatureValue,setTemperatureValue] = useState(10);
const [tempColor,setTempColor] = useState("cold")

function increaseTemperature() { 
  if(temperatureValue === 30) return;


  const newTemp = temperatureValue+1

  const color = newTemp >= 15 ? "hot" : "cold"

  setTempColor(color)

  setTemperatureValue(newTemp)

}

function decreaseTemperature() { 
  if(temperatureValue === 0) return;


  const newTemp = temperatureValue-1
  const color = newTemp < 15 ? "cold" : "hot"

  setTempColor(color)
  setTemperatureValue(newTemp )
}

 

  return (
    <div className='app-container'>
      <div className='temperature-display-container'>
        <div className={`temperature-display ${tempColor}`}>{temperatureValue}°C</div>
      </div>
    <div className="button-container">
      <button onClick={increaseTemperature}>+</button>
      <button onClick={decreaseTemperature}>-</button>
    </div>

    </div>
  )
}

export default App