

export type LocationResponse = Array<Location>
export type StopResponse = Array<Stop>

/**
 * resembles a simple location in the style used by dbahn api
 */
export type Location = {
    name: string,
    lon: number,
    lat: number,
    id: number,
}

export type Stop = {
    name: string,
    detailsId: string,
    type: string,
}

export type RouteStop = {
    stopId: number,
    stopName: string,
    lat: number,
    lon: number,
}