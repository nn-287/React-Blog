import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { Usefetch } from "./usefetch";
import {useHistory} from 'react-router-dom';

export const BlogDetails = () => {
  const { id } = useParams();
  const {data: blog, isPending, error} = Usefetch('http://localhost:8000/blogs/' + id)
  const history = useHistory();
  const handledelete = ()=>{

    fetch(`http://localhost:8000/blogs/${blog.id}`,{
      method:'DELETE'
    }).then(()=>{
      history.push('/')

    })
  }

  return (
    <div className="blogdetails">
      {isPending && <div>Loading..</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          
          <div>{blog.body}</div>
          <p>written by {blog.author}</p>
          <button onClick={handledelete}>Delete</button>
        </article>
      )}
    </div>
  );
};
