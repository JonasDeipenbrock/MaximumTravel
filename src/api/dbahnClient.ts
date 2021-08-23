import axios from "axios";


const dbahnClient = axios.create({
    baseURL: "https://api.deutschebahn.com/"
})
export default dbahnClient