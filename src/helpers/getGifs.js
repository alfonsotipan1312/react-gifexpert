export const getGifs = async ( category ) =>{
    const url = `https://api.giphy.com/v1/gifs/search?api_key=qMH4NUK008W9D0RrBAcE8zX0NeCPOSH6&q=valorant${category}&limit=10`;

    const resp = await fetch(url);

    const { data } = await resp.json();

    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    });

   // console.log(url);
   // console.log(gifs);

    return gifs;
}