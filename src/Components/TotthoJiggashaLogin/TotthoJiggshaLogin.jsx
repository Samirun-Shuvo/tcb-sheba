import Login from "./Login";
import Tottho from "./Tottho";
import "./TotthoJiggashaLogin.css";

const TotthoJiggshaLogin = () => {
  return (
    <div className="topbanner_container">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <Tottho></Tottho>
          </div>
          <div className="col-md-6">
            <Login></Login>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotthoJiggshaLogin;
