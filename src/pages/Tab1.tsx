import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { IonCard,IonCardContent,IonCardHeader,IonCardSubtitle,IonCardTitle,IonThumbnail} from '@ionic/react';
import { IonItem, IonLabel, IonList } from '@ionic/react';
import { IonButton } from '@ionic/react';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen={true} className="ion-padding">

        <div className="ion-text-center ion-justify-content-center ion-align-items-center ion-margin-bottom ion-margin-vertical">
          <h1>
            Missoula <br/>
            20° <br/>
            Sunny <br/>
            H:22° L:2° <br/>
            Feels like: 16° 
          </h1>
        </div>
        <IonCard>
          <IonCardContent>
            <p>Sunny conditions expected until around 2pm.</p>
            <Swiper
              spaceBetween={0}
              slidesPerView={4}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide>
                Now <br/>
                ☀️ <br/>
                20°
              </SwiperSlide>
              <SwiperSlide>
                12:00 <br/>
                ☀️ <br/>
                22°
              </SwiperSlide>
              <SwiperSlide>
                1:00 <br/>
                🌤️ <br/>
                18°
              </SwiperSlide>
              <SwiperSlide>
                2:00 <br/>
                ☁️ <br/>
                17°
              </SwiperSlide>
              <SwiperSlide>
                3:00 <br/>
                ☁️ <br/>
                16°
              </SwiperSlide>
              <SwiperSlide>
                4:00 <br/>
                ☁️ <br/>
                15°
              </SwiperSlide>
              <SwiperSlide>
                5:00 <br/>
                🌧️ <br/>
                14°
              </SwiperSlide>
              <SwiperSlide>
                6:00 <br/>
                🌧️ <br/>
                13°
              </SwiperSlide>
              <SwiperSlide>
                7:00 <br/>
                🌧️ <br/>
                12°
              </SwiperSlide>
              <SwiperSlide>
                8:00 <br/>
                🌧️ <br/>
                11°
              </SwiperSlide>
              <SwiperSlide>
                9:00 <br/>
                🌧️ <br/>
                10°
              </SwiperSlide>
              <SwiperSlide>
                10:00 <br/>
                🌧️ <br/>
                9°
              </SwiperSlide>
              <SwiperSlide>
                11:00 <br/>
                🌧️ <br/>
                8°
              </SwiperSlide>
              <SwiperSlide>
                12:00 <br/>
                🌧️ <br/>
                7°
              </SwiperSlide>
              <SwiperSlide>
                1:00 <br/>
                🌧️ <br/>
                6°
              </SwiperSlide>
              <SwiperSlide>
                2:00 <br/>
                🌧️ <br/>
                5°
              </SwiperSlide>
              <SwiperSlide>
                3:00 <br/>
                🌧️ <br/>
                4°
              </SwiperSlide>
              <SwiperSlide>
                4:00 <br/>
                🌧️ <br/>
                3°
              </SwiperSlide>
              <SwiperSlide>
                5:00 <br/>
                🌧️ <br/>
                2°
              </SwiperSlide>
              <SwiperSlide>
                6:00 <br/>
                🌧️ <br/>
                1°
              </SwiperSlide>
              <SwiperSlide>
                7:00 <br/>
                🌧️ <br/>
                0°
              </SwiperSlide>
              <SwiperSlide>
                8:00 <br/>
                🌧️ <br/>
                -1°
              </SwiperSlide>
              <SwiperSlide>
                9:00 <br/>
                🌧️ <br/>
                -2°
              </SwiperSlide>
              <SwiperSlide>
                10:00 <br/>
                🌧️ <br/>
                -3°
              </SwiperSlide>
              <SwiperSlide>
                11:00 <br/>
                🌧️ <br/>
                -4°
              </SwiperSlide>

            </Swiper>
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonList inset={true}>
            <IonItem>
              <IonLabel>7 Day Forecast</IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>
              <IonButton className="custom-button" fill="clear" routerLink="./Tab2">Today ☀️</IonButton>
              </IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>
              <IonButton className="custom-button" fill="clear" routerLink="./Tab2">Tuesday 🌧️</IonButton>
              </IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>
              <IonButton className="custom-button" fill="clear" routerLink="./Tab2">Wednesday ☁️</IonButton>
              </IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>
              <IonButton className="custom-button" fill="clear" routerLink="./Tab2">Thursday ☁️</IonButton>
              </IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>
              <IonButton className="custom-button" fill="clear" routerLink="./Tab2">Friday ☁️</IonButton>
              </IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>
              <IonButton className="custom-button" fill="clear" routerLink="./Tab2">Saturday 🌤️</IonButton>
              </IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>
              <IonButton className="custom-button" fill="clear" routerLink="./Tab2">Sunday 🌤️</IonButton>
              </IonLabel>
            </IonItem>
          </IonList>
        </IonCard>
        

        <IonCard>
          <IonCardContent>
            Air Quality <br/>
            25 <br/>
            Good
          </IonCardContent>
        </IonCard>

        <div style={{ display: 'flex', justifyContent: 'space-between'}}>
          <IonCard style={{ width: '50%' }}>
            <IonCardHeader>
              <IonCardTitle>Feels Like</IonCardTitle>
              <br/>
              <IonCardSubtitle>
                16° <br/>
                The wind is making it feel colder.
              </IonCardSubtitle>
            </IonCardHeader>
          </IonCard>

            <IonCard style={{ width: '50%' }}>
              <IonCardHeader>
              <IonCardTitle>UV Index</IonCardTitle>
              <br/>
                <IonCardSubtitle>
                  1 <br/>
                  Low
                </IonCardSubtitle>
              </IonCardHeader>
            </IonCard>
        </div>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Wind</IonCardTitle>
            <br/>
            <IonCardSubtitle>
                Wind 5 MPH <br/>
                Gusts 10 MPH <br/>
                Direction 279° W
            </IonCardSubtitle>
          </IonCardHeader>
        </IonCard>

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <IonCard style={{ width: '50%' }}>
            <IonCardHeader>
              <IonCardTitle>Sunset</IonCardTitle>
              <br/>
              <IonCardSubtitle>
                5:32 pm <br/>
                Sunrise: 7:32 am
              </IonCardSubtitle>
            </IonCardHeader>
          </IonCard>

          <IonCard style={{ width: '50%' }}>
            <IonCardHeader>
              <IonCardTitle>Precipitation</IonCardTitle>
              <br/>
                <IonCardSubtitle>
                  2" <br/>
                  Today <br/>
                  Next expected is 0.2" Wednesday.
                </IonCardSubtitle>
            </IonCardHeader>
          </IonCard>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <IonCard style={{ width: '50%' }}>
            <IonCardHeader>
              <IonCardTitle>Visibility</IonCardTitle>
              <br/>
              <IonCardSubtitle>
                22 mi <br/>
                Perfectly clear view.
              </IonCardSubtitle>
            </IonCardHeader>
          </IonCard>

          <IonCard style={{ width: '50%' }}>
            <IonCardHeader>
              <IonCardTitle>Humidity</IonCardTitle>
              <br/>
                <IonCardSubtitle>
                  30%
                </IonCardSubtitle>
            </IonCardHeader>
          </IonCard>
        </div>

        <IonCard>
          <IonHeader>
            <IonCardTitle>New Moon</IonCardTitle>
            <br/>
            <IonCardSubtitle>
              Illumination 0% <br/>
              Moonset 6:32 pm <br/>
              Next Full Moon 14 days
            </IonCardSubtitle>
          </IonHeader>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
