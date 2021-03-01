
import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
   
    // Vamos a crear una lista de categorías para nuestra aplicación.
    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    
    // Podemos crearla como arriba, pero hay un problema, ya que podríamos llegar a modificar el arreglo y
    // haciéndolo así no nos serviría. Por tanto, haremos uso del useState:
    const [categories, setCategories] = useState(['One Punch']);

    // const handleAdd = () => {
    //     // Asi es como podemos añadir un nuevo elemento a nuestra lista de categorías (con el operador spread "..."), sin perder los elementos que teníamos anteriormente.
    //     setCategories( [ ...categories, 'HunterXHunter' ] ); 

    //     // Otra forma de hacerlo:
    //     // setCategories ( categories => [ ...categories, 'HunterXHunter' ] );
    // }


    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories = { setCategories }/>
            <hr />

            {/* <button onClick = { handleAdd }> Agregar </button> */}

            <ol>
                {
                    // Nos creamos una lista ordenada con ol, y ponemos lo siguiente:
                    // Con el map podemos barrer el arreglo, y le decimos que queremos devolver
                    // varios li (dependerá del número de elementos que tenga el arreglo category),
                    // que utilice como índice el índice del map y como elemento, muestre cada elemento
                    // que se encuentra en el arreglo category.
                    // categories.map( category => {
                    //    return <li key={category}>{category}</li>
                    // })

                    // El categories.map anterior es para iniciar la app. Este es para llamar a los GIFs.
                    // Llamamos a GifGrid y ponemos como key la categoría y como valor de la categoría, category también, ya que
                    // utilizará el setCategories.
                    categories.map ( category => (
                        <GifGrid 
                        key = { category }
                        category = { category }
                        />
                    ))
                }
            </ol>

        </>
        
    );

};
