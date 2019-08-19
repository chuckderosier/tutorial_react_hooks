import React, { useState, useEffect } from 'react';
import axios from 'axios';

const useResources = (resourceName) => {    // custom hook could be used in separate component
    const [resources, setResources] = useState([]);

    const fetchResources = async (resourceName) => {      // async because of await one way call
        const response = await axios.get(`https://jsonplaceholder.typicode.com/${resourceName}`);

        setResources(response.data);   // setState replacement
    }

    useEffect(() => {
        fetchResources(resourceName)
    }, [resourceName]);    // if array changes then call the function, if not no additional requests made
    // replaces below if statement
    return resources;
}

export default useResources;
// or you can export useResources when it is being set
// ie, export default const = (resourceName) => etc
// then set on ResourceList component import useResources from './useResources'