import Header from "../components/Header";
import Email from "../components/Email";
import Footer from "../components/Footer";

function Yamato() {
  const products = [
      {
          id: 1,
          title: "fuk",
          price: "NT$500",
          image: "/images/fullart1.jpg"
      },
      {
          id: 2,
          title: "shi",
          price: "NT$600",
          image: "/images/fullart2.jpg"
      },
      {
          id: 3,
          title: "dih",
          price: "NT$700",
          image: "/images/fullart3.jpg"
      }
  ];

  return (
      <>
          <Header />
          <div className="bg-neutral text-accent min-h-screen px-4 py-8">
              <div className="max-w-7xl mx-auto">
                  <h2 className="text-3xl font-bold mb-6 text-center">I'm Yamato</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                      {products.map(product => (
                          <div key={product.id} className="bg-neutral rounded-2xl p-4 shadow hover:shadow-lg transition">
                              <img
                                  src={product.image}
                                  alt={product.title}
                                  className="w-full h-64 object-cover rounded-xl mb-4"
                              />
                              <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                              <p className="text-lg">{product.price}</p>
                          </div>
                      ))}
                  </div>
              </div>
          </div>
          <Email />
          <Footer />

      </>
  );
}

export default Yamato;
