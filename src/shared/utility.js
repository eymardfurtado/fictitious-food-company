export const updateObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties
  }
}

export const checkValidity = (type, value, rules) => {
  let isValid = true;

  if (!rules.required) {
    isValid = true;
  };

  if (type === 'email') {
        if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value))){
          isValid = false;
        } 
      }

      
  if (rules.required) {
    isValid = value.trim() !== '' && isValid;
  };

  if (rules.minLength) {
    isValid = value.length >= rules.minLength && isValid
  }

  if (rules.maxLength) {
    isValid = value.length <= rules.maxLength && isValid
  }
  
  return isValid;
}
