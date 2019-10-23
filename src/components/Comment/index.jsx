import React from 'react';
import './index.css';

const Comment = ({comment: {title}}) => (
    <div className='row m-0 p-3 px-1 comment'>
        <div className="col-2">
            <img className='img-fluid' src="https://picsum.photos/200" alt=""/>
        </div>
        <div className="col-10">
            {title}
        </div>
    </div>
);

export default Comment;