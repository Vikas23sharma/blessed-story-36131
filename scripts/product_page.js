let productData;
fetch("http://localhost:3000/Products")
  .then((res) => res.json())
  .then((d) => {
    productData = d;
    appendData(productData);
  });

function appendData(productData) {
  console.log(productData);
  document.querySelector(".mensProducts").innerHTML = null;
  let displayData = productData;
  displayData.map((item, ind) => {
    const mainDiv = document.createElement("div");
    mainDiv.setAttribute("class", "productMainDiv");
    mainDiv.addEventListener("click", function () {
      individualProduct(item);
    });
    const imageDiv = document.createElement("img");
    imageDiv.setAttribute("class", "mensProductImages");
    imageDiv.src = item.images.image1;

    const ratingDiv = document.createElement("div");
    ratingDiv.setAttribute("class", "ratingDiv");
    const ratingPera = document.createElement("span");
    ratingPera.innerText = item.rating;
    ratingPera.style.marginLeft = "5px";
    ratingPera.style.marginTop = "20px";
    const ratingStar = document.createElement("span");
    ratingStar.setAttribute("class", "fa fa-star checked");
    const partitionPipe = document.createElement("span");
    partitionPipe.innerText = " |  ";
    partitionPipe.style.marginRight = "5px";
    const reviewCount = document.createElement("span");
    reviewCount.innerText = item.count;
    ratingDiv.append(ratingPera, ratingStar, partitionPipe, reviewCount);

    const detailsDiv = document.createElement("div");
    detailsDiv.setAttribute("class", "mensDetailsDiv");
    const brand = document.createElement("p");
    brand.setAttribute("class", "mensBrand");
    brand.innerText = item.brand;

    const priceCont = document.createElement("p");
    priceCont.setAttribute("class", "mensPriceCont");
    const discPricePera = document.createElement("span");
    discPricePera.innerText = "Rs. " + item.discount;

    const pricePeraCont = document.createElement("span");
    const pricePeraStrike = document.createElement("S");
    pricePeraStrike.innerText = "Rs. " + item.price;
    pricePeraCont.style.marginLeft = "5px";

    const priceOffCont = document.createElement("span");
    priceOffCont.innerText = `(${item.off_price}% OFF)`;
    priceOffCont.style.marginLeft = "5px";

    pricePeraCont.append(pricePeraStrike);
    priceCont.append(discPricePera, pricePeraCont, priceOffCont);
    detailsDiv.append(brand, priceCont);
    detailsDiv.addEventListener("click", function () {
      window.location.href = "productdescription.html";
    });
    mainDiv.append(imageDiv, ratingDiv, detailsDiv);

    mainDiv.addEventListener("mouseover", (event) => {
      mainDiv.innerHTML = null;
      detailsDiv.style.position = "relative";
      detailsDiv.style.top = "-8px";
      mainDiv.append(imageDiv, detailsDiv);
    });

    mainDiv.addEventListener("mouseout", (event) => {
      mainDiv.innerHTML = null;
      detailsDiv.style.position = "relative";
      detailsDiv.style.top = "0px";
      mainDiv.append(imageDiv, ratingDiv, detailsDiv);
    });

    const mensProducts = document.querySelector(".mensProducts");

    mensProducts.append(mainDiv);
  });
}

let prodArr = [];

function individualProduct(item) {
  prodArr.push(item);
  localStorage.setItem("individualProduct", JSON.stringify(prodArr));
  window.location.href = "./singleprod.html";
}
