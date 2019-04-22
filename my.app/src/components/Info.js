import React from 'react';
import image from '../VNBY6l4.jpg';
import styled from 'styled-components';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';
import { NavBar, NavBarTitle } from './Nav';
import { StackCenter, ProfileSummary } from './Layout';

const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: row;
`
const ImageWrapper = styled.div`
  
}
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
   // imageUrl=''
	return (
		<div>
            <NavBar 
             left=<div/>
             center=<NavBarTitle>{title}</NavBarTitle>
             right=<div/> 
             />
			<StackCenter>
				<img style={{width:"26rem"}}  src={image} />
                <a href="/trailer" style={{textDecoration: 'none', color: "rgb(22, 117, 160)"}}>official Trailer</a>
                <a href="/reviews" style={{textDecoration: 'none', color: "rgb(22, 117, 160)"}}>Reviews</a>
                <a href="/about" style={{textDecoration: 'none', color: "rgb(22, 117, 160)"}}>About</a>
                <ProfileWrapper>
				<ProfileSummary name="Chris Evans" imageUrl={image} bio={"Captain America"}/>
                <ProfileSummary name="Chris Evans" imageUrl={image} bio={"Captain America"}/>
                <ProfileSummary name="Chris Evans" imageUrl={image} bio={"Captain America"}/>
                </ProfileWrapper>
			</StackCenter>
		</div>
	);
};

export default info;
