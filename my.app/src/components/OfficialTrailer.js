import React, { useState } from 'react';
import styled from 'styled-components';
import ReactPlayer from 'react-player';
import { NavBar, NavBarTitle } from './Nav';
import { StackCenter, CardGrid } from './Layout';
import { Button } from './Content';
import { ReactComponent as HeadsetTwoTone } from '../icons/HeadsetTwoTone.svg';
import { ReactComponent as Like } from '../icons/heart.svg';

const Text = styled.div`
    font-size: ${props => props.fontSize? props.fontSize : "16px"};
	font-weight: 600;
    color: #034f6d;
    text-align: center;
	padding: ${props => (props.padding ? props.padding : 'none')};
`;

const LikeButton = styled.button`
	border: none;
	background: none;
	padding-right: 2rem;
`;

const officialTrailer = props => {
    const [count, setCount] = useState(0);
    const [subscribe,setSubscribe] = useState(false);

	const counting = () => {
        setCount(count + 1);
    };
    
    const subscription = () => {
        subscribe ? setSubscribe(false) : setSubscribe(true);
    }

	return (
		<div>
            <NavBar 
             fixed left=<div/> 
             center=<NavBarTitle>{'Trailers'}</NavBarTitle> 
             right=<HeadsetTwoTone/> 
             />
			   <Text padding="1rem"> Avengers Endgame </Text>
               <ReactPlayer url="https://www.youtube.com/watch?v=ee1172yeqyE" 
                  playing 
                  width={'100%'} />
                  <StackCenter>
             <CardGrid>
			<LikeButton onClick={counting}>
				<Like style={{ height: '2rem', width: '2rem' }} />
                <Text fontSize="13px">{count} Likes</Text>
			</LikeButton>
            <Button onClick={subscription}>{subscribe ? "subscribed" : "subscribe"}</Button>
            <p></p>
            </CardGrid>
            </StackCenter>
		</div>
	);
};

export default officialTrailer;
