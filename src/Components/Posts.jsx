import { Link } from "react-router-dom";

function Posts(props) {



  return (

    <>
 
      <div className='list'>
        <Link to={"/id:" + props.data.id}>
        <span>Id:  </span>
          <div className='each-item'>{props.data.id}</div>
          <span>Title:  </span>
          <div className='each-item'>{props.data.title}</div>
          <span>Body:  </span>
          <div className='each-item'>{props.data.body}</div>
        </Link>

      </div>
    </>

  );
}



export default Posts;