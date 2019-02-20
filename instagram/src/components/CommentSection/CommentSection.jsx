import React from 'react';
import Comment from './Comment';

class CommentSection extends React.Component {
    constructor(props) {
        super();
        this.state = {
            comments: props.comments,
            commentText: ''
        }
    }

    handleChanges = e => {
        this.setState({ commentText: e.target.value})
    }

    addNewComment = e => {
        e.preventDefault();
        const newComment = {
            username: 'Dan',
            text: this.state.commentText
        }
        this.setState({
            comments: [...this.state.comments, newComment]
        })
    }
    
    render(){
        // console.log(this.state.comments);
        return (
            <div>
                <p>CommentSection</p>
                {this.state.comments.map( (comment, index) =>
                    <Comment
                    comment={comment}
                    key={index}
                    />
                )}
            </div>
    )}
}

export default CommentSection;