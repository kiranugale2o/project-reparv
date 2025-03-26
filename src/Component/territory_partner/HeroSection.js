export default function TerritoryHeroSection() {
  return (
    <div className="w-full flex p-0 m-0  ">
      <div className="absolute flex flex-col w-full h-[480px] lg:h-[530px] md:h-[700px] left-0 lg:top-[70px]  bg-[url('/territorypartner_back.png')] bg-white/77 bg-cover rounded-[2px] backdrop-blur-[15px]  ">
        <div className="hidden md:flex  absolute lg:flex flex-row justify-center items-center lg:p-2 h-[35px] md:left-[52px] lg:left-[152px] md:top-[100px] lg:top-[84px] bg-[rgba(255,_255,_255,_0.6)] rounded-[30px] ">
          <p className="w-full lg:w-[267px] h-[19px] px-1 font-inter font-semibold text-[16px] leading-[19px] text-[#026FBE] ">
            Territory Partner Program
          </p>
        </div>

        <div className="flex w-full ">
          <div className="md:mt-7 absolute flex flex-col items-center lg:items-start  md:p-5 w-full gap-2 lg:gap-5 lg:w-[486px] lg:h-[164px] lg:left-[152px] lg:top-[114px] top-[91px]">
            {" "}
            <h1 className=" font-inter font-bold  text-[36px] lg:text-[50px] font-bold leading-[40px] lg:leading-[50px] text-[#000000] ">
              Territory Partner
            </h1>
            <div className=" font-inter lg:font-sans  leading-[19px] text-center lg:text-start  flex-none order-0 self-stretch flex-grow-0 lg:flex w-full px-3 lg:p-0  lg:w-[486px] h-[38px]  font-semibold text-[16px] lg:text-[24px] lg:leading-[29px] text-[#026FBE]">
              Sales Leadership Starts with You – Partner with Reparv!
            </div>
            <div className="hidden lg:flex lg:font-normal lg:text-[20px] lg:leading-[24px] text-[rgba(0,_0,_0,_0.6)] flex-none ">
              At Reparv, we provide you with a skilled sales team—your role as a
              Territory Partner is to lead, guide, and drive success in your
              region. Together, we build trust, close deals, and grow the
              business!
            </div>
            <div className="lg:hidden flex w-full text-center  lg:w-[358px] md:w-[700px] h-[54px] font-inter font-medium md:text-[18px] text-[15px] leading-[18px]   text-[rgba(0,_0,_0,_0.6)] flex-none ">
              Explore exciting opportunities in real estate sales with expert
              guidance. Unlock your potential and take the first step toward
              rewarding growth!
            </div>
          </div>

          {/* Register Button of Territory  */}
          <div className="absolute hover:drop-shadow-xl  hover:bg-blue-400  focus:bg-blue-600 active:bg-blue-500  w-[237px] flex flex-row justify-center items-center h-[48px] lg:h-[58px] lg:h-[58px]  left-[50%]   md:top-[740px] lg:left-[170px] top-[550px]  lg:top-[421px] transform -translate-x-[50%] -translate-y-[50%]   lg:-translate-x-[0%] lg:-translate-y-[0%] bg-[#026FBE] rounded-[8px]">
            <a
              href="#join"
              className="w-[104px] item-start font-inter font-semibold lg:w-[155px] flex lg:h-[29px] text-[16px] lg:text-[24px] leading-[29px] text-center text-[#FFFFFF] flex-none order-0 flex-grow-0"
            >
              Register Now
            </a>
            <svg
              width="34"
              height="34"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14 18L12.6 16.55L16.15 13H4V11H16.15L12.6 7.45L14 6L20 12L14 18Z"
                fill="white"
              />
            </svg>
          </div>
        </div>

        <div className=" flex flex-col md:items-center  ">
          <div className="absolute w-[360px] md:w-[500px] h-[250px]  left-[50%] transform -translate-x-[50%] -translate-y-[50%] lg:left-[73%] lg:top-[35%] lg:p-0  top-[400px] md:top-[480px]  filter drop-shadow-[0px_4px_8px_rgba(0,0,0,0.1)] px-3 lg:p-0 lg:w-[500px]">
            <img src="/hero_section_video.png" alt="video" />
            {/* Video icon svg */}
            <div className="absolute w-[57.71px] h-[65.49px] left-[50%] transform -translate-x-[50%] top-[60px] md:top-[100px] lg:top-[109.66px]">
              <img src="/videoicon.png" alt="videoIcon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
