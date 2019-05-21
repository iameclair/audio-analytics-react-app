import React, {Component} from 'react';

class Details extends Component {
    state ={
        person:{}
    };
    componentDidMount() {
        const {match: {params}} = this.props;
        let userId = params.id;
        fetch(`http://localhost:8080/api/users/${userId}`)
            .then(user =>{
                user.text().then(data => {
                    const json_data = data && JSON.parse(data);
                    this.setState({person: json_data})
                });
            })
    }

    render() {
        const {person} = this.state;
        console.log(person.image);
        return (
            <div className="card" style={{"width": "18rem"}}>
                <img className="card-img-top" src={person.image} alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title">{person.name}</h5>
                        <p className="card-text"> Age: {person.age}</p>
                        <button className="btn btn-primary">Occupation: {person.occupation}</button>
                    </div>
            </div>
        );
    }
}

export default Details;
