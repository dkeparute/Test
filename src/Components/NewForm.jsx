import { Link } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios';

function NewForm() {

  const AddPost = (data) => {
    axios.post('https://jsonplaceholder.typicode.com/posts/', data)
      .then(function (response) {
        console.log(response.data);
      })
  }

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
    AddPost(data);
  };

  return (
    <div className="form" >
      <div className="each-list">
        <span>Title</span>
        <input type="text" onChange={(e) => controller(e, 'title')} value={title} />
      </div>
      <div className="each-list">
        <span >Body</span>
        <textarea onChange={(e) => controller(e, 'body')} value={body}></textarea>
      </div>
      <button onClick={Add}> Save</button>
      <Link to='/'>
        <button>Back</button>
      </Link>
    </div>
  );
}
export default NewForm;