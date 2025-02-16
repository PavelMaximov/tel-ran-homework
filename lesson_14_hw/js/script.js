

function getProductById(id, callback) {
    fetch(`https://dummyjson.com/products/${id}`)
        .then(response => response.json())
        .then(product => callback(product))
        .catch((error) => {console.log(error);
          })
}

document.getElementById("fetchProduct").addEventListener("click", () => {
    const id = document.getElementById("productId").value;
    if (id === "") {
        alert("Введите ID продукта!");
        return;
    }

    getProductById(id, (product) => {
        document.getElementById("productCard").innerHTML = `
            <img src="${product.images[0]}" alt="Product image">
            <h2 class="title">${product.title}</h2>
            <p><strong>Stock:</strong> ${product.stock}</p>
            <p><strong>Price:</strong> $${product.price}</p>
            <p><strong>Rating AVG:</strong> ${product.rating}</p>
            <p><strong>Category:</strong> ${product.category}</p>
        `;
    });
});