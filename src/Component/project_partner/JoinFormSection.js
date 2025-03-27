"use client";
import { useState } from "react";

export default function JoinFormSection() {
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
        id="projectjoin"
        className=" absolute flex flex-col w-full item-center p-2 lg:items-center gap-[32px]  h-[867px] lg:h-[1027px] lg:top-[3503px] top-[5700px]"
      >
        {/* Form title */}
        <div className="flex relative md:mx-auto lg:mx-0  flex-col justify-center items-center p-0 gap-4 lg:w-[747px] h-[152px]">
          <div className="w-full lg:w-[747px] h-[35px] lg:h-[48px] text-center font-semibold text-[#076300] text-[28px] lg:text-[40px] leading-[48px]">
            Become A Project Partner
          </div>

          <div className="p-2 lg:w-[614px] h-[60px] lg:h-[48px] text-[#999999] text-[12px] lg:text-[16px] font-medium leading-[24px] text-center">
            Fill out the form below to register your interest and take the first
            step towards a profitable partnership.
          </div>

          {/* Orange line */}
          <div className="w-[100px] h-0 border-[2px]  border-[#076300]"></div>
        </div>

        <div className="  box-border  md:ml-0  lg:ml-10 lg:ml-0 lg:left-[1%] flex flex-col items-center w-full   p-5 lg:p-[32px] lg:px-[36px] lg:gap-[24px] lg:w-[703px] h-[980px] lg:h-[707px] bg-white border border-[#0000001a] rounded-[10px]">
          {/* Register Your Interest */}
          <div className="hidden lg:flex md:flex lg:w-[235px]  h-[36px] font-inter font-medium text-[24px] lg:leading-[150%] text-center text-[#076300]">
            Register Your Interest
          </div>
          {/* Form Fields */}
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col w-full gap-0 lg:gap-6">
              {/* Full name & contact input Fields */}
              <div className="flex flex-col lg:flex-row items-start p-5 lg:p-0 gap-[30px] lg:w-[631px] lg:h-[84px]">
                {/* full name input  */}
                <div className="flex flex-col items-start gap-[14px] w-full lg:w-[300.5px] h-[84px] flex-none order-0 flex-grow-1">
                  <div className="w-full lg:w-[300.5px] h-[18px] text-black text-[12px] font-medium leading-[150%]">
                    Full Name*
                  </div>

                  <div className="flex flex-row items-center p-[0px] px-[2px] gap-[12px] w-full lg:w-[300.5px] h-[52px] border border-[#00000033]  rounded-[6px]">
                    <input
                      type="text"
                      name="FullName"
                      onChange={handleInputChange}
                      className="w-full lg:w-[300.5px] h-[20px] p-6 text-[14px] font-medium leading-[20px] text-black"
                      placeholder="Enter Full Name"
                    />
                  </div>
                </div>
                {/* Conatact Number input  */}
                <div className="flex flex-col items-start gap-[14px] w-full lg:w-[300.5px] h-[84px] flex-none order-0 flex-grow-1">
                  <div className="w-full lg:w-[300.5px] h-[18px] text-black text-[12px] font-medium leading-[150%]">
                    Contact Number*
                  </div>
                  {/* contact number input  */}
                  <div className="flex  flex-col items-center p-[1px] px-[2px] gap-[12px] w-full lg:w-[300.5px] h-[52px] border border-[#00000033]  rounded-[6px]">
                    <input
                      type="number"
                      name="ContactNumber"
                      onChange={handleInputChange}
                      className="w-full lg:w-[300.5px] h-[20px] p-6 text-[14px] font-medium leading-[20px] text-black"
                      placeholder="Enter Mobile No."
                    />
                  </div>
                </div>
              </div>
              {/* email & city input Fields */}
              <div className="flex flex-col lg:flex-row items-start p-5 lg:p-0 gap-[30px] lg:w-[631px] lg:h-[84px]">
                {/*email input  */}
                <div className="flex flex-col items-start gap-[14px] w-full lg:w-[300.5px] h-[84px] flex-none order-0 flex-grow-1">
                  <div className="w-full lg:w-[300.5px] h-[18px] text-black text-[12px] font-medium leading-[150%]">
                    Email Address*
                  </div>

                  <div className="flex flex-row items-center p-[1px] px-[2px] gap-[12px] w-full lg:w-[300.5px] h-[52px] border border-[#00000033]  rounded-[6px]">
                    <input
                      type="text"
                      onChange={handleInputChange}
                      name="Email"
                      className="w-full lg:w-[300.5px] h-[20px] p-6 text-[14px] font-medium leading-[20px] text-black"
                      placeholder="Enter Your Email"
                    />
                  </div>
                </div>
                {/*  City input  */}
                <div className="flex flex-col items-start gap-[14px] w-full lg:w-[300.5px] h-[84px] flex-none order-0 flex-grow-1">
                  <div className="w-full lg:w-[300.5px] h-[18px] text-black text-[12px] font-medium leading-[150%]">
                    City*
                  </div>
                  {/* city name input  */}
                  <div className="flex flex-row items-center p-[1px] px-[2px] gap-[12px] w-full lg:w-[300.5px] h-[52px] border border-[#00000033]  rounded-[6px]">
                    <input
                      type="text"
                      name="City"
                      onChange={handleInputChange}
                      className="w-full lg:w-[300.5px] h-[20px] p-6 text-[14px] font-medium leading-[20px] text-black"
                      placeholder="Enter City Name"
                    />
                  </div>
                </div>
              </div>
              {/* Years of Experience selected field */}
              <div className="flex flex-col  items-start p-5 lg:p-0 gap-[10px] lg:w-[631px] lg:h-[84px]">
                <div className="lg:w-full lg:w-[300.5px] lg:px-5 lg:px-0 h-[18px] text-black text-[12px] font-medium leading-[150%]">
                  How Many Years of Experience? *
                </div>
                <div className=" flex flex-row  items-center  gap-[12px] w-full  h-[54px]  rounded-[6px] ">
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
              {/* Message Fields */}
              <div className="flex flex-col items-start gap-[14px] lg:w-[631px] h-[156px] flex-none order-3 self-stretch flex-grow-0">
                <div className="lg:w-[631px] p-4 lg:p-0 h-[18px] text-black text-[12px] font-medium leading-[150%]">
                  Message
                </div>
                <div className="flex flex-row items-start mx-auto   gap-[12px] w-[300px]  lg:w-[631px] h-[122px] border border-[#00000033] rounded-[6px] flex-none order-1 self-stretch flex-grow-0">
                  <input
                    type="text"
                    name="Message"
                    onChange={handleInputChange}
                    className="w-[350px] px-[5px] h-[120px] lg:w-[631px] hover:border hover:border-[#00000033] h-[90px] text-[14px] font-medium leading-[20px] text-[#666666]"
                    placeholder="Enter Your Message here..."
                  />
                </div>
              </div>
            </div>
            {/* Submit Button */}
            <div className="flex mx-auto mt-10 lg:mt-5 flex-row justify-center items-center p-[20px] px-[34px] gap-[67px] w-[151px] h-[32px] bg-[#2ECD24] rounded-[6px]">
              <button
                type="submit"
                className="w-[83px] h-[24px] font-inter font-semibold text-[18px] leading-[24px] text-white"
              >
                Submit
              </button>
            </div>
            {/* Error and Success Messages */}
            <div className="flex w-full lg:w-[500px] text-[11px] lg:text-[15px]">
              {error && <p style={{ color: "red" }}>{error}</p>}
              {success && <p style={{ color: "green" }}>{success}</p>}
            </div>
            {/* footer */}

            <div className="lg:w-[495px] mt-5 h-[15px]  mx-auto font-normal text-[12px] leading-[15px] text-black">
              By registering, you'll proceed to the payment page to complete the
              registration process.
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
