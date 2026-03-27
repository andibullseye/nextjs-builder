const TYPE_RESOLUTION_QUERY = `
query TypeResolution($links: [String!]!) {
    typesForLinks(links: $links) {
        type
        link
    }
}
`
const STATIC_PAYLOAD_QUERY = `
query StaticBuild {
    staticBuild {
      links {
          link
      }
    }
  }    
`;

const REDIRECTOR_PAGE_QUERY = `
query RedirectorPage($link: String!) {
    readOneRedirectorPage(link: $link) {
        title
        redirectionType
        externalURL
        linkTo {
            link
        }
        linkToFile {
            absoluteLink
        }
    }
}
`

export {
    TYPE_RESOLUTION_QUERY,
    STATIC_PAYLOAD_QUERY,
    REDIRECTOR_PAGE_QUERY
}