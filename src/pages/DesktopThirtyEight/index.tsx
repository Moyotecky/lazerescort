import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";

const DesktopThirtyEightPage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-center justify-end mx-auto pt-[3px] w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex flex-col gap-4 items-center justify-start w-full">
            <Img
              className="h-2.5 md:h-auto object-cover w-full"
              src="images/img_pseudo_5.png"
              alt="pseudo"
            />
            <div className="h-[69px] max-w-[1354px] mx-auto md:px-5 relative w-full">
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
          <div
            className="bg-cover bg-no-repeat font-roboto h-[1032px] sm:h-[1215px] md:h-[1353px] mt-[38px] pr-[7px] md:px-5 py-[7px] relative w-full"
            style={{
              backgroundImage:
                "url('images/img_loginbannermasksvg_black_900.png')",
            }}
          >
            <div className="absolute sm:h-[1177px] md:h-[1315px] h-[952px] inset-[0] justify-center m-auto w-[99%] md:w-full">
              <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                <div className="flex md:flex-col flex-row gap-[35px] items-start justify-between w-full">
                  <div className="md:h-[922px] h-[952px] pb-[11px] pr-[11px] relative w-[21%] md:w-full">
                    <div className="absolute bg-white-A700 h-[922px] inset-[0] justify-center m-auto rounded-[15px] shadow-bs7 w-[93%]"></div>
                    <div className="absolute flex flex-col gap-4 items-center justify-start left-[0] py-2 top-[0] w-[96%]">
                      <div className="flex flex-row items-center justify-start px-3.5 w-full">
                        <Img
                          className="h-14 w-14"
                          src="images/img_home.svg"
                          alt="home"
                        />
                        <div className="flex flex-col items-center justify-start py-4 w-[78%]">
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
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="h-14 relative w-full">
                          <Img
                            className="absolute h-14 inset-y-[0] left-[5%] my-auto w-14"
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
                          <div className="flex flex-col items-end justify-start px-4 w-full">
                            <div className="flex flex-col items-center justify-start py-4 w-[79%] md:w-full">
                              <div className="flex md:pr-10 sm:pr-5 pr-[71px] relative w-full">
                                <div className="flex flex-col items-center justify-start my-auto">
                                  <Text
                                    className="text-base text-gray-600_01"
                                    size="txtRobotoRegular16"
                                  >
                                    Manage Users
                                  </Text>
                                </div>
                                <Img
                                  className="h-4 ml-[-23.71px] mr-auto z-[1]"
                                  src="images/img_user_red_400_04.svg"
                                  alt="user"
                                />
                              </div>
                            </div>
                          </div>
                          <Line className="bg-black-900_1e border-b border-gray-800_03 border-solid h-px mt-[50px] w-full" />
                        </div>
                      </div>
                      <Input
                        name="link"
                        placeholder="Payments"
                        className="font-bold p-0 placeholder:text-white-A700 sm:pr-5 text-base text-left w-full"
                        wrapClassName="flex pl-3.5 pr-[35px] w-full"
                        prefix={
                          <Img
                            className="h-14 my-auto"
                            src="images/img_lock_white_a700.svg"
                            alt="lock"
                          />
                        }
                        suffix={
                          <div className="mt-[18px] mb-[23px] ml-[35px] pb-0.5 pl-1.5 pr-[5px] w-[15px] bg-red-400_04 shadow-bs20 rounded-[3px]">
                            <Img
                              className="my-auto"
                              src="images/img_symbol.svg"
                              alt="Symbol"
                            />
                          </div>
                        }
                        shape="square"
                        color="orange_600"
                      ></Input>
                      <div className="flex flex-col items-end justify-start mb-[252px] px-4 w-full">
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
                  <Img
                    className="h-[358px] md:mt-0 mt-6"
                    src="images/img_divlwadblockh90.svg"
                    alt="divlwpageconten"
                  />
                </div>
              </div>
              <div className="absolute bg-white-A700 flex flex-col font-poppins gap-[5px] h-max inset-y-[0] items-center justify-start my-auto sm:pr-5 pr-[29px] py-[29px] right-[1%] rounded-[5px] w-[74%]">
                <div className="flex flex-col items-start justify-start w-[95%] md:w-full">
                  <div className="flex flex-col items-center justify-start">
                    <Text
                      className="text-blue_gray-800_02 text-lg"
                      size="txtPoppinsMedium18"
                    >
                      Dashboard
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-2 items-center justify-start mb-[66px] w-[97%] md:w-full">
                  <List
                    className="flex flex-col gap-px items-center w-full"
                    orientation="vertical"
                  >
                    <div className="md:h-[102px] h-[124px] my-0 relative w-full">
                      <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-end left-[0] my-auto pt-3 px-3 w-1/2">
                        <div className="bg-indigo-A700 flex flex-col items-center justify-start mt-3 p-1 rounded-[5px] shadow-bs21 w-full">
                          <div className="flex flex-col items-end justify-start my-3 md:pl-10 sm:pl-5 pl-[152px] w-full">
                            <div className="md:h-[46px] h-[68px] pt-1 px-1 relative w-full">
                              <Text
                                className="absolute right-[4%] text-right text-white-A700 text-xs top-[6%]"
                                size="txtPoppinsRegular12WhiteA700"
                              >
                                Total Users
                              </Text>
                              <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-end justify-start mx-auto md:pl-10 sm:pl-5 pl-[218px]">
                                <Text
                                  className="md:text-3xl sm:text-[28px] text-[32px] text-right text-white-A700"
                                  size="txtPoppinsMedium32"
                                >
                                  495
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-end my-auto pt-3 px-3 right-[0] w-1/2">
                        <div className="bg-green-A700 flex flex-col items-center justify-start mt-3 p-1 rounded-[5px] shadow-bs21 w-full">
                          <div className="flex flex-col items-end justify-start my-3 md:pl-10 sm:pl-5 pl-[152px] w-full">
                            <div className="md:h-[46px] h-[68px] pt-1 px-1 relative w-full">
                              <Text
                                className="absolute right-[4%] text-right text-white-A700 text-xs top-[6%]"
                                size="txtPoppinsRegular12WhiteA700"
                              >
                                Active Users
                              </Text>
                              <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-end justify-start mx-auto md:pl-10 sm:pl-5 pl-[218px]">
                                <Text
                                  className="md:text-3xl sm:text-[28px] text-[32px] text-right text-white-A700"
                                  size="txtPoppinsMedium32"
                                >
                                  495
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="md:h-[102px] h-[124px] my-0 relative w-full">
                      <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-end left-[0] my-auto pt-3 px-3 w-1/2">
                        <div className="bg-red-400_04 flex flex-col items-center justify-start mt-3 p-1 rounded-[5px] shadow-bs21 w-full">
                          <div className="flex flex-col items-end justify-start my-3 md:pl-10 sm:pl-5 pl-[152px] w-full">
                            <div className="md:h-[46px] h-[68px] pt-1 px-1 relative w-full">
                              <Text
                                className="absolute right-[4%] text-right text-white-A700 text-xs top-[6%]"
                                size="txtPoppinsRegular12WhiteA700"
                              >
                                Email Unverified Users
                              </Text>
                              <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-end justify-start mx-auto md:pl-10 sm:pl-5 pl-[259px]">
                                <Text
                                  className="md:text-3xl sm:text-[28px] text-[32px] text-right text-white-A700"
                                  size="txtPoppinsMedium32"
                                >
                                  0
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-end my-auto pt-3 px-3 right-[0] w-1/2">
                        <div className="bg-red-500_01 flex flex-col items-center justify-start mt-3 p-1 rounded-[5px] shadow-bs21 w-full">
                          <div className="flex flex-col items-end justify-start my-3 md:pl-10 sm:pl-5 pl-[152px] w-full">
                            <div className="md:h-[46px] h-[68px] pt-1 px-1 relative w-full">
                              <Text
                                className="absolute right-[4%] text-right text-white-A700 text-xs top-[6%]"
                                size="txtPoppinsRegular12WhiteA700"
                              >
                                Mobile Unverified Users
                              </Text>
                              <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-end justify-start mx-auto md:pl-10 sm:pl-5 pl-[259px]">
                                <Text
                                  className="md:text-3xl sm:text-[28px] text-[32px] text-right text-white-A700"
                                  size="txtPoppinsMedium32"
                                >
                                  0
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </List>
                  <List
                    className="flex flex-col gap-2 items-center w-full"
                    orientation="vertical"
                  >
                    <div className="flex flex-1 flex-col items-center justify-start w-full">
                      <div className="h-[119px] sm:h-[200px] relative w-full">
                        <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-end left-[0] my-auto pt-6 w-1/2">
                          <div className="flex flex-col items-center justify-start px-3 w-full">
                            <div className="bg-white-A700 flex sm:flex-col flex-row sm:gap-5 items-start justify-end p-[5px] rounded-[5px] shadow-bs21 w-full">
                              <div className="bg-green-A700 h-[65px] sm:mt-0 my-2.5 rounded-[5px] w-[65px]"></div>
                              <div className="h-[69px] md:h-[71px] mb-[15px] relative w-[84%] sm:w-full">
                                <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-start justify-start mx-auto pl-5 w-[98%]">
                                  <div className="flex flex-col items-start justify-start">
                                    <Text
                                      className="text-[22px] text-blue_gray-800_02 sm:text-lg md:text-xl"
                                      size="txtPoppinsMedium22"
                                    >
                                      $4,891.71
                                    </Text>
                                  </div>
                                  <div className="flex flex-col items-start justify-start pr-[3px] pt-[3px]">
                                    <Text
                                      className="text-blue_gray-600_01 text-sm"
                                      size="txtPoppinsRegular14"
                                    >
                                      Total Payment
                                    </Text>
                                  </div>
                                </div>
                                <Text
                                  className="absolute border border-green-A700 border-solid px-[5px] right-[0] rounded text-[10px] text-center text-green-A700 top-[0]"
                                  size="txtPoppinsRegular10"
                                >
                                  View All
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-end my-auto pt-6 right-[0] w-1/2">
                          <div className="flex flex-col items-center justify-start px-3 w-full">
                            <div className="bg-white-A700 flex sm:flex-col flex-row sm:gap-5 items-start justify-start p-[5px] rounded-[5px] shadow-bs21 w-full">
                              <div className="bg-orange-A200 h-[65px] ml-2.5 sm:ml-[0] sm:mt-0 my-2.5 rounded-[5px] w-[65px]"></div>
                              <div className="h-[69px] md:h-[71px] mb-[15px] relative w-[84%] sm:w-full">
                                <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-start justify-start mx-auto pl-5 w-[98%]">
                                  <div className="flex flex-col items-start justify-start">
                                    <Text
                                      className="text-[22px] text-blue_gray-800_02 sm:text-lg md:text-xl"
                                      size="txtPoppinsMedium22"
                                    >
                                      $12.00
                                    </Text>
                                  </div>
                                  <div className="flex flex-col items-start justify-start pr-[3px] pt-[3px]">
                                    <Text
                                      className="text-blue_gray-600_01 text-sm"
                                      size="txtPoppinsRegular14"
                                    >
                                      Pending Payments
                                    </Text>
                                  </div>
                                </div>
                                <Text
                                  className="absolute border border-orange-A200 border-solid px-[5px] right-[0] rounded text-[10px] text-center text-orange-A200 top-[0]"
                                  size="txtPoppinsRegular10OrangeA200"
                                >
                                  View All
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="h-[119px] sm:h-[200px] relative w-full">
                        <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-end left-[0] my-auto pt-6 w-1/2">
                          <div className="flex flex-col items-center justify-start px-3 w-full">
                            <div className="bg-white-A700 flex sm:flex-col flex-row sm:gap-5 items-start justify-end p-[5px] rounded-[5px] shadow-bs21 w-full">
                              <div className="bg-red-400_04 h-[65px] sm:mt-0 my-2.5 rounded-[5px] w-[65px]"></div>
                              <div className="h-[69px] md:h-[70px] mb-[15px] relative w-[84%] sm:w-full">
                                <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-start justify-start mx-auto pl-5 w-[98%]">
                                  <div className="flex flex-col items-start justify-start">
                                    <Text
                                      className="text-[22px] text-blue_gray-800_02 sm:text-lg md:text-xl"
                                      size="txtPoppinsMedium22"
                                    >
                                      $0.00
                                    </Text>
                                  </div>
                                  <div className="flex flex-col items-start justify-start pr-0.5 pt-0.5">
                                    <Text
                                      className="text-blue_gray-600_01 text-sm"
                                      size="txtPoppinsRegular14"
                                    >
                                      Rejected Payments
                                    </Text>
                                  </div>
                                </div>
                                <Text
                                  className="absolute border border-red-400_04 border-solid px-[5px] right-[0] rounded text-[10px] text-center text-red-400_04 top-[0]"
                                  size="txtPoppinsRegular10Red40004"
                                >
                                  View All
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-end my-auto pt-6 right-[0] w-1/2">
                          <div className="flex flex-col items-center justify-start px-3 w-full">
                            <div className="bg-white-A700 flex sm:flex-col flex-row sm:gap-5 items-start justify-start p-[5px] rounded-[5px] shadow-bs21 w-full">
                              <div className="bg-indigo-A700 h-[65px] ml-2.5 sm:ml-[0] sm:mt-0 my-2.5 rounded-[5px] w-[65px]"></div>
                              <div className="h-[69px] md:h-[71px] mb-[15px] relative w-[84%] sm:w-full">
                                <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-start justify-start mx-auto pl-5 w-[98%]">
                                  <div className="flex flex-col items-start justify-start">
                                    <Text
                                      className="text-[22px] text-blue_gray-800_02 sm:text-lg md:text-xl"
                                      size="txtPoppinsMedium22"
                                    >
                                      $68.92
                                    </Text>
                                  </div>
                                  <div className="flex flex-col items-start justify-start pr-[3px] pt-[3px]">
                                    <Text
                                      className="text-blue_gray-600_01 text-sm"
                                      size="txtPoppinsRegular14"
                                    >
                                      Payment Charge
                                    </Text>
                                  </div>
                                </div>
                                <Text
                                  className="absolute border border-indigo-A700 border-solid px-[5px] right-[0] rounded text-[10px] text-center text-indigo-A700 top-[0]"
                                  size="txtPoppinsRegular10IndigoA700"
                                >
                                  View All
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col items-center justify-start w-full">
                      <div className="h-[119px] sm:h-[200px] relative w-full">
                        <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-end left-[0] my-auto pt-6 w-1/2">
                          <div className="flex flex-col items-center justify-start px-3 w-full">
                            <div className="bg-white-A700 flex sm:flex-col flex-row sm:gap-5 items-start justify-end p-[5px] rounded-[5px] shadow-bs21 w-full">
                              <div className="bg-indigo-A700 h-[65px] sm:mt-0 my-2.5 rounded-[5px] w-[65px]"></div>
                              <div className="h-[69px] md:h-[71px] mb-[15px] relative w-[84%] sm:w-full">
                                <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-start justify-start mx-auto pl-5 w-[98%]">
                                  <div className="flex flex-col items-start justify-start">
                                    <Text
                                      className="text-[22px] text-blue_gray-800_02 sm:text-lg md:text-xl"
                                      size="txtPoppinsMedium22"
                                    >
                                      $12,517.71
                                    </Text>
                                  </div>
                                  <div className="flex flex-col items-start justify-start pr-[3px] pt-[3px]">
                                    <Text
                                      className="text-blue_gray-600_01 text-sm"
                                      size="txtPoppinsRegular14"
                                    >
                                      Purchased Package
                                    </Text>
                                  </div>
                                </div>
                                <Text
                                  className="absolute border border-indigo-A700 border-solid px-[5px] right-[0] rounded text-[10px] text-center text-indigo-A700 top-[0]"
                                  size="txtPoppinsRegular10IndigoA700"
                                >
                                  View All
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-end my-auto pt-6 right-[0] w-1/2">
                          <div className="flex flex-col items-center justify-start px-3 w-full">
                            <div className="bg-white-A700 flex sm:flex-col flex-row sm:gap-5 items-start justify-start p-[5px] rounded-[5px] shadow-bs21 w-full">
                              <div className="bg-blue-500_01 h-[65px] ml-2.5 sm:ml-[0] sm:mt-0 my-2.5 rounded-[5px] w-[65px]"></div>
                              <div className="h-[69px] mb-[15px] relative w-[84%] sm:w-full">
                                <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-start justify-start mx-auto pl-5 w-[98%]">
                                  <div className="flex flex-col items-start justify-start">
                                    <Text
                                      className="text-[22px] text-blue_gray-800_02 sm:text-lg md:text-xl"
                                      size="txtPoppinsMedium22"
                                    >
                                      291.00
                                    </Text>
                                  </div>
                                  <div className="flex flex-col items-start justify-start">
                                    <Text
                                      className="text-blue_gray-600_01 text-sm"
                                      size="txtPoppinsRegular14"
                                    >
                                      Total Interests
                                    </Text>
                                  </div>
                                </div>
                                <Text
                                  className="absolute border border-blue-500_01 border-solid px-[5px] right-[0] rounded text-[10px] text-blue-500_01 text-center top-[0]"
                                  size="txtPoppinsRegular10Blue50001"
                                >
                                  View All
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="h-[119px] sm:h-[200px] relative w-full">
                        <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-end left-[0] my-auto pt-6 w-1/2">
                          <div className="flex flex-col items-center justify-start px-3 w-full">
                            <div className="bg-white-A700 flex sm:flex-col flex-row sm:gap-5 items-start justify-end p-[5px] rounded-[5px] shadow-bs21 w-full">
                              <div className="bg-orange-A200 h-[65px] sm:mt-0 my-2.5 rounded-[5px] w-[65px]"></div>
                              <div className="h-[69px] md:h-[71px] mb-[15px] relative w-[84%] sm:w-full">
                                <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-start justify-start mx-auto pl-5 w-[98%]">
                                  <div className="flex flex-col items-start justify-start">
                                    <Text
                                      className="text-[22px] text-blue_gray-800_02 sm:text-lg md:text-xl"
                                      size="txtPoppinsMedium22"
                                    >
                                      35.00
                                    </Text>
                                  </div>
                                  <div className="flex flex-col items-start justify-start pr-[3px] pt-[3px]">
                                    <Text
                                      className="text-blue_gray-600_01 text-sm"
                                      size="txtPoppinsRegular14"
                                    >
                                      Ignored Profiles
                                    </Text>
                                  </div>
                                </div>
                                <Text
                                  className="absolute border border-orange-A200 border-solid px-[5px] right-[0] rounded text-[10px] text-center text-orange-A200 top-[0]"
                                  size="txtPoppinsRegular10OrangeA200"
                                >
                                  View All
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-end my-auto pt-6 right-[0] w-1/2">
                          <div className="flex flex-col items-center justify-start px-3 w-full">
                            <div className="bg-white-A700 flex sm:flex-col flex-row sm:gap-5 items-start justify-start p-[5px] rounded-[5px] shadow-bs21 w-full">
                              <div className="bg-red-400_04 h-[65px] ml-2.5 sm:ml-[0] sm:mt-0 my-2.5 rounded-[5px] w-[65px]"></div>
                              <div className="h-[69px] md:h-[71px] mb-[15px] relative w-[84%] sm:w-full">
                                <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-start justify-start mx-auto pl-5 w-[98%]">
                                  <div className="flex flex-col items-start justify-start">
                                    <Text
                                      className="text-[22px] text-blue_gray-800_02 sm:text-lg md:text-xl"
                                      size="txtPoppinsMedium22"
                                    >
                                      8.00
                                    </Text>
                                  </div>
                                  <div className="flex flex-col items-start justify-start pr-[3px] pt-[3px]">
                                    <Text
                                      className="text-blue_gray-600_01 text-sm"
                                      size="txtPoppinsRegular14"
                                    >
                                      Reports
                                    </Text>
                                  </div>
                                </div>
                                <Text
                                  className="absolute border border-red-400_04 border-solid px-[5px] right-[0] rounded text-[10px] text-center text-red-400_04 top-[0]"
                                  size="txtPoppinsRegular10Red40004"
                                >
                                  View All
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </List>
                </div>
              </div>
            </div>
            <div className="absolute border border-black-900 border-solid flex flex-col font-poppins items-center justify-start left-1/4 rounded-[10px] top-[1%] w-[21%]">
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
          </div>
          <div className="flex flex-col font-montserrat items-center justify-start max-w-[1349px] mt-3.5 mx-auto md:px-5 w-full">
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
                            name="input"
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
      </div>
    </>
  );
};

export default DesktopThirtyEightPage;
