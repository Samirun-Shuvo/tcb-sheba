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
      <div className="col-lg-6 col-md-12">
        <div className="video-item mt-1 embed-responsive embed-responsive-16by9">
          <iframe
            className="embed-responsive-item"
            src="https://www.youtube.com/embed/M7Y4PV0Mxx0"
            title="Video 1"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12">
        <div className="video-item mt-1 embed-responsive embed-responsive-16by9">
          <iframe
            className="embed-responsive-item"
            src="https://www.youtube.com/embed/RgW7jGfI8jA"
            title="Video 2"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
        <div className="video-item mt-1 embed-responsive embed-responsive-16by9">
          <iframe
            className="embed-responsive-item"
            src="https://www.youtube.com/embed/IthiBWluXlE"
            title="Video 3"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12">
        <div className="video-item mt-1 embed-responsive embed-responsive-16by9">
          <iframe
            className="embed-responsive-item"
            src="https://www.youtube.com/embed/dS6D2819aRA"
            title="Video 4"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
        <div className="video-item mt-1 embed-responsive embed-responsive-16by9">
          <iframe
            className="embed-responsive-item"
            src="https://www.youtube.com/embed/TAjtGJPcT5g"
            title="Video 5"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className="col-12">
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
