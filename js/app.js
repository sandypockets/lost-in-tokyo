
// Highlight words
const Highlight = ({ color, children }) => (
  <span className={`relative highlight highlight-${color}`}>
    <span className={`relative z-2`}>{children}</span>
  </span>
)

// Intro text
const Intro = () => (
  <div className="m-auto-ns f4 f3-m f2-l tc w-80-l normal">
    {/* a div with a margin-bottom (mb3 and mb4 on non-small screens) */}
    <div className="mb3 mb4-ns">
      <Highlight color='aqua'>Lost in Tokyo</Highlight> is a directory of fun places to see, play in and <Highlight color='yellow'>explore</Highlight>, in Tokyo, Japan.
    </div>
    <div>
      From <Highlight color='blue'>museums</Highlight> and <Highlight color='blue'>galleries</Highlight>, to <Highlight color='pink'>robot restaurants</Highlight> and <Highlight color='pink'>kitten cafes</Highlight>, <Highlight color='blue'>Tokyo</Highlight> is the gift that
      keeps on giving. <Highlight color='yellow'>Dattebayo!</Highlight>
    </div>
  </div>
)

const NavItem = ({ className, href, children, logo }) => (
  <li className={`mh2-ns f6 f4-1 tc ${className}`}>
    <a className='white no-underline' href={href}>
      {logo ? <img src='../images/logo.svg' className='db center logo' /> : children}
    </a>
  </li>

)

const Nav = () => (
  <nav className='pt3 pt4-ns mb3 mb0-ns'>
    <ul className='list flex flex-wrap flex-nowrap-ns justify-between items-center pa0 ma0'>
      {menu.map(item =>
      // The spread operator is the same as: children={item.children} href={item.href} className={item.className}
        <NavItem {...item} />
      )}
    </ul>
  </nav>
)

// Main app component
const App = () => (
  <div>
    <div className="min-vh-100 ph4 flex flex-column">
      {/* Nav */}
      <Nav />
      <Intro />
    </div>
    <div className="flex flex-wrap container">{/* our attractions list component */}</div>
  </div>
)





ReactDOM.render(<App />, document.getElementById('root'));
