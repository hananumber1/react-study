import React from 'react';
import logo from './logo.svg';
import './App.css';
import Comment from "./Comment";

const valuesEx=[
  {name:'111111', content:'11111'},
  {name:'22222', content:'22222'},
  {name:'33333', content:'33333'},
  {name:'444444', content:'44444'},
];
var timer;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      values:[]
    }
  }
  componentDidMount() {
    let values = this.state.values;
    timer = setInterval(()=>{
      if(values.length < valuesEx.length){
        let index = values.length;
        values.push(valuesEx[index]);
        this.setState({
          values:values
        });
      } else if(timer) {
        clearInterval(timer)
      }
    },1000)
  }
  return (

  );

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
