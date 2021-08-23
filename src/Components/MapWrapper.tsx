import { Button } from '@material-ui/core'
import React from 'react'
import { getLocation } from '../api/dbahn/getLocation'
import calculateRouteForDate from '../logic/calculateRouteForDay'
import CustomMap from './CustomMap'
import SearchField from './SearchField'

function MapWrapper() {
    return (
        <>
            <SearchField />
            <CustomMap />
            <Button
                onClick={async () => {
                    await calculateRouteForDate('Karlsruhe', new Date(Date.now()))
                    console.log("retrieved info")
                }}
            >Test API</Button>
        </>
    )
}
export default MapWrapper