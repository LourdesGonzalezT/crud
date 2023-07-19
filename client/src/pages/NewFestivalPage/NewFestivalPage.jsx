import { Container } from "react-bootstrap"
import NewFestivalForm from "../../components/NewFestivalForm/NewFestivalForm"

const NewFestivalPage = () => {
    return (
        <Container>
            <h1>Nuevo Festival</h1>
            <hr />
            <NewFestivalForm />
        </Container>

    )
}

export default NewFestivalPage