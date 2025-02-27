import { IonButton } from "@ionic/react";

const CalendarDate: React.FC<{ date: Date; onClick: () => void; isSelected: boolean }> = ({ date, onClick, isSelected }) => {
    const today = new Date();
    const isToday = today.toDateString() === date.toDateString();

    return (
        <div style={{ textAlign: "center" }}>
            <div style={{ fontWeight: "bold" }}>
                    {date.toLocaleDateString("en-US", { weekday: "long" }).charAt(0)}
            </div>
            <IonButton
                onClick={onClick}
                fill="clear"
                shape="round"
            >
                <div style={{ 
                    color: isToday ? "blue" : "black", 
                    fontWeight: isToday ? "bold" : "normal" 
                }}>
                    {date.getDate()}
                </div>
            </IonButton>
            {isSelected && (  
                <div style={{ marginTop: "5px", fontSize: "14px" }}>
                    {date.toLocaleDateString("en-US", {
                        weekday: "long",
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                    })}
                </div>
            )}
        </div>
    );
};

export default CalendarDate;