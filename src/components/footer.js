/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { RiHeart2Line } from "react-icons/ri"

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
          <RiHeart2Line />
        </span>{" "}
        Like <Link to="/">a Hokage</Link>
      </p>
    </div>
  </footer>
)

export default Footer
