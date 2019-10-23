import React from 'react';
import './index.css';

const WriteComment = () => (
    <div className='row pt-3 border-top'>
        <div className="col-2">
            <img className='img-fluid' src="https://picsum.photos/200" alt=""/>
        </div>
        <div className="col-10">
            <textarea rows={4} type="text" className='form-control'/>
        </div>
    </div>
);

export default WriteComment;