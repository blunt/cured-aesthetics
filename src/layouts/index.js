import React from 'react'
import Link from 'gatsby-link'

import '../css/tachyons.css'


class Template extends React.Component {
  
  render() {
    const { location, children } = this.props

    let header
    let close

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    const logoHomeClasses = "bn fw7 link logo dark-gray outline-text outline-fill"
    const logoClasses = "bn fw7 link logo dark-gray outline-text"

    if (location.pathname != rootPath) {
      close = (
        <Link
          to={'/'}
          className="bn link fw4 dark-gray mr4-ns mr3"
        >
          ← <span className="underline">back to products</span>
        </Link>
      )
    } else {
      close = (
        <p className="ma0">shop</p>
      )
    }

    if (location.pathname === rootPath) {
      header = (
        <header className="pb5-l pb4-m pb3 top-0 w-100">
          <div className="center ph5-l ph3 mw9">
            <h1
              className="ma0 mb2 w-100 f-headline-l f-subheadline-m f2 fw6 pr4 lh-solid"
            >
              <Link
                to={'/'}
                className={logoHomeClasses}
              >
                Cured aesthetics
              </Link>
            </h1>
            <div
              className="dark-gray fw3 w-100 f-subheadline-l f2-m f4 lh-title"
            >
              A curated list of beautiful cannabis-related products.
            </div>
          </div>
        </header>
      )
    } else {
      header = (
        <header className="top-0 w-100">
          <div className="center ph5-l ph3 mw9">
            <h2
              className="ma0 mb2 w-100 f-headline-l f-subheadline-m f2 fw6 pr4 lh-solid"
            >
              <Link
                to={'/'}
                className={logoClasses}
              >
                Cured aesthetics
              </Link>
            </h2>
          </div>
        </header>
      )
    }

    return (
      <div className="sans-serif">
        <nav className="fixed w-100 z-2">
          <div className="center f4-ns f5 pv4-l pv3-m pv2 ph5-l ph3 mw9 flex">
            <div className="relative mb1">
                { close }
            </div>
            <div className="left-auto tr">
              <Link to={'/'} className='link fw4 dark-gray left-auto'>submit a product</Link>
            </div>
          </div>
        </nav>
        <main className="pt6-l pt5">
          { header }
          <div
            className="center ph5-l ph3 mw9"
          >
            {children()}
          </div>
        </main>
        <footer className="bg-dark-gray near-white">
          <div className="center pv4-l pv3 ph5-l ph3 mw9 flex">
            <p className="ma0 logo">By <a className="link white fw7" href="http://blunt.af" target="blank">Blunt</a></p>
            <p className="ma0 left-auto">✌️🌿</p>
          </div>
        </footer>
      </div>
    )
  }
}

export default Template
