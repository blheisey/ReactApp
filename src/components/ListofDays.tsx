import { IonButton } from "@ionic/react";
import { useState } from "react";

const ListofDays: React.FC = () => {
    const today = new Date();
    const [selectedDate, setSelectedDate] = useState<Date | null>(today);


    const weekDates = Array.from({ length: 7 }, (_, i) => {
        const date = new Date(today); 
        date.setDate(today.getDate() + i); 
        return date;
    });

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {weekDates.map((date, index) => (
                <IonButton
                    fill="clear"
                    key={index}
                    onClick={() => setSelectedDate(date)}
                    style={{
                        marginBottom: '10px', 
                    }}
                >
                    {date.toLocaleDateString('en-US', { weekday: 'long' })} 
                </IonButton>
            ))}
        </div>
    );
};

export default ListofDays;
