
let productData;
fetch("http://localhost:3000/Products")
  .then((res) => res.json())
  .then((d) => {
    productData=d
    appendData(productData);
  });

  function appendData(productData) {
     console.log(productData);
      document.querySelector(".mensProducts").innerHTML=null;
      let displayData = productData;
      displayData.map((item, ind) => {
        const mainDiv = document.createElement("div");
        mainDiv.setAttribute("class", "productMainDiv");
        const imageDiv = document.createElement("img");
        imageDiv.setAttribute("class", "mensProductImages");
        imageDiv.src = item.images.image1;
        imageDiv.addEventListener("click", function () {
        //   window.location.href = "productdescription.html";
        console.log("clicked");
        });

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

        // let heartpresence = JSON.parse(localStorage.getItem("hearticon"));
        // const wishlistBtn = document.createElement("button");
        // wishlistBtn.setAttribute("class", "wishlistBtn");
        // const heartIcon = document.createElement("i");
        // const btnName = document.createElement("span");
        // if (heartpresence && heartpresence[item.id] === true) {
        //   heartIcon.setAttribute("class", "fa-solid fa-heart");
        //   btnName.innerText = "WISHLISTED";
        // } else {
        //   heartIcon.setAttribute("class", "fa-regular fa-heart");
        //   btnName.innerText = "WISHLIST";
        // }
        // heartIcon.style.color = "#e73a6a";
        // heartIcon.style.marginRight = "10px";
        // wishlistBtn.addEventListener("click", function () {
        //   heartIcon.setAttribute("class", "fa-solid fa-heart");
        //   btnName.innerText = "WISHLISTED";
        //   let heartData = JSON.parse(localStorage.getItem("hearticon"));
        //   let wishlistedItems = JSON.parse(
        //     localStorage.getItem("wishlistedItems")
        //   );
        //   if (!heartData) {
        //     let initId = {};
        //     initId[item.id] = true;
        //     localStorage.setItem("hearticon", JSON.stringify(initId));
        //     localStorage.setItem("wishlistedItems", JSON.stringify([item]));
        //   } else {
        //     heartData[item.id] = true;
        //     localStorage.setItem("hearticon", JSON.stringify(heartData));
        //     console.log(wishlistedItems, "wish");
        //     wishlistedItems.push(item);
        //     console.log(wishlistedItems, "after wish");
        //     localStorage.setItem(
        //       "wishlistedItems",
        //       JSON.stringify(wishlistedItems)
        //     );
        //   }
        //   heartIcon.style.color = "#e73a6a";
        // });
        // wishlistBtn.append(heartIcon, btnName);

        const detailsDiv = document.createElement("div");
        detailsDiv.setAttribute("class", "mensDetailsDiv");
        const brand = document.createElement("p");
        brand.setAttribute("class", "mensBrand");
        brand.innerText = item.brand;

        // const title = document.createElement("p");
        // title.setAttribute("class", "mensTitle");
        // if (item.sub_heading.length > 30) {
        //   let subHeading = item.sub_heading.substring(0, 30);
        //   title.innerText = subHeading + "...";
        // } else {
        //   title.innerText = item.sub_heading;
        // }

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
        detailsDiv.append(brand,priceCont);
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

        // mainDiv.addEventListener("click", function () {
        //   localStorage.setItem("product", JSON.stringify([item]));
        // });

        const mensProducts = document.querySelector(".mensProducts");

        mensProducts.append(mainDiv);
      });
  }
