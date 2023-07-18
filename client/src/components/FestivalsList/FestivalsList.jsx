import { Col } from "react-bootstrap"
import FestivalCard from "../FestivalCard/FestivalCard"


const FestivalsList = ({ festivals }) => {
    return (
        festivals.map(elm => {
            return (
                <Col md={{ span: 4 }} key={elm._id}>
                    <FestivalCard {...elm} />
                </Col>

            )
        }))

}
export default FestivalsList