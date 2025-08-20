import React from 'react'
import './ToggleSwitch.css'; // Assuming you have a CSS file for styles

const ToggleSwitch = () => {
    const [isOn, setIsOn] = React.useState(false);

    const toggleSwitch = () => {
        setIsOn(!isOn);
    };
  return (
    <div>
        <div className={'outer'} onClick={toggleSwitch}>

            <div className={`inner ${isOn ? "on" : "off"}`}>{isOn ? "ON" : "OFF"}</div>
        </div>
    </div>
  )
}

export default ToggleSwitch
