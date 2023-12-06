import {Link} from'react-router-dom';

export const NotFound=()=>{

    return(

        <div className="not-found">
            <h2>Not available</h2>
            <p>Page is not found!!</p>
            <Link to='/'>Back to home page!</Link>
        </div>
    )
}

