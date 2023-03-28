import React, { useState } from 'react'

import './bookingform.css';

const BookingForm = () => {

    const [formData, setFormData ] =useState({
        date: "",
        time: "",
        guests: "",
        occasion: "",
    })

  return (
    <form style={{ display: "grid", maxWidth: 400, gap: 20 }}>

  <label htmlFor="res-date">Choose date</label>
  <input type="date" id="res-date" />

  <label htmlFor="res-time">Choose time</label>
  <select id="res-time ">
    <option>17:00</option>
    <option>18:00</option>
    <option>19:00</option>
    <option>20:00</option>
    <option>21:00</option>
    <option>22:00</option>
  </select>

  <label htmlFor="guests">Number of guests</label>
  <input type="number" placeholder={1} min={1} max={10} id="guests" />

  <label htmlFor="occasion">Occasion</label>
  <select id="occasion">
    <option>Birthday</option>
    <option>Anniversary</option>
    <option>Engagement</option>
  </select>

  <button type="submit" defaultValue="Make Your reservation">Make Your Reservation</button>
</form>

  )
}

export default BookingForm


/*Using what you already know about events, effects and state in React, update your form's code to keep track of its own state.

    Define a state variable for field in the form.

    Connect each state variable to the form fields using the value and onChange form element attributes.

    The options in the booking time field should be displayed from a list of available times. For now, create a stateful array in the component named availableTimes and use this state variable to populate the time select field options.

Tip: Use the useState function to declare the variable.

Now that the state is connected to the input elements, the form is ready to communicate with an API, a task you may complete in future.
*/