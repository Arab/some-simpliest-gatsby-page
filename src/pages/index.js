import React from "react"

import { useSiteMetadata } from "../hooks/useSiteMetadata"

import { Links } from '../components/Links'

const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}

const headingAccentStyles = {
  color: "#663399",
}

const paragraphStyles = {
  marginBottom: 48,
}

const IndexPage = () => {
  const { title, description } = useSiteMetadata()

  return (
    <main style={pageStyles}>
      <title>{title}</title>
      <h1 style={headingStyles}>
        Congratulations
        <br />
        <span style={headingAccentStyles}>— you just made a Gatsby site!</span>
        <span role="img" aria-label="Party popper emojis">
          🎉🎉🎉
        </span>
      </h1>
      <p style={paragraphStyles}>
      {description}
        <span role="img" aria-label="Sunglasses smiley emoji">
          😎
        </span>
      </p>
      <Links />
      <img
        alt="Gatsby G Logo"
        src="data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2C13.3132 2 14.6136 2.25866 15.8268 2.7612C17.0401 3.26375 18.1425 4.00035 19.0711 4.92893C19.9997 5.85752 20.7362 6.95991 21.2388 8.17317C21.7413 9.38642 22 10.6868 22 12C22 14.6522 20.9464 17.1957 19.0711 19.0711C17.1957 20.9464 14.6522 22 12 22C10.6868 22 9.38642 21.7413 8.17317 21.2388C6.95991 20.7362 5.85752 19.9997 4.92893 19.0711C3.05357 17.1957 2 14.6522 2 12C2 9.34784 3.05357 6.8043 4.92893 4.92893C6.8043 3.05357 9.34784 2 12 2ZM12 4C8.27 4 5.14 6.55 4.25 10L14 19.75C17.45 18.86 20 15.73 20 12H14.75V13.5H18.2C17.71 15.54 16.24 17.19 14.31 17.94L6.06 9.69C7 7.31 9.3 5.63 12 5.63C14.13 5.63 16 6.67 17.18 8.28L18.41 7.22C16.95 5.26 14.63 4 12 4ZM4 12C4 14.1217 4.84285 16.1566 6.34315 17.6569C7.84344 19.1571 9.87827 20 12 20C12.04 20 12.09 20 4 12Z' fill='%23663399'/%3E%3C/svg%3E%0A"
      />
    </main>
  )
}

export default IndexPage
