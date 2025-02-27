import CalendarDate from "./CalendarDate";
import { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


const WeekCalendar: React.FC = () => {
    const today = new Date();
    const [selectedDate, setSelectedDate] = useState<Date | null>(today);

    // Generate the next 7 days
    const weekDates = Array.from({ length: 7 }, (_, i) => {
        const date = new Date();
        date.setDate(today.getDate() + i);
        return date;
    });

    return (
         <Swiper
                      spaceBetween={0}
                      slidesPerView={4}
                      onSlideChange={() => console.log('slide change')}
                      onSwiper={(swiper) => console.log(swiper)}
        >

        

            <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
                {weekDates.map((date, index) => (
                    <SwiperSlide>
                    <CalendarDate
                        key={index}
                        date={date}
                        onClick={() => setSelectedDate(date)}
                        isSelected={selectedDate?.toDateString() === date.toDateString()}
                    />
                    </SwiperSlide>
                ))}
            </div>
        </Swiper>
    );
};

export default WeekCalendar;