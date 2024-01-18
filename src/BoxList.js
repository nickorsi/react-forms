import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import NewBoxForm from './NewBoxForm';
import Box from './Box';

/**
 * BoxList compoenent redners Box and NewBoxForm components
 *
 * Prop:
 * -None
 *
 * State:
 * -Boxes: Array of objects containing height, width, background color, and id
 * [{height, width, color, id}]
 *
 * App -> BoxList -> NewBoxForm & Box
 */

function BoxList() {
  const [boxes, setBoxes] = useState([]);

  /**
   * createBox defined at parent level to be pass down through child
   * components, updates array with new box.
   * Takes in box object which comes from the form data
   * {height, width, color}
   */

  // {height, width, color}
  function createBox(box) {
    let newBox = { ...box, id: uuid() };
    setBoxes((boxes) =>
      [...boxes, newBox]
    );
  }


  /**
   * deleteBox deletes box from the boxlist
   * Takes in id associated with the box to delete
   * Updates the boxes state, filtering out the object with the passed in id.
   */
  function deleteBox(id) {
    setBoxes(currBoxes =>
      currBoxes.filter((box) => box.id !== id)
    );
  }

  /**
   * renderBoxes iterates through boxes state and invokes the Box component
   * for each box held in state, passing in the height, width, color, and id.
   *
   */

  function renderBoxes() {
    return (
      <div>
        {boxes.map((box) => (
          <div key={box.id}>
            <Box
              height={box.height}
              width={box.width}
              color={box.color}
              id={box.id}
            />
            <button onClick={() => deleteBox(box.id)}> Remove the Box!</button>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="BoxList">
      <NewBoxForm createBox={createBox} />
      {renderBoxes()}
    </div>
  );
}

export default BoxList;