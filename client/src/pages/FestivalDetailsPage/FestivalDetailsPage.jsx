import { useEffect } from "react"
import { useParams } from "react-router-dom"
import festivalsService from "../../services/festivals.services"

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
        <h1>eeeeh aqui van los detalles--- {festival_id}</h1>
    )

}

export default FestivalDetailsPage
