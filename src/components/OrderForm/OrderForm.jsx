import React, { useState } from 'react';
import {
  inputFields,
  defaultFormData,
  defaultErrorsData,
  returnErrorsData,
  validForm,
} from './orderFormGateway';

import styles from './OrderForm.module.scss';

const OrderForm = () => {
  const errorsListName = Object.keys(defaultErrorsData);

  const [formData, setFormData] = useState(defaultFormData);
  const [errorsDataList, handleErrorsList] = useState(defaultErrorsData);
  const [validateFieldsList, setValidateList] = useState([]);

  const handleChange = (event, fieldName) => {
    event.preventDefault();
    setValidateList((validList) =>
      validList.filter((validName) => validName !== fieldName)
    );
    const { name, value } = event.target;
    const errors = returnErrorsData(errorsDataList, name, value);

    handleErrorsList(errors);
    setFormData((state) => ({ ...state, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setValidateList(errorsListName);
    if (validForm(errorsDataList)) {
      console.info(formData);
    } else {
      console.error('Invalid Form');
    }
  };

  return (
    <form
      className={styles.orderForm}
      onSubmit={handleSubmit}
      autoComplete='off'
      noValidate>
      {inputFields.map((field) => {
        const { name, placeholder } = field;
        const isValidateItem = validateFieldsList.find(
          (name) => name === field.name
        );
        const error = isValidateItem && errorsDataList[name];

        return (
          <div key={name} className={styles.inputFieldWrap}>
            <input
              className={`${styles.inputField} ${
                error ? styles.errorBorder : ''
              }`}
              name={name}
              placeholder={placeholder}
              value={formData[name]}
              onChange={(e) => handleChange(e, name)}
              onBlur={() =>
                formData[name] &&
                setValidateList((validList) => [
                  ...new Set([...validList, name]),
                ])
              }
            />
            {error ? <div className={styles.errorMessage}>{error}</div> : null}
          </div>
        );
      })}

      <button className={styles.submitBtn} type='submit'>
        Order
      </button>
    </form>
  );
};

export default OrderForm;
