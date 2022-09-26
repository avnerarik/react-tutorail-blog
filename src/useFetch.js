import { useState, useEffect } from "react";

const useFetch = (url) => {

    const [data, setData] = useState(null);
    
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    
    //Runs on every render
    useEffect(() => {
        const abortControl = new AbortController();

        //setTimeout(() =>{
            //Gets data from API address as a promise.
            fetch(url, { signal: abortControl.signal })
            .then(response => {
                if(!response.ok){
                    throw Error('Failed to get data from API address');
                }
                return response.json()
            })
            .then(data => {
                setLoading(false);
                setError(null);
                setData(data);
            })
            .catch(err => {
                if(err.name === 'AbortError'){
                    console.log("fetch aborted")
                } else {
                    setLoading(false);
                    setError(err.message);
                }
            });
        //}, 1000);

        return () => abortControl.abort();
    }, [url]);

    return {data, loading, error};
}
export default useFetch;
