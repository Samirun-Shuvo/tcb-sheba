import Jiggasha from "./Jiggasha";
import Login from "./Login";
import Tottho from "./Tottho";
import "./TotthoJiggashaLogin.css";

const TotthoJiggshaLogin = () => {
  return (
    <div className="tottho_jiggsha_login_section">
      <div className="tottho_jiggsha_login_section_container container">
        <Tottho />
        <Jiggasha />
        {/* <Login /> */}
      </div>
    </div>
  );
};

export default TotthoJiggshaLogin;
