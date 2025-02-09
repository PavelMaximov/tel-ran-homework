let product = JSON.parse(localStorage.getItem("product")) || {
    title: "Велосипед",
    img: "./img/1.webp",
    count: 0,
    favorite: false
}


// DOM елементы
        const productCard = document.querySelector(".product-card");
        const imgElem = productCard.querySelector("img");
        const titleElem = productCard.querySelector(".title");
        const counterElem = productCard.querySelector("p");
        const btnPlus = productCard.querySelector(".plus");
        const btnMinus = productCard.querySelector(".minus");
        const favButton = document.querySelector(".fav i");


//Функция для сохранения объекта в JSON    
function saveProduct() { 
localStorage.setItem("product", JSON.stringify(product));
};
  
//Функция для обновления объекта <p> на странице и заливка кнопки "избранное"
function productCounterUpdate() {
    counterElem.innerText = product.count
    favButton.className = product.favorite ? "fa-solid fa-star" : "fa-regular fa-star";
};

//вся работа с классом .counter {
productCounterUpdate()

btnPlus.addEventListener("click", () => {
product.count++
productCounterUpdate()
saveProduct()
});

btnMinus.addEventListener("click", () => {
    if (product.count > 0) { 
product.count--
productCounterUpdate()
saveProduct()
    }
});
// }

//Кнопка "Добавить в избранное"
favButton.addEventListener("click", () => {
product.favorite = !product.favorite;
saveProduct()
});







favButton.addEventListener("click", function () {
    if (this.classList.contains("fa-regular")) {
        this.classList.remove("fa-regular")
        this.classList.add("fa-solid")
    } else {
        this.classList.remove("fa-solid")
        this.classList.add("fa-regular")
    }
});

console.log(product);
