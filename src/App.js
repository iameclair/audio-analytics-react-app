import React,{Component} from 'react';
import './App.css';
import {BrowserRouter, Link} from "react-router-dom";

class App extends Component{
  state = {
    famousPeople:[]
  };
  componentDidMount() {
    fetch("http://localhost:8080/api/users")
        .then(users =>{
          users.text().then(data => {
            const json_data = data && JSON.parse(data);
            this.setState({famousPeople: json_data})
          });
        })
  }
  renderFamousPeople=(famousPeople)=>{
    console.log(famousPeople);
    return famousPeople.map((user) =>{
      return<tr>
              <th scope="row">{user.id}</th>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.occupation}</td>
              <td><Link to={`/users/${user.id}`} className="btn btn-block btn-info">View Details</Link></td>
      </tr>
    })
  };
  render() {
    const {famousPeople} = this.state;
    return (
        <div className="App">
          <div>
            <h3> Welcome to famous people App</h3>
          </div>
            <table className="table table-dark">
                <thead>
                <tr>
                    <th scope="col">id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Age</th>
                    <th scope="col">Occupation</th>
                    <th scope="col">Details</th>
                </tr>
                </thead>
                <tbody>
                    {this.renderFamousPeople(famousPeople)}
                </tbody>'
            </table>
        </div>
    );
  }
}

export default App;
