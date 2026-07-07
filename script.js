document.addEventListener("DOMContentLoaded", function () {

    const publishButton = document.querySelector("button");

    if (publishButton && document.title.includes("بيع")) {

        publishButton.addEventListener("click", function () {

            let name = document.querySelector('input[type="text"]').value;
            let price = document.querySelector('input[type="number"]').value;
            let description = document.querySelector("textarea").value;

            let product = {
                name: name,
                price: price,
                description: description
            };

            let products = JSON.parse(localStorage.getItem("products")) || [];

            products.push(product);

            localStorage.setItem("products", JSON.stringify(products));

            alert("تم نشر الإعلان بنجاح");

        });

    }

});
