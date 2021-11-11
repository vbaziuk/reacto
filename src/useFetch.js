import { useState, useEffect } from 'react';

// custom hooks in react need to start with 'use'
const useFetch = (url) => {
    // useState allows us to use different states in react and update them accordingly.
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        const abortCont = new AbortController();

        fetch(url, { signal: abortCont.signal })
            .then(res => {
                if (!res.ok) {
                    throw Error('Could not fetch the data for that resource')
                }
                return res.json()
            })
            .then(data => {
                // console.log(data);
                setData(data);
                setIsPending(false);
                setError(null);
            })
            .catch((err) => {
                if (err.name === 'AbortError') {
                    console.log('Fetch Aborted');       // used to clean up fetch error
                } else {
                    setIsPending(false);
                    setError(err.message);
                }
            })

            return () => abortCont.abort();
    }, [url]);     // dependency array - whenever url is changed, this code is re-run to update the data

    return { data, isPending, error }
}

export default useFetch;