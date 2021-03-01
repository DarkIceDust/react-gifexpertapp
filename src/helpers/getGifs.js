

export const getGifs = async ( category ) => {

    // Aquí es donde haremos la petición HTTP. Esto lo  haremos teniendo en cuenta que queremos que muestre los gifs de lo que nosotros escribamos.
    // Por tanto, utilizamos primero el encodeURL para que nos ayude con el tema de espacios y demás y enviamos la categoría.
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=10&api_key=jQ73noLQDRZPGXYJ3qOEE9WGxUSxcGKy`;
    const resp = await fetch ( url );
    const {data} = await resp.json();

    // Y aquí es donde vamos a recorrer el arreglo con los gifs, donde queremos que devuelva un array con
    // el id, titulo y url de dichos gifs.
    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    })

    // console.log(data);
    // console.log( gifs );
    // setImages( gifs );

    return gifs;
}