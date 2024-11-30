/** @jsx jsx */
import { jsx } from "theme-ui";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";

const PublicationsPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  const { title, publications } = frontmatter;

  return (
    <Layout>
      <Seo title={title} />
      <div sx={{ padding: "2rem" }}>
        <h1>{title}</h1>
        <ul>
          {publications.map((pub, index) => (
            <li key={index}>
              <h2>{pub.title}</h2>
              <p>{pub.abstract}</p>
              <a
                href={pub.url}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: "primary" }}
              >
                Read More
              </a>
              <p>
                <strong>Published on:</strong> {pub.date}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        publications {
          title
          abstract
          url
          date
        }
      }
    }
  }
`;

export default PublicationsPage;
