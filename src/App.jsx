// App.js
import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
// import ListPage from './Components/ListPage';
// import NewForm from "./Components/NewForm";
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

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

  const Add = (data) => {
    axios.post('https://jsonplaceholder.typicode.com/posts/', data)
      .then(function (response) {
        console.log(response.data);
      })
  }


  return (
    <div>
      <header>
        <h1>Internship qualification task!</h1>
      </header>
      <Routes>
        <Route path="/" element={<ListPage posts={posts} />} />
        <Route path="newForm" element={<NewForm add={Add} />} />
      </Routes>
    </div>
  );
}

function ListPage({ posts }) {

  return (
    <>
      <h2>Page List</h2>
      <nav>
        <Link to="/NewForm">
          <button>New form</button>
        </Link>
      </nav>
      <div className='list'>
        {
          posts.map(post => <div key={post.id} >
            <span>User Id: </span>
            <div className='each-item'>
              {post.id}
            </div>
            <span>User Title: </span>
            <div className='each-item'>
              {post.title}
            </div>
            <span>User Body:</span>
            <div className='each-item'>
              {post.body}
            </div>
          </div>)
        }
      </div>
    </>
  );
}

function NewForm({ add }) {

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const controller = (e, i) => {
    if ("title" === i) {
      setTitle(e.target.value);
    } else if ("body" === i) {
      setBody(e.target.value);
    }
  };

  const Add = () => {
    const data = {
      title: title,
      body: body,
    };
    setTitle("");
    setBody("");
    add(data);
  };

  return (
    <div className="newPost">
      <div className="newTitle">Title</div>
      <input style={{ width: "50%" }} type="text" onChange={(e) => controller(e, 'title')} value={title} />
      <div className="newBody">Body</div>
      <textarea style={{ width: "50%", height: "100px", resize: "none", marginBottom: "15px" }} onChange={(e) => controller(e, 'body')} value={body}></textarea>
      <button className="add" onClick={Add}> Add post</button>
      <Link to={'/'}> <button>Back</button></Link>
    </div>
  );
}

export default App;