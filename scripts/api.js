async function getPosts() {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts")
    let posts = await response.json()
    console.log(posts[0])
}

async function start() {
    await getPosts()
}

start()