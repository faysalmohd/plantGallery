import * as React from "react";
import { Dimensions } from "react-native";
import Svg, { Path } from "react-native-svg";

// const { width } = Dimensions.get("window");  

function SvgComponentBackSplash(props) {
  return (
    <Svg
      width={1000} 
      height={300} 
      viewBox="0 100 500 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M500 0c0 138.071-111.929 250-250 250S0 138.071 0 0h500z"
        fill="#000"
      />
    </Svg>
  );
}

export default SvgComponentBackSplash;
