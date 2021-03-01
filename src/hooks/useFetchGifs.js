
// Importante tener en cuenta que todos los hooks empiezan con el nombre reservado "use".

import { useState, useEffect } from "react"
import { getGifs } from "../helpers/getGifs";

// Un hook no es más que una función.

export const useFetchGifs = ( category ) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {

    getGifs( category )
        .then ( imgs => {

            // setTimeout(() => {

                // console.log(imgs);
                setState({
                    data: imgs,
                    loading: false
                })

            // }, 3000);
        });
    }, [category] )

    // setTimeout(() => {
    //     setState({
    //         data: [1,2,3,4,5,6,7],
    //         loading: false
    //     })
    // }, 3000);

    return state; // { data: [], loading: true }
}