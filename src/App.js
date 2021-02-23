
import { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CourseList from './CourseList';

class App extends Component{
  render(){
    return(
      <div className="App">
        <h1 className="text-center">Course AppStore</h1>
        <br />
        <CourseList />
      </div>
    );
  }
}

export default App;
