import React from 'react'
import useFetchGifs from '../hooks/useFetchGifs'
// import { getGifs } from '../helpers/getGifs';
import GifGridItem from './GifGridItem';

const GifGrid = ({category}) => {



    // const [images,setImages] = useState([]);
    const {data:images ,loading} = useFetchGifs(category);
  

    

  
    
    return (
        <>
        {loading && <p>cargando</p>}
           
            {
                    images.map(img =>(
                        <GifGridItem 
                        key={img.id} 
                        {...img}/>
                    ))
                }
        </>
    )
}

export default GifGrid
