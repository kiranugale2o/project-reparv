import { VideoSvg } from "@/images/herosection_svg.js";
import { Herr_Von_Muellerhoff } from "next/font/google";

export default function HeroSection() {
  return (
    <div className="block  lg:flex w-[390px] lg:w-full  h-[520px] lg:h-[590px] lg:justify-between bg-[url('/herosection_back.png')] bg-cover object-fit">
      <div className="flex flex-col  ">
        {/* Project Partner Button */}
        <div class="hidden absolute lg:flex flex-row justify-center items-center lg:p-[8px_12px] lg:gap-[10px] lg:w-[141px] h-[35px] lg:left-[152px] top-[154px] bg-[rgba(255,_255,_255,_0.6)] rounded-[30px]">
          <p class="w-[117px] h-[19px] font-inter font-semibold text-[16px] leading-[19px] text-[#0BB501] ">
            Project Partner
          </p>
        </div>
        {/* Text Content */}
        <div class=" absolute flex flex-col items-start p-5 lg:p-0 gap-[16px] w-full lg:w-[486px] h-[164px] lg:left-[152px] lg:top-[224px] top-[91px]">
          <h1 className="w-[358px] h-[80px] font-inter font-bold text-[36px] lg:w-[486px] lg:h-[100px] lg:text-[50px] font-bold leading-[40px] lg:leading-[50px] text-[#000000] ">
            Empower Investors, Earn Together
          </h1>
          <div class="hidden lg:flex lg:w-[486px] lg:h-[48px] lg:font-normal lg:text-[20px] lg:leading-[24px] text-[rgba(0,_0,_0,_0.6)] flex-none ">
            Collaborate with us to build a transparent and profitable real
            estate ecosystem.
          </div>
          <div className="lg:hidden flex lg:w-[358px] h-[54px] font-inter font-medium text-[12px] leading-[18px]   text-[rgba(0,_0,_0,_0.6)] flex-none ">
            Explore exciting opportunities in real estate sales with expert
            guidance. Unlock your potential and take the first step toward
            rewarding growth!
          </div>
        </div>
        {/* Register Button */}
        <div class=" absolute flex flex-row justify-center items-center lg:p-[14px_24px] gap-[1px] w-[237px] h-[48px] lg:h-[58px] left-[70px] lg:left-[152px] top-[550px] lg:top-[421px] bg-[#0BB501]    rounded-[8px]">
          <p class="w-[104px]  font-inter font-semibold lg:w-[155px] flex  lg:h-[29px]  text-[16px] lg:text-[24px] leading-[29px] text-center text-[#FFFFFF] flex-none order-0 flex-grow-0">
            Register Now{" "}
          </p>
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
      {/* HeroSection Video */}
      <div className=" flex flex-col">
        <div class="absolute w-[390px] px-3 lg:p-0 lg:w-[500px] h-[250px] lg:left-[668px] lg:top-[154px] top-[280px] filter drop-shadow-[0px_4px_8px_rgba(0,_0,_0,_0.1)]">
          <img src="/hero_section_video.png" alt="video" />
          {/* Video icon svg */}
          <div class="absolute w-[57.71px] h-[65.49px] left-[170px] lg:left-[225.06px] top-[80px] lg:top-[109.66px] ">
            <img src="/videoicon.png" alt="videoIcon" />
          </div>
        </div>
        <div class="hidden lg:flex absolute flex flex-col items-start lg:p-[24px] gap-[12px] w-[250px] h-[124px] left-[920px] top-[455px] bg-[rgba(255,_255,_255,_0.4)] backdrop-blur-[25px] rounded-[12px]">
          {/* Partner with Reparv*/}
          <div class="w-[202px] h-[19px] font-inter font-semibold text-[16px] leading-[19px] text-[#000000] flex-none order-0 self-stretch flex-grow-0">
            Partner with Reparv!
          </div>

          <div class="w-[202px] h-[45px] font-inter font-medium text-[12px] leading-[15px] text-[rgba(0,_0,_0,_0.6)] flex-none ">
            Join our network of successful real estate professionals and grow
            your business.
          </div>
        </div>
      </div>
    </div>
  );
}
