import React from 'react';
import './index.css';
import Comment from "../Comment";
import WriteComment from "../WriteComment";

const Comments = () => (
    <div className='shadow p-3 mb-5 bg-white'>
        <h1 className='font-weight-light'>Comments</h1>
        <div className="comments-list">
            <Comment/>
            <Comment/>
            <Comment/>
        </div>
        <WriteComment/>
    </div>
);

export default Comments;