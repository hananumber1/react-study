import React, {Component} from 'react';
import ReactDom from 'react-dom';

class LikeButton extends React.Component {
    constructor(props){
        super(props);
        this.state={
            isToggleOn:false
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        this.setState(state=>({
            isToggleOn: !state.isToggleOn
        }));
    }
    render() {
        return (
            <button type={"button"} onClick={this.handleClick()}>
                {this.state.isToggleOn?'on':'off'}
            </button>
        );
    }
}

ReactDom.render(
    <LikeButton/>,
    document.getElementById('root')
)
export default  ;