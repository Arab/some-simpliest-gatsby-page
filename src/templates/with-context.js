import React from "react"
import { Links } from '../components/Links'

const WithContext = ({ pageContext }) => (
  <section>
    <h1>{pageContext.title}</h1>
    <div dangerouslySetInnerHTML={{ __html: pageContext.content }} />
    <Links />
  </section>
)
export default WithContext
