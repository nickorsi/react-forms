import React, { useState } from 'react';
import {v4 as uuid } from 'uuid';
import NewBoxForm from './NewBoxForm';
import Box from './Box';

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

  // {height, width, color}
  function createBox(box) {
    let newBox = {...box, id: uuid()}
    setBoxes((boxes) =>
      [...boxes, newBox]
    )
  }


  /**
   * deleteBox deletes box from the boxlist
   */
  function deleteBox(id){
    setBoxes(currBoxes =>
      currBoxes.filter((box) => box.id !== id)
    )
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
          <div>
            <Box
              height={box.height}
              width={box.width}
              color={box.color}
              id={box.id}
              key={box.id}
            />
            <button onClick={()=>deleteBox(box.id)}> Remove the Box!</button>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="BoxList">
      <NewBoxForm createBox={createBox} />
      {renderBoxes()}
    </div>
  )
}

export default BoxList;