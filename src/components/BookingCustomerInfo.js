import { useState} from 'react';
import "./bookingcustomerinfo.css";

const PasswordError = () => {
  return (
    <p className="FieldError">Password should have at least 4 characters</p>
  );
};

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const BookingCustomerInfo = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [telephone, setTelephone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState({
    value: "",
    isTouched: false,
  });
  const [specialReq, setSpecialReq] = useState("");

  const getIsFormValid = () => {
    return (
      firstName &&
      lastName &&
      telephone &&
      validateEmail(email) &&
      password.value.length >= 4
    );
  };

  const clearForm = () => {
    setFirstName("");
    setLastName("");
    setTelephone("");
    setEmail("");
    setPasswrod({
      value: "",
      isTouched: false,
    });
    setSpecialReq("");
  };

    const handleSubmit =(e) => {
      e.preventDefault();
      clearForm();
    }

  return (
    <div className="BookingCustomerInfo">
        <form style={{ display: "grid", maxWidth: 200, gap: 20}} onSubmit={handleSubmit}>
          <fieldset>
            <h2>Tell us who you are</h2>

            <div className="Field">
              <label htmlFor="firstName">First Name:<sup>*</sup></label>
              <input
                type="text"
                placeholder="First Name"
                id="firstName"
                name="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                />
              </div>

            <div className="Field">
              <label htmlFor="lastName">Last Name:<sup>*</sup></label>
               <input
                 type="text"
                 placeholder="Last Name"
                 id="lastName"
                 name="lastName"
                 value={lastName}
                 onChange={(e) => setLastName(e.target.value)}
                 />
            </div>

            <div className="Field">
              <label htmlFor="telephone">Phone Number:<sup>*</sup></label>
              <input
                type="tel"
                id="telephone"
                name="telephone"
                value={telephone}
                onChange={(e) => setTelephone(e.target.value)}
                />
            </div>

            <div className="Field">
              <label htmlFor="email">Email:<sup>*</sup></label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <div className="Field">
              <label htmlFor="password">Password:<sup>*</sup></label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
            </div>

            <button type="submit" disabled={!getIsFormValid()} defaultValue="Continue">
              Continue
            </button>

          </fieldset>
        </form>
    </div>
  );
}

export default BookingCustomerInfo