const getData = async () => {
    const result = await fetch('https://jsonplaceholder.typicode.com/posts')
        const resultObj = await result.json ()
        console.log (resultObj[1].title);
        console.log (resultObj[1].body);
}

getData()

const getComments = async () => {
    const result = await fetch('https://jsonplaceholder.typicode.com/comments')
       const resultObj =  await result.json ()
       console.log (resultObj[0].email)
       console.log (resultObj[0].body)
}

getComments()

const getAlbums = async () => {
    const result = await fetch('https://jsonplaceholder.typicode.com/albums')
       const resultObj =  await result.json ()
       console.log (resultObj[0].title)
}

getAlbums()

const getPhotos = async () => {
    const result = await fetch('https://jsonplaceholder.typicode.com/photos')
       const resultObj =  await result.json ()
       console.log (resultObj[0].url)
}

getPhotos()

const getTodos = async () => {
    const result = await fetch('https://jsonplaceholder.typicode.com/todos')
       const resultObj =  await result.json ()
       console.log (resultObj[0].title)
       console.log (resultObj[0].completed)
}

getTodos()