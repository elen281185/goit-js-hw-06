const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
/*
1) Створити контейнер для лішок (ul)
2) Перебрпти масив
3) Створити лішку
4) Створити картинку
5) Додати лішку у контейнер
6) Додати контейнер (ul) в документ
*/
/* 1-var*
const ulEl = document.createElement("ul")
for (const {url, alt} of images) {
  const liEl = document.createElement("li");
  const imgEl =document.createElement("img");
  imgEl.src = `${url}`;
  imgEl.alt = `${alt}`;
  liEl.textContent = imgEl;
ulEl.appendChild(liEl);
}


document.body.appendChild(ulEl);
*/

const markup = images
.reduce((acc,{url,alt}) => acc + `<li><img src=${url} alt = ${alt} width =450 px height = auto></img></li>`,"");
document.body.insertAdjacentHTML("beforeend",`<ul>${markup}</ul>`)

