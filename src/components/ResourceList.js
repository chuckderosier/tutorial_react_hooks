import React from 'react';
import axios from 'axios';

class ResourceList extends React.Component {
  state = {
    resources: [],
  }

  async componentDidMount() {   // loads initial data posts with lifecycle methods
    const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resourceName}`);

    this.setState({ resources: response.data });
  }

  async componentDidUpdate(prevProps) {   // switches data when button clicked with lifecycle methods
    if(prevProps.resourceName !== this.props.resourceName) {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resourceName}`);

      this.setState({ resources: response.data });
    }
  }

  render() {
    return (
      <ul>
        {this.state.resources.map(resource => (
          <li key={resource.id}>{resource.title}</li>
        ))}
      </ul>
    )
  }
}

export default ResourceList;
