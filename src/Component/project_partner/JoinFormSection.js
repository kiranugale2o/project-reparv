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
        className=" absolute flex flex-col w-full  lg:p-2 lg:items-center gap-[32px]  h-[867px] lg:h-[1027px] lg:top-[3703px] top-[5600px]"
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

        <div className="flex mx-auto    flex-col  lg:mx-0 items-start  mt-[10px] lg:mt-0 p-4 lg:p-8 gap-6  lg:w-[703px] h-[1020px] lg:h-[707px] bg-white border-l border-t border-b border-[#e5e5e5] shadow-lg rounded-r-lg">
          <div className="hidden font-inter mx-auto md:mx-auto font-medium text-2xl text-[#F97316]">
            Register Your Interest
          </div>
          <form onSubmit={handleSubmit} className="mx-auto sm:mx-auto md:mx-0">
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
                className="flex  md:ml-[80px] lg:ml-0 hover:bg-blue-400 justify-center  items-center p-3.5 px-8 gap-[67px] w-[151px] h-[52px] bg-[#076300] rounded-md"
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
    </>
  );
}
