import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import festivalsService from "../../services/festivals.services"
import { Container, Row, Col } from "react-bootstrap"

const FestivalDetailsPage = () => {

    const { festival_id } = useParams()

    const [festival, setFestival] = useState({})

    useEffect(() => {
        festivalsService
            .getOneFestival(festival_id)
            .then(({ data }) => setFestival(data))
            .catch(err => console.log(err))
    }, [])

    return (
        <Container>
            {
                !festival
                    ?
                    <h1>CARGANDO</h1>
                    :
                    <>
                        <h1>Detalles de {festival.name}</h1>
                        <hr />
                        <Row>
                            <Col md={{ span: 6 }}>
                                <h3>Información</h3>
                                <ul>
                                    <li>Fecha : {festival.date}</li>
                                    <li>Edición : {festival.edition}</li>
                                    <li>Edición : {festival.edition}</li>
                                    <li>Web : {festival.webSite}</li>
                                    <li>Recinto : {festival.venue}</li>
                                    <li>Dirección : {festival.address}</li>
                                    <li>Ciudad : {festival.city}</li>
                                    <li>Imagen : {festival.image}</li>
                                    <li>Nombre del contacto : {festival.contactName}</li>
                                    <li>Teléfono del contacto : {festival.contactPhone}</li>
                                    <li>Email del contacto : {festival.contactEmail}</li>
                                    <li>Observaciones : {festival.observations}</li>
                                    <li>Recinto : {festival.contactEmail}</li>




                                </ul>
                            </Col>
                        </Row>
                    </>
            }
        </Container>

    )

}

export default FestivalDetailsPage
