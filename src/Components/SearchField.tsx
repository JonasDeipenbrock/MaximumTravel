import { Autocomplete, Box, TextField } from '@material-ui/core'
import React from 'react'
import cities from '../data/test-stations.json'

type Props = {

}
//! New to optimize handling large sets of data for the cities

function SearchField() {
    return (
        <Box>
            <Autocomplete
                id="city-input"
                options={cities.map(city => city.Ort)}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Search input"
                        margin="normal"
                        variant="outlined"
                        inputProps={{...params.inputProps, type: 'search'}}
                    />
                )}
            />
        </Box>
    )
}
export default SearchField