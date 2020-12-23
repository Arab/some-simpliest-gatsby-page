import React from "react"
import { Links } from '../components/Links'
import { useSiteMetadata } from "../hooks/useSiteMetadata"

const PrettyPage = () => {
    const { prettyPage: { title, description }} = useSiteMetadata()

  return (
    <div>
      <title>
        {title}
      </title>
      <div>
        {description}
      </div>
      <br/>
      <label> Links:
        <Links />
      </label>
    </div>
    )
}

export default PrettyPage
