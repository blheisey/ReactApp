import React, { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import "./TemperatureGraph.css";




const TempGraph = ({ temp}: { temp: string}) => {
  const [data, setData] = useState([]);
  

  useEffect(() => {
    const location = "Santacruz";
    const fetchWeatherData = async () => {
      try {
        const response = await fetch(
          `https://api.weatherapi.com/v1/forecast.json?key=a0a82d9fa2c74de79ef230957250503&q=${location}&aqi=no&alerts=no`
        );
        const result = await response.json();
        
        // Extract hourly data and format it
        const hourlyData = result.forecast.forecastday[0].hour
        .filter((_: any, index: number) => index % 2 === 0) // Take every 2nd hour
        .map((hour: any) => {
          const date = new Date(hour.time);
          let hours = date.getHours();
          const ampm = hours >= 12 ? "PM" : "AM";
          hours = hours % 12 || 12; // Convert 0 to 12 and 13-23 to 1-11
      
            return {
            hour: `${hours} ${ampm}`, // Convert to 12-hour format
            temperature: hour[temp] // Use the selected temperature unit
            };
        });
        setData(hourlyData);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchWeatherData();
  }, [temp]);

  return (
    <div className="graph-container">
        <ResponsiveContainer width="95%" height={300}>
        <LineChart data={data} margin={{ top: 20, right: 30, left: 30, bottom: 20 }}>
            <XAxis dataKey="hour" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="temperature" stroke="#ff7300" />
        </LineChart>
        </ResponsiveContainer>
    </div>
  );
};

export default TempGraph;
