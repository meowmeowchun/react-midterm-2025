import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Cover from "../components/Cover";
import Email from "../components/Email";

function Home() {
  return (
    <>
      <Header />
      <Cover />

      {/* Grid Section */}
      <div className="bg-neutral text-accent min-h-screen px-4 py-8">
        <div className="max-w-7xl mx-auto">

          {/* First Row: 3 Images */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-6">
            <Link to="/fanart">
              <img
                src="/img/fanart.png"
                alt="Fan Art"
                className="w-full h-auto object-cover hover:shadow-lg transition cursor-pointer"
              />"
            </Link>
            <Link to="/fanart">
              <img
                src="/img/fanart2.png"
                alt="Fan Art"
                className="w-full h-auto object-cover hover:shadow-lg transition cursor-pointer"
              />
            </Link>
            <Link to="/fanart">
              <img
                src="/img/fanart3.png"
                alt="Fan Art"
                className="w-full h-auto object-cover hover:shadow-lg transition cursor-pointer"
              />
            </Link>
          </div>

          {/* Second Row: 5 Images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 mb-6">
            <Link to="/fullart">
              <img
                src="/img/i am art.png"
                alt="Full Art"
                className="w-full h-64 object-cover hover:shadow-lg transition cursor-pointer"
              />
            </Link>
            <Link to="/fanart">
              <img
                src="/img/i am art.png"
                alt="Fan Art"
                className="w-full h-64 object-cover hover:shadow-lg transition cursor-pointer"
              />
            </Link>
            <Link to="/">
              <img
                src="/img/i am art.png"
                alt="Home"
                className="w-full h-64 object-cover hover:shadow-lg transition cursor-pointer"
              />
            </Link>
            <Link to="/yamato">
              <img
                src="/img/i am art.png"
                alt="Yamato"
                className="w-full h-64 object-cover hover:shadow-lg transition cursor-pointer"
              />
            </Link>
            <Link to="/sketch">
              <img
                src="/img/i am art.png"
                alt="Sketch"
                className="w-full h-64 object-cover hover:shadow-lg transition cursor-pointer"
              />
            </Link>
          </div>

          <div className="grid grid-col-2 w-full h-auto mb-6">
            <Link to="/yamato">
              <img
                src="/img/yamato.png"
                alt="Yamato"
                className="w-full h-auto object-cover hover:shadow-lg transition cursor-pointer"
              />
              <div className="z-50 absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-white text-lg font-bold">Yamato</p>
              </div>
            </Link>
            <Link to="/fullart">
              <img
                src="/img/fullart.png"
                alt="Full Art"
                className="w-full h-auto object-cover hover:shadow-lg transition cursor-pointer"
              />
            </Link>
          </div>
        </div>
      </div>

      <Email />
      <Footer />
    </>
  );
}

export default Home;