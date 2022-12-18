let productData;
document.querySelector("#sortDiv").addEventListener("change",sortData);
fetch("http://localhost:3000/Products")
  .then((res) => res.json())
  .then((d) => {
    productData = d;
    appendData(productData);
  });

function appendData(productData) {
  document.querySelector("#totalProducts").innerText = productData.length+" Items";
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

    const category = document.createElement("p");
    category.setAttribute("class", "mensCategory");
    category.innerText = item.categories;

    const priceCont = document.createElement("p");
    priceCont.setAttribute("class", "mensPriceCont");
    const discPricePera = document.createElement("span");
    discPricePera.innerText = "Rs. " + item.price;

    const pricePeraCont = document.createElement("span");
    const pricePeraStrike = document.createElement("S");
    pricePeraStrike.innerText = "Rs. " + item.off_price;
    pricePeraCont.style.marginLeft = "5px";

    const priceOffCont = document.createElement("span");
    priceOffCont.innerText = `(${item.discount}% OFF)`;
    priceOffCont.style.marginLeft = "5px";

    pricePeraCont.append(pricePeraStrike);
    priceCont.append(discPricePera, pricePeraCont, priceOffCont);
    detailsDiv.append(brand, category,priceCont);
    detailsDiv.addEventListener("click", function () {
      window.location.href = "productdescription.html";
    });
    mainDiv.append(imageDiv, ratingDiv, detailsDiv);

    mainDiv.addEventListener("mouseover", (event) => {
      mainDiv.innerHTML = null;
      detailsDiv.style.position = "relative";
      detailsDiv.style.top = "8px";
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

function individualProduct(item) {
  localStorage.setItem("individualProduct", JSON.stringify(item));
  window.location.href = "./singleprod.html";
}

function sortData(){
  let value=document.querySelector("#sortDiv").value;
  console.log(value);
  if(value=="lth"){
    let sortedData = productData.sort((a, b) => +a.price - +b.price);
    appendData(sortedData);
  }
  if (value == "htl") {
    let sortedData = productData.sort((a, b) => +b.price - +a.price);
    appendData(sortedData);
  }
  
}

  // filter 
  const FilterInputs=document.querySelectorAll('.filterInputs');

  FilterInputs.forEach((item,ind)=>{
   FilterInputs[ind].addEventListener('click',handleClick);
  })

  function handleClick(e){
        let inputName=e.target.name;
        filterData(inputName)
   }

   const filterData=(name)=>{
    let tempData=productData;
        if(name==="tshirt" || name==="Lounge Tshirt"){
          let filterData=tempData.filter((item)=>{
            return item.categories===name;
          })       
          console.log(filterData);
          appendData(filterData);
        }
        else if(name==="Roadster" || name==="Levis" || name==="WROGN"|| name.slice(0,3)==="HRX" || name==="Puma" || name==="Moda Rapido" || name==="Jack & Jones" || name==="Rigo"){
          let filterData=tempData.filter((item)=>{
            return item.brand===name;
          })       
          appendData(filterData);
        }
        else if(name.slice(0,5)==="price") {

          if (name === "price1") {
            priceFilter(tempData, 134, 2348);
          } else if (name === "price2") {
            priceFilter(tempData, 2348, 4568);
          } else if (name === "price3") {
            priceFilter(tempData, 4568, 6776);
          } else if (name === "price4") {
            priceFilter(tempData, 6776, 8990);
          } else if (name === "price4") {
            priceFilter(tempData, 6776, 8990);
          } else if (name === "price5") {
            priceFilter(tempData, 0, 100);
          }
        }
   }

   function priceFilter(data, startPrice, endPrice) {
     let filterData = data.filter((item) => {
       return item.off_price >= startPrice && item.off_price <= endPrice;
     });

     if (filterData.length === 0) {
       alert(
         "Product is not available in this range, Please try other price ranges."
       );
     } else {
       appendData(filterData);
     }
   } 


