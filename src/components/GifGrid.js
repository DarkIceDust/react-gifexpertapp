import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ( { category }) => {

    // // Este useState sirve para hacer las pruebas con el return de abajo.
    // // const [count, setCount] = useState(0);

    // const [images, setImages] = useState([]);

    // Así es como usaríamos el custom Hook:
    // Podemos cambiar el nombre de data a images para que sea mas facil.
    const { data:images, loading } = useFetchGifs( category );
    // console.log( data, loading  );
    
    // // Haciendo uso del useEffect, y llamando a getGifs desde aquí, nos aseguramos de que el botón que hay en el return del comentario de abajo
    // // cuando lo pulsemos no vuelva a hacer la petición fetch por cada una de las pulsaciones que hagamos sobre dicho botón, sino que
    // // simplemente la hace 1 vez. Este useEffect recibe dos argumentos, una función y una lista de dependencias (un arreglo). Al no haber enviado nada
    // // en dicha lista, el useEffect solo se ejecuta una vez y por tanto, solamente vemos en la consola 1 vez el mensaaje con el array de 10 elementos.
    // useEffect( () => {
    //     getGifs( category )
    //         .then ( imgs => setImages( imgs ));
    // }, [] )



    // En este return lo que hacemos es recorrer el array de imagenes que tiene como elementos el id, el titulo y el url,
    // y le decimos que queremos que muestre en una lista como key el id, y como elemento de la lista, el titulo del gif.
    // Cabe destacar que he realizado la desestructuración de id y title. Sin desestructuración sería asi:
    //images.map( ( img ) => (
    //     <li key = { img.id } > { img.title } </li>
    //     )
    // )

    // Este return es anterior al componente GifGridItem.js.
    // return (
    //     <div>
    //         <h3> { category } </h3>
    //             {
    //                 images.map( ({ id, title } ) => (
    //                     <li key = { id } > { title } </li>
    //                     )
    //                 )
    //             }
    //     </div>
    // )


    return (
        <>
        <h3 className = "animate__animated animate__fadeIn"> { category } </h3>
        { loading && <p className = "animate__animated animate__flash">Loading GIFs...</p> }
        <div className="card-grid"> 
                {
                    images.map( ( img ) => (
                        <GifGridItem 
                        key = { img.id }
                        { ...img }
                        />
                
                    ))
                }
        </div>
        </>
    )

    
    // Este return nos serviría para hacer pruebas, de tal forma que así podemos comprobar que necesitamos usar el
    // useEffect, debido a que cada vez que pulsemos en el botón, nos vuelve a hacer la llamada a getGifs():
    // return (
    //     <div>
    //         <h3> { count } </h3>
    //         <button onClick = { () => setCount ( count + 1 ) } />
    //     </div>
    // )
}
