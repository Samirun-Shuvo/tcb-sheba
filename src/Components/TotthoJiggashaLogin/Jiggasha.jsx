import './jiggasha.css'
import { FaQuestionCircle } from "react-icons/fa";
import { FaHandPointRight } from "react-icons/fa";

const Jiggasha = () => {
  return (
    <div className=" my-5">
      <div className="text-center mb-4">
        <h3>সচরাচর জিজ্ঞাসা</h3>
        <p>
          ট্রেডিং কর্পোরেশন অব বাংলাদেশ (টিসিবি) এর স্মার্ট ফ্যামিলি কার্ড
          সম্পর্কিত যেকোনো প্রশ্ন-উত্তর দেখুন।
        </p>
      </div>
      <div className="accordion container" id="accordionExample">
        <div className="accordion-item ">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <FaQuestionCircle className="mx-2" />
              <span className="fw-bold">নিবন্ধিত সংক্ৰান্ত প্রশ্নাবলী</span>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <div>
                <FaHandPointRight />
                <strong>
                  {" "}
                  টিসিবি স্মার্ট ফ্যামিলি কার্ড এর জন্য কিভাবে নিবন্ধিত হওয়া
                  যায়?
                </strong>
                <p>
                  - টিসিবির স্মার্ট ফ্যামিলি কার্ড এর জন্য আপনার এলাকার স্থানীয়
                  প্রতিনিধি অর্থাৎ মেয়র/কাউন্সিলর/চেয়ারম্যান এর কার্যালয়ের আবেদন
                  করা যায়। এটি নিম্ন আয়ের পরিবারের জন্য প্রযোজ্য।
                </p>
              </div>
              <div>
                <FaHandPointRight />
                <strong>
                  টিসিবি স্মার্ট ফ্যামিলি কার্ডের জন্য নিবন্ধিত হতে কি কোনো ফি /
                  টাকা দিতে হয়?
                </strong>
                <p>
                  - না; কোন প্রকার ফি বা টাকা দিতে হয় না। সম্পূর্ণ বিনা মূল্যে এ
                  সেবা প্রদান করা হয়।
                </p>
              </div>
              <div>
                <FaHandPointRight />
                <strong>
                  {" "}
                  টিসিবি স্মার্ট ফ্যামিলি কার্ডের জন্য নিবন্ধিত হতে সবচেয়ে
                  গুরুত্বপূর্ণ তথ্য দু’টি কি কি?
                </strong>
                <p>
                  - টিসিবি স্মার্ট ফ্যামিলি কার্ডের জন্য নিবন্ধিত হতে সবচেয়ে
                  গুরুত্বপূর্ণ তথ্য হলো-
                </p>
                <p> ১) উপকারভোগীর জাতীয় পরিচয়পত্র নম্বর ও জন্ম তারিখ</p>
                <p> ২) উপকারভোগীর নিজের নামে নিবন্ধিত মোবাইল নম্বর</p>
              </div>
              <div>
                <FaHandPointRight />
                <strong>
                  এক পরিবারে কতজন টিসিবি স্মার্ট ফ্যামিলি কার্ডের জন্য নিবন্ধিত
                  হতে পারবে?
                </strong>
                <p>
                  - এক পরিবারের জন্য একজন টিসিবি স্মার্ট ফ্যামিলি কার্ডের জন্য
                  নিবন্ধিত হওয়া যাবে।
                </p>
              </div>
              <div>
                <FaHandPointRight />
                <strong>
                  টিসিবি স্মার্ট ফ্যামিলি কার্ড কখন এবং কোথা থেকে সংগ্রহ করা
                  যাবে?
                </strong>
                <p>
                  - টিসিবি স্মার্ট ফ্যামিলি কার্ড ডেলিভারীর জন্য প্রস্তুত হলে
                  ফ্যামিলি কার্ডের জন্য নিবন্ধন করা্র সময় প্রদত্ত মোবাইল নম্বরের
                  মাধ্যমে কার্ড বিতরণের স্থান, তারিখ ও কোড জানিয়ে দেয়া হবে।
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jiggasha;
