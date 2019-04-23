import React from 'react';
import styled from 'styled-components';
import {
    Form as FormikForm,
    Field as FormikField,
    ErrorMessage as FormikErrorMessage
  } from 'formik';

  export const Label = styled.label`
  text-transform: uppercase;
  margin-bottom: 0.3em;
  margin-top: 2em;
  margin-left: 0.2em;
  font-size: 0.8em;
  font-weight: 600;
  color: ${props => props.theme.tertiary};
`;

export const Field = styled(FormikField)`
  -webkit-appearance: none;
  font-family: ${({ component }) =>
    component === 'textarea' ? 'sans-serif' : 'inherit'};
  font-weight: bold;
  font-size: ${({ huge }) => (huge ? '24px' : '18px')};
  text-align: ${({ huge }) => (huge ? 'center' : 'left')};
  padding: ${({ huge }) => (huge ? '10px 0' : '0')};
  margin-top: 0px;
  margin-bottom: 5px;
  background-color: #fff;
  border: 2px;
  border-radius: 5px;
  border-top-right-radius: ${({ left }) => (left ? '0' : 'auto')};
  border-bottom-right-radius: ${({ left }) => (left ? '0' : 'auto')};
  border-top-left-radius: ${({ right }) => (right ? '0' : 'auto')};
  border-bottom-left-radius: ${({ right }) => (right ? '0' : 'auto')};
  padding: 15px 10px;
  border: 1px solid #ddd;
  &::placeholder {
    color: #bbb;
    font-weight: normal;
  }
`;

const LabeledFieldWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: minMax(60px, auto) 1fr;
  grid-template-rows: auto auto;
  margin-bottom: 0.4em;
  align-items: baseline;
`;

export const LabeledField = ({ name, label, left, right, ...rest }) => (
  <LabeledFieldWrapper>
    <Label htmlFor={name}>{label}</Label>
    <FormikErrorMessage
      name={name}
      style={{ justifySelf: 'end', textAlign: 'right' }}
    />
    <Field
      id={name}
      name={name}
      left={left ? 1 : 0}
      right={right ? 1 : 0}
      {...rest}
      style={{ gridColumn: '1 / span 2' }}
    />
  </LabeledFieldWrapper>
);