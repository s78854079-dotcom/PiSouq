function addProduct() {

    let name = document.getElementById("name").value;
    let price = document.getElementById("price").value;
    let description = document.getElementById("description").value;


    let product = {
        name: name,
        price: price,
        description: description
    };


    let products = JSON.parse(localStorage.getItem("products")) || [];


    products.push(product);


    localStorage.setItem("products", JSON.stringify(products));


    alert("تم نشر الإعلان بنجاح");


    window.location.href = "buy.html";

}
