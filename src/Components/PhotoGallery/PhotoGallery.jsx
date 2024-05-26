import './photoGallery.css';

const PhotoGallery = () => {
  return (
    <section className='my-5'>
      <div className="text-center my-4 text-wrap">
        <h5 className="fw-bold">ফটোগ্যালারি</h5>
        <h6>আমাদের সকল কার্যক্রম সম্পর্কিত ছবি সমূহ দেখুন</h6>
      </div>
      <div
        id="carouselExampleIndicators"
        className="carousel slide container"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://tcbsheba.com/front/assets/img/card-1.png"
              className="d-block w-100 custom-carousel-img"
              alt="Slide 1"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://tcbsheba.com/front/assets/img/image-2.png"
              className="d-block w-100 custom-carousel-img"
              alt="Slide 2"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://tcbsheba.com/front/assets/img/image-3.png"
              className="d-block w-100 custom-carousel-img"
              alt="Slide 3"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://tcbsheba.com/front/assets/img/image-4.png"
              className="d-block w-100 custom-carousel-img"
              alt="Slide 4"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
};

export default PhotoGallery;
