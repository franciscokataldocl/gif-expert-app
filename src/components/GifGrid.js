import React from 'react'

const GifGrid = ({category}) => {

    

    const getGifs = async()=>{
        const url ='http://api.giphy.com/v1/gifs/search?q=rick and morty&limit=10&api_key=NaLulphlQpKOzfp5zxNP0hgrMdvOTEe1';
        const resp = await fetch(url);
        const {data} = await resp.json();

        const gifs = data.map(img=>{
            return{
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })
        console.log(gifs);

        
    }
    getGifs();
    
    return (
        <>
            <h3>{category}</h3>
        </>
    )
}

export default GifGrid
