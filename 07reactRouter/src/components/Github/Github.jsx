// import React from 'react'

import { useEffect, useState } from "react"

function Github() {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/rajveer97')
        .then(response => response.json())
        .then(data => {
            console.log("zzz data",data);
            setData(data)
        })
    }, [])
  return (
    <div className="text-center bg-gray-600 text-white m-4 p-4 text-3xl">Github followers: {data.followers}
    <img src={data.avatar_url} alt="Git picture" width={200} />
    </div>
  )
}

export default Github