const fetchCategories = () => {
    fetch('https://openapi.programming-hero.com/api/news/categories')
        .then(res => res.json())
        .then(data => showCategorices(data.data.news_category))
}
const showCategorices = (data) => {
    const categories_container = document.getElementById("categories-container");
    data.forEach(element => {
        // console.log(element)
        categories_container.innerHTML += `<a class="nav-link" href="#" onclick="newsShowByCategory('${element.category_id}','${element.category_name}')">${element.category_name}</a>`;

    });

}

const newsShowByCategory = (id, category_name) => {
    console.log(category_name)
    const url = ` https://openapi.programming-hero.com/api/news/category/${id}`;
    fetch(url)
        .then(res => res.json())
        .then(data => showCategoryAllNews(data.data, category_name))
}
const showCategoryAllNews = (data, category_name) => {
    document.getElementById("count").innerText = data.length;
    document.getElementById("category").innerText = category_name;
    const all_news = document.getElementById("all-news");
    all_news.innerHTML = "";
    data.forEach(singeleNews => {
        console.log(singeleNews)
        console.log(singeleNews)
        const { title, image_url, details, author } = singeleNews;

        const ele = document.createElement("div");
        ele.classList.add("card", "mb-3");
        ele.innerHTML = `
  <div class="row g-0">
    <div class="col-md-4">
      <img src="${image_url}" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8 d-flex flex-column justify-content-between">
      <div class="card-body">
        <h5 class="card-title">${title}</h5>
        <p class="card-text">${details.slice(0, 200)}....</p>
      </div>
      <div class="footer p-3 d-flex justify-content-between"> 
      <div class="d-flex justify-content-between">
      <img src="${author.img}" style="width:50px; height:50px; border-radius:50%">
      <p>${author.name}</p>
      <p>${author.published_date}</p>
      </div>

      <div class="d-flex justify-content-between">
      <img src="${author.img}" style="width:50px; height:50px; border-radius:50%">
      <p>${author.name}</p>
      <p>${author.published_date}</p>
      </div>
      <div class="d-flex justify-content-between">
      <img src="${author.img}" style="width:50px; height:50px; border-radius:50%">
      <p>${author.name}</p>
      <p>${author.published_date}</p>
      </div>
      <div class="d-flex justify-content-between">
      
      </div>
      </div>
      </div>  
      
  </div>
    
    `;
        all_news.appendChild(ele)
    })

}

// // var dateFormat = require('dateformat');
// const de=new Date().toLocaleDateString('en-us', { year:"numeric", month:"short", day:"numeric"}) 
// // "Friday, Jul 2, 2021"
// console.log(de)

const d= new Date("2022-08-25 06:03:00").toLocaleString();
console.log(d.getMonth())