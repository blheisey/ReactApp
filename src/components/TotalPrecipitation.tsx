import React, { useEffect, useState } from "react";

const TotalPrecip = ({precip}: {precip: any}) => {
  const [totalPrecip, setTotalPrecip] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch(
          `https://api.weatherapi.com/v1/current.json?key=a0a82d9fa2c74de79ef230957250503&q=SantaCruz&&aqi=no&alerts=no`
        );
        const result = await response.json();

        // Extract total precipitation in mm
        const precipitation = result.current[precip];
        setTotalPrecip(precipitation);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchWeatherData();
  }, [precip]);

  return (
    <div>
      <h3>
      Total Precipitation: {totalPrecip !== null ? `${totalPrecip} ${precip === "precip_in" ? "in" : "mm"}` : "Loading..."}
      </h3>
    </div>
  );
};

export default TotalPrecip;
