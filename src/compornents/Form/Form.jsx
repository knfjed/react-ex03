import React, { useState } from "react";

export default function Form({ name, email, message }) {
  const [_name, setName] = React.useState(name);
  const [_email, setEmail] = React.useState(email);
  const [_message, setMessage] = React.useState(message);

  return (
    <>
      <form>
        <label>Name</label>
        <br />
        <input
          type="text"
          value={_name}
          // onChange={(event) => setName(event.currentTarget.value)}
        ></input>
      </form>

      <form>
        <label>Email</label>
        <br />
        <input
          type="text"
          value={_email}
          // onChange={(event) => setEmail(event.currentTarget.value)}
        ></input>
      </form>

      <form>
        <label>Message</label>
        <br />
        <input
          type="text"
          value={_message}
          // onChange={(event) => setMessage(event.currentTarget.value)}
        ></input>
      </form>

      <button
        onClick={() =>
          console.log("data", {
            name: setName,
            email: setEmail,
            message: setMessage,
          })
        }
      >
        SUBMIT
      </button>
    </>
  );
}
