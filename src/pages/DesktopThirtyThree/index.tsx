import React from "react";

import { Button, CheckBox, Img, Input, Line, List, Text } from "components";

const DesktopThirtyThreePage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-montserrat items-center justify-start mx-auto pb-1 pl-1 w-full">
        <div className="flex flex-col md:gap-10 gap-[334px] items-center justify-start mb-11 w-full">
          <div className="flex flex-col gap-[45px] items-center justify-start w-full">
            <header className="flex flex-col items-center justify-center md:px-5 w-full">
              <Img
                className="flex-1 h-2.5 md:h-auto object-cover w-full"
                src="images/img_pseudo_10x1436.png"
                alt="pseudo"
              />
              <div className="md:h-[171px] h-[73px] sm:h-[85px] md:ml-[0] ml-[25px] mr-[57px] mt-4 relative w-[95%] md:w-full">
                <div className="absolute bg-white-A700 border-b border-gray-200_03 border-solid bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto w-[98%]">
                  <div className="flex md:flex-col flex-row md:gap-10 gap-[200px] items-center justify-end px-[15px] w-full">
                    <div className="flex md:flex-1 flex-row gap-3.5 items-center justify-center pr-[18px] w-[29%] md:w-full">
                      <div className="flex flex-row items-center justify-start p-4 shadow-bs4 w-[51%]">
                        <Img
                          className="h-6 ml-[3px] w-6"
                          src="images/img_frame.svg"
                          alt="frame"
                        />
                        <Text
                          className="ml-1 text-base text-orange-600"
                          size="txtMontserratMedium16"
                        >
                          {" "}
                          Find Matches
                        </Text>
                      </div>
                      <div className="h-[35px] relative w-[46%]">
                        <div className="absolute h-[29px] inset-[0] justify-center m-auto w-[99%]">
                          <div className="bg-gradient7  h-[29px] m-auto outline outline-[1px] outline-yellow-800_01 rounded-[14px] w-full"></div>
                          <Text
                            className="absolute capitalize h-max inset-y-[0] my-auto right-[8%] text-base text-white-A700"
                            size="txtMontserratRegular16WhiteA700"
                          >
                            {" "}
                            Go Premium
                          </Text>
                        </div>
                        <Button
                          className="absolute flex h-[35px] inset-y-[0] items-center justify-center left-[0] my-auto rounded-[17px] w-[35px]"
                          size="md"
                          variant="gradient"
                          color="yellow_700_01_yellow_800_01"
                        >
                          <Img
                            src="images/img_arrowright.svg"
                            alt="arrowright"
                          />
                        </Button>
                      </div>
                    </div>
                    <div className="flex md:flex-1 sm:flex-col flex-row sm:gap-5 items-center justify-center w-[38%] md:w-full">
                      <div className="flex flex-col items-center justify-end p-3 w-[32%] sm:w-full">
                        <div className="border border-gray-200_03 border-solid flex flex-row items-center justify-center p-[5px] rounded-[15px] w-[97%] md:w-full">
                          <Text
                            className="ml-2.5 text-base text-gray-800_02"
                            size="txtMontserratMedium16Gray80002"
                          >
                            Credit  {" "}
                          </Text>
                          <Img
                            className="h-[15px] ml-3"
                            src="images/img_television_orange_600.svg"
                            alt="television"
                          />
                          <Text
                            className="ml-[7px] mr-2.5 text-base text-gray-800_02"
                            size="txtMontserratMedium16Gray80002"
                          >
                            0
                          </Text>
                        </div>
                      </div>
                      <Img
                        className="h-[57px]"
                        src="images/img_user.svg"
                        alt="user"
                      />
                      <Img
                        className="h-[57px]"
                        src="images/img_item.svg"
                        alt="item"
                      />
                      <div className="flex flex-row items-center justify-evenly w-[47%] sm:w-full">
                        <Img
                          className="h-[52px] md:h-auto object-cover"
                          src="images/img_divboostdiv.png"
                          alt="divboostdiv"
                        />
                        <div className="flex flex-col items-end justify-start pl-2 py-2 w-4/5">
                          <div className="bg-orange-600 border border-orange-600 border-solid flex flex-row items-center justify-start rounded-[20px] w-[99%] md:w-full">
                            <div className="flex flex-col items-start justify-start ml-3 w-[38px]">
                              <Img
                                className="h-[39px] md:h-auto object-cover rounded-[20px] w-[74%]"
                                src="images/img_bv7mozwnhchqrqp.png"
                                alt="bv7mozwnhchqrqp"
                              />
                            </div>
                            <div className="flex flex-col items-center justify-start">
                              <Text
                                className="capitalize text-[15px] text-white-A700"
                                size="txtMontserratMedium15WhiteA700"
                              >
                                Hi, tekena
                              </Text>
                            </div>
                            <Img
                              className="h-[22px]"
                              src="images/img_arrowdown.svg"
                              alt="arrowdown"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute flex flex-col items-center justify-start left-[0] py-4 top-[0] w-[22%]">
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
            </header>
            <div className="flex md:flex-col flex-row gap-2.5 items-start justify-between max-w-[1386px] mx-auto md:px-5 w-full">
              <div className="md:h-[917px] h-[952px] relative w-[22%] md:w-full">
                <div className="absolute bg-white-A700 flex flex-col h-max inset-[0] items-center justify-center m-auto p-[25px] sm:px-5 rounded-[15px] shadow-bs7 w-[93%]">
                  <div className="flex flex-col items-start justify-start mb-[674px] w-full">
                    <div className="flex flex-col items-start justify-start w-[34%] md:w-full">
                      <div
                        className="bg-cover bg-no-repeat flex flex-col h-[70px] items-start justify-start p-1 w-[84%] md:w-full"
                        style={{
                          backgroundImage:
                            "url('images/img_divuserpopularityicn.svg')",
                        }}
                      >
                        <Img
                          className="h-[49px] md:h-auto my-1.5 rounded-[50%] w-[49px]"
                          src="images/img_bv7mozwnhchqrqp_49x49.png"
                          alt="bv7mozwnhchqrqp_One"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start py-3 w-full">
                      <div className="flex flex-col items-start justify-start w-full">
                        <Text
                          className="text-base text-blue_gray-900_02"
                          size="txtMontserratMedium16Bluegray90002"
                        >
                          Tekena west
                        </Text>
                      </div>
                      <div className="flex flex-col items-start justify-start w-full">
                        <div className="flex flex-col items-center justify-end py-[5px]">
                          <Text
                            className="text-[15px] text-gray-800"
                            size="txtMontserratRegular15Gray800"
                          >
                            <span className="text-gray-800 font-montserrat text-left font-normal">
                              Popularity:{" "}
                            </span>
                            <span className="text-purple-400 font-montserrat text-left font-normal">
                              Very low
                            </span>
                          </Text>
                        </div>
                      </div>
                      <Button
                        className="cursor-pointer font-medium mb-[3px] min-w-[227px] mt-[15px] rounded-[17px] text-center text-sm"
                        color="pink_50"
                        size="md"
                        variant="outline"
                      >
                        Increase Popularity
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-[3%] flex flex-col font-roboto gap-4 inset-x-[0] items-center justify-start mx-auto py-2 w-[96%]">
                  <div className="flex flex-row items-center justify-start px-4 w-full">
                    <Img
                      className="h-14 w-14"
                      src="images/img_home.svg"
                      alt="home"
                    />
                    <div className="flex flex-col items-center justify-start py-4 w-[79%]">
                      <div className="flex flex-col items-start justify-start w-full">
                        <div className="flex flex-col items-center justify-start">
                          <Text
                            className="text-base text-gray-600_01"
                            size="txtRobotoRegular16"
                          >
                            Home page
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="h-14 relative w-full">
                      <Img
                        className="absolute h-14 inset-y-[0] left-[6%] my-auto w-14"
                        src="images/img_divvlistitemiconmargin.svg"
                        alt="divvlistitemico"
                      />
                      <div className="absolute flex flex-row h-max inset-y-[0] items-center justify-center my-auto right-[6%] w-[70%]">
                        <div className="flex flex-col items-center justify-start py-4 w-[84%]">
                          <div className="flex flex-col items-start justify-start w-full">
                            <div className="flex flex-col items-center justify-start">
                              <Text
                                className="text-base text-gray-600_01"
                                size="txtRobotoRegular16"
                              >
                                Features
                              </Text>
                            </div>
                          </div>
                        </div>
                        <Img
                          className="h-4"
                          src="images/img_arrowdown_gray_600_01.svg"
                          alt="arrowdown_One"
                        />
                      </div>
                      <Line className="absolute bg-black-900_1e border-gray-800_03 border-solid border-t h-px inset-x-[0] mx-auto top-[0] w-full" />
                    </div>
                    <div className="flex flex-col items-center justify-start w-full">
                      <List
                        className="flex flex-col gap-px items-center w-full"
                        orientation="vertical"
                      >
                        <div className="flex flex-1 flex-col items-end justify-start my-0 px-4 w-full">
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
                        <div className="flex flex-1 flex-col items-end justify-start my-0 px-4 w-full">
                          <div className="flex flex-col items-center justify-start py-4 w-[79%] md:w-full">
                            <div className="flex flex-col items-start justify-start w-full">
                              <div className="flex flex-col items-center justify-start">
                                <Text
                                  className="text-base text-gray-600_01"
                                  size="txtRobotoRegular16"
                                >
                                  Advert free
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </List>
                      <div className="bg-orange-600 flex flex-col justify-start w-full">
                        <div className="flex flex-col items-center justify-start md:ml-[0] ml-[72px] py-4 w-[70%] md:w-full">
                          <div className="flex flex-col items-start justify-start w-full">
                            <div className="flex flex-col items-center justify-start">
                              <Text
                                className="text-base text-white-A700"
                                size="txtRobotoBold16"
                              >
                                18 + content
                              </Text>
                            </div>
                          </div>
                        </div>
                        <Line className="bg-black-900_1e border-b border-gray-800_03 border-solid h-px w-full" />
                      </div>
                    </div>
                  </div>
                  <List
                    className="flex flex-col gap-4 items-center mb-4 w-full"
                    orientation="vertical"
                  >
                    <div className="flex flex-1 flex-row items-center justify-start px-4 w-full">
                      <Img
                        className="h-14 w-14"
                        src="images/img_lock_gray_600_01.svg"
                        alt="lock"
                      />
                      <div className="flex flex-col items-center justify-start py-4 w-[79%]">
                        <div className="flex flex-col items-start justify-start w-full">
                          <div className="flex flex-col items-center justify-start">
                            <Text
                              className="text-base text-gray-600_01"
                              size="txtRobotoRegular16"
                            >
                              Account settings
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-row items-center justify-start px-4 w-full">
                      <Img
                        className="h-14 w-14"
                        src="images/img_divvlistitemiconmargin_gray_600_01.svg"
                        alt="divvlistitemico"
                      />
                      <div className="flex flex-col items-center justify-start py-4 w-[79%]">
                        <div className="flex flex-col items-start justify-start w-full">
                          <div className="flex flex-col items-center justify-start">
                            <Text
                              className="text-base text-gray-600_01"
                              size="txtRobotoRegular16"
                            >
                              Become a customer
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-row items-center justify-start px-4 w-full">
                      <Img
                        className="h-14 w-14"
                        src="images/img_divvlistitemiconmargin_gray_600_01_56x56.svg"
                        alt="divvlistitemico"
                      />
                      <div className="flex flex-col items-center justify-start py-4 w-[79%]">
                        <div className="flex flex-col items-start justify-start w-full">
                          <div className="flex flex-col items-center justify-start">
                            <Text
                              className="text-base text-gray-600_01"
                              size="txtRobotoRegular16"
                            >
                              LadiesSTARS
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-row items-center justify-start px-4 w-full">
                      <Img
                        className="h-14 w-[55px]"
                        src="images/img_divvlistitemiconmargin_gray_600_01_56x55.svg"
                        alt="divvlistitemico"
                      />
                      <div className="flex flex-col items-center justify-start py-4 w-[79%]">
                        <div className="flex flex-col items-start justify-start w-full">
                          <div className="flex flex-col items-center justify-start">
                            <Text
                              className="text-base text-gray-600_01"
                              size="txtRobotoRegular16"
                            >
                              Coins
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col font-montserrat items-center justify-end p-[5px] w-full">
                      <div className="flex flex-row items-center justify-start pr-[11px] py-[11px] w-[82%] md:w-full">
                        <Img
                          className="h-5"
                          src="images/img_user_gray_800.svg"
                          alt="user"
                        />
                        <Text
                          className="text-base text-gray-800"
                          size="txtMontserratRegular16Gray800"
                        >
                          Live Videos
                        </Text>
                      </div>
                    </div>
                  </List>
                </div>
              </div>
              <div className="flex md:flex-1 flex-col font-roboto items-center justify-start md:mt-0 mt-[5px] w-[78%] md:w-full">
                <div className="flex flex-col gap-2.5 items-center justify-start w-[96%] md:w-full">
                  <div className="flex md:flex-col flex-row gap-[29px] items-start justify-start pb-[7px] pr-[7px] w-full">
                    <div className="flex flex-col items-center justify-start md:mt-0 mt-1">
                      <Text
                        className="text-lg text-red-700 uppercase"
                        size="txtRobotoBlack18"
                      >
                        VIP Escorts
                      </Text>
                    </div>
                    <div className="flex md:flex-1 sm:flex-col flex-row sm:gap-5 items-start justify-center w-[46%] md:w-full">
                      <Button
                        className="cursor-pointer font-bold mb-0.5 min-w-[68px] text-[11px] text-center"
                        shape="square"
                        color="lime_800"
                        size="md"
                        variant="outline"
                      >
                        Live Girls
                      </Button>
                      <Button
                        className="cursor-pointer font-bold mb-0.5 min-w-[71px] ml-0.5 sm:ml-[0] text-[11px] text-center"
                        shape="square"
                        color="lime_800"
                        size="md"
                        variant="outline"
                      >
                        Sex Cams
                      </Button>
                      <Button
                        className="cursor-pointer font-bold mb-0.5 min-w-[83px] ml-0.5 sm:ml-[0] text-[11px] text-center"
                        shape="square"
                        color="lime_800"
                        size="md"
                        variant="outline"
                      >
                        Meet & Fuck
                      </Button>
                      <Button
                        className="cursor-pointer font-bold mb-0.5 min-w-[84px] ml-0.5 sm:ml-[0] text-[11px] text-center"
                        shape="square"
                        color="red_300"
                        size="md"
                        variant="outline"
                      >
                        Escorts Now
                      </Button>
                      <Button
                        className="cursor-pointer font-bold mb-0.5 min-w-[82px] ml-0.5 sm:ml-[0] text-[11px] text-center"
                        shape="square"
                        color="red_300"
                        size="md"
                        variant="outline"
                      >
                        Live Escorts
                      </Button>
                      <Button
                        className="cursor-pointer font-bold mb-0.5 min-w-[63px] ml-0.5 sm:ml-[0] text-[11px] text-center"
                        shape="square"
                        color="red_300"
                        size="md"
                        variant="outline"
                      >
                        Live Sex
                      </Button>
                    </div>
                  </div>
                  <div className="gap-2 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-start justify-start pb-[9px] pr-[9px] w-full">
                    <Img
                      className="flex-1 h-[73px] md:h-auto object-cover w-full"
                      src="images/img_linkpicture.png"
                      alt="linkpicture"
                    />
                    <Img
                      className="flex-1 h-[73px] md:h-auto object-cover w-full"
                      src="images/img_linkpicture_73x250.png"
                      alt="linkpicture_One"
                    />
                    <Img
                      className="flex-1 h-[73px] md:h-auto object-cover w-full"
                      src="images/img_linkpicture_1.png"
                      alt="linkpicture_Two"
                    />
                  </div>
                </div>
                <div className="flex flex-col font-mochiypopone gap-5 items-center justify-start mt-12 w-full">
                  <div className="flex flex-col items-start justify-start w-[97%] md:w-full">
                    <div className="flex flex-row items-start justify-start w-[18%] md:w-full">
                      <Img
                        className="h-[23px]"
                        src="images/img_search.svg"
                        alt="search"
                      />
                      <Text
                        className="ml-1 text-black-900 text-xl"
                        size="txtMochiyPopOneRegular20"
                      >
                        {" "}
                        Find Matches
                      </Text>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-col font-fuzzybubbles items-center justify-start pl-5 py-5 rounded-[5px] w-full">
                    <div className="md:h-[1157px] sm:h-[168px] h-[268px] mb-4 relative w-full">
                      <div className="absolute flex flex-col items-center justify-start left-[0] top-[0] w-[72%]">
                        <div className="flex flex-col items-start justify-start w-full">
                          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-evenly w-full">
                            <div className="flex md:flex-1 flex-col items-start justify-end pr-2.5 pt-2.5 w-[33%] md:w-full">
                              <div className="flex flex-col gap-[9px] items-start justify-start w-[96%] md:w-full">
                                <Text
                                  className="text-base text-blue_gray-100"
                                  size="txtFuzzyBubblesBold16"
                                >
                                  Name
                                </Text>
                                <div className="bg-white-A700 flex flex-col items-center justify-start outline outline-[1px] outline-gray-800_04 p-2 rounded-[5px] w-full">
                                  <div className="flex flex-col items-start justify-start">
                                    <Text
                                      className="text-base text-gray-700"
                                      size="txtFuzzyBubblesRegular16"
                                    >
                                      Name
                                    </Text>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex md:flex-1 flex-col items-start justify-end pr-2.5 pt-2.5 w-[33%] md:w-full">
                              <div className="flex flex-col gap-[9px] items-start justify-start w-[96%] md:w-full">
                                <Text
                                  className="text-base text-blue_gray-100"
                                  size="txtFuzzyBubblesBold16"
                                >
                                  Username
                                </Text>
                                <div className="bg-white-A700 flex flex-col items-center justify-start outline outline-[1px] outline-gray-800_04 p-2 rounded-[5px] w-full">
                                  <div className="flex flex-col items-start justify-start">
                                    <Text
                                      className="text-base text-gray-700"
                                      size="txtFuzzyBubblesRegular16"
                                    >
                                      Username
                                    </Text>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex md:flex-1 flex-col items-start justify-end pr-2.5 pt-2.5 w-[16%] md:w-full">
                              <div className="flex flex-col gap-1.5 items-center justify-start pt-0.5 w-[92%] md:w-full">
                                <Text
                                  className="text-base text-blue_gray-100"
                                  size="txtFuzzyBubblesBold16"
                                >
                                  Looking For
                                </Text>
                                <Input
                                  name="options"
                                  placeholder="All"
                                  className="!placeholder:text-blue_gray-100_01 !text-blue_gray-100_01 p-0 text-base text-left w-full"
                                  wrapClassName="border border-gray-800_04 border-solid flex rounded-[5px] w-full"
                                  suffix={
                                    <div className="mt-[7px] mb-0.5 ml-[35px] sm:w-full sm:mx-0 w-[9%] bg-gray-700_01">
                                      <Img
                                        className="my-auto"
                                        src="images/img_vector.svg"
                                        alt="Vector"
                                      />
                                    </div>
                                  }
                                  shape="round"
                                  color="white_A700"
                                  size="xl"
                                ></Input>
                              </div>
                            </div>
                            <div className="flex md:flex-1 flex-col items-start justify-end pr-2.5 pt-2.5 w-[21%] md:w-full">
                              <div className="flex flex-col items-center justify-start pt-0.5 w-[94%] md:w-full">
                                <div className="flex flex-col gap-1.5 items-start justify-start w-full">
                                  <Text
                                    className="text-base text-blue_gray-100"
                                    size="txtFuzzyBubblesBold16"
                                  >
                                    Age Between
                                  </Text>
                                  <div className="flex flex-row gap-1.5 items-center justify-between w-full">
                                    <Button
                                      className="border border-gray-800_04 border-solid cursor-pointer flex items-center justify-center min-w-[65px] rounded-[5px]"
                                      rightIcon={
                                        <div className="mt-1.5 mb-[3px] ml-3 bg-gray-700_01">
                                          <Img
                                            src="images/img_vector.svg"
                                            alt="Vector"
                                          />
                                        </div>
                                      }
                                      shape="round"
                                      color="white_A700"
                                      size="lg"
                                      variant="fill"
                                    >
                                      <div className="!text-blue_gray-100_01 text-base text-left">
                                        18
                                      </div>
                                    </Button>
                                    <Button
                                      className="border border-gray-800_04 border-solid cursor-pointer flex items-center justify-center min-w-[65px] rounded-[5px]"
                                      rightIcon={
                                        <div className="mt-1.5 mb-[3px] ml-[9px] bg-gray-700_01">
                                          <Img
                                            src="images/img_vector.svg"
                                            alt="Vector"
                                          />
                                        </div>
                                      }
                                      shape="round"
                                      color="white_A700"
                                      size="lg"
                                      variant="fill"
                                    >
                                      <div className="!text-blue_gray-100_01 text-base text-left">
                                        50
                                      </div>
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-start justify-end pr-2.5 pt-2.5 w-[33%] md:w-full">
                            <div className="flex flex-col gap-[9px] items-start justify-start w-[96%] md:w-full">
                              <Text
                                className="text-base text-blue_gray-100"
                                size="txtFuzzyBubblesBold16"
                              >
                                Distance in KM
                              </Text>
                              <Input
                                name="input"
                                placeholder="Anywhere"
                                className="!placeholder:text-gray-700 !text-gray-700 leading-[normal] p-0 text-base text-left w-full"
                                wrapClassName="outline outline-[1px] outline-gray-800_04 rounded-[5px] w-full"
                                shape="round"
                                color="white_A700"
                                size="md"
                              ></Input>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="absolute bottom-[0] font-roboto h-[151px] inset-x-[0] mx-auto w-full">
                        <div className="flex flex-row font-fuzzybubbles gap-1.5 items-center justify-center mb-[-1px] ml-auto md:pr-10 sm:pr-5 pr-[492px] w-[76%] z-[1]">
                          <Button
                            className="border border-pink-700 border-solid cursor-pointer min-w-[79px] rounded-[5px] text-base text-center"
                            shape="round"
                            color="pink_700"
                            size="lg"
                            variant="fill"
                          >
                            Search
                          </Button>
                          <Button
                            className="border border-blue_gray-400 border-solid cursor-pointer flex items-center justify-center min-w-[223px] rounded-[5px]"
                            leftIcon={
                              <div className="mr-[5px] bg-white-A700 my-px">
                                <Img src="images/img_filter.svg" alt="filter" />
                              </div>
                            }
                            shape="round"
                            color="blue_gray_400"
                            size="lg"
                            variant="fill"
                          >
                            <div className="text-base text-center">
                              {" "}
                              Show Advanced Filter
                            </div>
                          </Button>
                        </div>
                        <div className="flex flex-col items-center justify-end mt-auto mx-auto sm:pr-5 pr-[26px] pt-[26px] w-full">
                          <div className="flex flex-col gap-2.5 items-center justify-start w-full">
                            <div className="bg-white-A700 border border-gray-300 border-solid flex md:flex-col flex-row md:gap-5 items-center justify-start shadow-bs8 w-full">
                              <div className="border-gray-300 border-r border-solid flex md:flex-1 flex-row items-start justify-center p-2 w-[7%] md:w-full">
                                <Text
                                  className="ml-2 mt-0.5 text-[15px] text-black-900 text-center"
                                  size="txtRobotoRegular15"
                                >
                                  Age{" "}
                                </Text>
                                <Text
                                  className="ml-0.5 mr-[9px] mt-1.5 text-[8px] text-center text-red-700"
                                  size="txtInterRegular8"
                                >
                                  C
                                </Text>
                              </div>
                              <div className="border-gray-300 border-r border-solid flex md:flex-1 flex-row items-center justify-center p-[9px] w-[8%] md:w-full">
                                <Text
                                  className="ml-2 text-[15px] text-black-900 text-center"
                                  size="txtRobotoRegular15"
                                >
                                  Hair{" "}
                                </Text>
                                <Text
                                  className="ml-0.5 mr-2 text-[8px] text-center text-red-700"
                                  size="txtInterRegular8"
                                >
                                  C
                                </Text>
                              </div>
                              <div className="border-gray-300 border-r border-solid flex md:flex-1 flex-row items-center justify-center p-[9px] w-[8%] md:w-full">
                                <Text
                                  className="ml-2 text-[15px] text-black-900 text-center"
                                  size="txtRobotoRegular15"
                                >
                                  Rates{" "}
                                </Text>
                                <Text
                                  className="ml-0.5 mr-2 text-[8px] text-center text-red-700"
                                  size="txtInterRegular8"
                                >
                                  C
                                </Text>
                              </div>
                              <div className="border-gray-300 border-r border-solid flex md:flex-1 flex-row items-center justify-center p-[9px] w-[9%] md:w-full">
                                <Text
                                  className="ml-2 text-[15px] text-black-900 text-center"
                                  size="txtRobotoRegular15"
                                >
                                  Breast{" "}
                                </Text>
                                <Text
                                  className="ml-0.5 mr-2 text-[8px] text-center text-red-700"
                                  size="txtInterRegular8"
                                >
                                  C
                                </Text>
                              </div>
                              <div className="border-gray-300 border-r border-solid flex md:flex-1 flex-row items-center justify-center p-[9px] w-[9%] md:w-full">
                                <Text
                                  className="ml-[7px] text-[15px] text-black-900 text-center"
                                  size="txtRobotoRegular15"
                                >
                                  Travel{" "}
                                </Text>
                                <Text
                                  className="ml-[3px] mr-2 text-[8px] text-center text-red-700"
                                  size="txtInterRegular8"
                                >
                                  C
                                </Text>
                              </div>
                              <div className="border-gray-300 border-r border-solid flex md:flex-1 flex-row items-start justify-center p-[9px] w-[9%] md:w-full">
                                <Text
                                  className="ml-2 text-[15px] text-black-900 text-center"
                                  size="txtRobotoRegular15"
                                >
                                  Weight{" "}
                                </Text>
                                <Text
                                  className="ml-0.5 mr-2 mt-1.5 text-[8px] text-center text-red-700"
                                  size="txtInterRegular8"
                                >
                                  C
                                </Text>
                              </div>
                              <div className="border-gray-300 border-r border-solid flex md:flex-1 flex-row items-start justify-center p-[9px] w-[9%] md:w-full">
                                <Text
                                  className="ml-[9px] text-[15px] text-black-900 text-center"
                                  size="txtRobotoRegular15"
                                >
                                  Height{" "}
                                </Text>
                                <Text
                                  className="ml-0.5 mr-2 mt-1.5 text-[8px] text-center text-red-700"
                                  size="txtInterRegular8"
                                >
                                  C
                                </Text>
                              </div>
                              <div className="border-gray-300 border-r border-solid flex md:flex-1 flex-row items-center justify-center p-[9px] w-[10%] md:w-full">
                                <Text
                                  className="ml-[7px] text-[15px] text-black-900 text-center"
                                  size="txtRobotoRegular15"
                                >
                                  Services{" "}
                                </Text>
                                <Text
                                  className="ml-0.5 mr-2 text-[8px] text-center text-red-700"
                                  size="txtInterRegular8"
                                >
                                  C
                                </Text>
                              </div>
                              <div className="border-gray-300 border-r border-solid flex md:flex-1 flex-row items-center justify-center p-[9px] w-[11%] md:w-full">
                                <Text
                                  className="ml-2 text-[15px] text-black-900 text-center"
                                  size="txtRobotoRegular15"
                                >
                                  Eth / Nat{" "}
                                </Text>
                                <Text
                                  className="ml-0.5 mr-2 text-[8px] text-center text-red-700"
                                  size="txtInterRegular8"
                                >
                                  C
                                </Text>
                              </div>
                              <div className="bg-gray-100_02 border-b-4 border-r border-solid flex md:flex-1 flex-row items-start justify-center p-2 red_700_gray_300_border w-[12%] md:w-full">
                                <Text
                                  className="ml-[9px] mt-0.5 text-[15px] text-center text-red-700"
                                  size="txtRobotoRegular15Red700"
                                >
                                  Languages{" "}
                                </Text>
                                <Text
                                  className="ml-0.5 mr-[9px] mt-1.5 text-[8px] text-center text-red-700"
                                  size="txtInterRegular8"
                                >
                                  D
                                </Text>
                              </div>
                              <div className="border-gray-300 border-r border-solid flex md:flex-1 flex-row items-center justify-center p-[9px] w-[13%] md:w-full">
                                <Text
                                  className="ml-2 text-[15px] text-black-900 text-center"
                                  size="txtRobotoRegular15"
                                >
                                  Preferences{" "}
                                </Text>
                                <Text
                                  className="ml-0.5 mr-2 text-[8px] text-center text-red-700"
                                  size="txtInterRegular8"
                                >
                                  C
                                </Text>
                              </div>
                            </div>
                            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start pr-[3px] pt-[3px] w-full">
                              <div className="bg-white-A700 border border-gray-300 border-solid flex md:flex-1 flex-col items-center justify-end p-[3px] shadow-bs8 w-[11%] md:w-full">
                                <div className="flex flex-col justify-start mt-0.5 pb-0.5 pl-0.5 w-[95%] md:w-full">
                                  <CheckBox
                                    className="font-bold text-[11px] text-left uppercase"
                                    inputClassName="border border-blue_gray-100_02 border-solid h-3 mr-[5px] w-3"
                                    name="strongwithrevie"
                                    id="strongwithrevie"
                                    label="With reviews"
                                    shape="square"
                                    size="xs"
                                  ></CheckBox>
                                  <Text
                                    className="md:ml-[0] ml-[17px] text-[10px] text-gray-600_02 uppercase"
                                    size="txtRobotoRegular10"
                                  >
                                    (3704)
                                  </Text>
                                </div>
                              </div>
                              <div className="bg-white-A700 border border-gray-300 border-solid flex md:flex-1 flex-col items-center justify-end md:ml-[0] ml-[3px] p-[3px] shadow-bs8 w-[8%] md:w-full">
                                <div className="flex flex-col items-center justify-start mt-0.5 pb-0.5 pl-0.5 w-[92%] md:w-full">
                                  <CheckBox
                                    className="font-bold text-[11px] text-left uppercase"
                                    inputClassName="border border-blue_gray-100_02 border-solid h-3 mr-[5px] w-3"
                                    name="strongverified"
                                    id="strongverified"
                                    label="Verified"
                                    shape="square"
                                    size="xs"
                                  ></CheckBox>
                                  <Text
                                    className="text-[10px] text-gray-600_02 uppercase"
                                    size="txtRobotoRegular10"
                                  >
                                    (45834)
                                  </Text>
                                </div>
                              </div>
                              <div className="bg-white-A700 border border-gray-300 border-solid flex md:flex-1 flex-col items-center justify-end md:ml-[0] ml-[3px] p-[3px] shadow-bs8 w-[10%] md:w-full">
                                <div className="flex flex-col justify-start mt-0.5 pb-0.5 pl-0.5 w-[94%] md:w-full">
                                  <CheckBox
                                    className="font-bold text-[11px] text-left uppercase"
                                    inputClassName="border border-blue_gray-100_02 border-solid h-3 mr-[5px] w-3"
                                    name="strongnewcomers"
                                    id="strongnewcomers"
                                    label="Newcomers"
                                    shape="square"
                                    size="xs"
                                  ></CheckBox>
                                  <Text
                                    className="md:ml-[0] ml-[17px] text-[10px] text-gray-600_02 uppercase"
                                    size="txtRobotoRegular10"
                                  >
                                    (7090)
                                  </Text>
                                </div>
                              </div>
                              <div className="bg-white-A700 border border-gray-300 border-solid flex md:flex-1 flex-col items-center justify-end md:ml-[0] ml-[3px] p-[3px] shadow-bs8 w-[10%] md:w-full">
                                <div className="flex flex-col justify-start mt-0.5 pb-0.5 pl-0.5 w-[94%] md:w-full">
                                  <CheckBox
                                    className="font-bold text-[11px] text-left uppercase"
                                    inputClassName="border border-blue_gray-100_02 border-solid h-3 mr-[5px] w-3"
                                    name="strongwithvideo"
                                    id="strongwithvideo"
                                    label="With videos"
                                    shape="square"
                                    size="xs"
                                  ></CheckBox>
                                  <Text
                                    className="md:ml-[0] ml-[17px] text-[10px] text-gray-600_02 uppercase"
                                    size="txtRobotoRegular10"
                                  >
                                    (12742)
                                  </Text>
                                </div>
                              </div>
                              <div className="bg-white-A700 border border-gray-300 border-solid flex md:flex-1 flex-col items-center justify-end md:ml-[0] ml-[3px] p-[3px] shadow-bs8 w-[9%] md:w-full">
                                <div className="flex flex-col justify-start mt-0.5 pb-0.5 pl-0.5 w-[93%] md:w-full">
                                  <CheckBox
                                    className="font-bold text-[11px] text-left uppercase"
                                    inputClassName="border border-blue_gray-100_02 border-solid h-3 mr-[5px] w-3"
                                    name="strongpornstar"
                                    id="strongpornstar"
                                    label="Pornstar"
                                    shape="square"
                                    size="xs"
                                  ></CheckBox>
                                  <Text
                                    className="md:ml-[0] ml-[17px] text-[10px] text-gray-600_02 uppercase"
                                    size="txtRobotoRegular10"
                                  >
                                    (369)
                                  </Text>
                                </div>
                              </div>
                              <div className="bg-white-A700 border border-gray-300 border-solid flex md:flex-1 flex-col items-center justify-end md:ml-[0] ml-[3px] p-[3px] shadow-bs8 w-[11%] md:w-full">
                                <div className="flex flex-col justify-start mt-0.5 pb-0.5 pl-0.5 w-[94%] md:w-full">
                                  <CheckBox
                                    className="font-bold text-[11px] text-left uppercase"
                                    inputClassName="border border-blue_gray-100_02 border-solid h-3 mr-[5px] w-3"
                                    name="strongindepende"
                                    id="strongindepende"
                                    label="Independent"
                                    shape="square"
                                    size="xs"
                                  ></CheckBox>
                                  <Text
                                    className="md:ml-[0] ml-[17px] text-[10px] text-gray-600_02 uppercase"
                                    size="txtRobotoRegular10"
                                  >
                                    (56755)
                                  </Text>
                                </div>
                              </div>
                              <div className="bg-white-A700 border border-gray-300 border-solid flex md:flex-1 flex-col items-center justify-end ml-0.5 md:ml-[0] p-[3px] shadow-bs8 w-[12%] md:w-full">
                                <div className="flex flex-col justify-start mt-0.5 pb-0.5 pl-0.5 w-[95%] md:w-full">
                                  <CheckBox
                                    className="font-bold text-[11px] text-left uppercase"
                                    inputClassName="border border-blue_gray-100_02 border-solid h-3 mr-[5px] w-3"
                                    name="strongseenlast"
                                    id="strongseenlast"
                                    label="Seen last week"
                                    shape="square"
                                    size="xs"
                                  ></CheckBox>
                                  <Text
                                    className="md:ml-[0] ml-[17px] text-[10px] text-gray-600_02 uppercase"
                                    size="txtRobotoRegular10"
                                  >
                                    (50302)
                                  </Text>
                                </div>
                              </div>
                              <div className="bg-white-A700 border border-gray-300 border-solid flex md:flex-1 flex-col items-center justify-end md:ml-[0] ml-[3px] p-[3px] shadow-bs8 w-[11%] md:w-full">
                                <div className="flex flex-col justify-start mt-0.5 pb-0.5 pl-0.5 w-[95%] md:w-full">
                                  <CheckBox
                                    className="font-bold text-[11px] text-left uppercase"
                                    inputClassName="border border-blue_gray-100_02 border-solid h-3 mr-[5px] w-3"
                                    name="strongduowith"
                                    id="strongduowith"
                                    label="Duo with girl"
                                    shape="square"
                                    size="xs"
                                  ></CheckBox>
                                  <Text
                                    className="md:ml-[0] ml-[17px] text-[10px] text-gray-600_02 uppercase"
                                    size="txtRobotoRegular10"
                                  >
                                    (471)
                                  </Text>
                                </div>
                              </div>
                              <div className="bg-white-A700 border border-gray-300 border-solid flex md:flex-1 flex-col items-center justify-end md:ml-[0] ml-[3px] p-[3px] shadow-bs8 w-[8%] md:w-full">
                                <div className="flex flex-col items-center justify-start mt-0.5 pb-0.5 pl-0.5 w-[92%] md:w-full">
                                  <CheckBox
                                    className="font-bold text-[11px] text-left uppercase"
                                    inputClassName="border border-blue_gray-100_02 border-solid h-3 mr-[5px] w-3"
                                    name="strongcouple"
                                    id="strongcouple"
                                    label="Couple"
                                    shape="square"
                                    size="xs"
                                  ></CheckBox>
                                  <Text
                                    className="text-[10px] text-gray-600_02 uppercase"
                                    size="txtRobotoRegular10"
                                  >
                                    (18)
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
                <div className="flex flex-col font-fuzzybubbles gap-[35px] items-center justify-start w-[99%] md:w-full">
                  <Input
                    name="divalert"
                    placeholder="4058 Matches Found"
                    className="p-0 placeholder:text-teal-800 text-base text-left w-full"
                    wrapClassName="border border-solid border-teal-100 rounded-[5px] w-full"
                    shape="round"
                    color="teal_50"
                    size="2xl"
                  ></Input>
                  <div className="flex flex-col font-roboto items-center justify-start w-[98%] md:w-full">
                    <div className="flex flex-col gap-4 items-center justify-start w-full">
                      <List
                        className="sm:flex-col flex-row gap-[15px] grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 justify-center w-full"
                        orientation="horizontal"
                      >
                        <div className="md:h-[332px] h-[338px] sm:ml-[0] relative w-full">
                          <div className="absolute bg-white-A700 flex flex-col h-max inset-[0] items-center justify-center m-auto shadow-bs8 w-[98%]">
                            <div className="border border-gray-300 border-solid flex flex-col items-center justify-end p-[3px] w-full">
                              <Text
                                className="mt-0.5 text-center text-gray-900 text-sm"
                                size="txtRobotoBold14"
                              >
                                Anne
                              </Text>
                            </div>
                            <div className="h-[280px] relative w-full">
                              <div className="absolute h-[280px] inset-[0] justify-center m-auto w-full">
                                <Img
                                  className="h-[280px] m-auto object-cover w-full"
                                  src="images/img_1700691105892680avif.png"
                                  alt="170069110589268"
                                />
                                <div className="absolute flex flex-col left-[0] top-[0] w-[22%]">
                                  <div className="bg-gradient13  flex flex-col h-10 items-center justify-center mx-auto p-[5px] rounded-[50%] w-10">
                                    <Text
                                      className="mt-[5px] text-[8px] text-center text-white-A700 uppercase"
                                      size="txtRobotoBlack8"
                                    >
                                      Indepe
                                    </Text>
                                    <Text
                                      className="mb-0.5 text-[8px] text-center text-white-A700 uppercase"
                                      size="txtRobotoBlack8"
                                    >
                                      ndent
                                    </Text>
                                  </div>
                                  <Text
                                    className="bg-gradient14  flex h-10 items-center justify-center mt-[-10px] mx-auto rounded-[50%] text-[9px] text-center text-white-A700 uppercase w-10 z-[1]"
                                    size="txtRobotoBlack9"
                                  >
                                    Video
                                  </Text>
                                </div>
                              </div>
                              <div className="absolute bg-gradient15  bottom-[0] flex flex-col h-[54px] items-start justify-end left-[0] pr-3.5 pt-3.5 rotate-[-45deg] w-[54px]">
                                <Text
                                  className="h-[39px] text-[10px] text-center text-white-A700 uppercase w-[39px]"
                                  size="txtRobotoBlack10"
                                >
                                  Verified
                                </Text>
                              </div>
                            </div>
                            <div className="border border-gray-300 border-solid flex flex-col items-center justify-start p-[5px] w-full">
                              <Text
                                className="text-blue_gray-900_03 text-center text-sm"
                                size="txtRobotoRegular14Bluegray90003"
                              >
                                <span className="text-blue_gray-900_03 font-roboto font-normal">
                                  Escorts{" "}
                                </span>
                                <span className="text-blue_gray-900_03 font-roboto font-bold">
                                  Paris
                                </span>
                              </Text>
                            </div>
                          </div>
                          <Img
                            className="absolute h-[52px] object-cover right-[0] top-[0] w-[53px]"
                            src="images/img_after.png"
                            alt="after"
                          />
                        </div>
                        <div className="md:h-[332px] h-[338px] sm:ml-[0] relative w-full">
                          <div className="absolute bg-white-A700 flex flex-col h-max inset-[0] items-center justify-center m-auto shadow-bs8 w-[98%]">
                            <div className="border border-gray-300 border-solid flex flex-col items-center justify-end p-0.5 w-full">
                              <Text
                                className="mt-1 text-center text-gray-900 text-sm"
                                size="txtRobotoBold14"
                              >
                                Ezgi
                              </Text>
                            </div>
                            <div className="h-[280px] relative w-full">
                              <div className="absolute h-[280px] inset-[0] justify-center m-auto w-full">
                                <Img
                                  className="h-[280px] m-auto object-cover w-full"
                                  src="images/img_1646851423574942avif.png"
                                  alt="164685142357494"
                                />
                                <div className="absolute flex flex-col left-[0] top-[0] w-[22%]">
                                  <div className="bg-gradient13  flex flex-col h-10 items-center justify-center mx-auto p-[5px] rounded-[50%] w-10">
                                    <Text
                                      className="mt-[5px] text-[8px] text-center text-white-A700 uppercase"
                                      size="txtRobotoBlack8"
                                    >
                                      Indepe
                                    </Text>
                                    <Text
                                      className="mb-0.5 text-[8px] text-center text-white-A700 uppercase"
                                      size="txtRobotoBlack8"
                                    >
                                      ndent
                                    </Text>
                                  </div>
                                  <Text
                                    className="bg-gradient14  flex h-10 items-center justify-center mt-[-10px] mx-auto rounded-[50%] text-[9px] text-center text-white-A700 uppercase w-10 z-[1]"
                                    size="txtRobotoBlack9"
                                  >
                                    Video
                                  </Text>
                                </div>
                              </div>
                              <div className="absolute bg-gradient15  bottom-[0] flex flex-col h-[54px] items-start justify-end left-[0] pr-3.5 pt-3.5 rotate-[-45deg] w-[54px]">
                                <Text
                                  className="h-[39px] text-[10px] text-center text-white-A700 uppercase w-[39px]"
                                  size="txtRobotoBlack10"
                                >
                                  Verified
                                </Text>
                              </div>
                            </div>
                            <div className="border border-gray-300 border-solid flex flex-col items-center justify-start p-[5px] w-full">
                              <Text
                                className="text-blue_gray-900_03 text-center text-sm"
                                size="txtRobotoRegular14Bluegray90003"
                              >
                                <span className="text-blue_gray-900_03 font-roboto font-normal">
                                  Escorts{" "}
                                </span>
                                <span className="text-blue_gray-900_03 font-roboto font-bold">
                                  Istanbul
                                </span>
                              </Text>
                            </div>
                          </div>
                          <Img
                            className="absolute h-[52px] object-cover right-[0] top-[0] w-[53px]"
                            src="images/img_after.png"
                            alt="after"
                          />
                        </div>
                        <div className="md:h-[332px] h-[338px] sm:ml-[0] relative w-full">
                          <div className="absolute bg-white-A700 flex flex-col h-max inset-[0] items-center justify-center m-auto shadow-bs8 w-[98%]">
                            <div className="border border-gray-300 border-solid flex flex-col items-center justify-end p-[3px] w-full">
                              <Text
                                className="mt-0.5 text-center text-gray-900 text-sm"
                                size="txtRobotoBold14"
                              >
                                Lorena
                              </Text>
                            </div>
                            <div className="h-[280px] relative w-full">
                              <div className="absolute h-[280px] inset-[0] justify-center m-auto w-full">
                                <Img
                                  className="h-[280px] m-auto object-cover w-full"
                                  src="images/img_1699674563528727avif.png"
                                  alt="169967456352872"
                                />
                                <div className="absolute flex flex-col left-[0] top-[0] w-[22%]">
                                  <div className="flex flex-col mx-auto w-full">
                                    <div className="bg-gradient13  flex flex-col h-10 items-center justify-center mx-auto p-[5px] rounded-[50%] w-10">
                                      <Text
                                        className="mt-[5px] text-[8px] text-center text-white-A700 uppercase"
                                        size="txtRobotoBlack8"
                                      >
                                        Indepe
                                      </Text>
                                      <Text
                                        className="mb-0.5 text-[8px] text-center text-white-A700 uppercase"
                                        size="txtRobotoBlack8"
                                      >
                                        ndent
                                      </Text>
                                    </div>
                                    <Text
                                      className="bg-gradient14  flex h-10 items-center justify-center mt-[-10px] mx-auto rounded-[50%] text-[9px] text-center text-white-A700 uppercase w-10 z-[1]"
                                      size="txtRobotoBlack9"
                                    >
                                      Video
                                    </Text>
                                  </div>
                                  <Text
                                    className="bg-gradient16  flex h-10 items-center justify-center mt-[-10px] mx-auto rounded-[50%] text-[8px] text-center text-white-A700 uppercase w-10 z-[1]"
                                    size="txtRobotoBlack8"
                                  >
                                    Review
                                  </Text>
                                </div>
                              </div>
                              <div className="absolute bg-gradient15  bottom-[0] flex flex-col h-[54px] items-start justify-end left-[0] pr-3.5 pt-3.5 rotate-[-45deg] w-[54px]">
                                <Text
                                  className="h-[39px] text-[10px] text-center text-white-A700 uppercase w-[39px]"
                                  size="txtRobotoBlack10"
                                >
                                  Verified
                                </Text>
                              </div>
                            </div>
                            <div className="border border-gray-300 border-solid flex flex-col items-center justify-start p-[5px] w-full">
                              <Text
                                className="text-blue_gray-900_03 text-center text-sm"
                                size="txtRobotoRegular14Bluegray90003"
                              >
                                <span className="text-blue_gray-900_03 font-roboto font-normal">
                                  Escorts{" "}
                                </span>
                                <span className="text-blue_gray-900_03 font-roboto font-bold">
                                  Dubai
                                </span>
                              </Text>
                            </div>
                          </div>
                          <Img
                            className="absolute h-[52px] object-cover right-[0] top-[0] w-[53px]"
                            src="images/img_after.png"
                            alt="after"
                          />
                        </div>
                        <div className="md:h-[332px] h-[338px] sm:ml-[0] relative w-full">
                          <div className="absolute bg-white-A700 flex flex-col h-max inset-[0] items-center justify-center m-auto shadow-bs8 w-[98%]">
                            <div className="border border-gray-300 border-solid flex flex-col items-center justify-end p-[3px] w-full">
                              <Text
                                className="mt-0.5 text-center text-gray-900 text-sm"
                                size="txtRobotoBold14"
                              >
                                Anna
                              </Text>
                            </div>
                            <div className="flex flex-col items-center justify-start w-full">
                              <div className="h-[280px] relative w-full">
                                <Img
                                  className="h-[280px] m-auto object-cover w-full"
                                  src="images/img_1700700106840243avif.png"
                                  alt="170070010684024"
                                />
                                <div className="absolute flex flex-col left-[0] top-[0] w-[22%]">
                                  <div className="flex flex-col mx-auto w-full">
                                    <div className="flex flex-col mx-auto w-full">
                                      <Text
                                        className="bg-gradient1  flex h-10 items-center justify-center mx-auto rounded-[50%] text-[13px] text-center text-white-A700 uppercase w-10"
                                        size="txtRobotoBlack13"
                                      >
                                        NEW
                                      </Text>
                                      <div className="bg-gradient17  flex flex-col h-10 items-center justify-start mt-[-10px] mx-auto p-[3px] rounded-[50%] w-10 z-[1]">
                                        <Text
                                          className="leading-[9.00px] mb-1 mt-2 text-[9px] text-center text-white-A700 uppercase"
                                          size="txtRobotoBlack9"
                                        >
                                          <>
                                            Unveri
                                            <br />
                                            fied
                                          </>
                                        </Text>
                                      </div>
                                    </div>
                                    <div className="bg-gradient13  flex flex-col h-10 items-center justify-center mt-[-10px] mx-auto p-[5px] rounded-[50%] w-10 z-[1]">
                                      <Text
                                        className="mt-[5px] text-[8px] text-center text-white-A700 uppercase"
                                        size="txtRobotoBlack8"
                                      >
                                        Indepe
                                      </Text>
                                      <Text
                                        className="mb-0.5 text-[8px] text-center text-white-A700 uppercase"
                                        size="txtRobotoBlack8"
                                      >
                                        ndent
                                      </Text>
                                    </div>
                                  </div>
                                  <Text
                                    className="bg-gradient14  flex h-10 items-center justify-center mt-[-10px] mx-auto rounded-[50%] text-[9px] text-center text-white-A700 uppercase w-10 z-[1]"
                                    size="txtRobotoBlack9"
                                  >
                                    Video
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <div className="border border-gray-300 border-solid flex flex-col items-center justify-start p-[5px] w-full">
                              <Text
                                className="text-blue_gray-900_03 text-center text-sm"
                                size="txtRobotoRegular14Bluegray90003"
                              >
                                <span className="text-blue_gray-900_03 font-roboto font-normal">
                                  Escorts{" "}
                                </span>
                                <span className="text-blue_gray-900_03 font-roboto font-bold">
                                  Vienna
                                </span>
                              </Text>
                            </div>
                          </div>
                          <Img
                            className="absolute h-[52px] object-cover right-[0] top-[0] w-[53px]"
                            src="images/img_after.png"
                            alt="after"
                          />
                        </div>
                        <div className="md:h-[330px] h-[338px] sm:ml-[0] relative w-full">
                          <div className="absolute bg-white-A700 flex flex-col h-max inset-[0] items-center justify-center m-auto shadow-bs8 w-[98%]">
                            <div className="border border-gray-300 border-solid flex flex-col items-center justify-end p-[3px] w-full">
                              <Text
                                className="text-center text-gray-900 text-sm"
                                size="txtRobotoBold14"
                              >
                                Maria
                              </Text>
                            </div>
                            <div className="h-[280px] relative w-full">
                              <div className="absolute h-[280px] inset-[0] justify-center m-auto w-full">
                                <Img
                                  className="h-[280px] m-auto object-cover w-full"
                                  src="images/img_1681858028846909avif.png"
                                  alt="168185802884690"
                                />
                                <div className="absolute flex flex-col left-[0] top-[0] w-[22%]">
                                  <div className="flex flex-col mx-auto w-full">
                                    <div className="bg-gradient13  flex flex-col h-10 items-center justify-center mx-auto p-[5px] rounded-[50%] w-10">
                                      <Text
                                        className="mt-[5px] text-[8px] text-center text-white-A700 uppercase"
                                        size="txtRobotoBlack8"
                                      >
                                        Indepe
                                      </Text>
                                      <Text
                                        className="mb-0.5 text-[8px] text-center text-white-A700 uppercase"
                                        size="txtRobotoBlack8"
                                      >
                                        ndent
                                      </Text>
                                    </div>
                                    <Text
                                      className="bg-gradient14  flex h-10 items-center justify-center mt-[-10px] mx-auto rounded-[50%] text-[9px] text-center text-white-A700 uppercase w-10 z-[1]"
                                      size="txtRobotoBlack9"
                                    >
                                      Video
                                    </Text>
                                  </div>
                                  <Text
                                    className="bg-gradient16  flex h-10 items-center justify-center mt-[-10px] mx-auto rounded-[50%] text-[8px] text-center text-white-A700 uppercase w-10 z-[1]"
                                    size="txtRobotoBlack8"
                                  >
                                    Review
                                  </Text>
                                </div>
                              </div>
                              <div className="absolute bg-gradient15  bottom-[0] flex flex-col h-[54px] items-start justify-end left-[0] pr-3.5 pt-3.5 rotate-[-45deg] w-[54px]">
                                <Text
                                  className="h-[39px] text-[10px] text-center text-white-A700 uppercase w-[39px]"
                                  size="txtRobotoBlack10"
                                >
                                  Verified
                                </Text>
                              </div>
                            </div>
                            <div className="border border-gray-300 border-solid flex flex-col items-center justify-start p-[5px] w-full">
                              <Text
                                className="text-blue_gray-900_03 text-center text-sm"
                                size="txtRobotoRegular14Bluegray90003"
                              >
                                <span className="text-blue_gray-900_03 font-roboto font-normal">
                                  Escorts{" "}
                                </span>
                                <span className="text-blue_gray-900_03 font-roboto font-bold">
                                  Brussels
                                </span>
                              </Text>
                            </div>
                          </div>
                          <Img
                            className="absolute h-[52px] object-cover right-[0] top-[0] w-[53px]"
                            src="images/img_after.png"
                            alt="after"
                          />
                        </div>
                      </List>
                      <div className="flex md:flex-col flex-row gap-[15px] items-center justify-between w-full">
                        <List
                          className="md:flex-1 sm:flex-col flex-row gap-[15px] grid sm:grid-cols-1 grid-cols-2 w-2/5 md:w-full"
                          orientation="horizontal"
                        >
                          <div className="md:h-[331px] h-[338px] sm:ml-[0] relative w-full">
                            <div className="absolute bg-white-A700 flex flex-col h-max inset-[0] items-center justify-center m-auto pb-7 shadow-bs8 w-[98%]">
                              <div className="border border-gray-300 border-solid flex flex-col items-center justify-end p-[3px] w-full">
                                <Text
                                  className="text-center text-gray-900 text-sm"
                                  size="txtRobotoBold14"
                                >
                                  Melanie
                                </Text>
                              </div>
                              <div className="flex flex-col items-center justify-start w-full">
                                <div className="h-[280px] relative w-full">
                                  <Img
                                    className="h-[280px] m-auto object-cover w-full"
                                    src="images/img_1684258289669267avif.png"
                                    alt="168425828966926"
                                  />
                                  <div className="absolute flex flex-col left-[0] top-[0] w-[22%]">
                                    <div className="flex flex-col mx-auto w-full">
                                      <div className="flex flex-col mx-auto w-full">
                                        <div className="bg-gradient17  flex flex-col h-10 items-center justify-start mx-auto p-[3px] rounded-[50%] w-10">
                                          <Text
                                            className="leading-[9.00px] mb-1 mt-2 text-[9px] text-center text-white-A700 uppercase"
                                            size="txtRobotoBlack9"
                                          >
                                            <>
                                              Unveri
                                              <br />
                                              fied
                                            </>
                                          </Text>
                                        </div>
                                        <div className="bg-gradient13  flex flex-col h-10 items-center justify-center mt-[-10px] mx-auto p-[5px] rounded-[50%] w-10 z-[1]">
                                          <Text
                                            className="mt-[5px] text-[8px] text-center text-white-A700 uppercase"
                                            size="txtRobotoBlack8"
                                          >
                                            Indepe
                                          </Text>
                                          <Text
                                            className="mb-0.5 text-[8px] text-center text-white-A700 uppercase"
                                            size="txtRobotoBlack8"
                                          >
                                            ndent
                                          </Text>
                                        </div>
                                      </div>
                                      <Text
                                        className="bg-gradient14  flex h-10 items-center justify-center mt-[-10px] mx-auto rounded-[50%] text-[9px] text-center text-white-A700 uppercase w-10 z-[1]"
                                        size="txtRobotoBlack9"
                                      >
                                        Video
                                      </Text>
                                    </div>
                                    <Text
                                      className="bg-gradient16  flex h-10 items-center justify-center mt-[-10px] mx-auto rounded-[50%] text-[8px] text-center text-white-A700 uppercase w-10 z-[1]"
                                      size="txtRobotoBlack8"
                                    >
                                      Review
                                    </Text>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <Text
                              className="absolute border border-gray-300 border-solid bottom-[0] inset-x-[0] mx-auto sm:px-5 px-[35px] py-[5px] text-blue_gray-900_03 text-center text-sm w-max"
                              size="txtRobotoRegular14Bluegray90003"
                            >
                              <span className="text-blue_gray-900_03 font-roboto font-normal">
                                Escorts{" "}
                              </span>
                              <span className="text-blue_gray-900_03 font-roboto font-bold">
                                Dublin
                              </span>
                            </Text>
                            <Img
                              className="absolute h-[52px] object-cover right-[0] top-[0] w-[53px]"
                              src="images/img_after.png"
                              alt="after"
                            />
                          </div>
                          <div className="md:h-[331px] h-[338px] sm:ml-[0] relative w-full">
                            <div className="absolute bg-white-A700 flex flex-col h-max inset-[0] items-center justify-center m-auto pb-7 shadow-bs8 w-[98%]">
                              <div className="border border-gray-300 border-solid flex flex-col items-center justify-end p-[3px] w-full">
                                <Text
                                  className="text-center text-gray-900 text-sm"
                                  size="txtRobotoBold14"
                                >
                                  Luisa
                                </Text>
                              </div>
                              <div className="h-[280px] relative w-full">
                                <div className="absolute h-[280px] inset-[0] justify-center m-auto w-full">
                                  <Img
                                    className="h-[280px] m-auto object-cover w-full"
                                    src="images/img_1700147036115529avif.png"
                                    alt="170014703611552"
                                  />
                                  <div className="absolute flex flex-col left-[0] top-[0] w-[22%]">
                                    <Text
                                      className="bg-gradient1  flex h-10 items-center justify-center mx-auto rounded-[50%] text-[13px] text-center text-white-A700 uppercase w-10"
                                      size="txtRobotoBlack13"
                                    >
                                      NEW
                                    </Text>
                                    <div className="bg-gradient13  flex flex-col h-10 items-center justify-center mt-[-10px] mx-auto p-[5px] rounded-[50%] w-10 z-[1]">
                                      <Text
                                        className="mt-[5px] text-[8px] text-center text-white-A700 uppercase"
                                        size="txtRobotoBlack8"
                                      >
                                        Indepe
                                      </Text>
                                      <Text
                                        className="mb-0.5 text-[8px] text-center text-white-A700 uppercase"
                                        size="txtRobotoBlack8"
                                      >
                                        ndent
                                      </Text>
                                    </div>
                                  </div>
                                </div>
                                <div className="absolute bg-gradient15  bottom-[0] flex flex-col h-[54px] items-start justify-end left-[0] pr-3.5 pt-3.5 rotate-[-45deg] w-[54px]">
                                  <Text
                                    className="h-[39px] text-[10px] text-center text-white-A700 uppercase w-[39px]"
                                    size="txtRobotoBlack10"
                                  >
                                    Verified
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <Text
                              className="absolute border border-gray-300 border-solid bottom-[0] inset-x-[0] mx-auto sm:px-5 px-[35px] py-[5px] text-blue_gray-900_03 text-center text-sm w-max"
                              size="txtRobotoRegular14Bluegray90003"
                            >
                              <span className="text-blue_gray-900_03 font-roboto font-normal">
                                Escorts{" "}
                              </span>
                              <span className="text-blue_gray-900_03 font-roboto font-bold">
                                Madrid
                              </span>
                            </Text>
                            <Img
                              className="absolute h-[52px] object-cover right-[0] top-[0] w-[53px]"
                              src="images/img_after.png"
                              alt="after"
                            />
                          </div>
                        </List>
                        <List
                          className="md:flex-1 sm:flex-col flex-row gap-[15px] grid sm:grid-cols-1 grid-cols-3 w-3/5 md:w-full"
                          orientation="horizontal"
                        >
                          <div className="md:h-[330px] h-[338px] sm:ml-[0] relative w-full">
                            <div className="absolute bg-white-A700 flex flex-col h-max inset-[0] items-center justify-center m-auto pb-7 shadow-bs8 w-[98%]">
                              <div className="border border-gray-300 border-solid flex flex-col items-center justify-end w-full">
                                <Text
                                  className="mt-[5px] text-center text-gray-900 text-sm"
                                  size="txtRobotoBold14"
                                >
                                  Maya
                                </Text>
                              </div>
                              <div className="h-[280px] relative w-full">
                                <div className="absolute h-[280px] inset-[0] justify-center m-auto w-full">
                                  <Img
                                    className="h-[280px] m-auto object-cover w-full"
                                    src="images/img_1690999279415188avif.png"
                                    alt="169099927941518"
                                  />
                                  <div className="absolute bg-gradient13  flex flex-col h-10 items-center justify-center left-[0] p-[5px] rounded-[50%] top-[0] w-10">
                                    <Text
                                      className="mt-[5px] text-[8px] text-center text-white-A700 uppercase"
                                      size="txtRobotoBlack8"
                                    >
                                      Indepe
                                    </Text>
                                    <Text
                                      className="mb-0.5 text-[8px] text-center text-white-A700 uppercase"
                                      size="txtRobotoBlack8"
                                    >
                                      ndent
                                    </Text>
                                  </div>
                                </div>
                                <div className="absolute bg-gradient15  bottom-[0] flex flex-col h-[54px] items-start justify-end left-[0] pr-3.5 pt-3.5 rotate-[-45deg] w-[54px]">
                                  <Text
                                    className="h-[39px] text-[10px] text-center text-white-A700 uppercase w-[39px]"
                                    size="txtRobotoBlack10"
                                  >
                                    Verified
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <Text
                              className="absolute border border-gray-300 border-solid bottom-[0] inset-x-[0] mx-auto sm:px-5 px-[35px] py-[5px] text-blue_gray-900_03 text-center text-sm w-max"
                              size="txtRobotoRegular14Bluegray90003"
                            >
                              <span className="text-blue_gray-900_03 font-roboto font-normal">
                                Escorts{" "}
                              </span>
                              <span className="text-blue_gray-900_03 font-roboto font-bold">
                                Florence
                              </span>
                            </Text>
                            <Img
                              className="absolute h-[52px] object-cover right-[0] top-[0] w-[53px]"
                              src="images/img_after.png"
                              alt="after"
                            />
                          </div>
                          <div className="md:h-[331px] h-[338px] sm:ml-[0] relative w-full">
                            <div className="absolute bg-white-A700 flex flex-col h-max inset-[0] items-center justify-center m-auto pb-7 shadow-bs8 w-[98%]">
                              <div className="border border-gray-300 border-solid flex flex-col items-center justify-end p-[3px] w-full">
                                <Text
                                  className="text-center text-gray-900 text-sm"
                                  size="txtRobotoBold14"
                                >
                                  Lisa Rus
                                </Text>
                              </div>
                              <div className="flex flex-col items-center justify-start w-full">
                                <div className="h-[280px] relative w-full">
                                  <Img
                                    className="h-[280px] m-auto object-cover w-full"
                                    src="images/img_1699879664404929avif.png"
                                    alt="169987966440492"
                                  />
                                  <div className="absolute flex flex-col left-[0] top-[0] w-[22%]">
                                    <div className="flex flex-col mx-auto w-full">
                                      <div className="bg-gradient17  flex flex-col h-10 items-center justify-start mx-auto p-[3px] rounded-[50%] w-10">
                                        <Text
                                          className="leading-[9.00px] mb-1 mt-2 text-[9px] text-center text-white-A700 uppercase"
                                          size="txtRobotoBlack9"
                                        >
                                          <>
                                            Unveri
                                            <br />
                                            fied
                                          </>
                                        </Text>
                                      </div>
                                      <div className="bg-gradient13  flex flex-col h-10 items-center justify-center mt-[-10px] mx-auto p-[5px] rounded-[50%] w-10 z-[1]">
                                        <Text
                                          className="mt-[5px] text-[8px] text-center text-white-A700 uppercase"
                                          size="txtRobotoBlack8"
                                        >
                                          Indepe
                                        </Text>
                                        <Text
                                          className="mb-0.5 text-[8px] text-center text-white-A700 uppercase"
                                          size="txtRobotoBlack8"
                                        >
                                          ndent
                                        </Text>
                                      </div>
                                    </div>
                                    <Text
                                      className="bg-gradient14  flex h-10 items-center justify-center mt-[-10px] mx-auto rounded-[50%] text-[9px] text-center text-white-A700 uppercase w-10 z-[1]"
                                      size="txtRobotoBlack9"
                                    >
                                      Video
                                    </Text>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <Text
                              className="absolute border border-gray-300 border-solid bottom-[0] inset-x-[0] mx-auto sm:px-5 px-[35px] py-[5px] text-blue_gray-900_03 text-center text-sm w-max"
                              size="txtRobotoRegular14Bluegray90003"
                            >
                              <span className="text-blue_gray-900_03 font-roboto font-normal">
                                Escorts{" "}
                              </span>
                              <span className="text-blue_gray-900_03 font-roboto font-bold">
                                Kuala..
                              </span>
                            </Text>
                            <Img
                              className="absolute h-[52px] object-cover right-[0] top-[0] w-[53px]"
                              src="images/img_after.png"
                              alt="after"
                            />
                          </div>
                          <div className="md:h-[331px] h-[338px] sm:ml-[0] relative w-full">
                            <div className="absolute bg-white-A700 flex flex-col h-max inset-[0] items-center justify-center m-auto pb-7 shadow-bs8 w-[98%]">
                              <div className="border border-gray-300 border-solid flex flex-col items-center justify-end p-[3px] w-full">
                                <Text
                                  className="text-center text-gray-900 text-sm"
                                  size="txtRobotoBold14"
                                >
                                  Melina
                                </Text>
                              </div>
                              <div className="h-[280px] relative w-full">
                                <div className="absolute h-[280px] inset-[0] justify-center m-auto w-full">
                                  <Img
                                    className="h-[280px] m-auto object-cover w-full"
                                    src="images/img_1699904173980222avif.png"
                                    alt="169990417398022"
                                  />
                                  <div className="absolute flex flex-col left-[0] top-[0] w-[22%]">
                                    <Text
                                      className="bg-gradient1  flex h-10 items-center justify-center mx-auto rounded-[50%] text-[13px] text-center text-white-A700 uppercase w-10"
                                      size="txtRobotoBlack13"
                                    >
                                      NEW
                                    </Text>
                                    <div className="bg-gradient13  flex flex-col h-10 items-center justify-center mt-[-10px] mx-auto p-[5px] rounded-[50%] w-10 z-[1]">
                                      <Text
                                        className="mt-[5px] text-[8px] text-center text-white-A700 uppercase"
                                        size="txtRobotoBlack8"
                                      >
                                        Indepe
                                      </Text>
                                      <Text
                                        className="mb-0.5 text-[8px] text-center text-white-A700 uppercase"
                                        size="txtRobotoBlack8"
                                      >
                                        ndent
                                      </Text>
                                    </div>
                                  </div>
                                </div>
                                <div className="absolute bg-gradient15  bottom-[0] flex flex-col h-[54px] items-start justify-end left-[0] pr-3.5 pt-3.5 rotate-[-45deg] w-[54px]">
                                  <Text
                                    className="h-[39px] text-[10px] text-center text-white-A700 uppercase w-[39px]"
                                    size="txtRobotoBlack10"
                                  >
                                    Verified
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <Text
                              className="absolute border border-gray-300 border-solid bottom-[0] inset-x-[0] mx-auto sm:px-5 px-[35px] py-[5px] text-blue_gray-900_03 text-center text-sm w-max"
                              size="txtRobotoRegular14Bluegray90003"
                            >
                              <span className="text-blue_gray-900_03 font-roboto font-normal">
                                Escorts{" "}
                              </span>
                              <span className="text-blue_gray-900_03 font-roboto font-bold">
                                London
                              </span>
                            </Text>
                            <Img
                              className="absolute h-[52px] object-cover right-[0] top-[0] w-[53px]"
                              src="images/img_after.png"
                              alt="after"
                            />
                          </div>
                        </List>
                      </div>
                      <div className="md:gap-5 gap-[15px] grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 justify-center min-h-[auto] w-full">
                        <div className="md:h-[331px] h-[338px] relative w-full">
                          <div className="absolute bg-white-A700 flex flex-col h-max inset-[0] items-center justify-center m-auto pb-7 shadow-bs8 w-[98%]">
                            <div className="border border-gray-300 border-solid flex flex-col items-center justify-end p-[3px] w-full">
                              <Text
                                className="text-center text-gray-900 text-sm"
                                size="txtRobotoBold14"
                              >
                                Amina
                              </Text>
                            </div>
                            <div className="flex flex-col items-center justify-start w-full">
                              <div className="h-[280px] relative w-full">
                                <Img
                                  className="h-[280px] m-auto object-cover w-full"
                                  src="images/img_1695637907296913avif.png"
                                  alt="169563790729691"
                                />
                                <div className="absolute flex flex-col left-[0] top-[0] w-[22%]">
                                  <div className="bg-gradient17  flex flex-col h-10 items-center justify-start mx-auto p-[3px] rounded-[50%] w-10">
                                    <Text
                                      className="leading-[9.00px] mb-1 mt-2 text-[9px] text-center text-white-A700 uppercase"
                                      size="txtRobotoBlack9"
                                    >
                                      <>
                                        Unveri
                                        <br />
                                        fied
                                      </>
                                    </Text>
                                  </div>
                                  <div className="bg-gradient13  flex flex-col h-10 items-center justify-center mt-[-10px] mx-auto p-[5px] rounded-[50%] w-10 z-[1]">
                                    <Text
                                      className="mt-[5px] text-[8px] text-center text-white-A700 uppercase"
                                      size="txtRobotoBlack8"
                                    >
                                      Indepe
                                    </Text>
                                    <Text
                                      className="mb-0.5 text-[8px] text-center text-white-A700 uppercase"
                                      size="txtRobotoBlack8"
                                    >
                                      ndent
                                    </Text>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <Text
                            className="absolute border border-gray-300 border-solid bottom-[0] inset-x-[0] mx-auto sm:px-5 px-[35px] py-[5px] text-blue_gray-900_03 text-center text-sm w-max"
                            size="txtRobotoRegular14Bluegray90003"
                          >
                            <span className="text-blue_gray-900_03 font-roboto font-normal">
                              Escorts{" "}
                            </span>
                            <span className="text-blue_gray-900_03 font-roboto font-bold">
                              Ghubra
                            </span>
                          </Text>
                          <Img
                            className="absolute h-[52px] object-cover right-[0] top-[0] w-[53px]"
                            src="images/img_after.png"
                            alt="after"
                          />
                        </div>
                        <div className="md:h-[333px] h-[338px] relative w-full">
                          <div className="absolute bg-white-A700 flex flex-col h-max inset-[0] items-center justify-center m-auto pb-7 shadow-bs8 w-[98%]">
                            <div className="border border-gray-300 border-solid flex flex-col items-center justify-end p-0.5 w-full">
                              <Text
                                className="mt-1 text-center text-gray-900 text-sm"
                                size="txtRobotoBold14"
                              >
                                Sophia
                              </Text>
                            </div>
                            <div className="flex flex-col items-center justify-start w-full">
                              <div className="h-[280px] relative w-full">
                                <Img
                                  className="h-[280px] m-auto object-cover w-full"
                                  src="images/img_1700564975977328avif.png"
                                  alt="170056497597732"
                                />
                                <div className="absolute bg-gradient13  flex flex-col h-10 items-center justify-center left-[0] p-[5px] rounded-[50%] top-[0] w-10">
                                  <Text
                                    className="mt-[5px] text-[8px] text-center text-white-A700 uppercase"
                                    size="txtRobotoBlack8"
                                  >
                                    Indepe
                                  </Text>
                                  <Text
                                    className="mb-0.5 text-[8px] text-center text-white-A700 uppercase"
                                    size="txtRobotoBlack8"
                                  >
                                    ndent
                                  </Text>
                                </div>
                                <div className="absolute bg-gradient15  bottom-[0] flex flex-col h-[54px] items-start justify-end left-[0] pr-3.5 pt-3.5 rotate-[-45deg] w-[54px]">
                                  <Text
                                    className="h-[39px] text-[10px] text-center text-white-A700 uppercase w-[39px]"
                                    size="txtRobotoBlack10"
                                  >
                                    Verified
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                          <Text
                            className="absolute border border-gray-300 border-solid bottom-[0] inset-x-[0] mx-auto sm:px-5 px-[35px] py-[5px] text-blue_gray-900_03 text-center text-sm w-max"
                            size="txtRobotoRegular14Bluegray90003"
                          >
                            <span className="text-blue_gray-900_03 font-roboto font-normal">
                              Escorts{" "}
                            </span>
                            <span className="text-blue_gray-900_03 font-roboto font-bold">
                              London
                            </span>
                          </Text>
                          <Img
                            className="absolute h-[52px] object-cover right-[0] top-[0] w-[53px]"
                            src="images/img_after.png"
                            alt="after"
                          />
                        </div>
                        <div className="md:h-[331px] h-[338px] relative w-full">
                          <div className="absolute bg-white-A700 flex flex-col h-max inset-[0] items-center justify-center m-auto pb-7 shadow-bs8 w-[98%]">
                            <div className="border border-gray-300 border-solid flex flex-col items-center justify-end p-[3px] w-full">
                              <Text
                                className="text-center text-gray-900 text-sm"
                                size="txtRobotoBold14"
                              >
                                Alisa
                              </Text>
                            </div>
                            <div className="flex flex-col items-center justify-start w-full">
                              <div className="h-[280px] relative w-full">
                                <Img
                                  className="h-[280px] m-auto object-cover w-full"
                                  src="images/img_1697544635519765avif.png"
                                  alt="169754463551976"
                                />
                                <div className="absolute bg-gradient13  flex flex-col h-10 items-center justify-center left-[0] p-[5px] rounded-[50%] top-[0] w-10">
                                  <Text
                                    className="mt-[5px] text-[8px] text-center text-white-A700 uppercase"
                                    size="txtRobotoBlack8"
                                  >
                                    Indepe
                                  </Text>
                                  <Text
                                    className="mb-0.5 text-[8px] text-center text-white-A700 uppercase"
                                    size="txtRobotoBlack8"
                                  >
                                    ndent
                                  </Text>
                                </div>
                                <div className="absolute bg-gradient15  bottom-[0] flex flex-col h-[54px] items-start justify-end left-[0] pr-3.5 pt-3.5 rotate-[-45deg] w-[54px]">
                                  <Text
                                    className="h-[39px] text-[10px] text-center text-white-A700 uppercase w-[39px]"
                                    size="txtRobotoBlack10"
                                  >
                                    Verified
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                          <Text
                            className="absolute border border-gray-300 border-solid bottom-[0] inset-x-[0] mx-auto sm:px-5 px-[35px] py-[5px] text-blue_gray-900_03 text-center text-sm w-max"
                            size="txtRobotoRegular14Bluegray90003"
                          >
                            <span className="text-blue_gray-900_03 font-roboto font-normal">
                              Escorts{" "}
                            </span>
                            <span className="text-blue_gray-900_03 font-roboto font-bold">
                              Protaras
                            </span>
                          </Text>
                          <Img
                            className="absolute h-[52px] object-cover right-[0] top-[0] w-[53px]"
                            src="images/img_after.png"
                            alt="after"
                          />
                        </div>
                        <div className="md:h-[331px] h-[338px] relative w-full">
                          <div className="absolute bg-white-A700 flex flex-col h-max inset-[0] items-center justify-center m-auto pb-7 shadow-bs8 w-[98%]">
                            <div className="border border-gray-300 border-solid flex flex-col items-center justify-end p-[3px] w-full">
                              <Text
                                className="text-center text-gray-900 text-sm"
                                size="txtRobotoBold14"
                              >
                                Alisa
                              </Text>
                            </div>
                            <div className="flex flex-col items-center justify-start w-full">
                              <div className="h-[280px] relative w-full">
                                <Img
                                  className="h-[280px] m-auto object-cover w-full"
                                  src="images/img_1687892448805968avif.png"
                                  alt="168789244880596"
                                />
                                <div className="absolute bg-gradient13  flex flex-col h-10 items-center justify-center left-[0] p-[5px] rounded-[50%] top-[0] w-10">
                                  <Text
                                    className="mt-[5px] text-[8px] text-center text-white-A700 uppercase"
                                    size="txtRobotoBlack8"
                                  >
                                    Indepe
                                  </Text>
                                  <Text
                                    className="mb-0.5 text-[8px] text-center text-white-A700 uppercase"
                                    size="txtRobotoBlack8"
                                  >
                                    ndent
                                  </Text>
                                </div>
                                <div className="absolute bg-gradient15  bottom-[0] flex flex-col h-[54px] items-start justify-end left-[0] pr-3.5 pt-3.5 rotate-[-45deg] w-[54px]">
                                  <Text
                                    className="h-[39px] text-[10px] text-center text-white-A700 uppercase w-[39px]"
                                    size="txtRobotoBlack10"
                                  >
                                    Verified
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                          <Text
                            className="absolute border border-gray-300 border-solid bottom-[0] inset-x-[0] mx-auto sm:px-5 px-[35px] py-[5px] text-blue_gray-900_03 text-center text-sm w-max"
                            size="txtRobotoRegular14Bluegray90003"
                          >
                            <span className="text-blue_gray-900_03 font-roboto font-normal">
                              Escorts{" "}
                            </span>
                            <span className="text-blue_gray-900_03 font-roboto font-bold">
                              Dubai
                            </span>
                          </Text>
                          <Img
                            className="absolute h-[52px] object-cover right-[0] top-[0] w-[53px]"
                            src="images/img_after.png"
                            alt="after"
                          />
                        </div>
                        <div className="md:h-[331px] h-[338px] relative w-full">
                          <div className="absolute bg-white-A700 flex flex-col h-max inset-[0] items-center justify-center m-auto pb-7 shadow-bs8 w-[98%]">
                            <div className="border border-gray-300 border-solid flex flex-col items-center justify-end p-[3px] w-full">
                              <Text
                                className="text-center text-gray-900 text-sm"
                                size="txtRobotoBold14"
                              >
                                Miah
                              </Text>
                            </div>
                            <div className="flex flex-col items-center justify-start w-full">
                              <div className="h-[280px] relative w-full">
                                <Img
                                  className="h-[280px] m-auto object-cover w-full"
                                  src="images/img_1696347208447855avif.png"
                                  alt="169634720844785"
                                />
                                <div className="absolute bg-gradient15  bottom-[0] flex flex-col h-[54px] items-start justify-end left-[0] pr-3.5 pt-3.5 rotate-[-45deg] w-[54px]">
                                  <Text
                                    className="h-[39px] text-[10px] text-center text-white-A700 uppercase w-[39px]"
                                    size="txtRobotoBlack10"
                                  >
                                    Verified
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                          <Input
                            name="divinfo"
                            placeholder="Escorts Palma de.."
                            className="leading-[normal] p-0 placeholder:text-blue_gray-900_03 text-center text-sm w-full"
                            wrapClassName="absolute bottom-[0] inset-x-[0] mx-auto w-[98%]"
                            shape="square"
                            color="gray_300"
                            size="xs"
                            variant="outline"
                          ></Input>
                          <Img
                            className="absolute h-[52px] object-cover right-[0] top-[0] w-[53px]"
                            src="images/img_after.png"
                            alt="after"
                          />
                        </div>
                        <div className="md:h-[330px] h-[338px] relative w-full">
                          <div className="absolute bg-white-A700 flex flex-col h-max inset-[0] items-center justify-center m-auto pb-7 shadow-bs8 w-[98%]">
                            <div className="border border-gray-300 border-solid flex flex-col items-center justify-end w-full">
                              <Text
                                className="mt-[5px] text-center text-gray-900 text-sm"
                                size="txtRobotoBold14"
                              >
                                Lesya
                              </Text>
                            </div>
                            <div className="flex flex-col items-center justify-start w-full">
                              <div className="h-[280px] relative w-full">
                                <Img
                                  className="h-[280px] m-auto object-cover w-full"
                                  src="images/img_1677027580485340avif.png"
                                  alt="167702758048534"
                                />
                                <div className="absolute bg-gradient13  flex flex-col h-10 items-center justify-center left-[0] p-[5px] rounded-[50%] top-[0] w-10">
                                  <Text
                                    className="mt-[5px] text-[8px] text-center text-white-A700 uppercase"
                                    size="txtRobotoBlack8"
                                  >
                                    Indepe
                                  </Text>
                                  <Text
                                    className="mb-0.5 text-[8px] text-center text-white-A700 uppercase"
                                    size="txtRobotoBlack8"
                                  >
                                    ndent
                                  </Text>
                                </div>
                                <div className="absolute bg-gradient15  bottom-[0] flex flex-col h-[54px] items-start justify-end left-[0] pr-3.5 pt-3.5 rotate-[-45deg] w-[54px]">
                                  <Text
                                    className="h-[39px] text-[10px] text-center text-white-A700 uppercase w-[39px]"
                                    size="txtRobotoBlack10"
                                  >
                                    Verified
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                          <Text
                            className="absolute border border-gray-300 border-solid bottom-[0] inset-x-[0] mx-auto sm:px-5 px-[35px] py-[5px] text-blue_gray-900_03 text-center text-sm w-max"
                            size="txtRobotoRegular14Bluegray90003"
                          >
                            <span className="text-blue_gray-900_03 font-roboto font-normal">
                              Escorts{" "}
                            </span>
                            <span className="text-blue_gray-900_03 font-roboto font-bold">
                              Phuket
                            </span>
                          </Text>
                          <Img
                            className="absolute h-[52px] object-cover right-[0] top-[0] w-[53px]"
                            src="images/img_after.png"
                            alt="after"
                          />
                        </div>
                        <div className="md:h-[331px] h-[338px] relative w-full">
                          <div className="absolute bg-white-A700 flex flex-col h-max inset-[0] items-center justify-center m-auto pb-7 shadow-bs8 w-[98%]">
                            <div className="border border-gray-300 border-solid flex flex-col items-center justify-end p-[3px] w-full">
                              <Text
                                className="text-center text-gray-900 text-sm"
                                size="txtRobotoBold14"
                              >
                                Natalie
                              </Text>
                            </div>
                            <div className="flex flex-col items-center justify-start w-full">
                              <div className="h-[280px] relative w-full">
                                <Img
                                  className="h-[280px] m-auto object-cover w-full"
                                  src="images/img_1699885752179276avif.png"
                                  alt="169988575217927"
                                />
                                <div className="absolute flex flex-col left-[0] top-[0] w-[22%]">
                                  <Text
                                    className="bg-gradient1  flex h-10 items-center justify-center mx-auto rounded-[50%] text-[13px] text-center text-white-A700 uppercase w-10"
                                    size="txtRobotoBlack13"
                                  >
                                    NEW
                                  </Text>
                                  <div className="bg-gradient13  flex flex-col h-10 items-center justify-center mt-[-10px] mx-auto p-[5px] rounded-[50%] w-10 z-[1]">
                                    <Text
                                      className="mt-[5px] text-[8px] text-center text-white-A700 uppercase"
                                      size="txtRobotoBlack8"
                                    >
                                      Indepe
                                    </Text>
                                    <Text
                                      className="mb-0.5 text-[8px] text-center text-white-A700 uppercase"
                                      size="txtRobotoBlack8"
                                    >
                                      ndent
                                    </Text>
                                  </div>
                                </div>
                                <div className="absolute bg-gradient15  bottom-[0] flex flex-col h-[54px] items-start justify-end left-[0] pr-3.5 pt-3.5 rotate-[-45deg] w-[54px]">
                                  <Text
                                    className="h-[39px] text-[10px] text-center text-white-A700 uppercase w-[39px]"
                                    size="txtRobotoBlack10"
                                  >
                                    Verified
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                          <Text
                            className="absolute border border-gray-300 border-solid bottom-[0] inset-x-[0] mx-auto sm:px-5 px-[35px] py-[5px] text-blue_gray-900_03 text-center text-sm w-max"
                            size="txtRobotoRegular14Bluegray90003"
                          >
                            <span className="text-blue_gray-900_03 font-roboto font-normal">
                              Escorts{" "}
                            </span>
                            <span className="text-blue_gray-900_03 font-roboto font-bold">
                              Berlin
                            </span>
                          </Text>
                          <Img
                            className="absolute h-[52px] object-cover right-[0] top-[0] w-[53px]"
                            src="images/img_after.png"
                            alt="after"
                          />
                        </div>
                        <div className="md:h-[331px] h-[338px] relative w-full">
                          <div className="absolute bg-white-A700 flex flex-col h-max inset-[0] items-center justify-center m-auto pb-7 shadow-bs8 w-[98%]">
                            <div className="border border-gray-300 border-solid flex flex-col items-center justify-end p-[3px] w-full">
                              <Text
                                className="text-center text-gray-900 text-sm"
                                size="txtRobotoBold14"
                              >
                                Diana
                              </Text>
                            </div>
                            <div className="flex flex-col items-center justify-start w-full">
                              <div className="h-[280px] relative w-full">
                                <Img
                                  className="h-[280px] m-auto object-cover w-full"
                                  src="images/img_1700674342441199avif.png"
                                  alt="170067434244119"
                                />
                                <div className="absolute flex flex-col left-[0] top-[0] w-[22%]">
                                  <div className="flex flex-col mx-auto w-full">
                                    <div className="flex flex-col mx-auto w-full">
                                      <Text
                                        className="bg-gradient1  flex h-10 items-center justify-center mx-auto rounded-[50%] text-[13px] text-center text-white-A700 uppercase w-10"
                                        size="txtRobotoBlack13"
                                      >
                                        NEW
                                      </Text>
                                      <div className="bg-gradient17  flex flex-col h-10 items-center justify-start mt-[-10px] mx-auto p-[3px] rounded-[50%] w-10 z-[1]">
                                        <Text
                                          className="leading-[9.00px] mb-1 mt-2 text-[9px] text-center text-white-A700 uppercase"
                                          size="txtRobotoBlack9"
                                        >
                                          <>
                                            Unveri
                                            <br />
                                            fied
                                          </>
                                        </Text>
                                      </div>
                                    </div>
                                    <div className="bg-gradient13  flex flex-col h-10 items-center justify-center mt-[-10px] mx-auto p-[5px] rounded-[50%] w-10 z-[1]">
                                      <Text
                                        className="mt-[5px] text-[8px] text-center text-white-A700 uppercase"
                                        size="txtRobotoBlack8"
                                      >
                                        Indepe
                                      </Text>
                                      <Text
                                        className="mb-0.5 text-[8px] text-center text-white-A700 uppercase"
                                        size="txtRobotoBlack8"
                                      >
                                        ndent
                                      </Text>
                                    </div>
                                  </div>
                                  <Text
                                    className="bg-gradient16  flex h-10 items-center justify-center mt-[-10px] mx-auto rounded-[50%] text-[8px] text-center text-white-A700 uppercase w-10 z-[1]"
                                    size="txtRobotoBlack8"
                                  >
                                    Review
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                          <Text
                            className="absolute border border-gray-300 border-solid bottom-[0] inset-x-[0] mx-auto sm:px-5 px-[35px] py-[5px] text-blue_gray-900_03 text-center text-sm w-max"
                            size="txtRobotoRegular14Bluegray90003"
                          >
                            <span className="text-blue_gray-900_03 font-roboto font-normal">
                              Escorts{" "}
                            </span>
                            <span className="text-blue_gray-900_03 font-roboto font-bold">
                              Skopje
                            </span>
                          </Text>
                          <Img
                            className="absolute h-[52px] object-cover right-[0] top-[0] w-[53px]"
                            src="images/img_after.png"
                            alt="after"
                          />
                        </div>
                        <div className="md:h-[333px] h-[338px] relative w-full">
                          <div className="absolute bg-white-A700 flex flex-col h-max inset-[0] items-center justify-center m-auto pb-7 shadow-bs8 w-[98%]">
                            <div className="border border-gray-300 border-solid flex flex-col items-center justify-end p-0.5 w-full">
                              <Text
                                className="mt-1 text-center text-gray-900 text-sm"
                                size="txtRobotoBold14"
                              >
                                Angel
                              </Text>
                            </div>
                            <div className="flex flex-col items-center justify-start w-full">
                              <div className="h-[280px] relative w-full">
                                <Img
                                  className="h-[280px] m-auto object-cover w-full"
                                  src="images/img_1666830494766577avif.png"
                                  alt="166683049476657"
                                />
                                <div className="absolute bg-gradient13  flex flex-col h-10 items-center justify-center left-[0] p-[5px] rounded-[50%] top-[0] w-10">
                                  <Text
                                    className="mt-[5px] text-[8px] text-center text-white-A700 uppercase"
                                    size="txtRobotoBlack8"
                                  >
                                    Indepe
                                  </Text>
                                  <Text
                                    className="mb-0.5 text-[8px] text-center text-white-A700 uppercase"
                                    size="txtRobotoBlack8"
                                  >
                                    ndent
                                  </Text>
                                </div>
                                <div className="absolute bg-gradient15  bottom-[0] flex flex-col h-[54px] items-start justify-end left-[0] pr-3.5 pt-3.5 rotate-[-45deg] w-[54px]">
                                  <Text
                                    className="h-[39px] text-[10px] text-center text-white-A700 uppercase w-[39px]"
                                    size="txtRobotoBlack10"
                                  >
                                    Verified
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                          <Text
                            className="absolute border border-gray-300 border-solid bottom-[0] inset-x-[0] mx-auto sm:px-5 px-[35px] py-[5px] text-blue_gray-900_03 text-center text-sm w-max"
                            size="txtRobotoRegular14Bluegray90003"
                          >
                            <span className="text-blue_gray-900_03 font-roboto font-normal">
                              Escorts{" "}
                            </span>
                            <span className="text-blue_gray-900_03 font-roboto font-bold">
                              Ljubljana
                            </span>
                          </Text>
                          <Img
                            className="absolute h-[52px] object-cover right-[0] top-[0] w-[53px]"
                            src="images/img_after.png"
                            alt="after"
                          />
                        </div>
                        <div className="md:h-[331px] h-[338px] relative w-full">
                          <div className="absolute bg-white-A700 flex flex-col h-max inset-[0] items-center justify-center m-auto pb-7 shadow-bs8 w-[98%]">
                            <div className="border border-gray-300 border-solid flex flex-col items-center justify-end p-[3px] w-full">
                              <Text
                                className="text-center text-gray-900 text-sm"
                                size="txtRobotoBold14"
                              >
                                Tania
                              </Text>
                            </div>
                            <div className="flex flex-col items-center justify-start w-full">
                              <div className="h-[280px] relative w-full">
                                <Img
                                  className="h-[280px] m-auto object-cover w-full"
                                  src="images/img_1689871762899746avif.png"
                                  alt="168987176289974"
                                />
                                <div className="absolute flex flex-col left-[0] top-[0] w-[22%]">
                                  <div className="bg-gradient13  flex flex-col h-10 items-center justify-center mx-auto p-[5px] rounded-[50%] w-10">
                                    <Text
                                      className="mt-[5px] text-[8px] text-center text-white-A700 uppercase"
                                      size="txtRobotoBlack8"
                                    >
                                      Indepe
                                    </Text>
                                    <Text
                                      className="mb-0.5 text-[8px] text-center text-white-A700 uppercase"
                                      size="txtRobotoBlack8"
                                    >
                                      ndent
                                    </Text>
                                  </div>
                                  <Text
                                    className="bg-gradient14  flex h-10 items-center justify-center mt-[-10px] mx-auto rounded-[50%] text-[9px] text-center text-white-A700 uppercase w-10 z-[1]"
                                    size="txtRobotoBlack9"
                                  >
                                    Video
                                  </Text>
                                </div>
                                <div className="absolute bg-gradient15  bottom-[0] flex flex-col h-[54px] items-start justify-end left-[0] pr-3.5 pt-3.5 rotate-[-45deg] w-[54px]">
                                  <Text
                                    className="h-[39px] text-[10px] text-center text-white-A700 uppercase w-[39px]"
                                    size="txtRobotoBlack10"
                                  >
                                    Verified
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                          <Text
                            className="absolute border border-gray-300 border-solid bottom-[0] inset-x-[0] mx-auto sm:px-5 px-[35px] py-[5px] text-blue_gray-900_03 text-center text-sm w-max"
                            size="txtRobotoRegular14Bluegray90003"
                          >
                            <span className="text-blue_gray-900_03 font-roboto font-normal">
                              Escorts{" "}
                            </span>
                            <span className="text-blue_gray-900_03 font-roboto font-bold">
                              Algarve
                            </span>
                          </Text>
                          <Img
                            className="absolute h-[52px] object-cover right-[0] top-[0] w-[53px]"
                            src="images/img_after.png"
                            alt="after"
                          />
                        </div>
                        <div className="md:h-[330px] h-[338px] relative w-full">
                          <div className="absolute bg-white-A700 flex flex-col h-max inset-[0] items-center justify-center m-auto shadow-bs8 w-[98%]">
                            <div className="border border-gray-300 border-solid flex flex-col items-center justify-end p-[3px] w-full">
                              <Text
                                className="text-center text-gray-900 text-sm"
                                size="txtRobotoBold14"
                              >
                                Jessica
                              </Text>
                            </div>
                            <div className="flex flex-col items-center justify-start w-full">
                              <div className="h-[280px] relative w-full">
                                <Img
                                  className="h-[280px] m-auto object-cover w-full"
                                  src="images/img_1693240477474458avif.png"
                                  alt="169324047747445"
                                />
                                <div className="absolute bg-gradient17  flex flex-col h-10 items-center justify-start left-[0] p-[3px] rounded-[50%] top-[0] w-10">
                                  <Text
                                    className="leading-[9.00px] mb-1 mt-2 text-[9px] text-center text-white-A700 uppercase"
                                    size="txtRobotoBlack9"
                                  >
                                    <>
                                      Unveri
                                      <br />
                                      fied
                                    </>
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <div className="border border-gray-300 border-solid flex flex-col items-center justify-start p-[5px] w-full">
                              <Text
                                className="text-blue_gray-900_03 text-center text-sm"
                                size="txtRobotoRegular14Bluegray90003"
                              >
                                <span className="text-blue_gray-900_03 font-roboto font-normal">
                                  Escorts{" "}
                                </span>
                                <span className="text-blue_gray-900_03 font-roboto font-bold">
                                  Barcelona
                                </span>
                              </Text>
                            </div>
                          </div>
                          <Img
                            className="absolute h-[52px] object-cover right-[0] top-[0] w-[53px]"
                            src="images/img_after.png"
                            alt="after"
                          />
                        </div>
                        <div className="md:h-[330px] h-[338px] relative w-full">
                          <div className="absolute bg-white-A700 flex flex-col h-max inset-[0] items-center justify-center m-auto shadow-bs8 w-[98%]">
                            <div className="border border-gray-300 border-solid flex flex-col items-center justify-end p-[3px] w-full">
                              <Text
                                className="text-center text-gray-900 text-sm"
                                size="txtRobotoBold14"
                              >
                                Cloe
                              </Text>
                            </div>
                            <div className="flex flex-col items-center justify-start w-full">
                              <div className="h-[280px] relative w-full">
                                <Img
                                  className="h-[280px] m-auto object-cover w-full"
                                  src="images/img_1692190790373151avif.png"
                                  alt="169219079037315"
                                />
                                <div className="absolute flex flex-col left-[0] top-[0] w-[22%]">
                                  <div className="flex flex-col mx-auto w-full">
                                    <div className="bg-gradient13  flex flex-col h-10 items-center justify-center mx-auto p-[5px] rounded-[50%] w-10">
                                      <Text
                                        className="mt-[5px] text-[8px] text-center text-white-A700 uppercase"
                                        size="txtRobotoBlack8"
                                      >
                                        Indepe
                                      </Text>
                                      <Text
                                        className="mb-0.5 text-[8px] text-center text-white-A700 uppercase"
                                        size="txtRobotoBlack8"
                                      >
                                        ndent
                                      </Text>
                                    </div>
                                    <Text
                                      className="bg-gradient14  flex h-10 items-center justify-center mt-[-10px] mx-auto rounded-[50%] text-[9px] text-center text-white-A700 uppercase w-10 z-[1]"
                                      size="txtRobotoBlack9"
                                    >
                                      Video
                                    </Text>
                                  </div>
                                  <Text
                                    className="bg-gradient16  flex h-10 items-center justify-center mt-[-10px] mx-auto rounded-[50%] text-[8px] text-center text-white-A700 uppercase w-10 z-[1]"
                                    size="txtRobotoBlack8"
                                  >
                                    Review
                                  </Text>
                                </div>
                                <div className="absolute bg-gradient15  bottom-[0] flex flex-col h-[54px] items-start justify-end left-[0] pr-3.5 pt-3.5 rotate-[-45deg] w-[54px]">
                                  <Text
                                    className="h-[39px] text-[10px] text-center text-white-A700 uppercase w-[39px]"
                                    size="txtRobotoBlack10"
                                  >
                                    Verified
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <div className="border border-gray-300 border-solid flex flex-col items-center justify-end p-1 w-full">
                              <Text
                                className="mt-0.5 text-blue_gray-900_03 text-center text-sm"
                                size="txtRobotoRegular14Bluegray90003"
                              >
                                <span className="text-blue_gray-900_03 font-roboto font-normal">
                                  Escorts{" "}
                                </span>
                                <span className="text-blue_gray-900_03 font-roboto font-bold">
                                  Budapest
                                </span>
                              </Text>
                            </div>
                          </div>
                          <Img
                            className="absolute h-[52px] object-cover right-[0] top-[0] w-[53px]"
                            src="images/img_after.png"
                            alt="after"
                          />
                        </div>
                        <div className="md:h-[330px] h-[338px] relative w-full">
                          <div className="absolute bg-white-A700 flex flex-col h-max inset-[0] items-center justify-center m-auto shadow-bs8 w-[98%]">
                            <div className="border border-gray-300 border-solid flex flex-col items-center justify-end p-[3px] w-full">
                              <Text
                                className="text-center text-gray-900 text-sm"
                                size="txtRobotoBold14"
                              >
                                Lia Schmitt
                              </Text>
                            </div>
                            <div className="flex flex-col items-center justify-start w-full">
                              <div className="h-[280px] relative w-full">
                                <Img
                                  className="h-[280px] m-auto object-cover w-full"
                                  src="images/img_1699829674370423avif.png"
                                  alt="169982967437042"
                                />
                                <div className="absolute flex flex-col left-[0] top-[0] w-[22%]">
                                  <div className="bg-gradient13  flex flex-col h-10 items-center justify-center mx-auto p-[5px] rounded-[50%] w-10">
                                    <Text
                                      className="mt-[5px] text-[8px] text-center text-white-A700 uppercase"
                                      size="txtRobotoBlack8"
                                    >
                                      Indepe
                                    </Text>
                                    <Text
                                      className="mb-0.5 text-[8px] text-center text-white-A700 uppercase"
                                      size="txtRobotoBlack8"
                                    >
                                      ndent
                                    </Text>
                                  </div>
                                  <Text
                                    className="bg-gradient14  flex h-10 items-center justify-center mt-[-10px] mx-auto rounded-[50%] text-[9px] text-center text-white-A700 uppercase w-10 z-[1]"
                                    size="txtRobotoBlack9"
                                  >
                                    Video
                                  </Text>
                                </div>
                                <div className="absolute bg-gradient15  bottom-[0] flex flex-col h-[54px] items-start justify-end left-[0] pr-3.5 pt-3.5 rotate-[-45deg] w-[54px]">
                                  <Text
                                    className="h-[39px] text-[10px] text-center text-white-A700 uppercase w-[39px]"
                                    size="txtRobotoBlack10"
                                  >
                                    Verified
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <div className="border border-gray-300 border-solid flex flex-col items-center justify-start p-[5px] w-full">
                              <Text
                                className="text-blue_gray-900_03 text-center text-sm"
                                size="txtRobotoRegular14Bluegray90003"
                              >
                                <span className="text-blue_gray-900_03 font-roboto font-normal">
                                  Escorts{" "}
                                </span>
                                <span className="text-blue_gray-900_03 font-roboto font-bold">
                                  Dubai
                                </span>
                              </Text>
                            </div>
                          </div>
                          <Img
                            className="absolute h-[52px] object-cover right-[0] top-[0] w-[53px]"
                            src="images/img_after.png"
                            alt="after"
                          />
                        </div>
                        <div className="md:h-[330px] h-[338px] relative w-full">
                          <div className="absolute bg-white-A700 flex flex-col h-max inset-[0] items-center justify-center m-auto shadow-bs8 w-[98%]">
                            <div className="border border-gray-300 border-solid flex flex-col items-center justify-end p-[3px] w-full">
                              <Text
                                className="text-center text-gray-900 text-sm"
                                size="txtRobotoBold14"
                              >
                                Milana
                              </Text>
                            </div>
                            <div className="flex flex-col items-center justify-start w-full">
                              <div className="h-[280px] relative w-full">
                                <Img
                                  className="h-[280px] m-auto object-cover w-full"
                                  src="images/img_1694441373831368avif.png"
                                  alt="169444137383136"
                                />
                                <div className="absolute flex flex-col left-[0] top-[0] w-[22%]">
                                  <div className="bg-gradient13  flex flex-col h-10 items-center justify-center mx-auto p-[5px] rounded-[50%] w-10">
                                    <Text
                                      className="mt-[5px] text-[8px] text-center text-white-A700 uppercase"
                                      size="txtRobotoBlack8"
                                    >
                                      Indepe
                                    </Text>
                                    <Text
                                      className="mb-0.5 text-[8px] text-center text-white-A700 uppercase"
                                      size="txtRobotoBlack8"
                                    >
                                      ndent
                                    </Text>
                                  </div>
                                  <Text
                                    className="bg-gradient14  flex h-10 items-center justify-center mt-[-10px] mx-auto rounded-[50%] text-[9px] text-center text-white-A700 uppercase w-10 z-[1]"
                                    size="txtRobotoBlack9"
                                  >
                                    Video
                                  </Text>
                                </div>
                                <div className="absolute bg-gradient15  bottom-[0] flex flex-col h-[54px] items-start justify-end left-[0] pr-3.5 pt-3.5 rotate-[-45deg] w-[54px]">
                                  <Text
                                    className="h-[39px] text-[10px] text-center text-white-A700 uppercase w-[39px]"
                                    size="txtRobotoBlack10"
                                  >
                                    Verified
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <div className="border border-gray-300 border-solid flex flex-col items-center justify-start p-[5px] w-full">
                              <Text
                                className="text-blue_gray-900_03 text-center text-sm"
                                size="txtRobotoRegular14Bluegray90003"
                              >
                                <span className="text-blue_gray-900_03 font-roboto font-normal">
                                  Escorts{" "}
                                </span>
                                <span className="text-blue_gray-900_03 font-roboto font-bold">
                                  Abu Dhabi
                                </span>
                              </Text>
                            </div>
                          </div>
                          <Img
                            className="absolute h-[52px] object-cover right-[0] top-[0] w-[53px]"
                            src="images/img_after.png"
                            alt="after"
                          />
                        </div>
                        <div className="md:h-[330px] h-[338px] relative w-full">
                          <div className="absolute bg-white-A700 flex flex-col h-max inset-[0] items-center justify-center m-auto shadow-bs8 w-[98%]">
                            <div className="border border-gray-300 border-solid flex flex-col items-center justify-end p-[3px] w-full">
                              <Text
                                className="text-center text-gray-900 text-sm"
                                size="txtRobotoBold14"
                              >
                                Delia
                              </Text>
                            </div>
                            <div className="flex flex-col items-center justify-start w-full">
                              <div className="h-[280px] relative w-full">
                                <Img
                                  className="h-[280px] m-auto object-cover w-full"
                                  src="images/img_1698356979237291avif.png"
                                  alt="169835697923729"
                                />
                                <div className="absolute flex flex-col left-[0] top-[0] w-[22%]">
                                  <div className="bg-gradient13  flex flex-col h-10 items-center justify-center mx-auto p-[5px] rounded-[50%] w-10">
                                    <Text
                                      className="mt-[5px] text-[8px] text-center text-white-A700 uppercase"
                                      size="txtRobotoBlack8"
                                    >
                                      Indepe
                                    </Text>
                                    <Text
                                      className="mb-0.5 text-[8px] text-center text-white-A700 uppercase"
                                      size="txtRobotoBlack8"
                                    >
                                      ndent
                                    </Text>
                                  </div>
                                  <Text
                                    className="bg-gradient16  flex h-10 items-center justify-center mt-[-10px] mx-auto rounded-[50%] text-[8px] text-center text-white-A700 uppercase w-10 z-[1]"
                                    size="txtRobotoBlack8"
                                  >
                                    Review
                                  </Text>
                                </div>
                                <div className="absolute bg-gradient15  bottom-[0] flex flex-col h-[54px] items-start justify-end left-[0] pr-3.5 pt-3.5 rotate-[-45deg] w-[54px]">
                                  <Text
                                    className="h-[39px] text-[10px] text-center text-white-A700 uppercase w-[39px]"
                                    size="txtRobotoBlack10"
                                  >
                                    Verified
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <div className="border border-gray-300 border-solid flex flex-col items-center justify-start p-[5px] w-full">
                              <Text
                                className="text-blue_gray-900_03 text-center text-sm"
                                size="txtRobotoRegular14Bluegray90003"
                              >
                                <span className="text-blue_gray-900_03 font-roboto font-normal">
                                  Escorts{" "}
                                </span>
                                <span className="text-blue_gray-900_03 font-roboto font-bold">
                                  Bucharest
                                </span>
                              </Text>
                            </div>
                          </div>
                          <Img
                            className="absolute h-[52px] object-cover right-[0] top-[0] w-[53px]"
                            src="images/img_after.png"
                            alt="after"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start max-w-[1349px] mx-auto md:px-5 w-full">
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
      </div>
    </>
  );
};

export default DesktopThirtyThreePage;
