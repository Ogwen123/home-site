import { SiteInfo } from "../global/types";

export const sites: SiteInfo[] = [
    {
        id: 1,
        name: "SQLite Generator",
        url: "sql.ogwen.eu.org",
        staging_url: "",
        description: "Generate SQLite code for creating tables using a UI. The generated code should also work for most other SQL databases like postgres. Lacks some advanced options for creating tables.",
        github_url: "https://github.com/Ogwen123/sql-builder",
        colour: "#4a148c"
    },
    {
        id: 2,
        name: "Markdown table generator",
        url: "table.ogwen.eu.org",
        staging_url: "table-stg.ogwen.eu.org",
        description: "Easily create markdown tables using a UI.",
        github_url: "https://github.com/Ogwen123/md-table-generator",
        colour: "#009788"
    },
    {
        id: 3,
        name: "Design",
        url: "design.ogwen.eu.org",
        staging_url: "",
        description: "Define some design rules for my websites, currently only has colours.",
        github_url: "https://github.com/Ogwen123/design",
        colour: "#2563eb"
    },
    {
        id: 4,
        name: "Cards",
        url: "cards.benja.eu.org",
        staging_url: "",
        description: "Flashcard site. Like quizlet but without the stupid paywalls for basic features.",
        github_url: "",
        colour: "#009788",
        shared: true
    }
]

export const getSite = (id: number): SiteInfo | undefined => {
    let site: SiteInfo | undefined = undefined

    for (let i of sites) {
        if (id === i.id) {
            site = i
        }
    }
    return site
}