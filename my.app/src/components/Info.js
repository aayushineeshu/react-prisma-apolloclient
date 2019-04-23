import React from 'react';
import image from '../VNBY6l4.jpg';
import styled from 'styled-components';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';
import { NavBar, NavBarTitle } from './Nav';
import { StackCenter, ProfileSummary, CardGrid, Surface } from './Layout';

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

const info = ({title}) => {
    title = 'Avengers';
	return (
		<div style={{width:"100%"}}>
			<NavBar 
			 fixed
             left=<div/>
             center=<NavBarTitle>{title}</NavBarTitle>
             right=<div/> 
             />
			<StackCenter>
				<img style={{width:"26rem", width:"100%", overflowX:"hidden"}}  src={image} />
				<CardGrid>
				<a href="/official-trailer" style={{textDecoration: 'none', color: "rgb(22, 117, 160)"}}>official Trailer</a>
                <a href="/reviews" style={{textDecoration: 'none', color: "rgb(22, 117, 160)"}}>Reviews</a>
                <a href="/about" style={{textDecoration: 'none', color: "rgb(22, 117, 160)"}}>About</a>
				<ProfileSummary name="Chris Evans" imageUrl={"https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTU1MTM0NzA2NzQ3MTg4NDQw/chris-evans-arrives-at-the-los-angeles-premiere-of-captain-america-the-winter-soldier-held-at-the-el-capitan-theatre-on-march-13-2014-in-hollywood-california-photo-by-michael-tran_filmmagicjpg-square.jpg"} bio={"Captain America"}/>
                <ProfileSummary name="Robert Downey Junior" imageUrl={"https://cbsnews1.cbsistatic.com/hub/i/2017/06/29/fe40ccf2-90d6-4b24-92bf-b8795d04c2c2/gettyimages-803015182.jpg"} bio={"Iron Man"}/>
                <ProfileSummary name="Chris Hemsworth" imageUrl={"https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTU0ODUwMjQ0NjIwNzI0MDAx/chris-hemsworth-poses-during-a-photo-call-for-thor-ragnarok-on-october-15-2017-in-sydney-australia-photo-by-mark-metcalfe_getty-images-for-disney-square.jpg"} bio={"Thorr"}/>
				<ProfileSummary name="Chris Hemsworth" imageUrl={"https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTU0ODUwMjQ0NjIwNzI0MDAx/chris-hemsworth-poses-during-a-photo-call-for-thor-ragnarok-on-october-15-2017-in-sydney-australia-photo-by-mark-metcalfe_getty-images-for-disney-square.jpg"} bio={"Thorr"}/>
				</CardGrid>
			</StackCenter>
		</div>
	);
};

export default info;
