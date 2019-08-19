import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ResourceList = ({ resourceName }) => {      // destructure resourceName so don't need props.resourceName
  const [ resources, setResources ] = useState([]);

  const fetchResources = async (resourceName) => {      // async because of await one way call
    const response = await axios.get(`https://jsonplaceholder.typicode.com/${resourceName}`);

    setResources(response.data );   // setState replacement
  }

  useEffect(() => {
    fetchResources(resourceName)
  }, [resourceName]);    // if array changes then call the function, if not no additional requests made
                          // replaces below if statement

  return (
    <ul>
      {resources.map(resource => (
        <li key={resource.id}>{resource.title}</li>
      ))}
    </ul>
  )
}

// class ResourceList extends React.Component {
//   state = {
//     resources: [],
//   }

//   async componentDidMount() {   // loads initial data posts with lifecycle methods
//     const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resourceName}`);

//     this.setState({ resources: response.data });
//   }

//   async componentDidUpdate(prevProps) {   // switches data when button clicked with lifecycle methods
//     if(prevProps.resourceName !== this.props.resourceName) {
//       const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resourceName}`);

//       this.setState({ resources: response.data });
//     }
//   }

//   render() {
//     return (
//       <ul>
//         {this.state.resources.map(resource => (
//           <li key={resource.id}>{resource.title}</li>
//         ))}
//       </ul>
//     )
//   }
// }

export default ResourceList;
