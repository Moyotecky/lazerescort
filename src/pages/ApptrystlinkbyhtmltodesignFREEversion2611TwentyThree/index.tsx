import React from "react";

import { Img, Text } from "components";

const ApptrystlinkbyhtmltodesignFREEversion2611TwentyThreePage: React.FC =
  () => {
    return (
      <>
        <div
          className="bg-cover bg-gray-100_04 bg-no-repeat font-cabin h-[1627px] mx-auto relative w-full"
          style={{ backgroundImage: "url('images/img_apptrystlinkby.png')" }}
        >
          <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto max-w-[1140px] md:px-5 py-12 w-full">
            <div className="flex flex-col items-center justify-start mb-[1312px] pt-12 w-full">
              <div className="flex flex-col gap-1.5 items-center justify-end p-4 w-full">
                <div className="flex flex-col items-center justify-start mt-8 pt-1 px-1">
                  <Text
                    className="md:text-5xl sm:text-[42px] text-[56px] text-center text-red-700_01"
                    size="txtCabinMedium56"
                  >
                    Join Tryst.link
                  </Text>
                </div>
                <div className="flex flex-col font-helvetica items-center justify-end p-0.5">
                  <Text
                    className="mt-[3px] text-blue_gray-500 text-center text-xl"
                    size="txtHelvetica20"
                  >
                    Home of the independent escort, a platform by us, for us
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bg-gray-900_04 border-b border-solid border-white-A700_33 flex flex-col inset-x-[0] items-center justify-start mx-auto p-1 top-[0] w-full">
            <div className="flex flex-col items-center justify-start max-w-[1140px] md:px-5 w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-end p-[3px] w-full">
                <Img
                  className="h-12"
                  src="images/img_linkmargin.svg"
                  alt="linkmargin"
                />
                <div className="flex md:flex-1 flex-col items-center justify-start w-[72%] md:w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <div className="flex flex-col items-center justify-start px-[19px] w-[15%] md:w-full">
                      <div className="flex flex-row gap-2 items-center justify-center py-2 w-[98%] md:w-full">
                        <Img
                          className="h-[22px]"
                          src="images/img_search_white_a700.svg"
                          alt="search"
                        />
                        <Text
                          className="text-lg text-white-A700"
                          size="txtCabinBold18"
                        >
                          Search
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-1 flex-row items-start justify-center mr-[19px] py-[7px] w-[12%] md:w-full">
                  <a
                    href="javascript:"
                    className="mt-1 text-lg text-white-A700"
                  >
                    <Text size="txtCabinBold18">Login</Text>
                  </a>
                  <Text
                    className="ml-[5px] mt-[5px] text-base text-white-A700"
                    size="txtCabinRegular16"
                  >
                    or
                  </Text>
                  <a
                    href="javascript:"
                    className="ml-[5px] mt-1 text-lg text-white-A700"
                  >
                    <Text size="txtCabinBold18">Sign up</Text>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

export default ApptrystlinkbyhtmltodesignFREEversion2611TwentyThreePage;
