import { useState } from "react";
import { users } from "../../usersMock";
import "./index.css";

const Login = ({ setSection }) => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mail, setMail] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    users.filter((user) => {
      if (user.username === name && user.email === mail) {
        setSection();
      }
    });
  };

  const onInputChange = (e) => {
    switch (e.target.name) {
      case "name":
        setName(e.target.value);
        break;
      case "lastName":
        setLastName(e.target.value);
        break;
      case "mail":
        setMail(e.target.value);
        break;
    }
  };

  return (
    <div className="Login-container">
      <form onSubmit={onSubmit} className="Login">
        <h1 className="Login__title">Login</h1>
        <input
          type="text"
          placeholder="Enter your name"
          name="name"
          value={name}
          onChange={onInputChange}
        />
        <input
          type="text"
          placeholder="Enter your last name"
          name="lastName"
          value={lastName}
          onChange={onInputChange}
        />
        <input
          type="mail"
          placeholder="Enter your email"
          name="mail"
          value={mail}
          onChange={onInputChange}
        />
        <input onClick={onSubmit} type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Login;
