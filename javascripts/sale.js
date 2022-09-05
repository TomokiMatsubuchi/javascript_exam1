const coffee = ["オリジナルブレンド200g", "オリジナルブレンド500g", "スペシャルブレンド200g", "スペシャルブレンド500g"];
const coffeePrice = [500, 900, 700, 1200];
const productIdElement = document.getElementById("product");
const numberElement = document.getElementById("number");
let purchases = [];


function add() {
    const coffeeId = parseInt(productIdElement.value);
    const number = parseInt(numberElement.value);
    let purchase = {
        coffee: coffee[coffeeId - 1],
        price: coffeePrice[coffeeId - 1],
        number: number,
    };
    
    console.log(purchase);
    let newPurchase = true;

    purchases.forEach((item) => {
        if(item.price === purchase.price){
            newPurchase = false;
        }
    });

    if (purchases.length < 1 || newPurchase) {
        purchases.push(purchase);
    }else{
        for (let i = 0; i < purchases.length; i++) {
            if (purchases[i].price === purchase.price) {
                purchases[i].number += purchase.number;
            }
        }
    };

    window.alert(`${display()}\n小計${subtotal()}円`);
    console.log(purchases);
  }

function subtotal() {
    return purchases.reduce((prev, purchases) => {
        return prev + purchases.price *purchases.number
    }, 0);
};

function display() {
    return purchases.map(purchases => {
        return `${purchases.coffee} ${purchases.price}円: ${purchases.number}点`
    }).join("\n");
};

function calc() {
    const sum = subtotal();
    const postage = calcPostageFromPrchase();
    window.alert(`${display()}\n\n小計は${sum}円、 送料は${postage}円です。合計は${sum + postage}円です`);
    purchases = [];
    productIdElement.value = "";
    numberElement.value = "";
}

function calcPostageFromPrchase() {
    const sum = subtotal()
    if (sum == 0 || sum >= 3000) {
        postage = 0;
    }else if (sum < 2000) {
        postage = 500;
    }else{
        postage = 250;
    };
    return postage;
}
