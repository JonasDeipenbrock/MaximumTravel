import dbahnClient from "../dbahnClient";


export function getBoard(location: string, date: Date) {
    return dbahnClient.get(
        `fahrplan-plus/v1/departureBoard/${location}?date=${date.toISOString()}`, {
            headers: {
                Authorization: 'Bearer ' + process.env.REACT_APP_BAHN_API_KEY,
                Accept: 'application/json',
            }
        }
    )
}