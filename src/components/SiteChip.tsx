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
        <div className='w-[calc(100%-40px)] h-[150px] mx-[20px] my-[10px] bg-bgdark rounded-md p-[20px] flex flex-row'>
            <div className='w-3/4'>
                <div className='text-2xl' style={{ color: site.colour }}>{site.alias}</div>
                <div className='text-md text-gray-500'>{site.description}</div>
            </div>
            <div className='w-1/4 fc'>
                <div className='w-1/2 mx-[10px]'>
                    <a href={`/site/${site.id}`}><button className="button">View Status</button></a>
                    <a href={site.url}><button className="button">Go To Site</button></a>
                </div>
                <div className='w-1/2 mx-[10px]'>
                    <a href={site.github_url}><button className={"button " + (!site.github_url ? "opacity-50 bg-maindark" : "")} disabled={site.github_url === undefined} title={site.github_url === undefined ? "Repo is most likely private" : ""}>View Github Repo</button></a>
                    <a href={site.staging_url}><button className={"button " + (!site.staging_url ? "opacity-50 bg-maindark" : "")} disabled={site.staging_url === undefined} title={site.staging_url === undefined ? "This site does not have a staging site" : ""}>Go To Staging Site</button></a>
                </div>
            </div>
        </div>
    )
}

export default SiteChip