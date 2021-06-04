
const shopping ={
    Hand_made_heirlooms:35000,
    organic_baby_clothes:3500
};

const shoppingList = (resolve, reject) => {
    if (shopping.Hand_made_heirlooms >= 35000 ){
        resolve ("Product ready to be sold");
    }else{
        reject("Sorry, the product has been sold out");
    }
};

const AddToCart = () => {
    return new Promise(shoppingList);
}
const ShoppingNew = AddToCart();
console.log(ShoppingNew);
alert('Hello, welcome to our website. Kindly explore more');