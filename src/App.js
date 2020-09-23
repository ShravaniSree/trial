import React from 'react';
import logo from './logo.svg';
import {Button} from 'reactstrap';
import {Container, Row, Col} from 'reactstrap';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';

class Temporary extends React.Component{
  render(){
    const mystyle={
      backgroundColor: "black",
       textColor: "white",
       
    };
    return(<div class="container-fluid"><div class="well well-lg" style={mystyle}>
      <a href="#" style={{color:"white"}}>Home</a>
  </div> 
  </div>);
  }
}

class Temp extends React.Component{
  render(){
    const mystyle={
      backgroundColor: "black",
       color: "white",
       bottom:0,
        left: 0,
        right: 0,
    };
    return(
    <div class="container-fluid pt-3"><div class="well well-lg" style={mystyle}></div>
    </div>
    );
  }
}

class Logo extends React.Component{
  render()
  {
    return( <img src="./optum_logo.png"/> );
  }
}

class Forms extends React.Component{
  render(){
    return (
      <div class="container pt-5">
      <h3 class="text-warning">Ask a New Question</h3><br/>
      <textarea rows="20" cols="100"></textarea><br/>
      <div class="container pt-3">
      <Row>
      <Col sm={{ size: 'auto', offset: 1 }}>
      <h3> Conditions </h3>
      <input type="checkbox" id="covid" name="condition" value="Covid-19"/>
      <label for="covid">Covid</label><b>Tags</b><br/>
      <input type="checkbox" id="hyper"name="condition" value="HyperTension"/>
      <label for="hyper">HyperTension</label><br/>
      <input type="checkbox" id="cancer" name="condition" value="Cancer"/>
      <label for="cancer">Cancer</label><br/>
      </Col>
      <Col sm={{ size: 'auto', offset: 1 }}> 
      <h3>Tags</h3>
      <input type="text" name="tag"/>  <Button color="primary">Add</Button>
      </Col>
      </Row><br/>
      <Button color="success">Submit</Button>
      </div>
      </div>
    );
  }
}

class vertical extends React.Component{
 render()
 {
  const mystyle={
    border: "2px solid black", 
            height: "100px",
            position:"absolute", 
            left: "50%"
  }
  return(
  <div style={mystyle}></div>);
 }
}

class dummy extends React.Component{
  render()
  {
    return(
    );
  }
}

function App() {
  return (
  <div>      
      <Temporary/>
      <div class="container">
      <Logo/>
     <dummy/>
      </div>
      <Router>
      <Route path="/success" component={Forms}>
      </Route>
      </Router>
      <Temp/>
   </div>
    
  );
}

export default App;
