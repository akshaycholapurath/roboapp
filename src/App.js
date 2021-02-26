import react, {Component} from 'react';
import './App.css';
import 'tachyons';
import CardList from "./components/CardList";
import {robots} from './robots';
import SearchBox from './components/SearchBox';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
        searchfield:"",
        robots:robots
    }
  }

  onSearchChange = (event)=>{
    this.setState({searchfield:event.target.value});
    
  }

  render(){

    const filteredRobots = this.state.robots.filter(robot=>{
      return robot.name.toLocaleLowerCase().includes(this.state.searchfield.toLocaleLowerCase());
    })
  

  return (
    <div className="tc">
      <h1>ROBO FRIENDS</h1>
      <SearchBox searchChange={this.onSearchChange} />
      <CardList robots={filteredRobots} />
    </div>
  );
  }
}

export default App;
