import React, { useState } from 'react';

import ResourceList from './ResourceList';

// class App extends React.Component {
//   state = {
//     resourceName: 'posts'
//   }

//   render() {
//     return (
//       <React.Fragment>
//         <button onClick={() => this.setState({ resourceName: 'posts' })}>Posts</button>
//         <button onClick={() => this.setState({ resourceName: 'todos' })}>Todos</button>
//         <ResourceList resourceName={this.state.resourceName}/>
//       </React.Fragment>
//     )
//   }
// }

const App = () => {   // functional component no class
  const [ resourceName, setResourceName ] = useState('posts');
                        // resourceName is a variable and state of the app === current state
                        // setResourceName is function to change state of resourceName
                        // useState function from React takes one parameter of initial state
  return (    // still need to return
    <React.Fragment>          
      <button onClick={() => setResourceName('posts')}>Posts</button>
      <button onClick={() => setResourceName('todos')}>Todos</button>
      <ResourceList resourceName={resourceName} />
                {/* since functional component this no longer works and don't need setState */}
    </React.Fragment>
  )
}

export default App;