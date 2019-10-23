import React from 'react';
import './index.css';

const WriteComment = (props) => (
    <div className='row m-0 p-3 border-top'>
        <div className="col-2">
            <img className='img-fluid' src="https://picsum.photos/200" alt=""/>
        </div>
        <div className="col-10">
            <textarea
                onKeyUp={props.saveComment}
                onChange={props.changeInput}
                value={props.commentInput}
                rows={4}
                type="text"
                placeholder='CTRL + Enter to Save'
                className='form-control comment-input'
            />
        </div>
    </div>
);

export default WriteComment;