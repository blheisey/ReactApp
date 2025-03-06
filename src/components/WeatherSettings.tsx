import React from "react";

const WeatherSettings = ({ setUnitTemp, setUnitPrecip }: { setUnitTemp: (value: string) => void; setUnitPrecip: (value: string) => void; }) => {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Weather Settings</h2>

      {/* Temperature Dropdown */}
      <label htmlFor="temp-select">Temperature:</label>
      <select id="temp-select" onChange={(e) => setUnitTemp(e.target.value)}>
        <option value="temp_f">Fahrenheit (°F)</option>
        <option value="temp_c">Celsius (°C)</option>
      </select>

      <br /><br />

      {/* Precipitation Dropdown */}
      <label htmlFor="precip-select">Precipitation:</label>
      <select id="precip-select" onChange={(e) => setUnitPrecip(e.target.value)}>
        <option value="precip_in">Inches (in)</option>
        <option value="precip_mm">Millimeters (mm)</option>
      </select>
    </div>
  );
};

export default WeatherSettings;
