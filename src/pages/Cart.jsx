import Header from "../components/Header";
import Footer from "../components/Footer";
import Email from "../components/Email";

function Cart() {
  // 假資料（之後可用 context 替換）
  const cartItems = new Array(5).fill({
    name: "ART NAME",
    price: 99999900,
    quantity: 1,
    image: "", // 可放圖片 URL
  });

  return (
    <div className="bg-neutral text-accent min-h-screen flex flex-col">
      <Header />

      {/* 購物車清單區域 */}
      <main className="flex-1 px-4 md:px-20 py-8">
        {cartItems.map((item, index) => (
          <div key={index} className="flex items-center bg-neutral p-4 mb-4 border border-accent">
            {/* 圖片 */}
            <div className="w-24 h-24 bg-accent mr-4" />

            {/* 商品名稱 */}
            <div className="flex-1 text-left font-bold">{item.name}</div>

            {/* 數量控制 */}
            <div className="flex items-center gap-2 mx-4">
              <button className="text-xl">-</button>
              <span>{item.quantity}</span>
              <button className="text-xl">+</button>
            </div>

            {/* 價格 */}
            <div className="text-right">${item.price.toLocaleString()}</div>
          </div>
        ))}
      </main>

      {/* Email 區塊 */}
      <Email />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Cart;
