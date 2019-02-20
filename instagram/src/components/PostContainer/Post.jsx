import React from 'react';
import CommentSection from '../CommentSection/CommentSection';

const Post = props => {
    return (
        <div className="post">
            <PostHeader
            username={props.posts.username}
            thumbnail={props.posts.thumbnail}
            />
            <img src={props.posts.imageUrl} alt='' />
            <CommentSection />
        </div>
    )
}

export default Post;