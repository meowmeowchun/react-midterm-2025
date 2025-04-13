import React, { useState } from "react";
import TheEye from "../../public/img/TheEye.png"; // Import the eye image

const SubscribeBanner = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (email.trim() !== "") {
      setSubscribed(true);
      setEmail(""); // 清空輸入欄
      setTimeout(() => {
        setSubscribed(false); // 幾秒後自動關閉提示訊息（可選）
      }, 3000);
    }
  };

  return (
    <div className="bg-neutral text-center py-12 px-4">
      {/* 怪物插圖 */}
      <img
        src={TheEye}
        alt="Monster Illustration"
        className="mx-auto max-w-4xl w-full mb-8"
      />

      {/* 標語文字 */}
      <p className="text-red-600 font-bold text-lg uppercase tracking-wider mb-4">
        Subscribe to be notified for more of my works
      </p>

      {/* 表單區塊 */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-2">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full sm:w-64 px-4 py-2 rounded-md bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
        />
        <button
          onClick={handleSubscribe}
          className="bg-red-600 text-white font-bold px-5 py-2 rounded-md hover:bg-red-700 transition"
        >
          Subscribe
        </button>
      </div>

      {/* 感謝訊息 */}
      {subscribed && (
        <div className="mt-6 text-green-500 font-semibold text-lg">
          Thanks for the subscription!
        </div>
      )}
    </div>
  );
};

export default SubscribeBanner;
