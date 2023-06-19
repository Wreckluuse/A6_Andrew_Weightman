import React, { useEffect, useState } from "react";
import Posts from "../components/Posts";

function Home() {
  const [appState, setAppState] = useState({
    loading: false,
    posts: null,
  });
  useEffect(() => {
    const getPosts = async () => {
      const posts = await fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((data) => {
          const newPosts = data.slice(0,5)
          setAppState({ loading: false, posts: newPosts });
        });
      return posts;
    };
    setAppState({ loading: true });
    getPosts();
  }, [setAppState]);

  return <Posts isLoading={appState.loading} posts={appState.posts} />;
}
export default Home;
