

const Jiggasha = () => {
  return (
    <div className="jiggasha_section_container">
      <div className="qna-wrapper">
        <h3>সচরাচর জিজ্ঞাসা</h3>
        <p>
          ট্রেডিং কর্পোরেশন অব বাংলাদেশ (টিসিবি) এর স্মার্ট ফ্যামিলি কার্ড
          সম্পর্কিত যেকোনো প্রশ্ন-উত্তর দেখুন।
        </p>
        <div className="accordion-wrapper">
          <div className="accordion" id="accordionExample">
            <div className="card" style={{paddingBottom: "40px"}}>
              <div className="card-header" id="headingOne">
                <h2 className="mb-0">
                  <button
                    className="btn btn-link btn-block text-left"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    <i className="icofont-question-circle"></i> নিবন্ধিত
                    সংক্ৰান্ত প্রশ্নাবলী
                  </button>
                </h2>
              </div>
              <div
                id="collapseOne"
                className="collapse show"
                aria-labelledby="headingOne"
                data-parent="#accordionExample"
              >
                <div className="card-body">
                  <div className="qna-item">
                    <h6>
                      <i className="icofont-hand-right"></i> টিসিবি স্মার্ট
                      ফ্যামিলি কার্ড এর জন্য কিভাবে নিবন্ধিত হওয়া যায়?
                    </h6>
                    <p>
                      - টিসিবির স্মার্ট ফ্যামিলি কার্ড এর জন্য আপনার এলাকার
                      স্থানীয় প্রতিনিধি অর্থাৎ মেয়র/কাউন্সিলর/চেয়ারম্যান এর
                      কার্যালয়ের আবেদন করা যায়। এটি নিম্ন আয়ের পরিবারের জন্য
                      প্রযোজ্য।{" "}
                    </p>
                  </div>
                  <div className="qna-item">
                    <h6>
                      <i className="icofont-hand-right"></i> টিসিবি স্মার্ট
                      ফ্যামিলি কার্ডের জন্য নিবন্ধিত হতে কি কোনো ফি / টাকা দিতে
                      হয়?
                    </h6>
                    <p>
                      - না; কোন প্রকার ফি বা টাকা দিতে হয় না। সম্পূর্ণ বিনা
                      মূল্যে এ সেবা প্রদান করা হয়।{" "}
                    </p>
                  </div>
                  <div className="qna-item">
                    <h6>
                      <i className="icofont-hand-right"></i>টিসিবি স্মার্ট
                      ফ্যামিলি কার্ডের জন্য নিবন্ধিত হতে সবচেয়ে গুরুত্বপূর্ণ
                      তথ্য দু’টি কি কি?
                    </h6>
                    <p>
                      - টিসিবি স্মার্ট ফ্যামিলি কার্ডের জন্য নিবন্ধিত হতে সবচেয়ে
                      গুরুত্বপূর্ণ তথ্য হলো-
                    </p>
                    <p style={{marginLeft: "20px"}}>
                      {" "}
                      ১) উপকারভোগীর জাতীয় পরিচয়পত্র নম্বর ও জন্ম তারিখ
                    </p>
                    <p style={{marginLeft: "20px"}}>
                      {" "}
                      ২) উপকারভোগীর নিজের নামে নিবন্ধিত মোবাইল নম্বর
                    </p>
                  </div>

                  <div className="qna-item">
                    <h6>
                      <i className="icofont-hand-right"></i>এক পরিবারে কতজন
                      টিসিবি স্মার্ট ফ্যামিলি কার্ডের জন্য নিবন্ধিত হতে পারবে?
                    </h6>
                    <p>
                      - এক পরিবারের জন্য একজন টিসিবি স্মার্ট ফ্যামিলি কার্ডের
                      জন্য নিবন্ধিত হওয়া যাবে।{" "}
                    </p>
                  </div>

                  <div className="qna-item">
                    <h6>
                      <i className="icofont-hand-right"></i>টিসিবি স্মার্ট
                      ফ্যামিলি কার্ড কখন এবং কোথা থেকে সংগ্রহ করা যাবে?
                    </h6>
                    <p>
                      - টিসিবি স্মার্ট ফ্যামিলি কার্ড ডেলিভারীর জন্য প্রস্তুত
                      হলে ফ্যামিলি কার্ডের জন্য নিবন্ধন করা্র সময় প্রদত্ত মোবাইল
                      নম্বরের মাধ্যমে কার্ড বিতরণের স্থান, তারিখ ও কোড জানিয়ে
                      দেয়া হবে।
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jiggasha;
