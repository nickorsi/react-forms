import React, { useState } from 'react';

/**
 * NewBoxForm is a a form with state boxFormData preserving the data in the form
 * fields. The form asks for height, width, and background color. Upon form
 * submission, the data is gathered and a new box is created. Takes in a callback
 * as a prop to assign the function to invoke on form submission.
 *
 * Props:
 * -createBox -> callback function to create a box on form submit
 *
 * State:
 * -formData -> an object of the form fields {height, width, color}
 *
 * BoxList -> NewBoxForm
*/

function NewBoxForm ({createBox}) {
  const initialState = {
    height: '',
    width: '',
    color: ''
  }

  const [boxFormData, setBoxFormData] = useState(initialState);

  /** handleSubmit creates new box & clears form data
   */
  function handleSubmit(evt){
    evt.preventDefault();
    createBox(boxFormData)
    setBoxFormData(initialState);
  }

  /** handleChange updates local state with current value of input element */
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
        value={boxFormData.height}
        onChange={handleChange}
        required
      />

      <label htmlFor="box-form-width">Width: </label>
        <input
          id="box-form-width"
          name="width"
          type='number'
          value={boxFormData.width}
          onChange={handleChange}
          required
        />

      <label htmlFor="box-form-color">Color: </label>
        <input
          id="box-form-color"
          name="color"
          type='text'
          value={boxFormData.color}
          onChange={handleChange}
          required
        />

      <button>Add a new box!</button>
    </form>
  );
}

export default NewBoxForm;
