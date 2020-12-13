import { useStaticQuery, graphql } from "gatsby"
export const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            title
            pageLinks {
              text
              url
            }
            description
          }
        }
      }
    `
  )
  return site.siteMetadata
}
