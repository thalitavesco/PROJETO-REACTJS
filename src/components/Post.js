import React from 'react';

import Comemment from './Comment';

export default class Post extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            comments:[ ],
            newCommentText:''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
    }

    handleSubmit(e){
        this.setState({
            comments: [
            ...this.state.comments,
            {text : this.state.newCommentText}
            ]

        });

        this.setState({ newCommentText:''});
        e.preventDefault();

    }

    handleTextChange(e){
        this.setState({ newwCommentText: e.target.value})
    }
    render() {
        return(
            <div>
                <h2>{ this.props.title } </h2>

                <form onSubmit = {this.handleSubmit}>
                    <input value={this.state.newCommentText} 
                    onChange = {this.handleTextChange}
                    >
                    <button type="submit">Comentar</button>
                    </input>
                </form>
                { this.state.comments.map((comment, index) => {
                    return <Comment key = {index} text = {Comment,text} />
                }
                )}

            </div>
        );
    }
}
