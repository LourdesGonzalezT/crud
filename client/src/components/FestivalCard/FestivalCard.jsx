import { Card, Button } from "react-bootstrap"
import './FestivalCard.css'
import { Link } from "react-router-dom"


const FestivalCard = ({ name, image, _id }) => {

    return (

        <Card className="mb-3 FestivalCard">
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <div className="d-grid">
                    <Link to={`/detalles/${_id}`} className="btn btn-dark btn-lg">Detalles</Link>
                </div>

            </Card.Body>
        </Card>

    )

}

export default FestivalCard