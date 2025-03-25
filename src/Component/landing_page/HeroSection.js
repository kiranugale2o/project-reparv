import { Herr_Von_Muellerhoff } from "next/font/google";
export default function HeroSection() {
  return (
    <div
      id="home"
      className="flex   justify-between w-full flex-col bg-[url('/herosection_back.png')] bg-repeat-y bg-cover bg-contain  h-[530px] lg:h-[650px]  "
    >
      <div className="flex w-full  md:w-full  ">
        <div className="flex flex-col">
          <div class="hidden md:flex absolute lg:flex flex-row justify-center items-center  h-[35px] md:left-[52px] lg:left-[152px] md:top-[100px] lg:top-[134px] bg-[rgba(255,_255,_255,_0.6)] rounded-[30px]">
            <p class="w-[117px] h-[19px] px-1 font-inter font-semibold text-[16px] leading-[19px] text-[#0BB501] ">
              Project Partner
            </p>
          </div>
          {/* Text Content */}
          <div class="md:mt-7 absolute flex flex-col items-start p-5 lg:p-0  w-full gap-6 lg:w-[486px] h-[164px] lg:left-[152px] lg:top-[144px] top-[91px]">
            {" "}
            <h1 className=" font-inter font-bold text-[36px] lg:text-[50px] font-bold leading-[40px] lg:leading-[50px] text-[#000000] ">
              Empower Investors, Earn Together
            </h1>
            <div class="hidden lg:flex lg:font-normal lg:text-[20px] lg:leading-[24px] text-[rgba(0,_0,_0,_0.6)] flex-none ">
              Collaborate with us to build a transparent and profitable real
              estate ecosystem.
            </div>
            <div className="lg:hidden flex lg:w-[358px] md:w-[700px] h-[54px] font-inter font-medium md:text-[18px] text-[12px] leading-[18px]   text-[rgba(0,_0,_0,_0.6)] flex-none ">
              Explore exciting opportunities in real estate sales with expert
              guidance. Unlock your potential and take the first step toward
              rewarding growth!
            </div>
          </div>
        </div>

        {/* Register Button */}
        <div class=" absolute w-[237px] flex flex-row justify-center items-center p-[14px_24px] gap-[1px] h-[48px] lg:h-[58px] left-[17%]  md:left-[40%]  lg:left-[152px] top-[550px] lg:top-[371px] bg-[#0BB501]    rounded-[8px]">
          <button class="lg:w-[104px] item-start  font-inter font-semibold lg:w-[155px] flex  lg:h-[29px]  text-[16px] lg:text-[24px] leading-[29px] text-center text-[#FFFFFF] flex-none order-0 flex-grow-0">
            Register Now{" "}
          </button>
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
        <div className=" flex flex-col ">
          <div class="absolute w-[350px]    md:left-[10%] md:w-[380px] px-3 lg:p-0 lg:w-[500px] h-[250px]  lg:left-[60%] lg:top-[154px] top-[280px] filter drop-shadow-[0px_4px_8px_rgba(0,_0,_0,_0.1)]">
            <img src="/hero_section_video.png" alt="video" />
            {/* Video icon svg */}
            <div class="absolute w-[57.71px] h-[65.49px] left-[150px] lg:left-[225.06px] top-[70px] lg:top-[109.66px] ">
              <img src="/videoicon.png" alt="videoIcon" />
            </div>
          </div>
        </div>

        <div class="hidden md:flex lg:flex absolute flex flex-col items-start md:p-5 lg:p-[24px] gap-[12px] lg:w-[250px] h-[124px] md:left-[570px] lg:left-[920px] md:top-[390px] lg:top-[455px] bg-[rgba(255,_255,_255,_0.4)] backdrop-blur-[25px] rounded-[12px]">
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
