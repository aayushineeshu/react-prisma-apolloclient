// import React,{ useState, useEffect} from 'react';

// const About = () => {
//    const [data,setData] = useState('gooo')

//    const Name = () => {
//      setData("Hello")
//    }
  

//  const  getData = () =>{
//     setTimeout(() => {
//       console.log('Our data is fetched');
//       Name({
//         data: 'Hello'
//       })
//     }, 1000)
//   }

// useEffect(()=> {
//     getData();
// });

//     return(
//       <div>
//       {Name}
//     </div>
//     )
//   }


// export default About;

import React, { Component } from 'react';
import { NavBar, NavBarTitle } from './Nav';


class About extends Component {

  state = {
      data: null,
      items:[],
      isLoaded: false
    }
  
  componentWillMount(){
    console.log('Initial call');
  }

  getData(){
    setTimeout(() => {
      console.log('Our data is fetched');
      this.setState({
        data: 'Hello WallStreet'
      })
    }, 1000)
  }

  getResults(){
    // this.getData(() => {
    //     console.log("our data is updated");
        this.setState({
            data: 'Welcome'
        })
      // })
      
  }

  componentDidMount(){
    this.getData();
    fetch('https://sherpa-prisma-git-master.jaikant.now.sh/')
      .then(res => res.json)
      .then(function(data) {
        console.log('Request succeeded with JSON response', data);
      })
      .then(json => {
          this.setState({
              isLoaded:true,
              items:json,
          })
      })
  }

  componentDidUpdate(){
      console.log("hi")
     // this.getResults();
  }

  render() {
      const {isLoaded, items} = this.state;
        var obj = items;
        JSON.stringify(obj);
        console.log("obj",obj)

      if(!isLoaded){
        return(
              <div>Loading ....</div>
          )                                                                                                                                                                                                                                                     
      }
      else{
        return(
            <div>
            <NavBar 
                   left=<div/>
                   center=<NavBarTitle>{"About"}</NavBarTitle>
                   right=<div/> 
                   />    
                   <ul>
                   {console.log("items", items)}
                   
                       {/* {items.map(item => (
                           <li >
                             Name: {item.name}
                           </li>
                       ))}; */}
                    </ul>
            {this.state.data}
          </div>
          )
      }
    
  }
}

export default About;