import { SiteInfo } from "../global/types";

export const sites: SiteInfo[] = [
    {
        id: 0,
        name: "tracker",
        alias: "Tracker",
        url: "https://tracker.ogwen.eu.org",
        description: "Create repeatable tasks and track your progress.",
        github_url: "https://github.com/Ogwen123/tracker-site",
        colour: "#00796d"
    },
    {
        id: 1,
        name: "sql-builder",
        alias: "SQLite Generator",
        url: "https://sql.ogwen.eu.org",
        description: "Generate SQLite code for creating tables using a UI. The generated code should also work for most other SQL databases like postgres. Lacks some advanced options for creating tables.",
        github_url: "https://github.com/Ogwen123/sql-builder",
        colour: "#4a148c"
    },
    {
        id: 2,
        name: "md-table-generator",
        staging_name: "table-stg",
        alias: "Markdown table generator",
        url: "https://table.ogwen.eu.org",
        staging_url: "https://table-stg.ogwen.eu.org",
        description: "Easily create markdown tables using a UI. The backend for this site is currently broken but you can still generate tables.",
        github_url: "https://github.com/Ogwen123/md-table-generator",
        colour: "#009788"
    },
    {
        id: 3,
        name: "design",
        alias: "Design",
        url: "https://design.ogwen.eu.org",
        description: "Define some design rules for my websites, currently only has colours.",
        github_url: "https://github.com/Ogwen123/design",
        colour: "#2563eb"
    },
    {
        id: 4,
        name: "home-site",
        alias: "This Website",
        url: "https://ogwen.eu.org",
        description: "This website.",
        github_url: "https://github.com/Ogwen123/home-site",
        colour: "#4a148c"
    },
    {
        id: 5,
        name: "",
        alias: "Cards",
        url: "https://cards.benja.eu.org",
        description: "Flashcard site. Like quizlet but without the stupid paywalls for basic features.",
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