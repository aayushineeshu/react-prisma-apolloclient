import React from 'react';
import styled from 'styled-components';

export const StackCenter = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  grid-gap: ${props => (props.gridgap ? props.gridgap : '1rem')};
`;