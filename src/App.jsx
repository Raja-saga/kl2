import React, { useState } from "react";
import Calendar from "./Calendar";
import EventForm from "./EventForm";
import "./App.css";

function App() {
  const [events, setEvents] = useState([]);

  const addEvent = (newEvent) => {
    setEvents([...events, newEvent]);
  };

  return (
    <div className="app">
      <h1>Academic Calendar</h1>
      <EventForm addEvent={addEvent} />
      <Calendar events={events} />
    </div>
  );
}

export default App;
