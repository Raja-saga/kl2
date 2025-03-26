import React from "react";
import { format, startOfMonth, endOfMonth, eachDayOfInterval } from "date-fns";

function Calendar({ events }) {
  const today = new Date();
  const monthStart = startOfMonth(today);
  const monthEnd = endOfMonth(today);

  const daysInMonth = eachDayOfInterval({
    start: monthStart,
    end: monthEnd,
  });

  const getEventsForDate = (date) => {
    return events.filter((event) => event.date === format(date, "yyyy-MM-dd"));
  };

  return (
    <div className="calendar">
      {daysInMonth.map((day) => (
        <div key={day} className="day">
          <h4>{format(day, "dd MMM")}</h4>
          {getEventsForDate(day).map((event, idx) => (
            <p key={idx} className="event">
              {event.title}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Calendar;
