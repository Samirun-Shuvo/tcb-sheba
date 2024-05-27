import "./VideoGallery.css";

const VideoGallery = () => {
  return (
    <div>
      <div className="video-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 mb-5 ">
              <h2 className="text-center font-weight-bold">ভিডিও-গ্যালারি</h2>
              <p className="text-center">
                আমাদের সকল কার্যক্রম সম্পর্কিত ভিডিও সমূহ দেখুন
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="video-item mt-1">
                <iframe
                  id="player"
                  frameBorder="0"
                  allowFullScreen=""
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  title="পাঁচ কোটি মানুষকে কম মূল্যে নিত্যপণ্য দেয়ার সিদ্ধান্ত | TCB Family Smart Card | TCB Product"
                  width="100%"
                  height="430"
                  src="https://www.youtube.com/embed/M7Y4PV0Mxx0?autoplay=0&amp;controls=1&amp;rel=0&amp;showinfo=0&amp;modestbranding=1&amp;enablejsapi=1&amp;origin=https%3A%2F%2Ftcbsheba.com&amp;widgetid=1"
                ></iframe>
              </div>
            </div>
            <div className="col-md-3">
              <div className="video-item mt-1">
                <iframe
                  id="player-one"
                  frameBorder="0"
                  allowFullScreen=""
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  title="টিসিবি কার্ডধারীদের তালিকা হালনাগাদ হচ্ছে: বাণিজ্য প্রতিমন্ত্রী | TCB Product | Family Card"
                  width="100%"
                  height="210"
                  src="https://www.youtube.com/embed/RgW7jGfI8jA?autoplay=0&amp;controls=1&amp;rel=0&amp;showinfo=0&amp;modestbranding=1&amp;enablejsapi=1&amp;origin=https%3A%2F%2Ftcbsheba.com&amp;widgetid=2"
                ></iframe>
              </div>
              <div className="video-item mt-1">
                <iframe
                  id="player-two"
                  frameBorder="0"
                  allowFullScreen=""
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  title="টিসিবির পণ্য এবার স্থায়ী দোকান থেকে বিতরণ করা হবে: বাণিজ্য প্রতিমন্ত্রী | News24"
                  width="100%"
                  height="210"
                  src="https://www.youtube.com/embed/IthiBWluXlE?autoplay=0&amp;controls=1&amp;rel=0&amp;showinfo=0&amp;modestbranding=1&amp;enablejsapi=1&amp;origin=https%3A%2F%2Ftcbsheba.com&amp;widgetid=3"
                ></iframe>
              </div>
            </div>
            <div className="col-md-3">
              <div className="video-item mt-1">
                <iframe
                  id="player-three"
                  frameBorder="0"
                  allowFullScreen=""
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  title="ফ্যামিলি কার্ড অনিয়ম ঠেকাতে টিসিবির স্মার্ট কার্ড | Smart Family Card | Ekhon TV"
                  width="100%"
                  height="210"
                  src="https://www.youtube.com/embed/dS6D2819aRA?autoplay=0&amp;controls=1&amp;rel=0&amp;showinfo=0&amp;modestbranding=1&amp;enablejsapi=1&amp;origin=https%3A%2F%2Ftcbsheba.com&amp;widgetid=4"
                ></iframe>
              </div>
              <div className="video-item mt-1">
                <iframe
                  id="player-four"
                  frameBorder="0"
                  allowFullScreen=""
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  title="বন্ধ হচ্ছে একই পরিবারের একাধিক ‘ফ্যামিলি কার্ড’ ব্যবহার | TCB Smart Card | Jamuna TV"
                  width="100%"
                  height="210"
                  src="https://www.youtube.com/embed/TAjtGJPcT5g?autoplay=0&amp;controls=1&amp;rel=0&amp;showinfo=0&amp;modestbranding=1&amp;enablejsapi=1&amp;origin=https%3A%2F%2Ftcbsheba.com&amp;widgetid=5"
                ></iframe>
              </div>
            </div>
            <div className="col-sm-12">
              <div className="text-center mb-5 pt-2">
                <a href="#">
                  সকল ভিডিও দেখুন <i className="icofont-long-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoGallery;
