let items = {
    cart: [],
};

function add_item(){
    let input_item = document.getElementById("add_item").value;
    let input_price = Number(document.getElementById("add_price").value);
    //alert(input_item + input_price);
    items.cart.push({item: input_item, price: input_price});
    showcart();
    localStorage.setItem("items", JSON.stringify(items));
}

function showcart(){
    let x = document.getElementById("items_in_cart");
    let current = "";
    if (items.cart == ""){
       x.innerHTML = "<b>No items in cart!</b>";     
    }else{
        items.cart.forEach(function(show_item){
            current += "<b>Item: </b>" +  show_item.item + "<b> Price: </b>" +  show_item.price + "<hr>";
    });
        x.innerHTML = current;
        document.getElementById("add_item").value = "";
        document.getElementById("add_price").value = "";
}
}
showcart();