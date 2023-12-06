import {useState, useEffect} from 'react';

export const  Usefetch =(url)=>{

    


    const[data,setData] = useState([])
    const[isPending,setIspending] = useState(true)
    const[error,setError] = useState(null)


    useEffect(()=>{
        const abortCont = new AbortController();
        setTimeout(()=>{
            console.log("useEffect() hook ran!")
            
        
        fetch(url, {signal: abortCont.signal}).then(res=> { if(!res.ok){throw Error("Couldn't fetch data")}return res.json();}).then(data=>{console.log(data); setData(data); setIspending(false);})
        .catch(error =>{
            if(error ==='AbortError')
            {
                console.log('fetch aborted!')
            }
            else
            {
                setIspending(false);
                setError(error.message)//This 'catch' block is to catch error messages related to network/server if it's down.


            }
            
        })
        },1000)
    },[url])


    return {isPending, data, error}
}