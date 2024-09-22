import { PostsIndex } from "./PostsIndex";
import { PostsNew } from "./PostsNew";
import axios from "axios";
import { useState, useEffect } from 'react'
import { Modal } from "./Modal"

export function ArtPage(){
  let firstName = "Andela"; 
  // console.log('this is a test hello')
  const [posts, setPosts] = useState([]);
  const [isPostsShowVisible, setIsPostShowVisible] = useState(false);
  
  let artPosts = [];
  
// INDEX 
  const getArtPostData = () => {
    console.log('get data');
    axios.get("http://localhost:3000/posts.json").then(response => {
      console.log(response.data);
      setPosts(response.data)
    })
  }

// CREATE
  const createArtPostData = () => {
    console.log('create data');
    axios.post("http://localhost:3000/posts.json").then(response =>{console.log(response.data)
      setPosts(response.data)
    })
  }

// READ
  const readArtPostData =  () => {
    console.log("Read Data");
    axios.get("http://localhost:3000/posts.json").then(response =>{console.log(response.data)
      setPosts(response.data)
    })
  }

// UPDATE
const updateArtPostData =  () => {
  console.log("Update Data");
  axios.patch("http://localhost:3000/posts/1.json").then(response =>{console.log(response.data)
    setPosts(response.data)
  })
}

// DELETE
const deleteArtPostData =  () => {
  console.log("Delete Data");
  axios.delete("http://localhost:3000/posts/1.json").then(response =>{console.log(response.data)
    setPosts(response.data)
  })
}

  // MODAL
  const showModal = () => {
    setIsPostsShowVisible(true);
  };

  const closeModal = () => {
    setIsPostsShowVisible(false);
  };

  useEffect(getArtPostData, []);

// RESTFUL BUTTONS
  // <button id="createArtPostData">Create Art Post</button>
  // <button id="readPost">Read Post</button>
  // <button id="updatePost">Update Post</button>
  // <button id="deletePost">Delete Post</button>
  // <button id="listPosts">List Posts</button>

  return(
  <main>
  <PostsNew/>
  <PostsIndex myFirstName={firstName} artPosts={posts} onShow={showModal}/>
  <button onClick={getArtPostData}>get Art Posts</button>
  <button onClick={createArtPostData}>create Art Posts</button>
  <button onClick={readArtPostData}>read Art Posts</button>
  <button onClick={updateArtPostData}>update Art Posts</button>
  <button onClick={deleteArtPostData}>delete Art Posts</button>
  <Modal show={isPostsShowVisible} onClose={closeModal}>
        <p>TEST Content</p>
  </Modal>
  </main>
  )
}