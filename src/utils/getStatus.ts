export default async (site_name: string) => {
    const res = await fetch("http://home-api.owen-services.eu.org/api/project_info", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "project": site_name
        })
    })

    const data = await res.json()

    return data
}