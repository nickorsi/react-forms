import React from 'react';

/** Box displays a div with
 * background color, width, and height based on the props passed to it.
 *
 * Props:
 * -height: Number
 * -width: Number
 * -color: String
*/

function Box ({height, width, color, id}) {
  const boxStyle = {
    height: height + "px",
    width: width + "px",
    backgroundColor: color,
  }

  return(<div id ={id} style={boxStyle}>THIS IS THE BOX</div>)
}

export default Box;