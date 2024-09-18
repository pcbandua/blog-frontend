function PostsNew() {
  return <div id="posts-new">
    <h1>New post</h1>
    <form action="">
      <label htmlFor="title">Title:</label><br />
      <input type="text" id="title" name="title" /><br />
      <label htmlFor="body">Body:</label><br />
      <input type="text" id="body" name="body" /><br />
      <label htmlFor="body">Image:</label><br />
      <input type="text" id="image" name="image" /><br />
    </form>
  </div>;
}
exports.PostsNew = PostsNew;
