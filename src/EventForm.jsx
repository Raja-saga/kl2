import React, { useState } from "react";

function EventForm({ addEvent }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && date) {
      addEvent({ title, date });
      setTitle("");
      setDate("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="event-form">
      <input
        type="text"
        placeholder="Event Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button type="submit">Add Event</button>
    </form>
  );
}

export default EventForm;
