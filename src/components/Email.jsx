import React from "react";
import TheEye from "../../public/img/TheEye.png"; // Import the eye image

const SubscribeBanner = () => {
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
      <div className="flex flex-col sm:flex-row justify-center items-center gap-3 max-w-md mx-auto">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full sm:w-auto px-4 py-2 rounded-md text-white focus:outline-none"
        />
        <button className="bg-red-600 text-white font-bold px-5 py-2 rounded-md hover:bg-red-700 transition">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default SubscribeBanner;
