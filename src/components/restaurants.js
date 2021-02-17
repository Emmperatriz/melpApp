import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Accordion, Card, Button, DropdownButton, Dropdown, ButtonToolbar } from 'react-bootstrap';
import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';
import Icon from '@material-ui/core/Icon';
import restaurantsData from "../data/restaurantsData.json";
const Restaurants = () => {


   

    const [datos, setdatos] = React.useState(null)
    React.useEffect(() => {


        // obtenerDatos()
        setdatos(datos)
    }, [])
    //ACCESO DENEGADO POR EL SERVER

    /* const obtenerDatos = async () =>{
        const data = await fetch('https://recruiting-datasets.s3.us-east-2.amazonaws.com/data_melp.json')
        const resultado = await data.json()
        console.log(resultado)
    } */
    const handleChanage = event => {
        const target = event.target
        const name = event.target.name
        const value = target.value
        setfromData({
            ...formData,
            [name]: value
        })
    }

    const [formData, setfromData] = useState({
        orderby: ""
    })
    const element = formData.orderby
    if (element == "rating") {
        restaurantsData.sort((a, b) => (a.rating > b.rating) ? 1 : -1)
    } else {
        restaurantsData.sort((a, b) => (a.name > b.name) ? 1 : -1)
    }
    return (
        <div>

            <img src="/portada.jpg" class="image " alt="Portada"></img>

            <div class="container">
                <div class="bienvenida ">
                    <p class="p1">~Welcome to Melp~</p>
                    <p class="p3">    Information about the best restaurants in the city.</p>

                </div>
                <div class="radioButtom" >
                    <form class="form-group row">
                        <div>
                            <input type="radio" name="orderby" value="rating" onChange={handleChanage} />
                            <label > Order by rating  </label>
                        </div>
                        <div class="paizq d-flex justify-content-end">
                            <input type="radio" name="orderby" value="name" onChange={handleChanage} />
                            <label > Order by alphabetically  </label>
                        </div>
                    </form>
                </div>


                <div class="row">
                    {
                        restaurantsData.map(item => (

                            <div key="item.id" class="col-md-4 mb-4">

                                <div class="card text-gray rounded-circle">
                                    <div class="card-body">
                                        <div ><img src="/gorro-chef.png" alt="gorro-chef"></img></div>

                                        <h5 class="card-title text-center" > <strong>{item.name}</strong></h5>
                                        <p class="pid text-center">{item.id}</p>

                                        <Accordion defaultActiveKey="">

                                            <Accordion.Toggle as={Card.Header} eventKey="0" >
                                                Contact
                                    </Accordion.Toggle>
                                            <Accordion.Collapse eventKey="0">
                                                <Card.Body>
                                                    <p>Site: {item.contact.site}</p>
                                                    <p>Email: {item.contact.email}</p>
                                                    <p>Phone: {item.contact.phone}</p>
                                                </Card.Body>
                                            </Accordion.Collapse>

                                            <Accordion.Toggle as={Card.Header} eventKey="1">
                                                Address
                                    </Accordion.Toggle>
                                            <Accordion.Collapse eventKey="1">
                                                <Card.Body>
                                                    <p>Street: {item.address.street}</p>
                                                    <p>City: {item.address.city}</p>
                                                    <p>State: {item.address.state}</p>
                                                    <p><strong>Location:</strong></p>
                                                    <p>Latitude: {item.address.location.lat}</p>
                                                    <p>Longitude: {item.address.location.lng}</p>
                                                </Card.Body>
                                            </Accordion.Collapse>

                                        </Accordion>
                                        <p class="container text-center"> <strong>Rating:</strong> {item.rating}</p>
                                        <div class="text-center"><button type="button" class="btn btn-success ">CHOOSE</button></div>
                                    </div>

                                </div>
                            </div>
                        ))
                    }

                </div>

            </div>



        </div>
    );
}

export default Restaurants;