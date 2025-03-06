import { IonButton } from "@ionic/react";
import { useState } from "react";

const ListofDays: React.FC = () => {
    const today = new Date();
    const [selectedDate, setSelectedDate] = useState<Date | null>(today);

    // Create an array of the 7 days in the current week
    const weekDates = Array.from({ length: 7 }, (_, i) => {
        const date = new Date(today); // Start with today's date
        date.setDate(today.getDate() + i); // Increment the day
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
                        marginBottom: '10px', // Optional: Adds space between buttons
                    }}
                >
                    {date.toLocaleDateString('en-US', { weekday: 'long' })} {/* Display only the name of the day */}
                </IonButton>
            ))}
        </div>
    );
};

export default ListofDays;
