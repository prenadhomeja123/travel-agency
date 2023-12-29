import React from "react";
import PropTypes from "prop-types";

const shapes = { circle: "rounded-[50%]", round: "rounded-[10px]" };
const variants = {
  outline: {
    blue_gray_900_01:
      "border border-blue_gray-900_01 border-solid text-blue_gray-900_01",
  },
  fill: {
    red_400: "bg-red-400 shadow-bs1",
    white_A700: "bg-white-A700 shadow-bs2",
    amber_700: "bg-amber-700 shadow-bs text-white-A700",
  },
  gradient: { blue_100_white_A700_00: "bg-gradient  shadow-bs2" },
};
const sizes = { xs: "p-2", sm: "p-3", md: "p-[15px]", lg: "p-[18px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "md",
  variant = "fill",
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

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["circle", "round"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg"]),
  variant: PropTypes.oneOf(["outline", "fill", "gradient"]),
  color: PropTypes.oneOf([
    "blue_gray_900_01",
    "red_400",
    "white_A700",
    "amber_700",
    "blue_100_white_A700_00",
  ]),
};

export { Button };
