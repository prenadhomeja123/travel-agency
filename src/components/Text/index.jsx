import React from "react";

const sizeClasses = {
  txtPoppinsBold16: "font-bold font-poppins",
  txtPoppinsRegular16Bluegray600: "font-normal font-poppins",
  txtGilroyExtraBold14: "font-gilroyextrabold font-normal",
  txtVolkhovBold40: "font-bold font-volkhov",
  txtPoppinsMedium13: "font-medium font-poppins",
  txtOpenSansRomanBold16: "font-bold font-opensans",
  txtPoppinsMedium14: "font-medium font-poppins",
  txtRobotoRegular22DeeppurpleA200: "font-normal font-roboto",
  txtOpenSansRomanBold15: "font-bold font-opensans",
  txtMontserratRegular14: "font-montserrat font-normal",
  txtPoppinsSemiBold33: "font-poppins font-semibold",
  txtVolkhovRegular35: "font-normal font-volkhov",
  txtPoppinsMedium30: "font-medium font-poppins",
  txtPoppinsBold16Black90001: "font-bold font-poppins",
  txtPoppinsMedium17: "font-medium font-poppins",
  txtPoppinsMedium18Black900: "font-medium font-poppins",
  txtPoppinsMedium18: "font-medium font-poppins",
  txtRobotoRegular22: "font-normal font-roboto",
  txtPoppinsMedium16: "font-medium font-poppins",
  txtVolkhovBold50: "font-bold font-volkhov",
  txtDMSansBold17: "font-bold font-dmsans",
  txtVolkhovBold70: "font-bold font-volkhov",
  txtPoppinsBold20: "font-bold font-poppins",
  txtPoppinsMedium16Bluegray400: "font-medium font-poppins",
  txtPoppinsBold21: "font-bold font-poppins",
  txtRobotoRegular22Red600: "font-normal font-roboto",
  txtDMSansBold18: "font-bold font-dmsans",
  txtPoppinsRegular16: "font-normal font-poppins",
  txtOpenSansRomanRegular17: "font-normal font-opensans",
  txtPoppinsMedium20: "font-medium font-poppins",
  txtOpenSansRomanBold20: "font-bold font-opensans",
  txtPoppinsMedium14Bluegray10002: "font-medium font-poppins",
  txtRobotoRegular22Gray300: "font-normal font-roboto",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
