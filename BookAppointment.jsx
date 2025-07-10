import React, { useState } from 'react';

const BookAppointment = () => {
  const [appointment, setAppointment] = useState({
    name: '', doctor: '', date: '', time: ''
  });

  const handleChange = e => {
    setAppointment({ ...appointment, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    alert("Appointment booked!");
  };

  return (
    <div className="form-container">
      <h2>Book Appointment</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" value={appointment.name} onChange={handleChange} placeholder="Your Name" />
        <select name="doctor" value={appointment.doctor} onChange={handleChange}>
          <option value="">Select Doctor</option>
          <option>Dr. Smith</option>
          <option>Dr. Mehta</option>
        </select>
        <input type="date" name="date" value={appointment.date} onChange={handleChange} />
        <input type="time" name="time" value={appointment.time} onChange={handleChange} />
        <button type="submit">Book</button>
      </form>
    </div>
  );
};

export default BookAppointment;
