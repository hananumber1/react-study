import React from 'react';
import logo from './logo.svg';
import './App.css';
import Comment from "./Comment";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      values:[]
    }
  }
  componentDidMount() {
    console.log('componentDidMount ')
  }
  componentDidUpdate() {
    console.log('componentDidUpdate')
  }
  componentWillUnmount() {
    console.log('componentWillUnmount')
  }

  render() {
    return (
        <div>

        </div>
    );
  }

}


/*const {values} = this.state;
    return (
        <div>
    values.map((item, index) => {

            <Comment name={item.name} content={item.content}/>
    })
        </div>
  )*/

export default App;
