import React from 'react';

const PostHeader = props => {
    return (
        <div>
            <img src={props.thumbnail} alt="user avatar" />
            <p>{props.username}</p>
        </div>
    )
}



export default PostHeader;