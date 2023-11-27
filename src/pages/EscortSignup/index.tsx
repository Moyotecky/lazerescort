import React from "react";

import { Button, Img, Input, Text } from "components";

const EscortSignupPage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-cabin items-center justify-start mx-auto p-[150px] md:px-10 sm:px-5 w-full">
        <div className="flex flex-col items-center justify-start max-w-[1140px] mb-[334px] mt-[88px] mx-auto w-full">
          <div className="flex flex-col items-center justify-start pb-[22px] sm:px-5 px-[22px] w-full">
            <div className="sm:h-[1189px] h-[1338px] md:h-[2192px] relative w-[85%] md:w-full">
              <div className="h-[1338px] m-auto w-full">
                <Img
                  className="h-[200px] mb-[-51px] ml-auto mr-2.5 z-[1]"
                  src="images/img_divsignupimage.svg"
                  alt="divsignupimage"
                />
                <div className="bg-white-A700 h-[1189px] mt-auto mx-auto rounded-[24px] shadow-bs15 w-full"></div>
              </div>
              <div className="absolute bottom-[0] flex md:flex-col flex-row md:gap-5 inset-x-[0] items-center justify-start mx-auto w-[95%]">
                <div className="flex flex-col gap-4 items-start justify-start pb-6 sm:px-5 px-6 w-1/2 md:w-full">
                  <div className="flex flex-col items-start justify-start">
                    <Text
                      className="md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900_05"
                      size="txtCabinBold32"
                    >
                      Policies
                    </Text>
                  </div>
                  <div className="flex flex-col font-helvetica items-start justify-start pr-[3px] pt-[3px]">
                    <Text
                      className="leading-[25.00px] text-base text-blue_gray-900_05"
                      size="txtHelvetica16"
                    >
                      <>
                        Welcome to Tryst.link, home of the independent
                        <br />
                        escort! We’re excited that you want to join us.
                        <br />
                        Before you create your account there are some
                        <br />
                        important things you need to agree to:
                      </>
                    </Text>
                  </div>
                  <div className="flex flex-col font-helvetica items-start justify-start pl-10 sm:pl-5 w-[94%] md:w-full">
                    <div className="flex flex-col items-start justify-start pr-[3px] pt-[3px] w-full">
                      <div className="flex flex-col gap-1.5 items-center justify-start w-[92%] md:w-full">
                        <div className="flex flex-row items-start justify-evenly w-full">
                          <Text
                            className="text-base text-blue_gray-900_05"
                            size="txtHelveticaBold16Bluegray90005"
                          >
                            You must be over the age of 18
                          </Text>
                          <Text
                            className="text-base text-blue_gray-900_05"
                            size="txtHelvetica16"
                          >
                            {" "}
                            and the
                          </Text>
                        </div>
                        <Text
                          className="leading-[25.00px] text-base text-blue_gray-900_05"
                          size="txtHelvetica16"
                        >
                          <>
                            age of majority in your jurisdiction to use
                            <br />
                            Tryst.link.
                          </>
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start pr-[3px] pt-[3px] w-full">
                      <div className="flex flex-col gap-1.5 items-start justify-start w-[94%] md:w-full">
                        <div className="flex flex-row items-start justify-evenly w-full">
                          <Text
                            className="text-base text-blue_gray-900_05"
                            size="txtHelveticaBold16Bluegray90005"
                          >
                            You must adhere to your local laws
                          </Text>
                          <Text
                            className="text-base text-blue_gray-900_05"
                            size="txtHelvetica16"
                          >
                            {" "}
                            and
                          </Text>
                        </div>
                        <Text
                          className="leading-[25.00px] text-base text-blue_gray-900_05"
                          size="txtHelvetica16"
                        >
                          <>
                            agree not to offer any services that are
                            <br />
                            prohibited in that jurisdiction.
                          </>
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col gap-1.5 items-start justify-start pr-[3px] pt-[3px] w-full">
                      <div className="md:h-[43px] h-[46px] relative w-[97%]">
                        <div className="absolute flex flex-col gap-[5px] h-max inset-[0] items-start justify-center m-auto w-full">
                          <Text
                            className="text-base text-blue_gray-900_05"
                            size="txtHelveticaBold16Bluegray90005"
                          >
                            You must be creating an account of your
                          </Text>
                          <Text
                            className="text-base text-blue_gray-900_05"
                            size="txtHelveticaBold16Bluegray90005"
                          >
                            own free will
                          </Text>
                        </div>
                        <Text
                          className="absolute bottom-[0] right-[0] text-base text-blue_gray-900_05"
                          size="txtHelvetica16"
                        >
                          , free of any outside pressure,
                        </Text>
                      </div>
                      <Text
                        className="leading-[25.00px] text-base text-blue_gray-900_05"
                        size="txtHelvetica16"
                      >
                        <>
                          and that account must remain in your control
                          <br />
                          only.
                        </>
                      </Text>
                    </div>
                    <div className="flex flex-col gap-[7px] items-start justify-end w-full">
                      <div className="md:h-[43px] h-[46px] relative w-[93%]">
                        <div className="absolute flex flex-col gap-[7px] h-max inset-[0] items-start justify-center m-auto w-full">
                          <Text
                            className="text-base text-blue_gray-900_05"
                            size="txtHelveticaBold16Bluegray90005"
                          >
                            You must provide valid identification to
                          </Text>
                          <Text
                            className="text-base text-blue_gray-900_05"
                            size="txtHelveticaBold16Bluegray90005"
                          >
                            verify your age
                          </Text>
                        </div>
                        <Text
                          className="absolute bottom-[0] right-[4%] text-base text-blue_gray-900_05"
                          size="txtHelvetica16"
                        >
                          {" "}
                          before you can create a
                        </Text>
                      </div>
                      <Text
                        className="text-base text-blue_gray-900_05"
                        size="txtHelvetica16"
                      >
                        profile.
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start pr-[3px] pt-[3px]">
                      <Text
                        className="leading-[25.00px] text-base text-blue_gray-900_05"
                        size="txtHelveticaBold16Bluegray90005"
                      >
                        <span className="text-blue_gray-900_05 font-helvetica text-left font-bold">
                          <>
                            You must have your own contact details
                            <br />
                          </>
                        </span>
                        <span className="text-blue_gray-900_05 font-helvetica text-left font-normal">
                          <>
                            that you do not share with any other worker
                            <br />
                            or business.
                          </>
                        </span>
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start pr-1 pt-1 w-full">
                      <div className="flex flex-col gap-[5px] items-center justify-start w-[97%] md:w-full">
                        <div className="flex flex-row items-center justify-evenly w-full">
                          <Text
                            className="text-base text-blue_gray-900_05"
                            size="txtHelveticaBold16Bluegray90005"
                          >
                            Your photos must be of you
                          </Text>
                          <Text
                            className="text-base text-blue_gray-900_05"
                            size="txtHelvetica16"
                          >
                            {" "}
                            and of a high
                          </Text>
                        </div>
                        <Text
                          className="leading-[25.00px] text-base text-blue_gray-900_05"
                          size="txtHelvetica16"
                        >
                          <>
                            quality. This doesn’t mean they need to be
                            <br />
                            professionally taken but they must be high
                            <br />
                            resolution.
                          </>
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[7px] items-start justify-end w-full">
                      <div className="md:h-[43px] h-[46px] relative w-full">
                        <div className="absolute flex flex-col gap-[7px] h-max inset-[0] items-start justify-center m-auto w-full">
                          <Text
                            className="text-base text-blue_gray-900_05"
                            size="txtHelveticaBold16Bluegray90005"
                          >
                            You must have the rights to use all photos
                          </Text>
                          <Text
                            className="text-base text-blue_gray-900_05"
                            size="txtHelveticaBold16Bluegray90005"
                          >
                            you upload
                          </Text>
                        </div>
                        <Text
                          className="absolute bottom-[0] right-[6%] text-base text-blue_gray-900_05"
                          size="txtHelvetica16"
                        >
                          {" "}
                          and they must be an accurate
                        </Text>
                      </div>
                      <Text
                        className="text-base text-blue_gray-900_05"
                        size="txtHelvetica16"
                      >
                        representation of yourself.
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col font-helvetica items-center justify-start mb-[201px] pr-[3px] pt-[3px]">
                    <Text
                      className="leading-[25.00px] text-base text-blue_gray-900_05"
                      size="txtHelvetica16"
                    >
                      <>
                        TRYST RESERVES THE RIGHT TO REFUSE
                        <br />
                        ADVERTISING AT OUR DISCRETION, AS WE
                        <br />
                        ENDEAVOUR TO MAINTAIN A HIGH STANDARD
                        <br />
                        IN QUALITY, IMAGE PRESENTATION, AND
                        <br />
                        INTEGRITY.
                      </>
                    </Text>
                  </div>
                </div>
                <div className="border-blue_gray-100_05 border-l border-solid flex flex-col gap-[15px] items-start justify-start pb-4 px-4 w-1/2 md:w-full">
                  <div className="flex flex-col items-start justify-start ml-8 md:ml-[0] pr-0.5 pt-0.5">
                    <Text
                      className="md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900_05"
                      size="txtCabinBold32"
                    >
                      Provider sign up
                    </Text>
                  </div>
                  <div className="bg-gray-100_04 border border-blue_gray-100_05 border-solid flex flex-col font-helvetica items-center justify-start ml-8 md:ml-[0] p-4 rounded w-[91%] md:w-full">
                    <div className="md:h-[45px] h-[51px] pr-0.5 py-0.5 relative w-full">
                      <div className="absolute flex flex-col items-center justify-start left-[0] top-[4%] w-[84%]">
                        <div className="flex flex-row items-start justify-evenly w-full">
                          <Text
                            className="text-base text-blue_gray-900_05"
                            size="txtHelveticaBold16Bluegray90005"
                          >
                            Want to contact providers?
                          </Text>
                          <Text
                            className="text-base text-blue_gray-900_05"
                            size="txtHelvetica16"
                          >
                            {" "}
                            Create a{" "}
                          </Text>
                        </div>
                      </div>
                      <div className="absolute flex flex-row h-max inset-y-[0] items-start justify-start left-[0] my-auto w-[96%]">
                        <Text
                          className="mt-[26px] text-base text-gray-900_04 underline"
                          size="txtHelvetica16Gray90004"
                        >
                          account
                        </Text>
                        <Text
                          className="ml-1 mt-6 text-base text-blue_gray-900_05"
                          size="txtHelvetica16"
                        >
                          {" "}
                          instead.
                        </Text>
                        <Text
                          className="mb-[25px] ml-[159px] text-base text-gray-900_04 underline"
                          size="txtHelvetica16Gray90004"
                        >
                          client
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start ml-8 md:ml-[0] w-[91%] md:w-full">
                    <div className="flex flex-col font-helvetica items-start justify-start pt-1 w-full">
                      <Text
                        className="text-base text-blue_gray-900_05"
                        size="txtHelvetica16"
                      >
                        Working name
                      </Text>
                      <Input
                        name="input"
                        placeholder=""
                        className="p-0 w-full"
                        wrapClassName="flex h-14 mt-2.5 outline outline-[1px] outline-blue_gray-100_06 w-full"
                        shape="round"
                        color="white_A700"
                      ></Input>
                      <div className="flex flex-col items-start justify-start mt-1 pr-0.5 pt-0.5 w-full">
                        <Text
                          className="leading-[22.00px] text-blue_gray-500 text-sm"
                          size="txtHelvetica14Bluegray500"
                        >
                          <>
                            Your working name, not your legal name. No
                            locations,
                            <br />
                            emojis, or symbols please.
                          </>
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col font-helvetica items-start justify-start mt-4 pt-[3px] w-full">
                      <Text
                        className="text-base text-blue_gray-900_05"
                        size="txtHelvetica16"
                      >
                        Email address
                      </Text>
                      <Input
                        name="input_One"
                        placeholder=""
                        className="p-0 w-full"
                        wrapClassName="flex h-14 mt-3 outline outline-[1px] outline-blue_gray-100_06 w-full"
                        shape="round"
                        color="white_A700"
                      ></Input>
                      <div className="flex flex-col items-start justify-start mt-1 pr-0.5 pt-0.5 w-full">
                        <Text
                          className="leading-[22.00px] text-blue_gray-500 text-sm"
                          size="txtHelvetica14Bluegray500"
                        >
                          <>
                            This is how we will keep in touch with you. We
                            <br />
                            recommend using a different address for your account
                            <br />
                            and profile so you&#39;re always sure an email is
                            really from
                            <br />
                            us.
                          </>
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col font-helvetica items-start justify-start mt-[15px] pt-[3px] w-full">
                      <Text
                        className="text-base text-blue_gray-900_05"
                        size="txtHelvetica16"
                      >
                        Password
                      </Text>
                      <Input
                        name="input_Two"
                        placeholder=""
                        className="p-0 w-full"
                        wrapClassName="flex h-14 mt-1 outline outline-[1px] outline-blue_gray-100_06 w-full"
                        shape="round"
                        color="white_A700"
                      ></Input>
                      <div className="flex flex-col gap-1.5 items-start justify-end mt-1 w-full">
                        <div className="md:h-11 h-[62px] relative w-full">
                          <div className="absolute md:h-11 h-[62px] inset-[0] justify-center m-auto w-full">
                            <Text
                              className="absolute inset-x-[0] leading-[22.00px] mx-auto text-blue_gray-500 text-sm top-[0]"
                              size="txtHelvetica14Bluegray500"
                            >
                              <span className="text-blue_gray-500 font-helvetica text-left font-normal">
                                8 characters minimum. Make sure to set a{" "}
                              </span>
                              <span className="text-blue_gray-500 font-helvetica text-left font-bold">
                                <>
                                  strong, unique
                                  <br />
                                </>
                              </span>
                              <span className="text-blue_gray-500 font-helvetica text-left font-normal">
                                password to protect your account.{" "}
                              </span>
                            </Text>
                            <div className="absolute bottom-[0] flex flex-col gap-[5px] justify-start left-[0]">
                              <Text
                                className="md:ml-[0] ml-[214px] text-blue_gray-500 text-sm underline"
                                size="txtHelveticaBold14Bluegray500"
                              >
                                Check out our
                              </Text>
                              <Text
                                className="mr-[118px] text-blue_gray-500 text-sm underline"
                                size="txtHelveticaBold14Bluegray500"
                              >
                                password recommendations
                              </Text>
                            </div>
                          </div>
                          <Text
                            className="absolute bottom-[0] right-[7%] text-blue_gray-500 text-sm"
                            size="txtHelvetica14Bluegray500"
                          >
                            {" "}
                            for tips on creating and
                          </Text>
                        </div>
                        <Text
                          className="text-blue_gray-500 text-sm"
                          size="txtHelvetica14Bluegray500"
                        >
                          managing good passwords.
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col font-helvetica gap-2.5 items-start justify-start mt-4 pt-1 w-full">
                      <Text
                        className="text-base text-blue_gray-900_05"
                        size="txtHelvetica16"
                      >
                        Repeat your password
                      </Text>
                      <Input
                        name="input_Three"
                        placeholder=""
                        className="p-0 w-full"
                        wrapClassName="flex h-14 outline outline-[1px] outline-blue_gray-100_06 w-full"
                        shape="round"
                        color="white_A700"
                      ></Input>
                    </div>
                    <div className="flex flex-row font-helvetica gap-[7px] items-start justify-between mt-6 w-full">
                      <div className="bg-white-A700 border border-gray-600_05 border-solid h-[13px] mb-[59px] mt-1 rounded-sm w-[13px]"></div>
                      <div className="flex flex-col items-center justify-start pr-0.5 pt-0.5">
                        <Text
                          className="leading-[25.00px] text-base text-blue_gray-900_05"
                          size="txtHelvetica16"
                        >
                          <>
                            I agree to the platform policies and that I am
                            <br />
                            over the age of 18 and the age of majority in my
                            <br />
                            jurisdiction.
                          </>
                        </Text>
                      </div>
                    </div>
                    <div className="font-helvetica md:h-[117px] h-[129px] mt-[15px] pr-[3px] pt-[3px] relative w-full">
                      <div className="absolute md:h-[102px] h-[122px] inset-[0] justify-center m-auto w-[98%]">
                        <div className="absolute h-[102px] inset-x-[0] mx-auto top-[0] w-[99%]">
                          <div className="h-[102px] m-auto w-full">
                            <Text
                              className="leading-[25.00px] m-auto text-base text-blue_gray-900_05"
                              size="txtHelvetica16"
                            >
                              <>
                                By signing up to Tryst.link you agree that you
                                are
                                <br />
                                doing so of your own free will, free of outside
                                <br />
                                pressure, and that you have read and agreed to
                                <br />
                                our{" "}
                              </>
                            </Text>
                            <div className="absolute bottom-[0] flex flex-col items-center justify-start left-[8%] w-4/5">
                              <div className="flex flex-row gap-[9px] items-center justify-between w-full">
                                <Text
                                  className="text-base text-gray-900_04 underline"
                                  size="txtHelveticaBold16Gray90004"
                                >
                                  Advertising Policy
                                </Text>
                                <a
                                  href="javascript:"
                                  className="text-base text-gray-900_04 underline"
                                >
                                  <Text size="txtHelveticaBold16Gray90004">
                                    Terms of Service
                                  </Text>
                                </a>
                              </div>
                              <Text
                                className="text-base text-blue_gray-900_05"
                                size="txtHelvetica16"
                              >
                                ,{" "}
                              </Text>
                            </div>
                          </div>
                          <Text
                            className="absolute bottom-[0] right-[11%] text-base text-blue_gray-900_05"
                            size="txtHelvetica16"
                          >
                            ,{" "}
                          </Text>
                        </div>
                        <div className="absolute bottom-[0] flex flex-col gap-[7px] inset-x-[0] justify-start mx-auto w-full">
                          <Text
                            className="md:ml-[0] ml-[312px] text-base text-gray-900_04 underline"
                            size="txtHelveticaBold16Gray90004"
                          >
                            Code
                          </Text>
                          <Text
                            className="mr-[268px] text-base text-gray-900_04 underline"
                            size="txtHelveticaBold16Gray90004"
                          >
                            of Conduct
                          </Text>
                        </div>
                      </div>
                      <Text
                        className="absolute bottom-[2%] left-[23%] text-base text-blue_gray-900_05"
                        size="txtHelvetica16"
                      >
                        , and{" "}
                      </Text>
                      <a
                        href="javascript:"
                        className="absolute bottom-[8%] inset-x-[0] mx-auto text-base text-gray-900_04 underline w-max"
                      >
                        <Text size="txtHelveticaBold16Gray90004">
                          Privacy Policy
                        </Text>
                      </a>
                      <Text
                        className="absolute bottom-[0] right-[34%] text-base text-blue_gray-900_05"
                        size="txtHelvetica16"
                      >
                        .
                      </Text>
                    </div>
                    <Button
                      className="border border-red-A200 border-solid cursor-pointer font-bold font-cabin min-w-[362px] mt-6 rounded-[18px] text-center text-lg"
                      color="red_A200"
                      size="xl"
                      variant="fill"
                    >
                      Sign up
                    </Button>
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

export default EscortSignupPage;
