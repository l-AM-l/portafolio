import React, { useState } from "react";


function Login(){
   
    const {userProfile, setUserProfile} = useState({
        user: "",
        password: "",
    });

    function userListener(event){
        const {value, name} = event.target;
        setUserProfile((prevValue)=>{  
                return{
                    ...prevValue, 
                    [name]: value,
                };

        });
        console.log(userProfile);
    }

    function submitForm(event){
        //console.log("user: "+userProfile.user);
        //
        
        console.log("Password"+userProfile.password);
        axios
        .post("/login", {
            user: userProfile.user,
            password: userProfile.password,
        })
        .then((res)=>{
            console.log(res.data);
        })
        .catch((err)=>{
            console.error(err);
        })
    }
    
    return (
        <div>
            <form onSubmit={submitForm}>
                <input type="text" placeholder="login" onChange={userListener} value={userProfile.user}/>
                <input type="password" placeholder="password" onChange={userListener}
                 value={userProfile.password}/>
                <button type ="submit"></button>
            </form>
        </div>
    );

    }
export default Login;