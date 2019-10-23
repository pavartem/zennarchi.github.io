import React from 'react';
import './index.css';
import Items from "../Items";
import Comments from "../Comments";

const Main = () => (
    <div className='row main'>
        <div className="col-md-6">
            <Items/>
        </div>
        <div className="col-md-6">
            <Comments/>
        </div>
    </div>
);

export default Main;