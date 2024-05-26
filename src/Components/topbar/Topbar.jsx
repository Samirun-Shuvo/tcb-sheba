import "./topbar.css";
import phoneIcon from "../../assets/app.png";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";

const Topbar = () => {
  return (
    <>
      <div className="topbar_section_container">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-6">
              <div className="social_container">
                <span>
                  <FaFacebookF className="top_nav_icons" />
                </span>
                <span>
                  <FaYoutube className="top_nav_icons" />
                </span>
                <span>
                  <FaTwitter className="top_nav_icons" />
                </span>
                <span>
                  <IoIosMail className="top_nav_icons" />
                </span>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6">
              <div className="d-flex justify-content-end align-items-center">
                <div className="mobileApp_link">
                  <img src={phoneIcon} alt="phoneIcon" />
                  <span>মোবাইল অ্যাপ </span>
                </div>
                <div className="mx-2">|</div>
                <div className="helpline_text">
                  <FaPhoneAlt className="" />- 096 381 118 88 ( 9:00 AM - 6:00
                  PM )
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Topbar;
