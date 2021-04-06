import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header>
    <div className="text-center py-4">
      <h3 className="title">
        <Link to="/">
          {siteTitle}
        </Link>
      </h3>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
