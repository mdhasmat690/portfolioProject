// import Banner from "./components/home/Banner";
import { Outlet } from "react-router-dom";
// import Banner from "./components/home/Banner";
import Footer from "./components/home/Footer";
import Navigation from "./components/home/Navigation";
// import Prject from "./components/home/Prject";
// import Product from "./components/home/Product";
// import Services from "./components/home/Services";
// import Test from "./components/home/Test";

function App() {
  return (
    <>
      <Navigation />
      <Outlet></Outlet>

      <Footer />
    </>
  );
}

export default App;
