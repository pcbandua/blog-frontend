function Header(){
  return <header>
  <a href="#">Home</a> | <a href="#posts-index">All posts</a> | <a href="#posts-new">New post</a>
</header>
}

function PostsNew (){
  return <div id="posts-new">
  <h1>New post</h1>
  <form action="">
    <label htmlFor="title">Title:</label><br />
    <input type="text" id="title" name="title"/><br />
    <label htmlFor="body">Body:</label><br />
    <input type="text" id="body" name="body" /><br />
    <label htmlFor="body">Image:</label><br />
    <input type="text" id="image" name="image"/><br />
  </form>
</div>
}

function PostsIndex(){
  <div id="posts-index">
        <h1>All posts</h1>
          <div>
            <h2>AFROSURREALISM #1</h2>
            <img src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*eZ2lNPcEt6gjeVeL-yHTqA.png" alt="" />
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
              </p> 
          </div>
          <div>
            <h2>AFROSURREALISM #3</h2>
            <img src="https://officemagazine.net/sites/default/files/img_1671_0.jpg" alt="" />
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
              </p> 

          </div>
          <div>
            <h2>AFROSURREALISM #3</h2>
            <img src="https://media.cnn.com/api/v1/images/stellar/prod/220118230223-01-david-alabo-afrosurrealism.jpg?q=h_3000,w_3000,x_0,y_0" alt="" />
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
              </p> 

          </div>

      </div>

}

function Footer (){
return <footer>
        <p>Copyright 20XX</p>
      </footer>
}

function App() {
  return (
    <div id="content">
      <Header/>
      <PostsNew/>
      <PostsIndex/>
      <Footer />
      
    </div>
  );
}

export default App;