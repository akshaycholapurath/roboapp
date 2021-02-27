import react, {Component} from 'react';
import './App.css';
import 'tachyons';
import CardList from "./components/CardList";
import SearchBox from './components/SearchBox';
import Scroll from "./components/Scroll";

class App extends Component {
  constructor(props){
    super(props);
    this.state={
        searchfield:"",
        robots:[]
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=> response.json())
      .then(users=> this.setState({robots:users}));
  }

  onSearchChange = (event)=>{
    this.setState({searchfield:event.target.value});
    
  }

  render(){

    const filteredRobots = this.state.robots.filter(robot=>{
      return robot.name.toLocaleLowerCase().includes(this.state.searchfield.toLocaleLowerCase());
    })
  
    if(this.state.robots.length===0){
      return <h1 className="tc">LOADING</h1>
    } else {
          return (
            <div className="tc">
              <h1>ROBO FRIENDS</h1> 
              <SearchBox searchChange={this.onSearchChange} />
              <Scroll>
                <CardList robots={filteredRobots} />
              </Scroll>
            </div>
          );
        }
  }
}

export default App;
