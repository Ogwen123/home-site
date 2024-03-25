import React from 'react'

import { SiteInfo } from "../global/types"

interface SiteChipProps {
    site: SiteInfo
}

const SiteChip = ({ site }: SiteChipProps) => {

    React.useEffect(() => {
        `/site/${site.id}`
    }, [])

    return (
        <div className='w-[calc(100%-40px)] h-[150px] mx-[20px] my-[10px] bg-bgdark rounded-lg p-[20px] flex flex-row'>
            <div className='w-3/4'>
                <div className='text-2xl' style={{ color: site.colour }}>{site.name}</div>
                <div className='text-md text-gray-500'>{site.description}</div>
            </div>
            <div className='w-1/4 fc'>
                <a href={`/site/${site.id}`}><button className="button">View Status</button></a>
            </div>
        </div>
    )
}

export default SiteChip