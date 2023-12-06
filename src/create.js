import { useState } from 'react';
import {useHistory} from 'react-router-dom';

export const Create = () => {
    const [title, settitle] = useState('');
    const [body, setbody] = useState('');
    const [author, setauthor] = useState('mario');
    const[isPending, setisPending] = useState(false)
    const history = useHistory();

    const handleForm = (e) => {
        e.preventDefault();
        const blog = {title,body,author}

        //console.log(blog)

        setisPending(true)
        fetch('http://localhost:8000/blogs', {
            method:'POST',
            headers:{"Content-Type": "application/json"},
            body:JSON.stringify(blog)
        }).then(()=>{console.log('New blog added successfully!') 
            setisPending(false)
        //history.go(-1)
        history.push('/')
    })
    };

    return (
        <div className="create">
            <h2>Add new Blog</h2>
            <form onSubmit={handleForm}>
                <label>Blog Title</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => {
                        settitle(e.target.value);
                    }}
                />

                <label>Blog body:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => {
                        setbody(e.target.value);
                    }}
                ></textarea>

                <label>Blog author:</label>
                <select
                    value={author}
                    onChange={(e) => {
                        setauthor(e.target.value);
                    }}
                >
                    <option value="mario">Mario</option>
                    <option value="yoshi">Yoshi</option>
                </select>

                {!isPending && <button>Add blog</button>}
                {isPending && <button disabled>Adding blog is disabled</button>}
                {
                    /* <p>Title: {title}</p>
                        <p>Body: {body}</p>
                        */
                }
                
            </form>
        </div>
    );
};
