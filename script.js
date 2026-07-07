function addProduct() {

    let name = document.getElementById("name").value;
    let price = document.getElementById("price").value;
    let description = document.getElementById("description").value;

    let imageInput = document.getElementById("image");

    let image = "";

    if (imageInput.files.length > 0) {
        let reader = new FileReader();

        reader.onload = function () {

            image = reader.result;

            saveProduct(name, price, description, image);

        };

        reader.readAsDataURL(imageInput.files[0]);

    } else {

        saveProduct(name, price, description, image);

    }

}


function saveProduct(name, price, description, image) {

    let product = {
        name: name,
        price: price,
        description: description,
        image: image
    };


    let products = JSON.parse(localStorage.getItem("products")) || [];


    products.push(product);


    localStorage.setItem("products", JSON.stringify(products));


    alert("تم نشر الإعلان بنجاح");


    window.location.href = "buy.html";

}
