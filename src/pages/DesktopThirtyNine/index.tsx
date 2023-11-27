import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";

const DesktopThirtyNinePage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins mx-auto relative w-full">
        <div className="md:h-[12026px] sm:h-[1713px] h-[1873px] mx-auto md:px-5 w-full">
          <div className="md:h-[1645px] h-[1873px] m-auto w-full">
            <div
              className="absolute bg-cover bg-no-repeat flex flex-col h-[1230px] inset-x-[0] items-center justify-start mx-auto top-[0] w-full"
              style={{ backgroundImage: "url('images/img_group56.png')" }}
            >
              <div className="flex flex-col justify-start mb-[102px] w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col gap-4 items-center justify-start w-full">
                    <Img
                      className="h-2.5 sm:h-auto object-cover w-full"
                      src="images/img_pseudo_6.png"
                      alt="pseudo"
                    />
                    <div className="h-[69px] relative w-[95%] md:w-full">
                      <div className="absolute md:h-[54px] h-[58px] inset-[0] justify-center m-auto w-[98%] md:w-full">
                        <div className="absolute bg-white-A700 border-b border-gray-200_03 border-solid bottom-[0] h-[50px] inset-x-[0] mx-auto w-full"></div>
                        <div className="absolute flex flex-col h-max inset-[0] items-end justify-center m-auto pb-3.5 px-3.5 w-full">
                          <div className="flex flex-col items-center justify-start pb-[5px] w-[14%] md:w-full">
                            <div className="flex flex-col items-end justify-start md:pl-10 sm:pl-5 pl-[51px] w-full">
                              <div className="flex flex-col items-center justify-start w-full">
                                <div className="flex flex-col items-center justify-start w-full">
                                  <div className="flex flex-row items-center justify-start sm:pr-5 pr-6 w-[91%] md:w-full">
                                    <Img
                                      className="h-[35px] md:h-auto rounded-[50%] w-[35px]"
                                      src="images/img_63aaa2c5f15ee1672127173png.png"
                                      alt="63aaa2c5f15eeSixteen"
                                    />
                                    <div className="flex flex-col items-end justify-end">
                                      <Text
                                        className="text-black-900 text-xs"
                                        size="txtPoppinsBold12Black900"
                                      >
                                        admin
                                      </Text>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start left-[0] my-auto py-4 w-[22%]">
                        <div className="flex flex-col items-center justify-start w-full">
                          <div className="flex flex-col items-start justify-start px-4 w-full">
                            <div className="flex flex-col items-center justify-start w-[79%] md:w-full">
                              <Img
                                className="h-[37px] md:h-auto object-cover w-full"
                                src="images/img_divvimageimage.png"
                                alt="divvimageimage"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border border-black-900 border-solid flex flex-col items-center justify-start md:ml-[0] ml-[396px] mt-[9px] rounded-[10px] w-[21%] md:w-full">
                  <div className="bg-white-A700_0c border border-solid border-white-A700_26 flex flex-col items-end justify-start p-2.5 rounded-[10px] w-full">
                    <div className="flex flex-col items-start justify-start mr-[9px]">
                      <Text
                        className="text-gray-400_01 text-sm"
                        size="txtPoppinsRegular14Gray40001"
                      >
                        Search here...
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="font-roboto md:h-[948px] h-[952px] md:ml-[0] ml-[45px] mt-[26px] pb-[11px] pr-[11px] relative w-[21%]">
                  <div className="absolute bg-white-A700 h-[922px] inset-[0] justify-center m-auto rounded-[15px] shadow-bs7 w-[93%]"></div>
                  <div className="absolute flex flex-col items-center justify-start left-[0] py-2 top-[0] w-[96%]">
                    <div className="flex flex-row items-center justify-start px-4 w-full">
                      <Img
                        className="h-14 w-14"
                        src="images/img_home.svg"
                        alt="home"
                      />
                      <div className="flex flex-col items-center justify-start py-4 w-[79%]">
                        <div className="flex flex-col items-start justify-start w-full">
                          <div className="flex flex-col items-start justify-start">
                            <Text
                              className="text-base text-gray-600_01"
                              size="txtRobotoRegular16"
                            >
                              Dashboard
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start mt-4 w-full">
                      <div className="h-14 relative w-full">
                        <Img
                          className="absolute h-14 inset-y-[0] left-[6%] my-auto w-14"
                          src="images/img_divvlistitemiconmargin.svg"
                          alt="divvlistitemico"
                        />
                        <div className="absolute flex flex-row h-max inset-y-[0] items-center justify-center my-auto right-[6%] w-[70%]">
                          <div className="flex flex-col items-center justify-start py-4 w-[84%]">
                            <div className="flex flex-col items-start justify-start w-full">
                              <Text
                                className="text-base text-gray-600_01"
                                size="txtRobotoRegular16"
                              >
                                packages
                              </Text>
                            </div>
                          </div>
                          <Img
                            className="h-4"
                            src="images/img_arrowdown_gray_600_01.svg"
                            alt="arrowdown"
                          />
                        </div>
                        <Line className="absolute bg-black-900_1e border-gray-800_03 border-solid border-t h-px inset-x-[0] mx-auto top-[0] w-full" />
                      </div>
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="flex flex-col items-end justify-start px-4 w-full">
                          <div className="flex flex-col items-center justify-start py-4 w-[79%] md:w-full">
                            <div className="flex flex-col items-start justify-start w-full">
                              <div className="flex flex-col items-center justify-start">
                                <Text
                                  className="text-base text-gray-600_01"
                                  size="txtRobotoRegular16"
                                >
                                  Overview
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="bg-orange-600 flex flex-col items-end justify-end p-0.5 w-full">
                          <div className="flex flex-col items-center justify-start mr-[13px] py-4 w-[71%] md:w-full">
                            <div className="flex flex-row gap-7 items-start justify-start sm:pr-5 pr-[34px] w-full">
                              <div className="flex flex-col items-start justify-start">
                                <Text
                                  className="text-base text-white-A700"
                                  size="txtRobotoBold16"
                                >
                                  Manage Users
                                </Text>
                              </div>
                              <div className="bg-red-400_04 flex flex-col items-center justify-start mb-1 pb-0.5 px-0.5 rounded-[3px] shadow-bs20 w-[15px]">
                                <Img
                                  className="h-[11px]"
                                  src="images/img_symbol.svg"
                                  alt="symbol"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <Line className="bg-black-900_1e border-b border-gray-800_03 border-solid h-px mt-[47px] w-full" />
                      </div>
                    </div>
                    <div className="flex flex-col items-end justify-start mt-2.5 px-4 w-full">
                      <div className="flex flex-col items-center justify-start py-4 w-[79%] md:w-full">
                        <div className="flex flex-row items-start justify-start md:pr-10 sm:pr-5 pr-[71px] w-full">
                          <div className="flex flex-col items-start justify-start">
                            <Text
                              className="text-base text-gray-600_01"
                              size="txtRobotoRegular16"
                            >
                              Payments
                            </Text>
                          </div>
                          <Img
                            className="h-4"
                            src="images/img_user_red_400_04.svg"
                            alt="user"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-end justify-start mb-[252px] mt-2.5 px-4 w-full">
                      <div className="flex flex-col items-center justify-start py-4 w-[79%] md:w-full">
                        <div className="md:h-[18px] h-[19px] md:pr-10 sm:pr-5 pr-[71px] relative w-full">
                          <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start left-[0] my-auto">
                            <Text
                              className="text-base text-gray-600_01"
                              size="txtRobotoRegular16"
                            >
                              Support Ticket
                            </Text>
                          </div>
                          <Img
                            className="absolute h-4 inset-x-[0] mx-auto top-[0]"
                            src="images/img_user_red_400_04.svg"
                            alt="user_One"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bg-white-A700 bottom-[0] h-[1645px] right-[0] rounded-[5px] w-3/4"></div>
          </div>
          <div className="absolute bottom-[1%] flex flex-col md:gap-10 gap-[63px] items-center justify-start right-[0] w-[74%]">
            <div className="flex flex-row md:gap-10 items-center justify-between md:pr-10 sm:pr-5 pr-[92px] w-[99%] md:w-full">
              <div className="flex flex-col items-center justify-start">
                <Text
                  className="text-blue_gray-800_02 text-lg"
                  size="txtPoppinsMedium18"
                >
                  Active Users
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start w-[27%]">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-row items-center justify-evenly w-full">
                    <Input
                      name="input"
                      placeholder="Username / Email"
                      className="!placeholder:text-gray-400_01 !text-gray-400_01 leading-[normal] p-0 text-left text-sm w-full"
                      wrapClassName="outline outline-[1px] outline-blue_gray-100_08 rounded-bl-[5px] rounded-tl-[5px] w-[83%]"
                      type="email"
                      color="white_A700"
                      size="xl"
                    ></Input>
                    <Img
                      className="h-[45px]"
                      src="images/img_close_orange_600_45x43.svg"
                      alt="close"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-col items-center justify-start pl-3 w-full">
                <div className="bg-white-A700 flex flex-col items-center justify-start rounded-[10px] shadow-bs22 w-full">
                  <div className="flex flex-col items-center justify-start pb-4 w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="flex md:flex-col flex-row md:gap-5 items-center justify-evenly w-[98%] md:w-full">
                        <Text
                          className="bg-orange-600 h-12 justify-center pl-[25px] pr-[35px] sm:px-5 py-3.5 rounded-tl-[5px] text-white-A700 text-xs w-[185px]"
                          size="txtPoppinsSemiBold12"
                        >
                          User
                        </Text>
                        <Button
                          className="cursor-pointer font-bold min-w-[330px] text-center text-xs"
                          shape="square"
                          color="orange_600"
                          size="xl"
                          variant="fill"
                        >
                          Email-Phone
                        </Button>
                        <Button
                          className="cursor-pointer font-bold min-w-[100px] text-center text-xs"
                          shape="square"
                          color="orange_600"
                          size="xl"
                          variant="fill"
                        >
                          Country
                        </Button>
                        <Button
                          className="cursor-pointer font-bold min-w-[184px] text-center text-xs"
                          shape="square"
                          color="orange_600"
                          size="xl"
                          variant="fill"
                        >
                          Joined At
                        </Button>
                        <Button
                          className="cursor-pointer font-bold min-w-[100px] text-center text-xs"
                          shape="square"
                          color="orange_600"
                          size="xl"
                          variant="fill"
                        >
                          Balance
                        </Button>
                        <Text
                          className="bg-orange-600 h-12 justify-end pl-[35px] pr-6 sm:px-5 py-3.5 rounded-tr-[5px] text-right text-white-A700 text-xs w-[113px]"
                          size="txtPoppinsBold12WhiteA700"
                        >
                          Action
                        </Text>
                      </div>
                      <List
                        className="flex flex-col gap-px items-center w-[98%]"
                        orientation="vertical"
                      >
                        <div className="flex md:flex-col flex-row md:gap-5 items-center justify-evenly my-0 w-full">
                          <div className="border-gray-200_11 border-solid border-t flex md:flex-1 flex-col items-start justify-end p-3.5 w-[19%] md:w-full">
                            <Text
                              className="ml-2.5 md:ml-[0] text-blue_gray-600_01 text-sm"
                              size="txtPoppinsBold14"
                            >
                              Mohammed Asif
                            </Text>
                            <div className="flex flex-col items-center justify-start ml-2.5 md:ml-[0]">
                              <Text
                                className="text-orange-600 text-sm"
                                size="txtPoppinsMedium14Orange600"
                              >
                                <span className="text-orange-600 font-poppins text-left font-medium">
                                  @
                                </span>
                                <span className="text-orange-600 font-poppins text-left font-medium">
                                  asif007
                                </span>
                              </Text>
                            </div>
                          </div>
                          <Text
                            className="border-gray-200_11 border-solid border-t leading-[19.00px] sm:px-5 px-6 py-4 text-[13px] text-blue_gray-600_01 text-center"
                            size="txtPoppinsMedium13"
                          >
                            <>
                              [Email is protected for the demo]
                              <br />
                              [Mobile number is protected for the demo]
                            </>
                          </Text>
                          <Button
                            className="cursor-pointer font-bold min-w-[100px] text-center text-sm"
                            shape="square"
                            color="gray_200_11"
                            size="3xl"
                            variant="outline"
                          >
                            IN
                          </Button>
                          <div className="border-gray-200_11 border-solid border-t flex flex-col items-center justify-end p-4">
                            <Text
                              className="leading-[19.00px] text-[13px] text-blue_gray-600_01 text-center"
                              size="txtPoppinsMedium13"
                            >
                              <>
                                2023-11-27 12:45 AM
                                <br />2 hours ago
                              </>
                            </Text>
                          </div>
                          <Button
                            className="cursor-pointer font-bold min-w-[100px] text-center text-sm"
                            shape="square"
                            color="gray_200_11"
                            size="3xl"
                            variant="outline"
                          >
                            $0.00
                          </Button>
                          <div className="border-gray-200_11 border-solid border-t flex md:flex-1 flex-col items-center justify-start p-2.5 w-[12%] md:w-full">
                            <div className="flex flex-col items-center justify-start my-[9px] p-0.5">
                              <Text
                                className="border border-orange-600 border-solid sm:pl-5 pl-[31px] pr-2 py-1 rounded-[3px] text-center text-orange-600 text-sm"
                                size="txtPoppinsRegular14Orange600"
                              >
                                {" "}
                                Details
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex md:flex-col flex-row md:gap-5 items-center justify-evenly my-0 w-full">
                          <div className="border-gray-200_11 border-solid border-t flex md:flex-1 flex-col items-start justify-end p-3.5 w-[19%] md:w-full">
                            <Text
                              className="ml-2.5 md:ml-[0] text-blue_gray-600_01 text-sm"
                              size="txtPoppinsBold14"
                            >
                              Zoshim uddin
                            </Text>
                            <div className="flex flex-col items-center justify-start ml-2.5 md:ml-[0]">
                              <Text
                                className="text-orange-600 text-sm"
                                size="txtPoppinsMedium14Orange600"
                              >
                                <span className="text-orange-600 font-poppins text-left font-medium">
                                  @
                                </span>
                                <span className="text-orange-600 font-poppins text-left font-medium">
                                  123456
                                </span>
                              </Text>
                            </div>
                          </div>
                          <Text
                            className="border-gray-200_11 border-solid border-t leading-[19.00px] sm:px-5 px-6 py-4 text-[13px] text-blue_gray-600_01 text-center"
                            size="txtPoppinsMedium13"
                          >
                            <>
                              [Email is protected for the demo]
                              <br />
                              [Mobile number is protected for the demo]
                            </>
                          </Text>
                          <Button
                            className="cursor-pointer font-bold min-w-[100px] text-center text-sm"
                            shape="square"
                            color="gray_200_11"
                            size="3xl"
                            variant="outline"
                          >
                            BD
                          </Button>
                          <div className="border-gray-200_11 border-solid border-t flex flex-col items-center justify-end p-4">
                            <Text
                              className="leading-[19.00px] text-[13px] text-blue_gray-600_01 text-center"
                              size="txtPoppinsMedium13"
                            >
                              <>
                                2023-11-26 06:57 PM
                                <br />8 hours ago
                              </>
                            </Text>
                          </div>
                          <Button
                            className="cursor-pointer font-bold min-w-[100px] text-center text-sm"
                            shape="square"
                            color="gray_200_11"
                            size="3xl"
                            variant="outline"
                          >
                            $0.00
                          </Button>
                          <div className="border-gray-200_11 border-solid border-t flex md:flex-1 flex-col items-center justify-start p-2.5 w-[12%] md:w-full">
                            <div className="flex flex-col items-center justify-start my-[9px] p-0.5">
                              <Text
                                className="border border-orange-600 border-solid sm:pl-5 pl-[31px] pr-2 py-1 rounded-[3px] text-center text-orange-600 text-sm"
                                size="txtPoppinsRegular14Orange600"
                              >
                                {" "}
                                Details
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex md:flex-col flex-row md:gap-5 items-center justify-evenly my-0 w-full">
                          <div className="border-gray-200_11 border-solid border-t flex md:flex-1 flex-col items-start justify-end p-3.5 w-[19%] md:w-full">
                            <Text
                              className="ml-2.5 md:ml-[0] text-blue_gray-600_01 text-sm"
                              size="txtPoppinsBold14"
                            >
                              furkan altun
                            </Text>
                            <div className="flex flex-col items-center justify-start ml-2.5 md:ml-[0]">
                              <Text
                                className="text-orange-600 text-sm"
                                size="txtPoppinsMedium14Orange600"
                              >
                                <span className="text-orange-600 font-poppins text-left font-medium">
                                  @
                                </span>
                                <span className="text-orange-600 font-poppins text-left font-medium">
                                  altunasdas
                                </span>
                              </Text>
                            </div>
                          </div>
                          <Text
                            className="border-gray-200_11 border-solid border-t leading-[19.00px] sm:px-5 px-6 py-4 text-[13px] text-blue_gray-600_01 text-center"
                            size="txtPoppinsMedium13"
                          >
                            <>
                              [Email is protected for the demo]
                              <br />
                              [Mobile number is protected for the demo]
                            </>
                          </Text>
                          <Button
                            className="cursor-pointer font-bold min-w-[100px] text-center text-sm"
                            shape="square"
                            color="gray_200_11"
                            size="3xl"
                            variant="outline"
                          >
                            TR
                          </Button>
                          <div className="border-gray-200_11 border-solid border-t flex flex-col items-center justify-end p-4">
                            <Text
                              className="leading-[19.00px] text-[13px] text-blue_gray-600_01 text-center"
                              size="txtPoppinsMedium13"
                            >
                              <>
                                2023-11-26 06:20 AM
                                <br />
                                21 hours ago
                              </>
                            </Text>
                          </div>
                          <Button
                            className="cursor-pointer font-bold min-w-[100px] text-center text-sm"
                            shape="square"
                            color="gray_200_11"
                            size="3xl"
                            variant="outline"
                          >
                            $0.00
                          </Button>
                          <div className="border-gray-200_11 border-solid border-t flex md:flex-1 flex-col items-center justify-start p-2.5 w-[12%] md:w-full">
                            <div className="flex flex-col items-center justify-start my-[9px] p-0.5">
                              <Text
                                className="border border-orange-600 border-solid sm:pl-5 pl-[31px] pr-2 py-1 rounded-[3px] text-center text-orange-600 text-sm"
                                size="txtPoppinsRegular14Orange600"
                              >
                                {" "}
                                Details
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex md:flex-col flex-row md:gap-5 items-center justify-evenly my-0 w-full">
                          <div className="border-gray-200_11 border-solid border-t flex md:flex-1 flex-col items-start justify-end p-3.5 w-[19%] md:w-full">
                            <Text
                              className="ml-2.5 md:ml-[0] text-blue_gray-600_01 text-sm"
                              size="txtPoppinsBold14"
                            >
                              asder wert
                            </Text>
                            <div className="flex flex-col items-center justify-start ml-2.5 md:ml-[0]">
                              <Text
                                className="text-orange-600 text-sm"
                                size="txtPoppinsMedium14Orange600"
                              >
                                <span className="text-orange-600 font-poppins text-left font-medium">
                                  @
                                </span>
                                <span className="text-orange-600 font-poppins text-left font-medium">
                                  asder0
                                </span>
                              </Text>
                            </div>
                          </div>
                          <Text
                            className="border-gray-200_11 border-solid border-t leading-[19.00px] sm:px-5 px-6 py-4 text-[13px] text-blue_gray-600_01 text-center"
                            size="txtPoppinsMedium13"
                          >
                            <>
                              [Email is protected for the demo]
                              <br />
                              [Mobile number is protected for the demo]
                            </>
                          </Text>
                          <Button
                            className="cursor-pointer font-bold min-w-[100px] text-center text-sm"
                            shape="square"
                            color="gray_200_11"
                            size="3xl"
                            variant="outline"
                          >
                            TR
                          </Button>
                          <div className="border-gray-200_11 border-solid border-t flex flex-col items-center justify-end p-4">
                            <Text
                              className="leading-[19.00px] text-[13px] text-blue_gray-600_01 text-center"
                              size="txtPoppinsMedium13"
                            >
                              <>
                                2023-11-25 04:04 PM
                                <br />1 day ago
                              </>
                            </Text>
                          </div>
                          <Button
                            className="cursor-pointer font-bold min-w-[100px] text-center text-sm"
                            shape="square"
                            color="gray_200_11"
                            size="3xl"
                            variant="outline"
                          >
                            $0.00
                          </Button>
                          <div className="border-gray-200_11 border-solid border-t flex md:flex-1 flex-col items-center justify-start p-2.5 w-[12%] md:w-full">
                            <div className="flex flex-col items-center justify-start my-[9px] p-0.5">
                              <Text
                                className="border border-orange-600 border-solid sm:pl-5 pl-[31px] pr-2 py-1 rounded-[3px] text-center text-orange-600 text-sm"
                                size="txtPoppinsRegular14Orange600"
                              >
                                {" "}
                                Details
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex md:flex-col flex-row md:gap-5 items-center justify-evenly my-0 w-full">
                          <div className="border-gray-200_11 border-solid border-t flex md:flex-1 flex-col items-start justify-end p-3.5 w-[19%] md:w-full">
                            <Text
                              className="ml-2.5 md:ml-[0] mt-0.5 text-blue_gray-600_01 text-sm"
                              size="txtPoppinsBold14"
                            >
                              skyn skyn
                            </Text>
                            <div className="flex flex-col items-center justify-start ml-2.5 md:ml-[0]">
                              <Text
                                className="text-orange-600 text-sm"
                                size="txtPoppinsMedium14Orange600"
                              >
                                <span className="text-orange-600 font-poppins text-left font-medium">
                                  @
                                </span>
                                <span className="text-orange-600 font-poppins text-left font-medium">
                                  skynnnn
                                </span>
                              </Text>
                            </div>
                          </div>
                          <Text
                            className="border-gray-200_11 border-solid border-t leading-[19.00px] sm:px-5 px-6 py-4 text-[13px] text-blue_gray-600_01 text-center"
                            size="txtPoppinsMedium13"
                          >
                            <>
                              [Email is protected for the demo]
                              <br />
                              [Mobile number is protected for the demo]
                            </>
                          </Text>
                          <Button
                            className="cursor-pointer font-bold min-w-[100px] text-center text-sm"
                            shape="square"
                            color="gray_200_11"
                            size="3xl"
                            variant="outline"
                          >
                            NG
                          </Button>
                          <div className="border-gray-200_11 border-solid border-t flex flex-col items-center justify-end p-4">
                            <Text
                              className="leading-[19.00px] text-[13px] text-blue_gray-600_01 text-center"
                              size="txtPoppinsMedium13"
                            >
                              <>
                                2023-11-25 03:14 PM
                                <br />1 day ago
                              </>
                            </Text>
                          </div>
                          <Button
                            className="cursor-pointer font-bold min-w-[100px] text-center text-sm"
                            shape="square"
                            color="gray_200_11"
                            size="3xl"
                            variant="outline"
                          >
                            $0.00
                          </Button>
                          <div className="border-gray-200_11 border-solid border-t flex md:flex-1 flex-col items-center justify-start p-2.5 w-[12%] md:w-full">
                            <div className="flex flex-col items-center justify-start my-[9px] p-0.5">
                              <Text
                                className="border border-orange-600 border-solid sm:pl-5 pl-[31px] pr-2 py-1 rounded-[3px] text-center text-orange-600 text-sm"
                                size="txtPoppinsRegular14Orange600"
                              >
                                {" "}
                                Details
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex md:flex-col flex-row md:gap-5 items-center justify-evenly my-0 w-full">
                          <div className="border-gray-200_11 border-solid border-t flex md:flex-1 flex-col items-start justify-end p-3.5 w-[19%] md:w-full">
                            <Text
                              className="ml-2.5 md:ml-[0] text-blue_gray-600_01 text-sm"
                              size="txtPoppinsBold14"
                            >
                              kundan kant
                            </Text>
                            <div className="flex flex-col items-center justify-start ml-2.5 md:ml-[0]">
                              <Text
                                className="text-orange-600 text-sm"
                                size="txtPoppinsMedium14Orange600"
                              >
                                <span className="text-orange-600 font-poppins text-left font-medium">
                                  @
                                </span>
                                <span className="text-orange-600 font-poppins text-left font-medium">
                                  kund8466
                                </span>
                              </Text>
                            </div>
                          </div>
                          <Text
                            className="border-gray-200_11 border-solid border-t leading-[19.00px] sm:px-5 px-6 py-4 text-[13px] text-blue_gray-600_01 text-center"
                            size="txtPoppinsMedium13"
                          >
                            <>
                              [Email is protected for the demo]
                              <br />
                              [Mobile number is protected for the demo]
                            </>
                          </Text>
                          <Button
                            className="cursor-pointer font-bold min-w-[100px] text-center text-sm"
                            shape="square"
                            color="gray_200_11"
                            size="3xl"
                            variant="outline"
                          >
                            IN
                          </Button>
                          <div className="border-gray-200_11 border-solid border-t flex flex-col items-center justify-end p-4">
                            <Text
                              className="leading-[19.00px] text-[13px] text-blue_gray-600_01 text-center"
                              size="txtPoppinsMedium13"
                            >
                              <>
                                2023-11-24 02:12 PM
                                <br />2 days ago
                              </>
                            </Text>
                          </div>
                          <Button
                            className="cursor-pointer font-bold min-w-[100px] text-center text-sm"
                            shape="square"
                            color="gray_200_11"
                            size="3xl"
                            variant="outline"
                          >
                            $0.00
                          </Button>
                          <div className="border-gray-200_11 border-solid border-t flex md:flex-1 flex-col items-center justify-start p-2.5 w-[12%] md:w-full">
                            <div className="flex flex-col items-center justify-start my-[9px] p-0.5">
                              <Text
                                className="border border-orange-600 border-solid sm:pl-5 pl-[31px] pr-2 py-1 rounded-[3px] text-center text-orange-600 text-sm"
                                size="txtPoppinsRegular14Orange600"
                              >
                                {" "}
                                Details
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex md:flex-col flex-row md:gap-5 items-center justify-evenly my-0 w-full">
                          <div className="border-gray-200_11 border-solid border-t flex md:flex-1 flex-col items-start justify-end p-3.5 w-[19%] md:w-full">
                            <Text
                              className="ml-2.5 md:ml-[0] mt-0.5 text-blue_gray-600_01 text-sm"
                              size="txtPoppinsBold14"
                            >
                              Sadhana Singh
                            </Text>
                            <div className="flex flex-col items-center justify-start ml-2.5 md:ml-[0]">
                              <Text
                                className="text-orange-600 text-sm"
                                size="txtPoppinsMedium14Orange600"
                              >
                                <span className="text-orange-600 font-poppins text-left font-medium">
                                  @
                                </span>
                                <span className="text-orange-600 font-poppins text-left font-medium">
                                  sadhanasingh
                                </span>
                              </Text>
                            </div>
                          </div>
                          <Text
                            className="border-gray-200_11 border-solid border-t leading-[19.00px] sm:px-5 px-6 py-4 text-[13px] text-blue_gray-600_01 text-center"
                            size="txtPoppinsMedium13"
                          >
                            <>
                              [Email is protected for the demo]
                              <br />
                              [Mobile number is protected for the demo]
                            </>
                          </Text>
                          <Button
                            className="cursor-pointer font-bold min-w-[100px] text-center text-sm"
                            shape="square"
                            color="gray_200_11"
                            size="3xl"
                            variant="outline"
                          >
                            IN
                          </Button>
                          <div className="border-gray-200_11 border-solid border-t flex flex-col items-center justify-end p-4">
                            <Text
                              className="leading-[19.00px] text-[13px] text-blue_gray-600_01 text-center"
                              size="txtPoppinsMedium13"
                            >
                              <>
                                2023-11-22 04:39 PM
                                <br />4 days ago
                              </>
                            </Text>
                          </div>
                          <Button
                            className="cursor-pointer font-bold min-w-[100px] text-center text-sm"
                            shape="square"
                            color="gray_200_11"
                            size="3xl"
                            variant="outline"
                          >
                            $0.00
                          </Button>
                          <div className="border-gray-200_11 border-solid border-t flex md:flex-1 flex-col items-center justify-start p-2.5 w-[12%] md:w-full">
                            <div className="flex flex-col items-center justify-start my-[9px] p-0.5">
                              <Text
                                className="border border-orange-600 border-solid sm:pl-5 pl-[31px] pr-2 py-1 rounded-[3px] text-center text-orange-600 text-sm"
                                size="txtPoppinsRegular14Orange600"
                              >
                                {" "}
                                Details
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex md:flex-col flex-row md:gap-5 items-center justify-evenly my-0 w-full">
                          <div className="border-gray-200_11 border-solid border-t flex md:flex-1 flex-col items-start justify-end p-3.5 w-[19%] md:w-full">
                            <Text
                              className="ml-2.5 md:ml-[0] mt-0.5 text-blue_gray-600_01 text-sm"
                              size="txtPoppinsBold14"
                            >
                              Ayush Singh
                            </Text>
                            <div className="flex flex-col items-center justify-start ml-2.5 md:ml-[0]">
                              <Text
                                className="text-orange-600 text-sm"
                                size="txtPoppinsMedium14Orange600"
                              >
                                <span className="text-orange-600 font-poppins text-left font-medium">
                                  @
                                </span>
                                <span className="text-orange-600 font-poppins text-left font-medium">
                                  ayushsingh
                                </span>
                              </Text>
                            </div>
                          </div>
                          <Text
                            className="border-gray-200_11 border-solid border-t leading-[19.00px] sm:px-5 px-6 py-4 text-[13px] text-blue_gray-600_01 text-center"
                            size="txtPoppinsMedium13"
                          >
                            <>
                              [Email is protected for the demo]
                              <br />
                              [Mobile number is protected for the demo]
                            </>
                          </Text>
                          <Button
                            className="cursor-pointer font-bold min-w-[100px] text-center text-sm"
                            shape="square"
                            color="gray_200_11"
                            size="3xl"
                            variant="outline"
                          >
                            IN
                          </Button>
                          <div className="border-gray-200_11 border-solid border-t flex flex-col items-center justify-end p-4">
                            <Text
                              className="leading-[19.00px] text-[13px] text-blue_gray-600_01 text-center"
                              size="txtPoppinsMedium13"
                            >
                              <>
                                2023-11-22 04:21 PM
                                <br />4 days ago
                              </>
                            </Text>
                          </div>
                          <Button
                            className="cursor-pointer font-bold min-w-[100px] text-center text-sm"
                            shape="square"
                            color="gray_200_11"
                            size="3xl"
                            variant="outline"
                          >
                            $0.00
                          </Button>
                          <div className="border-gray-200_11 border-solid border-t flex md:flex-1 flex-col items-center justify-start p-2.5 w-[12%] md:w-full">
                            <div className="flex flex-col items-center justify-start my-[9px] p-0.5">
                              <Text
                                className="border border-orange-600 border-solid sm:pl-5 pl-[31px] pr-2 py-1 rounded-[3px] text-center text-orange-600 text-sm"
                                size="txtPoppinsRegular14Orange600"
                              >
                                {" "}
                                Details
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex md:flex-col flex-row md:gap-5 items-center justify-evenly my-0 w-full">
                          <div className="border-gray-200_11 border-solid border-t flex md:flex-1 flex-col items-start justify-end p-3.5 w-[19%] md:w-full">
                            <Text
                              className="ml-2.5 md:ml-[0] mt-0.5 text-blue_gray-600_01 text-sm"
                              size="txtPoppinsBold14"
                            >
                              tttuyty tytyt
                            </Text>
                            <div className="flex flex-col items-center justify-start ml-2.5 md:ml-[0]">
                              <Text
                                className="text-orange-600 text-sm"
                                size="txtPoppinsMedium14Orange600"
                              >
                                <span className="text-orange-600 font-poppins text-left font-medium">
                                  @
                                </span>
                                <span className="text-orange-600 font-poppins text-left font-medium">
                                  wertyu
                                </span>
                              </Text>
                            </div>
                          </div>
                          <Text
                            className="border-gray-200_11 border-solid border-t leading-[19.00px] sm:px-5 px-6 py-4 text-[13px] text-blue_gray-600_01 text-center"
                            size="txtPoppinsMedium13"
                          >
                            <>
                              [Email is protected for the demo]
                              <br />
                              [Mobile number is protected for the demo]
                            </>
                          </Text>
                          <Button
                            className="cursor-pointer font-bold min-w-[100px] text-center text-sm"
                            shape="square"
                            color="gray_200_11"
                            size="3xl"
                            variant="outline"
                          >
                            TR
                          </Button>
                          <div className="border-gray-200_11 border-solid border-t flex flex-col items-center justify-end p-4">
                            <Text
                              className="leading-[19.00px] text-[13px] text-blue_gray-600_01 text-center"
                              size="txtPoppinsMedium13"
                            >
                              <>
                                2023-11-22 03:31 PM
                                <br />4 days ago
                              </>
                            </Text>
                          </div>
                          <Button
                            className="cursor-pointer font-bold min-w-[100px] text-center text-sm"
                            shape="square"
                            color="gray_200_11"
                            size="3xl"
                            variant="outline"
                          >
                            $0.00
                          </Button>
                          <div className="border-gray-200_11 border-solid border-t flex md:flex-1 flex-col items-center justify-start p-2.5 w-[12%] md:w-full">
                            <div className="flex flex-col items-center justify-start my-[9px] p-0.5">
                              <Text
                                className="border border-orange-600 border-solid sm:pl-5 pl-[31px] pr-2 py-1 rounded-[3px] text-center text-orange-600 text-sm"
                                size="txtPoppinsRegular14Orange600"
                              >
                                {" "}
                                Details
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex md:flex-col flex-row md:gap-5 items-center justify-evenly my-0 w-full">
                          <div className="border-gray-200_11 border-solid border-t flex md:flex-1 flex-col items-start justify-end p-3.5 w-[19%] md:w-full">
                            <Text
                              className="ml-2.5 md:ml-[0] mt-0.5 text-blue_gray-600_01 text-sm"
                              size="txtPoppinsBold14"
                            >
                              shad g
                            </Text>
                            <div className="flex flex-col items-center justify-start ml-2.5 md:ml-[0]">
                              <Text
                                className="text-orange-600 text-sm"
                                size="txtPoppinsMedium14Orange600"
                              >
                                <span className="text-orange-600 font-poppins text-left font-medium">
                                  @
                                </span>
                                <span className="text-orange-600 font-poppins text-left font-medium">
                                  shafin111
                                </span>
                              </Text>
                            </div>
                          </div>
                          <Text
                            className="border-gray-200_11 border-solid border-t leading-[19.00px] sm:px-5 px-6 py-4 text-[13px] text-blue_gray-600_01 text-center"
                            size="txtPoppinsMedium13"
                          >
                            <>
                              [Email is protected for the demo]
                              <br />
                              [Mobile number is protected for the demo]
                            </>
                          </Text>
                          <Button
                            className="cursor-pointer font-bold min-w-[100px] text-center text-sm"
                            shape="square"
                            color="gray_200_11"
                            size="3xl"
                            variant="outline"
                          >
                            IN
                          </Button>
                          <div className="border-gray-200_11 border-solid border-t flex flex-col items-center justify-end p-4">
                            <Text
                              className="leading-[19.00px] text-[13px] text-blue_gray-600_01 text-center"
                              size="txtPoppinsMedium13"
                            >
                              <>
                                2023-11-21 11:12 AM
                                <br />5 days ago
                              </>
                            </Text>
                          </div>
                          <Button
                            className="cursor-pointer font-bold min-w-[100px] text-center text-sm"
                            shape="square"
                            color="gray_200_11"
                            size="3xl"
                            variant="outline"
                          >
                            $0.00
                          </Button>
                          <div className="border-gray-200_11 border-solid border-t flex md:flex-1 flex-col items-center justify-start p-2.5 w-[12%] md:w-full">
                            <div className="flex flex-col items-center justify-start my-[9px] p-0.5">
                              <Text
                                className="border border-orange-600 border-solid sm:pl-5 pl-[31px] pr-2 py-1 rounded-[3px] text-center text-orange-600 text-sm"
                                size="txtPoppinsRegular14Orange600"
                              >
                                {" "}
                                Details
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex md:flex-col flex-row md:gap-5 items-center justify-evenly my-0 w-full">
                          <div className="border-gray-200_11 border-solid border-t flex md:flex-1 flex-col items-start justify-end p-3.5 w-[19%] md:w-full">
                            <Text
                              className="ml-2.5 md:ml-[0] mt-0.5 text-blue_gray-600_01 text-sm"
                              size="txtPoppinsBold14"
                            >
                              parag Narvekar
                            </Text>
                            <div className="flex flex-col items-center justify-start ml-2.5 md:ml-[0]">
                              <Text
                                className="text-orange-600 text-sm"
                                size="txtPoppinsMedium14Orange600"
                              >
                                <span className="text-orange-600 font-poppins text-left font-medium">
                                  @
                                </span>
                                <span className="text-orange-600 font-poppins text-left font-medium">
                                  parinita
                                </span>
                              </Text>
                            </div>
                          </div>
                          <Text
                            className="border-gray-200_11 border-solid border-t leading-[19.00px] sm:px-5 px-6 py-4 text-[13px] text-blue_gray-600_01 text-center"
                            size="txtPoppinsMedium13"
                          >
                            <>
                              [Email is protected for the demo]
                              <br />
                              [Mobile number is protected for the demo]
                            </>
                          </Text>
                          <Button
                            className="cursor-pointer font-bold min-w-[100px] text-center text-sm"
                            shape="square"
                            color="gray_200_11"
                            size="3xl"
                            variant="outline"
                          >
                            IN
                          </Button>
                          <div className="border-gray-200_11 border-solid border-t flex flex-col items-center justify-end p-4">
                            <Text
                              className="leading-[19.00px] text-[13px] text-blue_gray-600_01 text-center"
                              size="txtPoppinsMedium13"
                            >
                              <>
                                2023-11-20 02:31 PM
                                <br />6 days ago
                              </>
                            </Text>
                          </div>
                          <Button
                            className="cursor-pointer font-bold min-w-[100px] text-center text-sm"
                            shape="square"
                            color="gray_200_11"
                            size="3xl"
                            variant="outline"
                          >
                            $0.00
                          </Button>
                          <div className="border-gray-200_11 border-solid border-t flex md:flex-1 flex-col items-center justify-start p-2.5 w-[12%] md:w-full">
                            <div className="flex flex-col items-center justify-start my-[9px] p-0.5">
                              <Text
                                className="border border-orange-600 border-solid sm:pl-5 pl-[31px] pr-2 py-1 rounded-[3px] text-center text-orange-600 text-sm"
                                size="txtPoppinsRegular14Orange600"
                              >
                                {" "}
                                Details
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex md:flex-col flex-row md:gap-5 items-center justify-evenly my-0 w-full">
                          <div className="border-gray-200_11 border-solid border-t flex md:flex-1 flex-col items-start justify-end p-3.5 w-[19%] md:w-full">
                            <Text
                              className="ml-2.5 md:ml-[0] mt-0.5 text-blue_gray-600_01 text-sm"
                              size="txtPoppinsBold14"
                            >
                              Test kjh
                            </Text>
                            <div className="flex flex-col items-center justify-start ml-2.5 md:ml-[0]">
                              <Text
                                className="text-orange-600 text-sm"
                                size="txtPoppinsMedium14Orange600"
                              >
                                <span className="text-orange-600 font-poppins text-left font-medium">
                                  @
                                </span>
                                <span className="text-orange-600 font-poppins text-left font-medium">
                                  test1234567
                                </span>
                              </Text>
                            </div>
                          </div>
                          <Text
                            className="border-gray-200_11 border-solid border-t leading-[19.00px] sm:px-5 px-6 py-4 text-[13px] text-blue_gray-600_01 text-center"
                            size="txtPoppinsMedium13"
                          >
                            <>
                              [Email is protected for the demo]
                              <br />
                              [Mobile number is protected for the demo]
                            </>
                          </Text>
                          <Button
                            className="cursor-pointer font-bold min-w-[100px] text-center text-sm"
                            shape="square"
                            color="gray_200_11"
                            size="3xl"
                            variant="outline"
                          >
                            IN
                          </Button>
                          <div className="border-gray-200_11 border-solid border-t flex flex-col items-center justify-end p-4">
                            <Text
                              className="leading-[19.00px] text-[13px] text-blue_gray-600_01 text-center"
                              size="txtPoppinsMedium13"
                            >
                              <>
                                2023-11-19 11:27 PM
                                <br />1 week ago
                              </>
                            </Text>
                          </div>
                          <Button
                            className="cursor-pointer font-bold min-w-[100px] text-center text-sm"
                            shape="square"
                            color="gray_200_11"
                            size="3xl"
                            variant="outline"
                          >
                            $0.00
                          </Button>
                          <div className="border-gray-200_11 border-solid border-t flex md:flex-1 flex-col items-center justify-start p-2.5 w-[12%] md:w-full">
                            <div className="flex flex-col items-center justify-start my-[9px] p-0.5">
                              <Text
                                className="border border-orange-600 border-solid sm:pl-5 pl-[31px] pr-2 py-1 rounded-[3px] text-center text-orange-600 text-sm"
                                size="txtPoppinsRegular14Orange600"
                              >
                                {" "}
                                Details
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex md:flex-col flex-row md:gap-5 items-center justify-evenly my-0 w-full">
                          <div className="border-gray-200_11 border-solid border-t flex md:flex-1 flex-col items-start justify-end p-3.5 w-[19%] md:w-full">
                            <Text
                              className="ml-2.5 md:ml-[0] text-blue_gray-600_01 text-sm"
                              size="txtPoppinsBold14"
                            >
                              kumar a
                            </Text>
                            <div className="flex flex-col items-center justify-start ml-2.5 md:ml-[0]">
                              <Text
                                className="text-orange-600 text-sm"
                                size="txtPoppinsMedium14Orange600"
                              >
                                <span className="text-orange-600 font-poppins text-left font-medium">
                                  @
                                </span>
                                <span className="text-orange-600 font-poppins text-left font-medium">
                                  anandkumar
                                </span>
                              </Text>
                            </div>
                          </div>
                          <Text
                            className="border-gray-200_11 border-solid border-t leading-[19.00px] sm:px-5 px-6 py-4 text-[13px] text-blue_gray-600_01 text-center"
                            size="txtPoppinsMedium13"
                          >
                            <>
                              [Email is protected for the demo]
                              <br />
                              [Mobile number is protected for the demo]
                            </>
                          </Text>
                          <Button
                            className="cursor-pointer font-bold min-w-[100px] text-center text-sm"
                            shape="square"
                            color="gray_200_11"
                            size="3xl"
                            variant="outline"
                          >
                            IN
                          </Button>
                          <div className="border-gray-200_11 border-solid border-t flex flex-col items-center justify-end p-4">
                            <Text
                              className="leading-[19.00px] text-[13px] text-blue_gray-600_01 text-center"
                              size="txtPoppinsMedium13"
                            >
                              <>
                                2023-11-17 05:25 PM
                                <br />1 week ago
                              </>
                            </Text>
                          </div>
                          <Button
                            className="cursor-pointer font-bold min-w-[100px] text-center text-sm"
                            shape="square"
                            color="gray_200_11"
                            size="3xl"
                            variant="outline"
                          >
                            $0.00
                          </Button>
                          <div className="border-gray-200_11 border-solid border-t flex md:flex-1 flex-col items-center justify-start p-2.5 w-[12%] md:w-full">
                            <div className="flex flex-col items-center justify-start my-[9px] p-0.5">
                              <Text
                                className="border border-orange-600 border-solid sm:pl-5 pl-[31px] pr-2 py-1 rounded-[3px] text-center text-orange-600 text-sm"
                                size="txtPoppinsRegular14Orange600"
                              >
                                {" "}
                                Details
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex md:flex-col flex-row md:gap-5 items-center justify-evenly my-0 w-full">
                          <div className="border-gray-200_11 border-solid border-t flex md:flex-1 flex-col items-start justify-end p-3.5 w-[19%] md:w-full">
                            <Text
                              className="ml-2.5 md:ml-[0] text-blue_gray-600_01 text-sm"
                              size="txtPoppinsBold14"
                            >
                              dsds dsdsds
                            </Text>
                            <div className="flex flex-col items-center justify-start ml-2.5 md:ml-[0]">
                              <Text
                                className="text-orange-600 text-sm"
                                size="txtPoppinsMedium14Orange600"
                              >
                                <span className="text-orange-600 font-poppins text-left font-medium">
                                  @
                                </span>
                                <span className="text-orange-600 font-poppins text-left font-medium">
                                  sds9666
                                </span>
                              </Text>
                            </div>
                          </div>
                          <Text
                            className="border-gray-200_11 border-solid border-t leading-[19.00px] sm:px-5 px-6 py-4 text-[13px] text-blue_gray-600_01 text-center"
                            size="txtPoppinsMedium13"
                          >
                            <>
                              [Email is protected for the demo]
                              <br />
                              [Mobile number is protected for the demo]
                            </>
                          </Text>
                          <Button
                            className="cursor-pointer font-bold min-w-[100px] text-center text-sm"
                            shape="square"
                            color="gray_200_11"
                            size="3xl"
                            variant="outline"
                          >
                            LK
                          </Button>
                          <div className="border-gray-200_11 border-solid border-t flex flex-col items-center justify-end p-4">
                            <Text
                              className="leading-[19.00px] text-[13px] text-blue_gray-600_01 text-center"
                              size="txtPoppinsMedium13"
                            >
                              <>
                                2023-11-16 10:30 PM
                                <br />1 week ago
                              </>
                            </Text>
                          </div>
                          <Button
                            className="cursor-pointer font-bold min-w-[100px] text-center text-sm"
                            shape="square"
                            color="gray_200_11"
                            size="3xl"
                            variant="outline"
                          >
                            $0.00
                          </Button>
                          <div className="border-gray-200_11 border-solid border-t flex md:flex-1 flex-col items-center justify-start p-2.5 w-[12%] md:w-full">
                            <div className="flex flex-col items-center justify-start my-[9px] p-0.5">
                              <Text
                                className="border border-orange-600 border-solid sm:pl-5 pl-[31px] pr-2 py-1 rounded-[3px] text-center text-orange-600 text-sm"
                                size="txtPoppinsRegular14Orange600"
                              >
                                {" "}
                                Details
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex md:flex-col flex-row md:gap-5 items-center justify-evenly my-0 w-full">
                          <div className="border-gray-200_11 border-solid border-t flex md:flex-1 flex-col items-start justify-end p-3.5 w-[19%] md:w-full">
                            <Text
                              className="ml-2.5 md:ml-[0] text-blue_gray-600_01 text-sm"
                              size="txtPoppinsBold14"
                            >
                              dsdsds dsdsds
                            </Text>
                            <div className="flex flex-col items-center justify-start ml-2.5 md:ml-[0]">
                              <Text
                                className="text-orange-600 text-sm"
                                size="txtPoppinsMedium14Orange600"
                              >
                                <span className="text-orange-600 font-poppins text-left font-medium">
                                  @
                                </span>
                                <span className="text-orange-600 font-poppins text-left font-medium">
                                  dsssssssssssssss
                                </span>
                              </Text>
                            </div>
                          </div>
                          <Text
                            className="border-gray-200_11 border-solid border-t leading-[19.00px] sm:px-5 px-6 py-4 text-[13px] text-blue_gray-600_01 text-center"
                            size="txtPoppinsMedium13"
                          >
                            <>
                              [Email is protected for the demo]
                              <br />
                              [Mobile number is protected for the demo]
                            </>
                          </Text>
                          <Button
                            className="cursor-pointer font-bold min-w-[100px] text-center text-sm"
                            shape="square"
                            color="gray_200_11"
                            size="3xl"
                            variant="outline"
                          >
                            AZ
                          </Button>
                          <div className="border-gray-200_11 border-solid border-t flex flex-col items-center justify-end p-4">
                            <Text
                              className="leading-[19.00px] text-[13px] text-blue_gray-600_01 text-center"
                              size="txtPoppinsMedium13"
                            >
                              <>
                                2023-11-16 07:33 PM
                                <br />1 week ago
                              </>
                            </Text>
                          </div>
                          <Button
                            className="cursor-pointer font-bold min-w-[100px] text-center text-sm"
                            shape="square"
                            color="gray_200_11"
                            size="3xl"
                            variant="outline"
                          >
                            $0.00
                          </Button>
                          <div className="border-gray-200_11 border-solid border-t flex md:flex-1 flex-col items-center justify-start p-2.5 w-[12%] md:w-full">
                            <div className="flex flex-col items-center justify-start my-[9px] p-0.5">
                              <Text
                                className="border border-orange-600 border-solid sm:pl-5 pl-[31px] pr-2 py-1 rounded-[3px] text-center text-orange-600 text-sm"
                                size="txtPoppinsRegular14Orange600"
                              >
                                {" "}
                                Details
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex md:flex-col flex-row md:gap-5 items-center justify-evenly my-0 w-full">
                          <div className="border-gray-200_11 border-solid border-t flex md:flex-1 flex-col items-start justify-end p-3.5 w-[19%] md:w-full">
                            <Text
                              className="ml-2.5 md:ml-[0] text-blue_gray-600_01 text-sm"
                              size="txtPoppinsBold14"
                            >
                              user lk
                            </Text>
                            <div className="flex flex-col items-center justify-start ml-2.5 md:ml-[0]">
                              <Text
                                className="text-orange-600 text-sm"
                                size="txtPoppinsMedium14Orange600"
                              >
                                <span className="text-orange-600 font-poppins text-left font-medium">
                                  @
                                </span>
                                <span className="text-orange-600 font-poppins text-left font-medium">
                                  demo345
                                </span>
                              </Text>
                            </div>
                          </div>
                          <Text
                            className="border-gray-200_11 border-solid border-t leading-[19.00px] sm:px-5 px-6 py-4 text-[13px] text-blue_gray-600_01 text-center"
                            size="txtPoppinsMedium13"
                          >
                            <>
                              [Email is protected for the demo]
                              <br />
                              [Mobile number is protected for the demo]
                            </>
                          </Text>
                          <Button
                            className="cursor-pointer font-bold min-w-[100px] text-center text-sm"
                            shape="square"
                            color="gray_200_11"
                            size="3xl"
                            variant="outline"
                          >
                            BD
                          </Button>
                          <div className="border-gray-200_11 border-solid border-t flex flex-col items-center justify-end p-4">
                            <Text
                              className="leading-[19.00px] text-[13px] text-blue_gray-600_01 text-center"
                              size="txtPoppinsMedium13"
                            >
                              <>
                                2023-11-15 04:40 PM
                                <br />1 week ago
                              </>
                            </Text>
                          </div>
                          <Button
                            className="cursor-pointer font-bold min-w-[100px] text-center text-sm"
                            shape="square"
                            color="gray_200_11"
                            size="3xl"
                            variant="outline"
                          >
                            $0.00
                          </Button>
                          <div className="border-gray-200_11 border-solid border-t flex md:flex-1 flex-col items-center justify-start p-2.5 w-[12%] md:w-full">
                            <div className="flex flex-col items-center justify-start my-[9px] p-0.5">
                              <Text
                                className="border border-orange-600 border-solid sm:pl-5 pl-[31px] pr-2 py-1 rounded-[3px] text-center text-orange-600 text-sm"
                                size="txtPoppinsRegular14Orange600"
                              >
                                {" "}
                                Details
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex md:flex-col flex-row md:gap-5 items-center justify-evenly my-0 w-full">
                          <div className="border-gray-200_11 border-solid border-t flex md:flex-1 flex-col items-start justify-end p-3.5 w-[19%] md:w-full">
                            <Text
                              className="ml-2.5 md:ml-[0] text-blue_gray-600_01 text-sm"
                              size="txtPoppinsBold14"
                            >
                              kaka kakau
                            </Text>
                            <div className="flex flex-col items-center justify-start ml-2.5 md:ml-[0]">
                              <Text
                                className="text-orange-600 text-sm"
                                size="txtPoppinsMedium14Orange600"
                              >
                                <span className="text-orange-600 font-poppins text-left font-medium">
                                  @
                                </span>
                                <span className="text-orange-600 font-poppins text-left font-medium">
                                  bklo45
                                </span>
                              </Text>
                            </div>
                          </div>
                          <Text
                            className="border-gray-200_11 border-solid border-t leading-[19.00px] sm:px-5 px-6 py-4 text-[13px] text-blue_gray-600_01 text-center"
                            size="txtPoppinsMedium13"
                          >
                            <>
                              [Email is protected for the demo]
                              <br />
                              [Mobile number is protected for the demo]
                            </>
                          </Text>
                          <Button
                            className="cursor-pointer font-bold min-w-[100px] text-center text-sm"
                            shape="square"
                            color="gray_200_11"
                            size="3xl"
                            variant="outline"
                          >
                            MA
                          </Button>
                          <div className="border-gray-200_11 border-solid border-t flex flex-col items-center justify-end p-4">
                            <Text
                              className="leading-[19.00px] text-[13px] text-blue_gray-600_01 text-center"
                              size="txtPoppinsMedium13"
                            >
                              <>
                                2023-11-13 08:06 PM
                                <br />1 week ago
                              </>
                            </Text>
                          </div>
                          <Button
                            className="cursor-pointer font-bold min-w-[100px] text-center text-sm"
                            shape="square"
                            color="gray_200_11"
                            size="3xl"
                            variant="outline"
                          >
                            $0.00
                          </Button>
                          <div className="border-gray-200_11 border-solid border-t flex md:flex-1 flex-col items-center justify-start p-2.5 w-[12%] md:w-full">
                            <div className="flex flex-col items-center justify-start my-[9px] p-0.5">
                              <Text
                                className="border border-orange-600 border-solid sm:pl-5 pl-[31px] pr-2 py-1 rounded-[3px] text-center text-orange-600 text-sm"
                                size="txtPoppinsRegular14Orange600"
                              >
                                {" "}
                                Details
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex md:flex-col flex-row md:gap-5 items-center justify-evenly my-0 w-full">
                          <div className="border-gray-200_11 border-solid border-t flex md:flex-1 flex-col items-start justify-end p-3.5 w-[19%] md:w-full">
                            <Text
                              className="ml-2.5 md:ml-[0] mt-0.5 text-blue_gray-600_01 text-sm"
                              size="txtPoppinsBold14"
                            >
                              User ijok
                            </Text>
                            <div className="flex flex-col items-center justify-start ml-2.5 md:ml-[0]">
                              <Text
                                className="text-orange-600 text-sm"
                                size="txtPoppinsMedium14Orange600"
                              >
                                <span className="text-orange-600 font-poppins text-left font-medium">
                                  @
                                </span>
                                <span className="text-orange-600 font-poppins text-left font-medium">
                                  demojoy
                                </span>
                              </Text>
                            </div>
                          </div>
                          <Text
                            className="border-gray-200_11 border-solid border-t leading-[19.00px] sm:px-5 px-6 py-4 text-[13px] text-blue_gray-600_01 text-center"
                            size="txtPoppinsMedium13"
                          >
                            <>
                              [Email is protected for the demo]
                              <br />
                              [Mobile number is protected for the demo]
                            </>
                          </Text>
                          <Button
                            className="cursor-pointer font-bold min-w-[100px] text-center text-sm"
                            shape="square"
                            color="gray_200_11"
                            size="3xl"
                            variant="outline"
                          >
                            BD
                          </Button>
                          <div className="border-gray-200_11 border-solid border-t flex flex-col items-center justify-end p-4">
                            <Text
                              className="leading-[19.00px] text-[13px] text-blue_gray-600_01 text-center"
                              size="txtPoppinsMedium13"
                            >
                              <>
                                2023-11-07 10:27 AM
                                <br />2 weeks ago
                              </>
                            </Text>
                          </div>
                          <Button
                            className="cursor-pointer font-bold min-w-[100px] text-center text-sm"
                            shape="square"
                            color="gray_200_11"
                            size="3xl"
                            variant="outline"
                          >
                            $0.00
                          </Button>
                          <div className="border-gray-200_11 border-solid border-t flex md:flex-1 flex-col items-center justify-start p-2.5 w-[12%] md:w-full">
                            <div className="flex flex-col items-center justify-start my-[9px] p-0.5">
                              <Text
                                className="border border-orange-600 border-solid sm:pl-5 pl-[31px] pr-2 py-1 rounded-[3px] text-center text-orange-600 text-sm"
                                size="txtPoppinsRegular14Orange600"
                              >
                                {" "}
                                Details
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex md:flex-col flex-row md:gap-5 items-center justify-evenly my-0 w-full">
                          <div className="border-gray-200_11 border-solid border-t flex md:flex-1 flex-col items-start justify-end p-3.5 w-[19%] md:w-full">
                            <Text
                              className="ml-2.5 md:ml-[0] text-blue_gray-600_01 text-sm"
                              size="txtPoppinsBold14"
                            >
                              werwer werwer
                            </Text>
                            <div className="flex flex-col items-center justify-start ml-2.5 md:ml-[0]">
                              <Text
                                className="text-orange-600 text-sm"
                                size="txtPoppinsMedium14Orange600"
                              >
                                <span className="text-orange-600 font-poppins text-left font-medium">
                                  @
                                </span>
                                <span className="text-orange-600 font-poppins text-left font-medium">
                                  wer34234
                                </span>
                              </Text>
                            </div>
                          </div>
                          <Text
                            className="border-gray-200_11 border-solid border-t leading-[19.00px] sm:px-5 px-6 py-4 text-[13px] text-blue_gray-600_01 text-center"
                            size="txtPoppinsMedium13"
                          >
                            <>
                              [Email is protected for the demo]
                              <br />
                              [Mobile number is protected for the demo]
                            </>
                          </Text>
                          <Button
                            className="cursor-pointer font-bold min-w-[100px] text-center text-sm"
                            shape="square"
                            color="gray_200_11"
                            size="3xl"
                            variant="outline"
                          >
                            BD
                          </Button>
                          <div className="border-gray-200_11 border-solid border-t flex flex-col items-center justify-end p-4">
                            <Text
                              className="leading-[19.00px] text-[13px] text-blue_gray-600_01 text-center"
                              size="txtPoppinsMedium13"
                            >
                              <>
                                2023-11-05 11:42 PM
                                <br />3 weeks ago
                              </>
                            </Text>
                          </div>
                          <Button
                            className="cursor-pointer font-bold min-w-[100px] text-center text-sm"
                            shape="square"
                            color="gray_200_11"
                            size="3xl"
                            variant="outline"
                          >
                            $0.00
                          </Button>
                          <div className="border-gray-200_11 border-solid border-t flex md:flex-1 flex-col items-center justify-start p-2.5 w-[12%] md:w-full">
                            <div className="flex flex-col items-center justify-start my-[9px] p-0.5">
                              <Text
                                className="border border-orange-600 border-solid sm:pl-5 pl-[31px] pr-2 py-1 rounded-[3px] text-center text-orange-600 text-sm"
                                size="txtPoppinsRegular14Orange600"
                              >
                                {" "}
                                Details
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex md:flex-col flex-row md:gap-5 items-center justify-evenly my-0 w-full">
                          <div className="border-gray-200_11 border-solid border-t flex md:flex-1 flex-col items-start justify-end p-3.5 w-[19%] md:w-full">
                            <Text
                              className="ml-2.5 md:ml-[0] text-blue_gray-600_01 text-sm"
                              size="txtPoppinsBold14"
                            >
                              Ram Kumar
                            </Text>
                            <div className="flex flex-col items-center justify-start ml-2.5 md:ml-[0]">
                              <Text
                                className="text-orange-600 text-sm"
                                size="txtPoppinsMedium14Orange600"
                              >
                                <span className="text-orange-600 font-poppins text-left font-medium">
                                  @
                                </span>
                                <span className="text-orange-600 font-poppins text-left font-medium">
                                  ramkumardt
                                </span>
                              </Text>
                            </div>
                          </div>
                          <Text
                            className="border-gray-200_11 border-solid border-t leading-[19.00px] sm:px-5 px-6 py-4 text-[13px] text-blue_gray-600_01 text-center"
                            size="txtPoppinsMedium13"
                          >
                            <>
                              [Email is protected for the demo]
                              <br />
                              [Mobile number is protected for the demo]
                            </>
                          </Text>
                          <Button
                            className="cursor-pointer font-bold min-w-[100px] text-center text-sm"
                            shape="square"
                            color="gray_200_11"
                            size="3xl"
                            variant="outline"
                          >
                            IN
                          </Button>
                          <div className="border-gray-200_11 border-solid border-t flex flex-col items-center justify-end p-[15px]">
                            <Text
                              className="leading-[19.00px] text-[13px] text-blue_gray-600_01 text-center"
                              size="txtPoppinsMedium13"
                            >
                              <>
                                2023-11-03 05:41 PM
                                <br />3 weeks ago
                              </>
                            </Text>
                          </div>
                          <Button
                            className="cursor-pointer font-bold min-w-[100px] text-center text-sm"
                            shape="square"
                            color="gray_200_11"
                            size="3xl"
                            variant="outline"
                          >
                            $0.00
                          </Button>
                          <div className="border-gray-200_11 border-solid border-t flex md:flex-1 flex-col items-center justify-start p-2.5 w-[12%] md:w-full">
                            <div className="flex flex-col items-center justify-start my-2 p-0.5">
                              <Text
                                className="border border-orange-600 border-solid sm:pl-5 pl-[31px] pr-2 py-1 rounded-[3px] text-center text-orange-600 text-sm"
                                size="txtPoppinsRegular14Orange600"
                              >
                                {" "}
                                Details
                              </Text>
                            </div>
                          </div>
                        </div>
                      </List>
                    </div>
                  </div>
                  <div className="bg-white-A700 border-gray-200_11 border-solid border-t flex flex-col items-center justify-start p-[15px] rounded-bl-[3px] rounded-br-[3px] w-full">
                    <div className="flex flex-col items-end justify-start my-[5px] md:pl-10 sm:pl-5 pl-[268px] w-full">
                      <div className="flex md:flex-col flex-row md:gap-5 items-center justify-end w-full">
                        <div className="flex flex-col items-center justify-start p-[3px]">
                          <Text
                            className="bg-white-A700 border border-gray-300_10 border-solid flex h-9 items-center justify-center rounded-[50%] text-blue_gray-600_01 text-center text-sm w-9"
                            size="txtPoppinsRegular14"
                          >
                            ‹
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start p-[3px]">
                          <Text
                            className="bg-orange-600 border border-orange-600 border-solid flex h-9 items-center justify-center rounded-[50%] text-center text-shadow-ts2 text-sm text-white-A700 w-9"
                            size="txtPoppinsRegular14WhiteA700"
                          >
                            1
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start p-[3px]">
                          <Text
                            className="bg-white-A700 border border-gray-300_10 border-solid flex h-9 items-center justify-center rounded-[50%] text-blue_gray-600_01 text-center text-sm w-9"
                            size="txtPoppinsRegular14"
                          >
                            2
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start p-[3px]">
                          <Text
                            className="bg-white-A700 border border-gray-300_10 border-solid flex h-9 items-center justify-center rounded-[50%] text-blue_gray-600_01 text-center text-sm w-9"
                            size="txtPoppinsRegular14"
                          >
                            3
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start p-[3px]">
                          <Text
                            className="bg-white-A700 border border-gray-300_10 border-solid flex h-9 items-center justify-center rounded-[50%] text-blue_gray-600_01 text-center text-sm w-9"
                            size="txtPoppinsRegular14"
                          >
                            4
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start p-[3px]">
                          <Text
                            className="bg-white-A700 border border-gray-300_10 border-solid flex h-9 items-center justify-center rounded-[50%] text-blue_gray-600_01 text-center text-sm w-9"
                            size="txtPoppinsRegular14"
                          >
                            5
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start p-[3px]">
                          <Text
                            className="bg-white-A700 border border-gray-300_10 border-solid flex h-9 items-center justify-center rounded-[50%] text-blue_gray-600_01 text-center text-sm w-9"
                            size="txtPoppinsRegular14"
                          >
                            6
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start p-[3px]">
                          <Text
                            className="bg-white-A700 border border-gray-300_10 border-solid flex h-9 items-center justify-center rounded-[50%] text-blue_gray-600_01 text-center text-sm w-9"
                            size="txtPoppinsRegular14"
                          >
                            7
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start p-[3px]">
                          <Text
                            className="bg-white-A700 border border-gray-300_10 border-solid flex h-9 items-center justify-center rounded-[50%] text-blue_gray-600_01 text-center text-sm w-9"
                            size="txtPoppinsRegular14"
                          >
                            8
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start p-[3px]">
                          <Text
                            className="bg-white-A700 border border-gray-300_10 border-solid flex h-9 items-center justify-center rounded-[50%] text-blue_gray-600_01 text-center text-sm w-9"
                            size="txtPoppinsRegular14"
                          >
                            9
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start p-[3px]">
                          <Text
                            className="bg-white-A700 border border-gray-300_10 border-solid h-9 justify-center px-[11px] py-[7px] rounded-[50%] text-blue_gray-600_01 text-sm w-9"
                            size="txtPoppinsRegular14"
                          >
                            10
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start p-[3px]">
                          <Text
                            className="bg-white-A700 border border-gray-300_10 border-solid flex h-9 items-center justify-center rounded-[50%] text-blue_gray-600_01 text-center text-sm w-9"
                            size="txtPoppinsRegular14"
                          >
                            ...
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start p-[3px]">
                          <Text
                            className="bg-white-A700 border border-gray-300_10 border-solid h-9 justify-center px-[9px] py-[7px] rounded-[50%] text-blue_gray-600_01 text-sm w-9"
                            size="txtPoppinsRegular14"
                          >
                            24
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start p-[3px]">
                          <Text
                            className="bg-white-A700 border border-gray-300_10 border-solid h-9 justify-center px-[9px] py-[7px] rounded-[50%] text-blue_gray-600_01 text-sm w-9"
                            size="txtPoppinsRegular14"
                          >
                            25
                          </Text>
                        </div>
                        <div className="flex flex-col items-end justify-start p-[3px]">
                          <Text
                            className="bg-white-A700 border border-gray-300_10 border-solid flex h-9 items-center justify-center rounded-[50%] text-blue_gray-600_01 text-center text-sm w-9"
                            size="txtPoppinsRegular14"
                          >
                            ›
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
        <div className="flex flex-col font-montserrat items-center justify-end ml-auto mr-3.5 mt-[-78px] md:px-5 w-[94%] z-[1]">
          <div className="flex flex-col items-center justify-end p-[50px] md:px-10 sm:px-5 w-full">
            <div className="flex flex-col items-center justify-start mt-7 pb-[98px] w-[84%] md:w-full">
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                <div className="flex md:flex-1 flex-col items-center justify-end pt-9 w-[34%] md:w-full">
                  <div className="flex flex-row items-center justify-start w-full">
                    <div className="flex flex-col items-center justify-start px-[11px] w-1/2">
                      <div className="flex flex-col items-start justify-start pr-1.5 py-1.5">
                        <Text
                          className="text-gray-800 text-sm"
                          size="txtMontserratRegular14"
                        >
                          About Us
                        </Text>
                      </div>
                      <div className="flex flex-col items-start justify-start pr-[7px] py-[7px] w-full">
                        <div className="flex flex-col items-center justify-start">
                          <Text
                            className="leading-[32.00px] text-gray-800 text-sm"
                            size="txtMontserratRegular14"
                          >
                            <>
                              Terms and
                              <br />
                              Conditions
                            </>
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-end pr-[5px] py-[5px]">
                        <a
                          href="javascript:"
                          className="mt-0.5 text-gray-800 text-sm"
                        >
                          <Text size="txtMontserratRegular14">
                            Privacy Policy
                          </Text>
                        </a>
                      </div>
                      <div className="flex flex-col items-start justify-end pr-1.5 py-1.5">
                        <Text
                          className="text-gray-800 text-sm"
                          size="txtMontserratRegular14"
                        >
                          Contact
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start pb-[11px] px-[11px] w-1/2">
                      <div className="flex flex-col items-start justify-start pr-[7px] py-[7px] w-full">
                        <div className="flex flex-col items-center justify-start">
                          <Text
                            className="leading-[32.00px] text-gray-800 text-sm"
                            size="txtMontserratRegular14"
                          >
                            <>
                              Frequently Asked
                              <br />
                              Questions
                            </>
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start pr-1.5 py-1.5">
                        <Text
                          className="text-gray-800 text-sm"
                          size="txtMontserratRegular14"
                        >
                          Refund
                        </Text>
                      </div>
                      <div className="flex flex-col items-start justify-end mb-5 pr-[5px] py-[5px]">
                        <Text
                          className="mt-0.5 text-gray-800 text-sm"
                          size="txtMontserratRegular14"
                        >
                          Blog
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-1 flex-col font-roboto gap-[11px] items-center justify-start pb-1.5 px-1.5 w-[42%] md:w-full">
                  <div className="flex flex-col items-start justify-start">
                    <Text
                      className="text-[14.88px] text-blue_gray-900 tracking-[0.06px]"
                      size="txtRobotoRegular1488"
                    >
                      Always up to date with our latest offers and discounts!
                    </Text>
                  </div>
                  <div className="flex sm:flex-col flex-row font-montserrat sm:gap-5 items-center justify-start mb-[115px] w-full">
                    <div className="flex sm:flex-1 flex-col items-center justify-start px-[5px] w-3/4 sm:w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <Input
                          name="input_One"
                          placeholder="Enter your email address"
                          className="leading-[normal] p-0 placeholder:text-black-900 text-left text-sm tracking-[0.05px] w-full"
                          wrapClassName="flex w-full"
                          type="email"
                          prefix={
                            <Img
                              className="mr-3 my-auto"
                              src="images/img_svg_gray_600.svg"
                              alt="SVG"
                            />
                          }
                          shape="round"
                          size="xl"
                        ></Input>
                      </div>
                    </div>
                    <div className="flex sm:flex-1 flex-col items-center justify-start px-[5px] w-[26%] sm:w-full">
                      <Button
                        className="cursor-pointer min-w-[100px] text-center text-sm tracking-[0.05px] uppercase"
                        shape="round"
                        color="gray_800"
                        size="xl"
                        variant="fill"
                      >
                        Sign Up
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-1 flex-col font-roboto items-center justify-start pb-[11px] px-[11px] w-[17%] md:w-full">
                  <div className="flex flex-col gap-3 items-start justify-start mb-[111px] w-full">
                    <Text
                      className="text-[14.77px] text-blue_gray-900 tracking-[0.06px]"
                      size="txtRobotoRegular1477"
                    >
                      Follow us!
                    </Text>
                    <div className="flex flex-row items-center justify-between w-full">
                      <Button
                        className="flex h-[42px] items-center justify-center w-[42px]"
                        shape="circle"
                        color="gray_400_4f"
                        size="lg"
                        variant="fill"
                      >
                        <Img src="images/img_facebook.svg" alt="facebook" />
                      </Button>
                      <Button
                        className="flex h-[42px] items-center justify-center w-[42px]"
                        shape="circle"
                        color="gray_400_4f"
                        size="lg"
                        variant="fill"
                      >
                        <Img src="images/img_trash.svg" alt="trash" />
                      </Button>
                      <Button
                        className="flex h-[42px] items-center justify-center w-[42px]"
                        shape="circle"
                        color="gray_400_4f"
                        size="lg"
                        variant="fill"
                      >
                        <Img src="images/img_contrast.svg" alt="contrast" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-[84%] md:w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
                <div className="flex md:flex-1 flex-col items-center justify-start w-[67%] md:w-full">
                  <div className="flex flex-row items-center justify-start md:pr-10 sm:pr-5 pr-[349px] w-full">
                    <div className="flex flex-col items-center justify-start px-[11px] w-1/2">
                      <div className="flex flex-col items-start justify-end pr-1.5 py-1.5 w-full">
                        <div className="flex flex-row items-start justify-start w-[63%] md:w-full">
                          <Img
                            className="h-4 w-4"
                            src="images/img_globe.svg"
                            alt="globe"
                          />
                          <Text
                            className="ml-1 text-gray-800 text-sm"
                            size="txtMontserratRegular14"
                          >
                            {" "}
                            Language
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-end p-[5px]">
                      <Text
                        className="md:ml-[0] ml-[5px] mt-0.5 text-gray-800 text-sm"
                        size="txtMontserratRegular14"
                      >
                        Developers
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-1 flex-col items-center justify-start px-[11px] w-[34%] md:w-full">
                  <div className="flex flex-col items-end justify-start pl-1.5 py-1.5">
                    <Text
                      className="leading-[32.00px] text-base text-gray-800 text-right"
                      size="txtMontserratRegular16Gray800"
                    >
                      <>
                        Copyright © 2023 Quickdate. All rights
                        <br />
                        reserved.
                      </>
                    </Text>
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

export default DesktopThirtyNinePage;
