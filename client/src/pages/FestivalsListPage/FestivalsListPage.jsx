import { useEffect, useState } from "react"
import { Container, Row, Modal, Button } from "react-bootstrap"
import festivalsService from "../../services/festivals.services"
import FestivalsList from "../../components/FestivalsList/FestivalsList"
import NewFestivalForm from "../../components/NewFestivalForm/NewFestivalForm"

const FestivalsListPage = () => {

    const [festivals, setFestivals] = useState([])
    const [showModal, setShowModal] = useState(false)


    useEffect(() => {
        updateList()
    }, [])

    const updateList = () => {
        festivalsService
            .getFestivals()
            .then(({ data }) => setFestivals(data))
            .catch(err => console.log(err))
    }

    return (
        <Container>
            <h1>Todos los festivales</h1>
            <Button variant="dark" size="sm" onClick={() => setShowModal(true)}>Crear nuevo festival</Button>
            <hr />
            <Row>
                {
                    !festivals
                        ?
                        <h1>CARGANDO</h1>
                        :
                        <FestivalsList festivals={festivals} />
                }
            </Row>

            <Modal show={showModal} onHide={() => setShowModal(false)} >
                <Modal.Header closeButton>
                    <Modal.Title>Nuevo festival</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <NewFestivalForm closeModal={() => setShowModal(false)} updateList={updateList} />
                </Modal.Body>
            </Modal>

        </Container >
    )
}

export default FestivalsListPage