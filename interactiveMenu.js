const User = {
    Username: "User98",
    Password: "1234",
  }
  
  function login() {
    for (let intentos = 1; intentos <= 3; intentos++) {
      const Username = prompt("enter your username");
      const Password = prompt("enter your password");
  
      console.log(Username);
      console.log(Password);
  
      if (Username == User.Username && Password == User.Password) {
        console.log("logged in");
        return true;
      }
      else {
        console.log("attempt failed, try again")
      }
    }
    return false;
  };
  
 main();   

function mainMenu() {
  const menu = prompt (`Menú
    [0] - Create a product
    [1] - Show products
    [2] - Go out`
    );

    if (menu == 0){
      prompt ("Enter the product title")
      prompt ("Enter the product description")
      prompt ("Enter the product price")
    }    
    
    if (menu == 1){
      alert ("List of products")
      console.log (products);
    }

    if (menu == 2){
      return false
    }
  }  



function main() {
  if (login() == true) {
    mainMenu()
  }
}

let products = [];

  function createProduct(title, description, price){
      let product = {
      title,
      description,
      price,
      };

      console.log (product);
      return product;
  }

function uploadProducts(product, array){
  array.push(product);
  return array;
}  

console.log(products);


localStorage.setItem(`Products`,products);

const productsJSON = JSON.stringify(products);

localStorage.setItem(`Products`, productsJSON);
