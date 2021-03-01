import React from 'react'

// Desde aqui es desde donde mostraremos las imágenes.

export const GifGridItem = ( { id, title, url } ) => {

    // Podemos mostrar el id, titulo y url en consola así o de la siguiente forma:
    // console.log ( {id, title, url })
    console.log( id, title, url );

    // Y en este return, creando dos etiquetas, una para mostrar imagenes con el url como source, y
    // un párrafo con el título de la imagen.
    // Utilizamos className en vez de class para especificarle a JavaScript que
    // se trata de una clase de CSS, y no del propio Javascript (class es una palabra reservada de Javascript).
    return (
        <div className="card animate__animated animate__fadeIn">
            <img src = { url } alt = { title } />
            <p> { title } </p>
        </div>
    )
}
