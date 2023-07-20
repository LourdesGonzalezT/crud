import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import festivalsService from "../../services/festivals.services"
import { Container, Row, Col, Button, Image } from "react-bootstrap"
import Loader from '../../components/Loader/Loader'

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
                    <Loader />
                    :
                    <>
                        <h1>Detalles de {festival.name}</h1>
                        <hr />
                        <Row>

                            <Col md={{ span: 4 }}>
                                <Link to={festival.webSite}>
                                    <div className="user-image">
                                        <Image src={festival.image} style={{ width: '100%' }} />
                                    </div>
                                </Link>
                            </Col>
                            <Col md={{ span: 6 }}>
                                <h3>Información</h3>
                                <ul>
                                    <li>Fecha : {festival.date}</li>
                                    <li>Edición : {festival.edition}</li>
                                    <li>Estilo musical : {festival.music}</li>
                                    <li>Artistas : {festival.artistsInvited}</li>
                                    <li>Web : {festival.webSite}</li>
                                    <li>Recinto : {festival.venue}</li>
                                    <li>Dirección : {festival.address}</li>
                                    <li>Ciudad : {festival.city}</li>
                                    <li>Nombre del contacto : {festival.contactName}</li>
                                    <li>Teléfono del contacto : {festival.contactPhone}</li>
                                    <li>Email del contacto : {festival.contactEmail}</li>
                                    <li>Observaciones : {festival.observations}</li>
                                </ul>
                                <hr />
                                <Link to="/listado">
                                    <Button as="div" variant="dark">Volver a todos los festivales</Button>
                                </Link>
                            </Col>
                        </Row>
                    </>
            }
        </Container>

    )

}

export default FestivalDetailsPage
