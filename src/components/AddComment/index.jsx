import React from 'react';
import './index.css';

const AddComment = () => (
    <div className='row pl-3 py-2 mb-2'>
        <input type="text" className='form-control col-md-8' placeholder='Type name here...'/>
        <button className='btn btn-info col-md-3 offset-1 bg-light-green'>Add new</button>
    </div>
);

export default AddComment;