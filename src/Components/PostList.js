import React from 'react'
import axios from 'axios'

class PostList extends React.Component
{
   constructor(props)
   {
       super(props);

       this.state = {
       	posts:[],
       	error_msg:""
       };

   }

   componentDidMount()
   {
   	  axios.get('http://jsonplaceholder.typicode.com/posts')
   	  .then(response => {console.log(response); this.setState({posts:response.data});})
   	  .catch(error => {console.log(error); this.setState({error_msg:"error retireving data"})});
   }

   render()
   {
   	 const {posts,error_msg} = this.state;
   	 return (<div>
   	 	     List of Posts
   	 	     { 
   	 	     	posts.length?
   	 	        posts.map(post => <div key = {post.id}>{post.title}</div>):
   	 	     	null
   	 	     } 	
   	 	     {
   	 	     	error_msg?
   	 	     	<div>{error_msg}</div>:
   	 	     	null
   	 	     }
   	 	    </div>);
   }
}

export default PostList;