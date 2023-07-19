import React from 'react'
import { useState , useEffect } from 'react';
import axios from 'axios';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
// const TagMemeurl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;

const useGif = (tag) => {

    const [gif , setGif] = useState('');
    const [loading,setLoading] = useState(false);
    
  
    async function fetchData(tag) {
      setLoading(true);

      // Destructuring
      const {data} =  await axios.get(tag ?  `${url}&tag = ${tag}` : url);
      const imageSource = data.data.images.downsized_large.url;

      // console.log(imageSource);
      setGif(imageSource);
      
      setLoading(false);
    }
  
    useEffect( () => {
      fetchData();
    } , [])

    return {loading,gif,fetchData}
}

export default useGif;
