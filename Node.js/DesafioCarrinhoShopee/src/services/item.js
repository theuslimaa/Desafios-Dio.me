async function Item(name, price, quantity){
    return{
        name,
        price,
        quantity,
        subtotal: () => price * quantity,
    };
}

export default createItem;