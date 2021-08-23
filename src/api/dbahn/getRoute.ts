import dbahnClient from "../dbahnClient";


export function getRoute(detailsId: string) {
    return dbahnClient.get(
        `fahrplan-plus/v1/journeyDetails/${detailsId}`, {
            headers: {
                'Authorization': 'Bearer ' + process.env.REACT_APP_BAHN_API_KEY,
                'Accept': 'application/json',
                'Access-Control-Allow-Origin': '*',
            }
        }
    )
}