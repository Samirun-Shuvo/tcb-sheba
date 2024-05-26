const Login = () => {
  return (
    <div className="login_section_container">
      <h5>হাতের মুঠোয় টিসিবি পণ্য</h5>
      <p>লগইন করুন</p>
      <div className="login_form_container">
        <form action="">
          <input
            type="text"
            id="email"
            name="email"
            placeholder="মোবাইল নম্বর/ ইউজার আইডি দিন"
          />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="পাসওয়ার্ড দিন"
          />
          <div className="">
            <div className="input-group-prepend">
              <div
                className="input-group-text"
                style={{padding: "0.375rem 0.75rem"}}
              >
                <a className="btn-refresh">
                  <i className="icofont-refresh" style={{color: "#7D48EC"}}></i>
                </a>
              </div>
            </div>
            <span className="captcha-container">
              <img src="https://tcbsheba.com/captcha/default?OiY1K9fM" />
            </span>
            <input
              type="number"
              style={{padding: "18px !important"}}
              className=""
              id="captcha"
              name="captcha"
              placeholder="যোগফল লিখুন"
              required=""
            />
          </div>
          <input type="checkbox" name="remember" id="exampleCheck1" />
          {/* <label  for="exampleCheck1">মনে রাখুন</label> */}
        </form>
      </div>
    </div>
  );
};

export default Login;
