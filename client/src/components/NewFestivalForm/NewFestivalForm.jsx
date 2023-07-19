import { useState } from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap';


const NewFestivalForm = () => {

    const [festivalData, setFestivalData] = useState({
        name: 'FISTAAAAAFESTIVALERA',
        date: '',
        edition: '2',
        webSite: '',
        image: '',
        venue: 'en mi pueblo',
        address: '',
        city: '',
        music: [],
        artistsInvited: [],
        contactName: '',
        contactPhone: '',
        contactEmail: '',
        observations: ''
    })

    return (
        <Form>
            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Nombre del festival</Form.Label>
                <Form.Control type="text" value={festivalData.name} onChange={handleInputChange} />
            </Form.Group>
            <Row>
                <Col>
                    <Form.Group className="mb-3" controlId="date">
                        <Form.Label>Fecha</Form.Label>
                        <Form.Control type="text" value={festivalData.date} />
                    </Form.Group>
                </Col>

                <Col>
                    <Form.Group className="mb-3" controlId="edition">
                        <Form.Label>Edición</Form.Label>
                        <Form.Control type="text" value={festivalData.edition} />
                    </Form.Group>
                </Col>

                <Col>
                    <Form.Group className="mb-3" controlId="webSite">
                        <Form.Label>Sitio web</Form.Label>
                        <Form.Control type="text" value={festivalData.webSite} />
                    </Form.Group>
                </Col>

                <Col>
                    <Form.Group className="mb-3" controlId="image">
                        <Form.Label>Cartel (URL)</Form.Label>
                        <Form.Control type="text" value={festivalData.image} />
                    </Form.Group>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Form.Group className="mb-3" controlId="venue">
                        <Form.Label>Recinto</Form.Label>
                        <Form.Control type="text" value={festivalData.venue} />
                    </Form.Group>
                </Col>

                <Col>
                    <Form.Group className="mb-3" controlId="address">
                        <Form.Label>Dirección</Form.Label>
                        <Form.Control type="text" value={festivalData.address} />
                    </Form.Group>
                </Col>

                <Col>
                    <Form.Group className="mb-3" controlId="city">
                        <Form.Label>Ciudad</Form.Label>
                        <Form.Control type="text" value={festivalData.city} />
                    </Form.Group>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Form.Group className="mb-3" controlId="music">
                        <Form.Label>Estilo musical</Form.Label>
                        <Form.Control type="text" value={festivalData.music} />
                    </Form.Group>
                </Col>

                <Col>
                    <Form.Group className="mb-3" controlId="artistsInvited">
                        <Form.Label>Artistas participantes</Form.Label>
                        <Form.Control type="text" value={festivalData.artistsInvited} />
                    </Form.Group>
                </Col>
            </Row>

            <Row>
                <Col>

                    <Form.Group className="mb-3" controlId="contactName">
                        <Form.Label>Persona de contacto</Form.Label>
                        <Form.Control type="text" value={festivalData.contactName} />
                    </Form.Group>
                </Col>

                <Col>
                    <Form.Group className="mb-3" controlId="contactPhone">
                        <Form.Label>Teléfono del contacto</Form.Label>
                        <Form.Control type="text" value={festivalData.contactPhone} />
                    </Form.Group>
                </Col>

                <Col>
                    <Form.Group className="mb-3" controlId="contactEmail">
                        <Form.Label>Email del contacto</Form.Label>
                        <Form.Control type="text" value={festivalData.contactEmail} />
                    </Form.Group>
                </Col>
            </Row>

            <Form.Group className="mb-3" controlId="observations">
                <Form.Label>Observaciones</Form.Label>
                <Form.Control type="text" value={festivalData.observations} />
            </Form.Group>

            <div className="d-grid">
                <Button variant="dark" type="submit">Crear Festival</Button>
            </div>
        </Form>
    )
}

export default NewFestivalForm