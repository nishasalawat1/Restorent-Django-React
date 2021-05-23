import React, { Component } from 'react';
import { Table, tbody, thead, th, tr, td, Form, Container } from 'react-bootstrap';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import CustomNavbar from './Navbar';

class RestorantSearch extends Component {
    constructor() {
        super();
        this.state = {
            searchData: null,
            lastSearch: "",
        }
    }
    search(key) {
        this.setState({ lastSearch: key })
        fetch('http://localhost:8000/api/resto/?q=' + key).then(
            (response) => {
                response.json().then(
                    (result) => {
                        result.length > 0 ? this.setState({ searchData: result }) : this.setState({ searchData: null });
                    })
            })
    }
    delete(id) {
        fetch('http://localhost:8000/api/resto/' + id, { method: 'DELETE' }).then((response) => {
            if (response.ok){
                this.search(this.state.lastSearch)
            }
        })
    }
    render() {
        return (
            <div>
                <CustomNavbar />
                <h2>Restorant Search Component</h2>
                <Container>
                    <Form.Control
                        type="text"
                        onChange={(event) => { this.search(event.target.value) }}
                        placeholder="Search Restorant" />
                    {
                        this.state.searchData ?
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
                                        this.state.searchData.map(
                                            (item, index) =>
                                                <tr key={item.id}>
                                                    <td>{index}</td>
                                                    <td>{item.name}</td>
                                                    <td>{item.email}</td>
                                                    <td>{item.address}</td>
                                                    <td>{item.rating}</td>
                                                    <td>
                                                        <Link to={"/update/" + item.id}><FontAwesomeIcon icon={faEdit} color="orange" /></Link>
                                                    &nbsp; &nbsp;<span onClick={() => this.delete(item.id)}><FontAwesomeIcon icon={faTrash} color="green" /></span>
                                                    </td>
                                                </tr>

                                        )}</tbody></Table></div> :
                            <p>There is no record!</p>
                    }
                </Container>
            </div>
        );
    }
}

export default RestorantSearch;