import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import { Table, tbody, thead, th, tr, td } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import CustomNavbar from './Navbar';


class RestorantList extends Component {
    constructor() {
        super();
        this.state = {
            list: null
        }
    }
    getData(){
        fetch('http://localhost:8000/api/resto/').then((response) => {
            response.json().then((result) => {
                this.setState({
                    list: result,
                })
            })
        })
    }
    delete(id)
    {
        fetch('http://localhost:8000/api/resto/'+id,{method:'DELETE'}).then((response) => {
            if(response.status == 204){
                this.getData()
            }
        })
    }
    componentDidMount() {
        this.getData()
    }
    render() {
        return (
            <div>
                <CustomNavbar />
                <h2>Restorant List Component</h2>
                {
                    (this.state.list && this.state.list.length > 0)  ?
                        <div>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Address</th>
                                        <th>Rating</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>{
                                    this.state.list.map(
                                        (item, index) =>
                                            <tr key={item.id}>
                                                <td>{index}</td>
                                                <td>{item.name}</td>
                                                <td>{item.email}</td>
                                                <td>{item.address}</td>
                                                <td>{item.rating}</td>
                                                <td>
                                                    <Link to={"/update/"+item.id}><FontAwesomeIcon icon={faEdit} color="orange" /></Link>
                                                    &nbsp; &nbsp;<span onClick={()=>this.delete(item.id)}><FontAwesomeIcon icon={faTrash} color="green" /></span>
                                                </td>
                                            </tr>

                                    )}</tbody></Table></div> :
                        <p>There is no record!</p>
                }
            </div>
        );
    }
}

export default RestorantList;