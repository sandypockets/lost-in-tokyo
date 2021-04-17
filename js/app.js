
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

const Attraction = ({title, description, className, image}) => (
  <div
    className={`ph4 ph5-ns ph0-l mb4 mb5-ns w-100 overflow-hidden pointer attraction ${className}`}
  >
    <div className="relative">
      <div className="absolute w-100 h-100 flex items-center pa3 pa4-ns bg-aqua overlay">
        <div>
          <h1 className="f4 f3-ns mt0 mb2 regular black normal lh-title">{title}</h1>
          <p className="lh-title lh-copy-ns mv0 black f6 measure-l">{description}</p>
        </div>
      </div>
      <img src={`../images/${image}`} className="db" />
    </div>
  </div>
)

// Main app component
const App = () => (
  <div>
    <div className="min-vh-100 ph4 flex flex-column">
      {/* Nav */}
      <Nav />
      <Intro />
    </div>
    <div className="flex flex-wrap container">
      {attractions.map(attraction => <Attraction {...attraction} />)}
      </div>
  </div>
)





ReactDOM.render(<App />, document.getElementById('root'));
