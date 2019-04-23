import React from 'react';
import styled from 'styled-components';
import ReactPlayer from 'react-player';
import { NavBar, NavBarTitle } from './Nav';
import { StackCenter } from './Layout';
import { ReactComponent as HeadsetTwoTone } from '../icons/HeadsetTwoTone.svg'

const Text = styled.p`
   font-size: 16px;
   font-weight: 600;
   padding-left: 2rem;
   color: #034f6d;
`
const officialTrailer = () => {
    return(
        <div>
        <NavBar 
			 fixed
             left=<div/>
             center=<NavBarTitle>{"Trailers"}</NavBarTitle>
             right=<HeadsetTwoTone/> 
             />
             <Text> Avengers Endgame </Text>
            <StackCenter>
            
            <ReactPlayer 
              url='https://www.youtube.com/watch?v=ee1172yeqyE' 
              playing 
              width={"100%"}
              />
            </StackCenter>
            </div>
    )
}

 export default officialTrailer;