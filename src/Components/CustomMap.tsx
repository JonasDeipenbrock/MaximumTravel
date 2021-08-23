import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api'
import blueMapStyle from '../map-styles/blueMapStyle'
import greyMapStyle from '../map-styles/greyMapStyle'
import { Libraries } from '@react-google-maps/api/dist/utils/make-load-script-url'

type Props = {

}

const containerStyle = {
    width: 500,
    height: 500
};

const libraries: Libraries = ["places"]

const center = {
    lat: 49.006889,
    lng: 8.403653,
}
const options = {
    styles: greyMapStyle,
    disableDefaultUI: true
}

function GMap() {
    const { isLoaded, loadError } = useJsApiLoader({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY!,
        id: 'fa9a1bc2cb56ad9f',
        libraries
    })
    if (loadError) return <div>Error loading maps</div>
    if (!isLoaded) return <div>Loading map</div>
    return (
        <div>
            <GoogleMap
                mapContainerStyle={containerStyle}
                zoom={8}
                center={center}
                options={options}
            >
            </GoogleMap>
        </div>
    )
}

function CustomMap() {
    return (
        <>
            <GMap/>
        </>
    )
}
export default CustomMap