import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab2.css';
import 'swiper/css';
import WeekCalendar from '../components/WeekCalendar';



const Tab2: React.FC = () => {
  return (
      <IonPage>
        <IonContent fullscreen>
          <IonHeader collapse="condense">
            <IonToolbar>
            </IonToolbar>
          </IonHeader>
        <WeekCalendar />
        </IonContent>
      </IonPage>
  );
};

export default Tab2;
