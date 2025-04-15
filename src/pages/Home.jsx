import { Link } from "react-router-dom"
import Header from "../components/Header";
import Footer from "../components/Footer";
import Cover from "../components/Cover";
import Email from "../components/Email";

function Home() {
  return (
    <>
      <Header />
      <Cover />
      
      <Email />
      <Footer />
    </>
  );
}

export default Home;
