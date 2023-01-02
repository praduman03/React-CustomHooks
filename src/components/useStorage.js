import React,{useEffect} from 'react'



const useStorage=(value)=> {
    const data=value
    useEffect(() => {
        localStorage.setItem('data', JSON.stringify(data));
      }, [data]);
    }

export default useStorage
