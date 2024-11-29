/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { FaHandshake } from "react-icons/fa"

const Footer = () => (
  <footer
    className="site-footer"
    sx={{
      bg: "siteColor",
    }}
  >
    <div className="container">
      <p>
        Guarding Against the Unknown{" "}
        <span className="icon-Handshake">
          <FaHandshake /> {/* Handshake icon */}
        </span>{" "}
        Like a HokageGuard
      </p>
    </div>
  </footer>
)

export default Footer
