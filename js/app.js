// Intro text
const Intro = () => (
  <div className="m-auto-ns f4 f3-m f2-l tc w-80-l normal">
    {/* a div with a margin-bottom (mb3 and mb4 on non-small screens) */}
    <div className="mb3 mb4-ns">
      Lost in Tokyo is a directory of fun places to see, play in and explore, in Tokyo, Japan.
    </div>
    <div>
      From museums and galleries, to robot restaurants and kitten cafes, Tokyo is the gift that
      keeps on giving. Dattebayo!
    </div>
  </div>
)

// Main app component
const App = () => (
  <div>
    <div className="min-vh-100 ph4 flex flex-column">
      {/* our navigation component */}
      <Intro />
    </div>
    <div className="flex flex-wrap container">{/* our attractions list component */}</div>
  </div>
)





ReactDOM.render(<App />, document.getElementById('root'));
