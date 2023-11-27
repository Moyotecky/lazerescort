import React from "react";

import { Img, Text } from "components";

type Header3Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const Header3: React.FC<Header3Props> = (props) => {
  return (
    <>
      <header className={props.className}>
        <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mx-auto my-1 p-[3px] w-[91%]">
          <div className="header-row mt-px">
            <Img
              className="h-12"
              src="images/img_linkmargin.svg"
              alt="linkmargin"
            />
            <div className="mobile-menu">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div className="flex flex-col sm:hidden items-center justify-start">
            <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start w-full">
              <div className="flex sm:flex-1 flex-col items-center justify-start px-[19px] w-[27%] sm:w-full">
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
              <div className="flex flex-col items-center justify-start p-2">
                <Text className="text-lg text-white-A700" size="txtCabinBold18">
                  Dashboard
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start p-2">
                <Text className="text-lg text-white-A700" size="txtCabinBold18">
                  Profile
                </Text>
              </div>
              <div className="flex flex-col items-center justify-end p-[7px]">
                <Text
                  className="mt-1 text-lg text-white-A700"
                  size="txtCabinBold18"
                >
                  Messages
                </Text>
              </div>
            </div>
          </div>
          <Img
            className="h-[38px] sm:hidden mr-5"
            src="images/img_listmargin.svg"
            alt="listmargin"
          />
        </div>
      </header>
    </>
  );
};

Header3.defaultProps = {};

export default Header3;
