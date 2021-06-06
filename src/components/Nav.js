import React from 'react';
import { routes } from "../config/Router.js";
import { Link } from 'react-router-dom';

function Nav(){
    console.log(routes)
    return (
    <nav>
        <h1>BMI</h1>
        <div>
            <ul>
                {routes.map((route)=>{
                    if(route.isHeader){
                    return(
                    <li key={route.name}>
                        <Link to={route.path}>
                        {route.name}
                        </Link>
                    </li>
                    )}
                })}
            </ul>
        </div>
    </nav>
    );
}

export default Nav;