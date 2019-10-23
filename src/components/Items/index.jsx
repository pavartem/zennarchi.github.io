import React from 'react';
import './index.css';
import AddComment from "../AddComment";
import Item from "../Item";

const Items = () => (
    <div className='shadow mb-5 bg-white items'>
        <div className="items-header px-4 pt-3">
            <h1 className='font-weight-light'>Items</h1>
            <AddComment/>
        </div>
        <ul className='list-group'>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
        </ul>
    </div>
);

export default Items;