/*
  File Name: contact.jsx
  Student Name: Xiaomin Guo
  Student ID: 301495284
  Date: February 2, 2025  
*/
import "../src/index.css";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  const navigate = useNavigate(); // For redirection to Home

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className="contact-container">
      {/* contact information */}
      <div className="contact-info">
        <h2>Contact Me</h2>
        <p>
          <strong>Name: </strong>Xiaomin Guo
        </p>
        <p>
          <strong>Email: </strong>xguo51@my.centennialcollege.ca
        </p>
        <p>
          <strong>Phone: </strong>(647)212-0608
        </p>
      </div>
      {/* contact form */}
      <div className="contact-form">
        <h2>Send Email to me</h2>
        <form id="contact-form-body" onSubmit={handleSubmit}>
          <label htmlFor="myFName"> *First Name: </label>
          <input
            type="text"
            id="myFName"
            name="myFName"
            required="required"
            autoFocus
          />
          <br /> <br />
          <label htmlFor="myLName"> *Last Name: </label>
          <input type="text" id="myLName" name="myLName" required="required" />
          <br /> <br />
          <label htmlFor="myEmail"> *Email Address: </label>
          <input type="email" id="myEmail" name="myEmail" required="required" />
          <br /> <br />
          <label htmlFor="myMessage"> *Message: </label>
          <textarea id="myMessage" name="myMessage" rows="15"></textarea>
          <br /> <br />
          {/* form submit button */}
          <button type="submit" className="contact-form-submit">
            Submit
          </button>
          <br />
        </form>
        <br></br>
      </div>
    </div>
  );
}
