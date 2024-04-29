const concertContainer = document.querySelector('.concert');
async function getPosts() {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts")
    let posts = await response.json()
    posts.forEach(x => {
        const concertCard = document.createElement('div');
        concertCard.classList.add('concert_card');
        concertCard.setAttribute('id', 'concert_card');

        concertCard.innerHTML = `
        <div class="card__title" id="card_title">${x.title}</div><br>
        <div class="card__description" id="card_description">${x.body}</div>
        <div class="card__img" id="card_img">
          <img src="https://www.thebulletin.be/sites/default/files/styles/big_article/public/palais_12.jpg?itok=HyQE38E1">
        </div>
      `;
        concertContainer.appendChild(concertCard);
    })
}

async function start() {
    await getPosts()
}

start()