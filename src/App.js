import React, {useState, useEffect} from 'react';
import Posts from './components/Posts';
import Post from './components/Post';
import PageNav from './components/PageNav';

function App() {
  const [posts, setPosts] = useState([])
  const [page, setPage] = useState(1)
  const [onePost, setOnePost] = useState({})
 console.log(page)
  
   useEffect(() => {
         getPosts(page)
    }, [])

    // useEffect(() => {
    //      openPost()
    // }, [])

    

  const getPosts = async (page) => {
    const response = await fetch(`http://blog.test/api/blog?page= + ${page}`)
    const data = await response.json()
    setPosts(data.data)
  }
  const openPost = async(id) => {
    const response =  await fetch(`http://blog.test/api/post/+${id}`)
    const data = await response.json()
    setOnePost(data.data)
    setPosts([])
  }

  const nextPage = () =>{
    getPosts(page+1)
    
  }
  const prevPage = () =>{
     getPosts(page-1)
  }
   
  const closePost = () =>{
    setOnePost({})
    // reikia kad griztu i reikiama postu page, nes dabar numeta i pirma
    getPosts(page)
  }
  
  return (
    
    <div className = "container bg-light">
      <PageNav prevPage={prevPage}  nextPage={nextPage}/>

      {(typeof onePost.title != "undefined") ?<Post key = {onePost.id} onePost = {onePost} closePost = {closePost} /> : '' }

    
    {posts.map(post =>{
      let date = post.created_at.split(' ')
      let text = post.body.substring(0, 50)
      
      return(
        <Posts
        key = {post.id}
        title = {post.title}
        body = {`${text}...`}
        created_at = {date[0]}
        comments = {post.comments}
        user = {post.user}
        openPost = {()=>openPost(post.id)}
        /> 
    )})}
    
    
      <PageNav prevPage={prevPage}  nextPage={nextPage}/>
</div>
  )
    
  
}

export default App;
