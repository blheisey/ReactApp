import React, { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";






const PrecipGraph = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch(
          `https://api.weatherapi.com/v1/forecast.json?key=${import.meta.env.VITE_API_KEY}&q=Santacruz&aqi=no&alerts=no`
        );
        const result = await response.json();
        
        
        const hourlyData = result.forecast.forecastday[0].hour
        .filter((_: any, index: number) => index % 2 === 0) 
        .map((hour: any) => {
          const date = new Date(hour.time);
          let hours = date.getHours();
          const ampm = hours >= 12 ? "PM" : "AM";
          hours = hours % 12 || 12; 
      
          return {
            hour: `${hours} ${ampm}`, 
            precip: hour.chance_of_rain,
          };
        });
        setData(hourlyData);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchWeatherData();
  }, []);

  return (
    <div className="graph-container">
        <ResponsiveContainer width="95%" height={300}>
        <LineChart data={data} margin={{ top: 20, right: 30, left: 30, bottom: 20 }}>
            <XAxis dataKey="hour" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="precip" stroke="#ff7300" />
        </LineChart>
        </ResponsiveContainer>
    </div>
  );
};

export default PrecipGraph;
