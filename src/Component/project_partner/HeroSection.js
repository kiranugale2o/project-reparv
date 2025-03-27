import { Herr_Von_Muellerhoff } from "next/font/google";
export default function HeroSection() {
  return (
    <div
      id="home"
      className="flex   justify-between w-full flex-col bg-[url('/herosection_back.png')] bg-repeat-y bg-cover bg-contain  h-[530px] lg:h-[650px]  "
    >
      <div className="flex w-full  md:w-full  ">
        <div className="flex flex-col">
          <div className="hidden md:flex absolute lg:flex flex-row justify-center items-center p-2  h-[35px] md:left-[52px] lg:left-[152px] md:top-[100px] lg:top-[134px] bg-[rgba(255,_255,_255,_0.6)] rounded-[30px]">
            <p className="w-[117px] h-[19px] px-1 font-inter font-semibold text-[16px] leading-[19px] text-[#0BB501] ">
              Project Partner
            </p>
          </div>
          {/* Text Content */}
          <div className="md:mt-7   absolute flex flex-col items-start md:items-center p-5 lg:p-0  w-full gap-6 lg:w-[486px] h-[164px] lg:left-[152px] lg:top-[164px] top-[91px]">
            {" "}
            <h1 className=" font-inter font-bold text-[36px] lg:text-[50px] font-bold leading-[40px] lg:leading-[50px] text-[#000000] ">
              Empower Investors, Earn Together
            </h1>
            <div className="hidden lg:flex lg:font-normal lg:text-[20px] lg:leading-[24px] text-[rgba(0,_0,_0,_0.6)] flex-none ">
              Collaborate with us to build a transparent and profitable real
              estate ecosystem.
            </div>
            <div className="lg:hidden flex text-center lg:w-[358px] md:w-[700px] h-[54px] font-inter font-medium md:text-[18px] text-[12px] leading-[18px]   text-[rgba(0,_0,_0,_0.6)] flex-none ">
              Explore exciting opportunities in real estate sales with expert
              guidance. Unlock your potential and take the first step toward
              rewarding growth!
            </div>
          </div>
        </div>

        {/* Register Button */}
        <div className="absolute hover:drop-shadow-xl  hover:bg-blue-400  focus:bg-blue-600 active:bg-blue-500  w-[237px] flex flex-row justify-center items-center h-[48px] lg:h-[58px] lg:h-[58px]  left-[50%]   md:top-[600px] lg:left-[170px] top-[600px]  lg:top-[421px] transform -translate-x-[50%] -translate-y-[50%]   lg:-translate-x-[0%] lg:-translate-y-[0%] bg-[#0BB501] rounded-[8px]">
          <a
            href="/projectpartner#join"
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

        {/* HeroSection Video */}

        <div className=" flex flex-col md:items-center  ">
          <div className="absolute w-[360px] md:w-[500px] h-[250px]  left-[50%] transform -translate-x-[50%] -translate-y-[50%] lg:left-[73%] lg:top-[50%] lg:p-0  top-[400px] md:top-[380px]  filter drop-shadow-[0px_4px_8px_rgba(0,0,0,0.1)] px-3 lg:p-0 lg:w-[500px]">
            <img src="/hero_section_video.png" alt="video" />
            {/* Video icon svg */}
            <div className="absolute w-[57.71px] h-[65.49px] left-[50%] transform -translate-x-[50%] top-[60px] md:top-[100px] lg:top-[109.66px]">
              <img src="/videoicon.png" alt="videoIcon" />
            </div>
          </div>
        </div>

        <div className="hidden md:hidden lg:flex absolute flex flex-col items-start md:p-5 lg:p-[24px] gap-[12px]  h-[124px] md:left-[570px] lg:left-[1000px] md:top-[390px] lg:top-[520px] bg-[rgba(255,_255,_255,_0.4)] backdrop-blur-[25px] rounded-[12px]">
          {/* Partner with Reparv*/}
          <div className="w-[202px] h-[19px] font-inter font-semibold text-[16px] leading-[19px] text-[#000000] flex-none order-0 self-stretch flex-grow-0">
            Partner with Reparv!
          </div>

          <div className="w-[202px] h-[45px] font-inter font-medium text-[12px] leading-[15px] text-[rgba(0,_0,_0,_0.6)] flex-none ">
            Join our network of successful real estate professionals and grow
            your business.
          </div>
        </div>
      </div>
    </div>
  );
}
