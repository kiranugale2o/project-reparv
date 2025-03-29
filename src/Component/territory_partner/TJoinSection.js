"use client";
import { useState } from "react";

export default function TerritoryJoinFormSection() {
  const [currentData, setCurrentData] = useState({
    FullName: "",
    ContactNumber: "",
    City: "",
    Email: "",
    Experience: "",
    Message: "",
  });

  // States for error and success messages
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Handle input change for all fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setCurrentData({
      ...currentData,
      [name]: value, // Update the respective field based on the name attribute
    });
  };
  // Validation function for the form
  const validateForm = () => {
    const {
      FullName,
      ContactNumber,
      City,
      Email,
      Experience,
      Message,
    } = currentData;

    // Simple validation for required fields
    if (
      !FullName ||
      !ContactNumber ||
      !City ||
      !Email ||
      !Experience ||
      !Message
    ) {
      setError("All fields are required.");
      return false;
    }

    // Basic validation for ContactNumber (should be a 10-digit number)
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(ContactNumber)) {
      setError("Contact number should be exactly 10 digits.");
      return false;
    }

    // Basic validation for Email (simple email format check)
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(Email)) {
      setError("Please enter a valid email.");
      return false;
    }

    return true;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // Validate the form
    if (validateForm()) {
      // If validation passes, show a success message and log the data
      setSuccess("Form submitted successfully!");
      console.log("Submitted Data: ", currentData);
    }
  };
  return (
    <>
      <div
        id="territory_partner_join"
        className=" absolute  flex flex-col w-full item-center p-2 lg:items-center gap-[32px]  h-[867px] lg:h-[1027px] lg:top-[3503px] top-[5450px]"
      >
        {/* Form title */}
        <div className="flex mx-auto  flex-col lg:justify-center items-center p-0 gap-4 lg:w-[307px] h-[152px]">
          <div className="w-full lg:w-[747px] h-[35px] lg:h-[48px] text-center font-semibold text-[#004170] text-[28px] lg:text-[40px] leading-[40px] lg:leading-[48px]">
            Become A Territory Partner
          </div>

          <div className="mt-10 lg:w-[534px] h-[40px] md:h-[30px] lg:h-[28px] text-[#999999] text-[16px] font-medium leading-[24px] text-center">
            Take the first step towards a successful partnership with Reparv
          </div>

          {/* blue line */}
          <div className="hidden lg:flex w-[100px] h-0 border-2  border-[#004170]"></div>
        </div>

        {/* Register form */}

        <div className="flex  sm:mx-auto   flex-col lg:flex-row items-start  justify-center w-full   p-2 lg:p-0 w-full lg:w-[996px] h-[1030px] lg:h-[707px]">
          {/* banner for desktop screen */}
          <div className=" hidden lg:flex flex-col items-start p-8 gap-8 w-[293px] h-[707px] bg-[#065B9C] rounded-lg">
            <div className="flex flex-col items-start p-0 gap-6 w-[229px] h-[178px]">
              <div className="font-inter font-bold text-2xl leading-[29px] text-white">
                Partner with Excellence
              </div>
              <div className="font-inter font-normal text-xl leading-6 text-[#FFFFFFB3]">
                Fill out the form to start your journey as a Territory Partner
                with Reparv.
              </div>
            </div>

            <div className="flex flex-col items-start p-0 gap-6 w-[229px] h-[210px]">
              <div className="flex flex-row items-start p-0 gap-3 w-[223px] h-[38px]">
                <div className="flex gap-2 font-inter font-medium text-lg leading-5 text-white">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.0833 2 14.1083 2.15833 15.075 2.475C16.0417 2.79167 16.9333 3.23333 17.75 3.8L16.3 5.275C15.6667 4.875 14.9917 4.5625 14.275 4.3375C13.5583 4.1125 12.8 4 12 4C9.78333 4 7.89583 4.77917 6.3375 6.3375C4.77917 7.89583 4 9.78333 4 12C4 14.2167 4.77917 16.1042 6.3375 17.6625C7.89583 19.2208 9.78333 20 12 20C14.2167 20 16.1042 19.2208 17.6625 17.6625C19.2208 16.1042 20 14.2167 20 12C20 11.7 19.9833 11.4 19.95 11.1C19.9167 10.8 19.8667 10.5083 19.8 10.225L21.425 8.6C21.6083 9.13333 21.75 9.68333 21.85 10.25C21.95 10.8167 22 11.4 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22ZM10.6 16.6L6.35 12.35L7.75 10.95L10.6 13.8L20.6 3.775L22 5.175L10.6 16.6Z"
                      fill="#D3BD74"
                    />
                  </svg>{" "}
                  Comprehensive training and support
                </div>
              </div>

              <div className="flex flex-row items-start p-0 gap-3 w-[229px] h-[38px]">
                <div className="flex gap-2 font-inter font-medium text-lg leading-5 text-white">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.0833 2 14.1083 2.15833 15.075 2.475C16.0417 2.79167 16.9333 3.23333 17.75 3.8L16.3 5.275C15.6667 4.875 14.9917 4.5625 14.275 4.3375C13.5583 4.1125 12.8 4 12 4C9.78333 4 7.89583 4.77917 6.3375 6.3375C4.77917 7.89583 4 9.78333 4 12C4 14.2167 4.77917 16.1042 6.3375 17.6625C7.89583 19.2208 9.78333 20 12 20C14.2167 20 16.1042 19.2208 17.6625 17.6625C19.2208 16.1042 20 14.2167 20 12C20 11.7 19.9833 11.4 19.95 11.1C19.9167 10.8 19.8667 10.5083 19.8 10.225L21.425 8.6C21.6083 9.13333 21.75 9.68333 21.85 10.25C21.95 10.8167 22 11.4 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22ZM10.6 16.6L6.35 12.35L7.75 10.95L10.6 13.8L20.6 3.775L22 5.175L10.6 16.6Z"
                      fill="#D3BD74"
                    />
                  </svg>{" "}
                  Advanced marketing resources
                </div>
              </div>

              <div className="flex flex-row items-start p-0 gap-3 w-[239px] h-[24px]">
                <div className="flex gap-2 font-inter font-medium text-lg leading-5 text-white">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.0833 2 14.1083 2.15833 15.075 2.475C16.0417 2.79167 16.9333 3.23333 17.75 3.8L16.3 5.275C15.6667 4.875 14.9917 4.5625 14.275 4.3375C13.5583 4.1125 12.8 4 12 4C9.78333 4 7.89583 4.77917 6.3375 6.3375C4.77917 7.89583 4 9.78333 4 12C4 14.2167 4.77917 16.1042 6.3375 17.6625C7.89583 19.2208 9.78333 20 12 20C14.2167 20 16.1042 19.2208 17.6625 17.6625C19.2208 16.1042 20 14.2167 20 12C20 11.7 19.9833 11.4 19.95 11.1C19.9167 10.8 19.8667 10.5083 19.8 10.225L21.425 8.6C21.6083 9.13333 21.75 9.68333 21.85 10.25C21.95 10.8167 22 11.4 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22ZM10.6 16.6L6.35 12.35L7.75 10.95L10.6 13.8L20.6 3.775L22 5.175L10.6 16.6Z"
                      fill="#D3BD74"
                    />
                  </svg>{" "}
                  Exclusive territory rights
                </div>
              </div>

              <div className="flex flex-row items-start p-0 gap-3 w-[229px] h-[38px]">
                <div className="flex gap-2 font-inter font-medium text-lg leading-5 text-white">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.0833 2 14.1083 2.15833 15.075 2.475C16.0417 2.79167 16.9333 3.23333 17.75 3.8L16.3 5.275C15.6667 4.875 14.9917 4.5625 14.275 4.3375C13.5583 4.1125 12.8 4 12 4C9.78333 4 7.89583 4.77917 6.3375 6.3375C4.77917 7.89583 4 9.78333 4 12C4 14.2167 4.77917 16.1042 6.3375 17.6625C7.89583 19.2208 9.78333 20 12 20C14.2167 20 16.1042 19.2208 17.6625 17.6625C19.2208 16.1042 20 14.2167 20 12C20 11.7 19.9833 11.4 19.95 11.1C19.9167 10.8 19.8667 10.5083 19.8 10.225L21.425 8.6C21.6083 9.13333 21.75 9.68333 21.85 10.25C21.95 10.8167 22 11.4 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22ZM10.6 16.6L6.35 12.35L7.75 10.95L10.6 13.8L20.6 3.775L22 5.175L10.6 16.6Z"
                      fill="#D3BD74"
                    />
                  </svg>{" "}
                  Competitive commission structure
                </div>
              </div>
            </div>
          </div>

          <div className="flex mx-auto    flex-col  lg:mx-0 items-start  mt-[10px] lg:mt-0 p-4 lg:p-8 gap-6  lg:w-[703px] h-[1020px] lg:h-[707px] bg-white border-l border-t border-b border-[#e5e5e5] shadow-lg rounded-r-lg">
            <div className="font-inter mx-auto md:mx-auto font-medium text-2xl text-[#026FBE]">
              Register Your Interest
            </div>
            <form
              onSubmit={handleSubmit}
              className="mx-auto sm:mx-auto md:mx-0"
            >
              <div className="flex flex-col  items-start p-0 md:mx-auto lg:mx-0 gap-5 w-[300px]    lg:w-[631px]  lg:h-[468px]">
                <div className="flex flex-col lg:flex-row  items-start p-0 gap-7  w-full  lg:w-[631px] h-[200px] lg:h-[84px]">
                  <div className="flex flex-col items-start  p-0 gap-4  lg:w-[300.5px] md:w-[500px]  w-full h-[84px]">
                    <label className="font-inter font-medium text-sm text-black">
                      Full Name*
                    </label>

                    <input
                      type="text"
                      name="FullName"
                      onChange={handleInputChange}
                      className="rounded-lg w-full  lg:w-[300.5px] md:w-[500px]  h-[20px] p-6 border  text-[14px] font-medium leading-[20px] text-black"
                      placeholder="Enter Full Name"
                    />
                  </div>

                  <div
                    className="flex flex-col w-full items-start p-0 gap-4 
                  lg:w-[300.5px] md:w-[500px] h-[84px]"
                  >
                    <label className="font-inter font-medium text-sm text-black">
                      Contact Number*
                    </label>

                    <input
                      type="number"
                      name="ContactNumber"
                      onChange={handleInputChange}
                      className="rounded-lg w-full lg:lg:w-[300.5px] md:w-[500px] h-[20px] p-6 border  text-[14px] font-medium leading-[20px] text-black"
                      placeholder="Enter Contact Number"
                    />
                  </div>
                </div>

                <div className="flex flex-col lg:flex-row items-start p-0 gap-7 w-full lg:w-[631px] h-[200px] lg:h-[84px]">
                  <div className="flex flex-col items-start p-0 gap-4 lg:w-[300.5px] md:w-[500px]  w-full h-[84px]">
                    <label className="font-inter font-medium text-sm text-black">
                      Email Address*
                    </label>

                    <input
                      type="text"
                      name="Email"
                      onChange={handleInputChange}
                      className="rounded-lg w-full lg:w-[300.5px] md:w-[500px] h-[20px] p-6 border  text-[14px] font-medium leading-[20px] text-black"
                      placeholder="Enter Your Email"
                    />
                  </div>

                  <div className="flex flex-col items-start p-0 gap-4 lg:w-[300.5px] md:w-[500px]  w-full h-[84px]">
                    <label className="font-inter font-medium text-sm text-black">
                      City*
                    </label>

                    <input
                      type="text"
                      name="City"
                      onChange={handleInputChange}
                      className="rounded-lg w-full lg:lg:w-[300.5px] md:w-[500px] h-[20px] p-6 border  text-[14px] font-medium leading-[20px] text-black"
                      placeholder="Enter Your City"
                    />
                  </div>
                </div>

                {/* Years of Experience selected field */}
                <div className="flex flex-col  items-start  lg:p-0 gap-[10px] w-full md:w-[500px] lg:w-[631px] lg:h-[84px]">
                  <div className="lg:w-full lg:lg:w-[300.5px] md:w-[500px]  lg:px-0 h-[18px] text-black text-[12px] font-medium leading-[150%]">
                    How Many Years of Experience? *
                  </div>
                  <div className=" flex flex-row  items-center  gap-[12px]  w-full  h-[54px]  rounded-[6px] ">
                    <select
                      name="Experience"
                      onChange={handleInputChange}
                      id="dropdown"
                      className="mt-1 p-4 block  w-full lg:py-3 border border-gray-300 rounded-md shadow-sm  text-sm"
                    >
                      <option value="">Select experience</option>
                      <option value="1year">Less then 1 Year</option>
                      <option value="1-3year">1-3 years</option>
                      <option value="3-5year">3-5 years</option>
                      <option value="5-10year">5-10 years</option>
                      <option value="10+year">More then 10 years</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col items-start p-0 gap-4  w-full md:w-[500px] lg:w-[631px] h-[156px]">
                  <label className="font-inter font-medium text-sm text-black">
                    Message
                  </label>
                  <textarea
                    type="text"
                    name="Message"
                    onChange={handleInputChange}
                    className="w-full p-8 border h-[150px] lg:h-[80px] font-inter text-sm text-[#404040]"
                    placeholder="Enter your Message"
                  ></textarea>
                </div>
              </div>

              <div className="flex mt-5  md:ml-[80px] lg:ml-0 lg:mt-0 flex-row justify-center items-center gap-12 lg:w-[631px] h-[52px]">
                <button
                  type="submit"
                  className="flex w-full md:ml-[80px] lg:ml-0 hover:bg-blue-400 justify-center  items-center p-3.5 px-8 gap-[67px] lg:w-[151px] h-[52px] bg-[#026FBE] rounded-md"
                >
                  <p className=" font-inter  font-semibold text-xl text-white">
                    Submit
                  </p>
                </button>
              </div>
            </form>
            {/* Error and Success Messages */}
            <div className="flex w-full lg:w-[500px] text-[11px] lg:text-[15px]">
              {error && <p style={{ color: "red" }}>{error}</p>}
              {success && <p style={{ color: "green" }}>{success}</p>}
            </div>
            <div className="text-center text-sm text-[#404040]">
              By registering, you'll proceed to the payment page to complete the
              registration process
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
