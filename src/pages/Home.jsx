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
            <Link to="/fanart" className="relative group">
              <img
                src="/img/fanart.png"
                alt="Fan Art"
                className="w-full h-auto object-cover hover:shadow-lg transition cursor-pointer"
              />
              <div className="absolute inset-0 flex items-end justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-5xl font-[IM_FELL_French_Canon]">FANART</p>
              </div>
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
            <Link to="/yamato" className="relative group">
              <img
                src="/img/yamato.png"
                alt="Yamato"
                className="w-full h-auto object-cover hover:shadow-lg transition cursor-pointer"
              />
              <div className="absolute inset-0 flex items-center justify-end opacity-0 group-hover:opacity-100 transition-opacity">
                <p
                  className="text-9xl font-[IM_FELL_French_Canon] bg-gradient-to-r from-white to-[rgba(255,255,255,0.27)] bg-clip-text text-transparent"
                >
                  Yamato
                </p>
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