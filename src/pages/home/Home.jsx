import Featured from "../../components/featured/Featured";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import PropertyList from "../../components/propertyList/PropertyList";
import "./home.css";

function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <h1 style={{ paddingRight: "100px" }}>Your Recent places</h1>
        <Featured />
        <h1 style={{ marginRight: "500px" }} className="homeTitle">
          Property Lists
        </h1>
        <PropertyList />
        <h1 style={{ marginRight: "500px" }} className="homeTitle">
          Our Recomendations
        </h1>
        <FeaturedProperties />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
