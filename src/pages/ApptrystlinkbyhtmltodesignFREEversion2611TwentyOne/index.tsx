import React from "react";

import { Button, Img, Input, List, Text } from "components";
import Header3 from "components/Header3";

const ApptrystlinkbyhtmltodesignFREEversion2611TwentyOnePage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-cabin items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <Header3 className="bg-gray-900_04 border-b border-solid border-white-A700_33 flex flex-col items-center justify-center md:px-5 w-full" />
            <div className="flex flex-col font-helvetica items-center justify-start max-w-[1200px] mx-auto md:px-5 w-full">
              <div className="bg-white-A700 flex flex-col gap-12 items-center justify-start p-8 sm:px-5 w-full">
                <Input
                  name="alert"
                  placeholder="This account has not been set up for 2-step login"
                  className="p-0 placeholder:text-red-900_01 text-base text-left w-full"
                  wrapClassName="border border-deep_orange-100_01 border-solid flex pl-5 pr-1 w-[96%]"
                  suffix={
                    <Img
                      className="ml-[35px] my-auto"
                      src="images/img_close_red_900_01.svg"
                      alt="close"
                    />
                  }
                  shape="round"
                  color="red_100"
                  size="lg"
                ></Input>
                <div className="flex flex-col font-cabin items-center justify-start w-full">
                  <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                    <div className="flex flex-col items-center justify-start pb-12">
                      <div className="flex flex-col items-center justify-start pb-[5px] px-[5px] w-full">
                        <div className="flex flex-col items-start justify-start pr-[3px] pt-[3px]">
                          <Text
                            className="sm:text-4xl md:text-[38px] text-[40px] text-gray-900_04 tracking-[0.40px]"
                            size="txtCabinBold40"
                          >
                            Set up 2-step login
                          </Text>
                        </div>
                        <div className="flex flex-col font-helvetica items-start justify-end mt-[7px]">
                          <Text
                            className="text-gray-800_09 text-sm"
                            size="txtHelvetica14"
                          >
                            <>
                              It&#39;s time to protect your account by setting
                              up 2-step login.
                            </>
                          </Text>
                        </div>
                        <div className="flex flex-col font-helvetica items-start justify-start mt-[15px] pr-0.5 pt-0.5">
                          <Text
                            className="leading-[22.00px] text-gray-800_09 text-sm"
                            size="txtHelvetica14"
                          >
                            <>
                              With 2-step login, you&#39;ll need both your
                              password and a verification app code or
                              <br />
                              security key / passkey to log in. It&#39;s the
                              best way to defeat scammers and secure
                              <br />
                              your account.
                            </>
                          </Text>
                        </div>
                        <div className="flex flex-col font-helvetica items-start justify-end mt-[15px]">
                          <Text
                            className="text-gray-900_04 text-sm"
                            size="txtHelvetica14Gray90004"
                          >
                            Learn more about 2-step login
                          </Text>
                        </div>
                      </div>
                    </div>
                    <Img
                      className="h-[253px]"
                      src="images/img_divcol12.svg"
                      alt="divcolTwelve"
                    />
                  </div>
                  <List
                    className="sm:flex-col flex-row gap-px grid md:grid-cols-1 grid-cols-2 justify-center w-full"
                    orientation="horizontal"
                  >
                    <div className="flex flex-1 flex-col items-center justify-end sm:ml-[0] pt-6 w-full">
                      <div className="flex flex-col items-center justify-start px-2 w-full">
                        <div className="bg-white-A700 border border-gray-900_1f border-solid flex flex-col items-start justify-start p-1 rounded shadow-bs16 w-full">
                          <Img
                            className="h-[118px] md:ml-[0] ml-[19px]"
                            src="images/img_divcol2margin.svg"
                            alt="divcol2margin"
                          />
                          <div className="flex flex-col items-start justify-start md:ml-[0] ml-[19px]">
                            <Text
                              className="mb-[3px] sm:text-2xl md:text-[26px] text-[28px] text-gray-900_04 tracking-[0.28px]"
                              size="txtCabinBold28"
                            >
                              Authenticator app
                            </Text>
                          </div>
                          <div className="flex flex-col font-helvetica items-center justify-start md:ml-[0] ml-[19px] pb-[15px] w-[93%] md:w-full">
                            <div className="flex flex-col items-start justify-start pr-0.5 pt-0.5 w-full">
                              <Text
                                className="leading-[22.00px] text-gray-800_09 text-sm"
                                size="txtHelvetica14"
                              >
                                <span className="text-gray-800_09 font-helvetica text-left font-normal">
                                  Generate a code using an app such as{" "}
                                </span>
                                <span className="text-gray-800_09 font-helvetica text-left font-normal">
                                  Google Authenticator
                                </span>
                                <span className="text-gray-800_09 font-helvetica text-left font-normal">
                                  {" "}
                                  (
                                </span>
                                <span className="text-gray-900_04 font-helvetica text-left font-normal">
                                  Android
                                </span>
                                <span className="text-gray-800_09 font-helvetica text-left font-normal">
                                  ,{" "}
                                </span>
                                <span className="text-gray-900_04 font-helvetica text-left font-normal">
                                  iOS
                                </span>
                                <span className="text-gray-800_09 font-helvetica text-left font-normal">
                                  <>
                                    ),
                                    <br />
                                  </>
                                </span>
                                <span className="text-gray-800_09 font-helvetica text-left font-normal">
                                  Microsoft Authenticator
                                </span>
                                <span className="text-gray-800_09 font-helvetica text-left font-normal">
                                  {" "}
                                  (
                                </span>
                                <span className="text-gray-900_04 font-helvetica text-left font-normal">
                                  Android
                                </span>
                                <span className="text-gray-800_09 font-helvetica text-left font-normal">
                                  ,{" "}
                                </span>
                                <span className="text-gray-900_04 font-helvetica text-left font-normal">
                                  iOS
                                </span>
                                <span className="text-gray-800_09 font-helvetica text-left font-normal">
                                  ),{" "}
                                </span>
                                <span className="text-gray-900_04 font-helvetica text-left font-normal">
                                  1Password
                                </span>
                                <span className="text-gray-800_09 font-helvetica text-left font-normal">
                                  ,{" "}
                                </span>
                                <span className="text-gray-800_09 font-helvetica text-left font-normal">
                                  Authy
                                </span>
                                <span className="text-gray-800_09 font-helvetica text-left font-normal">
                                  {" "}
                                  (
                                </span>
                                <span className="text-gray-900_04 font-helvetica text-left font-normal">
                                  Android
                                </span>
                                <span className="text-gray-800_09 font-helvetica text-left font-normal">
                                  ,{" "}
                                </span>
                                <span className="text-gray-900_04 font-helvetica text-left font-normal">
                                  iOS
                                </span>
                                <span className="text-gray-800_09 font-helvetica text-left font-normal">
                                  <>
                                    ,<br />
                                  </>
                                </span>
                                <span className="text-gray-900_04 font-helvetica text-left font-normal">
                                  Windows, macOS, or Linux
                                </span>
                                <span className="text-gray-800_09 font-helvetica text-left font-normal">
                                  ), or{" "}
                                </span>
                                <span className="text-gray-800_09 font-helvetica text-left font-normal">
                                  FreeOTP
                                </span>
                                <span className="text-gray-800_09 font-helvetica text-left font-normal">
                                  {" "}
                                  (
                                </span>
                                <span className="text-gray-900_04 font-helvetica text-left font-normal">
                                  Android
                                </span>
                                <span className="text-gray-800_09 font-helvetica text-left font-normal">
                                  ,{" "}
                                </span>
                                <span className="text-gray-900_04 font-helvetica text-left font-normal">
                                  iOS
                                </span>
                                <span className="text-gray-800_09 font-helvetica text-left font-normal">
                                  ).
                                </span>
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-col font-cabin items-center justify-start mb-5 md:ml-[0] ml-[19px] pt-1 w-[93%] md:w-full">
                            <div className="flex flex-col items-start justify-start w-full">
                              <Button
                                className="border border-red-A200 border-solid cursor-pointer font-bold min-w-[207px] rounded-[18px] text-base text-center"
                                color="red_A200"
                                size="md"
                                variant="fill"
                              >
                                Set up authenticator app
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col items-center justify-end sm:ml-[0] pt-6 w-full">
                      <div className="flex flex-col items-center justify-start px-2 w-full">
                        <div className="bg-white-A700 border border-gray-900_1f border-solid flex flex-col items-start justify-start p-1 rounded shadow-bs16 w-full">
                          <Img
                            className="h-[118px] md:ml-[0] ml-[19px]"
                            src="images/img_divcol2margin_gray_900_04.svg"
                            alt="divcol2margin"
                          />
                          <div className="flex flex-col items-start justify-start md:ml-[0] ml-[19px]">
                            <Text
                              className="mb-[3px] sm:text-2xl md:text-[26px] text-[28px] text-gray-900_04 tracking-[0.28px]"
                              size="txtCabinBold28"
                            >
                              Security key / passkey
                            </Text>
                          </div>
                          <div className="flex flex-col font-helvetica items-center justify-start md:ml-[0] ml-[19px] pb-[15px] w-[93%] md:w-full">
                            <div className="flex flex-col items-center justify-start pr-0.5 pt-0.5 w-full">
                              <Text
                                className="leading-[22.00px] text-gray-800_09 text-sm"
                                size="txtHelvetica14"
                              >
                                <>
                                  Use the login credentials for your device
                                  (such as fingerprint, facial recognition,
                                  <br />
                                  phone pin, or swipe pattern).
                                </>
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-col font-cabin items-center justify-start mb-[42px] md:ml-[0] ml-[19px] pt-1 w-[93%] md:w-full">
                            <div className="flex flex-col items-start justify-start w-full">
                              <Button
                                className="border border-red-A200 border-solid cursor-pointer font-bold min-w-[246px] rounded-[18px] text-base text-center"
                                color="red_A200"
                                size="md"
                                variant="fill"
                              >
                                Set up a security key / passkey
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </List>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-end pt-8 w-full">
            <div className="bg-gray-900_04 border-b-2 border-red-700_01 border-solid flex flex-col items-center justify-start p-[30px] sm:px-5 w-full">
              <div className="flex flex-col items-center justify-start max-w-[1140px] mb-[3px] mx-auto md:px-5 w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex md:flex-col flex-row md:gap-5 items-center justify-evenly w-full">
                    <Img
                      className="h-[364px]"
                      src="images/img_divcol12margin.svg"
                      alt="divcol12margin"
                    />
                    <div className="flex md:flex-1 flex-col items-center justify-start pb-[23px] w-[67%] md:w-full">
                      <div className="flex md:flex-col flex-row md:gap-5 items-center justify-evenly w-full">
                        <div className="flex md:flex-1 flex-col gap-[7px] items-center justify-start pb-6 sm:px-5 px-6 w-1/4 md:w-full">
                          <div className="flex flex-col items-start justify-start">
                            <Text
                              className="text-2xl md:text-[22px] text-gray-900_04 sm:text-xl tracking-[0.24px]"
                              size="txtCabinBold24"
                            >
                              Menu
                            </Text>
                          </div>
                          <div className="flex flex-col font-helvetica items-start justify-end pr-[7px] py-[7px]">
                            <Text
                              className="text-[14.4px] text-gray-50_02"
                              size="txtHelvetica144"
                            >
                              Home
                            </Text>
                          </div>
                          <div className="flex flex-col font-helvetica items-start justify-end pr-[7px] py-[7px]">
                            <Text
                              className="text-[14.4px] text-gray-50_02"
                              size="txtHelvetica144"
                            >
                              Dashboard
                            </Text>
                          </div>
                          <div className="flex flex-col font-helvetica items-start justify-end pr-[5px] py-[5px]">
                            <Text
                              className="mt-[3px] text-[14.4px] text-gray-50_02"
                              size="txtHelvetica144"
                            >
                              Messages
                            </Text>
                          </div>
                          <div className="flex flex-col font-helvetica items-start justify-end pr-[7px] py-[7px]">
                            <Text
                              className="text-[14.4px] text-gray-50_02"
                              size="txtHelvetica144"
                            >
                              Favourites
                            </Text>
                          </div>
                          <div className="flex flex-col font-helvetica items-start justify-end mb-[119px] pr-[5px] py-[5px]">
                            <a
                              href="javascript:"
                              className="mt-[3px] text-[14.4px] text-gray-50_02"
                            >
                              <Text size="txtHelvetica144">Logout</Text>
                            </a>
                          </div>
                        </div>
                        <div className="flex md:flex-1 flex-col gap-[7px] items-center justify-start pb-6 sm:px-5 px-6 w-1/4 md:w-full">
                          <div className="flex flex-col items-start justify-start">
                            <Text
                              className="text-2xl md:text-[22px] text-gray-900_04 sm:text-xl tracking-[0.24px]"
                              size="txtCabinBold24"
                            >
                              Browse
                            </Text>
                          </div>
                          <div className="flex flex-col font-helvetica items-start justify-end pr-[7px] py-[7px]">
                            <Text
                              className="text-[14.4px] text-gray-50_02"
                              size="txtHelvetica144"
                            >
                              Locations
                            </Text>
                          </div>
                          <div className="flex flex-col font-helvetica items-start justify-end pr-[7px] py-[7px]">
                            <Text
                              className="text-[14.4px] text-gray-50_02"
                              size="txtHelvetica144"
                            >
                              All Escorts
                            </Text>
                          </div>
                          <div className="flex flex-col font-helvetica items-start justify-start mb-[151px] pr-[7px] py-[7px]">
                            <Text
                              className="leading-[32.00px] text-[14.4px] text-gray-50_02"
                              size="txtHelvetica144"
                            >
                              <>
                                Backpage
                                <br />
                                Alternatives
                              </>
                            </Text>
                          </div>
                        </div>
                        <List
                          className="md:flex-1 sm:flex-col flex-row grid grid-cols-2 w-1/2 md:w-full"
                          orientation="horizontal"
                        >
                          <div className="flex flex-col gap-[7px] items-center justify-start pb-6 sm:px-5 px-6 w-full">
                            <div className="flex flex-col items-start justify-start">
                              <Text
                                className="text-2xl md:text-[22px] text-gray-900_04 sm:text-xl tracking-[0.24px]"
                                size="txtCabinBold24"
                              >
                                Resources
                              </Text>
                            </div>
                            <div className="flex flex-col font-helvetica items-start justify-end pr-[5px] py-[5px]">
                              <Text
                                className="mt-[3px] text-[14.4px] text-gray-50_02"
                                size="txtHelvetica144"
                              >
                                Blog
                              </Text>
                            </div>
                            <div className="flex flex-col font-helvetica items-start justify-start pr-[7px] py-[7px]">
                              <Text
                                className="leading-[32.00px] text-[14.4px] text-gray-50_02"
                                size="txtHelvetica144"
                              >
                                <>
                                  TLC Donation
                                  <br />
                                  Matching
                                </>
                              </Text>
                            </div>
                            <div className="flex flex-col font-helvetica items-start justify-end pr-[7px] py-[7px]">
                              <Text
                                className="text-[14.4px] text-gray-50_02"
                                size="txtHelvetica144"
                              >
                                Resources
                              </Text>
                            </div>
                            <div className="flex flex-col font-helvetica items-start justify-end pr-[5px] py-[5px]">
                              <Text
                                className="mt-[3px] text-[14.4px] text-gray-50_02"
                                size="txtHelvetica144"
                              >
                                #AcceptanceMatters
                              </Text>
                            </div>
                            <div className="flex flex-col font-helvetica items-start justify-end pr-[7px] py-[7px]">
                              <Text
                                className="text-[14.4px] text-gray-50_02"
                                size="txtHelvetica144"
                              >
                                Escort Terms
                              </Text>
                            </div>
                            <div className="flex flex-col font-helvetica items-start justify-end pr-[5px] py-[5px]">
                              <Text
                                className="mt-[3px] text-[14.4px] text-gray-50_02"
                                size="txtHelvetica144"
                              >
                                Tryst.link FAQ
                              </Text>
                            </div>
                            <div className="flex flex-col font-helvetica items-start justify-end mb-[23px] pr-[7px] py-[7px]">
                              <Text
                                className="text-[14.4px] text-gray-50_02"
                                size="txtHelvetica144"
                              >
                                Sex Work FAQ
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-col gap-2 items-center justify-start pb-6 sm:px-5 px-6 w-full">
                            <div className="flex flex-col items-start justify-start">
                              <Text
                                className="text-2xl md:text-[22px] text-gray-900_04 sm:text-xl tracking-[0.24px]"
                                size="txtCabinBold24"
                              >
                                Platform
                              </Text>
                            </div>
                            <div className="flex flex-col font-helvetica items-start justify-end pr-[5px] py-[5px]">
                              <Text
                                className="mt-[3px] text-[14.4px] text-gray-50_02"
                                size="txtHelvetica144"
                              >
                                Help / Support
                              </Text>
                            </div>
                            <div className="flex flex-col font-helvetica items-start justify-end pr-[7px] py-[7px]">
                              <Text
                                className="text-[14.4px] text-gray-50_02"
                                size="txtHelvetica144"
                              >
                                About
                              </Text>
                            </div>
                            <div className="flex flex-col font-helvetica items-start justify-end pr-[7px] py-[7px]">
                              <Text
                                className="text-[14.4px] text-gray-50_02"
                                size="txtHelvetica144"
                              >
                                Social
                              </Text>
                            </div>
                            <div className="flex flex-col font-helvetica items-start justify-end pr-[7px] py-[7px]">
                              <Text
                                className="text-[14.4px] text-gray-50_02"
                                size="txtHelvetica144"
                              >
                                Terms
                              </Text>
                            </div>
                            <div className="flex flex-col font-helvetica items-start justify-end pr-[5px] py-[5px]">
                              <Text
                                className="mt-[3px] text-[14.4px] text-gray-50_02"
                                size="txtHelvetica144"
                              >
                                Privacy
                              </Text>
                            </div>
                            <div className="flex flex-col font-helvetica items-start justify-end pr-[5px] py-[5px]">
                              <Text
                                className="mt-[3px] text-[14.4px] text-gray-50_02"
                                size="txtHelvetica144"
                              >
                                Legal Notices
                              </Text>
                            </div>
                            <div className="flex flex-col font-helvetica items-start justify-start mb-[22px] pr-[7px] py-[7px]">
                              <Text
                                className="leading-[32.00px] text-[14.4px] text-gray-50_02"
                                size="txtHelvetica144"
                              >
                                <>
                                  Anti-Exploitation
                                  <br />
                                  Policy
                                </>
                              </Text>
                            </div>
                          </div>
                        </List>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col font-helvetica items-start justify-end pr-4 pt-4 w-full">
                    <div className="flex flex-col items-center justify-start sm:px-5 px-6 w-[51%] md:w-full">
                      <div className="flex flex-col items-start justify-end">
                        <Text
                          className="mt-[5px] text-[11.5px] text-white-A700_7f"
                          size="txtHelvetica115"
                        >
                          © 2018–2023, Assembly Four
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ApptrystlinkbyhtmltodesignFREEversion2611TwentyOnePage;
