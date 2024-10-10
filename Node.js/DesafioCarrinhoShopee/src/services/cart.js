//Funções do carrinho

async function AddItem(userCart, item){
    userCart.push(item);
}

async function CalculateCart(userCart){
    console.log("\nYOUR SHOPEE CART IS:")

    const result = userCart.reduce((total, item) => total + item.subtotal(), 0);

    console.log(`Total: ${result}`)
}

async function DeleteItem(userCart, item){
    const index = userCart.findIndex((item) => item.name === name);

    if (index !== -1){
        userCart.splice(index, 1);
    }
}

async function RemoveItem(userCart, item){
    //Encontrar o indice do item
    const indexFound = userCart.findIndex((p => p.name === item.name))

    //Caso não encontre o item
    if (indexFound === -1){
        console.log("Item não encontrado");
        return;
    }

    //Item > 1 Subtrair um item
    if (userCart[indexFound].quantity > 1) {
        userCart[indexFound].quantity -= 1;
        return;
    }

    //Item = 1, deleter o item
    if (userCart[indexFound].quantity == 1) {
        userCart.splice(indexFound, 1);
        return;
    }
}

// Mostra todos os items do carrinho da shopee
async function DisplayCart(userCart) {
  console.log("\nShopee cart list:");
  userCart.forEach((item, index) => {
    console.log(
      `${index + 1}. ${item.name} - R$ ${item.price} | ${
        item.quantity
      }x | Subtotal = ${item.subtotal()}`
    );
  });    
}

export { AddItem, CalculateCart, DeleteItem, RemoveItem, DisplayCart}