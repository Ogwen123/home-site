import React from 'react'

type SiteInfo = {
    name: string,
    url: string,
    staging_url: string,
    description: string,
    github_url: string
}

const Home = () => {

    const sites: SiteInfo[] = [
        {
            name: "SQLite Generator",
            url: "sql.ogwen.eu.org",
            staging_url: "",
            description: "Generate SQLite code for creating tables using a UI. The generated code should also work for most other SQL databases like postgres. Lacks some advanced options for creating tables.",
            github_url: ""
        },
        {
            name: "Markdown table generator",
            url: "table.ogwen.eu.org",
            staging_url: "table-stg.ogwen.eu.org",
            description: "Easily create markdown tables using a UI.",
            github_url: ""
        }
    ]

    return (
        <div>Home</div>
    )
}

export default Home