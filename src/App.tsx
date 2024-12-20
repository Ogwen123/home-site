import React from "react"
import { Route, Routes } from 'react-router-dom'

import Home from './components/routes/Home'
import PageHandler from './PageHandler'
import Site from './components/routes/Site'
import Sites from "./components/routes/Sites"

const App = () => {

  const [enabled, setEnabled] = React.useState<boolean>(true)

  React.useEffect(() => {
    let url
    if (location.href.includes("localhost") || location.href.includes("127.0.0.1")) {
      url = "http://localhost:3002/api/services/check"
    } else {
      url = "https://admin-api.owen-services.eu.org/api/services/check"
    }

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: "c99fd840-bd7c-4a15-95f4-08a28285536a"
      })
    }).then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          if (data.data.enabled !== undefined) {
            setEnabled(data.data.enabled)
          }
        })
      }
    })
  }, [])

  return (
    <div className=''>
      {
        enabled ?
          <Routes>
            <Route path="/" element={<PageHandler />}>
              <Route index element={<Home />} />
              <Route path="/sites" element={<Sites />} />
              <Route path="/site/:id" element={<Site />} />
            </Route>
          </Routes>
          :
          <div className="text-xl h-[200px] w-full fc">
            This site has been disabled by an administrator.
          </div>
      }
    </div>
  )
}

export default App
