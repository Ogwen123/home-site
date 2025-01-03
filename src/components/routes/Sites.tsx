import React from 'react'
import SiteChip from '../SiteChip'

import { sites } from '../../utils/sites'

const Sites = () => {
    React.useEffect(() => { }, [])

    return (
        <div>
            <div className='flex justify-center text-4xl m-[10px]'>Sites</div>
            {
                Object.values(sites).map((site, index) => {
                    if (site.shared) return
                    else {
                        return (
                            <SiteChip site={site} key={index} />
                        )
                    }
                })
            }
            <div className='flex justify-center text-4xl m-[10px]'>Shared Sites</div>
            <div className='text-xs text-subtext text-center'>These are sites I have developed in collaboration with others.</div>
            {
                Object.values(sites).map((site, index) => {
                    if (!site.shared || (site.shared as boolean) === false) return
                    else {
                        return (
                            <SiteChip site={site} key={index} />
                        )
                    }
                })
            }
        </div>
    )
}

export default Sites