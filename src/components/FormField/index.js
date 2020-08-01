/* eslint-disable linebreak-style */
import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

// prettier-ignore

const FormFieldWrapper = styled.div`
  position: relative;
  textarea {
    min-height: 150px;
  }
  input[type='color'] {
    padding-left: 56px;
  }
`;

const Label = styled.label``;

Label.Text = styled.span`
  color: #e5e5e5;
  height: 57px;
  position: absolute;
  top: 0;
  left: 16px;

  display: flex;
  align-items: none;

  transform-origin: 0% 0%;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;

  transition: 0.1s ease-in-out;
`;

const Input = styled.input`
  background: #53585d;
  color: #f5f5f5;
  display: block;
  width: 100%;
  height: 57px;
  font-size: 18px;

  outline: 0;
  border: 0;
  border-top: 0px solid transparent;
  border-bottom: 4px solid #53585d;

  padding: 16px 16px;
  margin-bottom: 45px;

  resize: none;
  border-radius: 4px;
  transition: border-color 0.3s;

  &:focus {
    border-bottom-color: var(--primary);
  }
  &:focus:not([type='color']) + ${Label.Text} {
    transform: scale(0.6) translateY(-10px);
  }
  &:hover {
    border-bottom: 3px solid purple;
    ::-webkit-input-placeholder {
      transition: 0.3s;
      transform: scale(0.7) translateY(-28px) translateX(-95px);
    }
  }
  ${({ value }) => {
    const hasValue = value.length > 0;
    return (
      // prettier-ignore
      hasValue
      && css`
        &:not([type='color']) + ${Label.Text} {
          transform: scale(0.6) translateY(-10px);
        }
      `
    );
  }}
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
  const fieldId = `id_${name}`;
  const isTextarea = type === 'textarea';
  const tag = isTextarea ? 'textarea' : 'input';
  return (
    // prettier-ignore
    <FormFieldWrapper className="form-group col-md-5">
      <Label htmlFor={fieldId}>
        <Label.Text>
          {label}
          :
        </Label.Text>
      </Label>
      <Input
        as={tag}
        id={fieldId}
        className={classInput}
        type={type}
        value={value}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
      />
    </FormFieldWrapper>
    // prettier-ignore-end
  );
}

FormField.defaultProps = {
  type: 'text',
  value: '',
  onChange: () => {},
  placeholder: '',
  classInput: '',
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  classInput: PropTypes.string,
};

export default FormField;
