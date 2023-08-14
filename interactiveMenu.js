let products = [];

const User = {
  Username: "1234",
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
  const menu = prompt(`Menú
    [0] - Create a product
    [1] - Show products
    [2] - Go out`
  );

  if (menu == 0) {
    createProduct();
  }

  if (menu == 1) {
    alert("List of products")
    console.log(products);
  }

  if (menu == 2) {
    return false
  }
}

function main() {
  if (login() == true) {
    mainMenu()
  }
}

function createProduct() {
  let product = {
    title: prompt(`Enter the product title`),
    description: prompt(`Enter the product description`),
    price: prompt(`Enter the product price`),
  };
  uploadProducts(product)
  console.log(products);
}

function uploadProducts(product, array) {
  products.push(product);
  const productsJSON = JSON.stringify(products);
  localStorage.setItem(`Products`, productsJSON);
}



