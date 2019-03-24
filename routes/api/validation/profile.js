const Validator = require('validator'); 
const isEmpty = require ('./is-empty');

module.exports =  function validatProfileInput(data) {
  let errors = {};

  data.handle = !isEmpty(data.handle) ? data.handle : '';
  data.status = !isEmpty(data.status) ? data.status : ''; 
  data.skills = !isEmpty(data.skills) ? data.skills : ''; 

  if(!Validator.is.Length(data.handle, { min: 2, max: 40 })) {
    errors.handle = 'Handle needs to between 2 and 4 characters';
  } 

  if(Validator.is.Length(data.handle)) {
    errors.handle = 'Profile handle is required';
  } 

  if(Validator.is.Length(data.status)) {
    errors.status = 'Status field is required';
  }
 
  if(Validator.is.Length(data.skills)) {
    errors.skills = 'Skills field is required';
  }
  return {
    errors,
    isValid: isEmpty(errors)
  }
}