import React from "react";
import "./App.css";
import Form from "./compornents/Form/Form";

function App() {
  return (
    <div>
      <div className="logo">
        <h1>Greens</h1>
      </div>

      <nav>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Services</li>
          <li>Contact Us</li>
        </ul>
      </nav>

      <div className="explanation">
        <h1>Contact Us</h1>
        <p>
          If you have any questions, please fill out the form here. Finally,
          click the send button. A representative will contact you within 24
          hours.
        </p>
      </div>

      <img src={"consulting_image.svg"} alt="イメージ画像" />

      <address>
        <div className="tel">
          <img
            src="https://img.icons8.com/metro/26/000000/phone.png"
            alt="電話のアイコン"
          />
          <p>0120-334-3547</p>
        </div>

        <div className="mail">
          <img
            src="https://img.icons8.com/material-rounded/24/000000/important-mail.png"
            alt="メールのアイコン"
          />
          <p>info@greens.com</p>
        </div>
      </address>

      <Form />
    </div>
  );
}

export default App;
