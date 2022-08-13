import React from "react";

const Checkout = () => {
  return (
    <div className="container px-5 py-5 mx-auto">
      <h4 className="text-2xl text-center font-semibold mb-2">Checkout</h4>

      <div className="flex justify-center items-center 2xl:container 2xl:mx-auto px-4 md:px-6 lg:px-20 xl:px-44">
        <div className="flex w-full sm:w-9/12 lg:w-full flex-col lg:flex-row justify-center items-center lg:space-x-10 2xl:space-x-36">
          <div className="flex w-full flex-col justify-start items-start">
            <div className="mt-12">
              <p className="text-xl font-semibold leading-5 text-gray-800">
                Shipping Details
              </p>
            </div>
            <div className="mt-8 flex flex-col justify-start items-start w-full space-y-8">
              <input
                className="px-2 focus:outline-none dark:bg-transparent dark:text-gray-400 dark:placeholder-gray-400 focus:ring-2 focus:ring-gray-500 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full"
                type="text"
                placeholder="First Name"
              />
              <input
                className="px-2 focus:outline-none  dark:bg-transparent dark:text-gray-400 dark:placeholder-gray-400 focus:ring-2 focus:ring-gray-500 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full"
                type="text"
                placeholder="Last Name"
              />
              <input
                className="px-2 focus:outline-none dark:bg-transparent dark:text-gray-400 dark:placeholder-gray-400 focus:ring-2 focus:ring-gray-500 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full"
                type="text"
                placeholder="Address"
              />
              <input
                className="px-2 focus:outline-none dark:bg-transparent dark:text-gray-400 dark:placeholder-gray-400 focus:ring-2 focus:ring-gray-500 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full"
                type="text"
                placeholder="Address (line 02)"
              />
              <div className="flex justify-between flex-col sm:flex-row w-full items-start space-y-8 sm:space-y-0 sm:space-x-8">
                <div className="relative w-full">
                  <p
                    id="button1"
                    className="px-2 border-b dark:text-gray-400 border-gray-200 text-left leading-4 text-base text-gray-600 py-4 w-full"
                  >
                    City
                  </p>
                  <button
                    onClick="showMenu1(true)"
                    className="text-gray-600 dark:text-gray-400 focus:outline-none focus:ring-2 focus:ring-2 focus:ring-gray-500 rounded-full cursor-pointer absolute bottom-4 right-0"
                  >
                    <img
                      id="close"
                      className="dark:hidden"
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/checkout-5-part-2-svg1.svg"
                      alt="Dropdown"
                    />
                    <img
                      id="open"
                      className="hidden transform rotate-180 dark:hidden"
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/checkout-5-part-2-svg1.svg"
                      alt="Dropdown"
                    />
                    <img
                      id="close"
                      className="hidden dark:block"
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/checkout-5-part-2-svg1dark.svg"
                      alt="Dropdown"
                    />
                    <img
                      id="open"
                      className="hidden transform rotate-180 hidden dark:block"
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/checkout-5-part-2-svg1dark.svg"
                      alt="Dropdown"
                    />
                  </button>
                  <div
                    id="menu"
                    className="shadow absolute z-10 bg-white top-10 w-full mt-3 hidden"
                  >
                    <div className="flex flex-col w-full">
                      <p
                        tabIndex="0"
                        onClick="changeButton1('London')"
                        className="focus:outline-none dark:bg-gray-800 dark:text-white cursor-pointer px-3 hover:text-white hover:bg-gray-800 focus:bg-gray-800 focus:text-white text-left text-base text-gray-600 py-2 w-full"
                      >
                        London
                      </p>
                      <p
                        tabIndex="0"
                        onClick="changeButton1('New York')"
                        className="focus:outline-none dark:bg-gray-800 dark:text-white cursor-pointer px-3 hover:text-white hover:bg-gray-800 focus:bg-gray-800 focus:text-white text-left text-base text-gray-600 py-2 w-full"
                      >
                        New York
                      </p>
                      <p
                        tabIndex="0"
                        onClick="changeButton1('Dubai')"
                        className="focus:outline-none dark:bg-gray-800 dark:text-white cursor-pointer px-3 hover:text-white hover:bg-gray-800 focus:bg-gray-800 focus:text-white text-left text-base text-gray-600 py-2 w-full"
                      >
                        Dubai
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative w-full">
                  <p
                    id="button2"
                    className="px-2 border-b dark:text-gray-400 border-gray-200 text-left leading-4 text-base text-gray-600 py-4 w-full"
                  >
                    Region
                    <span className="text-gray-400"> (optional)</span>
                  </p>
                  <button
                    onClick="showMenu2(true)"
                    className="text-gray-600 dark:text-gray-400 focus:outline-none focus:ring-2 focus:ring-2 focus:ring-gray-500 rounded-full cursor-pointer absolute bottom-4 right-0"
                  >
                    <img
                      id="close2"
                      className="dark:hidden"
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/checkout-5-part-2-svg1.svg"
                      alt="Dropdown"
                    />
                    <img
                      id="open2"
                      className="hidden transform rotate-180 dark:hidden"
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/checkout-5-part-2-svg1.svg"
                      alt="Dropdown"
                    />
                    <img
                      id="close2"
                      className="hidden dark:block"
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/checkout-5-part-2-svg1dark.svg"
                      alt="Dropdown"
                    />
                    <img
                      id="open2"
                      className="hidden transform rotate-180 hidden dark:block"
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/checkout-5-part-2-svg1dark.svg"
                      alt="Dropdown"
                    />
                  </button>
                  <div
                    id="menu2"
                    className="absolute z-10 bg-white top-10 shadow w-full mt-3 hidden"
                  >
                    <div className="flex flex-col w-full">
                      <p
                        tabIndex="0"
                        onClick="changeButton2('London')"
                        className="dark:bg-gray-800 dark:text-white focus:outline-none cursor-pointer px-3 hover:text-white hover:bg-gray-800 focus:bg-gray-800 focus:text-white text-left text-base text-gray-600 py-2 w-full"
                      >
                        London
                      </p>
                      <p
                        tabIndex="0"
                        onClick="changeButton2('New York')"
                        className="dark:bg-gray-800 dark:text-white focus:outline-none cursor-pointer px-3 hover:text-white hover:bg-gray-800 focus:bg-gray-800 focus:text-white text-left text-base text-gray-600 py-2 w-full"
                      >
                        New York
                      </p>
                      <p
                        tabIndex="0"
                        onClick="changeButton2('Dubai')"
                        className="dark:bg-gray-800 dark:text-white focus:outline-none cursor-pointer px-3 hover:text-white hover:bg-gray-800 focus:bg-gray-800 focus:text-white text-left text-base text-gray-600 py-2 w-full"
                      >
                        Dubai
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between flex-col sm:flex-row w-full items-start space-y-8 sm:space-y-0 sm:space-x-8">
                <div className="relative w-full">
                  <p
                    id="button3"
                    className="px-2 border-b  dark:text-gray-400 border-gray-200 text-left leading-4 text-base text-gray-600 py-4 w-full"
                  >
                    Country
                  </p>
                  <button
                    onClick="showMenu3(true)"
                    className="text-gray-600 dark:text-gray-400 focus:outline-none focus:ring-2 focus:ring-2 focus:ring-gray-500 rounded-full cursor-pointer absolute bottom-4 right-0"
                  >
                    <img
                      id="close3"
                      className="dark:hidden"
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/checkout-5-part-2-svg1.svg"
                      alt="Dropdown"
                    />
                    <img
                      id="open3"
                      className="hidden transform rotate-180 dark:hidden"
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/checkout-5-part-2-svg1.svg"
                      alt="Dropdown"
                    />
                    <img
                      id="close3"
                      className="hidden dark:block"
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/checkout-5-part-2-svg1dark.svg"
                      alt="Dropdown"
                    />
                    <img
                      id="open3"
                      className="hidden transform rotate-180 hidden dark:block"
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/checkout-5-part-2-svg1dark.svg"
                      alt="Dropdown"
                    />
                  </button>
                  <div
                    id="menu3"
                    className="absolute z-10 bg-white top-10 shadow w-full mt-3 hidden"
                  >
                    <div className="flex flex-col w-full">
                      <p
                        tabIndex="0 "
                        onClick="changeButton3('USA')"
                        className=" dark:text-white dark:bg-gray-800 focus:outline-none cursor-pointer px-3 hover:text-white hover:bg-gray-800 focus:bg-gray-800 focus:text-white text-left text-base text-gray-600 py-2 w-full"
                      >
                        USA
                      </p>
                      <p
                        tabIndex="0 "
                        onClick="changeButton3('UK')"
                        className=" dark:text-white dark:bg-gray-800 focus:outline-none cursor-pointer px-3 hover:text-white hover:bg-gray-800 focus:bg-gray-800 focus:text-white text-left text-base text-gray-600 py-2 w-full"
                      >
                        UK
                      </p>
                      <p
                        tabIndex="0 "
                        onClick="changeButton3('Russia')"
                        className=" dark:text-white dark:bg-gray-800 focus:outline-none cursor-pointer px-3 hover:text-white hover:bg-gray-800 focus:bg-gray-800 focus:text-white text-left text-base text-gray-600 py-2 w-full"
                      >
                        Russia
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full">
                  <input
                    className="focus:outline-none dark:text-gray-400 dark:bg-transparent dark:placeholder-gray-400 focus:ring-2 focus:ring-gray-500 px-2 border-b border-gray-200 leading-4 text-base placeholder-gray-600 pt-4 pb-3 w-full"
                    type="text"
                    placeholder="Zip Code"
                  />
                </div>
              </div>
              <input
                className="focus:outline-none dark:text-gray-400 dark:bg-transparent dark:placeholder-gray-400 focus:ring-2 focus:ring-gray-500 px-2 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full"
                type="text"
                placeholder="Phone Number"
              />
            </div>
            <button className="focus:outline-none focus:ring-2 dark:bg-gray-800 dark:text-white focus:ring-gray-500 focus:ring-offset-2 mt-8 text-base font-medium focus:ring-2 focus:ring-ocus:ring-gray-800 leading-4 hover:bg-black py-4 w-full md:w-4/12 lg:w-full text-white bg-gray-800">
              Proceed to payment
            </button>
            <div className="mt-4 flex justify-start items-center w-full">
              <a
                href="javascript:void(0)"
                className="text-base leading-4 dark:text-gray-400 hover:underline focus:outline-none focus:text-gray-500 hover:text-gray-800 text-gray-600"
              >
                Back to my bag
              </a>
            </div>
          </div>

          <div className="flex flex-col justify-start items-start bg-gray-50 dark:bg-gray-800 w-full p-6 md:p-14">
            <div>
              <h1 className="text-2xl  dark:text-white font-semibold leading-6 text-gray-800">
                Order Summary
              </h1>
            </div>
            <div className="flex mt-7 flex-col items-end w-full space-y-6">
              <div className="flex justify-between w-full items-center">
                <p className="text-lg dark:text-gray-300 leading-4 text-gray-600">
                  Total items
                </p>
                <p className="text-lg dark:text-gray-300 font-semibold leading-4 text-gray-600">
                  20
                </p>
              </div>
              <div className="flex justify-between w-full items-center">
                <p className="text-lg dark:text-gray-300 leading-4 text-gray-600">
                  Total Charges
                </p>
                <p className="text-lg dark:text-gray-300 font-semibold leading-4 text-gray-600">
                  $2790
                </p>
              </div>
              <div className="flex justify-between w-full items-center">
                <p className="text-lg dark:text-gray-300 leading-4 text-gray-600">
                  Shipping charges
                </p>
                <p className="text-lg dark:text-gray-300 font-semibold leading-4 text-gray-600">
                  $90
                </p>
              </div>
              <div className="flex justify-between w-full items-center">
                <p className="text-lg dark:text-gray-300 leading-4 text-gray-600">
                  Sub total
                </p>
                <p className="text-lg dark:text-gray-300 font-semibold leading-4 text-gray-600">
                  $3520
                </p>
              </div>
            </div>
            <div className="flex justify-between w-full items-center mt-32">
              <p className="text-xl dark:text-white font-semibold leading-4 text-gray-800">
                Estimated Total
              </p>
              <p className="text-lg dark:text-white font-semibold leading-4 text-gray-800">
                $2900
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
