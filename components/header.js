import React from 'react';
import {Link} from 'react-router-dom';
import GoogleAuth from './GoogleAuth';


const Header = ()=> {
    return(
        <div className="ui secondary point menu " style={{backgroundColor:'#130f40'}}>
            <Link to ='/' className="item" style={{color:'white'}}>Streamy</Link>
            <div className="right menu"> 
            <Link to ='/' className="item" style={{color:'white'}}> All Stream
            </Link>
            <GoogleAuth detail="Sign in with Google"/>
            </div>
        </div>
           
    );
};



export default Header;