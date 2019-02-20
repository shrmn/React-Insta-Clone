import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PostHeader from './PostHeader';
import PropTypes from 'prop-types';

const Post = props => {
    return (
        <div className="post">
            <PostHeader
            username={props.post.username}
            thumbnail={props.post.thumbnailUrl}
            />
            <img src={props.post.imageUrl} alt='' />
            <CommentSection
            comments={props.post.comments}
            />
        </div>
    )
}

Post.propTypes = {
    imgUrl: PropTypes.string,
}

export default Post;