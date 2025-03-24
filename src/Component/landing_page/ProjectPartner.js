export default function ProjectPartner() {
  return (
    <div class="absolute flex flex-col items-start p-0 gap-8 w-full lg:w-[747px] h-[518px] lg:left-[280px] top-[650px] lg:top-[700px]">
      <div class="flex flex-col justify-center items-center p-0 gap-4 lg:w-[747px] h-[152px]">
        <div class="w-[390px] lg:w-[747px] h-[35px] lg:h-[48px] text-center font-semibold text-[#076300] text-[28px] lg:text-[40px] leading-[48px]">
          Who is a Project Partner?
        </div>

        <div class="w-[358px]  lg:w-[427px] h-[72px] text-center   text-[#999999] lg:text-[#00000066] text-[16px] leading-[19px] lg:leading-[160%]  ">
          A Project Partner is an individual, company, or organization that
          collaborates on multiple real estate projects by contributing
          resources, expertise, or investment.
        </div>

        {/* green line */}
        <div class="w-[100px] h-0 border-2  border-[#0BB501]"></div>
      </div>
      <div class="absolute w-[368px] rounded-lg  lg:w-[747px] h-[200px] lg:h-[334px] left-[10px] lg:left-0 lg:top-[184px] top-[170px] bg-[url('/project_partner.png')]  bg-cover ">
        <div class="absolute flex flex-col items-start  p-0 gap-1 lg:w-[747px]  h-[138px] top-[59px] lg:top-[194px] bg-gradient-to-b from-transparent via-transparent to-[#000000] rounded-b-[12px] ">
          {/*Join Our Network*/}
          <p class="w-[334px] text-opacity-10 h-[16px] p-5 mt-10 text-[16px] leading-[19px] lg:w-[616px] lg:h-[29px] text-white lg:text-[24px] lg:leading-[10px] lg:leading-[29px] font-semibold">
            Join Our Network
          </p>
          <p class="lg:w-[616px] lg:h-[38px] px-4 h-[30px]  text-[12px] font-medium leading-[15px] lg:mt-4 lg:px-5 text-white lg:text-[16px] lg:leading-[19px] text-opacity-40">
            Partner with Reparv to access exclusive real estate opportunities
            and grow your business with our support.
          </p>
        </div>
      </div>
    </div>
  );
}
