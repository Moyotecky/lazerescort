import React from "react";

const shapes = {
  round: "rounded",
  square: "rounded-none",
  circle: "rounded-[50%]",
} as const;
const variants = {
  outline: {
    orange_600: "border-2 border-orange-600 border-solid text-black-900",
    lime_800: "bg-gradient  border border-lime-800 border-solid text-gray-900",
    red_300: "bg-gradient1  border border-red-300 border-solid text-white-A700",
    black_900: "border border-black-900 border-solid text-black-900",
    pink_50: "border border-pink-50 border-solid text-purple-300",
    gray_200_11:
      "border-gray-200_11 border-solid border-t text-blue_gray-600_01",
  },
  fill: {
    lime_900: "bg-lime-900 text-white-A700",
    orange_600_90: "bg-orange-600_90 text-white-A700",
    white_A700_75: "bg-white-A700_75 text-blue-500",
    blue_gray_400: "bg-blue_gray-400 text-white-A700",
    red_A700_02: "bg-red-A700_02 shadow-bs text-white-A700",
    red_400_02: "bg-red-400_02",
    green_400_01: "bg-green-400_01",
    blue_gray_50: "bg-blue_gray-50 text-blue_gray-600",
    white_A700: "bg-white-A700 text-purple-400",
    red_400_03: "bg-red-400_03 text-white-A700",
    black_900_cc: "bg-black-900_cc text-gray-500_04",
    light_green_600_01: "bg-light_green-600_01 text-gray-800_11",
    orange_600: "bg-orange-600 text-white-A700",
    amber_A200_01: "bg-amber-A200_01 shadow-bs3 text-purple-500",
    black_900_4c_01: "bg-black-900_4c_01 text-white-A700",
    red_A200: "bg-red-A200 text-white-A700",
    pink_700: "bg-pink-700 text-white-A700",
    gray_800: "bg-gray-800 text-white-A700",
    gray_400_4f: "bg-gray-400_4f",
  },
  gradient: {
    purple_400_02_purple_500_02: "bg-gradient4  shadow-bs2",
    deep_purple_400_purple_400_04: "bg-gradient6  text-white-A700",
    orange_900_orange_900: "bg-gradient3  text-black-900",
    orange_600_yellow_900: "bg-gradient2  shadow-bs2",
    yellow_700_01_yellow_800_01: "bg-gradient5 ",
  },
} as const;
const sizes = {
  xs: "py-[3px]",
  sm: "p-1",
  md: "p-[7px]",
  lg: "p-[11px]",
  xl: "p-[15px]",
  "2xl": "p-[18px]",
  "3xl": "p-[25px] sm:px-5",
} as const;

export type ButtonProps = Omit<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >,
  "onClick"
> &
  Partial<{
    className: string;
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
    color: string;
    leftIcon: React.ReactNode;
    rightIcon: React.ReactNode;
    onClick: () => void;
  }>;

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

export { Button };
