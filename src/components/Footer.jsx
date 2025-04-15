function Footer() {
  return (
      <div className="sticky z-[-1] bottom-0 left-0 w-full h-[3%] bg-neutral flex justify-center items-center">
        <div className="relative overflow-hidden w-full h-full flex justify-end px-12 text-right items-start py-12 text-primary">
          <div className="flex flex-row space-x-12 sm:pace-x-16  md:space-x-24 text-sm sm:text-lg md:text-xl">
            <ul>
              <li className="hover:scale-110 hover:text-primary hover:shadow-lg transition-all duration-300 cursor-pointer">Home</li>
              <li className="hover:scale-110 hover:text-primary hover:shadow-lg transition-all duration-300 cursor-pointer">Docs</li>
              <li className="hover:scale-110 hover:text-primary hover:shadow-lg transition-all duration-300 cursor-pointer">Comps</li>
            </ul>
            <ul>
              <li className="hover:scale-110 hover:text-primary hover:shadow-lg transition-all duration-300 cursor-pointer">Github</li>
              <li className="hover:scale-110 hover:text-primary hover:shadow-lg transition-all duration-300 cursor-pointer">Instagram</li>
              <li className="hover:scale-110 hover:text-primary hover:shadow-lg transition-all duration-300 cursor-pointer">X (Twitter)</li>
            </ul>
          </div>
          <h2 className="absolute bottom-0 left-0  translate-y-1/3 sm:text-[192px]  text-[80px] text-secondary font-[New_Rocker]">
            CHAOS
          </h2>
        </div>
      </div>

  );
}

export default Footer;