import React from "react"
import { Link } from "gatsby"
import { useSiteMetadata } from "../hooks/useSiteMetadata"

const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
  listStyleType: "none",
}
const listItemStyles = {
  marginBottom: 12,
  fontWeight: "300",
  letterSpacing: 1,
}
const linkStyles = {
  color: "#8954A8",
}

export const Links = () => {
  const { pageLinks } = useSiteMetadata()

  return (
    <ul style={listStyles}>
        {pageLinks && pageLinks.map(link => (
          <li style={listItemStyles}>
            <Link
              to={link.url}
              activeStyle={{ color: "red" }}
              partiallyActive={true}
              style={linkStyles}
            >
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
  )
}
