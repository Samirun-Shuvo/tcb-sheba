
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import PhotoGallery from "../Components/PhotoGallery/PhotoGallery";
import Jiggasha from "../Components/TotthoJiggashaLogin/Jiggasha";
import TotthoJiggshaLogin from "../Components/TotthoJiggashaLogin/TotthoJiggshaLogin";
import VideoGallery from "../Components/VideoGallery/VideoGallery";
import Topbar from "../Components/topbar/Topbar";

const Home = () => {
  return (
    <div>
      <Topbar />
      <Navbar/>
      <TotthoJiggshaLogin/>
      <Jiggasha />
      <PhotoGallery></PhotoGallery>
      <VideoGallery></VideoGallery>
      <Footer/>
    </div>
  );
};

export default Home;
