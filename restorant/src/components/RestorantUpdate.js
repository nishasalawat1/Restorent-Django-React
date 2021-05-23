import React, { Component } from 'react';
import { Button } from "react-bootstrap";
import CustomNavbar from './Navbar';

class RestorantUpdate extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            email: "",
            address: "",
            rating: "",
            id:null,
        }

    }
    componentDidMount(){
        fetch('http://localhost:8000/api/resto/'+this.props.match.params.id).then((response) => {
            response.json().then((result) => {
                this.setState({
                    name: result.name,
                    address:result.address,
                    rating:result.rating,
                    id:result.id,
                    email:result.email,
                })
            })
        })
    }
    update() {
        fetch('http://localhost:8000/api/resto/'+this.state.id+'/', {
            method: 'Put',
            body: JSON.stringify(this.state),
            headers: { 'Content-Type': 'application/json' }
        }).then(
            (response) => {
                response.json().then(
                    (result) => {
                        alert("Component Updated successfully!")
                    })
            })
    }
    render() {
        console.warn(this.props.match.params.id)
        return (
            <div>
                <CustomNavbar />
                <h2>Restorant Update Component</h2>
                <input
                    name="name"
                    onChange={(event) => this.setState({ name: event.target.value })}
                    placeholder="Restorant Name" 
                    value={this.state.name}
                    /><br /><br />
                <input
                    name="email"
                    onChange={(event) => this.setState({ email: event.target.value })}
                    placeholder="Restorant Email" 
                    value={this.state.email}
                    /><br /><br />
                <input
                    name="address"
                    onChange={(event) => this.setState({ address: event.target.value })}
                    placeholder="Restorant Address" 
                    value={this.state.address}
                    /><br /><br />
                <input
                    name="rating"
                    onChange={(event) => this.setState({ rating: event.target.value })}
                    placeholder="Restorant Rating" 
                    value={this.state.rating}
                    /><br /><br />
                <Button variant="info" onClick={() => this.update()}>Update Restorant</Button>
            </div>
        );
    }
}

export default RestorantUpdate;