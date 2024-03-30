import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    streetAdress: "",
    City: "",
    State: "",
    zipCode: "",
    Comments: false,
    Candidates: false,
    Offers: false,
    notification: "",
  });

  function changeHandler(event) {
    setFormData((prevState) => {
      const { name, value, checked, type } = event.target;
      return {
        ...prevState,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function submitData(event) {
    event.preventDefault();

    console.log(formData);
  }

  return (
    <>
      <div className="container">
        <form className="form" onSubmit={submitData}>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              onChange={changeHandler}
              value={formData.firstName}
            />
          </div>

          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              onChange={changeHandler}
              value={formData.lastName}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={changeHandler}
              value={formData.email}
            />
          </div>

          <div className="form-group">
            <label htmlFor="country">Country</label>
            <select
              name="country"
              id="country"
              onChange={changeHandler}
              value={formData.country}
            >
              <option value=""></option>
              <option value="India">India</option>
              <option value="USA">USA</option>
              <option value="Canada">Canada</option>
              <option value="Brazil">Brazil</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="streetAdress">Street Address</label>
            <input
              type="text"
              id="streetAdress"
              name="streetAdress"
              onChange={changeHandler}
              value={formData.streetAdress}
            />
          </div>

          <div className="form-group">
            <label htmlFor="City">City</label>
            <input
              type="text"
              id="City"
              name="City"
              onChange={changeHandler}
              value={formData.City}
            />
          </div>

          <div className="form-group">
            <label htmlFor="State">State</label>
            <input
              type="text"
              id="State"
              name="State"
              onChange={changeHandler}
              value={formData.State}
            />
          </div>

          <div className="form-group">
            <label htmlFor="zipCode">Zip Code</label>
            <input
              type="text"
              id="zipCode"
              name="zipCode"
              onChange={changeHandler}
              value={formData.zipCode}
            />
          </div>

          <div className="checkbox-group">
            <input
              type="checkbox"
              name="Comments"
              id="Comments"
              checked={formData.Comments}
              onChange={changeHandler}
            />
            <label htmlFor="Comments">Comments</label>
          </div>

          <div className="checkbox-group">
            <input
              type="checkbox"
              id="Candidates"
              name="Candidates"
              onChange={changeHandler}
              value={formData.Candidates}
            />
            <label htmlFor="Candidates">Candidates</label>
          </div>

          <div className="checkbox-group">
            <input
              type="checkbox"
              id="Offers"
              name="Offers"
              onChange={changeHandler}
              value={formData.Offers}
            />
            <label htmlFor="Offers">Offers</label>
          </div>

          <div className="radio-group">
            <input
              type="radio"
              value="Everyone"
              id="everyone"
              name="notification"
              onChange={changeHandler}
              checked={formData.notification === "Everyone"}
            />
            <label htmlFor="everyone">Everyone</label>

            <input
              type="radio"
              value="Someone"
              id="someone"
              name="notification"
              onChange={changeHandler}
              checked={formData.notification === "Someone"}
            />
            <label htmlFor="someone">Someone</label>

            <input
              type="radio"
              value="None"
              id="none"
              name="notification"
              onChange={changeHandler}
              checked={formData.notification === "None"}
            />
            <label htmlFor="none">None</label>
            <br />
            <br />
            <input type="submit" />
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
