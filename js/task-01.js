const categories = document.getElementById("categories").children.length;
console.log(`Number of categories: ${categories}`);

const arrayTitleCategories = document.querySelectorAll(`h2`);
arrayTitleCategories.forEach((title)=> {
    console.log(`Category:`, title.textContent);
    console.log(`Elements:`, title.nextElementSibling.children.length);
});
