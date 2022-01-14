import Posts from "./Posts";
import { useEffect, useState } from 'react';
import axios from 'axios';


function ListPage() {

    let [posts, setPosts] = useState([]);

    useEffect(() => {
      axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(res => {
          console.log(res);
          setPosts(res.data);
        })
        .catch(err => {
          console.log(err);
        })
    }, [])
    

    return (
        <>
            <h2> List page</h2>
            <div className='extra-list'>

                   {posts.map((post) => (<Posts key={post.id} data={post}></Posts>))}
            </div>
        </>
    );
}

export default ListPage;