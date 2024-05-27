import { useState } from "react";
import { FaUser, FaEye, FaSync, FaSignInAlt } from "react-icons/fa";
import "./login.css";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="login_section_container text-white d-flex justify-content-center align-items-center">
      <div className="login-wrapper p-4 rounded shadow">
        <div className="text-center my-1">
          <h5>হাতের মুঠোয় টিসিবি পণ্য</h5>
          <p className="my-3">লগইন করুন</p>
        </div>
        <div className="form-wrapper">
          <form
            action="https://tcbsheba.com/login-otp-send"
            method="POST"
            onSubmit={handleSubmit}
          >
            <input
              type="hidden"
              name="_token"
              value="dDzA09BRk8eW0jtCEuftntOSdyNGa0zT8sDZplRP"
            />
            <div className="mb-3 input-group">
              <span className="input-group-text">
                <FaUser />
              </span>
              <input
                type="text"
                className="form-control"
                id="email"
                name="email"
                required
                autoFocus
                placeholder="মোবাইল নম্বর/ ইউজার আইডি দিন"
              />
            </div>

            <div className="mb-3 input-group">
              <span className="input-group-text" onClick={handlePasswordToggle}>
                <FaEye title="পাসওয়ার্ড দেখতে এখানে ক্লিক করুন" />
              </span>
              <input
                type={showPassword ? "text" : "password"}
                className="form-control"
                id="password"
                name="password"
                required
                placeholder="পাসওয়ার্ড দিন"
              />
            </div>

            <div className="mb-3 input-group">
              <span className="input-group-text p-0">
                <button
                  type="button"
                  className="btn btn-link "
                  onClick={() => window.location.reload()}
                >
                  <FaSync style={{ color: "#7D48EC" }} />
                </button>
              </span>
              <span className="captcha-container">
                <img
                  src="https://tcbsheba.com/captcha/default?9Wkp219m"
                  alt="Captcha"
                  style={{ height: "40px" }}
                />
              </span>
              <input
                type="number"
                className="form-control"
                id="captcha"
                name="captcha"
                placeholder="যোগফল লিখুন"
                required
              />
            </div>

            <div className="form-check mb-3">
              <input
                type="checkbox"
                name="remember"
                className="form-check-input text-primary border-custom"
                id="exampleCheck1"
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                মনে রাখুন
              </label>
            </div>

            <div className="d-grid mb-4">
              <button type="submit" className="btn btn-primary btn-block">
                <FaSignInAlt /> লগইন
              </button>
            </div>
            <div className="d-grid forget_pass">
              <a href="https://tcbsheba.com/password-reset-info">
                পাসওয়ার্ড পরিবর্তন / পুনরুদ্ধার
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
