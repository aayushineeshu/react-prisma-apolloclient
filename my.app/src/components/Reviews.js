import React,{ useState, useEffect } from "react";
import styled from "styled-components";
import { NavBar, NavBarTitle } from './Nav';
import { StackCenter } from './Layout';
import { Ratings } from './Content';
import { Formik, Form } from 'formik';
import { LabeledField, RatingField } from './Form';
import * as Yup from 'yup';
import { Button } from './Content';
import { Text } from './OfficialTrailer'

const ContentText = styled(Text)`
  text-align: initial;
`

const Reviews = () => {
  
  return(
        <div>
        <NavBar 
             left=<div/>
             center=<NavBarTitle>{"Reviews"}</NavBarTitle>
             right=<div/> 
             />
             <StackCenter>
             <Formik
                  initialValues={{
                    name: '',
                    email: ''
                  }}
                   onSubmit={(values, { setSubmitting, resetForm }) => {
                    console.log('submiting', {
                      name: values.name,
                      email: values.email
                    });
                    //onSubmit={(values, actions) => {
                      setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        resetForm();
                        setSubmitting(false);
                      }, 100);
                    }}
                  validationSchema={Yup.object().shape({
                    name: Yup.string()
                      .required(`Required`),
                    email: Yup.string()
                      .email(`Invalid`)
                      .required(`Required`)
                  })}
                  render={({ isSubmitting }) => {
                    return (
                      <Form>
                        <LabeledField
                          type="name"
                          name="name"
                          label={`name`}
                          placeholder={`Name`}
                          required
                        />
                        <LabeledField
                          type="email"
                          name="email"
                          label={`Email`}
                          placeholder={`Email`}
                          required
                        />
                          <ContentText color="#191818"> Ratings </ContentText>
                          <RatingField />
                          <div />
                          <Button type='submit' onClick={() => isSubmitting}>Submit</Button>
                          {console.log("submit",isSubmitting)}
                      </Form>
                    );
                  }}
                />
             
        
            
            </StackCenter>
            </div>
    )
}

export default Reviews;