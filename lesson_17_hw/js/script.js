//  Задача №1
class Car {
    constructor(mark, model, year) {
        this.mark = mark
        this.model = model
        this.year = year
    }

    age() {
        return 2025 - this.year
    }
}

let newCar = new Car("BMW", "M5", 2021)
console.log(`Age of the car: ${newCar.age()}`);


//  Задача №2
class Person {
    constructor(name, age, email){
        this.name = name
        this.age = age
        this.email = email
    }

    change_email(newEmail) {
        if (newEmail.includes("@") && newEmail.includes(".")) {
            this.email = newEmail
        }else{
            throw new Error("Incorrect email");
        }
    }
}
let user = new Person("John", 24, "johndoe@gmail.com")

console.log(user.email);
user.change_email("newjohndoe@gmail.com")
console.log(user.email);

//  Задача №3

class Library {
    static books = []


    static addBook(book){
       if (book.title && book.author){
        this.books.push(book)
        console.log(`Book "${book.title}" successfully added`);
       }else {
        console.log("Error! book must have a title and an author");
    }
       
    }

    static listBooks(){
        if(this.books.length >= 1) {
            console.log("List of books:");
            this.books.forEach((book, index) => {
            console.log(`${index + 1}) "${book.title}" - ${book.author}`);
            }) 
            
            
        }else{
            console.log(`Library is empty`);
        }
    }
}

Library.addBook({title: "Carlos Castaneda", author: "Travel to Ixtlan"})
Library.addBook({title: "Arthur Schopenhauer", author: "Aphorisms of worldly wisdom"})
Library.listBooks()


//  Задача №4

class Rectangle {
    #width
    #height

    constructor(width, height){
        this.width = width
        this.height = height
    }

    get width() {
        return this.#width
    }

    set width(value){
        if(value >= 1){
            this.#width = value
        }else{
            throw new Error("Width must be a positive number");
        }
    }

    get height() {
        return this.#width
    }

    set height(value){
        if(value >= 1){
            this.#height = value
        }else{
            throw new Error("Height must be a positive number");
        }
    }

    area(){
        return this.#width * this.#height
    }
}

let newSquare = new Rectangle(8, 6)
  console.log(newSquare.area())


//Задача №5
class BankAccount {
    static accounts = []
    #balance = 0;
    
 
    constructor(checkBalance = 0) {
        if (checkBalance < 0) {
            throw new error ("Balance cannot be negative")
        }
        this.#balance = checkBalance
        BankAccount.accounts.push(this)
     
    }
    getBalance(){
     return this.#balance
    }

    addDeposit(trx){
    if(trx > 0){
        this.#balance += trx
        console.log(`Deposit ${trx}$ successeful. Balance: ${this.#balance}$`);
        
    }else {
        throw new Error("The sum cannot be negative");
        
    }
    }

    cashWithdraw(amount){
        if (amount > this.#balance) {
            throw new Error("Insufficient funds");
            
        }else if(amount > 0){
            this.#balance -= amount
            console.log(`Withdraw ${amount}$ successeful. Balance: ${this.#balance}$`);
            
        }else{
            throw new Error("The sum of withdraw cannot be a negative");
            
        }
    }
    static totalBalance(){
        return BankAccount.accounts.reduce((sum, account) => sum + account.balance, 0)
        // Не могу понять в чем проблема тут
    }
 }
 try {
    let account1 = new BankAccount(300)
 let account2 = new BankAccount(600)
 
account1.addDeposit(1000)
account2.cashWithdraw(200)

 console.log(`Current balance: ${BankAccount.totalBalance()}$`); 

 } catch (error) {
    console.log(error.message)
 }
