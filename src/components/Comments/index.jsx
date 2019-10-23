import React from 'react';
import './index.css';
import Comment from "../Comment";
import WriteComment from "../WriteComment";

const Comments = ({selectedItem: {comments}, saveComment, changeInput, commentInput}) => (
    <div className='shadow mb-5 bg-white'>
        <h1 className='font-weight-light p-3'>Comments</h1>
        <div className="comments-list">
            {
                comments &&
                comments.map((comment) => <Comment key={comment.id} comment={comment}/>)
            }
        </div>

        <WriteComment
            saveComment={saveComment}
            changeInput={changeInput}
            commentInput={commentInput}
        />
    </div>
);

export default Comments;