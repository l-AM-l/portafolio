import React, {useState} from 'react';
import './App.css';
import Card from "./components/Card";
import contacts from './data/data';
import AdminConsole from './components/AdminConsole';
import Header  from './componentst/Header';
import Login from './components/Login';
import Archive from "./components/Archive";
import {Routes, Routs} from react-router-dom;
import MyNavBar from "./components/MyNavBar";


function App() {
  
  //const num = Math.floor(Math.random()*10);
  const{isLoggedin, setIsLoggedin} = useState(false);
  function updateLogin(){
    setIsLoggedin(isLoggedin);
  }
  
  return (
    <div className="App">
      <Header/>
      <MyNavBar/>
      <Routes>
        <Routs path="/" element={<Login listener={updateLogin}/>}/>
        <Routs path="/admin" element={<AdminConsole/>}/>
        <Routs path="/archives" element={<Archive/>}/>
      </Routes>
      <p className='footer'>Copyright 2023</p>
    </div>
  );

  //      {isLoggedin ? <AdminConsole/>: <Login listener={updateLogin}/>}

  

  
  //allContacts = findElement.length>0? mapElements(findElement): mapElements(contacts);
 
 /*
 <h1 style={customstyle}>hello world {name}</h1>
      <img alt='random-logo' src={img}></img>
      <Card/>
 if(num%2==0){
    customstyle.background = "lightBlue";
  } else{
    customstyle.background = "pink";
  }
  if (findElement.length>0){
    allContacts = mapElements(findElement);
     
  }
  else{
    allContacts = mapElements(contacts);
  }

  var result = contacts.reduce((result, {age})=>{
    return result + age;
  }, 0);

  function filterListener(event){

    console.log("I am listening to changes in the fields" + event.target.value);
    setFilter= event.target.value;
  }
  */
  

  
}

export default App;
