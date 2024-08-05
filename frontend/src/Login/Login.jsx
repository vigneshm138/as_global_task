import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = ({ setLogin }) => {
  const [loginDatas, setLoginDatas] = useState({
    mail: "",
    password: "",
  });

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setLoginDatas((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    console.log(loginDatas);
    const response = await axios.post(
      "http://localhost:2001/users/getUser",
      loginDatas
    );
    if (response.data.sta) {
      toast.success(response.data.message);
      setLogin(false);
    } else {
      toast.error(response.data.message);
    }
  };

  return (
    <div className="login_container">
      <div className="login_form">
        <form onSubmit={handleSubmitLogin}>
          <div>
            <h3>login</h3>
            <span>
              use for demo mail: <span> global@gmail.com</span> ,pass:{" "}
              <span>global</span>
            </span>
          </div>
          <div className="login_inputs">
            <div>
              <label>mail id</label>
              <input
                type="email"
                name="mail"
                required
                placeholder="enter your mail id"
                value={loginDatas.mail}
                onChange={handleInputs}
              />
            </div>
            <div>
              <label>password</label>
              <input
                type="password"
                required
                name="password"
                placeholder="enter your password"
                value={loginDatas.password}
                onChange={handleInputs}
              />
            </div>
          </div>
          <button type="submit">login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
