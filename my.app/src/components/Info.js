import React from 'react';
import image from '../VNBY6l4.jpg';
import styled from 'styled-components';
import { Query } from 'react-apollo';
import  { gql } from 'apollo-boost';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  padding: 20px;
`;
const Box = styled.div`
    width: 320px;
    padding: 10px;
    border: 5px solid gray;
    margin: 0px;
`

const DetailQuery = gql`
    query{
        agencies {
            owner {
              firstName
              lastName
            }
          }
    }
`

const info = ( name ) => {
    name="Avengers";
    return (
    // <Query query={DetailQuery}>
    //     {({ data }) => {
    //         <div>
        <Wrapper>
         <img style={{ height: "15rem", width: "15rem" }} src={image} />
         Firstname : <Box>{name}</Box>
         Lastname : <Box>{name}</Box>
        </Wrapper>
//    </div>
//     }}
    
//   </Query>
        
  )
        
        }
        



export default info;