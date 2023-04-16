import React, { useState } from  'react';

function Form() {
  const [formData, setFormData] = useState({});
  

  function showMeTheInfo(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value});
  }
  return (
    <form>
      <label>
        Name:
        <input type='text' name='name' onChange={showMeTheInfo} /> 
      </label>
      <label>
        Email:
        <input type="email" name="email" onChange={showMeTheInfo} />
      </label>
      <label>
        Password:
        <input type="password" name="password" onChange={showMeTheInfo} />
      </label>
      <label>
        Confirm Password:
        <input type="password" name="confirmPassword" onChange={showMeTheInfo} />
      </label>
      <p>Name: {formData.name}</p>
      <p>Email: {formData.email}</p>
      <p>Password: {formData.password}</p>
      <p>Confirm Password: {formData.confirmPassword}</p>
    </form>
  );
}







export default Form;
