import React from 'react';

/** Box displays a div with
 * background color, width, and height based on the props passed to it.
 *
 * Props:
 * -height: Number as string
 * -width: Number as string
 * -color: String
 * -id: String
 *
 * State:
 * -None
 *
 * BoxList -> Box
*/

function Box({ height, width, color, id }) {
  const boxStyle = {
    height: height + "px",
    width: width + "px",
    backgroundColor: color,
  };

  return (<div id={id} style={boxStyle}></div>);
  // TODO: ID not necessarily needed for current functionality, REMEMBER IN REACT,
  // DON"T NEED TO USE THIS TO FIND THINGS IN DOM
}

export default Box;