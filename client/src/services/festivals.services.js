import axios from 'axios'

class FestivalService {
    constructor() {
        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/festivals`
        })
    }

    getFestivals() {
        return this.api.get('/getAllFestivals')
    }

    getOneFestival(festival_id) {
        return this.api.get(`/getOneFestival/${festival_id}`)
    }

    createFestival(festivalData) {
        return this.api.post('/createFestival', festivalData)
    }
}


const festivalsService = new FestivalService()

export default festivalsService