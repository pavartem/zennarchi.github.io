import React from 'react';
import './index.css';
import AddComment from "../AddItem";
import Item from "../Item";

const Items = (props) => (
    <div className='shadow mb-5 bg-white items'>
        <div className="items-header px-4 pt-3">
            <h1 className='font-weight-light'>Items</h1>
            <AddComment
                value={props.value}
                changeInput={props.changeInput}
                saveItem={props.saveItem}
            />
        </div>
        <ul className='list-group'>
            {
                props.items &&
                props.items.map((item) => (
                    <Item
                        key={item.id}
                        item={item}
                        deleteItem={props.deleteItem}
                        toggleActive={props.toggleActive}
                    />
                ))
            }
        </ul>
    </div>
);

export default Items;