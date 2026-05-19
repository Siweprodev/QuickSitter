import { useState } from "react";

function Booking() {
  const [hours, setHours] = useState(1);
  const [rate] = useState(80);

  const total = hours * rate;

  return (
    <div className="booking-container">
      <h2>Book a Babysitter</h2>

      <label>Select Date</label>
      <input type="date" />

      <label>Number of Hours</label>
      <input
        type="number"
        min="1"
        value={hours}
        onChange={(e) => setHours(e.target.value)}
      />

      <h3>Rate: R{rate}/hour</h3>

      <h2>Total: R{total}</h2>

      <button>Confirm Booking</button>
    </div>
  );
}

export default Booking;