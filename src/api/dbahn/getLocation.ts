import dbahnClient from "../dbahnClient"


export function getLocation(location: string) {
    return dbahnClient.get(
        `fahrplan-plus/v1/location/${location}`, {
            headers: {
                Authorization: 'Bearer ' + process.env.REACT_APP_BAHN_API_KEY,
                Accept: 'application/json',
            }
        }
    )
}