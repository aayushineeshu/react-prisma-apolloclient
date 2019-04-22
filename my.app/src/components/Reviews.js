import React from "react";
import styled from styled-components;
import { NavBar, NavBarTitle } from './Nav';
import { StackCenter } from './Layout';


const Reviews = () => {
    return(
        <div>
        <NavBar 
             left=<div/>
             center=<NavBarTitle>{"About"}</NavBarTitle>
             right=<div/> 
             />
        <StackCenter>
            hello
            </StackCenter>
            </div>
    )
}

export default Reviews