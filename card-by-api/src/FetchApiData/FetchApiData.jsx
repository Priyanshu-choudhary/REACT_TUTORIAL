import { useState, useEffect } from 'react';
import React from 'react';
import Card from '../card/Card';

function FetchApiData() {
  const [posts, setPosts] = useState([]);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const url = 'https://jsonplaceholder.typicode.com/posts';
      let response = await fetch(url);
      let data = await response.json();
      setPosts(data.slice(0, 4)); // Store only the first 5 posts
    };

    const fetchImages = async () => {
      const urls = [];
      for (let i = 0; i < 5; i++) {
        const url = 'https://dog.ceo/api/breeds/image/random';
        let response = await fetch(url);
        let data = await response.json();
        urls.push(data.message);
      }
      setImages(urls);
    };

    fetchPosts();
    fetchImages();
  }, []);

  return (
    <div>
      {posts.map((post, index) => (
        <Card
          key={post.id}
          photo={images[index]}
          title={post.title}
          content={post.body}
          compelete={post.id}
        />
      ))}
    </div>
  );
}

export default FetchApiData;
