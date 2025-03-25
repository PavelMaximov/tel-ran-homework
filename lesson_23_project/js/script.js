const categories = []
const products = []
let cart = []
let activeCategory = "all"

const navLinksElem = document.querySelector(".nav-links>nav>ul")
const productsContainer = document.querySelector(".products-container")
const cartProductsCount = document.querySelector(".cart-count")


async function getCategories() {
  try {
    const response = await fetch("https://dummyjson.com/products/categories")
    const data = await response.json()

    data.slice(0, 10).forEach(category => {
      categories.push({
        name: category.name,
        slug: category.slug
      })
    });

    renderCategories()
  } catch (error) {
    console.log(`Get categories error: ${error}`)
  }
}

function renderCategories() {
  let content = `<li class="nav-link active" data-slug="all">All</li>`
  categories.forEach(category => {
    content += `<li class="nav-link" data-slug="${category.slug}">${category.name}</li>`
  })

  navLinksElem.innerHTML = content

  let navLinks = document.querySelectorAll(".nav-link")
  navLinks.forEach(link => {
    link.addEventListener("click", function () {
      navLinks.forEach(function (categoryElement) {
        categoryElement.classList.remove("active")
      })
      // navLinks.forEach(l => l.classList.remove("active"))
      this.classList.add("active")

      activeCategory = this.dataset.slug
      renderProducts()
    })
  })
}

async function getProducts() {
  try {
    const response = await fetch('https://dummyjson.com/products?limit=100')
    const data = await response.json()

    data.products.forEach(product => {
      products.push({
        id: product.id,
        title: product.title,
        price: product.price,
        thumbnail: product.thumbnail,
        images: product.images,
        description: product.description,
        category: product.category
      })
    });

    renderProducts()
  } catch (error) {
    console.log(`Get products error: ${error}`);
  }
};


const searchInputElem = document.querySelector(".search-box")
searchInputElem.addEventListener("input", renderProducts)

const modalCloseBtn = document.querySelector(".close-modal");
const productModal = document.querySelector(".product-modal");
const modalWindow = document.querySelector(".modal-window");

document.addEventListener("DOMContentLoaded", function () {
 
  if (modalWindow) {
      modalWindow.remove(); 
  }
});


function openModal(product) {
  document.body.appendChild(modalWindow);

modalWindow.innerHTML = "";
  
  modalWindow.insertAdjacentHTML("beforeend", `
        <div class="product-modal">
            <div class="modal-header">
                <h2 class="modal-title">Product Details</h2>
                <button class="close-modal">X</button>
            </div>
            <div class="modal-content">
                <div class="product-gallery">
                
                    <div class="gallery-main">
                        <img src="${product.thumbnail}" alt="${product.title}">
                    </div>
                     
                    <div class="gallery-thumbs">
                    ${product.images.map((src, index) => `<img class="gallery-thumb" data-index="${index}" src="${product.thumbnail}" alt="${product.title}">`).join("")}
                </div>
                </div>
                <div class="product-details">
                    <h3 class="modal-product-title">${product.title}</h3>
                    <span class="modal-product-price">$${product.price}</span>
                    <p class="modal-product-description">${product.description}</p>
                    <button class="modal-addToCart" data-productid="${product.id}">Add to cart</button>
                    <div class="cart-message" class="hidden">Товар добавлен!</div>
                </div>
            </div>
        </div>
    `);


    document.querySelector(".close-modal").addEventListener("click", function () {
      modalWindow.remove();
  });
  
    
    modalWindow.addEventListener("click", function (event) {
      if (event.target === modalWindow) {
          modalWindow.remove();
      }
  });

  let addToCartButton = document.querySelector(".modal-addToCart");
  if (addToCartButton) {
  modalWindow.addEventListener("click", function (event) {
    let target = event.target;
    if (target.classList.contains("modal-addToCart")) {
      event.stopPropagation();
      let productId = +target.dataset.productid;
      addToCart(productId);

      addToCartButton.innerText = "Добавлено!";
      addToCartButton.disabled = true;
    }
    })

   
  }
}

document.addEventListener("click", function (event) {
  const productCard = event.target.closest(".product-card");

  if (productCard) {
      const productId = +productCard.dataset.productid;
      const product = products.find(p => p.id === productId);

      if (!product) {
          console.error("Ошибка: товар с таким ID не найден!");
          return;
      }

      openModal(product);
  }
});





