import "./footer.css";
import tcblogo from "../../assets/tcb.png";
import sisllogo from "../../assets/sisl.png";
import { FaLongArrowAltRight } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="footer-top">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-4">
              <div className="footer-link">
                <ul>
                  <li>
                    <a href="#">
                      <FaLongArrowAltRight className="mx-1" />
                      ব্যবহারকারী-নির্দেশিকা
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaLongArrowAltRight className="mx-1" />
                      আপনার মতামত
                    </a>
                  </li>
                  <li>
                    <a href="https://tcbsheba.com/contact-us">
                      <FaLongArrowAltRight className="mx-1" />
                      যোগাযোগ
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
              <div className="footer-link">
                <ul>
                  <li>
                    <a href="#">
                      <FaLongArrowAltRight className="mx-1" /> ডিসক্লেইমার
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaLongArrowAltRight className="mx-1" /> সচরাচর জিজ্ঞাসা
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaLongArrowAltRight className="mx-1" /> গুরুত্বপূর্ণ
                      লিংকসমূহ
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
              <div className="footer-link">
                <ul>
                  <li>
                    <a href="#">
                      <FaLongArrowAltRight className="mx-1" /> গোপনীয়তার
                      নীতিমালা
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaLongArrowAltRight className="mx-1" /> পার্টনারস
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaLongArrowAltRight className="mx-1" /> সাইট ম্যাপ
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-6 my-2">
              <div className="logo-wrapper">
                <img src={tcblogo} className="img-fluid" alt="" />
                <div className="logo-text lh-1">
                  <h6>পরিকল্পনা ও বাস্তবায়নেঃ</h6>
                  <h5>ট্রেডিং কর্পোরেশন অব বাংলাদেশ</h5>
                  <a href="https://tcb.gov.bd/" target="_blank">
                    www.tcb.gov.bd
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 my-2">
              <div className="logo-wrapper">
                <img src={sisllogo} className="img-fluid" alt="" />
                <div className="logo-text lh-1">
                  <h6>কারিগরি সহযোগিতায়ঃ</h6>
                  <h5>স্পেকট্রাম আইটি সলিউশনস লিঃ</h5>
                  <a href="https://spectrum.com.bd/" target="_blank">
                    www.spectrum.com.bd
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-1">
            <div className="col-sm-12">
              <div className="copyright">
                <p>কপিরাইট © ২০২৪ ট্রেডিং কর্পোরেশন অব বাংলাদেশ</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
