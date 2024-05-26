
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import PhotoGallery from "../Components/PhotoGallery/PhotoGallery";
import TotthoJiggshaLogin from "../Components/TotthoJiggashaLogin/TotthoJiggshaLogin";
import Topbar from "../Components/topbar/Topbar";

const Home = () => {
  return (
    <div>
      <Topbar />
      <Navbar/>
      <TotthoJiggshaLogin/>
      <PhotoGallery></PhotoGallery>
      <Footer/>
    </div>
  );
};

export default Home;
