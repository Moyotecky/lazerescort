import React from "react";

import { Button, Img } from "components";

const LoginbannermasksvgPage: React.FC = () => {
  return (
    <>
      <div
        className="bg-cover bg-no-repeat flex flex-col h-[1032px] items-end justify-end mx-auto p-3 w-full"
        style={{
          backgroundImage: "url('images/img_loginbannermasksvg_black_900.png')",
        }}
      >
        <div className="flex flex-col md:gap-10 gap-[554px] justify-start mr-[249px] mt-10 md:px-5 w-[66%] md:w-full">
          <Img
            className="h-[358px]"
            src="images/img_divlwadblockh90.svg"
            alt="divlwpageconten"
          />
          <Button
            className="flex h-14 items-center justify-center md:ml-[0] ml-[990px] rounded-[50%] w-14"
            shape="circle"
            size="lg"
            variant="gradient"
            color="orange_600_yellow_900"
          >
            <Img
              className="h-8"
              src="images/img_arrowup_white_a700.svg"
              alt="arrowup"
            />
          </Button>
        </div>
      </div>
    </>
  );
};

export default LoginbannermasksvgPage;
