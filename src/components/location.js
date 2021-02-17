import React, { Component, useEffect } from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import $, { event } from 'jquery';
import Popper from 'popper.js';
import { Container, Col, Row, Alert } from 'react-bootstrap';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';


/*  resultado.sort((a,b) => (a.name> b.name) ? 1 : -1)
const [formData, setfromData] = useState({
    orderby: ""
}) */

const Restaurants = () => {


    const resultado = [
        {
            id: "851f799f-0852-439e-b9b2-df92c43e7672",
            rating: 1,
            name: "Zarajas, Bahena and Kano",
            contact: {
                site: "https://federico.com",
                email: "Anita_Mata71@hotmail.com",
                phone: "534 814 204"
            },
            address: {
                street: "82247 Mariano Entrada",
                city: "Mérida Alfredotown",
                state: "Durango",
                location: {
                    lat: 19.440057053713137,
                    lng: -99.12704709742486
                }
            }
        },
        {
            id: "851f799f-0852-439e-b9b2-df92c43e7672",
            rating: 1,
            name: "Barajas, Bahena and Kano",
            contact: {
                site: "https://federico.com",
                email: "Anita_Mata71@hotmail.com",
                phone: "534 814 204"
            },
            address: {
                street: "82247 Mariano Entrada",
                city: "Mérida Alfredotown",
                state: "Durango",
                location: {
                    lat: 19.440057053713137,
                    lng: -99.12704709742486
                }
            }
        },
        {
            id: "851f799f-0852-439e-b9b2-df92c43e7672",
            rating: 1,
            name: "Barajas, Bahena and Kano",
            contact: {
                site: "https://federico.com",
                email: "Anita_Mata71@hotmail.com",
                phone: "534 814 204"
            },
            address: {
                street: "82247 Mariano Entrada",
                city: "Mérida Alfredotown",
                state: "Durango",
                location: {
                    lat: 19.440057053713137,
                    lng: -99.12704709742486
                }
            }
        },
        {
            id: "4e17896d-a26f-44ae-a8a4-5fbd5cde79b0",
            rating: 0,
            name: "Hernández - Lira",
            contact: {
                site: "http://graciela.com.mx",
                email: "Brandon_Vigil@hotmail.com",
                phone: "570 746 998"
            },
            address: {
                street: "93725 Erick Arroyo",
                city: "Mateofurt",
                state: "Hidalgo",
                location: {
                    lat: 19.437904276994995,
                    lng: -99.12865767750226
                }
            }
        }
    ]
    

    const [datos, setdatos] = React.useState(null)
    React.useEffect(() => {


        
        setdatos(datos)
    }, [])
    
    

    
}

const mapStyles = {
    width: '100%',
    height: '100%'
};

// const [makers, setMarkers] = React.useEffect([]);



export class MapContainer extends Component {

    render() {
        return (


            <Container>
                <Row >

                    <Col sm={4} >
                        <div class="map">
                            <Alert variant="success">
                                <Alert.Heading>Please, enterder a radius.</Alert.Heading>
                                <p>
                                Please, enterder a radius in meters.
                             </p>
                             <form>
                             <input type="text" name="radius" class="form-control" id="" placeholder=""></input>
                             </form>
                            
                            </Alert>
                            <Alert variant="success">
                                <Alert.Heading class="text-center">Details</Alert.Heading>
                                <p>
                               

                             </p>
                            
                            
                            </Alert>
                            
                        </div>
                    </Col>
                    <Col sm={8}>
                        <Map

                            google={this.props.google}

                            zoom={14}
                            rankby={500}
                            initialCenter={{
                                lat: 19.44,
                                lng: -99.12
                            }}
                            onClick={(event)=>{
                                console.log(event);
                            }}
                            >
                               
                           {  
                            <Marker key="marker_1"

                            initialCenter={{
                                lat: 19.44,
                                lng: -99.12
                            }}

                            /> }
                            

                        </Map>


                    </Col>


                </Row>


            </Container>





        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyDTtW1ZT2UogfZpmS2m88E2hdm8y52wr4s'
})(MapContainer);