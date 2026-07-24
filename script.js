    location.reload();

  } catch (e) {

    alert("فشل تسجيل الدخول");

    console.log(e);

  }

};

window.addProduct = async function () {

  const name = document.getElementById("name").value;
  const price = document.getElementById("price").value;
  const description = document.getElementById("description").value;

  const username = localStorage.getItem("username") || "مستخدم";

  if (!name || !price || !description) {
    alert("يرجى تعبئة جميع الحقول");
    return;
  }

  try {

    await addDoc(collection(db, "products"), {
      name: name,
      price: Number(price),
      description: description,
      seller: username,
      createdAt: Date.now()
    });

    alert("تم نشر الإعلان بنجاح ✅");

    location.href = "buy.html";

  } catch (e) {

    console.log(e);

    alert("حدث خطأ أثناء النشر");

  }
  
