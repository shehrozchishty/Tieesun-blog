/** @jsx jsx */
import { jsx } from "theme-ui";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";

export const pageQuery = graphql`
  query PublicationsQuery {
    allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "publication" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            abstract
            url
            date(formatString: "MMMM DD, YYYY")
          }
          excerpt(pruneLength: 140)
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`;

const Publications = ({ data }) => {
  const { allMarkdownRemark, site } = data;
  const publications = allMarkdownRemark.edges;

  return (
    <Layout className="publications-page" sx={publicationStyles.publicationsPage}>
      <Seo
        title="Publications"
        description={`Research Publications by ${site.siteMetadata.title}`}
      />
      <div className="wrapper">
        <h1>Research Publications</h1>
        <ul className="publications-list" sx={publicationStyles.list}>
          {publications.map(({ node }) => (
            <li key={node.id} sx={publicationStyles.listItem}>
              <h2>{node.frontmatter.title}</h2>
              <p><strong>Abstract:</strong> {node.frontmatter.abstract}</p>
              <p><em>Published on: {node.frontmatter.date}</em></p>
              <a
                href={node.frontmatter.url}
                target="_blank"
                rel="noopener noreferrer"
                sx={publicationStyles.link}
              >
                Read More
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default Publications;

const publicationStyles = {
  publicationsPage: {
    h1: {
      fontSize: "2rem",
      marginBottom: "1rem",
    },
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
  listItem: {
    marginBottom: "2rem",
    padding: "1rem",
    border: "1px solid",
    borderColor: "border",
    borderRadius: "8px",
    backgroundColor: "background",
  },
  link: {
    color: "primary",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
};
