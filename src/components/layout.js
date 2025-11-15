import * as React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>
        Made with ✌️&💜 by <a href="https://www.reddit.com/user/GrapeTickler/" target="_blank" rel="noopener noreferrer" textDecoration="none" >(🍇🤗)</a>, <a href="https://www.youtube.com/@foopatroopaH3" target="_blank" rel="noopener noreferrer" textDecoration="none" >(🔫🐻)</a>, & (👃🇬🇷)
        {` `}
        
      </footer>
    </div>
  )
}

export default Layout
