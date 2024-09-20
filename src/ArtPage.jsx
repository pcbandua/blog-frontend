import { PostsIndex } from "./PostsIndex";
import { PostsNew } from "./PostsNew";
import axios from "axios";
import { useState, useEffect } from 'react'
import { Modal } from "./Modal"

export function ArtPage(){
  let firstName = "Andela"; 

  console.log('this is a test hello')

  const [posts, setPosts] = useState([]);
  const [isPostsShowVisible, setIsPostShowVisible] = useState(false);
  
  let artPosts = [
    // {
    //   id: 1,
    //   title: "AFROSURREALISM #1",
    //   body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    //   image_url: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*eZ2lNPcEt6gjeVeL-yHTqA.png",
    // },
    // {
    //   id: 2,
    //   title: "AFROSURREALISM #2",
    //   body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    //   image_url: "https://officemagazine.net/sites/default/files/img_1671_0.jpg",
    // },
    // {
    //   id: 3,
    //   title: "AFROSURREALISM #3",
    //   body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    //   image_url: "https://media.cnn.com/api/v1/images/stellar/prod/220118230223-01-david-alabo-afrosurrealism.jpg?q=h_3000,w_3000,x_0,y_0",
    // },
  ];
// INDEX 
  const getArtPostData = () => {
    console.log('hello');
    axios.get("http://localhost:3000/posts.json").then(response =>{console.log(response)
    })
  }

  // // CREATE
  // const createArtPostData = () => {
  //   console.log('hello');
  //   axios.post("http://localhost:3000/posts.json").then(response =>{console.log(response)
  //   })
  // }


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
  <Modal show={isPostsShowVisible} onClose={closeModal}>
        <p>TEST Content</p>
  </Modal>
  </main>
  )
}