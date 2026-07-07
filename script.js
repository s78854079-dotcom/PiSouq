function addProduct() {

    let username = localStorage.getItem("username") || "زائر";

    let name = document.getElementById("name").value;
    let price = document.getElementById("price").value;
    let description = document.getElementById("description").value;

    let imageInput = document.getElementById("image");

    if (name === "" || price === "" || description === "") {
        alert("يرجى تعبئة جميع البيانات");
        return;
    }

    if (imageInput.files.length > 0) {

        let reader = new FileReader();

        reader.onload = function () {

            saveProduct(
                username,
                name,
                price,
                description,
                reader.result
            );

        };

        reader.readAsDataURL(imageInput.files[0]);

    } else {

        saveProduct(
            username,
            name,
            price,
            description,
            ""
        );

    }

}


function saveProduct(username, name, price, description, image) {

    let product = {
        username: username,
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
