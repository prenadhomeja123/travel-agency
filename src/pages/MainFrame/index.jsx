import React from "react";

import { Button, Img, Line, List, SelectBox, Text } from "components";

const dropdownOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const dropdownOneOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const dropdownTwoOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const MainFramePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-volkhov justify-end mx-auto overflow-auto w-full">
        <div className="flex flex-col items-center max-w-[1392px] mx-auto pr-[35px] md:px-5 w-full">
          <div className="md:h-[4598px] h-[4859px] sm:h-[4883px] relative w-full">
            <div className="absolute flex md:h-[4598px] h-[4859px] sm:h-[4883px] inset-y-[0] justify-end my-auto right-[0] w-[92%] md:w-full">
              <div className="flex flex-col gap-[58px] h-full justify-start mb-[72px] mt-auto mx-auto w-[98%]">
                <div className="flex flex-col md:gap-10 gap-[1480px] justify-start w-full">
                  <div className="flex flex-col items-center justify-start md:ml-[0] ml-[84px] w-[94%] md:w-full">
                    <div className="flex flex-col md:gap-10 gap-[586px] justify-start w-full">
                      <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between md:ml-[0] ml-[161px] w-[86%] md:w-full">
                        <div className="h-[65px] md:mt-0 mt-[38px] relative w-3/5 md:w-full">
                          <Text
                            className="capitalize m-auto sm:text-[40px] md:text-[46px] text-[50px] text-blue_gray-900 text-center"
                            size="txtVolkhovBold50"
                          >
                            Find Your Travel Buddy{" "}
                          </Text>
                          <Text
                            className="absolute capitalize h-full inset-[0] justify-center m-auto sm:text-[40px] md:text-[46px] text-[50px] text-blue_gray-900 text-center w-max"
                            size="txtVolkhovBold50"
                          >
                            Find Your Travel Buddy{" "}
                          </Text>
                        </div>
                        <div className="flex flex-col font-roboto items-center justify-start w-[15%] md:w-full">
                          <div className="flex flex-col items-start justify-start w-full">
                            <List
                              className="flex flex-col gap-3 items-center w-full"
                              orientation="vertical"
                            >
                              <div className="flex md:flex-1 flex-row items-center justify-between mr-[3px] my-0 w-[98%] md:w-full">
                                <Text
                                  className="text-[22px] text-deep_orange-400 sm:text-lg md:text-xl"
                                  size="txtRobotoRegular22"
                                >
                                  *
                                </Text>
                                <Text
                                  className="text-[22px] text-gray-300 sm:text-lg md:text-xl"
                                  size="txtRobotoRegular22Gray300"
                                >
                                  *
                                </Text>
                                <Text
                                  className="text-[22px] text-gray-300 sm:text-lg md:text-xl"
                                  size="txtRobotoRegular22Gray300"
                                >
                                  *
                                </Text>
                                <Text
                                  className="text-[22px] text-gray-300 sm:text-lg md:text-xl"
                                  size="txtRobotoRegular22Gray300"
                                >
                                  *
                                </Text>
                                <Text
                                  className="text-[22px] text-gray-300 sm:text-lg md:text-xl"
                                  size="txtRobotoRegular22Gray300"
                                >
                                  *
                                </Text>
                              </div>
                              <div className="flex flex-1 flex-row items-center justify-between my-0 w-full">
                                <Text
                                  className="text-[22px] text-gray-300 sm:text-lg md:text-xl"
                                  size="txtRobotoRegular22Gray300"
                                >
                                  +
                                </Text>
                                <Text
                                  className="text-[22px] text-gray-300 sm:text-lg md:text-xl"
                                  size="txtRobotoRegular22Gray300"
                                >
                                  +
                                </Text>
                                <Text
                                  className="text-[22px] text-gray-300 sm:text-lg md:text-xl"
                                  size="txtRobotoRegular22Gray300"
                                >
                                  +
                                </Text>
                                <Text
                                  className="text-[22px] text-gray-300 sm:text-lg md:text-xl"
                                  size="txtRobotoRegular22Gray300"
                                >
                                  +
                                </Text>
                                <Text
                                  className="text-[22px] text-gray-300 sm:text-lg md:text-xl"
                                  size="txtRobotoRegular22Gray300"
                                >
                                  +
                                </Text>
                              </div>
                            </List>
                            <div className="flex flex-row items-start justify-between mt-[5px] w-full">
                              <Text
                                className="mt-[3px] text-[22px] text-gray-300 sm:text-lg md:text-xl"
                                size="txtRobotoRegular22Gray300"
                              >
                                +
                              </Text>
                              <Text
                                className="mt-[3px] text-[22px] text-gray-300 sm:text-lg md:text-xl"
                                size="txtRobotoRegular22Gray300"
                              >
                                +
                              </Text>
                              <Text
                                className="mb-[3px] text-[22px] text-deep_purple-A200 sm:text-lg md:text-xl"
                                size="txtRobotoRegular22DeeppurpleA200"
                              >
                                *
                              </Text>
                              <Text
                                className="mt-[3px] text-[22px] text-gray-300 sm:text-lg md:text-xl"
                                size="txtRobotoRegular22Gray300"
                              >
                                +
                              </Text>
                              <Text
                                className="mt-[3px] text-[22px] text-gray-300 sm:text-lg md:text-xl"
                                size="txtRobotoRegular22Gray300"
                              >
                                +
                              </Text>
                            </div>
                            <div className="flex flex-row items-center justify-end md:ml-[0] ml-[35px] mt-2 w-3/4 md:w-full">
                              <Text
                                className="text-[22px] text-gray-300 sm:text-lg md:text-xl"
                                size="txtRobotoRegular22Gray300"
                              >
                                +
                              </Text>
                              <Text
                                className="ml-[9px] text-[22px] text-gray-300 sm:text-lg md:text-xl"
                                size="txtRobotoRegular22Gray300"
                              >
                                +
                              </Text>
                              <Text
                                className="ml-[22px] text-[22px] text-gray-300 sm:text-lg md:text-xl"
                                size="txtRobotoRegular22Gray300"
                              >
                                +
                              </Text>
                              <Text
                                className="ml-[22px] text-[22px] text-gray-300 sm:text-lg md:text-xl"
                                size="txtRobotoRegular22Gray300"
                              >
                                +
                              </Text>
                            </div>
                            <div className="flex flex-row items-start justify-end md:ml-[0] ml-[57px] mt-[5px] w-3/5 md:w-full">
                              <Text
                                className="mt-[3px] text-[22px] text-gray-300 sm:text-lg md:text-xl"
                                size="txtRobotoRegular22Gray300"
                              >
                                +
                              </Text>
                              <Text
                                className="mb-[3px] ml-[22px] text-[22px] sm:text-lg text-red-600 md:text-xl"
                                size="txtRobotoRegular22Red600"
                              >
                                *
                              </Text>
                              <Text
                                className="ml-[25px] mt-[3px] text-[22px] text-gray-300 sm:text-lg md:text-xl"
                                size="txtRobotoRegular22Gray300"
                              >
                                +
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                      <Text
                        className="capitalize leading-[35.00px] sm:text-4xl md:text-[38px] text-[40px] text-blue_gray-900 text-center"
                        size="txtVolkhovBold40"
                      >
                        <>
                          Check Off The Ultimate Global Travel Checklist <br />
                          With Your Travel Partner
                        </>
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-[91%] md:w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <Text
                        className="capitalize sm:text-[40px] md:text-[46px] text-[50px] text-blue_gray-900 text-center"
                        size="txtVolkhovBold50"
                      >
                        Top Destinations
                      </Text>
                      <List
                        className="sm:flex-col flex-row font-poppins gap-[35px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center mt-[33px] w-full"
                        orientation="horizontal"
                      >
                        <div className="h-[457px] relative w-full">
                          <Img
                            className="absolute h-[457px] inset-[0] justify-center m-auto object-cover rounded-[24px] w-full"
                            src="images/img_rectangle14.png"
                            alt="rectangleFourteen"
                          />
                          <div className="absolute bg-white-A700 bottom-[0] flex flex-col inset-x-[0] items-start justify-end mx-auto p-[3px] rounded-bl-[24px] rounded-br-[24px] w-full">
                            <div className="flex flex-col gap-[15px] items-start justify-start mt-[57px] w-[88%] md:w-full">
                              <div className="flex flex-row items-center justify-between w-full">
                                <Text
                                  className="text-blue_gray-600 text-lg"
                                  size="txtPoppinsMedium18"
                                >
                                  Rome, Italty
                                </Text>
                                <Text
                                  className="text-blue_gray-600 text-lg"
                                  size="txtPoppinsMedium18"
                                >
                                  $5,42k
                                </Text>
                              </div>
                              <div className="flex flex-row gap-3.5 items-start justify-start w-[48%] md:w-full">
                                <Img
                                  className="h-5 w-5"
                                  src="images/img_navigation1.svg"
                                  alt="navigationOne"
                                />
                                <Text
                                  className="text-base text-blue_gray-600"
                                  size="txtPoppinsMedium16"
                                >
                                  10 Days Trip
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="h-[457px] relative w-full">
                          <Img
                            className="absolute h-[457px] inset-[0] justify-center m-auto object-cover rounded-[24px] w-full"
                            src="images/img_rectangle14_457x314.png"
                            alt="rectangleFourteen"
                          />
                          <div className="absolute bg-white-A700 bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto p-5 rounded-bl-[24px] rounded-br-[24px] w-full">
                            <div className="flex flex-col gap-[15px] items-start justify-start mb-[18px] mt-[5px] w-[98%] md:w-full">
                              <div className="flex flex-row items-center justify-between w-full">
                                <Text
                                  className="text-blue_gray-600 text-lg"
                                  size="txtPoppinsMedium18"
                                >
                                  London, UK
                                </Text>
                                <Text
                                  className="text-blue_gray-600 text-lg"
                                  size="txtPoppinsMedium18"
                                >
                                  $4.2k
                                </Text>
                              </div>
                              <div className="flex flex-row gap-[15px] items-start justify-start w-[48%] md:w-full">
                                <Img
                                  className="h-5 w-5"
                                  src="images/img_navigation1.svg"
                                  alt="navigationOne"
                                />
                                <Text
                                  className="text-base text-blue_gray-600"
                                  size="txtPoppinsMedium16"
                                >
                                  12 Days Trip
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="h-[457px] relative w-full">
                          <Img
                            className="absolute bottom-[10%] h-[252px] right-[0]"
                            src="images/img_decore.svg"
                            alt="decore"
                          />
                          <div className="absolute h-[457px] inset-y-[0] left-[0] my-auto w-[84%]">
                            <Img
                              className="absolute h-[457px] inset-[0] justify-center m-auto object-cover rounded-[24px] w-full"
                              src="images/img_rectangle14_1.png"
                              alt="rectangleFourteen"
                            />
                            <div className="absolute bg-white-A700 bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto p-5 rounded-bl-[24px] rounded-br-[24px] w-full">
                              <div className="flex flex-col gap-3.5 items-start justify-start mb-[18px] mt-[5px] w-[99%] md:w-full">
                                <div className="flex flex-row items-start justify-between w-full">
                                  <Text
                                    className="text-blue_gray-600 text-lg"
                                    size="txtPoppinsMedium18"
                                  >
                                    Full Europe
                                  </Text>
                                  <Text
                                    className="text-blue_gray-600 text-lg"
                                    size="txtPoppinsMedium18"
                                  >
                                    $15k
                                  </Text>
                                </div>
                                <div className="flex flex-row gap-[11px] items-start justify-start w-[49%] md:w-full">
                                  <Img
                                    className="h-5 w-5"
                                    src="images/img_navigation1.svg"
                                    alt="navigationOne"
                                  />
                                  <Text
                                    className="text-base text-blue_gray-600"
                                    size="txtPoppinsMedium16"
                                  >
                                    28 Days Trip
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </List>
                      <Text
                        className="capitalize mt-[209px] sm:text-4xl md:text-[38px] text-[40px] text-blue_gray-900 text-center"
                        size="txtVolkhovBold40"
                      >
                        <>
                          Steps to join your ultimate <br />
                          and trustworthy travel partner with us
                        </>
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col font-poppins items-center justify-start md:ml-[0] ml-[77px] w-[54%] md:w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <Text
                        className="leading-[80.00px] text-base text-blue_gray-600"
                        size="txtPoppinsBold16"
                      >
                        <>
                          Decide where you want to go and what you plan to visit
                          <br />
                          Write all hobbies, interests, and plans in your
                          personal profile
                          <br />
                          Pick and post your best photos on your profile <br />
                          Choose a nickname that you would want your partner to
                          know
                          <br />
                          Start your exciting journey of seeking the best
                          partner that matches your vibe.
                        </>
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute font-dmsans md:h-[4598px] h-[4859px] sm:h-[4883px] inset-[0] justify-center m-auto w-full">
                <Img
                  className="absolute h-[710px] object-cover right-[0] top-[0]"
                  src="images/img_decore_purple_a200.png"
                  alt="decore"
                />
                <div className="absolute h-10 sm:h-[255px] right-[7%] top-[0] w-[59%] md:w-full">
                  <div className="absolute bottom-[8%] flex sm:flex-col flex-row sm:gap-5 items-start justify-start left-[13%] w-[57%]">
                    <Text
                      className="sm:mt-0 mt-[3px] text-[17px] text-blue_gray-900_01"
                      size="txtDMSansBold17"
                    >
                      Desitnations
                    </Text>
                    <Text
                      className="sm:ml-[0] ml-[31px] sm:mt-0 mt-[3px] text-[17px] text-blue_gray-900_01"
                      size="txtDMSansBold17"
                    >
                      About us
                    </Text>
                    <a
                      href="javascript:"
                      className="mb-[3px] sm:ml-[0] ml-[156px] text-[17px] text-blue_gray-900_01"
                    >
                      <Text size="txtDMSansBold17">Login</Text>
                    </a>
                  </div>
                  <Text
                    className="absolute bottom-[8%] left-[0] text-[17px] text-blue_gray-900_01"
                    size="txtDMSansBold17"
                  >
                    Home
                  </Text>
                  <div className="absolute border border-blue_gray-900_01 border-solid flex flex-col h-full inset-y-[0] items-center justify-end my-auto p-1.5 right-[11%] rounded-[5px]">
                    <a
                      href="javascript:"
                      className="mt-[3px] text-[17px] text-blue_gray-900_01"
                    >
                      <Text size="txtDMSansBold17">Sign up</Text>
                    </a>
                  </div>
                  <SelectBox
                    className="font-bold leading-[normal] ml-auto my-auto text-[17px] text-blue_gray-900_01 text-left w-[6%] sm:w-full"
                    placeholderClassName="text-blue_gray-900_01"
                    indicator={
                      <Img
                        className="h-1 mr-[0] outline-blue_gray-900_01 outline-[0.5px] outline w-[9px] right-[0] absolute"
                        src="images/img_arrowdown.svg"
                        alt="arrow_down"
                      />
                    }
                    isMulti={false}
                    name="dropdown"
                    options={dropdownOptionsList}
                    isSearchable={false}
                    placeholder="EN"
                  />
                  <div className="absolute h-10 sm:h-[255px] inset-[0] justify-center m-auto w-full">
                    <div className="absolute bottom-[8%] flex sm:flex-col flex-row sm:gap-5 items-start justify-start left-[13%] w-[57%]">
                      <Text
                        className="sm:mt-0 mt-[3px] text-[17px] text-blue_gray-900_01"
                        size="txtDMSansBold17"
                      >
                        Desitnations
                      </Text>
                      <Text
                        className="sm:ml-[0] ml-[31px] sm:mt-0 mt-[3px] text-[17px] text-blue_gray-900_01"
                        size="txtDMSansBold17"
                      >
                        About us
                      </Text>
                      <a
                        href="javascript:"
                        className="mb-[3px] sm:ml-[0] ml-[156px] text-[17px] text-blue_gray-900_01"
                      >
                        <Text size="txtDMSansBold17">Login</Text>
                      </a>
                    </div>
                    <Text
                      className="absolute bottom-[8%] left-[0] text-[17px] text-blue_gray-900_01"
                      size="txtDMSansBold17"
                    >
                      Home
                    </Text>
                    <div className="absolute border border-blue_gray-900_01 border-solid flex flex-col h-full inset-y-[0] items-center justify-end my-auto p-1.5 right-[11%] rounded-[5px]">
                      <a
                        href="javascript:"
                        className="mt-[3px] text-[17px] text-blue_gray-900_01"
                      >
                        <Text size="txtDMSansBold17">Sign up</Text>
                      </a>
                    </div>
                    <SelectBox
                      className="font-bold leading-[normal] ml-auto my-auto text-[17px] text-blue_gray-900_01 text-left w-[6%] sm:w-full"
                      placeholderClassName="text-blue_gray-900_01"
                      indicator={
                        <Img
                          className="h-1 mr-[0] outline-blue_gray-900_01 outline-[0.5px] outline w-[9px] right-[0] absolute"
                          src="images/img_arrowdown.svg"
                          alt="arrow_down"
                        />
                      }
                      isMulti={false}
                      name="dropdown_One"
                      options={dropdownOneOptionsList}
                      isSearchable={false}
                      placeholder="EN"
                    />
                    <div className="absolute flex sm:flex-col flex-row sm:gap-5 h-full inset-[0] items-start justify-center m-auto w-full">
                      <Text
                        className="sm:mt-0 mt-[13px] text-[17px] text-blue_gray-900_01"
                        size="txtDMSansBold17"
                      >
                        Home
                      </Text>
                      <Text
                        className="sm:ml-[0] ml-[43px] sm:mt-0 mt-[13px] text-[17px] text-blue_gray-900_01"
                        size="txtDMSansBold17"
                      >
                        Desitnations
                      </Text>
                      <Text
                        className="sm:ml-[0] ml-[31px] sm:mt-0 mt-[13px] text-[17px] text-blue_gray-900_01"
                        size="txtDMSansBold17"
                      >
                        About us
                      </Text>
                      <a
                        href="javascript:"
                        className="sm:ml-[0] ml-[156px] sm:mt-0 mt-2.5 text-[17px] text-blue_gray-900_01"
                      >
                        <Text size="txtDMSansBold17">Login</Text>
                      </a>
                      <Button
                        className="cursor-pointer font-bold leading-[normal] min-w-[102px] sm:ml-[0] ml-[45px] rounded-[5px] text-[17px] text-center"
                        color="blue_gray_900_01"
                        size="xs"
                        variant="outline"
                      >
                        Sign up
                      </Button>
                      <SelectBox
                        className="sm:flex-1 font-bold leading-[normal] sm:ml-[0] ml-[43px] sm:mt-0 mt-2 text-[17px] text-blue_gray-900_01 text-left w-[6%] sm:w-full"
                        placeholderClassName="text-blue_gray-900_01"
                        indicator={
                          <Img
                            className="h-1 mr-[0] outline-blue_gray-900_01 outline-[0.5px] outline w-[9px]"
                            src="images/img_arrowdown.svg"
                            alt="arrow_down"
                          />
                        }
                        isMulti={false}
                        name="dropdown_Two"
                        options={dropdownTwoOptionsList}
                        isSearchable={false}
                        placeholder="EN"
                      />
                    </div>
                  </div>
                </div>
                <div className="absolute font-poppins md:h-[4598px] h-[4712px] sm:h-[4883px] inset-[0] justify-center m-auto w-full">
                  <div className="absolute flex flex-col h-max inset-[0] items-start justify-center m-auto w-full">
                    <div className="h-[30px] ml-1 md:ml-[0] relative w-[33%] sm:w-full">
                      <Text
                        className="m-auto text-red-400 text-xl uppercase"
                        size="txtPoppinsBold20"
                      >
                        Best Destinations around the world
                      </Text>
                      <Text
                        className="absolute h-full inset-[0] justify-center m-auto text-red-400 text-xl uppercase w-max"
                        size="txtPoppinsBold20"
                      >
                        Best Destinations around the world
                      </Text>
                    </div>
                    <div className="font-volkhov h-[241px] md:h-[258px] ml-1 md:ml-[0] mt-[17px] relative w-full">
                      <Img
                        className="h-3 ml-[243px] mt-[57px]"
                        src="images/img_decore_red_400.svg"
                        alt="decore_One"
                      />
                      <Text
                        className="absolute h-full inset-[0] justify-center leading-[70.00px] m-auto md:text-5xl text-[70px] text-blue_gray-900_02"
                        size="txtVolkhovBold70"
                      >
                        <>
                          Travel the world <br />
                          with the local <br />
                          partner that <br />
                          matches your vibe!
                        </>
                      </Text>
                    </div>
                    <div className="h-[4296px] md:h-[4310px] sm:h-[4595px] mt-[52px] relative w-[94%] md:w-full">
                      <div className="absolute flex flex-col h-max inset-y-[0] items-center justify-start left-[0] my-auto w-[61%]">
                        <div className="flex flex-col justify-start w-full">
                          <div className="flex sm:flex-col flex-row font-poppins sm:gap-10 items-start justify-between w-[92%] md:w-full">
                            <div className="flex flex-col md:gap-10 gap-[65px] justify-start w-[59%] sm:w-full">
                              <div className="flex flex-row font-dmsans items-center justify-between w-full">
                                <div className="bg-amber-700 md:h-[58px] h-[60px] relative rounded-[10px] shadow-bs w-[45%]">
                                  <Text
                                    className="m-auto text-center text-lg text-white-A700"
                                    size="txtDMSansBold18"
                                  >
                                    Find Destination
                                  </Text>
                                  <div className="absolute bg-amber-700 md:h-[58px] h-[60px] inset-[0] justify-center m-auto rounded-[10px] shadow-bs w-full">
                                    <Text
                                      className="m-auto text-center text-lg text-white-A700"
                                      size="txtDMSansBold18"
                                    >
                                      Find Destination
                                    </Text>
                                    <div className="absolute bg-amber-700 flex flex-col h-full inset-[0] items-center justify-center m-auto p-[13px] rounded-[10px] shadow-bs w-full">
                                      <Text
                                        className="my-1 text-center text-lg text-white-A700"
                                        size="txtDMSansBold18"
                                      >
                                        Find Destination
                                      </Text>
                                    </div>
                                  </div>
                                </div>
                                <div className="flex flex-row font-poppins gap-[21px] items-center justify-start w-[44%]">
                                  <Button
                                    className="flex h-[52px] items-center justify-center w-[52px]"
                                    shape="circle"
                                    color="red_400"
                                  >
                                    <Img
                                      className="h-[15px]"
                                      src="images/img_overflowmenu.svg"
                                      alt="overflowmenu"
                                    />
                                  </Button>
                                  <Text
                                    className="text-[17px] text-gray-600"
                                    size="txtPoppinsMedium17"
                                  >
                                    Play Demo
                                  </Text>
                                </div>
                              </div>
                              <Img
                                className="h-[100px] md:ml-[0] ml-[57px] w-[100px]"
                                src="images/img_materialsymbol.svg"
                                alt="materialsymbol"
                              />
                              <Text
                                className="leading-[30.00px] md:ml-[0] ml-[51px] text-base text-black-900_01 text-center"
                                size="txtPoppinsBold16Black90001"
                              >
                                <>
                                  Travel Places <br />
                                  Arround the globe
                                </>
                              </Text>
                            </div>
                            <div className="flex flex-col items-center justify-start sm:mt-0 mt-32 w-1/4 sm:w-full">
                              <Img
                                className="h-[90px]"
                                src="images/img_vector.svg"
                                alt="vector"
                              />
                              <Text
                                className="leading-[30.00px] text-base text-black-900_01 text-center w-full"
                                size="txtPoppinsBold16Black90001"
                              >
                                {" "}
                                With your partner that matches your vibe{" "}
                              </Text>
                            </div>
                          </div>
                          <Text
                            className="md:ml-[0] ml-[448px] mt-[157px] text-base text-blue_gray-600"
                            size="txtPoppinsMedium16"
                          >
                            <>Make your life full of joy. </>
                          </Text>
                          <List
                            className="sm:flex-col flex-row font-opensans gap-[42px] grid sm:grid-cols-1 grid-cols-2 md:ml-[0] ml-[18px] mt-[69px] w-[72%]"
                            orientation="horizontal"
                          >
                            <div className="h-[387px] relative w-full">
                              <div className="md:h-[172px] h-[199px] mb-[-27px] mx-auto w-[92%] z-[1]">
                                <Img
                                  className="h-[199px] m-auto object-cover rounded-lg w-full"
                                  src="images/img_rectangle166.png"
                                  alt="rectangle166"
                                />
                                <Text
                                  className="absolute bg-gray-900_99 bottom-[2%] h-[33px] justify-center left-[7%] px-[13px] py-0.5 rounded-lg text-center text-white-A700 text-xl w-[134px]"
                                  size="txtOpenSansRomanBold20"
                                >
                                  Tao hatiba
                                </Text>
                              </div>
                              <div className="bg-blue_gray-100 flex flex-col items-start justify-center mt-auto mx-auto p-[7px] rounded-lg w-full">
                                <Text
                                  className="md:ml-[0] ml-[45px] mt-[43px] text-base text-white-A700"
                                  size="txtOpenSansRomanBold16"
                                >
                                  Dubai, United Arab
                                </Text>
                                <Text
                                  className="md:ml-[0] ml-[42px] mt-[21px] text-[15px] text-white-A700"
                                  size="txtOpenSansRomanBold15"
                                >
                                  ”World is full of good people, If you can’t
                                  find
                                </Text>
                                <Text
                                  className="md:ml-[0] ml-[42px] my-[38px] text-[15px] text-white-A700"
                                  size="txtOpenSansRomanBold15"
                                >
                                  Friends , Adventure , Soulmate , Job
                                </Text>
                              </div>
                            </div>
                            <div className="h-[385px] relative w-full">
                              <div className="md:h-[170px] h-[199px] mb-[-29px] mx-auto w-[92%] z-[1]">
                                <Img
                                  className="h-[199px] m-auto object-cover rounded-lg w-full"
                                  src="images/img_rectangle166_199x214.png"
                                  alt="rectangle166"
                                />
                                <Text
                                  className="absolute bg-gray-900_99 bottom-[3%] h-[33px] justify-center left-[7%] sm:px-5 px-[33px] py-0.5 rounded-lg text-center text-white-A700 text-xl w-[134px]"
                                  size="txtOpenSansRomanBold20"
                                >
                                  Michle
                                </Text>
                              </div>
                              <div className="bg-blue_gray-100 flex flex-col items-start justify-center mt-auto mx-auto p-[7px] rounded-lg w-full">
                                <Text
                                  className="md:ml-[0] ml-[45px] mt-11 text-base text-white-A700"
                                  size="txtOpenSansRomanBold16"
                                >
                                  USA, Loss Angeles
                                </Text>
                                <Text
                                  className="md:ml-[0] ml-[42px] mt-5 text-[15px] text-white-A700"
                                  size="txtOpenSansRomanBold15"
                                >
                                  ”World is full of good people, If you can’t
                                  find
                                </Text>
                                <Text
                                  className="md:ml-[0] ml-[42px] my-[38px] text-[15px] text-white-A700"
                                  size="txtOpenSansRomanBold15"
                                >
                                  Friends , Adventure , Soulmate , Job
                                </Text>
                              </div>
                            </div>
                          </List>
                          <Button
                            className="cursor-pointer font-bold font-dmsans leading-[normal] min-w-[296px] md:ml-[0] ml-[410px] mt-[74px] text-center text-lg"
                            shape="round"
                            color="amber_700"
                            size="lg"
                          >
                            Find Travel Patner
                          </Button>
                          <Button
                            className="cursor-pointer font-bold font-dmsans leading-[normal] min-w-[296px] md:ml-[0] ml-[395px] mr-[15px] mt-[797px] text-center text-lg"
                            shape="round"
                            color="amber_700"
                            size="lg"
                          >
                            Find Destination
                          </Button>
                          <div className="flex flex-col font-volkhov items-start justify-start ml-9 md:ml-[0] mt-[66px] w-[58%] md:w-full">
                            <Text
                              className="capitalize leading-[50.00px] ml-1 md:ml-[0] sm:text-[31px] md:text-[33px] text-[35px] text-blue_gray-900"
                              size="txtVolkhovRegular35"
                            >
                              <>
                                Reasons your traveling
                                <br />
                                partner can be your <br />
                                partner for life.
                              </>
                            </Text>
                            <div className="font-poppins h-[67px] md:h-[74px] mt-[9px] relative w-[97%] sm:w-full">
                              <div className="absolute flex flex-row gap-[9px] h-max inset-y-[0] items-start justify-start left-[0] my-auto w-[52%]">
                                <Img
                                  className="h-[63px]"
                                  src="images/img_group7.svg"
                                  alt="groupSeven"
                                />
                                <Text
                                  className="text-base text-blue_gray-600"
                                  size="txtPoppinsBold16"
                                >
                                  Choose Partner{" "}
                                </Text>
                              </div>
                              <Text
                                className="absolute bottom-[0] leading-[124.50%] right-[0] text-base text-blue_gray-500 w-[83%] sm:w-full"
                                size="txtPoppinsRegular16"
                              >
                                To Experiencing something new together{" "}
                              </Text>
                            </div>
                            <div className="flex flex-row font-poppins gap-3.5 items-start justify-start mt-[33px] w-[64%] md:w-full">
                              <div className="md:h-[49px] h-[57px] relative w-[58px]">
                                <Img
                                  className="absolute h-5 inset-x-[0] mx-auto top-[0]"
                                  src="images/img_vector_red_100.svg"
                                  alt="vector_One"
                                />
                                <div
                                  className="absolute bg-cover bg-no-repeat bottom-[0] md:h-[49px] h-[53px] inset-x-[0] mx-auto w-full"
                                  style={{
                                    backgroundImage:
                                      "url('images/img_group20.svg')",
                                  }}
                                >
                                  <div className="h-[49px] m-auto w-[88%]">
                                    <div className="h-[49px] m-auto w-full">
                                      <div className="h-[49px] m-auto w-full">
                                        <div className="h-[49px] m-auto w-full">
                                          <div className="flex flex-row h-full items-center justify-evenly m-auto w-full">
                                            <div className="md:h-[39px] h-[49px] relative w-[91%]">
                                              <div className="absolute h-12 md:h-[39px] inset-[0] justify-center m-auto w-full">
                                                <Img
                                                  className="absolute h-[39px] inset-x-[0] mx-auto top-[0]"
                                                  src="images/img_thumbsup.svg"
                                                  alt="thumbsup"
                                                />
                                                <div
                                                  className="absolute bg-cover bg-no-repeat bottom-[0] flex flex-col h-[39px] items-center justify-end pt-1.5 px-1.5 right-[13%] w-[58%]"
                                                  style={{
                                                    backgroundImage:
                                                      "url('images/img_group23.svg')",
                                                  }}
                                                >
                                                  <div
                                                    className="bg-cover bg-no-repeat flex flex-col h-3 items-start justify-end mt-[21px] w-[13px] md:w-full"
                                                    style={{
                                                      backgroundImage:
                                                        "url('images/img_group25.svg')",
                                                    }}
                                                  >
                                                    <Img
                                                      className="h-[9px] w-2.5"
                                                      src="images/img_vector_purple_600.svg"
                                                      alt="vector_Two"
                                                    />
                                                  </div>
                                                </div>
                                              </div>
                                              <Img
                                                className="absolute bottom-[0] h-[13px] right-[0]"
                                                src="images/img_upload.svg"
                                                alt="upload"
                                              />
                                            </div>
                                            <Line className="bg-pink-200 h-[22px] mb-3 mt-[15px] w-1" />
                                          </div>
                                          <Img
                                            className="absolute bottom-[8%] h-[7px] inset-x-[0] mx-auto"
                                            src="images/img_television.svg"
                                            alt="television"
                                          />
                                        </div>
                                        <Line className="absolute bg-pink-200 bottom-[0] h-1 inset-x-[0] mx-auto w-full" />
                                        <Img
                                          className="absolute bottom-[24%] h-[5px] inset-x-[0] mx-auto"
                                          src="images/img_vector_pink_a700.svg"
                                          alt="vector_Five"
                                        />
                                      </div>
                                      <Img
                                        className="absolute bottom-[33%] h-[3px] inset-x-[0] mx-auto"
                                        src="images/img_vector_red_100_3x42.svg"
                                        alt="vector_Six"
                                      />
                                    </div>
                                    <Img
                                      className="absolute h-[19px] inset-x-[0] mx-auto top-[24%]"
                                      src="images/img_grid.svg"
                                      alt="grid"
                                    />
                                  </div>
                                  <div
                                    className="absolute bg-cover bg-no-repeat flex flex-col h-[19px] inset-x-[0] items-start justify-end mx-auto top-[15%] w-[18px]"
                                    style={{
                                      backgroundImage:
                                        "url('images/img_group24.svg')",
                                    }}
                                  >
                                    <Img
                                      className="h-3.5 mt-[3px] w-[15px]"
                                      src="images/img_favorite.svg"
                                      alt="favorite"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col items-center justify-start w-[72%]">
                                <div className="flex flex-col items-start justify-start w-full">
                                  <Text
                                    className="text-base text-blue_gray-600"
                                    size="txtPoppinsBold16"
                                  >
                                    Enjoy the moment
                                  </Text>
                                  <Text
                                    className="leading-[124.50%] text-base text-blue_gray-600"
                                    size="txtPoppinsRegular16Bluegray600"
                                  >
                                    <>
                                      live the romance in the
                                      <br />
                                      moment.{" "}
                                    </>
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex md:flex-col flex-row font-poppins md:gap-5 items-start justify-start md:ml-[0] ml-[27px] mr-[18px] mt-8 w-[94%] md:w-full">
                            <div className="flex flex-col items-end justify-start mb-[207px] w-[10%] md:w-full">
                              <Img
                                className="h-[65px]"
                                src="images/img_thumbsup_yellow_600.svg"
                                alt="thumbsup_One"
                              />
                              <Img
                                className="h-10 mt-[1165px] w-10"
                                src="images/img_contrast.svg"
                                alt="contrast"
                              />
                              <Img
                                className="h-10 mt-10 w-10"
                                src="images/img_grid_blue_a100.svg"
                                alt="grid_One"
                              />
                              <Img
                                className="h-10 mt-10 w-10"
                                src="images/img_settings.svg"
                                alt="settings"
                              />
                              <Img
                                className="h-10 mt-1.5 w-10"
                                src="images/img_openmojieuropeannamebadge.svg"
                                alt="openmojieuropea"
                              />
                              <Img
                                className="h-10 mt-[46px] w-10"
                                src="images/img_simpleiconsyourtraveldottv.svg"
                                alt="simpleiconsyour"
                              />
                            </div>
                            <div className="flex flex-col items-start justify-start md:ml-[0] ml-[18px]">
                              <Text
                                className="text-base text-blue_gray-600"
                                size="txtPoppinsBold16"
                              >
                                Meet besty
                              </Text>
                              <Text
                                className="leading-[124.50%] mt-0.5 text-base text-blue_gray-600"
                                size="txtPoppinsRegular16Bluegray600"
                              >
                                <>
                                  They become best of friends while <br />
                                  experiencing the spark of coziness.
                                </>
                              </Text>
                            </div>
                            <div className="flex flex-col font-dmsans md:gap-10 gap-[713px] justify-start md:ml-[0] ml-[18px] md:mt-0 mt-[946px] w-[44%] md:w-full">
                              <div className="bg-amber-700 flex md:h-[53px] h-[55px] justify-end md:ml-[0] ml-[41px] relative rounded-[10px] shadow-bs w-[86%]">
                                <Text
                                  className="mb-[13px] mt-auto mx-auto text-center text-lg text-white-A700"
                                  size="txtDMSansBold18"
                                >
                                  Choose Destination
                                </Text>
                                <div className="absolute bg-amber-700 flex flex-col h-full inset-[0] items-center justify-center m-auto p-[13px] rounded-[10px] shadow-bs w-full">
                                  <Text
                                    className="mt-[3px] text-center text-lg text-white-A700"
                                    size="txtDMSansBold18"
                                  >
                                    Choose Destination
                                  </Text>
                                </div>
                              </div>
                              <Button
                                className="cursor-pointer font-bold leading-[normal] min-w-[245px] mr-[41px] text-center text-lg"
                                shape="round"
                                color="amber_700"
                              >
                                Join us now
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <Text
                        className="absolute leading-[30.00px] left-[0] text-base text-blue_gray-600 top-[0] w-[41%] sm:w-full"
                        size="txtPoppinsMedium16"
                      >
                        <>
                          Check Off The Ultimate Global Travel Checklist With
                          Your Travel Partner! Make your vacation a fun,
                          exciting, and unforgettable experience.{" "}
                        </>
                      </Text>
                      <Text
                        className="absolute left-[24%] text-base text-blue_gray-600 top-[32%]"
                        size="txtPoppinsMedium16"
                      >
                        Make your vacation a fun, exciting, and unforgettable
                        experience.{" "}
                      </Text>
                      <div className="absolute font-opensans h-[387px] right-[31%] top-[17%] w-1/5">
                        <div className="md:h-[172px] h-[199px] mb-[-27px] mx-auto w-[92%] z-[1]">
                          <Img
                            className="h-[199px] m-auto object-cover rounded-lg w-full"
                            src="images/img_rectangle166_1.png"
                            alt="rectangle166"
                          />
                          <Text
                            className="absolute bg-gray-900_99 bottom-[2%] h-[33px] justify-center left-[7%] pt-1 sm:px-5 px-7 rounded-lg text-center text-white-A700 text-xl w-[134px]"
                            size="txtOpenSansRomanBold20"
                          >
                            Han Raj
                          </Text>
                        </div>
                        <div className="bg-blue_gray-100 flex flex-col items-start justify-center mt-auto mx-auto p-[7px] rounded-lg w-full">
                          <Text
                            className="md:ml-[0] ml-[42px] mt-11 text-base text-white-A700"
                            size="txtOpenSansRomanBold16"
                          >
                            India, Rajistan
                          </Text>
                          <Text
                            className="md:ml-[0] ml-[42px] mt-5 text-[15px] text-white-A700"
                            size="txtOpenSansRomanBold15"
                          >
                            ”World is full of good people, If you can’t find
                          </Text>
                          <Text
                            className="md:ml-[0] ml-[42px] my-[38px] text-[15px] text-white-A700"
                            size="txtOpenSansRomanBold15"
                          >
                            Friends , Adventure , Soulmate , Job
                          </Text>
                        </div>
                      </div>
                      <div className="absolute flex flex-col font-opensans items-center justify-start left-[1%] top-[17%] w-[92%]">
                        <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                          <div className="flex md:flex-1 flex-col gap-[30px] items-center justify-start md:mt-0 mt-[221px] w-[56%] md:w-full">
                            <div className="flex flex-row items-center justify-between w-full">
                              <Img
                                className="h-[25px] w-[25px]"
                                src="images/img_favorite_white_a700.svg"
                                alt="favorite_One"
                              />
                              <Img
                                className="h-[25px] w-[25px]"
                                src="images/img_favorite_white_a700.svg"
                                alt="favorite_Two"
                              />
                              <Img
                                className="h-[25px] w-[25px]"
                                src="images/img_favorite_white_a700.svg"
                                alt="favorite_Three"
                              />
                            </div>
                            <div className="flex flex-row items-center justify-between w-full">
                              <Img
                                className="h-[25px] w-[25px]"
                                src="images/img_thumbsup_gray_300_01.svg"
                                alt="thumbsup_Two"
                              />
                              <Img
                                className="h-[25px] w-[25px]"
                                src="images/img_thumbsup_gray_300_01.svg"
                                alt="thumbsup_Three"
                              />
                              <Img
                                className="h-[25px] w-[25px]"
                                src="images/img_thumbsup_gray_300_01.svg"
                                alt="thumbsup_Four"
                              />
                            </div>
                            <div className="flex flex-row items-center justify-between w-full">
                              <Img
                                className="h-[25px] w-[25px]"
                                src="images/img_close.svg"
                                alt="close"
                              />
                              <Img
                                className="h-[25px] w-[25px]"
                                src="images/img_close.svg"
                                alt="close_One"
                              />
                              <Img
                                className="h-[25px] w-[25px]"
                                src="images/img_close.svg"
                                alt="close_Two"
                              />
                            </div>
                          </div>
                          <div className="h-[387px] relative w-[22%] md:w-full">
                            <div className="md:h-[172px] h-[199px] mb-[-27px] mx-auto w-[92%] z-[1]">
                              <Img
                                className="h-[199px] m-auto object-cover rounded-lg w-full"
                                src="images/img_rectangle166_2.png"
                                alt="rectangle166_One"
                              />
                              <Text
                                className="absolute bg-gray-900_99 bottom-[2%] h-[33px] justify-center left-[7%] sm:px-5 px-7 py-0.5 rounded-lg text-center text-white-A700 text-xl w-[134px]"
                                size="txtOpenSansRomanBold20"
                              >
                                Victoria
                              </Text>
                            </div>
                            <div className="bg-blue_gray-100 flex flex-col items-center justify-end mt-auto mx-auto p-[7px] rounded-lg w-full">
                              <div className="flex flex-col gap-5 items-start justify-start mb-[22px] mt-[42px] w-[99%] md:w-full">
                                <div className="flex flex-row gap-[15px] items-center justify-start ml-0.5 md:ml-[0] w-[71%] md:w-full">
                                  <Img
                                    className="h-[25px] w-[25px]"
                                    src="images/img_favorite_white_a700.svg"
                                    alt="favorite_Four"
                                  />
                                  <Text
                                    className="text-base text-white-A700"
                                    size="txtOpenSansRomanBold16"
                                  >
                                    Freance, Paris
                                  </Text>
                                </div>
                                <div className="flex flex-row gap-3 items-start justify-start ml-0.5 md:ml-[0] w-full">
                                  <Img
                                    className="h-[25px] mt-2.5 w-[25px]"
                                    src="images/img_thumbsup_gray_300_01.svg"
                                    alt="thumbsup_Five"
                                  />
                                  <Text
                                    className="text-[15px] text-white-A700"
                                    size="txtOpenSansRomanBold15"
                                  >
                                    ”World is full of good people, If you can’t
                                    find
                                  </Text>
                                </div>
                                <div className="flex flex-row gap-3.5 items-start justify-start w-full">
                                  <Img
                                    className="h-[25px] mt-[9px] w-[25px]"
                                    src="images/img_close.svg"
                                    alt="close_Three"
                                  />
                                  <Text
                                    className="text-[15px] text-white-A700"
                                    size="txtOpenSansRomanBold15"
                                  >
                                    Friends , Adventure , Soulmate , Job
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <Img
                        className="absolute bottom-[4%] h-[454px] object-cover right-[0] w-[41%]"
                        src="images/img_partnership1.png"
                        alt="partnershipOne"
                      />
                      <div className="absolute flex flex-col font-poppins items-center justify-start right-[9%] top-[6%] w-[11%]">
                        <Img
                          className="h-[81px]"
                          src="images/img_checkmark.svg"
                          alt="checkmark"
                        />
                        <Text
                          className="leading-[30.00px] text-base text-black-900_01 text-center w-full"
                          size="txtPoppinsBold16Black90001"
                        >
                          Verified Profiles That You Can Trust{" "}
                        </Text>
                      </div>
                      <div className="absolute bottom-[39%] font-poppins md:h-[418px] h-[485px] right-[1%] w-[485px] sm:w-full">
                        <Img
                          className="absolute h-[388px] inset-x-[0] mx-auto top-[0]"
                          src="images/img_group589.svg"
                          alt="group589"
                        />
                        <div className="absolute bottom-[0] md:h-[418px] h-[422px] inset-x-[0] mx-auto w-full">
                          <div className="absolute bg-white-A700 flex flex-col h-full inset-y-[0] items-center justify-start left-[0] my-auto p-[23px] sm:px-5 rounded-[26px] shadow-bs3 w-[77%]">
                            <div className="flex flex-col items-start justify-start my-1.5 w-full">
                              <Img
                                className="h-[170px] sm:h-auto object-cover rounded-[24px] w-full"
                                src="images/img_rectangle17.png"
                                alt="rectangleSeventeen"
                              />
                              <Text
                                className="mt-[17px] text-black-900 text-lg tracking-[0.27px]"
                                size="txtPoppinsMedium18Black900"
                              >
                                Trip To Greece
                              </Text>
                              <div className="flex flex-row items-start justify-start mt-[9px] w-[76%] md:w-full">
                                <Text
                                  className="text-base text-blue_gray-400 tracking-[-0.08px]"
                                  size="txtPoppinsMedium16Bluegray400"
                                >
                                  14-29 June
                                </Text>
                                <Line className="bg-blue_gray-400 h-4 mb-[5px] ml-[3px] mt-0.5 w-px" />
                                <Text
                                  className="ml-3 text-base text-blue_gray-400 tracking-[-0.08px]"
                                  size="txtPoppinsMedium16Bluegray400"
                                >
                                  by Robbin joseph
                                </Text>
                              </div>
                              <Img
                                className="h-[38px] md:ml-[0] ml-[3px] mt-[19px]"
                                src="images/img_options.svg"
                                alt="options"
                              />
                              <div className="flex flex-row items-start justify-start mt-[30px] w-full">
                                <Img
                                  className="h-4 w-4"
                                  src="images/img_calendar.svg"
                                  alt="calendar"
                                />
                                <Text
                                  className="ml-[15px] text-base text-blue_gray-400 tracking-[-0.32px]"
                                  size="txtPoppinsMedium16Bluegray400"
                                >
                                  24 people going
                                </Text>
                                <Img
                                  className="h-[19px] ml-[143px] w-5"
                                  src="images/img_favorite_indigo_500.svg"
                                  alt="favorite_Five"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="absolute bg-white-A700 bottom-[13%] flex flex-col items-center justify-start p-[15px] right-[0] rounded-[18px] shadow-bs3 w-[55%]">
                            <div className="flex flex-row gap-2.5 items-start justify-start mb-[7px] w-[94%] md:w-full">
                              <div className="h-[52px] md:h-[55px] mt-[3px] relative w-[23%]">
                                <div className="bg-white-A700_75 h-[52px] m-auto rounded-[26px] shadow-bs4 w-full"></div>
                                <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
                                  <Img
                                    className="h-[52px] md:h-auto object-cover rounded-bl-[26px] rounded-br-[26px] w-full"
                                    src="images/img_image32.png"
                                    alt="imageThirtyTwo"
                                  />
                                </div>
                              </div>
                              <div className="flex flex-col items-start justify-start w-[73%]">
                                <Text
                                  className="ml-0.5 md:ml-[0] text-blue_gray-400 text-sm tracking-[-0.49px]"
                                  size="txtPoppinsMedium14"
                                >
                                  Ongoing
                                </Text>
                                <Text
                                  className="mt-[3px] text-black-900 text-lg tracking-[-0.27px]"
                                  size="txtPoppinsMedium18Black900"
                                >
                                  Trip to rome
                                </Text>
                                <Text
                                  className="mt-[13px] text-black-900 text-sm tracking-[-0.77px]"
                                  size="txtGilroyExtraBold14"
                                >
                                  <span className="text-deep_purple-300 font-poppins text-left font-medium">
                                    40%
                                  </span>
                                  <span className="text-black-900 font-poppins text-left font-medium">
                                    {" "}
                                    completed
                                  </span>
                                </Text>
                                <div className="h-[5px] ml-0.5 md:ml-[0] mt-2.5 overflow-hidden relative w-[99%]">
                                  <div className="w-full h-full absolute bg-gray_100 rounded-[2px]"></div>
                                  <div
                                    className="h-full absolute bg-deep_purple_300  rounded-[2px]"
                                    style={{ width: "47%" }}
                                  ></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <Button
                        className="absolute bottom-[36%] cursor-pointer font-bold font-dmsans inset-x-[0] leading-[normal] min-w-[296px] mx-auto text-center text-lg"
                        shape="round"
                        color="amber_700"
                        size="lg"
                      >
                        Find Travel Patner
                      </Button>
                    </div>
                  </div>
                  <div className="absolute md:h-[544px] h-[570px] right-[3%] top-[0] w-[53%] md:w-full">
                    <div className="absolute bottom-[0] h-[544px] right-[0] w-[83%] sm:w-full">
                      <Img
                        className="absolute h-[156px] right-[0] top-[4%]"
                        src="images/img_plane.svg"
                        alt="plane"
                      />
                      <Img
                        className="absolute h-[544px] inset-y-[0] left-[0] my-auto object-cover w-[87%]"
                        src="images/img_traveller1.png"
                        alt="travellerOne"
                      />
                    </div>
                    <Img
                      className="absolute h-[156px] left-[0] top-[0]"
                      src="images/img_plane.svg"
                      alt="plane_One"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="absolute bg-cover bg-no-repeat flex flex-col h-[639px] items-start justify-start left-[0] pb-[140px] md:px-10 sm:px-5 px-[140px] top-[0] w-[39%]"
              style={{ backgroundImage: "url('images/img_group15.png')" }}
            >
              <Img
                className="h-[87px] md:h-auto mb-[412px] object-cover w-[73%]"
                src="images/img_myloveexpreelogo.png"
                alt="myloveexpreelog"
              />
            </div>
            <Img
              className="absolute h-[574px] inset-x-[0] mx-auto object-cover top-[41%] w-full"
              src="images/img_image33.png"
              alt="imageThirtyThree"
            />
          </div>
        </div>
        <Text
          className="capitalize md:ml-[0] ml-[441px] mr-[508px] mt-[13px] sm:text-[40px] md:text-[46px] text-[50px] text-blue_gray-900 text-center"
          size="txtVolkhovBold50"
        >
          Instagram feeds
        </Text>
        <div className="flex flex-col font-dmsans gap-[41px] items-center max-w-[1392px] mt-0.5 mx-auto md:px-5 px-[21px] w-full">
          <Img
            className="h-[532px] sm:h-auto object-cover w-[96%] md:w-full"
            src="images/img_image34.png"
            alt="imageThirtyFour"
          />
          <a
            href="javascript:"
            className="bg-amber-700 h-[55px] justify-center sm:px-5 px-[35px] py-[15px] rounded-[10px] text-center text-lg text-shadow-ts text-white-A700 w-[245px]"
          >
            <Text size="txtDMSansBold18">Read More</Text>
          </a>
        </div>
        <div className="flex flex-col font-poppins items-end max-w-[1392px] mt-[34px] mx-auto pl-[42px] md:px-5 w-full">
          <div className="md:h-[1056px] h-[1170px] sm:h-[767px] relative w-full">
            <div className="absolute bottom-[0] flex md:flex-col flex-row md:gap-10 items-start justify-between right-[3%] w-[89%]">
              <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-[65%] md:w-full">
                <div className="flex flex-col gap-6 items-start justify-start w-[30%] md:w-full">
                  <div className="h-[45px] relative w-full">
                    <Text
                      className="m-auto text-3xl sm:text-[26px] md:text-[28px] text-blue_gray-900_02"
                      size="txtPoppinsMedium30"
                    >
                      MyLoveExpress
                    </Text>
                    <Text
                      className="absolute h-full inset-[0] justify-center m-auto text-3xl sm:text-[26px] md:text-[28px] text-blue_gray-900_02 w-max"
                      size="txtPoppinsMedium30"
                    >
                      MyLoveExpress
                    </Text>
                  </div>
                  <div className="h-12 relative w-[92%]">
                    <Text
                      className="leading-[124.50%] m-auto text-[13px] text-blue_gray-600"
                      size="txtPoppinsMedium13"
                    >
                      <>
                        Book your trip in minute, get full
                        <br />
                        Control for much longer.
                      </>
                    </Text>
                    <Text
                      className="absolute h-full inset-[0] justify-center leading-[124.50%] m-auto text-[13px] text-blue_gray-600"
                      size="txtPoppinsMedium13"
                    >
                      <>
                        Book your trip in minute, get full
                        <br />
                        Control for much longer.
                      </>
                    </Text>
                  </div>
                </div>
                <List
                  className="sm:flex-col flex-row md:gap-10 gap-[72px] grid sm:grid-cols-1 grid-cols-3 w-[63%] md:w-full"
                  orientation="horizontal"
                >
                  <div className="flex flex-col items-start justify-start w-full">
                    <div className="h-8 relative w-full">
                      <Text
                        className="m-auto sm:text-[17px] md:text-[19px] text-[21px] text-black-900"
                        size="txtPoppinsBold21"
                      >
                        Company
                      </Text>
                      <Text
                        className="absolute h-full inset-[0] justify-center m-auto sm:text-[17px] md:text-[19px] text-[21px] text-black-900 w-max"
                        size="txtPoppinsBold21"
                      >
                        Company
                      </Text>
                    </div>
                    <div className="h-[27px] md:h-[52px] mt-[25px] relative w-[51%]">
                      <Text
                        className="m-auto text-blue_gray-600 text-lg"
                        size="txtPoppinsMedium18"
                      >
                        About
                      </Text>
                      <Text
                        className="absolute h-full inset-[0] justify-center m-auto text-blue_gray-600 text-lg w-max"
                        size="txtPoppinsMedium18"
                      >
                        About
                      </Text>
                    </div>
                    <div className="h-[27px] md:h-[34px] mt-[7px] relative w-[67%]">
                      <Text
                        className="m-auto text-blue_gray-600 text-lg"
                        size="txtPoppinsMedium18"
                      >
                        Careers
                      </Text>
                      <Text
                        className="absolute h-full inset-[0] justify-center m-auto text-blue_gray-600 text-lg w-max"
                        size="txtPoppinsMedium18"
                      >
                        Careers
                      </Text>
                    </div>
                    <div className="h-[27px] md:h-[34px] mt-[7px] relative w-[57%]">
                      <Text
                        className="m-auto text-blue_gray-600 text-lg"
                        size="txtPoppinsMedium18"
                      >
                        Mobile
                      </Text>
                      <Text
                        className="absolute h-full inset-[0] justify-center m-auto text-blue_gray-600 text-lg w-max"
                        size="txtPoppinsMedium18"
                      >
                        Mobile
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start w-full">
                    <div className="h-8 relative w-full">
                      <Text
                        className="m-auto sm:text-[17px] md:text-[19px] text-[21px] text-black-900"
                        size="txtPoppinsBold21"
                      >
                        Contact
                      </Text>
                      <Text
                        className="absolute h-full inset-[0] justify-center m-auto sm:text-[17px] md:text-[19px] text-[21px] text-black-900 w-max"
                        size="txtPoppinsBold21"
                      >
                        Contact
                      </Text>
                    </div>
                    <div className="h-[27px] md:h-[53px] mt-[26px] relative w-[97%]">
                      <Text
                        className="m-auto text-blue_gray-600 text-lg"
                        size="txtPoppinsMedium18"
                      >
                        Help/FAQ
                      </Text>
                      <Text
                        className="absolute h-full inset-[0] justify-center m-auto text-blue_gray-600 text-lg w-max"
                        size="txtPoppinsMedium18"
                      >
                        Help/FAQ
                      </Text>
                    </div>
                    <div className="h-[27px] md:h-[35px] mt-2 relative w-[54%]">
                      <Text
                        className="m-auto text-blue_gray-600 text-lg"
                        size="txtPoppinsMedium18"
                      >
                        Press
                      </Text>
                      <Text
                        className="absolute h-full inset-[0] justify-center m-auto text-blue_gray-600 text-lg w-max"
                        size="txtPoppinsMedium18"
                      >
                        Press
                      </Text>
                    </div>
                    <div className="h-[27px] md:h-[34px] mt-[7px] relative w-[84%]">
                      <Text
                        className="m-auto text-blue_gray-600 text-lg"
                        size="txtPoppinsMedium18"
                      >
                        Affilates
                      </Text>
                      <Text
                        className="absolute h-full inset-[0] justify-center m-auto text-blue_gray-600 text-lg w-max"
                        size="txtPoppinsMedium18"
                      >
                        Affilates
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start w-full">
                    <div className="h-8 relative w-[49%]">
                      <Text
                        className="m-auto sm:text-[17px] md:text-[19px] text-[21px] text-black-900"
                        size="txtPoppinsBold21"
                      >
                        More
                      </Text>
                      <Text
                        className="absolute h-full inset-[0] justify-center m-auto sm:text-[17px] md:text-[19px] text-[21px] text-black-900 w-max"
                        size="txtPoppinsBold21"
                      >
                        More
                      </Text>
                    </div>
                    <div className="h-[27px] md:h-[54px] mt-[27px] relative w-[84%]">
                      <Text
                        className="m-auto text-blue_gray-600 text-lg"
                        size="txtPoppinsMedium18"
                      >
                        Airlinefees
                      </Text>
                      <Text
                        className="absolute h-full inset-[0] justify-center m-auto text-blue_gray-600 text-lg w-max"
                        size="txtPoppinsMedium18"
                      >
                        Airlinefees
                      </Text>
                    </div>
                    <div className="md:h-9 h-[27px] mt-[9px] relative w-1/2">
                      <Text
                        className="m-auto text-blue_gray-600 text-lg"
                        size="txtPoppinsMedium18"
                      >
                        Airline
                      </Text>
                      <Text
                        className="absolute h-full inset-[0] justify-center m-auto text-blue_gray-600 text-lg w-max"
                        size="txtPoppinsMedium18"
                      >
                        Airline
                      </Text>
                    </div>
                    <div className="h-[27px] md:h-[37px] mt-2.5 relative w-full">
                      <Text
                        className="m-auto text-blue_gray-600 text-lg"
                        size="txtPoppinsMedium18"
                      >
                        Low fare tips
                      </Text>
                      <Text
                        className="absolute h-full inset-[0] justify-center m-auto text-blue_gray-600 text-lg w-max"
                        size="txtPoppinsMedium18"
                      >
                        Low fare tips
                      </Text>
                    </div>
                  </div>
                </List>
              </div>
              <div className="md:h-[496px] h-[555px] md:mt-0 mt-[5px] relative w-[30%] md:w-full">
                <div className="absolute h-[147px] md:h-[76px] left-[0] top-[0] w-[62%]">
                  <div className="absolute bg-white-A700 h-[41px] right-[16%] rounded-[20px] shadow-bs2 top-[1%] w-[41px]"></div>
                  <div className="absolute bg-white-A700 flex h-[41px] justify-end left-[1%] rounded-[20px] shadow-bs2 top-[0] w-[41px]">
                    <Img
                      className="h-3 mb-3 mt-auto mx-auto"
                      src="images/img_facebookicon.svg"
                      alt="facebookicon"
                    />
                    <Button
                      className="absolute flex h-[41px] inset-[0] items-center justify-center m-auto rounded-[20px] w-[41px]"
                      color="white_A700"
                      size="sm"
                    >
                      <Img src="images/img_facebookicon.svg" alt="social" />
                    </Button>
                  </div>
                  <div className="absolute h-[45px] left-[32%] top-[0] w-[45px]">
                    <Button
                      className="flex h-[45px] items-center justify-center m-auto rounded-[22px] w-[45px]"
                      variant="gradient"
                      color="blue_100_white_A700_00"
                    >
                      <Img
                        className="h-4"
                        src="images/img_info.svg"
                        alt="info"
                      />
                    </Button>
                    <Button
                      className="absolute flex h-[45px] inset-[0] items-center justify-center m-auto rounded-[22px] w-[45px]"
                      variant="gradient"
                      color="blue_100_white_A700_00"
                    >
                      <Img
                        className="h-4"
                        src="images/img_info.svg"
                        alt="info_One"
                      />
                    </Button>
                  </div>
                  <div className="absolute bottom-[0] flex h-[76px] inset-x-[0] justify-end mx-auto w-full">
                    <Text
                      className="absolute left-[1%] text-blue_gray-600 text-xl top-[0] tracking-[0.10px]"
                      size="txtPoppinsMedium20"
                    >
                      Discover our app
                    </Text>
                    <div className="absolute bg-black-900 bottom-[0] flex flex-row gap-[5px] items-center justify-start left-[0] p-[7px] rounded-[17px] w-1/2">
                      <Img
                        className="h-5 ml-2.5 w-5"
                        src="images/img_close_blue_500.svg"
                        alt="close_Four"
                      />
                      <Img
                        className="h-3.5"
                        src="images/img_settings_white_a700.svg"
                        alt="settings_One"
                      />
                    </div>
                    <Img
                      className="h-[35px] ml-auto mt-auto"
                      src="images/img_television_black_900.svg"
                      alt="television_One"
                    />
                    <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
                      <div className="flex flex-col gap-[11px] items-start justify-start w-full">
                        <Text
                          className="ml-0.5 md:ml-[0] text-blue_gray-600 text-xl tracking-[0.10px]"
                          size="txtPoppinsMedium20"
                        >
                          Discover our app
                        </Text>
                        <div className="flex flex-row gap-[7px] items-center justify-between w-full">
                          <div className="bg-black-900 flex flex-row gap-[5px] items-center justify-start p-[7px] rounded-[17px]">
                            <Img
                              className="h-5 ml-2.5 w-5"
                              src="images/img_close_blue_500.svg"
                              alt="close_Five"
                            />
                            <Img
                              className="h-3.5"
                              src="images/img_settings_white_a700.svg"
                              alt="settings_Two"
                            />
                          </div>
                          <Img
                            className="h-[35px]"
                            src="images/img_television_black_900.svg"
                            alt="television_Two"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Img
                  className="absolute bottom-[0] h-[496px] object-cover right-[0] rotate-[180deg] w-[52%]"
                  src="images/img_ellipse8.png"
                  alt="ellipseEight"
                />
              </div>
            </div>
            <div className="absolute md:h-[1056px] sm:h-[767px] h-[768px] inset-x-[0] mx-auto top-[0] w-full">
              <div className="absolute flex flex-col gap-5 h-full inset-y-[0] justify-start my-auto right-[0] w-[82%]">
                <div className="h-[62px] md:ml-[0] ml-[964px] relative w-[7%]">
                  <div className="h-[62px] m-auto w-full">
                    <div className="bg-gradient1  h-[62px] m-auto rounded-[35px] w-full"></div>
                    <Img
                      className="absolute h-[38px] object-cover right-[13%] top-[15%]"
                      src="images/img_send21.png"
                      alt="sendTwentyOne"
                    />
                  </div>
                  <div className="absolute h-[62px] inset-[0] justify-center m-auto w-full">
                    <div className="bg-gradient1  h-[62px] m-auto rounded-[35px] w-full"></div>
                    <Img
                      className="absolute h-[38px] object-cover right-[13%] top-[15%]"
                      src="images/img_send21.png"
                      alt="sendTwentyOne_One"
                    />
                  </div>
                </div>
                <div className="flex flex-col md:gap-10 gap-[67px] justify-start w-full">
                  <div className="h-24 relative w-[78%] md:w-full">
                    <Text
                      className="leading-[54.00px] m-auto sm:text-[29px] md:text-[31px] text-[33px] text-blue_gray-600 text-center"
                      size="txtPoppinsSemiBold33"
                    >
                      <>
                        Subscribe to get information, latest news and other
                        <br />
                        interesting offers about Cobham
                      </>
                    </Text>
                    <Text
                      className="absolute h-full inset-[0] justify-center leading-[54.00px] m-auto sm:text-[29px] md:text-[31px] text-[33px] text-blue_gray-600 text-center"
                      size="txtPoppinsSemiBold33"
                    >
                      <>
                        Subscribe to get information, latest news and other
                        <br />
                        interesting offers about Cobham
                      </>
                    </Text>
                  </div>
                  <div className="flex md:flex-col flex-row font-montserrat md:gap-5 items-start justify-end ml-24 md:ml-[0] w-[92%] md:w-full">
                    <div className="bg-white-A700 md:h-[522px] h-[61px] mb-[461px] relative rounded-[10px] w-[42%] md:w-full">
                      <div className="flex flex-row gap-2 h-full items-start justify-center ml-[45px] mt-[5px] w-1/4">
                        <Img
                          className="h-4 mb-[9px]"
                          src="images/img_checkmark_blue_gray_800.svg"
                          alt="checkmark_One"
                        />
                        <Text
                          className="mt-2.5 text-blue_gray-800 text-sm"
                          size="txtMontserratRegular14"
                        >
                          Your email
                        </Text>
                      </div>
                      <div className="absolute bg-white-A700 flex flex-row gap-2 h-full inset-[0] items-start justify-center m-auto p-[5px] rounded-[10px] w-full">
                        <Img
                          className="h-4 mb-8 ml-[39px]"
                          src="images/img_checkmark_blue_gray_800.svg"
                          alt="checkmark_Two"
                        />
                        <Text
                          className="mt-2.5 text-blue_gray-800 text-sm"
                          size="txtMontserratRegular14"
                        >
                          Your email
                        </Text>
                      </div>
                    </div>
                    <div className="bg-gradient2  font-opensans md:h-[58px] h-[61px] ml-6 md:ml-[0] relative rounded-[10px] w-[18%] md:w-full">
                      <Text
                        className="m-auto text-[17px] text-center text-white-A700"
                        size="txtOpenSansRomanRegular17"
                      >
                        Subscribe
                      </Text>
                      <div className="absolute bg-gradient2  flex flex-col h-full inset-[0] items-center justify-center m-auto p-[17px] rounded-[10px] w-full">
                        <Text
                          className="text-[17px] text-center text-white-A700"
                          size="txtOpenSansRomanRegular17"
                        >
                          Subscribe
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col font-roboto md:gap-10 gap-[329px] justify-start ml-56 md:ml-[0] md:mt-0 mt-[13px] w-[17%] md:w-full">
                      <div className="flex flex-col items-end justify-start md:ml-[0] ml-[50px] w-[70%] md:w-full">
                        <List
                          className="flex flex-col gap-[3px] w-3/4"
                          orientation="vertical"
                        >
                          <div className="flex flex-row gap-[22px] items-start justify-between my-0 w-full">
                            <div className="md:h-7 h-[26px] mb-0.5 relative w-[16%]">
                              <Text
                                className="m-auto text-[22px] text-gray-300 sm:text-lg md:text-xl"
                                size="txtRobotoRegular22Gray300"
                              >
                                +
                              </Text>
                              <Text
                                className="absolute h-full inset-[0] justify-center m-auto text-[22px] text-gray-300 sm:text-lg md:text-xl w-max"
                                size="txtRobotoRegular22Gray300"
                              >
                                +
                              </Text>
                            </div>
                            <Text
                              className="mt-0.5 text-[22px] text-gray-300 sm:text-lg md:text-xl"
                              size="txtRobotoRegular22Gray300"
                            >
                              +
                            </Text>
                            <Text
                              className="text-[22px] text-deep_orange-400 sm:text-lg md:text-xl"
                              size="txtRobotoRegular22"
                            >
                              +
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[22px] items-start justify-between my-0 w-full">
                            <div className="md:h-7 h-[26px] mb-0.5 relative w-[16%]">
                              <Text
                                className="m-auto text-[22px] text-gray-300 sm:text-lg md:text-xl"
                                size="txtRobotoRegular22Gray300"
                              >
                                +
                              </Text>
                              <Text
                                className="absolute h-full inset-[0] justify-center m-auto text-[22px] text-gray-300 sm:text-lg md:text-xl w-max"
                                size="txtRobotoRegular22Gray300"
                              >
                                +
                              </Text>
                            </div>
                            <Text
                              className="mt-0.5 text-[22px] text-gray-300 sm:text-lg md:text-xl"
                              size="txtRobotoRegular22Gray300"
                            >
                              +
                            </Text>
                            <Text
                              className="text-[22px] text-gray-300 sm:text-lg md:text-xl"
                              size="txtRobotoRegular22Gray300"
                            >
                              +
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[22px] items-start justify-between my-0 w-full">
                            <div className="md:h-7 h-[26px] mb-0.5 relative w-[16%]">
                              <Text
                                className="m-auto text-[22px] text-deep_purple-A200 sm:text-lg md:text-xl"
                                size="txtRobotoRegular22DeeppurpleA200"
                              >
                                +
                              </Text>
                              <Text
                                className="absolute h-full inset-[0] justify-center m-auto text-[22px] text-deep_purple-A200 sm:text-lg md:text-xl w-max"
                                size="txtRobotoRegular22DeeppurpleA200"
                              >
                                +
                              </Text>
                            </div>
                            <Text
                              className="mt-0.5 text-[22px] text-gray-300 sm:text-lg md:text-xl"
                              size="txtRobotoRegular22Gray300"
                            >
                              +
                            </Text>
                            <Text
                              className="text-[22px] text-gray-300 sm:text-lg md:text-xl"
                              size="txtRobotoRegular22Gray300"
                            >
                              +
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[22px] items-start justify-between my-0 w-full">
                            <div className="md:h-7 h-[26px] mb-0.5 relative w-[16%]">
                              <Text
                                className="m-auto text-[22px] text-gray-300 sm:text-lg md:text-xl"
                                size="txtRobotoRegular22Gray300"
                              >
                                +
                              </Text>
                              <Text
                                className="absolute h-full inset-[0] justify-center m-auto text-[22px] text-gray-300 sm:text-lg md:text-xl w-max"
                                size="txtRobotoRegular22Gray300"
                              >
                                +
                              </Text>
                            </div>
                            <Text
                              className="mt-0.5 text-[22px] text-gray-300 sm:text-lg md:text-xl"
                              size="txtRobotoRegular22Gray300"
                            >
                              +
                            </Text>
                            <Text
                              className="text-[22px] text-gray-300 sm:text-lg md:text-xl"
                              size="txtRobotoRegular22Gray300"
                            >
                              +
                            </Text>
                          </div>
                        </List>
                        <div className="flex flex-row items-start justify-between mt-[3px] w-full">
                          <div className="h-[26px] relative w-[12%]">
                            <Text
                              className="m-auto text-[22px] text-gray-300 sm:text-lg md:text-xl"
                              size="txtRobotoRegular22Gray300"
                            >
                              +
                            </Text>
                            <Text
                              className="absolute h-full inset-[0] justify-center m-auto text-[22px] text-gray-300 sm:text-lg md:text-xl w-max"
                              size="txtRobotoRegular22Gray300"
                            >
                              +
                            </Text>
                          </div>
                          <Text
                            className="mb-0.5 text-[22px] text-gray-300 sm:text-lg md:text-xl"
                            size="txtRobotoRegular22Gray300"
                          >
                            +
                          </Text>
                          <Text
                            className="mt-0.5 text-[22px] text-gray-300 sm:text-lg md:text-xl"
                            size="txtRobotoRegular22Gray300"
                          >
                            +
                          </Text>
                          <Text
                            className="text-[22px] text-gray-300 sm:text-lg md:text-xl"
                            size="txtRobotoRegular22Gray300"
                          >
                            +
                          </Text>
                        </div>
                      </div>
                      <Text
                        className="text-[22px] text-gray-300 sm:text-lg md:text-xl"
                        size="txtRobotoRegular22Gray300"
                      >
                        +
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="absolute bg-cover bg-no-repeat flex flex-col h-[365px] items-center justify-start left-[0] top-[1%] w-[94%]"
                style={{ backgroundImage: "url('images/img_group40.svg')" }}
              >
                <div
                  className="bg-cover bg-no-repeat h-[365px] md:h-[61px] p-[70px] md:px-10 sm:px-5 relative w-full"
                  style={{ backgroundImage: "url('images/img_group40.svg')" }}
                >
                  <div className="absolute bg-white-A700 bottom-[19%] flex flex-col inset-x-[0] items-start justify-end mx-auto p-[18px] rounded-bl-lg rounded-tl-lg w-[26%]">
                    <div className="h-[21px] md:h-[23px] md:ml-[0] ml-[15px] mt-0.5 relative w-[69%]">
                      <Text
                        className="m-auto text-blue_gray-100_02 text-sm"
                        size="txtPoppinsMedium14Bluegray10002"
                      >
                        myloveexpress@gmail.com
                      </Text>
                      <Text
                        className="absolute h-full inset-[0] justify-center m-auto text-blue_gray-100_02 text-sm w-max"
                        size="txtPoppinsMedium14Bluegray10002"
                      >
                        myloveexpress@gmail.com
                      </Text>
                    </div>
                  </div>
                  <div
                    className="absolute bg-cover bg-no-repeat bottom-[19%] flex flex-col h-[61px] items-center justify-start right-[37%] w-[6%]"
                    style={{ backgroundImage: "url('images/img_group49.svg')" }}
                  >
                    <Img
                      className="h-[61px]"
                      src="images/img_group49.svg"
                      alt="rectangle173"
                    />
                  </div>
                </div>
              </div>
              <div className="absolute bottom-[26%] flex md:flex-col flex-row md:gap-5 inset-x-[0] items-center justify-start mx-auto w-4/5">
                <Img
                  className="h-[130px] md:h-auto object-cover w-[130px]"
                  src="images/img_image27.png"
                  alt="imageTwentySeven"
                />
                <Img
                  className="h-[110px] sm:h-auto md:ml-[0] ml-[77px] object-cover w-[17%] md:w-full"
                  src="images/img_image28.png"
                  alt="imageTwentyEight"
                />
                <div className="h-[162px] md:ml-[0] ml-[50px] relative w-[23%] md:w-full">
                  <div className="absolute bg-white-A700 bottom-[21%] h-[86px] inset-x-[0] mx-auto rounded-[10px] shadow-bs3 w-full"></div>
                  <Img
                    className="absolute h-[162px] inset-[0] justify-center m-auto object-cover w-[162px]"
                    src="images/img_image29.png"
                    alt="imageTwentyNine"
                  />
                </div>
                <Img
                  className="h-8 sm:h-auto md:ml-[0] ml-[47px] object-cover w-[16%] md:w-full"
                  src="images/img_image30.png"
                  alt="imageThirty"
                />
                <Img
                  className="h-[21px] sm:h-auto md:ml-[0] ml-[99px] object-cover w-[9%] md:w-full"
                  src="images/img_image31.png"
                  alt="imageThirtyOne"
                />
              </div>
              <div
                className="absolute bg-cover bg-no-repeat bottom-[14%] flex flex-col h-[39px] items-center justify-start right-[15%] w-[3%]"
                style={{ backgroundImage: "url('images/img_group42.svg')" }}
              >
                <Img
                  className="h-[39px] w-9"
                  src="images/img_group42.svg"
                  alt="trash"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainFramePage;
