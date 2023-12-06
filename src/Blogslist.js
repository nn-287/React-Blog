import { Link } from "react-router-dom/cjs/react-router-dom.min";
export const Blogslist=(props)=>{
   const blog = props.props;
   console.log(props,blog)
   const title = props.title;
   

    return(
        <div className="blogs-preview">
            <h3>{title}</h3>
            {
                blog.map((blogs)=>(
                    <div className="blogs-preview" key={blogs.id}>
                        <Link to={`/blogs/${blogs.id}`}>
                            <h2>{blogs.title}</h2>
                            <p>{blogs.body} by  {blogs.author}</p>

                        </Link>
                        

                    </div>
                    
                ))
            }
        </div>
        

    );
}