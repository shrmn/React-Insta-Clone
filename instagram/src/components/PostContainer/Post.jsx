import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PostHeader from './PostHeader';

const Post = props => {
    console.log(props);
    return (
        <div className="post">
            <PostHeader
            username={props.post.username}
            thumbnail={props.post.thumbnail}
            />
            <img src={props.post.imageUrl} alt='' />
            <CommentSection
            comments={props.post.comments}
            />
        </div>
    )
}

export default Post;