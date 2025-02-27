import { IonButton } from "@ionic/react";
import { useState } from "react";

const ListofDays: React.FC = () => {

    const today = new Date();
    const [selectedDate, setSelectedDate] = useState<Date | null>(today);
    
    const weekDates = Array.from({ length: 7 }, (_, i) => {
        const date = new Date();
        date.setDate(today.getDate() + i);
        return date;
    });

    return (
    <div>
        {weekDates.map((date, index) => (
            <IonButton>
                <Date>
                    key={index}
                    date={date}
                    onClick={() => setSelectedDate(date)}
                    isSelected={selectedDate?.toDateString() === date.toDateString()}
                </Date>
            </IonButton>
        
        ))}
    </div>
    );
}