import React, { useState } from 'react'
import PropTypes from 'prop-types';

// Mandamos el valor de setCategories como argumento ya que lo necesitamos para el handleSubmit.
export const AddCategory = ( { setCategories } ) => {

    // Nos creamos un useState que nos va a servir para saber lo que la persona esté escribiendo.
    const [inputValue, setinputValue] = useState('');

    // Esta función servirá para que podamos cambiar el texto que haya en el input de texto.
    const handleInputChange = (event) => {
        // console.log(event.target.value);
        setinputValue (event.target.value);
    }

    // Esta función sirve para que cuando presionemos la tecla Enter, no haga un refresco de la página (eso se previene con el event.preventDefault). El refresco de la página lo hace por defecto el formulario, por lo que con esto lo podemos desactivar.
    const handleSubmit = (event) => {
        event.preventDefault();
        // console.log('Submit hecho');

        // Aqui haremos una validación para que no se añada al arreglo si se pulsa la tecla enter sin escribir nada.
        if ( inputValue.trim().length > 2 ) {

            // Ahora llamamos al setCategories con las categorias anteriores y añadimos el inputValue que es lo que la persona escribe en el cuadro de texto.
            // Cuando pulse enter, llamará a la función setCategories del GifExpertApp.js y añadirá lo nuevo al array.
            // setCategories ( categories => [ ...categories, inputValue ] );

            // Lo anterior está bien, pero si llegamos al punto de que queremos tener como primera la última categoría que hayamos introducido, hay que cambiar los elementos de lugar tal que así:
            setCategories ( categories => [ inputValue, ...categories ])
            setinputValue('');
        }
    
    
    }

    // Nos creamos un input y añadimos tanto el tipo de input, como el valor y el onChange, que llamará a handleInputChange cada vez que la caja de texto cambie.
    // Teníamos fragments, pero los podemos quitar ya que como agrupador vamos a usar un elemento form, al cual
    // le diremos que cada vez que pulsemos la tecla enter llame al handleSubmit.
    return (
        <form onSubmit = { handleSubmit }>
            <input 
                type = "text"
                value = { inputValue }
                onChange = { handleInputChange }
            />
        </form>
    )
}

// Utilizamos los proptypes para que se tenga que usar obligatoriamente el setCategories como componente de nuestra aplicación.
AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
}