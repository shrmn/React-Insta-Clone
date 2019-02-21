import React from 'react';

const Comment = props => {
    return (
        <div className="comment">
            <span className="username">{props.comment.username}</span>
            <span className="comment">{props.comment.text}</span>
        </div>
    )
}

export default Comment;