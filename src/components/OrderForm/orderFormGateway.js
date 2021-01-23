export const inputFields = [
  { name: 'name', placeholder: 'Name' },
  { name: 'number', placeholder: 'Number' },
];

export const defaultFormData = {
  name: '',
  number: '',
};

export const defaultErrorsData = {
  name: 'This field in required',
  number: 'This field in required',
};

export const validateNumber = (value) => {
  const val = value.trim();
  switch (true) {
    case val.length === 0:
      return 'This field in required';
    case isNaN(+val):
      return 'Only numbers allowed';
    case val.length < 12:
      return 'Should contain 12 characters';
    default:
      return '';
  }
};

export const validateName = (value) => {
  const val = value.trim();

  switch (true) {
    case val.length === 0:
      return 'This field in required';
    case /[а-яё\d\W_]/gi.test(val):
      return 'Only letters allowed';
    default:
      return '';
  }
};

export const returnErrorsData = (errorsDataList, name, value) => {
  const errors = { ...errorsDataList };
  switch (name) {
    case 'name':
      errors[name] = validateName(value);
      break;
    case 'number':
      errors[name] = validateNumber(value);
      break;
    default:
      break;
  }

  return errors;
};

export const validForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach(
    (val) => val.trim().length > 0 && (valid = false)
  );
  return valid;
};
