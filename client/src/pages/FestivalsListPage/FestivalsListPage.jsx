import { useEffect, useState } from "react"
import { Container, Row } from "react-bootstrap"
import festivalsService from "../../services/festivals.services"
import FestivalsList from "../../components/FestivalsList/FestivalsList"

const FestivalsListPage = () => {

    const [festivals, setFestivals] = useState([])


    useEffect(() => {
        festivalsService
            .getFestivals()
            .then(({ data }) => setFestivals(data))
            .catch(err => console.log(err))
    }, [])
    return (
        <Container>
            <h1>Todos los festivales</h1>
            <hr />
            <Row>
                <FestivalsList festivals={festivals} />
            </Row>
        </Container >
    )
}

export default FestivalsListPage