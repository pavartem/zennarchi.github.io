import React from 'react';
import './index.css';

const Item = ({item: {id, title, comments, active}, deleteItem, toggleActive}) => (
    <li
        className={
            'list-group-item list-group-item-action d-flex justify-content-between py-3 item '
            + (active ? 'item-active' : '')}
        onClick={() => toggleActive(id)}
    >
        <span className='item-title my-auto'>
            {title}
            <span className="badge badge-primary badge-pill ml-2 bg-light-green">{comments.length}</span>
        </span>
        <button onClick={() => deleteItem(id)} className='btn btn-outline-danger'>Delete</button>
    </li>
);

export default Item;