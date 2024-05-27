import './tottho.css'
import { FaArrowRightLong } from "react-icons/fa6";

const Tottho = () => {
  return (
    <div className="tottho_section_container">
      <div className="tottho_khojon_content">
        <div className="search-card">
          <div className="card-body">
            <p className="card-text">
              <img
                src="https://tcbsheba.com/front/assets/img/search.png"
                className="img-fluid"
                alt=""
              />
            </p>
            <h5 className="card-title">তথ্য খুঁজুন</h5>
            <span className="card-link">
              বিস্তারিত দেখুন <FaArrowRightLong />
            </span>
          </div>
        </div>
      </div>
      <div className="tottho_update_koron_content">
        <div className="update-card">
          <div className="card-body">
            <p className="card-text">
              <img
                src="https://tcbsheba.com/front/assets/img/update.png"
                className="img-fluid"
                alt=""
              />
            </p>

            <h5 className="card-title">তথ্য আপডেট করুন</h5>
            <span className="card-link">
              বিস্তারিত দেখুন <FaArrowRightLong />
            </span>
          </div>
        </div>
      </div>
      <div className="duplicate_family_card_content">
        <div className="family-card">
          <div className="card-body">
            <p className="card-text">
              <img
                src="https://tcbsheba.com/front/assets/img/card.png"
                className="img-fluid"
                alt=""
              />
            </p>
            <h5 className="card-title ">ডুপ্লিকেট ফ্যামিলি কার্ড</h5>
            <span className="card-link">
              বিস্তারিত দেখুন <FaArrowRightLong />
            </span>
          </div>
        </div>
      </div>
      <div className="notun_nibondon_koron_content">
        <div className=" user-card">
          <div className="card-body">
            <p className="card-text">
              <img
                src="https://tcbsheba.com/front/assets/img/users.png"
                className="img-fluid"
                alt=""
              />
            </p>
            <h5 className="card-title">নতুন নিবন্ধন করুন</h5>
            <span className="card-link">
              বিস্তারিত দেখুন <FaArrowRightLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tottho;
