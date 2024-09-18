// function PostsIndex(props){
//   console.log(props.myFirstName);
//   return(
//   <div id="posts-index">
//         <h1>All posts</h1>
//       {/* <p>{props.myFirstName}</p> */}
//       {props.artPosts.map(artPost => (
//         <div key={artPost.id} className="artPosts">
//           <h2>{artPost.title}</h2>
//           <img src={artPost.image_url} alt="" />
//           <p>body: {artPost.body}</p>
//           <button>More info</button>
//         </div>
//    </div>
//       ))}
//       )
//       }
export function PostsIndex(props) {
  console.log(props.myFirstName);

  return (
    <div id="posts-index">
      <h1>All posts</h1>
      {/* <p>{props.myFirstName}</p> */}
      {props.artPosts.map((artPost) => (
        <div key={artPost.id} className="artPosts">
          <h2>{artPost.title}</h2>
          <img src={artPost.image_url} alt="" />
          <p>body: {artPost.body}</p>
          <button>More info</button>
        </div>
      ))}
    </div>
  );
}
