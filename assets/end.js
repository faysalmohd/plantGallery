import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponentEnd(props) {
  return (
    <Svg
      width="70px"
      height="70px"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 0a2 2 0 00-2 2v.036l-.031-.018a2 2 0 10-2 3.464L4 5.5l-.031.018a2 2 0 002 3.464L6 8.964V9a2 2 0 104 0v-.036l.031.018a2 2 0 102-3.464L12 5.5l.031-.018a2 2 0 10-2-3.464L10 2.036V2a2 2 0 00-2-2zm0 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
        fill="#000"
      />
      <Path
        d="M7 16H6a5 5 0 01-5-5v-1h1a5 5 0 015 5v1zM10 16H9v-1a5 5 0 015-5h1v1a5 5 0 01-5 5z"
        fill="#000"
      />
    </Svg>
  )
}

export default SvgComponentEnd
