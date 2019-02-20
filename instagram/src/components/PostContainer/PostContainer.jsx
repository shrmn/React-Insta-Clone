import React from 'react';
import Post from './Post';

const PostContainer = props => {
    return (
        <div>
            <h2>PostContainer</h2>
            <div>
                {props.posts.map((post) => (
                    <Post
                    post={post}
                    key={post.imageUrl}
                    />
                ))}
            </div>
        </div>
    )
}

export default PostContainer;