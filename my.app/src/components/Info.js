import React from 'react';
import image from '../VNBY6l4.jpg';
import styled from 'styled-components';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';
import { NavBar, NavBarTitle } from './Nav';
import { StackCenter } from './Layout';

const Image = styled.div`
position: relative;
background-color: #2196f3;
background-image: url("https://images.unsplash.com/photo-1555680190-6e5683bba42b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80");
background-position: 50%;
text-align: center;
overflow: hidden;
background-size: cover;
`

const Box = styled.div`
	width: 320px;
	padding: 10px;
	border: 5px solid gray;
	margin: 0px;
`;

const DetailQuery = gql`
	query {
		agencies {
			owner {
				firstName
				lastName
			}
		}
	}
`;

const info = ({name,title}) => {
    name = 'Avengers';
    title = 'Avengers';
	return (
		<div>
            <NavBar 
             left=<div/>
             center=<NavBarTitle>{title}</NavBarTitle>
             right=<div/> 
             />
			<StackCenter>
				<img style = {{height:"26rem", width:"26rem"}} src={image} />
                <a href="/trailer" style={{textDecoration: 'none', color: "rgb(22, 117, 160)"}}>official Trailer</a>
                <a href="/reviews" style={{textDecoration: 'none', color: "rgb(22, 117, 160)"}}>Reviews</a>
                <a href="/about" style={{textDecoration: 'none', color: "rgb(22, 117, 160)"}}>About</a>

				{/* Firstname : <Box>{name}</Box>
				Lastname : <Box>{name}</Box> */}
			</StackCenter>
		</div>
	);
};

export default info;
