import React from 'react'
import getStatus from "../utils/getStatus"

const Site = () => {

    React.useEffect(() => {
        getStatus("")
    }, [])

    return (
        <div>WIP</div>
    )
}

export default Site