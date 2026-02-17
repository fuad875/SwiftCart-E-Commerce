const loadProducts= () =>{
 const url ="https://fakestoreapi.com/products";
  fetch(url)
 .then(res =>res.json())
 .then(data => displayProducts(data));

};

const displayProducts= (products)=>{

    const levelContainer = document.getElementById("product-container");
    levelContainer.innerHTML = " ";

   for(let product of products ){
    const cartDiv = document.createElement("div");
    cartDiv.innerHTML = `
    
          <div class="bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
              <img src="${product.image}"
                   class="h-48 w-full object-contain mb-4">

              <h3 class="font-semibold mb-2 line-clamp-1">
                ${product.title}
              </h3>

              <p class="text-blue-600 font-bold mb-3">
                $${product.price}
              </p>

              <div class="flex justify-between">
                <button class="btn btn-sm btn-outline">
                  <i class="fa-regular fa-eye"></i>
                  Details
                </button>
                <button class="btn btn-sm btn-primary">
                  <i class="fa-solid fa-cart-arrow-down"></i>
                  Add
                </button>
              </div>
            </div>

    
    `
    levelContainer.append(cartDiv);
   }
}

loadProducts();