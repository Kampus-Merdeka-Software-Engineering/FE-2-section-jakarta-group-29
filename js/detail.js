
const baseUrl = "https://mhealth.cyclic.app";

const loadArticle = () => {
    const urlParams = new URLSearchParams(window.location.search);
    // console.log(urlParams);
    // const prefix = "https://kampus-merdeka-software-engineering.github.io/FE-2-Jakarta-29/"
    // const url = urlParams.substring(prefix.length);
    const id = urlParams.get('id');
    console.log(id);
    
    const apiRoutes = {
        articleList: `${baseUrl}/news/article?id=${id}`,
    }
    console.log(apiRoutes.articleList);

    fetch(apiRoutes.articleList)
    .then((res) => res.json())
    .then((res) => {
        console.log({res});
        const { content, title, author, image, date, topic } = res;
        document.getElementById("main-article").innerHTML += `
        <div class="body-article">
            <h1 class="title">${title}</h1>
            <p class="author">${author}</p>
            <p class="date">${date}</p>
            <img class="imageUrl" src="${image}" alt="contoh-image-url">
            <p class="article-content">
                ${content}
            </p>
            <hr>
        </div>
        `;
    });
};


const apiRoutes2 = {
    articleList: `${baseUrl}/news/random`,
}

const randomArticle = () => {
    fetch(apiRoutes2.articleList)
    .then((res) => res.json())
    .then((res) => {
        console.log({res});
        for (let i = 0; i < 4; i++) {
            const { id, title, image, date } = res[Math.floor(Math.random() * res.length)];
            document.getElementById("other").innerHTML += `
            <div class="news-wrapper" onclick={redirectToArticles(${id})}>
                <img src="${image}" alt="">
                <div class="content">
                    <h3 id="other-title">${title}</h3>
                    <p id="other-date">${date}</p>
                </div>
            </div>
            `;
        }
    });
};

const randomArticle2 = () => {
    fetch(apiRoutes2.articleList)
    .then((res) => res.json())
    .then((res) => {
        console.log({res});
        for (let i = 0; i < 3; i++) {
            const { id, title, image } = res[Math.floor(Math.random() * res.length)];
            document.getElementById("must-read").innerHTML += `
            <div class="cards" onclick={redirectToArticles(${id})}>
                <img src="${image}" alt="contoh">
                <div class="content">
                    <h3>${title}</h3>
                </div>
            </div>
            `;
        }
    });
};

randomArticle2()
randomArticle()
loadArticle()

