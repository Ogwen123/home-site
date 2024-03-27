import React from 'react'
import getStatus from "../utils/getStatus"
import { SiteInfo, SiteStatus } from '../global/types'
import { getSite } from '../utils/sites'

const Site = () => {

    const [statusData, setStatusData] = React.useState<SiteStatus | boolean>(true)
    const [siteData, setSiteData] = React.useState<SiteInfo>()

    React.useEffect(() => {
        const splitURL = location.pathname.split("/")
        const id = Number(splitURL[splitURL.length - 1])

        const site = getSite(id)

        if (site === undefined) {
            setStatusData(false)
            console.log("failed 1")
            return
        }

        setSiteData(site)

        getStatus(site.name).then((data) => {
            if (data.success) {
                setStatusData(data.data)
            } else {
                setStatusData(false)
                console.log("failed 3")
            }
        })
    }, [])

    return (
        <div className='mx-[15%] mt-[20px]'>
            {
                statusData === true ?
                    <div>
                        <div className='w-full h-[200px] bg-bgdark rounded-lg p-[20px] text-3xl mb-[10px]'>
                            <div>
                                Loading...
                            </div>

                        </div>
                        <div className='w-full h-[75px] bg-bgdark rounded-lg p-[10px] mb-[10px] flex flex-row justify-between'>

                        </div>
                        <div className='bg-bgdark rounded-lg flex flex-row h-[300px] p-[10px] text-lg'>

                        </div>
                    </div>

                    :
                    statusData === false ?
                        <div className='w-full h-[200px] bg-bgdark rounded-lg p-[20px] text-3xl'>Unable to fetch status data for this site{siteData === undefined ? " as it does not exist." : ". This could be because it does not exist."}</div>
                        :
                        statusData && siteData ?
                            <div>
                                <div className='w-full h-[200px] bg-bgdark rounded-lg p-[20px] text-3xl mb-[10px]'>
                                    <div style={{
                                        color: siteData.colour
                                    }}>
                                        {siteData.alias}
                                    </div>
                                    <div className='text-sm text-hr'>{statusData.name}</div>
                                    <div className='text-xl'>
                                        {siteData.description}
                                    </div>
                                </div>
                                <div className='w-full h-[75px] bg-bgdark rounded-lg p-[10px] mb-[10px] flex flex-row justify-between'>
                                    <a href={siteData.url} className='w-[25%]'><button className="button">Go To Site</button></a>
                                    <a href={siteData.github_url} className='w-[25%]'><button className={"button " + (!siteData.github_url ? "opacity-50 bg-maindark" : "")} disabled={siteData.github_url === undefined} title={siteData.github_url === undefined ? "Repo is most likely private" : ""}>View Github Repo</button></a>
                                    <a href={siteData.staging_url} className='w-[25%]'><button className={"button " + (!siteData.staging_url ? "opacity-50 bg-maindark" : "")} disabled={siteData.staging_url === undefined} title={siteData.staging_url === undefined ? "This site does not have a staging site" : ""}>Go To Staging Site</button></a>
                                </div>
                                <div className='bg-bgdark rounded-lg flex flex-row h-[300px] p-[20px] text-lg'>
                                    <div className='w-1/2 flex flex-col'>
                                        {
                                            statusData.current_deployment ?
                                                <div>
                                                    <div className='text-2xl'>
                                                        Current Deployment
                                                    </div>
                                                    <div className='flex flex-row'>
                                                        Status: <div className={'ml-[10px] ' + (statusData.current_deployment.status === "success" ? "text-success" : "text-error")}>{statusData.current_deployment.status.toUpperCase()}</div>
                                                    </div>
                                                    <div>Deployment time: {statusData.current_deployment.created_on.split("T").splice(0, 1).join(" ") + " " + statusData.current_deployment.created_on.split("T").splice(1, 2).join(" ").split(".")[0]}</div>
                                                    {
                                                        statusData.current_deployment.git_hash &&
                                                        <div title={statusData.current_deployment.git_hash}>Deployed Commit: <a href={`https://github.com/Ogwen123/${statusData.name}/commit/${statusData.current_deployment.git_hash}`} target="_blank" className='underline text-admin'>{statusData.current_deployment.git_hash.slice(0, 7)}</a></div>
                                                    }
                                                    <div>Deployed environment: {statusData.current_deployment.environment.toUpperCase()}</div>
                                                </div>
                                                :
                                                <div>N/A</div>
                                        }
                                    </div>
                                    <div className='bg-hr w-[3px] h-full mx-[20px]'></div>
                                    <div className='w-1/2 flex flex-col'>
                                        <div className='text-2xl'>
                                            Latest Deployment
                                        </div>
                                        {
                                            statusData.latest_deployment ?
                                                <div>
                                                    <div className='flex flex-row'>
                                                        Status: <div className={'ml-[10px] ' + (statusData.latest_deployment.status === "success" ? "text-success" : "text-error")}>{statusData.latest_deployment.status.toUpperCase()}</div>
                                                    </div>
                                                    <div>Deployment time: {statusData.latest_deployment.created_on.split("T").splice(0, 1).join(" ") + " " + statusData.latest_deployment.created_on.split("T").splice(1, 2).join(" ").split(".")[0]}</div>
                                                    {
                                                        statusData.latest_deployment.git_hash &&
                                                        <div title={statusData.latest_deployment.git_hash}>Deployed Commit: <a href={`https://github.com/Ogwen123/${statusData.name}/commit/${statusData.latest_deployment.git_hash}`} target="_blank" className='underline text-admin'>{statusData.latest_deployment.git_hash.slice(0, 7)}</a></div>
                                                    }
                                                    <div>Deployed environment: {statusData.latest_deployment.environment.toUpperCase()}</div>
                                                </div>
                                                :
                                                <div>N/A</div>
                                        }
                                    </div>
                                </div>
                            </div>
                            :
                            <div className='w-full h-[200px] bg-bgdark rounded-lg p-[20px] text-3xl'>Unable to fetch status data for this site as it does not exist.</div>
            }
        </div>
    )
}

export default Site