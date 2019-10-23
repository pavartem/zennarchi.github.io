import React from 'react';
import './index.css';

const Item = () => (
    <li className='list-group-item list-group-item-action d-flex flex-row justify-content-between py-3 item'>
        <span className='item-title my-auto'>
            First item with custom name
            <span className="badge badge-primary badge-pill ml-2 bg-light-green">2</span>
        </span>
        <button className='btn btn-outline-danger'>Delete</button>
    </li>
);

export default Item;