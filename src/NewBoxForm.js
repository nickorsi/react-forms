import React, { useState } from 'react';

/**
 * NewBoxForm is a a form with state formData preserving the data in the form
 * fields. The form asks for height, width, and background color. Upon form
 * submission, the data is gathered and a new box is created.
 *
 * Props:
 * -createBox()
 *
 * State:
 * -formData -> an object of the form fields {height, width, color}
 *
 * Box -> NewBoxForm
*/

function NewBoxForm ({createBox}) {
  const initialState = {
    height: '',
    width: '',
    color: ''
  }

  const [boxFormData, setBoxFormData] = useState(initialState);

  /** Send {height, width, color} to parent
   * & clear form
   */
  function handleSubmit(evt){
    evt.preventDefault();
    createBox(boxFormData)
    setBoxFormData(initialState);
  }

  /** Update local state with current state of input element */
  function handleChange(evt){
    const {name, value} = evt.target;
    setBoxFormData(fData => ({
      ...fData,
      [name]: value,
    }));
  }

  /** render form */
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="box-form-height">Height: </label>
      <input
        id="box-form-height"
        name="height"
        type='number'
        value={boxFormData.name}
        onChange={handleChange}
      />

      <label htmlFor="box-form-width">Width: </label>
        <input
          id="box-form-width"
          name="width"
          type='number'
          value={boxFormData.name}
          onChange={handleChange}
        />

      <label htmlFor="box-form-color">Color: </label>
        <input
          id="box-form-color"
          name="color"
          type='text'
          value={boxFormData.name}
          onChange={handleChange}
        />

      <button>Add a new box!</button>
    </form>
  );
}

export default NewBoxForm;