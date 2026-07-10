if (typeof Pi !== "undefined") {
  Pi.init({ version: "2.0" });
}

function addProduct() {
  let name = document.getElementById("name").value;
  let price = document.getElementById("price").value;
  let description = document.getElementById("description").value;

  if (!name || !price || !description) {
    alert("أكمل بيانات المنتج");
    return;
  }

  let products = JSON.parse(localStorage.getItem("products")) || [];

  products.push({
    name: name,
    price: price,
    description: description,
    seller: localStorage.getItem("username") || "مستخدم"
  });

  localStorage.setItem("products", JSON.stringify(products));

  alert("تم نشر المنتج");
  window.location.href = "buy.html";
}

window.onload = function () {
  let productsBox = document.getElementById("products");

  if (productsBox) {
    let products = JSON.parse(localStorage.getItem("products")) || "";

    products.forEach(function(product) {
      productsBox.innerHTML += `
        <div class="product">
          <h3>${product.name}</h3>
          <p>السعر: ${product.price} Pi</p>
          <p>${product.description}</p>
          <p>البائع: ${product.seller}</p>
        </div>
      `;
    });
  }
};

function loginWithPi() {
  Pi.authenticate(
    ["username"],
    function(auth) {
      localStorage.setItem("username", auth.user.username);
      alert("تم تسجيل الدخول: " + auth.user.username);
      location.reload();
    },
    function(error) {
      console.log(error);
      alert("فشل تسجيل الدخول");
    }
  );
}