import React from "react";

function App() {
  return (
    <>
      <div>
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

      <img src={"consulting_image.svg"} alt="イメージ画像" />

      <address>
        <div>
          <img
            src="https://img.icons8.com/metro/26/000000/phone.png"
            alt="電話のアイコン"
          />
          <p>0120-334-3547</p>
        </div>
        <div>
          <img
            src="https://img.icons8.com/material-rounded/24/000000/important-mail.png"
            alt="メールのアイコン"
          />
          <p>info@greens.com</p>
        </div>
      </address>
    </>
  );
}

export default App;
