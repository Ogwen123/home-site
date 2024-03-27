export type SiteInfo = {
    id: number,
    name: string,
    staging_name?: string,
    alias: string,
    url: string,
    staging_url?: string,
    description: string,
    github_url?: string,
    colour: string,
    shared?: boolean
}

export type DeploymentInfo = {
    environment: string,
    created_on: string,
    modified_on: string,
    status: "failure" | "success",
    git_hash?: string
}

export type SiteStatus = {
    name: string,
    subdomain: string,
    domains: string[],
    latest_deployment: DeploymentInfo,
    current_deployment: DeploymentInfo
}