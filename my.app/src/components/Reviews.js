import React from "react";
import styled from "styled-components";
import { NavBar, NavBarTitle } from './Nav';
import { StackCenter } from './Layout';
import { Ratings } from './Content';
import { Formik, Form } from 'formik';
import { LabeledField } from './Form';
import * as Yup from 'yup';



const Reviews = () => {
    console.log("hello");
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
                    email: ''
                  }}
                  onSubmit={(values, { setSubmitting }) => {
                    // client
                    //   .query({
                    //     query: LookUpTeacher,
                    //     variables: values
                    //   })
                    //   .then(result => {
                    //     this.setState({
                    //       error:
                    //         'Please request an invitation from your teacher.'
                    //     });
                    //     setSubmitting(false);
                    //   })
                    //   .catch(err => console.log(`Error caught ${err}`));
                  }}
                  validationSchema={Yup.object().shape({
                    email: Yup.string()
                      .email(`Invalid`)
                      .required(`Required`)
                  })}
                  render={({ isSubmitting }) => {
                    return (
                      <Form>
                        <LabeledField
                          type="email"
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
                          <p> Ratings </p>
                          <Ratings />
                        <>
                        </>
                      
                      </Form>
                    );
                  }}
                />
             
        
            
            </StackCenter>
            </div>
    )
}

export default Reviews;