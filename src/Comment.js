import React, {Component} from 'react';

class Comment extends Component {
    render() {
        const {name,content} = this.props;
        return (
            <div>
                <span>{name}</span>
                <span>{content}</span>
            </div>
        );
    }
}

export default Comment;