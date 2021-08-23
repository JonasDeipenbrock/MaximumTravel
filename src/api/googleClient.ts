import axios from "axios";


const googleClient = axios.create({
    baseURL: "google_api_path"
})
export default googleClient