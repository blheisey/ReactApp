import { IonCardTitle, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState } from "react";
import WeatherSettings from '../components/WeatherSettings';
import './Tab2.css';
import 'swiper/css';
import WeekCalendar from '../components/WeekCalendar';
import TempGraph from '../components/TemperatureGraph';
import PrecipGraph from '../components/PrecipitationGraph';
import TotalPrecip from '../components/TotalPrecipitation';
import { IonCard } from '@ionic/react';



const Tab2: React.FC = () => {
  const [unitTemp, setUnitTemp] = useState("temp_f");  // Default Fahrenheit
  const [unitPrecip, setUnitPrecip] = useState("precip_in"); // Default Inches

  return (
      <IonPage>
        <IonContent fullscreen>
          <IonHeader collapse="condense">
            <IonToolbar>
            </IonToolbar>
          </IonHeader>
        <WeekCalendar />
        <WeatherSettings setUnitTemp={setUnitTemp} setUnitPrecip={setUnitPrecip} />
        <TempGraph temp={unitTemp} />
        <PrecipGraph />
        <IonCard>
         <TotalPrecip precip = {unitPrecip}/> 
        </IonCard>
        </IonContent>
      </IonPage>
  );
};

export default Tab2;
