import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  &:hover,
  &:focus {
    border-bottom: 3px solid purple;
    ::-webkit-input-placeholder {
      font-size: 14px;
    }
  }
`;

function FormField({
  label,
  type,
  value,
  name,
  onChange,
  placeholder,
  classInput,
}) {
  return (
    <div className="form-group col-md-5">
      <label>{label}: </label>
      <Input
        className={classInput}
        type={type}
        value={value}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
}

export default FormField;
