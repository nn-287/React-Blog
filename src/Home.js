import { Blogslist } from './Blogslist';
import { Usefetch } from './usefetch';

export const Home = () => {

    const{data: blog, isPending, error} = Usefetch('http://localhost:8000/blogs')
    return ( 
        <div className='home'>
            {blog && <Blogslist props={blog} title='All Blogs' />}
            { isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {/*<Blogslist props={blog.filter(blogs => blogs.author === 'Nancy')} title='Nancys Blogs'/>*/}
        </div>
     );
}