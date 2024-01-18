import React, { useState } from 'react';
import {v4 as uuid } from 'uuid';
/**
 * BoxList compoenent redners Box and NewBoxForm componenets
 *
 * Prop:
 * -None
 *
 * State:
 * -Boxes: Array of objects containing height, width, backgroundColor
 * [{height, width, backgroundColor}]
 */

function BoxList () {
  const [boxes, setBoxes] = useState([]);

  /**
   * createBox defined at parent level to be passed down through child
   * components, updates array with new box.
   * Takes in
   */
  function createBox({height, width, color}) {
    setBoxes((currBoxes) => {
      [...currBoxes, {height, width, color, id: uuid()}];
    })
  }

  /**
   * renderBoxes iterates through boxes and invokes the Box component passing
   * in the current state.
   *
   */

  function renderBoxes() {
    return (
      <div>
        {boxes.map((box) => (
          <Box
            height={box.height}
            width={box.width}
            color={box.color}
            id={box.id}
          />
        ))}
      </div>
    )
  }

  return (
    <div className="BoxList">
      <NewBoxForm />
      {renderBoxes()}
    </div>
  )
}