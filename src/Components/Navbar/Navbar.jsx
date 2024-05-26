import "./navbar.css";
import govtLogo from "../../assets/gov.png";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a
          className="navbar-brand d-flex justify-content-center align-items-center "
          href="#"
        >
          <img src={govtLogo} className="govtLogo" alt="Government Logo" />
          <div className="p-2 ">
            <h5 className="fw-bold fs-5 lh-1">হাতের মুঠোয় টিসিবি পণ্য</h5>
            <h6 className="fw-bold fs-6 lh-1">অনলাইন সেবা বাতায়ন</h6>
          </div>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                কার্যক্রম সম্পর্কে
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                ব্যবহারকারী-নির্দেশিকা
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                আপনার মতামত
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                সরকারি আদেশ
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                আরকাইভ
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                যোগাযোগ
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
