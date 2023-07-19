import { useState } from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap';
import festivalsService from '../../services/festivals.services';


const NewFestivalForm = ({ closeModal, updateList }) => {

    const [festivalData, setFestivalData] = useState({
        name: '',
        date: '',
        edition: '',
        webSite: '',
        image: '',
        venue: '',
        address: '',
        city: '',
        music: [],
        artistsInvited: [],
        contactName: '',
        contactPhone: '',
        contactEmail: '',
        observations: ''
    })

    const handleInputChange = e => {
        const { name, value } = e.target

        setFestivalData({ ...festivalData, [name]: value })
    }

    const handleSubmit = event => {
        event.preventDefault()

        festivalsService
            .createFestival(festivalData)
            .then(() => {
                closeModal()
                updateList()
            })
            .catch(err => console.log(err))
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Nombre del festival</Form.Label>
                <Form.Control type="text" value={festivalData.name} onChange={handleInputChange} name="name" />
            </Form.Group>
            <Row>
                <Col>
                    <Form.Group className="mb-3" controlId="date">
                        <Form.Label>Fecha</Form.Label>
                        <Form.Control type="text" value={festivalData.date} onChange={handleInputChange} name="date" />
                    </Form.Group>
                </Col>

                <Col>
                    <Form.Group className="mb-3" controlId="edition">
                        <Form.Label>Edición</Form.Label>
                        <Form.Control type="text" value={festivalData.edition} onChange={handleInputChange} name="edition" />
                    </Form.Group>
                </Col>

                <Col>
                    <Form.Group className="mb-3" controlId="webSite">
                        <Form.Label>Sitio web</Form.Label>
                        <Form.Control type="text" value={festivalData.webSite} onChange={handleInputChange} name="webSite" />
                    </Form.Group>
                </Col>

                <Col>
                    <Form.Group className="mb-3" controlId="image">
                        <Form.Label>Cartel (URL)</Form.Label>
                        <Form.Control type="text" value={festivalData.image} onChange={handleInputChange} name="image" />
                    </Form.Group>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Form.Group className="mb-3" controlId="venue">
                        <Form.Label>Recinto</Form.Label>
                        <Form.Control type="text" value={festivalData.venue} onChange={handleInputChange} name="venue" />
                    </Form.Group>
                </Col>

                <Col>
                    <Form.Group className="mb-3" controlId="address">
                        <Form.Label>Dirección</Form.Label>
                        <Form.Control type="text" value={festivalData.address} onChange={handleInputChange} name="address" />
                    </Form.Group>
                </Col>

                <Col>
                    <Form.Group className="mb-3" controlId="city">
                        <Form.Label>Ciudad</Form.Label>
                        <Form.Control type="text" value={festivalData.city} onChange={handleInputChange} name="city" />
                    </Form.Group>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Form.Group className="mb-3" controlId="music">
                        <Form.Label>Estilo musical</Form.Label>
                        <Form.Control type="text" value={festivalData.music} onChange={handleInputChange} name="music" />
                    </Form.Group>
                </Col>

                <Col>
                    <Form.Group className="mb-3" controlId="artistsInvited">
                        <Form.Label>Artistas participantes</Form.Label>
                        <Form.Control type="text" value={festivalData.artistsInvited} onChange={handleInputChange} name="artistsInvited" />
                    </Form.Group>
                </Col>
            </Row>

            <Row>
                <Col>

                    <Form.Group className="mb-3" controlId="contactName">
                        <Form.Label>Persona de contacto</Form.Label>
                        <Form.Control type="text" value={festivalData.contactName} onChange={handleInputChange} name="contactName" />
                    </Form.Group>
                </Col>

                <Col>
                    <Form.Group className="mb-3" controlId="contactPhone">
                        <Form.Label>Teléfono del contacto</Form.Label>
                        <Form.Control type="text" value={festivalData.contactPhone} onChange={handleInputChange} name="contactPhone" />
                    </Form.Group>
                </Col>

                <Col>
                    <Form.Group className="mb-3" controlId="contactEmail">
                        <Form.Label>Email del contacto</Form.Label>
                        <Form.Control type="text" value={festivalData.contactEmail} onChange={handleInputChange} name="contactEmail" />
                    </Form.Group>
                </Col>
            </Row>

            <Form.Group className="mb-3" controlId="observations">
                <Form.Label>Observaciones</Form.Label>
                <Form.Control type="text" value={festivalData.observations} onChange={handleInputChange} name="observations" />
            </Form.Group>

            <div className="d-grid">
                <Button variant="dark" type="submit">Crear Festival</Button>
            </div>
        </Form>
    )
}

export default NewFestivalForm