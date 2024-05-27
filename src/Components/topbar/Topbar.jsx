import "./topbar.css";
import phoneIcon from "../../assets/app.png";
import { FaFacebookF, FaYoutube, FaTwitter, FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const Topbar = () => {
  return (
    <section className="topbar_section_container">
      <div className="container d-flex flex-wrap justify-content-between align-items-center">
        <div className="d-flex flex-wrap social_container">
          <span className="me-2">
            <a href="https://tcbsheba.com/home#" target="_blank">
              <FaFacebookF className="top_nav_icons" />
            </a>
          </span>
          <span className="me-2">
            <a href="https://tcbsheba.com/home#" target="_blank">
              <FaYoutube className="top_nav_icons" />
            </a>
          </span>
          <span className="me-2">
            <a href="https://tcbsheba.com/home#" target="_blank">
              <FaTwitter className="top_nav_icons" />
            </a>
          </span>
          <span className="me-2">
            <a href="https://tcbsheba.com/home#" target="_blank">
              <IoIosMail className="top_nav_icons" />
            </a>
          </span>
        </div>
        <div className="d-flex flex-wrap justify-content-end align-items-center mt-2 mt-md-0 text-white fw-bold">
          <div className="mobileApp_link me-2">
            <a
              href="https://play.google.com/store/apps/details?id=com.spectrum.tcbapp"
              className="signin d-flex align-items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={phoneIcon} alt="" className="me-1" />
              <span>মোবাইল অ্যাপ </span>
            </a>
          </div>
          <div className="mx-2">|</div>
          <div className="helpline_text">
            <FaPhoneAlt /> - 096 381 118 88 ( 9:00 AM - 6:00 PM )
          </div>
        </div>
      </div>
    </section>
  );
};

export default Topbar;
