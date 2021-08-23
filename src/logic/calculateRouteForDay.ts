import { getBoard } from "../api/dbahn/getBoard"
import { getLocation } from "../api/dbahn/getLocation"
import { getRoute } from "../api/dbahn/getRoute"
import { LocationResponse, RouteStop, StopResponse } from "../models/dbahn"


async function calculateRouteForDate(location: string, date: Date) {
    const locationResponse = await getLocation(location)
    const locations: LocationResponse = locationResponse.data
    const locationId = locations[0].id  //! Only takes first match into account
    console.log("Retrieved locations")

    const boardResponse = await getBoard(location, date)
    const boards: StopResponse = boardResponse.data
    console.log("retrieved boards")

    const routes = new Map<string, RouteStop[]>()
    /* for (const board of boards) {
        const route: RouteStop[] = (await getRoute(board.detailsId)).data
        console.log(route)
        routes.set(board.detailsId, route)
        console.log(routes)
    }
     */
    console.log("Trying to get single route")
    try {   
        const routeResponse = await getRoute(boards[0].detailsId)
        console.log(routeResponse)
    } catch (error) {
        console.error(error.message)
    }
}

export default calculateRouteForDate