// _______________________________________1_Легкая_Задача 
function introduce() {
    console.log(`Привет, меня зовут ${this.firstname}`);
    
}

let neo = {
    firstname: "Neo"
}

let trinity = {
    firstname: "Trinity"
}

introduce.call(neo)
introduce.call(trinity)

// _______________________________________2_Легкая_Задача 

function sumThreeNumbers(num1, num2, num3) {
    return num1 + num2 + num3
}

let array =  [2, 4, 6]
let result = sumThreeNumbers.apply(null, array)
console.log(result);

// _______________________________________3_Сложная_Задача 

let products = [
    { title: "Телефон", basePrice: 1000, tax: 100 },
    { title: "Ноутбук", basePrice: 2000, tax: 200 },
    { title: "Планшет", basePrice: 500, tax: 50 }
]

function calculateFinalPrice(extraDiscount, basePrice, tax, productTitle) {
    let finalPrice = (basePrice + tax) * (1 - (this.discountRate + extraDiscount) / 100);

    console.log(`Окончательная цена продукта ${productTitle} для пользователя ${this.fullname}: ${finalPrice}.`);
    
}

const customerA = {
discountRate: 5 ,
fullname: "Alice"
}

const customerB = {
discountRate: 10,
fullname: "Bob"  
}

const customerACalculateFinalPrice = calculateFinalPrice.bind(customerA, 5)
const customerBCalculateFinalPrice = calculateFinalPrice.bind(customerB, 10)

// customerACalculateFinalPrice(products.basePrice, products.tax, products.productTitle)
products.forEach(product => {
    customerACalculateFinalPrice(product.basePrice, product.tax, product.title);
    customerBCalculateFinalPrice(product.basePrice, product.tax, product.title);
});