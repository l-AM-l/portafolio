import React from "react";
import { Link } from "react-router-dom";

function MyNavBar(){
    return(
        <div>
            <ul>
                <li><Link to="/">home</Link></li>
            </ul>
        </div>
    )
}