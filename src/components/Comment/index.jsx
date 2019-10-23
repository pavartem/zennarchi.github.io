import React from 'react';
import './index.css';

const Comment = () => (
    <div className='row py-2 px-1 comment'>
        <div className="col-2">
            <img className='img-fluid' src="https://picsum.photos/200" alt=""/>
        </div>
        <div className="col-10">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur consequatur dolore impedit ipsa iste
            laudantium odio officia temporibus! Ad atque cumque dignissimos incidunt nisi non nostrum optio placeat
            quibusdam
        </div>
    </div>
);

export default Comment;