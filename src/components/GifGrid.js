import React from "react";
import useFetchGifs from "../hooks/useFetchGifs";
// import { getGifs } from '../helpers/getGifs';
import GifGridItem from "./GifGridItem";

const GifGrid = ({ category }) => {
  // const [images,setImages] = useState([]);
  const { data: images, loading } = useFetchGifs(category);

  return (
    <>
      {loading && <p className="animate__animated animate__pulse">cargando</p>}
      <h3 className="category-title animate__animated animate__pulse">
        has buscado:
        <span>{category}</span>
      </h3>
      {images.map((img) => (
        <GifGridItem key={img.id} {...img} />
      ))}
    </>
  );
};

export default GifGrid;
