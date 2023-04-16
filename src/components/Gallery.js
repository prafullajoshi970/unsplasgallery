import React from 'react'
import { useState,useEffect } from 'react'


const Gallery = () => {
    const[data,setData]=useState([]);
    const [input,setInput]=useState("electronics")

    useEffect(() => {
        fetch(`https://api.unsplash.com/search/photos/?page=1&query=${input}&client_id=Ldmp38yAeOwZYHCThBSVR48T-mVFh-iySchPFlxvyPk`)
        .then((resp)=>resp.json())
        .then((data)=>setData(data.results))
        .catch((error)=>console.log(error))
     
    }, [input])
    
    console.log(data);
    console.log(input)


  return (
    <div>
        <h1>Image Gallery</h1>
        <form type= "submit" onSubmit={(e)=>e.preventDefault()}>
            <label>Search keyword -</label>
        <input placeholder="search any keyword to get images"onChange={(e)=>setInput(e.target.value)}></input>
        
        </form>

        {data.length>0 ? (
        <div>
               {

                data.map((images,idx)=>{
                    return(
                        <img src={images.urls.thumb} alt=''></img>
                    )
                
               })
            }
        </div>
 
    ):
  
<h3>No data found</h3>
  
}
</div>
    
)}

export default Gallery