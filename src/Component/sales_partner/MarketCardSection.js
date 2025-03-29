export default function MarketCardSection() {
  return (
    <div className="w-full p-0 m-0">
      <div className="absolute  w-full mx-auto justify-center lg:w-[1134px] h-[746px]  lg:left-[82px] top-[2000px] lg:top-[1144px] flex flex-col items-center gap-[32px] p-0">
        {/* Text Container */}
        <div className="flex mx-auto justify-center flex-col mx-auto lg:items-center justify-center gap-[16px] lg:w-[1134px] h-[104px]">
          {/*Title */}
          <h1 className="mx-auto w-full lg:w-[1134px] h-[48px] font-inter font-semibold text-[28px] lg:text-[40px] leading-[48px] text-center text-[#076300]">
            Market Reality
          </h1>
          {/* Paragraph */}
          <p className="lg:w-[500px] mx-auto md:h-[24px] h-[154px] font-inter font-medium text-[12px]  md:text-[15px] lg:text-[16px] leading-[150%] text-center text-[rgba(0,0,0,0.4)]">
            The current real estate sales landscape presents numerous obstacles
            that independent agents must overcome.
          </p>
          {/* green line */}
          <div className="mx-auto m:mt-0 lg:mt-10  justify-center w-[100px] h-[0px] border-[2px] border-[#0BB501]"></div>
        </div>
        <div className="flex relative flex-col  w-full ">
          {/* First Row */}
          <div className="flex flex-col p-2 lg:ml-0 lg:flex-row w-full items-center gap-[30px]  lg:gap-[0px] lg:w-[1134px] ">
            {/* Flex for mobile */}
            <div className="flex  items-center w-[358px] gap-[16px] lg:w-full">
              {/* First Box */}
              <div className="flex flex-col items-start p-[24px] gap-[16px] w-[171px] lg:w-[250px] h-[283px] bg-white border border-[rgba(0,0,0,0.1)] shadow-[0px_6px_16px_rgba(0,0,0,0.125)] rounded-[0px_12px_12px_12px]">
                <div className="w-[40px] h-[40px] relative">
                  <div className="absolute w-[40px] h-[40px] lg:left-[10px] lg:top-[10px] rounded-full bg-[#E0E5EB]"></div>
                  <p className="absolute w-[11px] h-[24px] left-[15px] lg:left-[24px] text-[16px] top-[10px] lg:top-[20px] font-inter font-bold text-[16px] leading-[150%] text-black">
                    1
                  </p>
                </div>
                <h2 className="w-full lg:w-[167px] h-[30px] font-inter font-medium text-[16px] lg:text-[20px] leading-[150%] text-black">
                  High Competition
                </h2>
                <p className="lg:w-[202px] h-[133px] font-inter font-medium text-[12px] lg:text-[16px] leading-[19px] text-[rgba(0,0,0,0.4)]">
                  The real estate sales market is saturated with agents
                  competing for the same properties and clients, making it
                  difficult to stand out and secure deals.
                </p>
              </div>

              {/* Second Box */}
              <div className="flex flex-col items-start p-[24px] gap-[16px] w-[171px] lg:w-[263px] h-[289px] bg-white border border-[rgba(0,0,0,0.1)] shadow-[0px_6px_16px_rgba(0,0,0,0.125)] rounded-[0px_12px_12px_12px]">
                <div className="w-[40px] h-[40px] relative">
                  <div className="absolute w-[40px] h-[40px] lg:left-[10px] lg:top-[10px] rounded-full bg-[#E0E5EB]"></div>
                  <p className="absolute w-[11px] h-[24px] left-[15px] lg:left-[24px] text-[16px] top-[10px] lg:top-[20px] font-inter font-bold text-[16px] leading-[150%] text-black">
                    2
                  </p>
                </div>
                <h2 className="lg:w-[194px] h-[30px] font-inter font-medium text-[16px] lg:text-[20px] leading-[150%] text-black">
                  Unorganized Market
                </h2>
                <p className="lg:w-[215px] h-[114px] font-inter font-medium text-[12px] lg:text-[16px] leading-[19px] text-[rgba(0,0,0,0.4)]">
                  Lack of standardization and regulation creates confusion,
                  inconsistent pricing, and challenges in maintaining ethical
                  practices.
                </p>
              </div>
            </div>
            {/* Flex for mobile */}
            <div className="flex  items-center w-[358px] gap-[16px] lg:w-full">
              {/* Third Box */}
              <div className="flex flex-col items-start p-[24px] gap-[16px] w-[171px] lg:w-[263px] h-[289px] bg-white border border-[rgba(0,0,0,0.1)] shadow-[0px_6px_16px_rgba(0,0,0,0.125)] rounded-[0px_12px_12px_12px]">
                <div className="w-[40px] h-[40px] relative">
                  <div className="absolute w-[40px] h-[40px] lg:left-[10px] lg:top-[10px] rounded-full bg-[#E0E5EB]"></div>
                  <p className="absolute w-[11px] h-[24px] left-[15px] lg:left-[24px] text-[16px] top-[10px] lg:top-[20px] font-inter font-bold text-[16px] leading-[150%] text-black">
                    3
                  </p>
                </div>
                <h2 className="lg:w-[194px] lg:h-[50px] font-inter font-medium text-[16px] lg:text-[20px] leading-[150%] text-black">
                  Limited Customer Reach
                </h2>
                <p className="lg:w-[215px] h-[114px] font-inter font-medium text-[12px] lg:text-[16px] leading-[19px] text-[rgba(0,0,0,0.4)]">
                  Individual agents often struggle to build a large enough
                  network to consistently generate new leads and opportunities.
                </p>
              </div>
              {/* Fourth Box */}
              <div className="flex flex-col items-start p-[24px] gap-[16px] w-[171px] lg:w-[263px] h-[289px] bg-white border border-[rgba(0,0,0,0.1)] shadow-[0px_6px_16px_rgba(0,0,0,0.125)] rounded-[0px_12px_12px_12px]">
                <div className="w-[40px] h-[40px] relative">
                  <div className="absolute w-[40px] h-[40px] lg:left-[10px] lg:top-[10px] rounded-full bg-[#E0E5EB]"></div>
                  <p className="absolute w-[11px] h-[24px] left-[15px] lg:left-[24px] text-[16px] top-[10px] lg:top-[20px] font-inter font-bold text-[16px] leading-[150%] text-black">
                    4
                  </p>
                </div>
                <h2 className="lg:w-[194px] lg:h-[50px] font-inter font-medium text-[16px] lg:text-[20px] leading-[150%] text-black">
                  Customer Trust Issues
                </h2>
                <p className="lg:w-[215px] h-[114px] font-inter font-medium text-[12px] lg:text-[16px] leading-[19px] text-[rgba(0,0,0,0.4)]">
                  Industry reputation challenges make it difficult to establish
                  credibility and gain client trust from the beginning.
                </p>
              </div>
            </div>
          </div>

          {/* Second Row */}

          <div className="flex flex-col p-2 lg:ml-0 lg:flex-row  items-center p-0  gap-[30px] lg:gap-[0px] lg:w-[1134px] ">
            {/* Flex for mobile */}
            <div className="flex  items-center w-[358px] gap-[16px] lg:w-full">
              {/* Fifth Box */}
              <div className="flex flex-col items-start p-[24px] gap-[16px] w-[171px] lg:w-[263px] h-[289px] bg-white border border-[rgba(0,0,0,0.1)] shadow-[0px_6px_16px_rgba(0,0,0,0.125)] rounded-[0px_12px_12px_12px]">
                <div className="w-[40px] h-[40px] relative">
                  <div className="absolute w-[40px] h-[40px] lg:left-[10px] lg:top-[10px] rounded-full bg-[#E0E5EB]"></div>
                  <p className="absolute w-[11px] h-[24px] left-[15px] lg:left-[24px] text-[16px] top-[10px] lg:top-[20px] font-inter font-bold text-[16px] leading-[150%] text-black">
                    5
                  </p>
                </div>
                <h2 className="lg:w-[194px] lg:h-[50px] font-inter font-medium text-[16px] lg:text-[20px] leading-[150%] text-black">
                  Scalability Challenges
                </h2>
                <p className="lg:w-[215px] h-[114px] font-inter font-medium text-[12px] lg:text-[16px] leading-[19px] text-[rgba(0,0,0,0.4)]">
                  Growing an independent real estate sales business requires
                  significant resources and infrastructure that are difficult to
                  acquire.{" "}
                </p>
              </div>
              {/* six Box */}
              <div className="flex flex-col items-start p-[24px] gap-[16px] w-[171px] lg:w-[263px] h-[289px] bg-white border border-[rgba(0,0,0,0.1)] shadow-[0px_6px_16px_rgba(0,0,0,0.125)] rounded-[0px_12px_12px_12px]">
                <div className="w-[40px] h-[40px] relative">
                  <div className="absolute w-[40px] h-[40px] lg:left-[10px] lg:top-[10px] rounded-full bg-[#E0E5EB]"></div>
                  <p className="absolute w-[11px] h-[24px] left-[15px] lg:left-[24px] text-[16px] top-[10px] lg:top-[20px] font-inter font-bold text-[16px] leading-[150%] text-black">
                    6
                  </p>
                </div>
                <h2 className="lg:w-[194px] lg:h-[50px] font-inter font-medium text-[16px] lg:text-[20px] leading-[150%] text-black">
                  Lead Conversion Struggles
                </h2>
                <p className="lg:w-[215px] h-[114px] font-inter font-medium text-[12px] lg:text-[16px] leading-[19px] text-[rgba(0,0,0,0.4)]">
                  Converting potential buyers into actual clients requires
                  specialized skills and systems that many individual agents
                  lack.
                </p>
              </div>
            </div>
            <div className="flex  items-center w-[358px] gap-[16px] lg:w-full">
              {/* seven Box */}
              <div className="flex flex-col items-start p-[24px] gap-[16px] w-[171px] lg:w-[263px] h-[289px] bg-white border border-[rgba(0,0,0,0.1)] shadow-[0px_6px_16px_rgba(0,0,0,0.125)] rounded-[0px_12px_12px_12px]">
                <div className="w-[40px] h-[40px] relative">
                  <div className="absolute w-[40px] h-[40px] lg:left-[10px] lg:top-[10px] rounded-full bg-[#E0E5EB]"></div>
                  <p className="absolute w-[11px] h-[24px] left-[15px] lg:left-[24px] text-[16px] top-[10px] lg:top-[20px] font-inter font-bold text-[16px] leading-[150%] text-black">
                    7
                  </p>
                </div>
                <h2 className="lg:w-[194px] lg:h-[50px] font-inter font-medium text-[16px] lg:text-[20px] leading-[150%] text-black">
                  Technology Adaptation
                </h2>
                <p className="lg:w-[215px] h-[114px] font-inter font-medium text-[12px] lg:text-[16px] leading-[19px] text-[rgba(0,0,0,0.4)]">
                  Keeping up with essential digital tools and platforms demands
                  time and expertise that draws focus away from sales
                  activities.
                </p>
              </div>

              {/* eight Box */}
              <div className="flex flex-col items-start p-[24px] gap-[16px] w-[171px] lg:w-[263px] h-[289px] bg-white border border-[rgba(0,0,0,0.1)] shadow-[0px_6px_16px_rgba(0,0,0,0.125)] rounded-[0px_12px_12px_12px]">
                <div className="w-[40px] h-[40px] relative">
                  <div className="absolute w-[40px] h-[40px] lg:left-[10px] lg:top-[10px] rounded-full bg-[#E0E5EB]"></div>
                  <p className="absolute w-[11px] h-[24px] left-[15px] lg:left-[24px] text-[16px] top-[10px] lg:top-[20px] font-inter font-bold text-[16px] leading-[150%] text-black">
                    8
                  </p>
                </div>
                <h2 className="lg:w-[194px] lg:h-[50px] font-inter font-medium text-[16px] lg:text-[20px] leading-[150%] text-black">
                  Market Fluctuations
                </h2>
                <p className="lg:w-[215px] h-[114px] font-inter font-medium text-[12px] lg:text-[16px] leading-[19px] text-[rgba(0,0,0,0.4)]">
                  Unpredictable real estate cycles create income instability and
                  require continuous adaptation of sales strategies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