function renderProducts() {
  let searchValue = searchInputElem.value.toLowerCase()
  productsContainer.innerHTML = ""
  products.filter(function (product) {
    if (activeCategory === "all") {
      if (searchValue === "") return true
      return product.title.toLowerCase().includes(searchValue)
    }

    if (product.category === activeCategory) {
      if (searchValue === "") return true
      return product.title.toLowerCase().includes(searchValue)
    }
  }).forEach(product => {
    const existInCart = cart.find(p => p.id === product.id)
    productsContainer.insertAdjacentHTML("beforeend", `
    <div class="product-card" data-productid="${product.id}">
      <div class="product-image-container">
        <img src="${product.thumbnail}" alt="product" class="product-image">
        <div class="product-category">${product.category}</div>
      ${existInCart ?
        `<div class="product-select exist" data-productid="${product.id}">✓</div>` :
        `<div class="product-select" data-productid="${product.id}">+</div>`
      }
      </div>
      <div class="product-info">
        <p class="product-title">${product.title}</p>
        <p class="product-price">$${product.price}</p>
      </div>
    </div> `)
  })

  let productSelects = document.querySelectorAll(".product-select")
  productSelects.forEach(function (elem) {
    elem.addEventListener("click", function (event) {
      event.stopPropagation() 
      console.log(+this.dataset.productid)
      addToCart(+this.dataset.productid)
    })
  })

  let productCards = document.querySelectorAll(".product-card")
  productCards.forEach(function (elem) {
    elem.addEventListener("click", function () {
      renderModalWindowContent(+this.dataset.productid)
      modalWindow.classList.add("open")
    })
  })
}

const mainModalImage = document.querySelector(".gallery-main")
const modalThumbnails = document.querySelector(".gallery-thumbs")
const modalProductTitle = document.querySelector(".modal-product-title")
const modalProductPrice = document.querySelector(".modal-product-price")
const modalProductDescription = document.querySelector(".modal-product-description")

function renderModalWindowContent(productId) {

  const product = products.find(p => p.id === productId)
  if (!product) {
    return
  }

  mainModalImage.innerHTML = `<img src="${product.images[0]}" alt="${product.title}">`
  modalThumbnails.innerHTML = product.images.map(src => `<img class="gallery-thumb" src="${src}" alt="${product.title}">`).join("")

  modalProductTitle.innerText = product.title
  modalProductPrice.innerText = `$${product.price}`
  modalProductDescription.innerText = product.description
}



function addToCart(productId) {
  let product = products.find(p => p.id === productId)
  if (!product) {
    return
  }

  

  let productInCart = cart.find(p => p.id === productId)
  if (productInCart) {
    cart = cart.filter(p => p.id !== productId)
  } else {
    cart.push({
      id: product.id,
      title: product.title,
      image: product.thumbnail,
      price: product.price,
      count: 1
    })
  }

  

 
  renderProducts()
  renderCartProducts()
}

const cartIcon = document.querySelector(".cart-icon")
const closeCart = document.querySelector(".close-cart")
cartIcon.addEventListener('click', toggleCart);
closeCart.addEventListener('click', toggleCart)
function toggleCart() {
  cartSidebar.classList.toggle('open');
}

const cartProducts = document.querySelector(".cart-items")
function renderCartProducts() {
  cartProducts.innerHTML = ""
  cartProductsCount.innerText = cart.length

  cart.forEach(product => {
    cartProducts.insertAdjacentHTML("beforeend",
      `<div class="cart-item">
        <img src="${product.image}"
          alt="${product.title}" class="cart-item-image">
        <div class="cart-item-details">
          <div class="cart-item-title">${product.title}</div>
          <div class="cart-item-price">$${product.price}</div>
          <div class="cart-item-actions">
            <button class="quantity-btn decrease-quantity" data-id="${product.id}">-</button>
            <span class="item-quantity">${product.count}</span>
            <button class="quantity-btn increase-quantity" data-id="${product.id}">+</button>
            <button class="remove-item" data-id="${product.id}">×</button>
          </div>
        </div>
      </div>`
    )
  })

  const plusBtns = document.querySelectorAll(".increase-quantity")
  plusBtns.forEach(btn => {
    btn.addEventListener("click", function () {
      updateCount(+this.dataset.id, 1)
    })
  })

  const decBtns = document.querySelectorAll(".decrease-quantity")
  decBtns.forEach(btn => {
    btn.addEventListener("click", function () {
      updateCount(+this.dataset.id, -1)
    })
  })

  if (cart.length === 0) {
    cartProducts.innerHTML = `<div class="empty-cart">Your cart is empty</div>`
  }

  const removeProducts = document.querySelectorAll(".remove-item")
  removeProducts.forEach(rmElem => {
    rmElem.addEventListener("click", function () {
      cart = cart.filter(p => p.id !== +this.dataset.id)
      renderCartProducts()
      renderProducts()
    })
  })

  const cartTotal = document.querySelector("#cartTotal")
  cartTotal.innerText = `$${cart.reduce((acc, p) => acc + (p.price * p.count), 0).toFixed(2)}`
}

function updateCount(productId, count) {
  const product = cart.find(p => p.id === productId)
  if (!product) {
    return
  }

  product.count += count
  if (product.count <= 0) {
    cart = cart.filter(p => p.id !== productId)
  }

  renderCartProducts()
  renderProducts()
}





getCategories()
getProducts()